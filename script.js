/* script.js */

// ============================================================
// 1. GLOBAL CONSTANTS & CONFIG
// ============================================================
const INITIAL_RATING = 100;
const K_FACTOR_STAGES = { 1: 30, 2: 26, 3: 22, 4: 18, 5: 14, default: 10 };

let chartRefs = {};

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================
function getKFactor(matchesCount) {
    return K_FACTOR_STAGES[matchesCount] || K_FACTOR_STAGES.default;
}

function updateLayout() {
    const nav = document.getElementById('mainNav');
    if (!nav) return;
    const height = nav.offsetHeight;
    document.documentElement.style.setProperty('--header-offset', height + 'px');

    const container = document.getElementById('mainContainer') || document.querySelector('.container');
    if (container) {
        document.body.style.paddingTop = height + 'px';
    }
}

window.addEventListener('load', updateLayout);
window.addEventListener('resize', updateLayout);

// ============================================================
// 3. CORE DATA ENGINE
// ============================================================

// Helper to determine if a match is played or future
function isPlayedMatch(m) {
    const scoreA = parseInt(m.score_a) || 0;
    const scoreB = parseInt(m.score_b) || 0;
    // Condition: Score is 0-0 and names indicate WO -> Future/Unplayed
    if (scoreA === 0 && scoreB === 0 && m.player_a === 'WO' && m.player_b === 'WO') {
        return false;
    }
    return true;
}

