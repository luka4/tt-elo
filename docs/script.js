/* script.js */

// ============================================================
// 1. GLOBAL CONSTANTS & CONFIG
// ============================================================
const INITIAL_RATING = 100;
const K_FACTOR_STAGES = {1: 30, 2: 26, 3: 22, 4: 18, 5: 14, default: 10};

let chartRefs = {};

// Team logos (used on standings + detail)
const LOGO_BASE_PATH = 'media/team_logos';
const TEAM_LOGOS = {
    'ASTORIAFIT': 'astoria.png',
    'BERNARD CLUB': 'bernard.png',
    'BOMBERE': 'bombere.png',
    'COKERY': 'cokery.png',
    'EUROCAST': 'euro.png',
    'KOMÉTA KE': 'kometa.png',
    'METALKOV': 'metalkov.png',
    'MONTREAL': 'montreal.png',
    'MYSLAVA': 'myslava.png',
    'MYSLAVA "Ž"': 'myslavaz.png',
    'REPREX': 'reprex.png',
    'SKP "A"': 'skpa.png',
    'SKP "B"': 'skpb.png',
    'SOŠ Ž': 'sosz.png',
    'TT TEAM': 'tt.png',
    'TTC KVP': 'ttc.png'
};

function getTeamLogoSrc(teamName) {
    const key = (teamName || '').trim().toUpperCase();
    const file = TEAM_LOGOS[key];
    return file ? `${LOGO_BASE_PATH}/${file}` : null;
}

// ============================================================
// 2. HELPER FUNCTIONS
// ============================================================
function getKFactor(matchesCount) {
    return K_FACTOR_STAGES[matchesCount] || K_FACTOR_STAGES.default;
}

function clamp(val, min = 0, max = 100) {
    return Math.min(max, Math.max(min, val));
}

// Blend score toward neutral 50 for low sample counts
function confidenceBlend(base, count, threshold = 8) {
    const confidence = Math.min(count / threshold, 1);
    return clamp(50 + (base - 50) * confidence);
}

const STAT_META = {
    attack: { label: 'Ofenzíva', tip: 'Ako presvedčivo hráč vyhráva sety (3:0 / 3:1 majú väčšiu váhu).' },
    defense: { label: 'Defenzíva', tip: 'Ako dobre hráč obmedzí straty pri prehre, najmä proti silnejším.' },
    consistency: { label: 'Stabilita výkonu', tip: 'Stabilita zmien ratingu v nedávnych zápasoch.' },
    momentum: { label: 'Momentum', tip: 'Aktuálny trend ziskov/strát ratingu.' },
    teamImpact: { label: 'Tímový vplyv', tip: 'Úspešnosť a prínos v štvorhrách.' },
    clutch: { label: 'Výkon pod tlakom', tip: 'Výkony v tesných päťsetových zápasoch (3:2 / 2:3).' }
};

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
                    season: match.season || null,
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
// 3A. DERIVED STATS ENGINE (FRONTEND ONLY)
// ============================================================
function getBandLabel(val) {
    if (val < 30) return 'slabé';
    if (val < 60) return 'priemerné';
    if (val < 90) return 'silné';
    return 'mimoriadne silné';
}

