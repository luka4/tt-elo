/* script.js */

// ============================================================
// 1. GLOBAL CONSTANTS & CONFIG
// ============================================================
const INITIAL_RATING = 100;
const K_FACTOR_STAGES = {1: 30, 2: 26, 3: 22, 4: 18, 5: 14, default: 10};

let chartRefs = {};

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================
function getKFactor(matchesCount) {
    return K_FACTOR_STAGES[matchesCount] || K_FACTOR_STAGES.default;
}

// Helper: Parse Season for Sorting (Year * 10 + Term)
function getSeasonOrder(seasonStr) {
    if (!seasonStr) return 0; // Old data
    const parts = seasonStr.trim().split(' ');
    if (parts.length < 2) return 0;
    
    const term = parts[0].toUpperCase(); // JAR, JESEN
    // Remove any non-numeric chars from year just in case
    const year = parseInt(parts[1].replace(/[^\d]/g, '')); 
    if (isNaN(year)) return 0;

    // JAR = 1, JESEŇ/JESEN = 2
    // If there are other terms, handle them? For now assume these two.
    const termVal = (term.includes('JAR')) ? 1 : 2; 
    
    return year * 10 + termVal;
}

function getMatchRoundId(m) {
    return `${m.season || 'N/A'}__${m.round}`;
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
    const lastMatch = playedMatches.length > 0 ? playedMatches[playedMatches.length - 1] : null;
    const latestRoundId = lastMatch ? getMatchRoundId(lastMatch) : null;
    // We keep latestRoundName for legacy display strings, but logic should use ID
    const latestRoundName = lastMatch ? lastMatch.round : "";

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
        roundsSet.add(getMatchRoundId(match));
        const scoreA = parseInt(match.score_a);
        const scoreB = parseInt(match.score_b);
        totalSets += (scoreA + scoreB);

        const isDoubles = match.doubles === true || match.doubles === "true";
        const isLatestRound = getMatchRoundId(match) === latestRoundId;

        const pNamesA = match.player_a.split('/').map(n => n.trim());
        const pNamesB = match.player_b.split('/').map(n => n.trim());

        // If any player is WO, do not process for ratings
        if (pNamesA.includes('WO') || pNamesB.includes('WO')) return;

        pNamesA.forEach(n => initPlayer(n, match.player_a_team));
        pNamesB.forEach(n => initPlayer(n, match.player_b_team));

        const getR = (name) => players[name].rating;

        // --- FIXED LOGIC START ---
        // 1. Increment Counters & Set Last Played FIRST
        // This ensures we can calculate the K-factor for the *current* match index correctly later.
        if (isDoubles) {
            pNamesA.forEach(n => { players[n].dMatches++; players[n].lastPlayed = match.round; });
            pNamesB.forEach(n => { players[n].dMatches++; players[n].lastPlayed = match.round; });
        } else {
            pNamesA.forEach(n => { players[n].matches++; players[n].lastPlayed = match.round; });
            pNamesB.forEach(n => { players[n].matches++; players[n].lastPlayed = match.round; });
        }

        // 2. Calculate Team Ratings (Average for Doubles, Single for Singles)
        let Ra, Rb;
        if (isDoubles) {
            Ra = (getR(pNamesA[0]) + (pNamesA[1] ? getR(pNamesA[1]) : getR(pNamesA[0]))) / 2;
            Rb = (getR(pNamesB[0]) + (pNamesB[1] ? getR(pNamesB[1]) : getR(pNamesB[0]))) / 2;
        } else {
            Ra = getR(pNamesA[0]);
            Rb = getR(pNamesB[0]);
        }

        // 3. Calculate Expected Scores
        const N = scoreA + scoreB;
        const Ea = N / (1 + Math.pow(10, (Rb - Ra) / 300));
        const Eb = N / (1 + Math.pow(10, (Ra - Rb) / 300));

        // 4. Calculate Raw Performance Difference (Actual - Expected)
        // We do NOT multiply by K here. We pass this 'diff' to the individual player update.
        const diffA = scoreA - Ea;
        const diffB = scoreB - Eb;

        // 5. Calculate "Average Display Delta" for opponents
        // This is purely for the history log to show a general "opponent change" value.
        // It does not affect the actual math for the player being updated.
        const getCurrentK = (n) => getKFactor(players[n].matches + players[n].dMatches); // Current total count
        const getAvgK = (names) => {
            let sumK = 0;
            names.forEach(n => sumK += getCurrentK(n));
            return sumK / names.length;
        };
        const avgKa = getAvgK(pNamesA);
        const avgKb = getAvgK(pNamesB);

        // Calculate the hypothetical average delta for the TEAM (for display purposes only)
        let displayDeltaA = avgKa * diffA;
        let displayDeltaB = avgKb * diffB;
        if (isDoubles) {
            displayDeltaA = displayDeltaA / 2;
            displayDeltaB = displayDeltaB / 2;
        }
        // --- FIXED LOGIC END ---

        if (isLatestRound && !isDoubles) {
            // Filter out WO matches for upsets
            if (match.player_a !== 'WO' && match.player_b !== 'WO') {
                if (scoreA > scoreB && Rb > Ra) {
                    upsetsList.push({
                        winner: pNamesA[0],
                        wTeam: match.player_a_team,
                        wRate: Ra,
                        loser: pNamesB[0],
                        lTeam: match.player_b_team,
                        lRate: Rb,
                        score: `${scoreA}:${scoreB}`,
                        diff: Rb - Ra
                    });
                } else if (scoreB > scoreA && Ra > Rb) {
                    upsetsList.push({
                        winner: pNamesB[0],
                        wTeam: match.player_b_team,
                        wRate: Rb,
                        loser: pNamesA[0],
                        lTeam: match.player_a_team,
                        lRate: Ra,
                        score: `${scoreB}:${scoreA}`,
                        diff: Ra - Rb
                    });
                }
            }
        }

        // Updated updateSide to accept raw DIFF and displayDelta for opponent
        const updateSide = (pNames, scoreOwn, scoreOpp, diffOwn, displayDeltaOpp, oppNames, oppTeam) => {
            pNames.forEach(name => {
                const p = players[name];

                // --- FIXED: Individual K Calculation ---
                const currentK = getKFactor(p.matches + p.dMatches);

                // Calculate Individual Delta
                // Formula: K * (Actual - Expected).
                // If doubles, we divide by 2 to maintain the league's scaling (points shared/split).
                let deltaOwn = currentK * diffOwn;
                if (isDoubles) deltaOwn = deltaOwn / 2;
                // ---------------------------------------

                if (isDoubles) {
                    p.dSetsWin += scoreOwn;
                    p.dSetsLose += scoreOpp;
                    if (scoreOwn > scoreOpp) p.dWins++; else if (scoreOpp > scoreOwn) p.dLosses++;
                } else {
                    p.setsWin += scoreOwn;
                    p.setsLose += scoreOpp;
                    if (scoreOwn > scoreOpp) p.wins++; else if (scoreOpp > scoreOwn) p.losses++;
                    const oppRating = isDoubles ? 0 : players[oppNames[0]].rating;
                    if (scoreOwn > scoreOpp && oppRating > p.bestWinRating) {
                        p.bestWinOpponent = oppNames[0];
                        p.bestWinRating = oppRating;
                    } else if (scoreOpp > scoreOwn && oppRating < p.worstLossRating) {
                        p.worstLossOpponent = oppNames[0];
                        p.worstLossRating = oppRating;
                    }
                }
                p.rating += deltaOwn;
                if (isLatestRound) p.roundGain += deltaOwn;

                const rNum = parseInt((match.round.match(/\d+/) || [0])[0]);
                const sOrder = getSeasonOrder(match.season);
                const sDisp = match.season ? ` (${match.season})` : '';
                const historyKey = `${sOrder}-${String(rNum).padStart(2, '0')}|${match.round}${sDisp}`;

                p.history[historyKey] = p.rating;

                p.maxRating = Math.max(p.rating, p.maxRating);
                p.minRating = Math.min(p.rating, p.minRating);

                const opponentName = oppNames.join(' / ');
                const oppRatingAfter = isDoubles ? 0 : (players[oppNames[0]].rating);

                p.matchDetails.push({
                    date: match.date || match.round,
                    round: match.round,
                    opponent: opponentName,
                    opponent_team: oppTeam,
                    score_own: scoreOwn,
                    score_opp: scoreOpp,
                    rating_after: p.rating,
                    opp_rating_after: oppRatingAfter,
                    delta_own: deltaOwn,
                    delta_opp: displayDeltaOpp, // Use the average opp delta for display
                    isDoubles: isDoubles,
                    own_name_display: pNames.join(' / ')
                });
            });
        };

        // Pass diffA/B for calculation, and displayDeltaB/A for opponent history logs
        updateSide(pNamesA, scoreA, scoreB, diffA, displayDeltaB, pNamesB, match.player_b_team);
        updateSide(pNamesB, scoreB, scoreA, diffB, displayDeltaA, pNamesA, match.player_a_team);
    });

    return {players, roundsSet, totalSets, latestRoundName, latestRoundId, upsetsList};
}