function processData() {
    const players = {};
    const roundsSet = new Set();
    const upsetsList = [];
    let totalSets = 0;

    // We only process PLAYED matches for ratings and stats
    const playedMatches = matchResults.filter(isPlayedMatch);

    // Find the latest played round name
    const latestRoundName = playedMatches.length > 0 ? playedMatches[playedMatches.length - 1].round : "";

    const initPlayer = (nameRaw, teamName) => {
        const name = nameRaw.trim();
        // Skip creating player for WO
        if (name === 'WO') return null;

        if (!players[name]) {
            players[name] = {
                name: name, rating: INITIAL_RATING,
                matches: 0, wins: 0, losses: 0,
                setsWin: 0, setsLose: 0,
                dMatches: 0, dWins: 0, dLosses: 0, dSetsWin: 0, dSetsLose: 0,
                maxRating: INITIAL_RATING, minRating: INITIAL_RATING,
                team: teamName || 'N/A', lastPlayed: 'N/A', roundGain: 0,
                bestWinOpponent: null, bestWinRating: -Infinity,
                worstLossOpponent: null, worstLossRating: Infinity,
                history: {}, matchDetails: []
            };
        }
        if (teamName) players[name].team = teamName;
        return players[name];
    };

    playedMatches.forEach(match => {
        roundsSet.add(match.round);
        const scoreA = parseInt(match.score_a);
        const scoreB = parseInt(match.score_b);
        totalSets += (scoreA + scoreB);

        const isDoubles = match.doubles === true || match.doubles === "true";
        const isLatestRound = match.round === latestRoundName;

        const pNamesA = match.player_a.split('/').map(n => n.trim());
        const pNamesB = match.player_b.split('/').map(n => n.trim());

        // If any player is WO, do not process for ratings
        if (pNamesA.includes('WO') || pNamesB.includes('WO')) return;

        pNamesA.forEach(n => initPlayer(n, match.player_a_team));
        pNamesB.forEach(n => initPlayer(n, match.player_b_team));

        const getR = (name) => players[name].rating;
        const getK = (name) => getKFactor(players[name].matches + players[name].dMatches + 1);

        let Ra, Rb, Ka, Kb;

        if (isDoubles) {
            Ra = (getR(pNamesA[0]) + (pNamesA[1] ? getR(pNamesA[1]) : getR(pNamesA[0]))) / 2;
            Rb = (getR(pNamesB[0]) + (pNamesB[1] ? getR(pNamesB[1]) : getR(pNamesB[0]))) / 2;
            Ka = (getK(pNamesA[0]) + (pNamesA[1] ? getK(pNamesA[1]) : getK(pNamesA[0]))) / 2;
            Kb = (getK(pNamesB[0]) + (pNamesB[1] ? getK(pNamesB[1]) : getK(pNamesB[0]))) / 2;
            pNamesA.forEach(n => { players[n].dMatches++; players[n].lastPlayed = match.round; });
            pNamesB.forEach(n => { players[n].dMatches++; players[n].lastPlayed = match.round; });
        } else {
            Ra = getR(pNamesA[0]); Rb = getR(pNamesB[0]);
            Ka = getK(pNamesA[0]); Kb = getK(pNamesB[0]);
            pNamesA.forEach(n => { players[n].matches++; players[n].lastPlayed = match.round; });
            pNamesB.forEach(n => { players[n].matches++; players[n].lastPlayed = match.round; });
        }

        const N = scoreA + scoreB;
        const Ea = N / (1 + Math.pow(10, (Rb - Ra) / 300));
        const Eb = N / (1 + Math.pow(10, (Ra - Rb) / 300));

        let pairDeltaA = Ka * (scoreA - Ea);
        let pairDeltaB = Kb * (scoreB - Eb);
        let deltaA = isDoubles ? pairDeltaA / 2 : pairDeltaA;
        let deltaB = isDoubles ? pairDeltaB / 2 : pairDeltaB;

        if (isLatestRound && !isDoubles) {
            // Filter out WO matches for upsets
            if (match.player_a !== 'WO' && match.player_b !== 'WO') {
                if (scoreA > scoreB && Rb > Ra) {
                    upsetsList.push({ winner: pNamesA[0], wTeam: match.player_a_team, wRate: Ra, loser: pNamesB[0], lTeam: match.player_b_team, lRate: Rb, score: `${scoreA}:${scoreB}`, diff: Rb - Ra });
                } else if (scoreB > scoreA && Ra > Rb) {
                    upsetsList.push({ winner: pNamesB[0], wTeam: match.player_b_team, wRate: Rb, loser: pNamesA[0], lTeam: match.player_a_team, lRate: Ra, score: `${scoreB}:${scoreA}`, diff: Ra - Rb });
                }
            }
        }

        const updateSide = (pNames, scoreOwn, scoreOpp, deltaOwn, deltaOpp, oppNames, oppTeam) => {
            pNames.forEach(name => {
                const p = players[name];
                if (isDoubles) {
                    p.dSetsWin += scoreOwn; p.dSetsLose += scoreOpp;
                    if (scoreOwn > scoreOpp) p.dWins++; else if (scoreOpp > scoreOwn) p.dLosses++;
                } else {
                    p.setsWin += scoreOwn; p.setsLose += scoreOpp;
                    if (scoreOwn > scoreOpp) p.wins++; else if (scoreOpp > scoreOwn) p.losses++;
                    const oppRating = isDoubles ? 0 : players[oppNames[0]].rating;
                    if (scoreOwn > scoreOpp && oppRating > p.bestWinRating) { p.bestWinOpponent = oppNames[0]; p.bestWinRating = oppRating; }
                    else if (scoreOpp > scoreOwn && oppRating < p.worstLossRating) { p.worstLossOpponent = oppNames[0]; p.worstLossRating = oppRating; }
                }
                p.rating += deltaOwn;
                if(isLatestRound) p.roundGain += deltaOwn;

                // Use Date for history if available, else Round Name
                const historyKey = match.round;
                p.history[historyKey] = p.rating;

                p.maxRating = Math.max(p.rating, p.maxRating);
                p.minRating = Math.min(p.rating, p.minRating);

                const opponentName = oppNames.join(' / ');
                const oppRatingAfter = isDoubles ? 0 : (players[oppNames[0]].rating + deltaOpp);

                p.matchDetails.push({
                    date: match.date || match.round, // Use real date if available
                    round: match.round,
                    opponent: opponentName, opponent_team: oppTeam,
                    score_own: scoreOwn, score_opp: scoreOpp,
                    rating_after: p.rating, opp_rating_after: oppRatingAfter,
                    delta_own: deltaOwn, delta_opp: deltaOpp, isDoubles: isDoubles,
                    own_name_display: pNames.join(' / ')
                });
            });
        };

        updateSide(pNamesA, scoreA, scoreB, deltaA, deltaB, pNamesB, match.player_b_team);
        updateSide(pNamesB, scoreB, scoreA, deltaB, deltaA, pNamesA, match.player_a_team);
    });

    return { players, roundsSet, totalSets, latestRoundName, upsetsList };
}

// ============================================================
// 4. PAGE RENDERERS
// ============================================================