function computeDerivedStats(p) {
    const avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    const singles = p.matchDetails.filter(m => !m.isDoubles);
    const doubles = p.matchDetails.filter(m => m.isDoubles);
    const closeMatches = p.matchDetails.filter(m => (m.score_own + m.score_opp) === 5);
    const recentMatches = p.matchDetails.slice(-12);
    const recentShort = p.matchDetails.slice(-5);
    const safeBlend = (base, count, threshold) => (Number.isFinite(base) && count > 0) ? confidenceBlend(base, count, threshold) : null;

    // Attack: set margin dominance (singles only)
    const attackMargins = singles.map(m => {
        const own = m.score_own || 0;
        const opp = m.score_opp || 0;
        const total = Math.max(1, own + opp);
        return (own - opp) / Math.max(3, total); // normalize to roughly [-1, 1]
    });
    const attackBase = attackMargins.length ? clamp(50 + avg(attackMargins) * 50) : null;
    const attack = safeBlend(attackBase, singles.length, 10);

    // Defense: performance in losses vs stronger opponents (fallback to all losses)
    const ratingBefore = (m) => (m.rating_after || 0) - (m.delta_own || 0);
    const oppRatingBefore = (m) => (m.opp_rating_after || 0) - (m.delta_opp || 0);
    const losses = singles.filter(m => m.score_own < m.score_opp);
    const strongLosses = losses.filter(m => oppRatingBefore(m) > ratingBefore(m) + 5);
    const defensePool = strongLosses.length ? strongLosses : losses;
    const defenseShares = defensePool.map(m => {
        const own = m.score_own || 0;
        const opp = m.score_opp || 0;
        const total = Math.max(1, own + opp);
        return own / total; // share of sets the player still took
    });
    const defenseBase = defenseShares.length ? clamp(avg(defenseShares) * 100) : null;
    const defenseRaw = safeBlend(defenseBase, defensePool.length, 8);
    const defense = Number.isFinite(defenseRaw) ? (defenseRaw * 2) : null;

    // Consistency: volatility of rating deltas (all recent matches)
    const volDeltas = recentMatches.map(m => Math.abs(m.delta_own || 0));
    const meanDelta = avg(volDeltas);
    const variance = volDeltas.length ? avg(volDeltas.map(d => Math.pow(d - meanDelta, 2))) : 0;
    const std = Math.sqrt(variance);
    const normVol = Math.min(std / 12, 1.5); // std of 12+ means low consistency
    const consistencyBase = volDeltas.length ? clamp(100 - normVol * 100) : null;
    const consistency = safeBlend(consistencyBase, recentMatches.length, 10);

    // Momentum: recent rating trend (last 5)
    const momentumDelta = avg(recentShort.map(m => m.delta_own || 0));
    const momentumBase = recentShort.length ? clamp(50 + momentumDelta * 3) : null; // 5 pts avg delta ~ +15/-15
    const momentum = safeBlend(momentumBase, recentShort.length, 5);

    // Team Impact: doubles win rate
    const dWins = doubles.filter(m => m.score_own > m.score_opp).length;
    const teamImpactBase = doubles.length ? clamp((dWins / doubles.length) * 100) : null;
    const teamImpact = safeBlend(teamImpactBase, doubles.length, 8);

    // Clutch: close 3:2 matches
    const closeWins = closeMatches.filter(m => m.score_own > m.score_opp).length;
    const clutchBase = closeMatches.length ? clamp(50 + ((closeWins / closeMatches.length) - 0.5) * 100) : null;
    const clutch = safeBlend(clutchBase, closeMatches.length, 4);

    return {
        values: {attack, defense, consistency, momentum, teamImpact, clutch},
        counts: {
            total: p.matchDetails.length,
            singles: singles.length,
            doubles: doubles.length,
            close: closeMatches.length
        }
    };
}