// ============================================================
// 4. PAGE RENDERERS
// ============================================================

// --- HOME PAGE ---
function renderHomePage() {
    const {players, roundsSet, totalSets, latestRoundName, latestRoundId, upsetsList} = processData();
    const playedMatches = matchResults.filter(isPlayedMatch);

    // Stats
    const uniqueTeamMatches = new Set(playedMatches.map(m => `${getMatchRoundId(m)}_${m.player_a_team}_${m.player_b_team}`));
    document.getElementById('totalRounds').innerText = roundsSet.size;
    document.getElementById('totalTeamMatches').innerText = uniqueTeamMatches.size;
    document.getElementById('totalMatches').innerText = playedMatches.length;
    document.getElementById('totalSets').innerText = totalSets;

    const latestTitleText = latestRoundId ? (
        (() => {
            const m = playedMatches.find(pm => getMatchRoundId(pm) === latestRoundId);
            const s = m && m.season ? ` (${m.season})` : '';
            return m ? `${m.round}${s}` : latestRoundName;
        })()
    ) : "Zatiaľ žiadne zápasy";

    document.getElementById('latestRoundTitle').innerText = latestTitleText;

    // Top Gainers
    const top5 = Object.values(players).sort((a, b) => b.roundGain - a.roundGain).slice(0, 5);
    const gainList = document.getElementById('topGainersList');
    gainList.innerHTML = '';
    top5.forEach((p, index) => {
        if (p.roundGain <= 0) return;
        const li = document.createElement('li');
        li.className = 'top-player-row';
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
    } else {
        upsetDiv.innerHTML = `<div style="text-align:center; color:#999;">Žiadne prekvapenia v tomto kole.</div>`;
    }

    // Latest Results (Now "Current Round")
    if (latestRoundId) {
        const currentRoundMatches = matchResults.filter(m => getMatchRoundId(m) === latestRoundId);
        renderMatchList(currentRoundMatches, document.getElementById('latestRoundContainer'), false);

        // Force update the title explicitly
        const currentTitle = document.getElementById('latestRoundTitle');
        if (currentTitle) currentTitle.innerText = `Aktuálne Kolo: ${latestTitleText}`;

        // Previous Round Logic
        const allRoundIds = [...new Set(matchResults.filter(isPlayedMatch).map(m => getMatchRoundId(m)))];
        const currentIndex = allRoundIds.indexOf(latestRoundId);

        if (currentIndex > 0) {
            const prevRoundId = allRoundIds[currentIndex - 1];
            const prevRoundMatches = matchResults.filter(m => getMatchRoundId(m) === prevRoundId);

            const pm = prevRoundMatches[0];
            const s = pm && pm.season ? ` (${pm.season})` : '';
            const prevName = pm ? `${pm.round}${s}` : prevRoundId;

            document.getElementById('prevRoundTitle').innerText = prevName;
            renderMatchList(prevRoundMatches, document.getElementById('prevRoundContainer'), false);
        } else {
            const prevHeader = document.getElementById('prevRoundTitle').parentElement;
            if (prevHeader) prevHeader.style.display = 'none';
        }
    }

    // --- UPCOMING MATCHES LOGIC ---
    const upcomingContainer = document.getElementById('upcomingMatchesContainer');
    if (!upcomingContainer) return;

    // Filter FUTURE matches - only from SUBSEQUENT rounds (not in latest ID)
    const futureMatches = matchResults.filter(m => !isPlayedMatch(m) && getMatchRoundId(m) !== latestRoundId);

    if (futureMatches.length > 0) {
        const uniqueFutureIds = [...new Set(futureMatches.map(m => getMatchRoundId(m)))];
        const nextRoundId = uniqueFutureIds[0];
        const nextRoundMatches = futureMatches.filter(m => getMatchRoundId(m) === nextRoundId);

        const nm = nextRoundMatches[0];
        const s = nm && nm.season ? ` (${nm.season})` : '';
        const nextName = nm ? `${nm.round}${s}` : "Nasledujúce kolo";

        const titleSpan = document.getElementById('nextRoundTitle');
        if (titleSpan && titleSpan.parentElement) {
            titleSpan.parentElement.innerText = `Zápasy nasledujúceho kola: ${nextName}`;
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
    // Group by ROUND ID (Season + Round), only PLAYED matches
    matchResults.filter(isPlayedMatch).forEach(m => {
        const id = getMatchRoundId(m);
        if (!rounds[id]) {
            const rNum = parseInt((m.round.match(/\d+/) || [0])[0]);
            rounds[id] = {
                id: id,
                name: m.round,
                season: m.season,
                matches: [],
                seasonOrder: getSeasonOrder(m.season),
                roundNum: rNum
            };
        }
        rounds[id].matches.push(m);
    });

    const container = document.getElementById('resultsContainer');

    // Sort Rounds: Latest Season first, then Latest Round first
    const sortedRoundIds = Object.keys(rounds).sort((a, b) => {
        const rA = rounds[a];
        const rB = rounds[b];

        if (rA.seasonOrder !== rB.seasonOrder) {
            return rB.seasonOrder - rA.seasonOrder;
        }
        return rB.roundNum - rA.roundNum;
    });

    sortedRoundIds.forEach(id => {
        const r = rounds[id];
        const roundWrapper = document.createElement('div');
        roundWrapper.className = 'round-group';
        const header = document.createElement('div');
        header.className = 'round-header';

        // Header format: "13. kolo. JESEŇ 2025"
        const seasonPart = r.season ? `. ${r.season}` : '';
        header.innerText = `${r.name}${seasonPart}`;

        roundWrapper.appendChild(header);
        renderMatchList(r.matches, roundWrapper, true);
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
            const sA = parseInt(m.score_a);
            const sB = parseInt(m.score_b);
            if (sA > sB) teamMatches[key].scoreA++;
            if (sB > sA) teamMatches[key].scoreB++;
        }
        teamMatches[key].games.push(m);
    });

    const wrapper = appendToProvided ? container : document.createElement('div');
    if (!appendToProvided) wrapper.className = 'round-group';

    Object.values(teamMatches).forEach(match => {
        const matchRow = document.createElement('div');
        matchRow.className = 'match-row';

        // Check if played (at least one game is played)
        const isPlayed = match.games.some(isPlayedMatch);

        if (isPlayed) {
            const summary = document.createElement('div');
            summary.className = 'match-summary';
            summary.innerHTML = `<div class="team-name team-left">${match.teamA}</div><div class="score-badge">${match.scoreA}-${match.scoreB}</div><div class="team-name team-right">${match.teamB}</div><div class="expand-icon">▼</div>`;
            const details = document.createElement('div');
            details.className = 'match-details';

            // --- STATS GENERATION START ---
            const stats = {}; 
            match.games.forEach(g => {
                if (!isPlayedMatch(g)) return;
                const isD = g.doubles === true || g.doubles === "true";
                const pVal = isD ? 0.5 : 1;
                const sA = parseInt(g.score_a);
                const sB = parseInt(g.score_b);
                
                const updateP = (namesStr, team, won) => {
                    namesStr.split('/').map(n => n.trim()).forEach(n => {
                        if (!stats[n]) stats[n] = { name: n, team: team, points: 0, possible: 0 };
                        stats[n].possible += pVal;
                        if (won) stats[n].points += pVal;
                    });
                };
                updateP(g.player_a, match.teamA, sA > sB);
                updateP(g.player_b, match.teamB, sB > sA);
            });

            const getTeamStatsHtml = (teamName, align) => {
                const list = Object.values(stats).filter(p => p.team === teamName).sort((a, b) => {
                    if (b.points !== a.points) {
                        return b.points - a.points; // Higher points first
                    }
                    return a.possible - b.possible; // Lower possible first (if points equal)
                });
                if (list.length === 0) return '';
                let h = `<div class="team-stats ${align}">`;
                list.forEach((p, index) => {
                    h += `<div class="player-stat-row">
                        <div class="player-stat-name">${p.name}</div>
                        <span class="player-stat-score">${p.points}/${p.possible}</span>
                    </div>`;
                });
                h += `</div>`;
                return h;
            };
            
            const statsHtml = `<div class="match-stats-container">${getTeamStatsHtml(match.teamA, 'left')}${getTeamStatsHtml(match.teamB, 'right')}</div>`;
            // --- STATS GENERATION END ---

            let gamesHtml = '';
            match.games.filter(isPlayedMatch).sort((a, b) => (b.doubles ? 1 : 0) - (a.doubles ? 1 : 0)).forEach(g => {
                const sA = parseInt(g.score_a);
                const sB = parseInt(g.score_b);
                gamesHtml += `<div class="game-row">${(g.doubles === true || g.doubles === "true") ? '<div class="doubles-badge">ŠTVORHRA</div>' : ''}
                    <div class="game-names"><div class="player-left">${g.player_a}</div><div class="game-score ${sA > sB ? 'win-left' : (sB > sA ? 'win-right' : '')}">${sA}:${sB}</div><div class="player-right">${g.player_b}</div></div></div>`;
            });
            details.innerHTML = statsHtml + gamesHtml;

            summary.onclick = () => {
                const isEx = details.style.display === 'block';
                details.style.display = isEx ? 'none' : 'block';
                matchRow.classList.toggle('active', !isEx);
            };
            matchRow.appendChild(summary);
            matchRow.appendChild(details);
        } else {
            // Unplayed View
            const summary = document.createElement('div');
            summary.className = 'match-summary';
            // Same structure as played matches for perfect alignment
            summary.innerHTML = `<div class="team-name team-left">${match.teamA}</div><div class="score-badge" style="background:#e0e0e0; color:#555;">VS</div><div class="team-name team-right">${match.teamB}</div><div class="expand-icon" style="visibility:hidden">▼</div>`;
            matchRow.appendChild(summary);

            const dateStr = match.date ? match.date : '';
            const locStr = match.location ? match.location : '';
            if (dateStr || locStr) {
                const metaDiv = document.createElement('div');
                metaDiv.style.cssText = "text-align:center; font-size:0.75em; color:#666; padding-bottom:8px; margin-top:-8px;";
                metaDiv.innerHTML = `${dateStr}${dateStr && locStr ? ' | ' : ''}${locStr}`;
                matchRow.appendChild(metaDiv);
            }
        }
        wrapper.appendChild(matchRow);
    });
    if (!appendToProvided) container.appendChild(wrapper);
}

// --- RATING PAGE ---
function renderRatingPage() {
    const {players} = processData();
    const sortedPlayers = Object.values(players).sort((a, b) => b.rating - a.rating);
    let selectedTeams = [];

    const tbody = document.getElementById('mainTableBody');
    const renderTable = () => {
        tbody.innerHTML = '';
        sortedPlayers.forEach((p, index) => {
            if (selectedTeams.length > 0 && !selectedTeams.includes(p.team)) return;
            const tr = document.createElement('tr');
            if (p.team === 'COKERY') tr.classList.add('team-cokery');
            if (p.team === 'ASTORIAFIT') tr.classList.add('team-astoria');
            tr.onclick = () => {
                if (window.getSelection().toString().length === 0) openPlayerModal(p);
            };

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

        if (!isVisible) {
            // Calculate position for fixed dropdown
            const rect = wrapper.getBoundingClientRect();
            dropdown.style.top = rect.bottom + 'px';
            dropdown.style.left = rect.left + 'px';
        }

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
            const origRows = Array.from(thead.querySelectorAll('tr'));
            const cloneRows = Array.from(stickyTable.querySelectorAll('tr'));
            origRows.forEach((row, i) => {
                if (cloneRows[i]) {
                    cloneRows[i].style.height = row.getBoundingClientRect().height + 'px';
                }
            });

            // 6. Copy computed styles for cells
            origThs.forEach((th, i) => {
                if (cloneThs[i]) {
                    const computed = window.getComputedStyle(th);
                    cloneThs[i].style.padding = computed.padding;
                    cloneThs[i].style.border = computed.border;
                    cloneThs[i].style.boxSizing = 'border-box';
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
                updateWidths();
            } else {
                stickyContainer.style.display = 'none';
                table.classList.remove('sticky-active');
            }
        };

        const syncHorizontal = () => {
            stickyContainer.scrollLeft = wrapper.scrollLeft;
        };

        window.addEventListener('scroll', () => {
            onScroll();
            syncHorizontal();
        }, {passive: true});
        window.addEventListener('resize', () => {
            updateWidths();
            onScroll();
            syncHorizontal();
        });
        wrapper.addEventListener('scroll', syncHorizontal, {passive: true});

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
                if (team === "N/A") return;
                const div = document.createElement('div');
                div.className = 'team-option';
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = team;
                const span = document.createElement('span');
                span.innerText = team;
                div.onclick = (e) => {
                    if (e.target.tagName !== 'INPUT') {
                        checkbox.checked = !checkbox.checked;
                        handleTeamCheck(checkbox);
                    }
                };
                checkbox.onclick = (e) => {
                    e.stopPropagation();
                    handleTeamCheck(checkbox);
                };
                div.appendChild(checkbox);
                div.appendChild(span);
                dd.appendChild(div);
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

    window.clearTeamFilter = () => {
        selectedTeams = [];
        document.querySelectorAll('.team-option input').forEach(i => i.checked = false);
        renderTable();
    };

    const playerModal = document.getElementById("playerModal");
    window.closePlayerModal = () => {
        playerModal.style.display = "none";
    };

    const openPlayerModal = (p) => {
        document.getElementById('headerName').innerText = p.name;
        document.getElementById('headerTeam').innerText = p.team || "";
        document.getElementById('currentRatingVal').innerText = p.rating.toFixed(2);
        const setStat = (idName, idRate, oppName, oppRate) => {
            const elName = document.getElementById(idName);
            const elRate = document.getElementById(idRate);
            if (oppName) {
                elName.innerText = oppName;
                elName.className = "stat-value";
                elRate.innerText = `Rating: ${oppRate.toFixed(2)}`;
            } else {
                elName.innerText = "-";
                elName.className = "stat-value stat-none";
                elRate.innerText = "";
            }
        };
        setStat('bestWinName', 'bestWinRating', p.bestWinOpponent, p.bestWinRating);
        setStat('worstLossName', 'worstLossRating', p.worstLossOpponent, p.worstLossRating);
        let totalOpp = 0, countOpp = 0;
        p.matchDetails.forEach(m => {
            if (!m.isDoubles && m.opp_rating_after > 0) {
                totalOpp += m.opp_rating_after;
                countOpp++;
            }
        });
        document.getElementById('avgOpponentVal').innerText = countOpp > 0 ? (totalOpp / countOpp).toFixed(2) : "-";
        playerModal.style.display = "flex";
        renderLineChart(p);
        renderPieCharts('matchesChart', 'setsChart', p.matches, p.wins, p.losses, p.setsWin, p.setsLose, 'matches', 'sets');
        renderPieCharts('dMatchesChart', 'dSetsChart', p.dMatches, p.dWins, p.dLosses, p.dSetsWin, p.dSetsLose, 'dMatches', 'dSets');
        renderHistory(p);
    };

    const renderLineChart = (p) => {
        const ctx = document.getElementById('ratingChart').getContext('2d');
        const sortedKeys = Object.keys(p.history).sort();
        const labels = sortedKeys.map(k => k.split('|')[1]);
        const dataPoints = sortedKeys.map(k => p.history[k]);

        if (chartRefs['line']) chartRefs['line'].destroy();
        chartRefs['line'] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: p.name,
                    data: dataPoints,
                    borderColor: '#4A90E2',
                    backgroundColor: 'rgba(74, 144, 226, 0.1)',
                    borderWidth: 2,
                    pointRadius: 4,
                    tension: 0.1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {x: {ticks: {autoSkip: true, maxTicksLimit: 10}}}
            }
        });
    };

    const renderPieCharts = (mId, sId, matches, wins, losses, sWin, sLose, mPre, sPre) => {
        const getPct = (part, total) => total > 0 ? ((part / total) * 100).toFixed(1) : 0;
        document.getElementById(mPre + 'TotalVal').innerText = matches;
        document.getElementById(mPre + 'WinsVal').innerText = wins;
        document.getElementById(mPre + 'WinsPct').innerText = `(${getPct(wins, matches)}%)`;
        document.getElementById(mPre + 'LossVal').innerText = losses;
        document.getElementById(mPre + 'LossPct').innerText = `(${getPct(losses, matches)}%)`;
        document.getElementById(sPre + 'TotalVal').innerText = (sWin + sLose);
        document.getElementById(sPre + 'WinsVal').innerText = sWin;
        document.getElementById(sPre + 'WinsPct').innerText = `(${getPct(sWin, sWin + sLose)}%)`;
        document.getElementById(sPre + 'LossVal').innerText = sLose;
        document.getElementById(sPre + 'LossPct').innerText = `(${getPct(sLose, sWin + sLose)}%)`;
        const createPie = (id, w, l) => {
            const ctx = document.getElementById(id).getContext('2d');
            if (chartRefs[id]) chartRefs[id].destroy();
            chartRefs[id] = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Výhry', 'Prehry'],
                    datasets: [{data: [w, l], backgroundColor: ['#28a745', '#dc3545'], borderWidth: 0}]
                },
                options: {responsive: true, maintainAspectRatio: false, plugins: {legend: {display: false}}}
            });
        };
        createPie(mId, wins, losses);
        createPie(sId, sWin, sLose);
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
        html += `</div>`;
        container.innerHTML = html;
    };

    window.onclick = (e) => {
        if (e.target == playerModal) closePlayerModal();
        const im = document.getElementById("infoModal");
        if (im && e.target == im) im.style.display = "none";
    };
    window.openInfoModal = () => document.getElementById("infoModal").style.display = "flex";
    window.closeInfoModal = () => document.getElementById("infoModal").style.display = "none";
    renderTable();
    initTeamFilter();
}

