/* matchData.js (lightweight loader)
   - Loads static matches from data/matches.json (so we don't ship a giant JS array)
   - Optionally merges in dynamic matches from Google Sheets
*/

// Expose globals expected by script.js
// IMPORTANT: `script.js` uses the global identifier `matchResults`, so this must be a true global binding.
var matchResults = window.matchResults = [];

(() => {
  const ASSET_VERSION = '8';
  const STATIC_MATCHES_URL = `data/matches.json?v=${ASSET_VERSION}`;

  const SPREADSHEET_ID = '1JES8EiYKtrNuALCtXMk_kFIU_hHWm9s9tGyD6HIU0tk';
  const SHEET_NAME = 'Results';
  const QUERY = 'SELECT P'; // Fetch only column P
  const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&tq=${encodeURIComponent(QUERY)}`;

  async function loadStaticMatches() {
    try {
      const res = await fetch(STATIC_MATCHES_URL, { cache: 'force-cache' });
      if (!res.ok) {
        console.error('Failed to load static matches:', res.status, res.statusText);
        return [];
      }
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('Error loading static matches:', e);
      return [];
    }
  }

  function parseGoogleGvizResponse(text) {
    // Google returns: /*O_o*\/ google.visualization.Query.setResponse({...});
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start < 0 || end < 0 || end <= start) return null;
    const jsonString = text.substring(start, end + 1);
    return JSON.parse(jsonString);
  }

  async function loadDynamicMatches() {
    try {
      const res = await fetch(SHEET_URL, { cache: 'no-store' });
      if (!res.ok) {
        console.error('Failed to load Google Sheet data. Status:', res.status);
        return [];
      }

      const text = await res.text();
      const apiResponse = parseGoogleGvizResponse(text);
      const rows = apiResponse?.table?.rows;
      if (!Array.isArray(rows)) return [];

      return rows
        .map((row) => {
          let cellText = row?.c?.[0]?.v ?? null;
          if (!cellText) return null;
          cellText = String(cellText).trim().replace(/,\s*$/, '');
          try {
            return JSON.parse(cellText);
          } catch {
            console.warn('Skipping invalid JSON in sheet:', cellText);
            return null;
          }
        })
        .filter((x) => x !== null);
    } catch (e) {
      console.error('Error connecting to Google Sheets:', e);
      return [];
    }
  }

  async function loadMatchResults() {
    const [staticMatches, dynamicMatches] = await Promise.all([
      loadStaticMatches(),
      loadDynamicMatches(),
    ]);

    matchResults = [...staticMatches, ...dynamicMatches];
    window.matchResults = matchResults;

    console.log('DYNAMIC Matches START');
    console.log(dynamicMatches);
    console.log('DYNAMIC Matches END');
    console.log('Total Matches Loaded:', matchResults.length);
    return matchResults;
  }

  // Kick off loading immediately; script.js will await this.
  window.matchResultsPromise = loadMatchResults();
})();
