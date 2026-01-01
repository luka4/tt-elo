/* script.js */

// ============================================================
// 1. GLOBAL CONSTANTS & CONFIG
// ============================================================
const INITIAL_RATING = 100;
const K_FACTOR_STAGES = {1: 30, 2: 26, 3: 22, 4: 18, 5: 14, default: 10};

let chartRefs = {};

// Global helper: normalize player name for lookup
const normalizePlayerKey = (name) => (name || '').trim().toLowerCase();

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

function getThemeVar(name, fallback = '') {
    try {
        const v = window.getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        return v || fallback;
    } catch {
        return fallback;
    }
}

function toRgba(color, alpha = 1) {
    const c = String(color || '').trim();
    if (!c) return `rgba(0,0,0,${alpha})`;
    if (c.startsWith('rgba(')) return c;
    if (c.startsWith('rgb(')) {
        const m = c.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);
        if (!m) return c;
        return `rgba(${m[1]},${m[2]},${m[3]},${alpha})`;
    }
    if (c.startsWith('#')) {
        const hex = c.slice(1);
        const norm = (hex.length === 3)
            ? hex.split('').map(ch => ch + ch).join('')
            : (hex.length === 6 ? hex : '');
        if (!norm) return c;
        const r = parseInt(norm.slice(0, 2), 16);
        const g = parseInt(norm.slice(2, 4), 16);
        const b = parseInt(norm.slice(4, 6), 16);
        return `rgba(${r},${g},${b},${alpha})`;
    }
    return c;
}

function clamp(val, min = 0, max = 100) {
    return Math.min(max, Math.max(min, val));
}

function isWalkoverToken(name) {
    const n = String(name ?? '').trim().toUpperCase();
    return n === 'WO' || n === 'W/O' || n === 'W.O.';
}

// Minimal HTML escaping for safe text/attribute interpolation in innerHTML strings.
function escapeHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
    // Same escaping works for attributes.
    return escapeHtml(str);
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