// --- TABLE PAGE ---
function renderTablePage() {
    const {players} = processData();
    const tables = {};
    const allTeamsSet = new Set();

    // 1. Group Matches
    matchResults.forEach(m => {
        const season = m.season || "JESEŇ 2025";
        const group = m.group || "";
        const tableKey = `${season}__${group}`;

        if (!tables[tableKey]) {
            tables[tableKey] = {
                season: season,
                group: group,
                seasonOrder: getSeasonOrder(season),
                matches: []
            };
        }
        tables[tableKey].matches.push(m);

        if (m.player_a_team) allTeamsSet.add(m.player_a_team);
        if (m.player_b_team) allTeamsSet.add(m.player_b_team);
    });

    // 2. Prepare Container
    const container = document.getElementById('tablesContainer');
    if (container) container.innerHTML = '';

    // 3. Sort Tables (Season DESC, Group ASC)
    const sortedKeys = Object.keys(tables).sort((a, b) => {
        const tA = tables[a];
        const tB = tables[b];
        if (tA.seasonOrder !== tB.seasonOrder) return tB.seasonOrder - tA.seasonOrder;
        return tA.group.localeCompare(tB.group);
    });

    // 4. Process and Render Each Table
    sortedKeys.forEach(key => {
        const {season, group, matches} = tables[key];
        const teams = {};
        const teamMatchesArray = [];
        const tempMatches = {};

        // Process matches for this table
        matches.forEach(m => {
            const key = `${getMatchRoundId(m)}::${m.player_a_team}::${m.player_b_team}`;
            if (!tempMatches[key]) {
                tempMatches[key] = {
                    roundName: m.round,
                    teamA: m.player_a_team,
                    teamB: m.player_b_team,
                    scoreA: 0,
                    scoreB: 0,
                    isPlayed: false,
                    realDate: null
                };
            }
            if (isPlayedMatch(m)) {
                const sA = parseInt(m.score_a);
                const sB = parseInt(m.score_b);
                if (sA > sB) tempMatches[key].scoreA++;
                if (sB > sA) tempMatches[key].scoreB++;
                tempMatches[key].isPlayed = true;
            } else {
                if (m.date) tempMatches[key].realDate = m.date;
            }
        });

        for (const k in tempMatches) teamMatchesArray.push(tempMatches[k]);

        const initTeam = (n) => {
            if (!teams[n]) teams[n] = {
                name: n, matches: 0, wins: 0, draws: 0, losses: 0,
                scoreFor: 0, scoreAgainst: 0, points: 0, avgRating: 0
            };
        };
        teamMatchesArray.forEach(m => { initTeam(m.teamA); initTeam(m.teamB); });

        teamMatchesArray.forEach(m => {
            if (!m.isPlayed) return;
            teams[m.teamA].matches++;
            teams[m.teamB].matches++;
            teams[m.teamA].scoreFor += m.scoreA;
            teams[m.teamA].scoreAgainst += m.scoreB;
            teams[m.teamB].scoreFor += m.scoreB;
            teams[m.teamB].scoreAgainst += m.scoreA;
            if (m.scoreA > m.scoreB) {
                teams[m.teamA].wins++; teams[m.teamA].points += 3;
                teams[m.teamB].losses++; teams[m.teamB].points += 1;
            } else if (m.scoreB > m.scoreA) {
                teams[m.teamB].wins++; teams[m.teamB].points += 3;
                teams[m.teamA].losses++; teams[m.teamA].points += 1;
            } else {
                teams[m.teamA].draws++; teams[m.teamA].points += 2;
                teams[m.teamB].draws++; teams[m.teamB].points += 2;
            }
        });

        // Calc Avg Rating (using global players data)
        Object.values(teams).forEach(t => {
            const tp = Object.values(players).filter(p => p.team === t.name).sort((a, b) => (b.matches + b.dMatches) - (a.matches + a.dMatches)).slice(0, 4);
            if (tp.length > 0) t.avgRating = tp.reduce((acc, p) => acc + p.rating, 0) / tp.length;
        });

        // Build HTML
        const wrapper = document.createElement('div');
        wrapper.className = 'table-section';

        const titleText = `${season}${group ? ' - Skupina ' + group : ''}`;
        const title = document.createElement('h2');
        title.style.cssText = "color: #4A90E2; margin: 25px 0 10px 0; padding-left: 5px; border-left: 4px solid #4A90E2;";
        title.innerText = titleText;
        wrapper.appendChild(title);

        const tableWrapper = document.createElement('div');
        tableWrapper.className = 'table-wrapper';
        const table = document.createElement('table');
        table.innerHTML = `
            <thead>
            <tr>
                <th class="col-pos">#</th><th>Tím</th><th title="Zápasy">Z</th><th title="Výhry">V</th><th title="Remízy">R</th><th title="Prehry">P</th><th>Skóre</th><th title="Body">B</th><th title="Priemerný Rating"><div class="tooltip-container">Ø<span class="tooltip-icon">🛈</span><span class="tooltip-text">Priemerný rating<br>4 najaktívnejších<br>hráčov tímu</span></div></th>
            </tr>
            </thead>
            <tbody></tbody>`;

        const tbody = table.querySelector('tbody');

        // Helper for History (scoped to this table's matches)
        const getHist = (tn) => {
            const mm = teamMatchesArray.filter(m => m.teamA === tn || m.teamB === tn);
            if (mm.length === 0) return `<div style="padding:15px; text-align:center; color:#999;">Žiadne zápasy</div>`;
            let h = `<div class="history-list">`;
            mm.forEach(m => {
                const isHome = m.teamA === tn;
                let scHtml = '', scClass = '';
                if (m.isPlayed) {
                    scClass = isHome ? (m.scoreA > m.scoreB ? "score-win" : (m.scoreA < m.scoreB ? "score-loss" : "score-draw")) : (m.scoreB > m.scoreA ? "score-win" : (m.scoreB < m.scoreA ? "score-loss" : "score-draw"));
                    scHtml = `${m.scoreA}:${m.scoreB}`;
                } else {
                    scClass = "score-draw";
                    scHtml = "VS";
                }
                const vsStyle = !m.isPlayed ? 'style="color:#aaa;"' : '';
                h += `<div class="history-row"><div class="hr-date">${m.roundName}</div><div class="hr-match">
                    <span class="hr-team hr-home ${m.teamA === tn ? "current-team" : "other-team"}">${m.teamA}</span><span class="hr-score ${scClass}" ${vsStyle}>${scHtml}</span><span class="hr-team hr-guest ${m.teamB === tn ? "current-team" : "other-team"}">${m.teamB}</span></div></div>`;
            });
            return h + `</div>`;
        };

        Object.values(teams).sort((a, b) => (b.points !== a.points) ? b.points - a.points : (b.scoreFor - b.scoreAgainst) - (a.scoreFor - a.scoreAgainst)).forEach((t, i) => {
            const tr = document.createElement('tr');
            tr.className = 'main-row';
            tr.innerHTML = `<td class="col-pos">${i + 1}.</td><td>${t.name} <span class="expand-icon">▼</span></td><td>${t.matches}</td><td>${t.wins}</td><td>${t.draws}</td><td>${t.losses}</td><td class="col-score">${t.scoreFor}:${t.scoreAgainst}</td><td class="col-pts">${t.points}</td><td class="col-avg">${t.avgRating.toFixed(1)}</td>`;
            const dTr = document.createElement('tr');
            dTr.className = 'detail-row';
            dTr.innerHTML = `<td colspan="9" class="detail-cell">${getHist(t.name)}</td>`;
            tr.onclick = () => {
                const o = dTr.classList.contains('open');
                dTr.classList.toggle('open', !o);
                tr.classList.toggle('active', !o);
            };
            tbody.appendChild(tr);
            tbody.appendChild(dTr);
        });

        tableWrapper.appendChild(table);
        wrapper.appendChild(tableWrapper);
        if(container) container.appendChild(wrapper);
    });

    // 5. Setup Prediction (Global)
    const globalTeams = {};
    const globalPlayers = players;

    allTeamsSet.forEach(teamName => {
        const tp = Object.values(globalPlayers).filter(p => p.team === teamName).sort((a, b) => (b.matches + b.dMatches) - (a.matches + a.dMatches)).slice(0, 4);
        const avg = tp.length > 0 ? tp.reduce((acc, p) => acc + p.rating, 0) / tp.length : 0;
        globalTeams[teamName] = { avgRating: avg };
    });

    const selectA = document.getElementById('teamSelectA');
    const selectB = document.getElementById('teamSelectB');
    if (selectA && selectB) {
        selectA.innerHTML = '<option value="">Vyber Domácich</option>';
        selectB.innerHTML = '<option value="">Vyber Hostí</option>';
        [...allTeamsSet].sort().forEach(t => {
            if(t === "N/A") return;
            selectA.add(new Option(t, t));
            selectB.add(new Option(t, t));
        });
    }

    window.calculatePrediction = () => {
        const tA = document.getElementById('teamSelectA').value;
        const tB = document.getElementById('teamSelectB').value;
        if (!tA || !tB || tA === tB) {
            alert("Vyberte prosím dva rozdielne tímy.");
            return;
        }
        const rA = globalTeams[tA] ? globalTeams[tA].avgRating : 0;
        const rB = globalTeams[tB] ? globalTeams[tB].avgRating : 0;

        const sA = Math.round(18 * (1 / (1 + Math.pow(10, (rB - rA) / 300))));
        document.getElementById('predScore').innerText = `${sA} : ${18 - sA}`;
        document.getElementById('rateA').innerText = rA.toFixed(1);
        document.getElementById('rateB').innerText = rB.toFixed(1);
        const rb = document.getElementById('predictionResult');
        rb.style.display = 'block';
        setTimeout(() => rb.scrollIntoView({behavior: 'smooth', block: 'center'}), 100);
    };
}