// --- HOME PAGE ---
function renderHomePage() {
    const { players, roundsSet, totalSets, latestRoundName, upsetsList } = processData();
    const playedMatches = matchResults.filter(isPlayedMatch);

    // Stats
    const uniqueTeamMatches = new Set(playedMatches.map(m => `${m.round}_${m.player_a_team}_${m.player_b_team}`));
    document.getElementById('totalRounds').innerText = roundsSet.size;
    document.getElementById('totalTeamMatches').innerText = uniqueTeamMatches.size;
    document.getElementById('totalMatches').innerText = playedMatches.length;
    document.getElementById('totalSets').innerText = totalSets;
    document.getElementById('latestRoundTitle').innerText = latestRoundName || "Zatiaľ žiadne zápasy";

    // Top Gainers
    const top5 = Object.values(players).sort((a, b) => b.roundGain - a.roundGain).slice(0, 5);
    const gainList = document.getElementById('topGainersList');
    top5.forEach((p, index) => {
        if (p.roundGain <= 0) return;
        const li = document.createElement('li'); li.className = 'top-player-row';
        li.innerHTML = `<div class="tp-rank">${index + 1}</div><div class="tp-name">${p.name} <span class="tp-team">(${p.team})</span></div><div class="tp-gain">+${p.roundGain.toFixed(1)}</div>`;
        gainList.appendChild(li);
    });

    // Upsets
    const upsetDiv = document.getElementById('upsetContainer');
    upsetsList.sort((a, b) => b.diff - a.diff);
    if (upsetsList.length > 0) {
        let html = '';
        upsetsList.slice(0, 5).forEach(u => {
            html += `<div class="upset-card"><div class="upset-label">(Rating rozdiel ${Math.round(u.diff)})</div>
                <div class="upset-match"><div class="upset-player">${u.winner}<div class="upset-team">${u.wTeam}</div><span class="upset-rating">${u.wRate.toFixed(0)}</span></div>
                <div class="upset-score">${u.score}</div>
                <div class="upset-player">${u.loser}<div class="upset-team">${u.lTeam}</div><span class="upset-rating">${u.lRate.toFixed(0)}</span></div></div></div>`;
        });
        upsetDiv.innerHTML = html;
    } else { upsetDiv.innerHTML = `<div style="text-align:center; color:#999;">Žiadne prekvapenia v tomto kole.</div>`; }

    // Latest Results (Now "Current Round")
    if (latestRoundName) {
        const currentRoundMatches = matchResults.filter(m => m.round === latestRoundName);
        renderMatchList(currentRoundMatches, document.getElementById('latestRoundContainer'), false);
        
        // Force update the title explicitly to "Aktuálne Kolo: [round]"
        const currentTitle = document.getElementById('latestRoundTitle');
        if (currentTitle) currentTitle.innerText = `Aktuálne Kolo: ${latestRoundName}`;

        // Previous Round Logic
        // Find unique rounds in order of appearance (assuming chronological in JSON)
        const allRounds = [...new Set(matchResults.filter(isPlayedMatch).map(m => m.round))];
        const currentIndex = allRounds.indexOf(latestRoundName);
        
        if (currentIndex > 0) {
            const prevRoundName = allRounds[currentIndex - 1];
            const prevRoundMatches = matchResults.filter(m => m.round === prevRoundName);
            
            document.getElementById('prevRoundTitle').innerText = prevRoundName;
            renderMatchList(prevRoundMatches, document.getElementById('prevRoundContainer'), false);
        } else {
            // Hide previous round section if there is no previous round
            const prevHeader = document.getElementById('prevRoundTitle').parentElement;
            if(prevHeader) prevHeader.style.display = 'none';
        }
    }

    // --- UPCOMING MATCHES LOGIC ---
    const upcomingContainer = document.getElementById('upcomingMatchesContainer');
    if (!upcomingContainer) return;

    // Filter FUTURE matches - only from SUBSEQUENT rounds
    const futureMatches = matchResults.filter(m => !isPlayedMatch(m) && m.round !== latestRoundName);

    if (futureMatches.length > 0) {
        // Find the "Next" round (first unique round name in future matches)
        // Use Set to maintain order and find first unique round
        const uniqueFutureRounds = [...new Set(futureMatches.map(m => m.round))];
        // The first one in the list (chronologically) should be the next round
        const nextRoundName = uniqueFutureRounds[0];
        const nextRoundMatches = futureMatches.filter(m => m.round === nextRoundName);

        // Update Title to be specific
        const titleSpan = document.getElementById('nextRoundTitle');
        if (titleSpan && titleSpan.parentElement) {
             // Replace the entire H2 content to match user preference
             titleSpan.parentElement.innerText = `Zápasy nasledujúceho kola: ${nextRoundName}`;
        }

        const listDiv = document.getElementById('upcomingList');
        listDiv.innerHTML = ''; 
        listDiv.removeAttribute('class'); // Remove grid layout class
        
        renderMatchList(nextRoundMatches, listDiv, false);
        
        upcomingContainer.style.display = 'block';
    } else {
        upcomingContainer.style.display = 'none';
    }
}

// --- RESULTS PAGE ---
function renderResultsPage() {
    const rounds = {};
    // Group by ROUND, only PLAYED matches
    matchResults.filter(isPlayedMatch).forEach(m => {
        if (!rounds[m.round]) rounds[m.round] = [];
        rounds[m.round].push(m);
    });

    const container = document.getElementById('resultsContainer');
    // Render in order of appearance
    const uniqueRounds = [...new Set(matchResults.filter(isPlayedMatch).map(m => m.round))];

    uniqueRounds.forEach(roundName => {
        const roundWrapper = document.createElement('div');
        roundWrapper.className = 'round-group';
        const header = document.createElement('div'); header.className = 'round-header'; header.innerText = roundName;
        roundWrapper.appendChild(header);
        renderMatchList(rounds[roundName], roundWrapper, true);
        container.appendChild(roundWrapper);
    });
}