function buildStatsDescription(stats) {
    const v = stats.values;
    const c = stats.counts || {};

    const fmt = (x) => (Number.isFinite(x) ? x.toFixed(0) : '–');
    const tier = (x) => {
        const val = clamp(Number.isFinite(x) ? x : 50, 0, 100);
        if (val < 30) return 0;      // weak
        if (val < 60) return 1;      // average
        if (val < 90) return 2;      // strong
        return 3;                    // elite
    };
    const t = {
        attack: tier(v.attack),
        defense: tier(v.defense),
        consistency: tier(v.consistency),
        momentum: tier(v.momentum),
        teamImpact: tier(v.teamImpact),
        clutch: tier(v.clutch)
    };

    const statSentence = (key) => {
        if (!Number.isFinite(v[key])) {
            if (key === 'teamImpact') {
                return (c.doubles || 0) === 0
                    ? 'Štvorhra: zatiaľ bez odohraného zápasu – „Tímový vplyv“ sa nedá vyhodnotiť.'
                    : `„${STAT_META[key]?.label || key}“ zatiaľ nemá dosť dát na vyhodnotenie.`;
            }
            if (key === 'clutch') {
                return (c.close || 0) === 0
                    ? 'Tesné päťsetové zápasy (3:2 / 2:3): zatiaľ žiadne – „Výkon pod tlakom“ je N/A.'
                    : `„${STAT_META[key]?.label || key}“ zatiaľ nemá dosť dát na vyhodnotenie.`;
            }
            if (key === 'attack' || key === 'defense') {
                return (c.singles || 0) === 0
                    ? 'Dvojhra: zatiaľ bez odohraného zápasu – ofenzívny/defenzívny profil je N/A.'
                    : `„${STAT_META[key]?.label || key}“ zatiaľ nemá dosť dát na vyhodnotenie.`;
            }
            return `„${STAT_META[key]?.label || key}“ zatiaľ nemá dosť dát na vyhodnotenie.`;
        }
        const valTxt = fmt(v[key]);
        const lvl = t[key];
        const map = {
            attack: [
                `V ofenzíve sa presadzuje ťažšie (${valTxt}) – sety získava skôr po boji než dominanciou.`,
                `Ofenzíva je skôr priemerná (${valTxt}): dokáže vyhrávať sety, ale bez častej dominancie.`,
                `V ofenzíve pôsobí presvedčivo (${valTxt}) a často si vie vytvoriť náskok v setoch.`,
                `Ofenzíva je dominantná (${valTxt}) – časté jasné výsledky naznačujú veľkú útočnú silu.`
            ],
            defense: [
                `V defenzíve má rezervy (${valTxt}); pri prehrách často stráca rýchlo a ťažšie drží krok s favoritmi.`,
                `Defenzíva je priemerná (${valTxt}) – pri prehrách si občas zoberie set, no ťažšie otáča nepriaznivý vývoj.`,
                `Defenzíva je silná (${valTxt}): aj proti silnejším súperom vie brať sety a udržať zápas vyrovnaný.`,
                `Defenzíva je výborná (${valTxt}) – aj keď prehrá, často je to tesné a súper sa na body poriadne nadre.`
            ],
            consistency: [
                `Výkonnosť výrazne kolíše (${valTxt}); výsledky sa v čase menia od zápasu k zápasu.`,
                `Stabilita je priemerná (${valTxt}) – forma vie kolísať, no bez extrémov.`,
                `Výkony sú väčšinou vyrovnané (${valTxt}); hráč si drží svoj štandard.`,
                `Veľmi stabilný výkon (${valTxt}) – len zriedka príde výrazný výkyv.`
            ],
            momentum: [
                `Posledné zápasy naznačujú pokles formy (${valTxt}).`,
                `Forma je skôr neutrálna (${valTxt}) – bez výrazného rastu či poklesu.`,
                `Forma rastie (${valTxt}); v posledných zápasoch častejšie zbiera body.`,
                `Výrazne rastúca forma (${valTxt}) – hráč je momentálne vo veľmi dobrej vlne.`
            ],
            teamImpact: [
                `V štvorhre zatiaľ neprináša veľký bodový prínos (${valTxt}).`,
                `V štvorhre je prínos skôr vyrovnaný (${valTxt}) – raz pomôže, raz nie.`,
                `V štvorhre je výrazným prínosom (${valTxt}) a často pomáha tímu bodovať.`,
                `Opora štvorhry (${valTxt}) – v tíme prináša nadpriemerný rozdiel.`
            ],
            clutch: [
                `V koncovkách a tesných zápasoch sa presadzuje ťažšie (${valTxt}).`,
                `V tesných dueloch je to skôr 50/50 (${valTxt}).`,
                `Koncovky zvláda dobre (${valTxt}); v tesných zápasoch často dokáže rozhodnúť.`,
                `Exceluje pod tlakom (${valTxt}) – tesné zápasy vie pravidelne strhávať na svoju stranu.`
            ]
        };
        return (map[key] && map[key][lvl]) ? map[key][lvl] : '';
    };

    const parts = [
        statSentence('attack'),
        statSentence('defense'),
        statSentence('consistency'),
        statSentence('momentum'),
        statSentence('teamImpact'),
        statSentence('clutch')
    ].filter(Boolean);

    // Combination / playstyle summary (reacts to strengths + weaknesses)
    const metaLabel = (key) => (STAT_META[key] ? STAT_META[key].label : key);
    const allKeys = ['attack', 'defense', 'consistency', 'momentum', 'teamImpact', 'clutch'];
    const sorted = allKeys
        .map(k => ({ k, val: Number.isFinite(v[k]) ? v[k] : 50, lvl: t[k] }))
        .sort((a, b) => b.val - a.val);
    const top = sorted.filter(x => x.lvl >= 2).slice(0, 2);
    const low = sorted.slice().reverse().filter(x => x.lvl === 0).slice(0, 1);

    const summaryParts = [];
    if (top.length) {
        const topTxt = top.map(x => metaLabel(x.k)).join(' a ');
        summaryParts.push(`Najsilnejšie stránky: ${topTxt}.`);
    } else {
        summaryParts.push('Profil je zatiaľ bez výraznej dominantnej stránky.');
    }
    if (low.length) {
        summaryParts.push(`Najväčšia rezerva: ${metaLabel(low[0].k)}.`);
    }

    // Archetype from Attack/Defense combo
    if (t.attack >= 2 && t.defense <= 1) {
        summaryParts.push('Skôr ofenzívny typ: keď si vytvorí tlak, vie zápas rýchlo uzavrieť; dôležité je nenechať sa zatlačiť.');
    } else if (t.defense >= 2 && t.attack <= 1) {
        summaryParts.push('Skôr trpezlivý/defenzívny typ: vie držať výmeny a postupne si vybojovať sety.');
    } else if (t.attack >= 2 && t.defense >= 2) {
        summaryParts.push('Komplexný profil: vie dominovať aj odolávať tlaku.');
    }

    // Form vs stability + clutch nuance
    if (t.momentum >= 2 && t.consistency <= 1) {
        summaryParts.push('Aktuálne je vo vlne, hoci dlhodobo vie forma kolísať.');
    } else if (t.momentum <= 1 && t.consistency >= 2) {
        summaryParts.push('Aj pri slabšej vlne má pevný základ; výsledky bývajú stabilné.');
    }
    if (t.clutch >= 2 && t.momentum <= 1) {
        summaryParts.push('Aj keď forma nie je top, koncovky mu často vychádzajú.');
    }
    if (t.teamImpact >= 2) {
        summaryParts.push('V štvorhre je pre tím výrazná pridaná hodnota.');
    }

    parts.push(summaryParts.join(' '));
    return parts.join(' ');
}