// ============================================================
// NAVIGATION RENDERER
// ============================================================
function renderNavigation() {
    const navContainer = document.getElementById('mainNavContainer');
    if (!navContainer) return;

    // Get current page filename (e.g., "rating.html")
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // Define links
    const links = [
        { url: 'results.html', text: 'Výsledky' },
        { url: 'table.html', text: 'Tabuľka' },
        { url: 'rating.html', text: 'Rating' },
    ];

    // Build the "Active" class string logic
    const getLinkHtml = (link) => {
        const isActive = page === link.url;
        return `<a href="${link.url}" ${isActive ? 'class="active"' : ''}>${link.text}</a>`;
    };

    // Note: The H1 tag is used for SEO (as discussed previously)
    navContainer.innerHTML = `
    <nav class="top-nav" id="mainNav">
        <h1 class="nav-title" style="margin-top:0;">
            <a href="index.html" style="color:white;text-decoration:none;">Košická Miniliga</a>
        </h1>
        <div class="nav-badge">Aktualizované:<br>12.12.2025 17:00</div>
        <div class="nav-links">
            ${links.map(getLinkHtml).join('')}
        </div>
    </nav>`;
    if (typeof updateLayout === 'function') updateLayout();
}

// Add this to your existing window load event
window.addEventListener('load', renderNavigation);