// Shared Helper for List
function renderMatchList(matches, container, appendToProvided) {
    const teamMatches = {};
    matches.forEach(m => {
        const key = `${m.player_a_team}::${m.player_b_team}`;
        if (!teamMatches[key]) teamMatches[key] = { 
            teamA: m.player_a_team, 
            teamB: m.player_b_team, 
            scoreA: 0, 
            scoreB: 0, 
            games: [],
            date: m.date,
            location: m.location
        };
        
        if (isPlayedMatch(m)) {
            const sA = parseInt(m.score_a); const sB = parseInt(m.score_b);
            if (sA > sB) teamMatches[key].scoreA++; if (sB > sA) teamMatches[key].scoreB++;
        }
        teamMatches[key].games.push(m);
    });

    const wrapper = appendToProvided ? container : document.createElement('div');
    if (!appendToProvided) wrapper.className = 'round-group';

    Object.values(teamMatches).forEach(match => {
        const matchRow = document.createElement('div'); matchRow.className = 'match-row';
        
        // Check if played (at least one game is played)
        const isPlayed = match.games.some(isPlayedMatch);

        if (isPlayed) {
            const summary = document.createElement('div'); summary.className = 'match-summary';
            summary.innerHTML = `<div class="team-name team-left">${match.teamA}</div><div class="score-badge">${match.scoreA}-${match.scoreB}</div><div class="team-name team-right">${match.teamB}</div><div class="expand-icon">▼</div>`;
            const details = document.createElement('div'); details.className = 'match-details';
    
            let gamesHtml = '';
            match.games.filter(isPlayedMatch).sort((a,b)=>(b.doubles?1:0)-(a.doubles?1:0)).forEach(g => {
                const sA = parseInt(g.score_a); const sB = parseInt(g.score_b);
                gamesHtml += `<div class="game-row">${(g.doubles===true||g.doubles==="true")?'<div class="doubles-badge">ŠTVORHRA</div>':''}
                    <div class="game-names"><div class="player-left">${g.player_a}</div><div class="game-score ${sA>sB?'win-left':(sB>sA?'win-right':'')}">${sA}:${sB}</div><div class="player-right">${g.player_b}</div></div></div>`;
            });
            details.innerHTML = gamesHtml;
    
            summary.onclick = () => { const isEx = details.style.display === 'block'; details.style.display = isEx ? 'none' : 'block'; matchRow.classList.toggle('active', !isEx); };
            matchRow.appendChild(summary); matchRow.appendChild(details); 
        } else {
            // Unplayed View
            const summary = document.createElement('div'); summary.className = 'match-summary';
            
            const dateStr = match.date ? match.date : '';
            const locStr = match.location ? match.location : '';
            const metaHtml = (dateStr || locStr) ? `<div style="font-size:0.75em; color:#666; margin-top:6px;">${dateStr}${dateStr && locStr ? ' | ' : ''}${locStr}</div>` : '';

            summary.innerHTML = `
                <div style="width:100%; text-align:center;">
                    <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
                        <div class="team-name team-left">${match.teamA}</div>
                        <div class="score-badge" style="background:#e0e0e0; color:#555; font-size:0.9em; min-width:40px;">VS</div>
                        <div class="team-name team-right">${match.teamB}</div>
                    </div>
                    ${metaHtml}
                </div>`;
            matchRow.appendChild(summary);
        }
        wrapper.appendChild(matchRow);
    });
    if (!appendToProvided) container.appendChild(wrapper);
}

