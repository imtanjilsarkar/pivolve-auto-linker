// background.js — PiVolve Auto Linker
const JSON_URL = "https://yourusername.github.io/pivolve-auto-linker/data/keywords.json";
const CACHE_KEY = "keywordData";

async function fetchAndCacheKeywords() {
  try {
    const response = await fetch(JSON_URL, { cache: "no-cache" });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    const keywordMap = data.keywords || {};

    // Store in Chrome's local storage
    await chrome.storage.local.set({
      [CACHE_KEY]: {
        keywords: keywordMap,
        metadata: data.metadata,
        fetchedAt: Date.now()
      }
    });

    console.log(`PiVolve: ${Object.keys(keywordMap).length} keywords cached.`);
  } catch (error) {
    console.error("PiVolve: Failed to fetch keywords:", error);
    // Extension will use previously cached data if available
  }
}

// Fetch on extension install/update
chrome.runtime.onInstalled.addListener(() => {
  fetchAndCacheKeywords();
});

// Fetch on browser startup
chrome.runtime.onStartup.addListener(() => {
  fetchAndCacheKeywords();
});

// Also keep alive with periodic refresh (every 6 hours)
setInterval(fetchAndCacheKeywords, 6 * 60 * 60 * 1000);

// Allow content script to request keyword data
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getKeywords") {
    chrome.storage.local.get(CACHE_KEY, (result) => {
      sendResponse(result[CACHE_KEY] || null);
    });
    return true; // Keep message channel open for async response
  }
});