// background.js — PiVolve Auto Linker (~60 Keywords)
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
      "pointer": {
        "gfg": "https://www.geeksforgeeks.org/c-pointers/",
        "yt": "https://www.youtube.com/watch?v=zuegQmMdy8M",
        "def": "Variable that stores the memory address of another variable."
      },
      "reference": {
        "gfg": "https://www.geeksforgeeks.org/references-in-cpp/",
        "yt": "https://www.youtube.com/watch?v=1z_WM8fCkyA",
        "def": "Alias for an existing variable in C++."
      },
      "memory allocation": {
        "gfg": "https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/",
        "yt": "https://www.youtube.com/watch?v=Nu8YGneFCWE",
        "def": "Reserving memory during runtime using heap."
      },
      "malloc": {
        "gfg": "https://www.geeksforgeeks.org/malloc-in-c-language/",
        "yt": "https://www.youtube.com/watch?v=R0q9YJf4E1s",
        "def": "C function allocating uninitialized memory dynamically."
      },
      "calloc": {
        "gfg": "https://www.geeksforgeeks.org/difference-between-malloc-and-calloc-with-examples/",
        "yt": "https://www.youtube.com/watch?v=V4R7bW5gV6Q",
        "def": "Allocates memory and initializes bytes to zero."
      },
      "free": {
        "gfg": "https://www.geeksforgeeks.org/free-function-in-c-library-with-examples/",
        "yt": "https://www.youtube.com/watch?v=tcVxJd8M3Ss",
        "def": "Releases dynamically allocated memory."
      },
      "segmentation fault": {
        "gfg": "https://www.geeksforgeeks.org/segmentation-fault-c-cpp/",
        "yt": "https://www.youtube.com/watch?v=6M9aZzm-kEc",
        "def": "Runtime error from accessing invalid memory."
      },
      "compiler": {
        "gfg": "https://www.geeksforgeeks.org/compiler-design-tutorials/",
        "yt": "https://www.youtube.com/watch?v=Qkwj65l_96I",
        "def": "Software converting source code to machine code."
      },
      "interpreter": {
        "gfg": "https://www.geeksforgeeks.org/difference-between-compiler-and-interpreter/",
        "yt": "https://www.youtube.com/watch?v=_C5AHaS1mOA",
        "def": "Program executing source code line by line."
      },
      "debugging": {
        "gfg": "https://www.geeksforgeeks.org/software-engineering-debugging-approaches/",
        "yt": "https://www.youtube.com/watch?v=H0XScE08hy8",
        "def": "Finding and fixing errors in software."
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
        "def": "Double-ended queue allowing operations at both ends."
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
        "def": "Breadth First Search — traverses graph level by level."
      },
      "dfs": {
        "gfg": "https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/",
        "yt": "https://www.youtube.com/watch?v=7fujbpJ0LB4",
        "def": "Depth First Search — explores as far down a branch as possible."
      },

      // ===== OOP =====
      "class": {
        "gfg": "https://www.geeksforgeeks.org/c-classes-and-objects/",
        "yt": "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
        "def": "Blueprint for creating objects with data and methods."
      },
      "object": {
        "gfg": "https://www.geeksforgeeks.org/c-classes-and-objects/",
        "yt": "https://www.youtube.com/watch?v=ZzaPdXTrSb8",
        "def": "Instance of a class with its own properties."
      },
      "constructor": {
        "gfg": "https://www.geeksforgeeks.org/constructors-c/",
        "yt": "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
        "def": "Special method called when an object is created."
      },
      "destructor": {
        "gfg": "https://www.geeksforgeeks.org/destructors-c/",
        "yt": "https://www.youtube.com/watch?v=6Q0mP9mA7xw",
        "def": "Special method called when an object is destroyed."
      },
      "inheritance": {
        "gfg": "https://www.geeksforgeeks.org/inheritance-in-c/",
        "yt": "https://www.youtube.com/watch?v=RSl87lqOXDE",
        "def": "Class acquires properties of another class."
      },
      "polymorphism": {
        "gfg": "https://www.geeksforgeeks.org/polymorphism-in-c/",
        "yt": "https://www.youtube.com/watch?v=mv5_l4kuVho",
        "def": "Functions or objects behaving in multiple forms."
      },
      "encapsulation": {
        "gfg": "https://www.geeksforgeeks.org/encapsulation-in-c/",
        "yt": "https://www.youtube.com/watch?v=4s4M8F0bT2U",
        "def": "Wrapping data and methods, restricting direct access."
      },
      "abstraction": {
        "gfg": "https://www.geeksforgeeks.org/abstraction-in-c/",
        "yt": "https://www.youtube.com/watch?v=R0qf5jY9e6s",
        "def": "Showing essential features, hiding implementation details."
      },
      "method overloading": {
        "gfg": "https://www.geeksforgeeks.org/function-overloading-c/",
        "yt": "https://www.youtube.com/watch?v=JQh6L0Y6v3I",
        "def": "Multiple functions with same name, different parameters."
      },
      "method overriding": {
        "gfg": "https://www.geeksforgeeks.org/function-overriding-in-c/",
        "yt": "https://www.youtube.com/watch?v=Qx4M4LxYf4A",
        "def": "Derived class redefines base class method."
      },

      // ===== DBMS =====
      "dbms": {
        "gfg": "https://www.geeksforgeeks.org/dbms/",
        "yt": "https://www.youtube.com/watch?v=ztHopE5Wnpc",
        "def": "Software system to store, organize, and manage data."
      },
      "sql": {
        "gfg": "https://www.geeksforgeeks.org/sql-tutorial/",
        "yt": "https://www.youtube.com/watch?v=HXV3zeQKqGY",
        "def": "Language to query and manage relational databases."
      },
      "primary key": {
        "gfg": "https://www.geeksforgeeks.org/primary-key-in-dbms/",
        "yt": "https://www.youtube.com/watch?v=3YcM1i1k8fY",
        "def": "Column uniquely identifying each row in a table."
      },
      "foreign key": {
        "gfg": "https://www.geeksforgeeks.org/foreign-key-in-dbms/",
        "yt": "https://www.youtube.com/watch?v=6m0gL3kM5K0",
        "def": "Column linking one table to another's primary key."
      },
      "normalization": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-database-normalization/",
        "yt": "https://www.youtube.com/watch?v=GFQaEYEc8_8",
        "def": "Organizing tables to reduce redundancy."
      },
      "join": {
        "gfg": "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/",
        "yt": "https://www.youtube.com/watch?v=9yeOJ0ZMUYw",
        "def": "Combines rows from multiple tables."
      },
      "index": {
        "gfg": "https://www.geeksforgeeks.org/sql-indexes/",
        "yt": "https://www.youtube.com/watch?v=fsG1XaZEa78",
        "def": "Database structure speeding up data retrieval."
      },
      "transaction": {
        "gfg": "https://www.geeksforgeeks.org/dbms-transactions/",
        "yt": "https://www.youtube.com/watch?v=7S_tz1z_5bA",
        "def": "Sequence of operations as one logical unit."
      },
      "acid": {
        "gfg": "https://www.geeksforgeeks.org/acid-properties-in-dbms/",
        "yt": "https://www.youtube.com/watch?v=GAe5oB742dw",
        "def": "Atomicity, Consistency, Isolation, Durability."
      },
      "schema": {
        "gfg": "https://www.geeksforgeeks.org/database-schema/",
        "yt": "https://www.youtube.com/watch?v=2Z8M9L0k4Uc",
        "def": "Logical structure defining tables and relationships."
      },

      // ===== Operating System =====
      "operating system": {
        "gfg": "https://www.geeksforgeeks.org/operating-systems/",
        "yt": "https://www.youtube.com/watch?v=vBURTt97EkA",
        "def": "System software managing hardware and software resources."
      },
      "process": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-process-management/",
        "yt": "https://www.youtube.com/watch?v=0Qh7H0T0Qj0",
        "def": "Program in execution with its own memory."
      },
      "thread": {
        "gfg": "https://www.geeksforgeeks.org/thread-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=ldJ8WGZVXZk",
        "def": "Smallest unit of CPU execution within a process."
      },
      "multithreading": {
        "gfg": "https://www.geeksforgeeks.org/multithreading-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=IEIuh4O8jXk",
        "def": "Running multiple threads concurrently."
      },
      "cpu scheduling": {
        "gfg": "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/",
        "yt": "https://www.youtube.com/watch?v=txj9M4N1N8Y",
        "def": "Deciding which process gets CPU next."
      },
      "deadlock": {
        "gfg": "https://www.geeksforgeeks.org/deadlock-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=8slRt8wD440",
        "def": "Processes waiting forever for each other."
      },
      "paging": {
        "gfg": "https://www.geeksforgeeks.org/paging-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=dd2V2yM6u8Y",
        "def": "Memory management using fixed-size pages."
      },
      "virtual memory": {
        "gfg": "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=3YQ8mRLfV6U",
        "def": "Uses disk space as extension of RAM."
      },
      "semaphore": {
        "gfg": "https://www.geeksforgeeks.org/semaphores-in-process-synchronization/",
        "yt": "https://www.youtube.com/watch?v=ukM_zzrIeXs",
        "def": "Synchronization tool for shared resource access."
      },
      "mutex": {
        "gfg": "https://www.geeksforgeeks.org/mutex-vs-semaphore/",
        "yt": "https://www.youtube.com/watch?v=oq29KUy29iQ",
        "def": "Lock allowing one thread at a time."
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