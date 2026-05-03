// background.js — PiVolve Auto Linker (25 Keywords)
const CACHE_KEY = "keywordData";

async function setupHardcodedKeywords() {
  const hardcodedData = {
    keywords: {

  // ===== Programming Fundamentals =====
  "variable": {
    "gfg": "https://www.geeksforgeeks.org/variables-in-c/",
    "yt": "https://www.youtube.com/watch?v=ghCbURMWBD8",
    "def": "Named storage location used to hold data values."
  },

  "data type": {
    "gfg": "https://www.geeksforgeeks.org/data-types-in-c/",
    "yt": "https://www.youtube.com/watch?v=gCCVsvgR2KU",
    "def": "Specifies the type of data a variable can store."
  },

  "function": {
    "gfg": "https://www.geeksforgeeks.org/functions-in-c/",
    "yt": "https://www.youtube.com/watch?v=Wd4lYt2Ge84",
    "def": "Reusable block of code that performs a task."
  },

  "loop": {
    "gfg": "https://www.geeksforgeeks.org/loops-in-c-and-cpp/",
    "yt": "https://www.youtube.com/watch?v=Zi-Q0t4gMC8",
    "def": "Executes a block of code repeatedly while condition is true."
  },

  "recursion": {
    "gfg": "https://www.geeksforgeeks.org/recursion/",
    "yt": "https://www.youtube.com/watch?v=IJDJ0kBx2LM",
    "def": "Technique where a function calls itself."
  },

  // ===== Data Structures =====
  "array": {
    "gfg": "https://www.geeksforgeeks.org/array-data-structure/",
    "yt": "https://www.youtube.com/watch?v=QJNwK2uJyGs",
    "def": "Collection of elements stored in contiguous memory."
  },

  "linked list": {
    "gfg": "https://www.geeksforgeeks.org/data-structures/linked-list/",
    "yt": "https://www.youtube.com/watch?v=R9PTBwOzceo",
    "def": "Linear structure where nodes point to next node."
  },

  "stack": {
    "gfg": "https://www.geeksforgeeks.org/stack-data-structure/",
    "yt": "https://www.youtube.com/watch?v=K12vNZm2XsU",
    "def": "LIFO structure with push and pop operations."
  },

  "queue": {
    "gfg": "https://www.geeksforgeeks.org/queue-data-structure/",
    "yt": "https://www.youtube.com/watch?v=zp6pBNbUB2U",
    "def": "FIFO structure with enqueue and dequeue operations."
  },

  "deque": {
    "gfg": "https://www.geeksforgeeks.org/deque-set-1-introduction-applications/",
    "yt": "https://www.youtube.com/watch?v=0JUN9aDxVmI",
    "def": "Double-ended queue allowing insertion/removal at both ends."
  },

  "tree": {
    "gfg": "https://www.geeksforgeeks.org/introduction-to-tree-data-structure/",
    "yt": "https://www.youtube.com/watch?v=oSWTXtMglKE",
    "def": "Hierarchical data structure of nodes and edges."
  },

  "binary tree": {
    "gfg": "https://www.geeksforgeeks.org/binary-tree-data-structure/",
    "yt": "https://www.youtube.com/watch?v=-DzowlcaUmE",
    "def": "Tree where each node has at most two children."
  },

  "binary search tree": {
    "gfg": "https://www.geeksforgeeks.org/binary-search-tree-data-structure/",
    "yt": "https://www.youtube.com/watch?v=pYT9F8_LFTM",
    "def": "Binary tree with ordered left and right nodes."
  },

  "heap": {
    "gfg": "https://www.geeksforgeeks.org/heap-data-structure/",
    "yt": "https://www.youtube.com/watch?v=HqPJF2L5h9U",
    "def": "Complete binary tree satisfying heap property."
  },

  "graph": {
    "gfg": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",
    "yt": "https://www.youtube.com/watch?v=gXgEDyodOJU",
    "def": "Set of vertices connected by edges."
  },

  "trie": {
    "gfg": "https://www.geeksforgeeks.org/trie-insert-and-search/",
    "yt": "https://www.youtube.com/watch?v=AXjmTQ8LEoI",
    "def": "Tree structure for efficient string searching."
  },

  "hash table": {
    "gfg": "https://www.geeksforgeeks.org/hashing-data-structure/",
    "yt": "https://www.youtube.com/watch?v=KyUTuwz_b7Q",
    "def": "Maps keys to values using hash functions."
  },

  // ===== Algorithms =====
  "algorithm": {
    "gfg": "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",
    "yt": "https://www.youtube.com/watch?v=rL8X2mlNHPM",
    "def": "Step-by-step procedure to solve a problem."
  },

  "binary search": {
    "gfg": "https://www.geeksforgeeks.org/binary-search/",
    "yt": "https://www.youtube.com/watch?v=KsoUiMcvTVo",
    "def": "Searches sorted data by repeatedly halving range."
  },

  "linear search": {
    "gfg": "https://www.geeksforgeeks.org/linear-search/",
    "yt": "https://www.youtube.com/watch?v=_HraEGiyE6M",
    "def": "Checks each element one by one."
  },

  "bubble sort": {
    "gfg": "https://www.geeksforgeeks.org/bubble-sort/",
    "yt": "https://www.youtube.com/watch?v=xli_FI7CuzA",
    "def": "Repeatedly swaps adjacent out-of-order elements."
  },

  "merge sort": {
    "gfg": "https://www.geeksforgeeks.org/merge-sort/",
    "yt": "https://www.youtube.com/watch?v=4VqmGXwpLqc",
    "def": "Divide-and-conquer sorting by merging halves."
  },

  "quick sort": {
    "gfg": "https://www.geeksforgeeks.org/quick-sort/",
    "yt": "https://www.youtube.com/watch?v=Hoixgm4-P4M",
    "def": "Sorts using pivot partitioning strategy."
  },

  "bfs": {
    "gfg": "https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/",
    "yt": "https://www.youtube.com/watch?v=oDqjPvD54Ss",
    "def": "Traverses graph level by level."
  },

  "dfs": {
    "gfg": "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
    "yt": "https://www.youtube.com/watch?v=7fujbpJ0LB4",
    "def": "Traverses graph by exploring depth first."
  }

}
  };

  await chrome.storage.local.set({
    [CACHE_KEY]: {
      keywords: hardcodedData.keywords,
      metadata: { version: "1.0.0", totalKeywords: Object.keys(hardcodedData.keywords).length },
      fetchedAt: Date.now()
    }
  });

  console.log("PiVolve: Keywords loaded. Total:", Object.keys(hardcodedData.keywords).length);
}

chrome.runtime.onInstalled.addListener(() => setupHardcodedKeywords());
chrome.runtime.onStartup.addListener(() => setupHardcodedKeywords());
setupHardcodedKeywords();

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getKeywords") {
    chrome.storage.local.get(CACHE_KEY, (result) => {
      sendResponse(result[CACHE_KEY] || null);
    });
    return true;
  }
});