// --- RATING PAGE ---
function renderRatingPage() {
    const { players } = processData();
    const sortedPlayers = Object.values(players).sort((a, b) => b.rating - a.rating);
    let selectedTeams = [];

    const tbody = document.getElementById('mainTableBody');
    const renderTable = () => {
        tbody.innerHTML = '';
        sortedPlayers.forEach((p, index) => {
            if (selectedTeams.length > 0 && !selectedTeams.includes(p.team)) return;
            const tr = document.createElement('tr');
            if (p.team === 'COKERY') tr.classList.add('team-cokery');
            if (p.team === 'ASTORIA FIT') tr.classList.add('team-astoria');
            tr.onclick = () => { if (window.getSelection().toString().length === 0) openPlayerModal(p); };

            const successMatches = p.matches > 0 ? ((p.wins / p.matches) * 100).toFixed(2) : 0;
            const totalSets = p.setsWin + p.setsLose;
            const successSets = totalSets > 0 ? ((p.setsWin / totalSets) * 100).toFixed(2) : 0;
            const bestWinStr = p.bestWinOpponent ? `${p.bestWinOpponent} (${p.bestWinRating.toFixed(2)})` : '';

            let ratingClass = 'rating-high';
            if (p.matches + p.dMatches <= 10) ratingClass = 'rating-low';
            else if (p.matches + p.dMatches <= 20) ratingClass = 'rating-med';

            tr.innerHTML = `
                <td>${index + 1}</td><td>${p.name}</td><td>${p.team}</td>
                <td class="${ratingClass}">${p.rating.toFixed(2)}</td>
                <td class="border-left-thick">${p.matches}</td><td>${p.wins}</td><td>${p.losses}</td>
                <td>${p.setsWin}:${p.setsLose}</td><td>${successMatches}</td><td>${successSets}</td>
                <td class="border-left-thick">${p.dMatches}</td><td>${p.dWins}</td><td>${p.dLosses}</td>
                <td class="border-left-thick">${bestWinStr}</td><td>${p.lastPlayed}</td>
                <td>${p.maxRating.toFixed(2)}</td><td>${p.minRating.toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });
    };

    window.toggleTeamDropdown = (e) => {
        e.stopPropagation();
        const btn = e.currentTarget || e.target;
        const wrapper = btn.closest('.team-filter-wrapper');
        const dropdown = wrapper ? wrapper.querySelector('.team-filter-dropdown') : document.getElementById('teamDropdown');
        if (!dropdown) return;
        const isVisible = dropdown.classList.contains('show');
        document.querySelectorAll('.team-filter-dropdown').forEach(dd => dd.classList.remove('show'));
        dropdown.classList.toggle('show', !isVisible);
    };
    window.addEventListener('click', (e) => {
        if (!e.target.matches('.team-filter-btn') && !e.target.closest('.team-filter-dropdown')) {
            document.querySelectorAll('.team-filter-dropdown').forEach(dd => dd.classList.remove('show'));
        }
    });

    // Init floating sticky header
    const wrapper = document.getElementById('mainTableWrapper');
    const table = document.getElementById('mainTable');
    if (wrapper && table) {
        const thead = table.querySelector('thead');
        let stickyContainer = document.getElementById('stickyHeaderContainer');
        
        // Remove existing if any (to prevent duplicates on re-render)
        if (stickyContainer) stickyContainer.remove();
        
        stickyContainer = document.createElement('div');
        stickyContainer.id = 'stickyHeaderContainer';
        const stickyTable = document.createElement('table');
        stickyContainer.appendChild(stickyTable);
        document.body.appendChild(stickyContainer);

        // Clone header immediately
        stickyTable.appendChild(thead.cloneNode(true));
        stickyTable.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));

        const updateWidths = () => {
            const origThs = Array.from(thead.querySelectorAll('th'));
            const cloneThs = Array.from(stickyTable.querySelectorAll('th'));
            const tableRect = table.getBoundingClientRect();
            
            // 1. Update Table Width
            stickyTable.style.width = tableRect.width + 'px';
            stickyTable.style.minWidth = tableRect.width + 'px';
            stickyTable.style.maxWidth = tableRect.width + 'px';

            // 2. Calculate Column Widths from Tbody (most accurate)
            const tbody = table.querySelector('tbody');
            let colWidths = [];
            const firstRow = tbody ? tbody.querySelector('tr') : null;
            if (firstRow) {
                colWidths = Array.from(firstRow.children).map(td => td.getBoundingClientRect().width);
            } else {
                // Fallback to header bottom row if body empty (unlikely)
                // This fallback is complex due to colspan, skipping for now as body is populated
            }

            // 3. Update CSS Variable for Sticky Offsets (Col 1 width)
            if (colWidths.length > 0) {
                const col1W = colWidths[0];
                document.documentElement.style.setProperty('--col-1-width', col1W + 'px');
            }

            // 4. Build/Update Colgroup for Sticky Table
            let colgroup = stickyTable.querySelector('colgroup');
            if (!colgroup) {
                colgroup = document.createElement('colgroup');
                stickyTable.insertBefore(colgroup, stickyTable.firstChild);
            }
            colgroup.innerHTML = ''; // Clear existing
            colWidths.forEach(w => {
                const col = document.createElement('col');
                col.style.width = w + 'px';
                col.style.minWidth = w + 'px'; // Strict enforce
                colgroup.appendChild(col);
            });

            // 5. Height Sync (Header Rows)
            // Still need to sync row heights because text wrapping might differ if fonts slightly off?
            // Actually, with colgroup fixed, widths are exact. Heights *should* match content.
            // But let's force height to be safe.
            const origRows = Array.from(thead.querySelectorAll('tr'));
            const cloneRows = Array.from(stickyTable.querySelectorAll('tr'));
            origRows.forEach((row, i) => {
                if (cloneRows[i]) {
                    cloneRows[i].style.height = row.getBoundingClientRect().height + 'px';
                }
            });
            
            // 6. Copy computed styles for cells to ensure padding/border match
            origThs.forEach((th, i) => {
                if (cloneThs[i]) {
                    const computed = window.getComputedStyle(th);
                    cloneThs[i].style.padding = computed.padding;
                    cloneThs[i].style.border = computed.border;
                    cloneThs[i].style.boxSizing = 'border-box';
                    // Clear manual width on TH to let Colgroup drive (except sticky lefts maybe?)
                    // Actually, keeping width on TH doesn't hurt if it matches.
                    // But removing it ensures Colgroup wins.
                    cloneThs[i].style.width = ''; 
                    cloneThs[i].style.minWidth = '';
                    cloneThs[i].style.maxWidth = '';
                }
            });
        };

        const onScroll = () => {
            const nav = document.getElementById('mainNav');
            const navHeight = nav ? nav.offsetHeight : 0;
            const rect = table.getBoundingClientRect();
            const triggerPoint = navHeight;

            // Show sticky header if table top is above trigger point, but table bottom is still visible
            const shouldStick = rect.top < triggerPoint && rect.bottom > triggerPoint;
            table.classList.toggle('sticky-active', shouldStick);

            if (shouldStick) {
                stickyContainer.style.display = 'block';
                stickyContainer.style.top = navHeight + 'px';
                stickyContainer.scrollLeft = wrapper.scrollLeft;

                // Always force sync widths when visible to guarantee alignment
                updateWidths();
            } else {
                stickyContainer.style.display = 'none';
                table.classList.remove('sticky-active');
            }
        };

        const syncHorizontal = () => {
            stickyContainer.scrollLeft = wrapper.scrollLeft;
        };

        window.addEventListener('scroll', () => { onScroll(); syncHorizontal(); }, { passive: true });
        window.addEventListener('resize', () => { updateWidths(); onScroll(); syncHorizontal(); });
        wrapper.addEventListener('scroll', syncHorizontal, { passive: true });
        
        // Initial sync
        setTimeout(updateWidths, 100); 
        updateWidths();
    }

    const initTeamFilter = () => {
        const dropdowns = document.querySelectorAll('.team-filter-dropdown');
        dropdowns.forEach(dd => {
            dd.innerHTML = '';
            const uniqueTeams = [...new Set(sortedPlayers.map(p => p.team))].sort();
            uniqueTeams.forEach(team => {
                if(team === "N/A") return;
                const div = document.createElement('div');
                div.className = 'team-option';
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox'; checkbox.value = team;
                const span = document.createElement('span'); span.innerText = team;
                div.onclick = (e) => { if(e.target.tagName !== 'INPUT') { checkbox.checked = !checkbox.checked; handleTeamCheck(checkbox); } };
                checkbox.onclick = (e) => { e.stopPropagation(); handleTeamCheck(checkbox); };
                div.appendChild(checkbox); div.appendChild(span); dd.appendChild(div);
            });
            const footer = document.createElement('div');
            footer.className = 'filter-actions';
            footer.innerHTML = '<span class="clear-filter" onclick="clearTeamFilter()">Zrušiť filter</span>';
            dd.appendChild(footer);
        });
    };

    const handleTeamCheck = (checkbox) => {
        if (checkbox.checked) selectedTeams.push(checkbox.value);
        else selectedTeams = selectedTeams.filter(t => t !== checkbox.value);
        renderTable();
    };

    window.clearTeamFilter = () => { selectedTeams = []; document.querySelectorAll('.team-option input').forEach(i => i.checked = false); renderTable(); };

    const playerModal = document.getElementById("playerModal");
    window.closePlayerModal = () => { playerModal.style.display = "none"; };

    const openPlayerModal = (p) => {
        document.getElementById('headerName').innerText = p.name;
        document.getElementById('headerTeam').innerText = p.team || "";
        document.getElementById('currentRatingVal').innerText = p.rating.toFixed(2);
        const setStat = (idName, idRate, oppName, oppRate) => {
            const elName = document.getElementById(idName); const elRate = document.getElementById(idRate);
            if (oppName) { elName.innerText = oppName; elName.className = "stat-value"; elRate.innerText = `Rating: ${oppRate.toFixed(2)}`; }
            else { elName.innerText = "-"; elName.className = "stat-value stat-none"; elRate.innerText = ""; }
        };
        setStat('bestWinName', 'bestWinRating', p.bestWinOpponent, p.bestWinRating);
        setStat('worstLossName', 'worstLossRating', p.worstLossOpponent, p.worstLossRating);
        let totalOpp = 0, countOpp = 0;
        p.matchDetails.forEach(m => { if (!m.isDoubles && m.opp_rating_after > 0) { totalOpp += m.opp_rating_after; countOpp++; } });
        document.getElementById('avgOpponentVal').innerText = countOpp > 0 ? (totalOpp / countOpp).toFixed(2) : "-";
        playerModal.style.display = "flex";
        renderLineChart(p);
        renderPieCharts('matchesChart', 'setsChart', p.matches, p.wins, p.losses, p.setsWin, p.setsLose, 'matches', 'sets');
        renderPieCharts('dMatchesChart', 'dSetsChart', p.dMatches, p.dWins, p.dLosses, p.dSetsWin, p.dSetsLose, 'dMatches', 'dSets');
        renderHistory(p);
    };

    const renderLineChart = (p) => {
        const ctx = document.getElementById('ratingChart').getContext('2d');
        const sortedDates = Object.keys(p.history).sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
        const dataPoints = sortedDates.map(date => p.history[date]);
        if (chartRefs['line']) chartRefs['line'].destroy();
        chartRefs['line'] = new Chart(ctx, {
            type: 'line',
            data: { labels: sortedDates, datasets: [{ label: p.name, data: dataPoints, borderColor: '#4A90E2', backgroundColor: 'rgba(74, 144, 226, 0.1)', borderWidth: 2, pointRadius: 4, tension: 0.1, fill: true }] },
            options: { responsive: true, maintainAspectRatio: false, scales: { x: { ticks: { autoSkip: true, maxTicksLimit: 10 } } } }
        });
    };

    const renderPieCharts = (mId, sId, matches, wins, losses, sWin, sLose, mPre, sPre) => {
        const getPct = (part, total) => total > 0 ? ((part/total)*100).toFixed(1) : 0;
        document.getElementById(mPre + 'TotalVal').innerText = matches;
        document.getElementById(mPre + 'WinsVal').innerText = wins; document.getElementById(mPre + 'WinsPct').innerText = `(${getPct(wins, matches)}%)`;
        document.getElementById(mPre + 'LossVal').innerText = losses; document.getElementById(mPre + 'LossPct').innerText = `(${getPct(losses, matches)}%)`;
        document.getElementById(sPre + 'TotalVal').innerText = (sWin + sLose);
        document.getElementById(sPre + 'WinsVal').innerText = sWin; document.getElementById(sPre + 'WinsPct').innerText = `(${getPct(sWin, sWin + sLose)}%)`;
        document.getElementById(sPre + 'LossVal').innerText = sLose; document.getElementById(sPre + 'LossPct').innerText = `(${getPct(sLose, sWin + sLose)}%)`;
        const createPie = (id, w, l) => {
            const ctx = document.getElementById(id).getContext('2d');
            if (chartRefs[id]) chartRefs[id].destroy();
            chartRefs[id] = new Chart(ctx, { type: 'doughnut', data: { labels: ['Výhry','Prehry'], datasets: [{ data: [w, l], backgroundColor: ['#28a745', '#dc3545'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } });
        };
        createPie(mId, wins, losses); createPie(sId, sWin, sLose);
    };

    const renderHistory = (p) => {
        const container = document.getElementById('historyContainer');
        const getDiffHtml = (delta) => {
            if (Math.abs(delta) < 0.01) return `<span class="diff-val diff-neu">-</span>`;
            return `<span class="diff-val ${delta > 0 ? 'diff-up' : 'diff-down'}">${delta > 0 ? '▲' : '▼'}${Math.abs(delta).toFixed(2)}</span>`;
        };
        let html = `<div class='history-section'><div class='history-title'>História Zápasov: ${p.name}</div>`;
        [...p.matchDetails].reverse().forEach(m => {
            const isWin = m.score_own > m.score_opp;
            const oppRatingHtml = m.isDoubles ? '' : `, <span class="rating-current">${m.opp_rating_after.toFixed(2)}</span>`;

            // Display Date if present (future/scheduled structure), else Round
            const displayDate = m.round;

            html += `<div class="history-item">
                <div class="match-date">${displayDate} ${m.isDoubles ? '<span class="doubles-badge">ŠTVORHRA</span>' : ''}</div>
                <div class="match-content">
                    <div class="player-row"><span class="player-name-span">${m.own_name_display}</span><span>(${p.team}, <span class="rating-current">${m.rating_after.toFixed(2)}</span>)</span>${getDiffHtml(m.delta_own)}</div>
                    <div class="score-row ${isWin ? 'win-text' : 'loss-text'}">${m.score_own}:${m.score_opp}</div>
                    <div class="player-row"><span class="player-name-span">${m.opponent}</span><span>(${m.opponent_team}${oppRatingHtml})</span>${getDiffHtml(m.delta_opp)}</div>
                </div>
            </div>`;
        });
        html += `</div>`; container.innerHTML = html;
    };

    window.onclick = (e) => { if (e.target == playerModal) closePlayerModal(); const im = document.getElementById("infoModal"); if (im && e.target == im) im.style.display = "none"; };
    window.openInfoModal = () => document.getElementById("infoModal").style.display = "flex";
    window.closeInfoModal = () => document.getElementById("infoModal").style.display = "none";
    renderTable(); initTeamFilter();
}

// --- TABLE PAGE ---
function renderTablePage() {
    const { players } = processData();
    const teams = {}; const teamMatchesArray = []; const tempMatches = {};

    // Only use PLAYED matches for table
    matchResults.filter(isPlayedMatch).forEach(m => {
        const key = `${m.round}::${m.player_a_team}::${m.player_b_team}`;
        if (!tempMatches[key]) tempMatches[key] = { date: m.round, teamA: m.player_a_team, teamB: m.player_b_team, scoreA: 0, scoreB: 0 };
        const sA = parseInt(m.score_a); const sB = parseInt(m.score_b);
        if (sA > sB) tempMatches[key].scoreA++; if (sB > sA) tempMatches[key].scoreB++;
    });
    for (const key in tempMatches) teamMatchesArray.push(tempMatches[key]);

    const initTeam = (n) => { if (!teams[n]) teams[n] = { name: n, matches: 0, wins: 0, draws: 0, losses: 0, scoreFor: 0, scoreAgainst: 0, points: 0, avgRating: 0 }; };
    teamMatchesArray.forEach(m => {
        initTeam(m.teamA); initTeam(m.teamB);
        teams[m.teamA].matches++; teams[m.teamB].matches++;
        teams[m.teamA].scoreFor += m.scoreA; teams[m.teamA].scoreAgainst += m.scoreB;
        teams[m.teamB].scoreFor += m.scoreB; teams[m.teamB].scoreAgainst += m.scoreA;
        if (m.scoreA > m.scoreB) { teams[m.teamA].wins++; teams[m.teamA].points += 3; teams[m.teamB].losses++; teams[m.teamB].points += 1; }
        else if (m.scoreB > m.scoreA) { teams[m.teamB].wins++; teams[m.teamB].points += 3; teams[m.teamA].losses++; teams[m.teamA].points += 1; }
        else { teams[m.teamA].draws++; teams[m.teamA].points += 2; teams[m.teamB].draws++; teams[m.teamB].points += 2; }
    });

    Object.values(teams).forEach(t => {
        const tp = Object.values(players).filter(p => p.team === t.name).sort((a,b)=>(b.matches+b.dMatches)-(a.matches+a.dMatches)).slice(0, 4);
        if (tp.length > 0) t.avgRating = tp.reduce((acc, p) => acc + p.rating, 0) / tp.length;
    });

    const tbody = document.getElementById('tableBody');
    const selectA = document.getElementById('teamSelectA');
    const selectB = document.getElementById('teamSelectB');
    if (selectA) Object.keys(teams).sort().forEach(t => { selectA.add(new Option(t, t)); selectB.add(new Option(t, t)); });

    const getHist = (tn) => {
        const mm = teamMatchesArray.filter(m => m.teamA === tn || m.teamB === tn);
        if (mm.length === 0) return `<div style="padding:15px; text-align:center; color:#999;">Žiadne zápasy</div>`;
        let h = `<div class="history-list">`;
        mm.forEach(m => {
            const isHome = m.teamA === tn;
            const sc = isHome ? (m.scoreA>m.scoreB?"score-win":(m.scoreA<m.scoreB?"score-loss":"score-draw")) : (m.scoreB>m.scoreA?"score-win":(m.scoreB<m.scoreA?"score-loss":"score-draw"));
            h += `<div class="history-row"><div class="hr-date">${m.date}</div><div class="hr-match">
                <span class="hr-team hr-home ${m.teamA===tn?"current-team":"other-team"}">${m.teamA}</span><span class="hr-score ${sc}">${m.scoreA}:${m.scoreB}</span><span class="hr-team hr-guest ${m.teamB===tn?"current-team":"other-team"}">${m.teamB}</span></div></div>`;
        });
        return h + `</div>`;
    };

    Object.values(teams).sort((a,b)=> (b.points!==a.points) ? b.points-a.points : (b.scoreFor-b.scoreAgainst)-(a.scoreFor-a.scoreAgainst)).forEach((t, i) => {
        const tr = document.createElement('tr'); tr.className = 'main-row';
        tr.innerHTML = `<td class="col-pos">${i + 1}.</td><td>${t.name} <span class="expand-icon">▼</span></td><td>${t.matches}</td><td>${t.wins}</td><td>${t.draws}</td><td>${t.losses}</td><td class="col-score">${t.scoreFor}:${t.scoreAgainst}</td><td class="col-pts">${t.points}</td><td class="col-avg">${t.avgRating.toFixed(1)}</td>`;
        const dTr = document.createElement('tr'); dTr.className = 'detail-row'; dTr.innerHTML = `<td colspan="9" class="detail-cell">${getHist(t.name)}</td>`;
        tr.onclick = () => { const o = dTr.classList.contains('open'); dTr.classList.toggle('open', !o); tr.classList.toggle('active', !o); };
        tbody.appendChild(tr); tbody.appendChild(dTr);
    });

    window.calculatePrediction = () => {
        const tA = document.getElementById('teamSelectA').value; const tB = document.getElementById('teamSelectB').value;
        if (!tA || !tB || tA === tB) { alert("Vyberte prosím dva rozdielne tímy."); return; }
        const rA = teams[tA].avgRating; const rB = teams[tB].avgRating;
        const sA = Math.round(18 * (1 / (1 + Math.pow(10, (rB - rA) / 300))));
        document.getElementById('predScore').innerText = `${sA} : ${18 - sA}`;
        document.getElementById('rateA').innerText = rA.toFixed(1); document.getElementById('rateB').innerText = rB.toFixed(1);
        const rb = document.getElementById('predictionResult'); rb.style.display = 'block'; setTimeout(() => rb.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const id = document.body.id;
    if (id === 'page-rating') renderRatingPage();
    else if (id === 'page-home') renderHomePage();
    else if (id === 'page-results') renderResultsPage();
    else if (id === 'page-table') renderTablePage();
});