function renderStatsRadar(stats, compareStats = null, attempt = 0, maxAttempts = 20) {
    const canvas = document.getElementById('statsRadarChart');
    if (!canvas || typeof Chart === 'undefined') {
        if (attempt < maxAttempts) setTimeout(() => renderStatsRadar(stats, compareStats, attempt + 1, maxAttempts), 150);
        return;
    }
    const rect = canvas.getBoundingClientRect();
    if ((rect.width < 2 || rect.height < 2) && attempt < maxAttempts) {
        setTimeout(() => renderStatsRadar(stats, compareStats, attempt + 1, maxAttempts), 150);
        return;
    }
    const ctx = canvas.getContext('2d');
    if (chartRefs['radar']) chartRefs['radar'].destroy();

    const keys = ['attack', 'defense', 'consistency', 'momentum', 'teamImpact', 'clutch'];
    const labels = ['Ofenzíva', 'Defenzíva', 'Stabilita výkonu', 'Momentum', 'Tímový vplyv', 'Výkon pod tlakom'];
    const getSampleHint = (s, key) => {
        const c = s?.counts || {};
        if (key === 'teamImpact') return `${c.doubles || 0} štvorhier`;
        if (key === 'clutch') return `${c.close || 0} päťsetákov`;
        if (key === 'attack' || key === 'defense') return `${c.singles || 0} dvojhier`;
        return `${c.total || 0} zápasov`;
    };
    const toPointArrays = (vals, color) => {
        const radii = keys.map(k => Number.isFinite(vals[k]) ? 3 : 0);
        const pointColors = keys.map(k => Number.isFinite(vals[k]) ? color : 'rgba(0,0,0,0)');
        return { radii, pointColors };
    };
    const dataPoints = keys.map(k => (Number.isFinite(stats.values[k]) ? stats.values[k] : null));
    const axisHasAnyData = keys.map(k =>
        Number.isFinite(stats.values[k]) || (compareStats && Number.isFinite(compareStats.values[k]))
    );
    const basePoint = toPointArrays(stats.values, '#4A90E2');

    const datasets = [{
        label: stats?.label || 'Hráč',
        data: dataPoints,
        backgroundColor: 'rgba(74, 144, 226, 0.15)',
        borderColor: '#4A90E2',
        borderWidth: 2,
        pointBackgroundColor: basePoint.pointColors,
        pointRadius: basePoint.radii,
        pointHoverRadius: basePoint.radii.map(r => (r ? 4 : 0))
    }];

    if (compareStats) {
        const comparePoint = toPointArrays(compareStats.values, '#dc3545');
        datasets.push({
            label: compareStats.label || 'Porovnanie',
            data: keys.map(k => (Number.isFinite(compareStats.values[k]) ? compareStats.values[k] : null)),
            backgroundColor: 'rgba(220, 53, 69, 0.12)',
            borderColor: '#dc3545',
            borderWidth: 2,
            pointBackgroundColor: comparePoint.pointColors,
            pointRadius: comparePoint.radii,
            pointHoverRadius: comparePoint.radii.map(r => (r ? 4 : 0))
        });
    }

    chartRefs['radar'] = new Chart(ctx, {
        type: 'radar',
        data: {
            labels,
            datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: datasets.length > 1 },
                tooltip: {
                    callbacks: {
                        label: (ctx) => {
                            const raw = ctx.raw;
                            const key = keys[ctx.dataIndex];
                            if (raw === null || !Number.isFinite(raw)) {
                                const hint = getSampleHint(ctx.datasetIndex === 0 ? stats : compareStats, key);
                                return `${ctx.dataset.label}: – (N/A, ${hint})`;
                            }
                            return `${ctx.dataset.label}: ${Number(raw).toFixed(0)}`;
                        }
                    }
                }
            },
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    ticks: { display: false },
                    grid: { color: 'rgba(0,0,0,0.08)' },
                    angleLines: { color: 'rgba(0,0,0,0.1)' },
                    pointLabels: {
                        color: (ctx) => axisHasAnyData[ctx.index] ? '#374151' : 'rgba(107,114,128,0.55)',
                        font: { size: 11, weight: '600' }
                    }
                }
            }
        }
    });
}