// --- Date helpers (used for "Aktuálne Kolo" selection on home page) ---
function parseMatchDate(raw) {
    if (!raw) return null;
    if (raw instanceof Date && !isNaN(raw.getTime())) return raw;

    const str = String(raw).trim();
    if (!str) return null;

    // Try ISO first (YYYY-MM-DD ...)
    let m = str.match(/(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) {
        const y = parseInt(m[1], 10), mo = parseInt(m[2], 10) - 1, d = parseInt(m[3], 10);
        const dt = new Date(y, mo, d);
        return isNaN(dt.getTime()) ? null : dt;
    }

    // Common SK formats: DD.MM.YYYY or DD/MM/YYYY (optionally with extra text)
    m = str.match(/(\d{1,2})[./](\d{1,2})[./](\d{4})/);
    if (m) {
        const d = parseInt(m[1], 10), mo = parseInt(m[2], 10) - 1, y = parseInt(m[3], 10);
        const dt = new Date(y, mo, d);
        return isNaN(dt.getTime()) ? null : dt;
    }

    // Fallback: let JS try (works for some ISO-ish variants)
    const dt = new Date(str);
    return isNaN(dt.getTime()) ? null : dt;
}

function startOfIsoWeek(d) {
    const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const day = x.getDay(); // 0=Sun..6=Sat
    const diff = (day === 0) ? -6 : (1 - day); // Monday-start week
    x.setDate(x.getDate() + diff);
    x.setHours(0, 0, 0, 0);
    return x;
}

function isSameIsoWeek(a, b) {
    if (!a || !b) return false;
    return startOfIsoWeek(a).getTime() === startOfIsoWeek(b).getTime();
}

function getRoundNumFromStr(roundStr) {
    const s = String(roundStr || '');
    const m = s.match(/\d+/);
    return m ? parseInt(m[0], 10) : 0;
}

function buildRoundsIndex(matches) {
    const rounds = {};
    (matches || []).forEach(m => {
        const id = getMatchRoundId(m);
        if (!rounds[id]) {
            rounds[id] = {
                id,
                name: m.round,
                season: m.season,
                seasonOrder: getSeasonOrder(m.season),
                roundNum: getRoundNumFromStr(m.round),
                refMatch: m
            };
        }
    });
    return rounds;
}

function getThisWeekRoundId(matches, today = new Date()) {
    const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const bestById = {};

    (matches || []).forEach(m => {
        const dt = parseMatchDate(m.date);
        if (!dt) return;
        if (!isSameIsoWeek(dt, t)) return;

        const id = getMatchRoundId(m);
        const abs = Math.abs(dt.getTime() - t.getTime());
        const seasonOrder = getSeasonOrder(m.season);
        const roundNum = getRoundNumFromStr(m.round);

        const prev = bestById[id];
        if (!prev || abs < prev.abs) {
            bestById[id] = { abs, seasonOrder, roundNum, refMatch: m };
        } else if (abs === prev.abs) {
            // Tie-break: prefer later season/round (more "current")
            if (seasonOrder > prev.seasonOrder || (seasonOrder === prev.seasonOrder && roundNum > prev.roundNum)) {
                bestById[id] = { abs, seasonOrder, roundNum, refMatch: m };
            }
        }
    });

    const entries = Object.entries(bestById);
    if (entries.length === 0) return null;

    entries.sort(([, a], [, b]) => {
        if (a.abs !== b.abs) return a.abs - b.abs;
        if (a.seasonOrder !== b.seasonOrder) return b.seasonOrder - a.seasonOrder;
        return b.roundNum - a.roundNum;
    });
    return entries[0][0];
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
// 3B. "REBRÍČEK" POINTS (LEAGUE SCORING)
// ============================================================
// Rules (as provided):
// - Singles win = 1 point
// - Doubles win = 0.5 point (doubles loss = 0)
// - Kontumácia (team walkover) gives special points to players listed in the sheet:
//   played 1x -> +0.5, 2x -> +1.0, 3x -> +1.5, 4x -> +2.5
//
// Data encoding note:
// - Walkovers are represented as matches where one side is "WO" (or W/O / W.O.).
// - For full-walkover fixtures (no real games played between the teams in that round),
//   we apply the special mapping instead of counting each WO game as a full win.
function computeRebricekMap(playersByName) {
    const points = new Map();
    const addPts = (playerName, delta) => {
        if (!playerName || !Number.isFinite(delta)) return;
        // Keep aligned with rating page: only show players that exist in playersByName (processData)
        if (!playersByName || !playersByName[playerName]) return;
        points.set(playerName, (points.get(playerName) || 0) + delta);
    };

    const splitNames = (raw) => String(raw || '').split('/').map(s => s.trim()).filter(Boolean);
    const hasWO = (names) => names.some(isWalkoverToken);
    const isDoublesMatch = (m) => (m?.doubles === true || m?.doubles === "true");
    const scoreNum = (x) => (Number.isFinite(x) ? x : parseInt(x, 10)) || 0;

    const fixtureKey = (m) => `${getMatchRoundId(m)}::${(m.player_a_team || '').trim()}::${(m.player_b_team || '').trim()}`;
    const fixtures = new Map();

    // 1) Group played matches by fixture (round + teams) and track whether fixture has any "real" (non-WO) games.
    (matchResults || []).filter(isPlayedMatch).forEach(m => {
        const key = fixtureKey(m);
        const fx = fixtures.get(key) || { items: [], hasRealGame: false };

        const namesA = splitNames(m.player_a);
        const namesB = splitNames(m.player_b);
        const aWO = hasWO(namesA);
        const bWO = hasWO(namesB);

        if (!aWO && !bWO) fx.hasRealGame = true;
        fx.items.push({
            m,
            isDoubles: isDoublesMatch(m),
            namesA,
            namesB,
            aWO,
            bWO
        });
        fixtures.set(key, fx);
    });

    const kontumacyPointsForAppearances = (appearances) => {
        const n = Math.max(0, appearances | 0);
        if (n <= 0) return 0;
        if (n === 4) return 2.5;
        // 1->0.5, 2->1.0, 3->1.5
        if (n >= 1 && n <= 3) return n * 0.5;
        // Safety: cap at 2.5 (league sheet implies max 4x)
        return 2.5;
    };

    // 2) Compute points per fixture
    fixtures.forEach(fx => {
        if (!fx.items.length) return;

        // Full kontumácia fixture: no real games, only WO-encoded games.
        if (!fx.hasRealGame) {
            const appearances = new Map(); // playerName -> number of WO games listed in the sheet

            fx.items.forEach(it => {
                // Ignore WO vs WO placeholders
                if (it.aWO && it.bWO) return;
                // Count players on the non-WO side as "played"
                const nonWO = it.aWO ? it.namesB : it.namesA;
                nonWO.forEach(n => {
                    if (isWalkoverToken(n)) return;
                    appearances.set(n, (appearances.get(n) || 0) + 1);
                });
            });

            appearances.forEach((count, playerName) => {
                addPts(playerName, kontumacyPointsForAppearances(count));
            });
            return;
        }

        // Partial fixture (some real games played): treat each match individually.
        fx.items.forEach(it => {
            const sA = scoreNum(it.m.score_a);
            const sB = scoreNum(it.m.score_b);
            if (sA === sB) return;

            // Determine winner side (including WO games within an otherwise "real" fixture).
            const winnerNames = (sA > sB) ? it.namesA : it.namesB;
            if (!winnerNames || winnerNames.length === 0) return;

            if (it.isDoubles) {
                winnerNames.forEach(n => {
                    if (isWalkoverToken(n)) return;
                    addPts(n, 0.5);
                });
            } else {
                const winner = winnerNames.find(n => !isWalkoverToken(n));
                if (winner) addPts(winner, 1);
            }
        });
    });

    return points;
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
    const themePrimary = getThemeVar('--color-primary', '#7c3aed');
    const themeDanger = getThemeVar('--color-danger', '#dc2626');
    const themeTextSubtle = getThemeVar('--color-text-subtle', '#374151');
    const themeMuted = getThemeVar('--color-muted', '#6b7280');
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
    const basePoint = toPointArrays(stats.values, themePrimary);

    const datasets = [{
        label: stats?.label || 'Hráč',
        data: dataPoints,
        backgroundColor: toRgba(themePrimary, 0.15),
        borderColor: themePrimary,
        borderWidth: 2,
        pointBackgroundColor: basePoint.pointColors,
        pointRadius: basePoint.radii,
        pointHoverRadius: basePoint.radii.map(r => (r ? 4 : 0))
    }];

    if (compareStats) {
        const comparePoint = toPointArrays(compareStats.values, themeDanger);
        datasets.push({
            label: compareStats.label || 'Porovnanie',
            data: keys.map(k => (Number.isFinite(compareStats.values[k]) ? compareStats.values[k] : null)),
            backgroundColor: toRgba(themeDanger, 0.12),
            borderColor: themeDanger,
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
                        color: (ctx) => axisHasAnyData[ctx.index] ? themeTextSubtle : toRgba(themeMuted, 0.55),
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

    // "Aktuálne Kolo" selection:
    // Prefer a round that has any match scheduled in the same ISO week as today.
    // Fallback to the existing "latest played round" logic.
    const thisWeekRoundId = getThisWeekRoundId(matchResults, new Date());
    const currentRoundId = thisWeekRoundId || latestRoundId;

    // Stats
    const uniqueTeamMatches = new Set(playedMatches.map(m => `${getMatchRoundId(m)}_${m.player_a_team}_${m.player_b_team}`));
    document.getElementById('totalRounds').innerText = roundsSet.size;
    document.getElementById('totalTeamMatches').innerText = uniqueTeamMatches.size;
    document.getElementById('totalMatches').innerText = playedMatches.length;
    document.getElementById('totalSets').innerText = totalSets;

    // Back-side explanations for the 4 stat cards
    const roundsBack = document.getElementById('statBackRoundsText');
    if (roundsBack) {
        const weeks = roundsSet.size || 0;
        roundsBack.innerText = `V lige sa odohralo približne ${weeks} týždňov (kôl).`;
    }
    const tmBack = document.getElementById('statBackTeamMatchesText');
    if (tmBack) {
        const hours = uniqueTeamMatches.size * 3;
        tmBack.innerText = `Ak jeden tímový zápas trvá cca 3 hodiny, tak spolu je to približne ${hours} hodín stolného tenisu.`;
    }
    const matchesBack = document.getElementById('statBackMatchesText');
    if (matchesBack) {
        matchesBack.innerText = 'Celkový počet odohraných zápasov (dvojhry + štvorhry) v lige.';
    }
    const setsBack = document.getElementById('statBackSetsText');
    if (setsBack) {
        const points = totalSets * 18;
        setsBack.innerText = `Ak má jeden set v priemere ~18 lôpt, tak sa odohralo približne ${points} lôpt.`;
    }

    // Home "stat cards" flip interaction (tap/click + keyboard)
    // Implemented here so it only runs on the home page.
    (() => {
        const cards = Array.from(document.querySelectorAll('[data-flip-card]'));
        if (!cards.length) return;
        const setFlipped = (card, flipped) => {
            card.classList.toggle('is-flipped', !!flipped);
            card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
            const back = card.querySelector('.stat-face--back');
            if (back) back.setAttribute('aria-hidden', flipped ? 'false' : 'true');
        };
        const closeAll = (except = null) => {
            cards.forEach(c => { if (c !== except) setFlipped(c, false); });
        };
        cards.forEach(card => {
            if (card.dataset.flipBound === '1') return;
            card.dataset.flipBound = '1';

            const onToggle = () => {
                const willFlip = !card.classList.contains('is-flipped');
                closeAll(willFlip ? card : null);
                setFlipped(card, willFlip);
            };

            card.addEventListener('click', (e) => {
                // Let links on the back side work normally
                if (e.target && e.target.closest && e.target.closest('a')) return;
                e.preventDefault();
                onToggle();
            }, {passive: false});

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onToggle();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    closeAll();
                }
            }, {passive: false});
        });

        // Click outside closes flipped cards
        document.addEventListener('click', (e) => {
            if (e.target && e.target.closest && e.target.closest('[data-flip-card]')) return;
            closeAll();
        }, {passive: true, once: true});
    })();

    const currentTitleText = currentRoundId ? (() => {
        // Prefer the round name from any match in that round; fall back to legacy string.
        const m = matchResults.find(x => getMatchRoundId(x) === currentRoundId) || playedMatches.find(x => getMatchRoundId(x) === currentRoundId);
        const s = m && m.season ? ` (${m.season})` : '';
        return m ? `${m.round}${s}` : (latestRoundName || currentRoundId);
    })() : "Zatiaľ žiadne zápasy";

    const latestTitleEl = document.getElementById('latestRoundTitle');
    if (latestTitleEl) {
        latestTitleEl.innerText = currentRoundId ? `Aktuálne Kolo: ${currentTitleText}` : currentTitleText;
    }

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
        upsetDiv.innerHTML = `<div style="text-align:center; color:var(--color-muted-2);">Žiadne prekvapenia v tomto kole.</div>`;
    }

    // Latest Results (Now "Current Round")
    if (currentRoundId) {
        const currentRoundMatches = matchResults.filter(m => getMatchRoundId(m) === currentRoundId);
        renderMatchList(currentRoundMatches, document.getElementById('latestRoundContainer'), false);

        // Previous Round Logic
        const roundsIndex = buildRoundsIndex(matchResults);
        const allRoundIds = Object.values(roundsIndex)
            .sort((a, b) => {
                if (a.seasonOrder !== b.seasonOrder) return a.seasonOrder - b.seasonOrder; // older -> newer
                return a.roundNum - b.roundNum; // lower -> higher
            })
            .map(r => r.id);
        const currentIndex = allRoundIds.indexOf(currentRoundId);

        if (currentIndex > 0) {
            const prevRoundId = allRoundIds[currentIndex - 1];
            const prevRoundMatches = matchResults.filter(m => getMatchRoundId(m) === prevRoundId);

            const pm = prevRoundMatches[0];
            const s = pm && pm.season ? ` (${pm.season})` : '';
            const prevName = pm ? `${pm.round}${s}` : prevRoundId;

            const prevHeader = document.getElementById('prevRoundTitle')?.parentElement;
            if (prevHeader) prevHeader.style.display = '';
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
    const futureMatches = matchResults.filter(m => !isPlayedMatch(m) && getMatchRoundId(m) !== currentRoundId);

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
        const logoSlotHtml = (src, teamName) => {
            const alt = `${escapeAttr(teamName)} logo`;
            const img = src ? `<img class="team-logo-small" src="${src}" alt="${alt}" loading="lazy">` : '';
            return `<div class="team-logo-slot">${img}</div>`;
        };
        const logoAHtml = logoSlotHtml(logoA, match.teamA);
        const logoBHtml = logoSlotHtml(logoB, match.teamB);

        if (isPlayed) {
            const summary = document.createElement('div');
            summary.className = 'match-summary';
            summary.innerHTML = `<div class="team-name team-left">${escapeHtml(match.teamA)}</div>${logoAHtml}<div class="score-badge">${match.scoreA}-${match.scoreB}</div>${logoBHtml}<div class="team-name team-right">${escapeHtml(match.teamB)}</div><div class="expand-icon">▼</div>`;
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
                    if (!namesStr) return;
                    namesStr.split('/').map(n => n.trim()).forEach(n => {
                        if (!n || isWalkoverToken(n)) return;
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
                if (tLogo) h += `<div class="team-logo-stats"><img class="team-logo-large" src="${tLogo}" alt="${escapeAttr(teamName)} logo" loading="lazy"></div>`;
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
            summary.innerHTML = `<div class="team-name team-left">${escapeHtml(match.teamA)}</div>${logoAHtml}<div class="score-badge score-badge--vs">VS</div>${logoBHtml}<div class="team-name team-right">${escapeHtml(match.teamB)}</div><div class="expand-icon" style="visibility:hidden">▼</div>`;
            matchRow.appendChild(summary);

            const dateStr = match.date ? match.date : '';
            const locStr = match.location ? match.location : '';
            if (dateStr || locStr) {
                const metaDiv = document.createElement('div');
                metaDiv.style.cssText = "text-align:center; font-size:0.75em; color:var(--color-muted); padding-bottom:8px; margin-top:-8px;";
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
    // Baseline order (default view): by rating desc
    const sortedPlayers = Object.values(players).sort((a, b) => b.rating - a.rating);

    // Attach "Rebríček" points per player (computed from matchResults + kontumácia rules)
    const rebricekMap = computeRebricekMap(players);
    sortedPlayers.forEach(p => {
        p.rebricek = rebricekMap.get(p.name) || 0;
    });

    // Attach "Form" (last 5 matches) for rating table
    // Uses matchDetails order (chronological as processed) and marks win/loss by match score.
    const computeForm = (p, n = 5) => {
        const details = Array.isArray(p?.matchDetails) ? p.matchDetails : [];
        const recent = details.slice(-n);
        const bools = recent.map(m => (m.score_own || 0) > (m.score_opp || 0)); // true=win, false=loss
        // Score for sorting: recent results have higher weight (binary encoded)
        let score = 0;
        bools.forEach((isWin, idx) => {
            const weight = 1 << idx; // oldest=1, newest=16 (for 5)
            if (isWin) score += weight;
        });
        const wins = bools.filter(Boolean).length;
        return { bools, score, wins };
    };
    sortedPlayers.forEach(p => {
        const f = computeForm(p, 5);
        p.form = f.bools;
        p.formScore = f.score;
        p.formWins = f.wins;
    });
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

    // Create rating-based ranking (1-based, doesn't change with sorting)
    const ratingRanking = new Map();
    sortedPlayers.forEach((p, i) => {
        ratingRanking.set(normalizePlayerKey(p.name), i + 1);
    });

    // Sorting state (applies to all columns except "Tím")
    const baselineIndex = new Map(sortedPlayers.map((p, i) => [normalizePlayerKey(p.name), i]));
    let sortState = { key: 'rating', dir: 'desc' }; // default = rating desc

    const cmpStr = (a, b) => String(a || '').localeCompare(String(b || ''), 'sk', {sensitivity: 'base'});
    const cmpNum = (a, b) => (Number(a) || 0) - (Number(b) || 0);
    const sortPlayers = (list) => {
        const dirMul = sortState.dir === 'asc' ? 1 : -1;
        const decorated = list.map((p, idx) => ({p, idx})); // stable

        const getSuccessMatches = (p) => p.matches > 0 ? (p.wins / p.matches) * 100 : 0;
        const getSuccessSets = (p) => {
            const total = (p.setsWin || 0) + (p.setsLose || 0);
            return total > 0 ? ((p.setsWin || 0) / total) * 100 : 0;
        };
        const getLastPlayedNum = (p) => getRoundNumFromStr(p.lastPlayed);
        const getBestWinRating = (p) => (typeof p.bestWinRating === 'number' && !isNaN(p.bestWinRating)) ? p.bestWinRating : -Infinity;

        const valueForKey = (p, key) => {
            switch (key) {
                // Special: "#" column acts as "reset to default order"
                case 'pos':
                    return 0;
                case 'name':
                    return p.name || '';
                case 'form':
                    return p.formScore || 0;
                case 'rating':
                    return p.rating || 0;
                case 'rebricek':
                    return p.rebricek || 0;
                case 's_matches':
                    return p.matches || 0;
                case 's_wins':
                    return p.wins || 0;
                case 's_losses':
                    return p.losses || 0;
                case 's_sets_win':
                    return p.setsWin || 0;
                case 's_sets_lose':
                    return p.setsLose || 0;
                case 's_success_matches':
                    return getSuccessMatches(p);
                case 's_success_sets':
                    return getSuccessSets(p);
                case 'd_matches':
                    return p.dMatches || 0;
                case 'd_wins':
                    return p.dWins || 0;
                case 'd_losses':
                    return p.dLosses || 0;
                case 'best_win':
                    return getBestWinRating(p);
                case 'last_played':
                    return getLastPlayedNum(p);
                case 'max_rating':
                    return p.maxRating || 0;
                case 'min_rating':
                    return p.minRating || 0;
                default:
                    return 0;
            }
        };

        const isStringKey = (k) => k === 'name';
        decorated.sort((A, B) => {
            const a = A.p, b = B.p;
            if (sortState.key === 'pos') {
                const ia = baselineIndex.get(normalizePlayerKey(a.name)) ?? 0;
                const ib = baselineIndex.get(normalizePlayerKey(b.name)) ?? 0;
                if (ia !== ib) return (ia - ib) * dirMul;
                return (A.idx - B.idx); // stable
            }

            // Special handling for sets column: sort by setsWin desc/asc then setsLose inverse for readability
            if (sortState.key === 's_sets') {
                const aw = a.setsWin || 0, bw = b.setsWin || 0;
                const al = a.setsLose || 0, bl = b.setsLose || 0;
                if (aw !== bw) return (aw - bw) * dirMul;
                // Fewer lost sets is better when sorting desc; invert using dirMul
                if (al !== bl) return (bl - al) * dirMul;
                return (A.idx - B.idx);
            }

            const va = valueForKey(a, sortState.key);
            const vb = valueForKey(b, sortState.key);
            const diff = isStringKey(sortState.key) ? cmpStr(va, vb) : cmpNum(va, vb);
            if (diff !== 0) return diff * dirMul;

            // Tie-break: baseline order, then stable index
            const ia = baselineIndex.get(normalizePlayerKey(a.name)) ?? 0;
            const ib = baselineIndex.get(normalizePlayerKey(b.name)) ?? 0;
            if (ia !== ib) return ia - ib;
            return A.idx - B.idx;
        });
        return decorated.map(x => x.p);
    };

    const getDisplayedPlayers = () => {
        let list = sortedPlayers;
        if (selectedTeams.length > 0) list = list.filter(p => selectedTeams.includes(p.team));
        return sortPlayers(list);
    };

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
        const display = getDisplayedPlayers();
        display.forEach((p, index) => {
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

            const ratingRank = ratingRanking.get(normalizePlayerKey(p.name)) || (index + 1);
            const rebricekVal = Number.isInteger(p.rebricek) ? String(p.rebricek) : (p.rebricek || 0).toFixed(1);
            const formBools = Array.isArray(p.form) ? p.form : [];
            const formHtml = (() => {
                // Always render 5 circles; missing matches appear as empty/neutral.
                const dots = [];
                for (let i = 0; i < 5; i++) {
                    if (i >= formBools.length) dots.push(`<span class="form-dot form-dot--empty" title="N/A"></span>`);
                    else dots.push(`<span class="form-dot ${formBools[i] ? 'form-dot--win' : 'form-dot--loss'}" title="${formBools[i] ? 'Výhra' : 'Prehra'}"></span>`);
                }
                return `<div class="form-dots" aria-label="Forma (posledných 5 zápasov)">${dots.join('')}</div>`;
            })();
            tr.innerHTML = `
                <td>${ratingRank}</td><td>${p.name}</td><td>${p.team}</td>
                <td class="form-cell">${formHtml}</td>
                <td class="${ratingClass}">${p.rating.toFixed(2)}</td>
<!--                TODO temporary remove rebricek-->
<!--                <td>${rebricekVal}</td>-->
                <td class="border-left-thick">${p.matches}</td><td>${p.wins}</td><td>${p.losses}</td>
                <td>${p.setsWin}:${p.setsLose}</td><td>${successMatches}</td><td>${successSets}</td>
                <td class="border-left-thick">${p.dMatches}</td><td>${p.dWins}</td><td>${p.dLosses}</td>
                <td class="border-left-thick">${bestWinStr}</td><td>${p.lastPlayed}</td>
                <td>${p.maxRating.toFixed(2)}</td><td>${p.minRating.toFixed(2)}</td>
            `;
            tbody.appendChild(tr);
        });
    };

    const attachSortHandlersForThead = (theadEl) => {
        if (!theadEl) return;
        const rows = Array.from(theadEl.querySelectorAll('tr'));
        if (rows.length < 2) return;
        const topRow = Array.from(rows[0].children).filter(el => el.tagName === 'TH');
        const subRow = Array.from(rows[1].children).filter(el => el.tagName === 'TH');

        // Build leaf headers in visual left-to-right order:
        // - leaf in top row are those with rowspan > 1 (single-column headers)
        // - group headers in top row (colspan > 1) are expanded using subRow THs
        let subPtr = 0;
        const leafThs = [];
        topRow.forEach(th => {
            const colSpan = th.colSpan || 1;
            const rowSpan = th.rowSpan || 1;
            if (rowSpan > 1 && colSpan === 1) {
                leafThs.push(th);
            } else if (colSpan > 1) {
                for (let i = 0; i < colSpan; i++) {
                    if (subRow[subPtr]) leafThs.push(subRow[subPtr]);
                    subPtr++;
                }
            }
        });

        // Column index -> sort key (must match tbody column order)
        const colKeys = [
            'pos',           // #
            'name',          // Hráč
            null,            // Tím (excluded)
            'form',          // Forma
            'rating',        // Rating
            // TODO temporary remove rebricek
            // 'rebricek',
            's_matches',     // Singles: Zápasy
            's_wins',        // Singles: Výhry
            's_losses',      // Singles: Prehry
            null,            // Singles: Sety (NOT sortable)
            's_success_matches', // Singles: Úspešnosť Zápasy
            's_success_sets',    // Singles: Úspešnosť Sety
            'd_matches',     // Doubles: Zápasy
            'd_wins',        // Doubles: Výhry
            'd_losses',      // Doubles: Prehry
            null,            // Naj Výhra (NOT sortable)
            'last_played',   // Naposledy Hral
            'max_rating',    // Max Rating
            'min_rating'     // Min Rating
        ];

        leafThs.forEach((th, colIdx) => {
            const key = colKeys[colIdx] || null;
            // Skip Team, and skip any unexpected headers
            if (!key) return;
            // Allow re-attachment for sticky headers
            if (th.dataset.sortBound === '1' && !theadEl.closest('#stickyHeaderContainer')) return;
            th.dataset.sortBound = '1';
            th.style.cursor = 'pointer';
            th.addEventListener('click', (e) => {
                // Do not interfere with nested controls (like Team dropdown button)
                if (e.target && e.target.closest && e.target.closest('.team-filter-wrapper')) return;
                e.preventDefault();
                e.stopPropagation();

                const prevKey = sortState.key;
                if (prevKey === key) {
                    sortState.dir = (sortState.dir === 'asc') ? 'desc' : 'asc';
                } else {
                    sortState.key = key;
                    // Default direction: text asc, numbers desc (more useful in stats tables)
                    sortState.dir = (key === 'name') ? 'asc' : 'desc';
                    // "#" acts as "reset": keep default rating desc
                    if (key === 'pos') sortState.dir = 'asc';
                }
                renderTable();
            }, {passive: false});
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
        attachSortHandlersForThead(thead);
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

        // Attach sort handlers to sticky header
        attachSortHandlersForThead(stickyTable.querySelector('thead'));

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

        let wasSticking = false;
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
                // Enable interaction when visible (allows sorting on sticky header)
                stickyContainer.style.pointerEvents = 'auto';
                stickyTable.style.pointerEvents = 'auto';
                stickyTable.querySelectorAll('th').forEach(th => th.style.pointerEvents = 'auto');
                stickyContainer.style.top = navHeight + 'px';
                stickyContainer.scrollLeft = wrapper.scrollLeft;
                // Only update widths when first becoming visible or after resize
                if (!wasSticking) {
                    updateWidths();
                    wasSticking = true;
                }
            } else {
                if (wasSticking) {
                    stickyContainer.style.display = 'none';
                    stickyContainer.style.pointerEvents = 'none';
                    stickyTable.style.pointerEvents = 'none';
                    stickyTable.querySelectorAll('th').forEach(th => th.style.pointerEvents = 'none');
                    wasSticking = false;
                }
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
        const playerRanking = ratingRanking.get(normalizePlayerKey(p.name)) || '?';
        document.getElementById('headerName').innerText = `#${playerRanking} ${p.name}`;
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
        renderFormHistory(p);
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
        const themePrimary = getThemeVar('--color-primary', '#7c3aed');
        const themeDanger = getThemeVar('--color-danger', '#dc2626');
        const datasets = [{
            label: p.name,
            data: dataPoints,
            borderColor: themePrimary,
            backgroundColor: toRgba(themePrimary, 0.1),
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
                borderColor: themeDanger,
                backgroundColor: toRgba(themeDanger, 0.1),
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

    const renderFormHistory = (p) => {
        const container = document.getElementById('formHistory');
        if (!container) return;
        container.innerHTML = '';
        const allMatches = Array.isArray(p?.matchDetails) ? p.matchDetails : [];
        // Show all matches; let flex-wrap handle overflow into multiple lines.
        const subset = allMatches;
        if (!subset.length) {
            container.innerHTML = `<div style="color:var(--color-muted); font-size:0.85em;">Žiadne zápasy.</div>`;
            return;
        }
        const dots = subset.map((m) => {
            const isWin = (m.score_own || 0) > (m.score_opp || 0);
            const cls = isWin ? 'form-dot--win' : 'form-dot--loss';
            const badge = m.isDoubles ? ' (Štvorhra)' : '';
            const title = `${m.round || ''}${m.season ? ' ' + m.season : ''}${badge} • ${m.score_own || 0}:${m.score_opp || 0}`;
            return `<span class="form-dot ${cls}" title="${escapeAttr(title)}"></span>`;
        });
        container.innerHTML = dots.join('');
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
            const themeSuccess = getThemeVar('--color-success', '#16a34a');
            const themeDanger = getThemeVar('--color-danger', '#dc2626');
            chartRefs[id] = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Výhry', 'Prehry'],
                    datasets: [{data: [w, l], backgroundColor: [themeSuccess, themeDanger], borderWidth: 0}]
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
        title.style.cssText = "color: var(--color-primary); margin: 25px 0 10px 0; padding-left: 5px; border-left: 4px solid var(--color-primary);";
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
            const logoBlock = logoSrc ? `<div class="team-logo-banner"><img src="${logoSrc}" alt="${escapeAttr(tn)} logo" class="team-logo-large" loading="lazy"></div>` : '';
            if (mm.length === 0) return `${logoBlock}<div style="padding:15px; text-align:center; color:var(--color-muted-2);">Žiadne zápasy</div>`;
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
                const vsStyle = !m.isPlayed ? 'style="color:var(--color-muted-2);"' : '';
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
}

// --- PREDICTION PAGE ---
function renderPredictionPage() {
    const {players} = processData();
    const normalizeKey = (n) => (n || '').trim().toLowerCase();
    const allPlayers = Object.values(players).filter(p => p.name && p.team && p.team !== 'N/A');
    const playerLookup = new Map(allPlayers.map(p => [normalizeKey(p.name), p]));

    // Group players by team and sort them by activity then rating
    const teamMap = new Map();
    const sortRoster = (list) => [...list].sort((a, b) => {
        const actA = (a.matches + a.dMatches);
        const actB = (b.matches + b.dMatches);
        if (actA !== actB) return actB - actA;
        if (a.rating !== b.rating) return b.rating - a.rating;
        return a.name.localeCompare(b.name, 'sk', {sensitivity: 'base'});
    });
    allPlayers.forEach(p => {
        if (!teamMap.has(p.team)) teamMap.set(p.team, []);
        teamMap.get(p.team).push(p);
    });
    teamMap.forEach((list, key) => teamMap.set(key, sortRoster(list)));
    const teamNames = Array.from(teamMap.keys()).sort((a, b) => a.localeCompare(b, 'sk', {sensitivity: 'base'}));

    const teamSelectA = document.getElementById('teamSelectA');
    const teamSelectB = document.getElementById('teamSelectB');
    const teamPredictionResult = document.getElementById('teamPredictionResult');
    const teamPredScore = document.getElementById('teamPredScore');
    const teamRateA = document.getElementById('teamRateA');
    const teamRateB = document.getElementById('teamRateB');
    const teamStatus = document.getElementById('teamPredictionStatus');
    const lineupA = document.getElementById('teamLineupA');
    const lineupB = document.getElementById('teamLineupB');
    const lineupTitleA = document.getElementById('lineupTitleA');
    const lineupTitleB = document.getElementById('lineupTitleB');
    const teamPredictBtn = document.getElementById('teamPredictBtn');
    const teamLogoA = document.getElementById('teamLogoA');
    const teamLogoB = document.getElementById('teamLogoB');

    // Individual prediction elements
    const indForm = document.getElementById('individualPredictionForm');
    const indStatus = document.getElementById('individualPredictionStatus');
    const indResult = document.getElementById('individualPredictionResult');
    const indPlayerA = document.getElementById('individualPlayerA');
    const indPlayerB = document.getElementById('individualPlayerB');
    const indScoreList = document.getElementById('individualScoreList');
    const indRateA = document.getElementById('indRateA');
    const indRateB = document.getElementById('indRateB');
    const indScoreNote = document.getElementById('individualScoreNote');
    const indPlayersList = document.getElementById('individualPlayersList');

    if (!teamSelectA || !teamSelectB || !teamPredictionResult) return;

    const avgRating = (list) => list.length ? list.reduce((s, p) => s + p.rating, 0) / list.length : 0;
    const winProb = (rA, rB) => 1 / (1 + Math.pow(10, (rB - rA) / 300));
    const getScoreDistribution = (probWin) => {
        const p = Math.max(0, Math.min(1, probWin || 0));
        const q = 1 - p;
        const dist = {
            '3-0': Math.pow(p, 3),
            '3-1': 3 * Math.pow(p, 3) * q,
            '3-2': 6 * Math.pow(p, 3) * Math.pow(q, 2),
            '2-3': 6 * Math.pow(q, 3) * Math.pow(p, 2),
            '1-3': 3 * Math.pow(q, 3) * p,
            '0-3': Math.pow(q, 3),
        };
        const total = Object.values(dist).reduce((s, v) => s + v, 0) || 1;
        return Object.fromEntries(Object.entries(dist).map(([k, v]) => [k, (v / total) * 100]));
    };

    const renderScoreList = (el, dist) => {
        if (!el) return;
        const entries = Object.entries(dist || {});
        let maxVal = -Infinity, minVal = Infinity;
        entries.forEach(([, v]) => {
            if (v > maxVal) maxVal = v;
            if (v < minVal) minVal = v;
        });
        const html = entries.map(([score, pct]) => {
            const val = Number.isFinite(pct) ? pct.toFixed(1) : '0.0';
            let cls = '';
            if (pct === maxVal) cls = ' score-row--max';
            else if (pct === minVal) cls = ' score-row--min';
            return `<div class="score-row${cls}"><span class="score-label">${score}</span><div class="score-bar"><span class="score-bar-fill" style="width:${val}%;"></span></div><span class="score-value">${val}%</span></div>`;
        }).join('');
        el.innerHTML = html;
    };

    const setTeamLogo = (teamName, targetEl) => {
        if (!targetEl) return;
        if (!teamName) {
            targetEl.innerHTML = '';
            return;
        }
        const logo = getTeamLogoSrc(teamName);
        if (logo) {
            targetEl.innerHTML = `<img src="${escapeAttr(logo)}" alt="${escapeAttr(teamName)} logo" loading="lazy">`;
        } else {
            targetEl.innerHTML = `<span class="logo-placeholder">${escapeHtml(teamName.slice(0, 3).toUpperCase())}</span>`;
        }
    };

    const populateTeams = (select) => {
        if (!select) return;
        select.innerHTML = `<option value="">${select.id === 'teamSelectA' ? 'Vyberte domáci tím' : 'Vyberte hosťujúci tím'}</option>`;
        teamNames.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t;
            opt.textContent = t;
            select.appendChild(opt);
        });
    };

    const renderLineup = (teamName, targetEl, titleEl) => {
        if (titleEl && !titleEl.dataset.defaultTitle) titleEl.dataset.defaultTitle = titleEl.textContent || '';
        if (titleEl) titleEl.textContent = teamName ? `Zostava ${teamName}` : (titleEl.dataset.defaultTitle || '');
        if (!targetEl) return;
        targetEl.innerHTML = '';
        if (!teamName) {
            targetEl.innerHTML = `<div class="lineup-hint">Vyberte tím pre zobrazenie hráčov.</div>`;
            return;
        }
        const roster = teamMap.get(teamName) || [];
        if (roster.length === 0) {
            targetEl.innerHTML = `<div class="lineup-hint">Žiadni hráči k dispozícii.</div>`;
            return;
        }
        roster.forEach((p, idx) => {
            const checked = idx < 4;
            const meta = `Rating ${p.rating.toFixed(1)} • Zápasy ${p.matches + p.dMatches}`;
            targetEl.insertAdjacentHTML('beforeend',
                `<label class="lineup-player">
                    <div>
                        <div>${escapeHtml(p.name)}</div>
                        <div class="player-meta">${escapeHtml(meta)}</div>
                    </div>
                    <input type="checkbox" value="${escapeAttr(p.name)}" ${checked ? 'checked' : ''}>
                </label>`);
        });

        const applyLimitState = () => {
            const checked = targetEl.querySelectorAll('input[type="checkbox"]:checked');
            const disable = checked.length >= 4;
            targetEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                if (!cb.checked) cb.disabled = disable;
            });
        };

        if (!targetEl.dataset.boundLimit) {
            targetEl.addEventListener('change', (e) => {
                const cb = e.target;
                if (!(cb instanceof HTMLInputElement) || cb.type !== 'checkbox') return;
                const checked = targetEl.querySelectorAll('input[type="checkbox"]:checked');
                if (checked.length > 4) {
                    cb.checked = false;
                    setTeamStatus('Maximálne 4 hráči na tím.');
                } else if (checked.length >= 3) {
                    setTeamStatus('');
                }
                applyLimitState();
            });
            targetEl.dataset.boundLimit = '1';
        }
        applyLimitState();
    };

    const collectLineup = (teamName, targetEl) => {
        const roster = teamMap.get(teamName) || [];
        const fallback = roster.slice(0, 4).map(p => p.name);
        const selectedNames = Array.from(targetEl?.querySelectorAll('input[type="checkbox"]:checked') || []).map(el => el.value);
        const namesRaw = selectedNames.length > 0 ? selectedNames : fallback;
        const names = namesRaw.slice(0, 4);
        const chosen = roster.filter(p => names.includes(p.name)).slice(0, 4);
        const hasWO = chosen.length === 3;
        return { names, players: chosen.length ? chosen : roster.slice(0, 4), hasWO };
    };

    const setTeamStatus = (msg) => {
        if (teamStatus) teamStatus.innerText = msg || '';
    };

    const renderTeamPrediction = () => {
        const tA = teamSelectA.value;
        const tB = teamSelectB.value;
        if (!tA || !tB) {
            setTeamStatus('Vyberte oba tímy.');
            return;
        }
        if (tA === tB) {
            setTeamStatus('Zvoľte rozdielne tímy.');
            return;
        }
        setTeamStatus('');

        const lineupSelA = collectLineup(tA, lineupA);
        const lineupSelB = collectLineup(tB, lineupB);
        const rosterA = lineupSelA.players;
        const rosterB = lineupSelB.players;

        if (rosterA.length < 3 || rosterB.length < 3) {
            setTeamStatus('Vyberte aspoň 3 hráčov v oboch tímoch (max 4).');
            return;
        }

        const avgA = avgRating(rosterA);
        const avgB = avgRating(rosterB);
        const singlesA = rosterA[0] ? rosterA[0].rating : avgA;
        const singlesB = rosterB[0] ? rosterB[0].rating : avgB;
        const doublesA = rosterA.length >= 2 ? (rosterA[0].rating + rosterA[1].rating) / 2 : singlesA;
        const doublesB = rosterB.length >= 2 ? (rosterB[0].rating + rosterB[1].rating) / 2 : singlesB;

        let sA = Math.round(18 * winProb(avgA, avgB));
        let sB = Math.max(0, 18 - sA);

        if (lineupSelA.hasWO) sB += 5;
        if (lineupSelB.hasWO) sA += 5;
        if ((sA + sB) > 18) {
            const scale = 18 / (sA + sB);
            sA = Math.round(sA * scale);
            sB = Math.max(0, 18 - sA);
        }

        sA = Math.min(18, Math.max(0, sA));
        sB = Math.min(18, Math.max(0, sB));

        if (teamPredScore) teamPredScore.innerText = `${sA} : ${sB}`;
        if (teamRateA) teamRateA.innerText = avgA.toFixed(1);
        if (teamRateB) teamRateB.innerText = avgB.toFixed(1);
        if (teamPredictionResult) teamPredictionResult.style.display = 'block';
    };

    populateTeams(teamSelectA);
    populateTeams(teamSelectB);

    teamSelectA.addEventListener('change', () => {
        renderLineup(teamSelectA.value, lineupA, lineupTitleA);
        setTeamLogo(teamSelectA.value, teamLogoA);
    });
    teamSelectB.addEventListener('change', () => {
        renderLineup(teamSelectB.value, lineupB, lineupTitleB);
        setTeamLogo(teamSelectB.value, teamLogoB);
    });
    if (teamPredictBtn) teamPredictBtn.addEventListener('click', (e) => {
        e.preventDefault();
        renderTeamPrediction();
    });

    // ============================================================
    // COMBINED MATCH SIMULATOR (Prediction + What If)
    // ============================================================
    const simForm = document.getElementById('matchSimulatorForm');
    const simStatus = document.getElementById('simStatus');
    const simResult = document.getElementById('simResult');
    const simPlayerA = document.getElementById('simPlayerA');
    const simPlayerB = document.getElementById('simPlayerB');
    const simPlayersList = document.getElementById('simPlayersList');
    const simScoreList = document.getElementById('simScoreList');
    const simWhatIfGrid = document.getElementById('simWhatIfGrid');
    const simNameA = document.getElementById('simNameA');
    const simNameB = document.getElementById('simNameB');
    const simTeamA = document.getElementById('simTeamA');
    const simTeamB = document.getElementById('simTeamB');
    const simRatingA = document.getElementById('simRatingA');
    const simRatingB = document.getElementById('simRatingB');
    const simKFactorA = document.getElementById('simKFactorA');
    const simKFactorB = document.getElementById('simKFactorB');
    const simScoreNote = document.getElementById('simScoreNote');

    // Populate players datalist
    if (simPlayersList) {
        simPlayersList.innerHTML = sortRoster(allPlayers).map(p => `<option value="${escapeAttr(p.name)}">`).join('');
    }

    const setSimStatus = (msg) => {
        if (simStatus) simStatus.innerText = msg || '';
    };

    /**
     * Calculate ELO rating change for a hypothetical match.
     */
    const calculateWhatIfRatingChange = (ratingA, ratingB, scoreA, scoreB, kFactorA, kFactorB) => {
        const N = scoreA + scoreB;
        const expectedA = N / (1 + Math.pow(10, (ratingB - ratingA) / 300));
        const expectedB = N / (1 + Math.pow(10, (ratingA - ratingB) / 300));
        
        const diffA = scoreA - expectedA;
        const diffB = scoreB - expectedB;
        
        const deltaA = kFactorA * diffA;
        const deltaB = kFactorB * diffB;
        
        return {
            deltaA: deltaA,
            deltaB: deltaB,
            newRatingA: ratingA + deltaA,
            newRatingB: ratingB + deltaB
        };
    };

    /**
     * Render the combined match simulator (prediction + rating simulation)
     */
    const renderMatchSimulator = () => {
        const nameA = (simPlayerA?.value || '').trim();
        const nameB = (simPlayerB?.value || '').trim();

        if (!nameA || !nameB) {
            setSimStatus('Vyplňte prosím oboch hráčov.');
            if (simResult) simResult.style.display = 'none';
            return;
        }
        if (normalizeKey(nameA) === normalizeKey(nameB)) {
            setSimStatus('Zvoľte dvoch rôznych hráčov.');
            if (simResult) simResult.style.display = 'none';
            return;
        }
        const pA = playerLookup.get(normalizeKey(nameA));
        const pB = playerLookup.get(normalizeKey(nameB));
        if (!pA || !pB) {
            setSimStatus('Hráč nebol nájdený. Skúste iné meno.');
            if (simResult) simResult.style.display = 'none';
            return;
        }
        setSimStatus('');

        // Get K-factors based on next match (current matches + 1)
        const kFactorA = getKFactor(pA.matches + 1);
        const kFactorB = getKFactor(pB.matches + 1);

        // Update player info display
        if (simNameA) simNameA.innerText = pA.name;
        if (simNameB) simNameB.innerText = pB.name;
        if (simTeamA) simTeamA.innerText = pA.team || '';
        if (simTeamB) simTeamB.innerText = pB.team || '';
        if (simRatingA) simRatingA.innerText = pA.rating.toFixed(2);
        if (simRatingB) simRatingB.innerText = pB.rating.toFixed(2);
        if (simKFactorA) simKFactorA.innerText = kFactorA;
        if (simKFactorB) simKFactorB.innerText = kFactorB;

        // Update score note
        const teamLabelA = pA.team ? ` (${pA.team})` : '';
        const teamLabelB = pB.team ? ` (${pB.team})` : '';
        if (simScoreNote) simScoreNote.innerText = `Skóre je uvádzané ako ${pA.name}${teamLabelA} : ${pB.name}${teamLabelB}.`;

        // ============ PREDICTION PART ============
        // Calculate score distribution probabilities
        const dist = getScoreDistribution(winProb(pA.rating, pB.rating));
        renderScoreList(simScoreList, dist);

        // ============ RATING SIMULATION PART ============
        // Define all possible score scenarios
        const scenarios = [
            { scoreA: 3, scoreB: 0, label: '3:0', isWin: true },
            { scoreA: 3, scoreB: 1, label: '3:1', isWin: true },
            { scoreA: 3, scoreB: 2, label: '3:2', isWin: true },
            { scoreA: 2, scoreB: 3, label: '2:3', isWin: false },
            { scoreA: 1, scoreB: 3, label: '1:3', isWin: false },
            { scoreA: 0, scoreB: 3, label: '0:3', isWin: false },
        ];

        // Calculate rating changes for each scenario
        const scenarioResults = scenarios.map(s => {
            const result = calculateWhatIfRatingChange(
                pA.rating, pB.rating, 
                s.scoreA, s.scoreB, 
                kFactorA, kFactorB
            );
            return { ...s, ...result };
        });

        // Render the scenarios grid
        if (simWhatIfGrid) {
            simWhatIfGrid.innerHTML = scenarioResults.map(s => {
                const deltaClass = s.deltaA >= 0 ? 'whatif-delta--positive' : 'whatif-delta--negative';
                const deltaSign = s.deltaA >= 0 ? '+' : '';
                const outcomeClass = s.isWin ? 'whatif-scenario--win' : 'whatif-scenario--loss';
                const outcomeIcon = s.isWin ? '🏆' : '😔';
                
                return `
                    <div class="whatif-scenario ${outcomeClass}">
                        <div class="whatif-scenario-header">
                            <span class="whatif-scenario-icon">${outcomeIcon}</span>
                            <span class="whatif-scenario-score">${s.label}</span>
                        </div>
                        <div class="whatif-scenario-body">
                            <div class="whatif-delta ${deltaClass}">
                                <span class="whatif-delta-value">${deltaSign}${s.deltaA.toFixed(2)}</span>
                                <span class="whatif-delta-label">zmena ratingu</span>
                            </div>
                            <div class="whatif-new-rating">
                                <span class="whatif-new-rating-value">${s.newRatingA.toFixed(2)}</span>
                                <span class="whatif-new-rating-label">nový rating</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        if (simResult) simResult.style.display = 'block';
    };

    if (simForm) {
        simForm.addEventListener('submit', (e) => {
            e.preventDefault();
            renderMatchSimulator();
        });
    }
}

// ============================================================
// MY STATS PAGE
// ============================================================
function renderMyStatsPage() {
    const {players} = processData();
    const playerArr = Object.values(players);
    const MYSTATS_STORAGE_KEY = 'mystats_player_name';

    // Create player lookup for quick access
    const playerLookup = {};
    playerArr.forEach(p => {
        playerLookup[normalizePlayerKey(p.name)] = p;
    });

    // Create ranking map
    const sortedByRating = [...playerArr].sort((a, b) => b.rating - a.rating);
    const ratingRanking = new Map();
    sortedByRating.forEach((p, i) => ratingRanking.set(normalizePlayerKey(p.name), i + 1));
    const totalPlayers = playerArr.length;

    // DOM elements
    const selectSection = document.getElementById('playerSelectSection');
    const statsContent = document.getElementById('myStatsContent');
    const playerInput = document.getElementById('myPlayerSelect');
    const playersList = document.getElementById('myPlayersList');
    const selectBtn = document.getElementById('selectPlayerBtn');
    const selectStatus = document.getElementById('playerSelectStatus');
    const changePlayerBtn = document.getElementById('changePlayerBtn');

    // Populate datalists
    const populatePlayersList = (listEl) => {
        if (!listEl) return;
        listEl.innerHTML = '';
        playerArr.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.name;
            listEl.appendChild(opt);
        });
    };

    populatePlayersList(playersList);
    populatePlayersList(document.getElementById('myCompareList'));
    populatePlayersList(document.getElementById('myWhatIfList'));

    // Current selected player
    let currentPlayer = null;
    let myRatingChart = null;
    let myRadarChart = null;

    // Show player selection screen
    const showSelectScreen = () => {
        if (selectSection) selectSection.style.display = 'block';
        if (statsContent) statsContent.style.display = 'none';
    };

    // Show stats screen
    const showStatsScreen = () => {
        if (selectSection) selectSection.style.display = 'none';
        if (statsContent) statsContent.style.display = 'block';
    };

    // Calculate win streak
    const calculateStreak = (matchDetails) => {
        let currentStreak = 0;
        let longestStreak = 0;
        let tempStreak = 0;

        matchDetails.forEach(m => {
            const isWin = m.score_own > m.score_opp;
            if (isWin) {
                tempStreak++;
                if (tempStreak > longestStreak) longestStreak = tempStreak;
            } else {
                tempStreak = 0;
            }
        });

        // Current streak (from end)
        for (let i = matchDetails.length - 1; i >= 0; i--) {
            if (matchDetails[i].score_own > matchDetails[i].score_opp) {
                currentStreak++;
            } else {
                break;
            }
        }

        return { current: currentStreak, longest: longestStreak };
    };

    // Calculate biggest upset
    const calculateBiggestUpset = (matchDetails) => {
        let biggestUpset = null;
        let biggestDiff = 0;

        matchDetails.filter(m => !m.isDoubles).forEach(m => {
            const isWin = m.score_own > m.score_opp;
            if (isWin && m.opp_rating_after > 0) {
                // Estimate opponent's rating before the match
                const oppRatingBefore = (m.opp_rating_after || 0) - (m.delta_opp || 0);
                const myRatingBefore = (m.rating_after || 0) - (m.delta_own || 0);
                const diff = oppRatingBefore - myRatingBefore;
                if (diff > biggestDiff) {
                    biggestDiff = diff;
                    biggestUpset = {
                        opponent: m.opponent,
                        diff: diff,
                        score: `${m.score_own}:${m.score_opp}`,
                        round: m.round
                    };
                }
            }
        });

        return biggestUpset;
    };

    // Get recent form (last 5 matches)
    const getRecentForm = (matchDetails) => {
        return matchDetails.slice(-5).map(m => m.score_own > m.score_opp ? 'W' : 'L');
    };

    // Find peak rating and when
    const findPeakRating = (p) => {
        const historyKeys = Object.keys(p.history).sort();
        let peakRating = p.maxRating;
        let peakWhen = '-';

        for (const key of historyKeys) {
            if (p.history[key] === p.maxRating) {
                peakWhen = key.split('|')[1] || key;
                break;
            }
        }

        return { rating: peakRating, when: peakWhen };
    };

    // Render rating line chart
    const renderMyLineChart = (p, compareP = null, attempt = 0) => {
        const canvas = document.getElementById('myRatingChart');
        if (!canvas || typeof Chart === 'undefined') {
            if (attempt < 8) setTimeout(() => renderMyLineChart(p, compareP, attempt + 1), 120);
            return;
        }

        const ctx = canvas.getContext('2d');
        const keysA = Object.keys(p.history).sort();
        const keysB = compareP ? Object.keys(compareP.history).sort() : [];
        const allKeys = [...new Set([...keysA, ...keysB])].sort();
        const labels = allKeys.map(k => k.split('|')[1] || k);

        const buildFilledSeries = (history, keys) => {
            const raw = keys.map(k => (Object.prototype.hasOwnProperty.call(history, k) ? history[k] : null));
            const firstIdx = raw.findIndex(v => v !== null && v !== undefined);
            if (firstIdx === -1) return raw.map(() => null);
            let lastIdx = -1;
            for (let i = raw.length - 1; i >= 0; i--) {
                if (raw[i] !== null && raw[i] !== undefined) { lastIdx = i; break; }
            }
            let lastVal = raw[firstIdx];
            for (let i = firstIdx; i <= lastIdx; i++) {
                if (raw[i] === null || raw[i] === undefined) raw[i] = lastVal;
                else lastVal = raw[i];
            }
            return raw;
        };

        const dataPoints = compareP ? buildFilledSeries(p.history, allKeys) : allKeys.map(k => p.history[k] ?? null);
        const themePrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#7c3aed';
        const themeDanger = getComputedStyle(document.documentElement).getPropertyValue('--color-danger').trim() || '#dc2626';

        const datasets = [{
            label: p.name,
            data: dataPoints,
            borderColor: themePrimary,
            backgroundColor: themePrimary + '20',
            borderWidth: 2,
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: themePrimary
        }];

        if (compareP) {
            datasets.push({
                label: compareP.name,
                data: buildFilledSeries(compareP.history, allKeys),
                borderColor: themeDanger,
                backgroundColor: 'transparent',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.3,
                pointRadius: 2,
                pointBackgroundColor: themeDanger
            });
        }

        if (myRatingChart) myRatingChart.destroy();
        myRatingChart = new Chart(ctx, {
            type: 'line',
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: compareP !== null }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(128,128,128,0.15)' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { maxTicksLimit: 10 }
                    }
                }
            }
        });
    };

    // Track current derived stats for comparison
    let currentDerived = null;
    let compareDerived = null;

    // Stat keys and labels (same order as rating.html)
    const STAT_KEYS = ['attack', 'defense', 'consistency', 'momentum', 'teamImpact', 'clutch'];

    // Render radar chart with optional comparison
    const renderMyRadarChart = (p, compareP = null) => {
        const canvas = document.getElementById('myRadarChart');
        if (!canvas || typeof Chart === 'undefined') return;

        const derived = computeDerivedStats(p);
        if (!derived || !derived.values) return;

        currentDerived = derived;
        compareDerived = compareP ? computeDerivedStats(compareP) : null;

        const v = derived.values;
        const ctx = canvas.getContext('2d');
        const labels = STAT_KEYS.map(k => STAT_META[k].label);
        const data = STAT_KEYS.map(k => v[k] ?? 50);

        const themePrimary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim() || '#7c3aed';
        const themeDanger = getComputedStyle(document.documentElement).getPropertyValue('--color-danger').trim() || '#dc2626';

        const datasets = [{
            label: p.name,
            data,
            backgroundColor: themePrimary + '40',
            borderColor: themePrimary,
            borderWidth: 2,
            pointBackgroundColor: themePrimary
        }];

        if (compareP && compareDerived) {
            const cv = compareDerived.values;
            datasets.push({
                label: compareP.name,
                data: STAT_KEYS.map(k => cv[k] ?? 50),
                backgroundColor: themeDanger + '20',
                borderColor: themeDanger,
                borderWidth: 2,
                borderDash: [5, 5],
                pointBackgroundColor: themeDanger
            });
        }

        if (myRadarChart) myRadarChart.destroy();
        myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: { labels, datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: compareP !== null } },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { stepSize: 20, display: false },
                        grid: { color: 'rgba(128,128,128,0.2)' },
                        pointLabels: { font: { size: 11 } }
                    }
                }
            }
        });

        // Render derived stats list with comparison
        renderMyDerivedStats(derived, compareDerived);
    };

    // Render derived stats list (similar to rating.html)
    const renderMyDerivedStats = (stats, compareStats = null) => {
        const derivedList = document.getElementById('myDerivedStatsList');
        if (!derivedList) return;

        const fmt = (x) => (Number.isFinite(x) ? x.toFixed(0) : '–');
        
        derivedList.innerHTML = STAT_KEYS.map(key => {
            const meta = STAT_META[key];
            const primaryVal = fmt(stats.values[key]);
            const compareVal = compareStats ? fmt(compareStats.values[key]) : null;
            const primaryMissing = primaryVal === '–';
            const compareMissing = compareVal === '–';

            return `
                <div class="derived-stat-item${compareStats ? ' has-compare' : ''}">
                    <div class="derived-stat-label">
                        <span class="derived-stat-name">${meta.label}</span>
                        <span class="derived-stat-tip">${meta.tip}</span>
                    </div>
                    <div class="derived-stat-values">
                        <span class="derived-stat-value ${primaryMissing ? 'stat-none' : ''}">${primaryVal}</span>
                        ${compareStats ? `<span class="derived-stat-value derived-stat-compare ${compareMissing ? 'stat-none' : ''}">${compareVal}</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    };

    // Render recent matches
    const renderRecentMatches = (p) => {
        const container = document.getElementById('myRecentMatches');
        if (!container) return;

        const recent = p.matchDetails.slice(-10).reverse();
        if (recent.length === 0) {
            container.innerHTML = '<p class="no-match">Žiadne zápasy</p>';
            return;
        }

        container.innerHTML = recent.map(m => {
            const isWin = m.score_own > m.score_opp;
            const deltaSign = m.delta_own >= 0 ? '+' : '';
            const deltaClass = m.delta_own >= 0 ? 'positive' : 'negative';
            return `
                <div class="recent-match-item ${isWin ? 'win' : 'loss'}">
                    <div class="recent-match-left">
                        <div class="recent-match-opponent">${m.opponent}</div>
                        <div class="recent-match-meta">${m.round}${m.isDoubles ? ' (Štvorhra)' : ''}</div>
                    </div>
                    <div class="recent-match-result">
                        <div class="recent-match-score">${m.score_own}:${m.score_opp}</div>
                        <div class="recent-match-delta ${deltaClass}">${deltaSign}${m.delta_own.toFixed(2)}</div>
                    </div>
                </div>
            `;
        }).join('');
    };

    // Render upcoming team match
    const renderUpcomingMatch = (p) => {
        const container = document.getElementById('myNextMatchDetails');
        if (!container) return;

        const teamName = p.team;
        if (!teamName || teamName === 'N/A') {
            container.innerHTML = '<span class="no-match">Žiadny tím priradený</span>';
            return;
        }

        // Find upcoming (unplayed) matches for the player's team using isPlayedMatch helper
        const futureMatches = matchResults.filter(m => {
            return !isPlayedMatch(m) && (m.player_a_team === teamName || m.player_b_team === teamName);
        });

        if (futureMatches.length === 0) {
            container.innerHTML = '<span class="no-match">Žiadny plánovaný zápas</span>';
            return;
        }

        const next = futureMatches[0];
        const opponent = next.player_a_team === teamName ? next.player_b_team : next.player_a_team;
        const dateStr = next.date || '';
        const location = next.location || '';

        container.innerHTML = `
            <div class="next-match-teams">
                <span>${teamName}</span>
                <span class="vs">vs</span>
                <span>${opponent}</span>
            </div>
            <div class="next-match-meta">${next.round || ''}${dateStr ? ' • ' + dateStr : ''}${location ? ' • ' + location : ''}</div>
        `;
    };

    // Combined match simulator (Prediction + What If) for My Stats page
    const renderWhatIfMini = () => {
        const opponentInput = document.getElementById('myWhatIfOpponent');
        const resultDiv = document.getElementById('myWhatIfResult');
        const gridDiv = document.getElementById('myWhatIfGrid');
        const predictionList = document.getElementById('myPredictionScoreList');
        const youSpan = document.getElementById('myWhatIfYou');
        const oppSpan = document.getElementById('myWhatIfOpp');

        if (!opponentInput || !resultDiv || !gridDiv || !currentPlayer) return;

        const oppName = opponentInput.value.trim();
        const opponent = playerLookup[normalizePlayerKey(oppName)];

        if (!opponent) {
            resultDiv.style.display = 'none';
            return;
        }

        // Get K factors
        const getKFactor = (p) => {
            const totalMatches = p.matches + p.dMatches;
            if (totalMatches < 5) return 30;
            if (totalMatches < 10) return 20;
            return 10;
        };

        // Win probability and score distribution
        const winProb = (rA, rB) => 1 / (1 + Math.pow(10, (rB - rA) / 300));
        const getScoreDistribution = (probWin) => {
            const p = Math.max(0, Math.min(1, probWin || 0));
            const q = 1 - p;
            const dist = {
                '3-0': Math.pow(p, 3),
                '3-1': 3 * Math.pow(p, 3) * q,
                '3-2': 6 * Math.pow(p, 3) * Math.pow(q, 2),
                '2-3': 6 * Math.pow(q, 3) * Math.pow(p, 2),
                '1-3': 3 * Math.pow(q, 3) * p,
                '0-3': Math.pow(q, 3),
            };
            const total = Object.values(dist).reduce((s, v) => s + v, 0) || 1;
            return Object.fromEntries(Object.entries(dist).map(([k, v]) => [k, (v / total) * 100]));
        };

        const kA = getKFactor(currentPlayer);
        const kB = getKFactor(opponent);
        const rA = currentPlayer.rating;
        const rB = opponent.rating;

        // Update player info cards
        youSpan.textContent = currentPlayer.name;
        oppSpan.textContent = opponent.name;
        
        const ratingAEl = document.getElementById('myWhatIfRatingA');
        const ratingBEl = document.getElementById('myWhatIfRatingB');
        const kFactorAEl = document.getElementById('myWhatIfKFactorA');
        const kFactorBEl = document.getElementById('myWhatIfKFactorB');
        
        if (ratingAEl) ratingAEl.textContent = rA.toFixed(2);
        if (ratingBEl) ratingBEl.textContent = rB.toFixed(2);
        if (kFactorAEl) kFactorAEl.textContent = kA;
        if (kFactorBEl) kFactorBEl.textContent = kB;

        // ============ PREDICTION PART ============
        const dist = getScoreDistribution(winProb(rA, rB));
        if (predictionList) {
            const scores = ['3-0', '3-1', '3-2', '2-3', '1-3', '0-3'];
            // Find max and min probabilities
            let maxVal = -Infinity, minVal = Infinity;
            scores.forEach(score => {
                const pct = dist[score] || 0;
                if (pct > maxVal) maxVal = pct;
                if (pct < minVal) minVal = pct;
            });
            predictionList.innerHTML = scores.map(score => {
                const pct = dist[score] || 0;
                let cls = '';
                if (pct === maxVal) cls = ' score-row-mini--max';
                else if (pct === minVal) cls = ' score-row-mini--min';
                return `
                    <div class="score-row-mini${cls}">
                        <span class="score-label-mini">${score.replace('-', ':')}</span>
                        <div class="score-bar-mini">
                            <div class="score-bar-fill-mini" style="width: ${pct}%"></div>
                        </div>
                        <span class="score-pct-mini">${pct.toFixed(1)}%</span>
                    </div>
                `;
            }).join('');
        }

        // ============ RATING SIMULATION PART ============
        const scenarios = [
            { label: '3:0', setsA: 3, setsB: 0, isWin: true },
            { label: '3:1', setsA: 3, setsB: 1, isWin: true },
            { label: '3:2', setsA: 3, setsB: 2, isWin: true },
            { label: '2:3', setsA: 2, setsB: 3, isWin: false },
            { label: '1:3', setsA: 1, setsB: 3, isWin: false },
            { label: '0:3', setsA: 0, setsB: 3, isWin: false }
        ];

        const results = scenarios.map(s => {
            const totalSets = s.setsA + s.setsB;
            const expectedA = totalSets / (1 + Math.pow(10, (rB - rA) / 300));
            const deltaA = kA * (s.setsA - expectedA);
            return {
                ...s,
                deltaA,
                newRatingA: rA + deltaA
            };
        });

        gridDiv.innerHTML = results.map(s => {
            const deltaClass = s.deltaA >= 0 ? 'positive' : 'negative';
            const deltaSign = s.deltaA >= 0 ? '+' : '';
            return `
                <div class="whatif-scenario-mini ${s.isWin ? 'win' : 'loss'}">
                    <div class="whatif-score-mini">${s.label}</div>
                    <div class="whatif-delta-mini ${deltaClass}">${deltaSign}${s.deltaA.toFixed(2)}</div>
                </div>
            `;
        }).join('');

        resultDiv.style.display = 'block';
    };

    // Head-to-head comparison
    const renderH2H = (comparePlayer) => {
        const resultDiv = document.getElementById('myCompareResult');
        const scoreDiv = document.getElementById('myH2HScore');
        const matchesList = document.getElementById('myCompareMatches');

        if (!resultDiv || !currentPlayer || !comparePlayer) {
            if (resultDiv) resultDiv.style.display = 'none';
            return;
        }

        // Find matches between these players
        const h2hMatches = currentPlayer.matchDetails.filter(m => 
            !m.isDoubles && normalizePlayerKey(m.opponent) === normalizePlayerKey(comparePlayer.name)
        );

        if (h2hMatches.length === 0) {
            resultDiv.style.display = 'block';
            scoreDiv.textContent = '0 : 0';
            matchesList.innerHTML = '<p class="no-match">Žiadne vzájomné zápasy</p>';
            return;
        }

        let winsA = 0, winsB = 0;
        h2hMatches.forEach(m => {
            if (m.score_own > m.score_opp) winsA++;
            else winsB++;
        });

        scoreDiv.textContent = `${winsA} : ${winsB}`;
        matchesList.innerHTML = h2hMatches.reverse().map(m => {
            const isWin = m.score_own > m.score_opp;
            return `
                <div class="compare-match-item">
                    <span>${m.round}</span>
                    <span class="compare-match-result ${isWin ? 'win' : 'loss'}">${m.score_own}:${m.score_opp}</span>
                </div>
            `;
        }).join('');

        resultDiv.style.display = 'block';
    };

    // Main render function for selected player
    const renderPlayerStats = (p) => {
        currentPlayer = p;
        localStorage.setItem(MYSTATS_STORAGE_KEY, p.name);

        // Header
        document.getElementById('myStatsName').textContent = p.name;
        document.getElementById('myStatsTeam').textContent = p.team || '-';
        document.getElementById('myStatsAvatar').textContent = p.name.charAt(0).toUpperCase();

        // Core stats
        const rank = ratingRanking.get(normalizePlayerKey(p.name)) || '?';
        document.getElementById('myRating').textContent = p.rating.toFixed(2);
        document.getElementById('myRank').textContent = `#${rank} z ${totalPlayers}`;

        // Rating change (this round)
        const roundChange = p.roundGain || 0;
        const changeEl = document.getElementById('myRatingChange');
        const changeSign = roundChange >= 0 ? '+' : '';
        changeEl.textContent = `${changeSign}${roundChange.toFixed(2)}`;
        changeEl.classList.remove('positive', 'negative');
        changeEl.classList.add(roundChange >= 0 ? 'positive' : 'negative');

        // Peak rating
        const peak = findPeakRating(p);
        document.getElementById('myPeakRating').textContent = peak.rating.toFixed(2);
        document.getElementById('myPeakWhen').textContent = peak.when;

        // Win/Loss record
        document.getElementById('myRecord').textContent = `${p.wins + p.dWins}V - ${p.losses + p.dLosses}P`;

        // Form
        const form = getRecentForm(p.matchDetails);
        const formContainer = document.getElementById('myForm');
        formContainer.innerHTML = form.map(f => 
            `<span class="form-indicator ${f === 'W' ? 'win' : 'loss'}">${f}</span>`
        ).join('');

        // Records
        // Best win
        if (p.bestWinOpponent && isFinite(p.bestWinRating)) {
            document.getElementById('myBestWin').textContent = p.bestWinOpponent;
            document.getElementById('myBestWinRating').textContent = `Rating: ${p.bestWinRating.toFixed(2)}`;
        } else {
            document.getElementById('myBestWin').textContent = '-';
            document.getElementById('myBestWinRating').textContent = '';
        }

        // Biggest upset
        const upset = calculateBiggestUpset(p.matchDetails);
        if (upset) {
            document.getElementById('myBiggestUpset').textContent = upset.opponent;
            document.getElementById('myBiggestUpsetDiff').textContent = `+${upset.diff.toFixed(0)} rating rozdiel`;
        } else {
            document.getElementById('myBiggestUpset').textContent = '-';
            document.getElementById('myBiggestUpsetDiff').textContent = '';
        }

        // Streak
        const streak = calculateStreak(p.matchDetails);
        document.getElementById('myLongestStreak').textContent = `${streak.longest} výhier`;
        document.getElementById('myCurrentStreak').textContent = streak.current > 0 ? `Aktuálna: ${streak.current}` : 'Žiadna aktívna';

        // Render charts and other sections
        setTimeout(() => renderMyLineChart(p), 100);
        setTimeout(() => renderMyRadarChart(p), 150);
        renderRecentMatches(p);
        renderUpcomingMatch(p);

        showStatsScreen();
    };

    // Select player handler
    const handleSelectPlayer = () => {
        const name = playerInput.value.trim();
        if (!name) {
            selectStatus.textContent = 'Zadajte meno hráča.';
            return;
        }

        const player = playerLookup[normalizePlayerKey(name)];
        if (!player) {
            selectStatus.textContent = 'Hráč nebol nájdený.';
            return;
        }

        selectStatus.textContent = '';
        renderPlayerStats(player);
    };

    // Event listeners
    if (selectBtn) {
        selectBtn.addEventListener('click', handleSelectPlayer);
    }

    if (playerInput) {
        playerInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSelectPlayer();
            }
        });
    }

    if (changePlayerBtn) {
        changePlayerBtn.addEventListener('click', () => {
            localStorage.removeItem(MYSTATS_STORAGE_KEY);
            currentPlayer = null;
            if (playerInput) playerInput.value = '';
            showSelectScreen();
        });
    }

    // Compare functionality
    const compareForm = document.getElementById('myCompareForm');
    const compareInput = document.getElementById('myCompareInput');
    const clearCompareBtn = document.getElementById('myClearCompareBtn');
    const compareStatus = document.getElementById('myCompareStatus');

    if (compareForm) {
        compareForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!currentPlayer || !compareInput) return;

            const name = compareInput.value.trim();
            if (!name) {
                compareStatus.textContent = 'Zadajte meno hráča.';
                return;
            }

            const target = playerLookup[normalizePlayerKey(name)];
            if (!target) {
                compareStatus.textContent = 'Hráč nebol nájdený.';
                return;
            }

            if (normalizePlayerKey(target.name) === normalizePlayerKey(currentPlayer.name)) {
                compareStatus.textContent = 'Nemôžete porovnať sami so sebou.';
                return;
            }

            compareStatus.textContent = `Porovnávanie s ${target.name}`;
            compareStatus.classList.add('ok');
            renderMyLineChart(currentPlayer, target);
            renderMyRadarChart(currentPlayer, target);
            renderH2H(target);
        });
    }

    if (clearCompareBtn) {
        clearCompareBtn.addEventListener('click', () => {
            if (compareInput) compareInput.value = '';
            if (compareStatus) {
                compareStatus.textContent = '';
                compareStatus.classList.remove('ok');
            }
            document.getElementById('myCompareResult').style.display = 'none';
            if (currentPlayer) {
                renderMyLineChart(currentPlayer);
                renderMyRadarChart(currentPlayer);
            }
        });
    }

    // What If button
    const whatIfBtn = document.getElementById('myWhatIfBtn');
    if (whatIfBtn) {
        whatIfBtn.addEventListener('click', renderWhatIfMini);
    }

    const whatIfInput = document.getElementById('myWhatIfOpponent');
    if (whatIfInput) {
        whatIfInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                renderWhatIfMini();
            }
        });
    }

    // Check for saved player
    const savedName = localStorage.getItem(MYSTATS_STORAGE_KEY);
    if (savedName) {
        const savedPlayer = playerLookup[normalizePlayerKey(savedName)];
        if (savedPlayer) {
            renderPlayerStats(savedPlayer);
        } else {
            showSelectScreen();
        }
    } else {
        showSelectScreen();
    }
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

    const applySeasonalNavBadge = () => {
        const badge = document.getElementById('navBadge');
        if (!badge) return;

        const now = new Date();
        const m = now.getMonth(); // 0=Jan .. 11=Dec
        const d = now.getDate();

        // Enable during December and the first week of January.
        const isXmasSeason = (m === 11) || (m === 0 && d <= 7);
        if (isXmasSeason) badge.classList.add('nav-badge--xmas');
    };

    // Fetch and update nav badge text from Google Sheets (Config!B2)
    const loadNavBadgeFromSheet = async () => {
        if (typeof GoogleSheetsLoader === 'undefined') {
            console.warn('GoogleSheetsLoader not available, keeping static nav badge.');
            return;
        }
        try {
            const badgeText = await GoogleSheetsLoader.fetchCell({
                sheetName: 'Config',
                cell: 'B2',
                cache: false
            });
            if (badgeText) {
                const badge = document.getElementById('navBadge');
                if (badge) {
                    badge.innerHTML = badgeText;
                }
            }
        } catch (e) {
            console.error('Failed to load nav badge from sheet:', e);
        }
    };

    // Define links
    const links = [
        { url: 'results.html', text: 'Výsledky' },
        { url: 'table.html', text: 'Tabuľka' },
        { url: 'rating.html', text: 'Rating' },
        { url: 'prediction.html', text: 'Predikcia' },
        { url: 'mystats.html', text: 'Moje Štatistiky' },
    ];

    // Mobile menu includes Home as first item
    const mobileLinks = [
        { url: 'index.html', text: 'Domov' },
        ...links
    ];

    // Build the "Active" class string logic
    const getLinkHtml = (link) => {
        const isActive = page === link.url;
        return `<a href="${link.url}" ${isActive ? 'class="active"' : ''}>${link.text}</a>`;
    };

    // Build mobile menu links with stagger animation classes
    const getMobileLinkHtml = (link, index) => {
        const isActive = page === link.url;
        return `<a href="${link.url}" class="mobile-nav-link${isActive ? ' active' : ''}" style="--stagger-index: ${index}">${link.text}</a>`;
    };

    // Note: The H1 tag is used for SEO (as discussed previously)
    navContainer.innerHTML = `
    <nav class="top-nav" id="mainNav">
        <!-- Hamburger menu button (mobile only) -->
        <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
        <h1 class="nav-title">
            <a href="index.html">Košická Miniliga</a>
        </h1>
        <div class="nav-badge" id="navBadge">Aktualizované:<br>22.12.2025</div>
        <!-- Desktop nav links -->
        <div class="nav-links">
            ${links.map(getLinkHtml).join('')}
        </div>
    </nav>
    <!-- Mobile sidebar menu -->
    <div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
    <aside class="mobile-nav-sidebar" id="mobileNavSidebar">
        <div class="mobile-nav-links">
            ${mobileLinks.map(getMobileLinkHtml).join('')}
        </div>
    </aside>`;
    
    applySeasonalNavBadge();
    loadNavBadgeFromSheet(); // Load dynamic badge text from Google Sheets
    initMobileNav();
    if (typeof updateLayout === 'function') updateLayout();
}

// Mobile navigation functionality
function initMobileNav() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('mobileNavOverlay');
    const sidebar = document.getElementById('mobileNavSidebar');
    
    if (!hamburgerBtn || !overlay || !sidebar) return;

    const openMenu = () => {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        hamburgerBtn.classList.add('open');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (sidebar.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close on overlay click
    overlay.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeMenu();
        }
    });
}

// Add this to your existing window load event
window.addEventListener('load', renderNavigation);

document.addEventListener('DOMContentLoaded', async () => {
    const id = document.body.id;

    // matchResults is now loaded asynchronously (from data/matches.json + optional Google Sheet)
    try {
        if (window.matchResultsPromise) await window.matchResultsPromise;
    } catch (e) {
        console.error('Failed to load match data:', e);
    }

    requestAnimationFrame(() => {
        if (id === 'page-rating') renderRatingPage();
        else if (id === 'page-home') renderHomePage();
        else if (id === 'page-results') renderResultsPage();
        else if (id === 'page-table') renderTablePage();
        else if (id === 'page-prediction') renderPredictionPage();
        else if (id === 'page-mystats') renderMyStatsPage();
        hideLoader();
    });
});

function hideLoader() {
    document.body.classList.remove('loading');
    document.getElementById('pageLoader')?.classList.add('hidden');
    // When `body.loading` is removed, `#pageContent` becomes visible.
    // Recompute header offset at that moment (nav height was 0 while hidden).
    requestAnimationFrame(() => {
        if (typeof updateLayout === 'function') updateLayout();
    });
}