document.addEventListener('DOMContentLoaded', () => {
    const id = document.body.id;
    if (id === 'page-rating') renderRatingPage();
    else if (id === 'page-home') renderHomePage();
    else if (id === 'page-results') renderResultsPage();
    else if (id === 'page-table') renderTablePage();
});

// ============================================================
// 5. STYLE INJECTOR FOR STATS
// ============================================================
function injectStatsStyles() {
    const css = `
        .match-stats-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            padding: 10px 15px;
            background-color: #f8f9fa;
            border-bottom: 1px solid #e1e4e8;
        }
        .team-stats {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        .team-stats.left {
            padding-left: 200px;
        }
        .team-stats.right {
            padding-right: 200px;
        }
        .player-stat-row {
            padding-bottom: 8px;
            margin-bottom: 8px;
            color: #444;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            width: 100%;
            border-bottom: 1px solid #e1e4e8;
        }
        .player-stat-row:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .player-stat-name {
            font-weight: 500;
            text-align: center;
            line-height: 1.3;
            word-wrap: break-word;
        }
        .player-stat-score {
            font-weight: 700;
            color: #4A90E2;
            white-space: nowrap;
        }
        @media (max-width: 768px) {
            .team-stats.left {
                padding-left: 0;
            }
            .team-stats.right {
                padding-right: 0;
            }
            .player-stat-name {
                display: block;
                line-height: 1.2;
            }
            .player-stat-row {
                flex-direction: column;
            }
        }
    `;
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}
injectStatsStyles();