function renderDerivedStats(stats, compareStats = null) {
    const list = document.getElementById('derivedStatsList');
    if (list) {
        list.innerHTML = '';
        const fmt = (x) => (Number.isFinite(x) ? x.toFixed(0) : '–');
        ['attack', 'defense', 'consistency', 'momentum', 'teamImpact', 'clutch'].forEach(key => {
            const meta = STAT_META[key];
            const row = document.createElement('div');
            row.className = 'stat-row';
            const compareVal = compareStats ? fmt(compareStats.values[key]) : null;
            const primaryVal = fmt(stats.values[key]);
            const primaryMissing = primaryVal === '–';
            const compareMissing = compareVal === '–';
            row.innerHTML = `
                <div class="stat-label-der">
                    <span class="stat-label-main">${meta.label}</span>
                    <span class="stat-tip">${meta.tip}</span>
                </div>
                <div class="stat-value-pair">
                    <span class="stat-value stat-value-primary ${primaryMissing ? 'stat-none' : ''}">${primaryVal}</span>
                    <span class="stat-value ${compareStats ? (compareMissing ? 'stat-none' : 'stat-value-compare') : 'stat-value-dash'}">${compareStats ? compareVal : ''}</span>
                </div>
            `;
            list.appendChild(row);
        });
    }

    const desc = document.getElementById('statsDescription');
    if (desc) desc.innerText = buildStatsDescription(stats);

    const disclaimer = document.getElementById('statsDisclaimer');
    if (disclaimer) {
        const lowSample = stats.counts.total < 5 ? ' Počet zápasov je veľmi nízky, berte to s väčšou rezervou.' : '';
        const hasNA = ['attack','defense','consistency','momentum','teamImpact','clutch'].some(k => !Number.isFinite(stats.values[k]));
        const naNote = hasNA ? ' Hodnoty „–“ znamenajú, že pre danú štatistiku nie sú dostupné dáta (napr. 0 štvorhier alebo 0 päťsetákov).' : '';
        disclaimer.innerText =
            'Vyššie uvedený popis vychádza výlučne z dostupných štatistík a výkonov hráča v zápasoch. ' +
            'Bohužiaľ nevieme zmerať „skutočné“ herné zručnosti (napr. kvalitu topspinu, techniku bekhendu/forehendu, použité vybavenie a poťahy a pod.). ' +
            'Text slúži len na zábavné/informačné účely a nemusí verne odrážať reálnu hernú silu.' +
            lowSample +
            naNote;
    }

    renderStatsRadar(stats, compareStats);
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

        const logoA = getTeamLogoSrc(match.teamA);
        const logoB = getTeamLogoSrc(match.teamB);
        const logoAHtml = logoA ? `<img class="team-logo-small" src="${logoA}" alt="${match.teamA} logo" loading="lazy">` : '';
        const logoBHtml = logoB ? `<img class="team-logo-small" src="${logoB}" alt="${match.teamB} logo" loading="lazy">` : '';

        if (isPlayed) {
            const summary = document.createElement('div');
            summary.className = 'match-summary';
            summary.innerHTML = `<div class="team-name team-left">${match.teamA}</div>${logoAHtml}<div class="score-badge">${match.scoreA}-${match.scoreB}</div>${logoBHtml}<div class="team-name team-right">${match.teamB}</div><div class="expand-icon">▼</div>`;
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
                const tLogo = getTeamLogoSrc(teamName);
                let h = `<div class="team-stats ${align}">`;
                if (tLogo) h += `<div class="team-logo-stats"><img class="team-logo-large" src="${tLogo}" alt="${teamName} logo" loading="lazy"></div>`;
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
            summary.innerHTML = `<div class="team-name team-left">${match.teamA}</div>${logoAHtml}<div class="score-badge" style="background:#e0e0e0; color:#555;">VS</div>${logoBHtml}<div class="team-name team-right">${match.teamB}</div><div class="expand-icon" style="visibility:hidden">▼</div>`;
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
    let activePlayer = null;
    let activeDerived = null;
    let comparePlayer = null;
    let compareDerived = null;

    const normalizePlayerKey = (name) => (name || '').trim().toLowerCase();
    const playerLookup = {};
    sortedPlayers.forEach(p => {
        playerLookup[normalizePlayerKey(p.name)] = p;
    });

    const compareInput = document.getElementById('compareInput');
    const compareForm = document.getElementById('compareForm');
    const compareStatusEl = document.getElementById('compareStatus');
    const compareList = document.getElementById('comparePlayerList');
    const compareMatchesList = document.getElementById('compareMatchesList');
    const clearCompareBtn = document.getElementById('clearCompareBtn');

    const setCompareStatus = (msg, ok = false) => {
        if (!compareStatusEl) return;
        compareStatusEl.innerText = msg || '';
        compareStatusEl.classList.toggle('ok', !!msg && ok);
        if (!msg) compareStatusEl.classList.remove('ok');
    };

    const renderHeadToHead = (p, other) => {
        if (!compareMatchesList) return;
        if (!p || !other) {
            compareMatchesList.innerHTML = `<div class="compare-match-item">Vyberte hráča na porovnanie.</div>`;
            return;
        }
        const otherName = other.name.toLowerCase();
        const matches = p.matchDetails.filter(m => (m.opponent || '').toLowerCase().includes(otherName));
        if (matches.length === 0) {
            compareMatchesList.innerHTML = `<div class="compare-match-item">Zatiaľ žiadne vzájomné zápasy.</div>`;
            return;
        }
        const latest = [...matches].slice(-6).reverse();
        const items = latest.map(m => {
            const isWin = m.score_own > m.score_opp;
            const scoreClass = isWin ? 'compare-match-score' : 'compare-match-score loss';
            const doublesBadge = m.isDoubles ? '<span class="doubles-badge">ŠTVORHRA</span>' : '';
            const seasonLabel = m.season ? ` (${m.season})` : '';
            const badgePart = doublesBadge ? ` ${doublesBadge}` : '';
            return `<div class="compare-match-item">
                <div class="compare-match-head">
                    <span>${m.round}${seasonLabel}${badgePart}</span>
                    <span class="${scoreClass}">${m.score_own}:${m.score_opp}</span>
                </div>
                <div class="compare-match-meta">
                    <span>${m.own_name_display} (${p.team || 'N/A'})</span>
                    <span>${m.opponent} (${m.opponent_team || 'N/A'})</span>
                </div>
            </div>`;
        }).join('');
        compareMatchesList.innerHTML = items;
    };

    const populateCompareOptions = () => {
        if (!compareList) return;
        compareList.innerHTML = '';
        sortedPlayers.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.name;
            compareList.appendChild(opt);
        });
    };

    const tbody = document.getElementById('mainTableBody');
    const renderTable = () => {
        tbody.innerHTML = '';
        sortedPlayers.forEach((p, index) => {
            if (selectedTeams.length > 0 && !selectedTeams.includes(p.team)) return;
            const tr = document.createElement('tr');
            // if (p.team === 'COKERY') tr.classList.add('team-cokery');
            // if (p.team === 'ASTORIAFIT') tr.classList.add('team-astoria');
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

    const updatePlayerInUrl = (playerName) => {
        const url = new URL(window.location.href);
        if (playerName) url.searchParams.set('player', playerName);
        else url.searchParams.delete('player');
        window.history.replaceState({}, '', url);
    };

    const playerModal = document.getElementById("playerModal");
    window.closePlayerModal = () => {
        playerModal.style.display = "none";
        updatePlayerInUrl(null);
    };

    const openPlayerModal = (p, opts = {}) => {
        const {skipUrlUpdate = false} = opts;
        if (!skipUrlUpdate) updatePlayerInUrl(p.name);
        activePlayer = p;
        activeDerived = computeDerivedStats(p);
        if (activeDerived) activeDerived.label = p.name;
        comparePlayer = null;
        compareDerived = null;
        if (compareInput) compareInput.value = '';
        setCompareStatus('');
        document.getElementById('headerName').innerText = p.name;
        document.getElementById('headerTeam').innerText = p.team || "";
        const logoEl = document.getElementById('headerTeamLogo');
        const logoWrap = document.getElementById('headerTeamLogoWrapper');
        const teamLogoSrc = getTeamLogoSrc(p.team);
        if (logoEl && logoWrap) {
            if (teamLogoSrc) {
                logoEl.src = teamLogoSrc;
                logoEl.style.display = 'block';
                logoWrap.style.display = 'flex';
            } else {
                logoEl.src = '';
                logoEl.style.display = 'none';
                logoWrap.style.display = 'none';
            }
        }
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

        renderDerivedStats(activeDerived, compareDerived);

        playerModal.style.display = "flex";
        // Defer chart renders slightly to allow modal layout to settle (fixes zero-size canvas on reload with ?player=)
        setTimeout(() => {
            renderLineChart(p, comparePlayer);
        }, 80);
        renderPieCharts('matchesChart', 'setsChart', p.matches, p.wins, p.losses, p.setsWin, p.setsLose, 'matches', 'sets');
        renderPieCharts('dMatchesChart', 'dSetsChart', p.dMatches, p.dWins, p.dLosses, p.dSetsWin, p.dSetsLose, 'dMatches', 'dSets');
        renderHistory(p);
        renderHeadToHead(p, comparePlayer);
    };

    const renderLineChart = (p, compareP = null, attempt = 0) => {
        const canvas = document.getElementById('ratingChart');
        if (!canvas || typeof Chart === 'undefined') {
            if (attempt < 8) setTimeout(() => renderLineChart(p, compareP, attempt + 1), 120);
            return;
        }
        const rect = canvas.getBoundingClientRect();
        if ((rect.width < 2 || rect.height < 2) && attempt < 8) {
            setTimeout(() => renderLineChart(p, compareP, attempt + 1), 120);
            return;
        }
        const ctx = canvas.getContext('2d');
        const keysA = Object.keys(p.history).sort();
        const keysB = compareP ? Object.keys(compareP.history).sort() : [];
        const allKeys = [...new Set([...keysA, ...keysB])].sort();
        const labels = allKeys.map(k => k.split('|')[1]);
        const buildFilledSeries = (history, keys) => {
            // We want to show "missing rounds" only after the player started playing.
            // So we forward-fill between the first and last existing points, but keep
            // null before the first match and after the last match (so the line doesn't extend).
            const raw = keys.map(k => (Object.prototype.hasOwnProperty.call(history, k) ? history[k] : null));
            const firstIdx = raw.findIndex(v => v !== null && v !== undefined);
            if (firstIdx === -1) return raw.map(() => null);
            let lastIdx = -1;
            for (let i = raw.length - 1; i >= 0; i--) {
                if (raw[i] !== null && raw[i] !== undefined) { lastIdx = i; break; }
            }
            let lastVal = null;
            return raw.map((v, i) => {
                if (i < firstIdx || i > lastIdx) return null;
                if (v !== null && v !== undefined) { lastVal = v; return v; }
                return lastVal;
            });
        };

        const dataPoints = compareP ? buildFilledSeries(p.history, allKeys) : allKeys.map(k => p.history[k] ?? null);
        const datasets = [{
            label: p.name,
            data: dataPoints,
            borderColor: '#4A90E2',
            backgroundColor: 'rgba(74, 144, 226, 0.1)',
            borderWidth: 2,
            pointRadius: 4,
            tension: 0.1,
            fill: true
        }];

        if (compareP) {
            const compareData = buildFilledSeries(compareP.history, allKeys);
            datasets.push({
                label: compareP.name,
                data: compareData,
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                borderWidth: 2,
                pointRadius: 4,
                tension: 0.1,
                fill: true
            });
        }

        if (chartRefs['line']) chartRefs['line'].destroy();
        chartRefs['line'] = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: datasets.length > 1 } },
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

            // Display round with season and doubles badge when available
            const seasonLabel = m.season ? ` (${m.season})` : '';
            const doublesHtml = m.isDoubles ? '<span class="doubles-badge">ŠTVORHRA</span>' : '';
            const displayDate = `${m.round}${seasonLabel}${doublesHtml ? ' ' + doublesHtml : ''}`;

            html += `<div class="history-item">
                <div class="match-date">${displayDate}</div>
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

    const clearComparison = () => {
        comparePlayer = null;
        compareDerived = null;
        setCompareStatus('');
        if (activePlayer && activeDerived) {
            renderDerivedStats(activeDerived, null);
            renderLineChart(activePlayer, null);
            renderHeadToHead(activePlayer, null);
        }
    };

    const applyComparison = (target) => {
        if (!activePlayer || !activeDerived) return;
        comparePlayer = target;
        compareDerived = computeDerivedStats(target);
        if (compareDerived) compareDerived.label = target.name;
        setCompareStatus(`Porovnávanie s ${target.name}`, true);
        renderDerivedStats(activeDerived, compareDerived);
        renderLineChart(activePlayer, comparePlayer);
        renderHeadToHead(activePlayer, comparePlayer);
    };

    const openPlayerFromUrl = () => {
        const urlPlayer = new URL(window.location.href).searchParams.get('player');
        if (!urlPlayer) return;
        const target = playerLookup[normalizePlayerKey(urlPlayer)];
        if (target) openPlayerModal(target, {skipUrlUpdate: true});
    };

    window.onclick = (e) => {
        if (e.target == playerModal) closePlayerModal();
        const im = document.getElementById("infoModal");
        if (im && e.target == im) im.style.display = "none";
    };
    window.openInfoModal = () => document.getElementById("infoModal").style.display = "flex";
    window.closeInfoModal = () => document.getElementById("infoModal").style.display = "none";
    populateCompareOptions();
    if (compareForm) {
        compareForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!activePlayer) return;
            const val = (compareInput?.value || '').trim();
            if (!val) {
                setCompareStatus('Zadajte meno hráča.');
                renderHeadToHead(activePlayer, null);
                return;
            }
            const target = playerLookup[normalizePlayerKey(val)];
            if (!target) {
                setCompareStatus('Hráč nenájdený.');
                renderHeadToHead(activePlayer, null);
                return;
            }
            if (target.name === activePlayer.name) {
                setCompareStatus('Vyberte iného hráča.');
                renderHeadToHead(activePlayer, null);
                return;
            }
            applyComparison(target);
        });
    }
    if (clearCompareBtn) {
        clearCompareBtn.addEventListener('click', () => {
            clearComparison();
            if (compareInput) compareInput.value = '';
            if (activePlayer) renderHeadToHead(activePlayer, null);
        });
    }
    renderTable();
    initTeamFilter();
    openPlayerFromUrl();
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
            const logoSrc = getTeamLogoSrc(tn);
            const logoBlock = logoSrc ? `<div class="team-logo-banner"><img src="${logoSrc}" alt="${tn} logo" class="team-logo-large" loading="lazy"></div>` : '';
            if (mm.length === 0) return `${logoBlock}<div style="padding:15px; text-align:center; color:#999;">Žiadne zápasy</div>`;
            let h = `${logoBlock}<div class="history-list">`;
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

        const hasPodiumData = teamMatchesArray.some(m => m.isPlayed) ||
            Object.values(teams).some(t => t.points > 0 || t.matches > 0);

        Object.values(teams).sort((a, b) => (b.points !== a.points) ? b.points - a.points : (b.scoreFor - b.scoreAgainst) - (a.scoreFor - a.scoreAgainst)).forEach((t, i) => {
            const tr = document.createElement('tr');

            let podiumClass = '';
            if (hasPodiumData) {
                if (i === 0) podiumClass = 'gold';
                else if (i === 1) podiumClass = 'silver';
                else if (i === 2) podiumClass = 'bronze';
            }

            tr.className = `main-row ${podiumClass}`;
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
        <h1 class="nav-title">
            <a href="index.html">Košická Miniliga</a>
        </h1>
        <div class="nav-badge">Aktualizované:<br>18.12.2025</div>
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
    requestAnimationFrame(() => {
        if (id === 'page-rating') renderRatingPage();
        else if (id === 'page-home') renderHomePage();
        else if (id === 'page-results') renderResultsPage();
        else if (id === 'page-table') renderTablePage();
        hideLoader();
    });
});

function hideLoader() {
    document.body.classList.remove('loading');
    document.getElementById('pageLoader')?.classList.add('hidden');
}
