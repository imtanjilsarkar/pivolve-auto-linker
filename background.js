// background.js — PiVolve Auto Linker (~60 Keywords)
const CACHE_KEY = "keywordData";

async function setupHardcodedKeywords() {
  const hardcodedData = {
    keywords: {

      // ===== Computer Networking =====
      "osi model": {
        "gfg": "https://www.geeksforgeeks.org/layers-of-osi-model/",
        "yt": "https://www.youtube.com/watch?v=vv4y_uOneC0",
        "def": "A conceptual framework used to understand network interactions in seven layers."
      },
      "ip address": {
        "gfg": "https://www.geeksforgeeks.org/ip-addressing-introduction-and-classful-addressing/",
        "yt": "https://www.youtube.com/watch?v=nInO0_0Z_tA",
        "def": "A unique numerical label assigned to each device connected to a computer network."
      },
      "http": {
        "gfg": "https://www.geeksforgeeks.org/http-full-form/",
        "yt": "https://www.youtube.com/watch?v=hJHvdloAnug",
        "def": "Hypertext Transfer Protocol used for transmitting web pages over the internet."
      },
      "https": {
        "gfg": "https://www.geeksforgeeks.org/difference-between-http-and-https/",
        "yt": "https://www.youtube.com/watch?v=T_Q9u_W2Wiw",
        "def": "Secure version of HTTP that uses SSL/TLS encryption for data safety."
      },
      "router": {
        "gfg": "https://www.geeksforgeeks.org/layers-of-osi-model/",
        "yt": "https://www.youtube.com/watch?v=UXMIxCY2J_0",
        "def": "Networking device that forwards data packets between computer networks."
      },
      "switch": {
        "gfg": "https://www.geeksforgeeks.org/difference-between-hub-and-switch/",
        "yt": "https://www.youtube.com/watch?v=LNMp_C7u64U",
        "def": "A device that connects devices on a computer network using packet switching."
      },
      "subnetting": {
        "gfg": "https://www.geeksforgeeks.org/ip-addressing-and-subnetting/",
        "yt": "https://www.youtube.com/watch?v=s_Ntt6eTn94",
        "def": "The practice of dividing a network into two or more smaller networks."
      },
      "firewall": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-firewall-in-computer-network/",
        "yt": "https://www.youtube.com/watch?v=kDEX1HXybrU",
        "def": "A network security system that monitors and controls incoming and outgoing traffic."
      },

      // ===== Web Development & Tech =====
      "html": {
        "gfg": "https://www.geeksforgeeks.org/html-introduction/",
        "yt": "https://www.youtube.com/watch?v=kUMe1fh4FUY",
        "def": "Standard markup language for creating web pages."
      },
      "css": {
        "gfg": "https://www.geeksforgeeks.org/css-introduction/",
        "yt": "https://www.youtube.com/watch?v=1PnVor36_40",
        "def": "Language used for describing the presentation of a document written in HTML."
      },
      "javascript": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-javascript/",
        "yt": "https://www.youtube.com/watch?v=vEROU2XtPR8",
        "def": "A high-level, interpreted programming language for web interactivity."
      },
      "dom": {
        "gfg": "https://www.geeksforgeeks.org/dom-document-object-model/",
        "yt": "https://www.youtube.com/watch?v=NO5kUNxGIu0",
        "def": "Document Object Model, a programming interface for web documents."
      },
      "api": {
        "gfg": "https://www.geeksforgeeks.org/rest-api-introduction/",
        "yt": "https://www.youtube.com/watch?v=REQU-8Sg0S0",
        "def": "Application Programming Interface, a set of rules for software interaction."
      },
      "json": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-json/",
        "yt": "https://www.youtube.com/watch?v=iiADhChRriM",
        "def": "JavaScript Object Notation, a lightweight data-interchange format."
      },
      "rest": {
        "gfg": "https://www.geeksforgeeks.org/rest-api-introduction/",
        "yt": "https://www.youtube.com/watch?v=-mN3VyJuCjM",
        "def": "Representational State Transfer, an architectural style for networked applications."
      },

      // ===== Cybersecurity =====
      "cryptography": {
        "gfg": "https://www.geeksforgeeks.org/cryptography-introduction/",
        "yt": "https://www.youtube.com/watch?v=jhXCTbFnK8o",
        "def": "Technique of securing information through codes and encryption."
      },
      "encryption": {
        "gfg": "https://www.geeksforgeeks.org/difference-between-encryption-and-decryption/",
        "yt": "https://www.youtube.com/watch?v=E5Fe_gu6_PQ",
        "def": "Process of converting plaintext into ciphertext for security."
      },
      "hashing": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-hashing-data-structure-and-algorithm-tutorials/",
        "yt": "https://www.youtube.com/watch?v=2BldESGZKB8",
        "def": "Converting data into a fixed-size string of characters for integrity."
      },
      "cyber attack": {
        "gfg": "https://www.geeksforgeeks.org/common-types-of-cyber-attacks/",
        "yt": "https://www.youtube.com/watch?v=6f_N70X_C8I",
        "def": "An attempt by hackers to damage or destroy a computer network or system."
      },
      "malware": {
        "gfg": "https://www.geeksforgeeks.org/what-is-malware/",
        "yt": "https://www.youtube.com/watch?v=Mbe_Ym_WntY",
        "def": "Malicious software specifically designed to disrupt, damage, or gain unauthorized access."
      },

      // ===== Software Engineering =====
      "sdlc": {
        "gfg": "https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/",
        "yt": "https://www.youtube.com/watch?v=Fi3_BjVzLpg",
        "def": "Software Development Life Cycle, a process for high-quality software production."
      },
      "agile": {
        "gfg": "https://www.geeksforgeeks.org/agile-software-development/",
        "yt": "https://www.youtube.com/watch?v=Z9QbYZh1YXY",
        "def": "Methodology focusing on iterative development and team collaboration."
      },
      "git": {
        "gfg": "https://www.geeksforgeeks.org/version-control-systems/",
        "yt": "https://www.youtube.com/watch?v=8JJ101D3knE",
        "def": "A distributed version control system to track changes in source code."
      },
      "cloud computing": {
        "gfg": "https://www.geeksforgeeks.org/cloud-computing/",
        "yt": "https://www.youtube.com/watch?v=M988_fsOSWo",
        "def": "Delivery of computing services over the internet like storage and processing power."
      },

      // ===== Artificial Intelligence & Machine Learning =====
      "artificial intelligence": {
        "gfg": "https://www.geeksforgeeks.org/artificial-intelligence-an-introduction/",
        "yt": "https://www.youtube.com/watch?v=ad79nyyw2mk",
        "def": "Simulation of human intelligence by machines, especially computer systems."
      },
      "machine learning": {
        "gfg": "https://www.geeksforgeeks.org/machine-learning/",
        "yt": "https://www.youtube.com/watch?v=GwIo3gDZUtQ",
        "def": "Field of AI that allows systems to learn and improve from experience without being explicitly programmed."
      },
      "deep learning": {
        "gfg": "https://www.geeksforgeeks.org/introduction-deep-learning/",
        "yt": "https://www.youtube.com/watch?v=6M5VX9GCAJK",
        "def": "A subset of machine learning based on artificial neural networks with multiple layers."
      },
      "neural network": {
        "gfg": "https://www.geeksforgeeks.org/neural-networks-a-comprehensive-guide/",
        "yt": "https://www.youtube.com/watch?v=aircAruvnKk",
        "def": "Computing systems inspired by the biological neural networks in human brains."
      },
      "supervised learning": {
        "gfg": "https://www.geeksforgeeks.org/supervised-machine-learning/",
        "yt": "https://www.youtube.com/watch?v=cfj6yaie8hs",
        "def": "Learning where the model is trained on labeled data."
      },
      "unsupervised learning": {
        "gfg": "https://www.geeksforgeeks.org/unsupervised-machine-learning/",
        "yt": "https://www.youtube.com/watch?v=4b5d3muPQmA",
        "def": "Learning where the model finds patterns in unlabeled data."
      },
      "reinforcement learning": {
        "gfg": "https://www.geeksforgeeks.org/what-is-reinforcement-learning/",
        "yt": "https://www.youtube.com/watch?v=JgvyzIkgxF0",
        "def": "Learning by interacting with an environment to maximize rewards."
      },
      "natural language processing": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-natural-language-processing/",
        "yt": "https://www.youtube.com/watch?v=CMrHM8a3hqw",
        "def": "Interaction between computers and human languages (NLP)."
      },
      "computer vision": {
        "gfg": "https://www.geeksforgeeks.org/computer-vision-introduction/",
        "yt": "https://www.youtube.com/watch?v=01sAkU_NvOY",
        "def": "Field of AI that enables computers to derive meaningful information from digital images or videos."
      },
      "overfitting": {
        "gfg": "https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/",
        "yt": "https://www.youtube.com/watch?v=ansO1B2-fBU",
        "def": "When a model learns the training data too well, failing to generalize to new data."
      },
      "underfitting": {
        "gfg": "https://www.geeksforgeeks.org/underfitting-and-overfitting-in-machine-learning/",
        "yt": "https://www.youtube.com/watch?v=ansO1B2-fBU",
        "def": "When a model is too simple to capture the underlying trend of the data."
      },
      "regression": {
        "gfg": "https://www.geeksforgeeks.org/regression-analysis-and-its-types/",
        "yt": "https://www.youtube.com/watch?v=ZkjP5RJLQF4",
        "def": "Predicting a continuous numerical output based on input variables."
      },
      "classification": {
        "gfg": "https://www.geeksforgeeks.org/getting-started-with-classification/",
        "yt": "https://www.youtube.com/watch?v=I7X9659p4U",
        "def": "Predicting a discrete label or category for a given input."
      },

      // ===== Computer Architecture & Digital Logic =====
      "cpu": {
        "gfg": "https://www.geeksforgeeks.org/central-processing-unit-cpu/",
        "yt": "https://www.youtube.com/watch?v=FZG8unwax6c",
        "def": "The primary component of a computer that performs most of the processing (Central Processing Unit)."
      },
      "ram": {
        "gfg": "https://www.geeksforgeeks.org/random-access-memory-ram/",
        "yt": "https://www.youtube.com/watch?v=7uV8779V-xM",
        "def": "Main memory used for short-term data storage and quick access (Random Access Memory)."
      },
      "cache memory": {
        "gfg": "https://www.geeksforgeeks.org/cache-memory/",
        "yt": "https://www.youtube.com/watch?v=sHqXItK_ZtE",
        "def": "A smaller, faster memory which stores copies of the data from frequently used main memory locations."
      },
      "alu": {
        "gfg": "https://www.geeksforgeeks.org/arithmetic-logic-unit-alu/",
        "yt": "https://www.youtube.com/watch?v=1I5ZMmrOfnA",
        "def": "Part of the CPU that performs arithmetic and logical operations (Arithmetic Logic Unit)."
      },
      "instruction set architecture": {
        "gfg": "https://www.geeksforgeeks.org/instruction-set-architecture-isa-in-computer-organization/",
        "yt": "https://www.youtube.com/watch?v=vVFrE8_l8fI",
        "def": "Abstract model of a computer that defines supported data types, registers, and instructions (ISA)."
      },
      "pipelining": {
        "gfg": "https://www.geeksforgeeks.org/pipelining-in-computer-architecture/",
        "yt": "https://www.youtube.com/watch?v=T_v9D6hH4_c",
        "def": "Technique where multiple instructions are overlapped in execution."
      },
      "logic gate": {
        "gfg": "https://www.geeksforgeeks.org/logic-gates/",
        "yt": "https://www.youtube.com/watch?v=95kv5BF2Zkg",
        "def": "Building blocks of digital circuits performing basic logical functions like AND, OR, NOT."
      },
      "flip flop": {
        "gfg": "https://www.geeksforgeeks.org/flip-flop-types-working-uses/",
        "yt": "https://www.youtube.com/watch?v=tStiaos_7To",
        "def": "A circuit that has two stable states and can be used to store state information."
      },

      // ===== Software Testing & DevOps =====
      "unit testing": {
        "gfg": "https://www.geeksforgeeks.org/unit-testing-software-testing/",
        "yt": "https://www.youtube.com/watch?v=wEhu57piKyU",
        "def": "Testing individual components or pieces of code in isolation."
      },
      "integration testing": {
        "gfg": "https://www.geeksforgeeks.org/integration-testing-software-testing/",
        "yt": "https://www.youtube.com/watch?v=QZ0f0_D_9rU",
        "def": "Testing combined parts of an application to ensure they work together."
      },
      "docker": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-docker/",
        "yt": "https://www.youtube.com/watch?v=fqMOX6JJhGo",
        "def": "Platform for developing, shipping, and running applications in containers."
      },
      "kubernetes": {
        "gfg": "https://www.geeksforgeeks.org/kubernetes-tutorial/",
        "yt": "https://www.youtube.com/watch?v=X48VuDVv0do",
        "def": "Open-source system for automating deployment, scaling, and management of containerized applications."
      },
      "ci/cd": {
        "gfg": "https://www.geeksforgeeks.org/continuous-integration-and-continuous-deployment-cicd/",
        "yt": "https://www.youtube.com/watch?v=scEDHsrXJKY",
        "def": "Continuous Integration and Continuous Deployment pipeline for automated software delivery."
      },

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

      // ===== Data Science & Analytics =====
      "pandas": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-pandas-in-python/",
        "yt": "https://www.youtube.com/watch?v=vmEHCJofslg",
        "def": "A powerful Python library for data manipulation and analysis using DataFrames."
      },
      "numpy": {
        "gfg": "https://www.geeksforgeeks.org/python-numpy/",
        "yt": "https://www.youtube.com/watch?v=QUT1VHiLmmI",
        "def": "Fundamental package for scientific computing with Python, supporting large multi-dimensional arrays."
      },
      "matplotlib": {
        "gfg": "https://www.geeksforgeeks.org/matplotlib-tutorial/",
        "yt": "https://www.youtube.com/watch?v=OZOOLe2tkf8",
        "def": "A plotting library for creating static, animated, and interactive visualizations in Python."
      },
      "data mining": {
        "gfg": "https://www.geeksforgeeks.org/data-mining/",
        "yt": "https://www.youtube.com/watch?v=yYvS6O0O6_Y",
        "def": "Process of discovering patterns and knowledge from large amounts of data."
      },
      "big data": {
        "gfg": "https://www.geeksforgeeks.org/what-is-big-data/",
        "yt": "https://www.youtube.com/watch?v=bAyrObl7TYE",
        "def": "Extremely large data sets that may be analyzed computationally to reveal patterns and trends."
      },

      // ===== Discrete Mathematics =====
      "set theory": {
        "gfg": "https://www.geeksforgeeks.org/set-theory/",
        "yt": "https://www.youtube.com/watch?v=tyDKR4FG3Yw",
        "def": "The branch of mathematical logic that studies sets, which are collections of objects."
      },
      "propositional logic": {
        "gfg": "https://www.geeksforgeeks.org/propositional-logic/",
        "yt": "https://www.youtube.com/watch?v=h_9WjWEnDe8",
        "def": "A branch of logic that deals with propositions which can be true or false."
      },
      "graph theory": {
        "gfg": "https://www.geeksforgeeks.org/mathematics-graph-theory-basics/",
        "yt": "https://www.youtube.com/watch?v=82zlRaDut2I",
        "def": "The study of graphs, which are mathematical structures used to model pairwise relations between objects."
      },
      "permutation": {
        "gfg": "https://www.geeksforgeeks.org/permutation-and-combination-basics/",
        "yt": "https://www.youtube.com/watch?v=XqQTXW7Xf78",
        "def": "An arrangement of all or part of a set of objects, with regard to the order of the arrangement."
      },
      "combination": {
        "gfg": "https://www.geeksforgeeks.org/permutation-and-combination-basics/",
        "yt": "https://www.youtube.com/watch?v=XqQTXW7Xf78",
        "def": "A selection of all or part of a set of objects, without regard to the order."
      },

      // ===== Mobile & Application Development =====
      "android development": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-android-development/",
        "yt": "https://www.youtube.com/watch?v=fis26HvvDII",
        "def": "The process by which new applications are created for devices running the Android operating system."
      },
      "flutter": {
        "gfg": "https://www.geeksforgeeks.org/flutter-tutorial/",
        "yt": "https://www.youtube.com/watch?v=VPvVD8t02U8",
        "def": "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
      },
      "react native": {
        "gfg": "https://www.geeksforgeeks.org/react-native-tutorial/",
        "yt": "https://www.youtube.com/watch?v=0-S5a0eXPoc",
        "def": "An open-source UI software framework used to develop applications for Android, iOS, and Web."
      },
      "ios development": {
        "gfg": "https://www.geeksforgeeks.org/ios-application-development-tutorial/",
        "yt": "https://www.youtube.com/watch?v=UN76I5T-U9o",
        "def": "Creating software applications for Apple hardware, including iPhone, iPad, and iPod Touch."
      },

      // ===== Advanced Security & Networking =====
      "virtual private network": {
        "gfg": "https://www.geeksforgeeks.org/what-is-vpn-virtual-private-network/",
        "yt": "https://www.youtube.com/watch?v=6_p7Z7YfT9s",
        "def": "Extends a private network across a public network and enables users to send and receive data securely (VPN)."
      },
      "ssl": {
        "gfg": "https://www.geeksforgeeks.org/what-is-ssl-secure-sockets-layer/",
        "yt": "https://www.youtube.com/watch?v=SRE886Aonp4",
        "def": "Secure Sockets Layer, a standard security technology for establishing an encrypted link between a server and a client."
      },
      "penetration testing": {
        "gfg": "https://www.geeksforgeeks.org/penetration-testing-services/",
        "yt": "https://www.youtube.com/watch?v=tYmYmD68Z88",
        "def": "A simulated cyberattack against your computer system to check for exploitable vulnerabilities."
      },
      "phishing": {
        "gfg": "https://www.geeksforgeeks.org/what-is-phishing/",
        "yt": "https://www.youtube.com/watch?v=Y7zNlEMDmI4",
        "def": "A type of social engineering attack often used to steal user data, including login credentials and credit card numbers."
      },
      "socket programming": {
        "gfg": "https://www.geeksforgeeks.org/socket-programming-cc/",
        "yt": "https://www.youtube.com/watch?v=uIn6S3S7u_U",
        "def": "Programming for network communication using sockets as endpoints."
      },

      // ===== Operating Systems & Systems Programming =====
      "process synchronization": {
        "gfg": "https://www.geeksforgeeks.org/process-synchronization-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=phO_pT8tVIs",
        "def": "The coordination of execution of multiple processes in a multi-process system to ensure consistent access to shared data."
      },
      "deadlock": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=rK9V_Y_tWpI",
        "def": "A situation where a set of processes are blocked because each process is holding a resource and waiting for another resource held by another process."
      },
      "virtual memory": {
        "gfg": "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=2qu_R6_oD_w",
        "def": "A memory management technique that provides, an idealized abstraction of the storage resources that, are actually available."
      },
      "paging": {
        "gfg": "https://www.geeksforgeeks.org/paging-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=XvK_C-C6lX8",
        "def": "A storage mechanism that allows the OS to retrieve processes from secondary storage into main memory in pages."
      },
      "segmentation": {
        "gfg": "https://www.geeksforgeeks.org/segmentation-in-operating-system/",
        "yt": "https://www.youtube.com/watch?v=3uSntuB3V1U",
        "def": "A memory management scheme that supports the user view of memory by dividing it into segments."
      },

      // ===== Software Engineering & Project Management =====
      "software requirement specification": {
        "gfg": "https://www.geeksforgeeks.org/software-requirement-specification-srs/",
        "yt": "https://www.youtube.com/watch?v=1O9pX7oWw_c",
        "def": "A document that describes what the software will do and how it will be expected to perform (SRS)."
      },
      "black box testing": {
        "gfg": "https://www.geeksforgeeks.org/differences-between-black-box-testing-and-white-box-testing/",
        "yt": "https://www.youtube.com/watch?v=qXvAnuO_q_g",
        "def": "Testing method where the internal structure/design of the item being tested is not known to the tester."
      },
      "white box testing": {
        "gfg": "https://www.geeksforgeeks.org/differences-between-black-box-testing-and-white-box-testing/",
        "yt": "https://www.youtube.com/watch?v=VlS9ZOnlDsc",
        "def": "Testing method that looks into the internal structure, design, and coding of software to verify flow and security."
      },
      "kanban": {
        "gfg": "https://www.geeksforgeeks.org/kanban-software-development/",
        "yt": "https://www.youtube.com/watch?v=iVaDGnS_T_A",
        "def": "An agile framework that helps teams visualize their work, limit work in progress, and maximize efficiency."
      },
      "scrum": {
        "gfg": "https://www.geeksforgeeks.org/scrum-framework-in-software-engineering/",
        "yt": "https://www.youtube.com/watch?v=9TycLR0TqFA",
        "def": "An agile methodology that uses short cycles called sprints to deliver software increments regularly."
      },

      // ===== DBMS & Data Management =====
      "sql join": {
        "gfg": "https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/",
        "yt": "https://www.youtube.com/watch?v=0OQJDd3Iu_s",
        "def": "Used to combine rows from two or more tables, based on a related column between them."
      },
      "nosql": {
        "gfg": "https://www.geeksforgeeks.org/introduction-to-nosql/",
        "yt": "https://www.youtube.com/watch?v=0buKQHokLK8",
        "def": "A non-relational database that provides a mechanism for storage and retrieval of data modeled in means other than tabular relations."
      },
      "mongodb": {
        "gfg": "https://www.geeksforgeeks.org/mongodb-tutorial/",
        "yt": "https://www.youtube.com/watch?v=-56x56UppqQ",
        "def": "A source-available cross-platform document-oriented database program classified as a NoSQL database."
      },
      "transaction management": {
        "gfg": "https://www.geeksforgeeks.org/transaction-management-in-dbms/",
        "yt": "https://www.youtube.com/watch?v=mYv-2TevIno",
        "def": "The process of managing multiple operations on a database as a single unit of work (ACID properties)."
      },

      // ===== Compiler Design & Automata =====
      "finite automata": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-finite-automata/",
        "yt": "https://www.youtube.com/watch?v=Qa6csfkK7_I",
        "def": "A mathematical model of computation used to design both computer programs and sequential logic circuits."
      },
      "lexical analysis": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-lexical-analysis/",
        "yt": "https://www.youtube.com/watch?v=XfL-0nO2z80",
        "def": "The first phase of a compiler that converts high-level input code into a sequence of tokens."
      },
      "syntax tree": {
        "gfg": "https://www.geeksforgeeks.org/abstract-syntax-tree/",
        "yt": "https://www.youtube.com/watch?v=fXvI9_H_B3c",
        "def": "A tree representation of the abstract syntactic structure of source code written in a programming language."
      },
      "context free grammar": {
        "gfg": "https://www.geeksforgeeks.org/context-free-grammar/",
        "yt": "https://www.youtube.com/watch?v=5_tfVn_67G8",
        "def": "A set of recursive rewriting rules used to generate patterns of strings (CFG)."
      },

      // ===== Algorithm Analysis & Complexity =====
      "big o notation": {
        "gfg": "https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/",
        "yt": "https://www.youtube.com/watch?v=__vX2sjLPXU",
        "def": "Mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity."
      },
      "time complexity": {
        "gfg": "https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/",
        "yt": "https://www.youtube.com/watch?v=9TlHvipP5yA",
        "def": "The amount of time taken by an algorithm to run as a function of the length of the input."
      },
      "space complexity": {
        "gfg": "https://www.geeksforgeeks.org/g-fact-82/",
        "yt": "https://www.youtube.com/watch?v=PyC_tS3p6E0",
        "def": "The total amount of memory space used by an algorithm, including the space of input values."
      },
      "dynamic programming": {
        "gfg": "https://www.geeksforgeeks.org/dynamic-programming/",
        "yt": "https://www.youtube.com/watch?v=oBt53YbR9Kk",
        "def": "An algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems."
      },
      "greedy algorithm": {
        "gfg": "https://www.geeksforgeeks.org/greedy-algorithms/",
        "yt": "https://www.youtube.com/watch?v=HzeK7g8uy0U",
        "def": "An algorithmic paradigm that follows the problem-solving heuristic of making the locally optimal choice at each stage."
      },
      "np-complete": {
        "gfg": "https://www.geeksforgeeks.org/np-completeness-set-1/",
        "yt": "https://www.youtube.com/watch?v=OYn5X9_A-5c",
        "def": "A class of decision problems which are both in NP and NP-hard; no known polynomial-time algorithms solve them."
      },

      // ===== Computer Networking & Security (Part 2) =====
      "subnet mask": {
        "gfg": "https://www.geeksforgeeks.org/introduction-of-ipv4-address-structure-and-subnet-mask/",
        "yt": "https://www.youtube.com/watch?v=s_Ntt6eTn94",
        "def": "A 32-bit number used to differentiate the network component of an IP address from the host component."
      },
      "arp": {
        "gfg": "https://www.geeksforgeeks.org/how-address-resolution-protocol-arp-works/",
        "yt": "https://www.youtube.com/watch?v=aamG4-tV_m8",
        "def": "Address Resolution Protocol, used to map an IP address to a physical machine address (MAC address)."
      },
      "brute force attack": {
        "gfg": "https://www.geeksforgeeks.org/brute-force-approach-and-its-pros-and-cons/",
        "yt": "https://www.youtube.com/watch?v=Y8mE7Uv_Dps",
        "def": "A trial-and-error method used by application programs to decode encrypted data such as passwords."
      },
      "cross site scripting": {
        "gfg": "https://www.geeksforgeeks.org/what-is-cross-site-scripting-xss/",
        "yt": "https://www.youtube.com/watch?v=EoaDgugm6mc",
        "def": "A type of security vulnerability typically found in web applications (XSS)."
      },
      "denial of service": {
        "gfg": "https://www.geeksforgeeks.org/denial-of-service-and-distributed-denial-of-service-attacks/",
        "yt": "https://www.youtube.com/watch?v=HViMRE2r7L0",
        "def": "An attack meant to shut down a machine or network, making it inaccessible to its intended users (DoS)."
      },

      // ===== Discrete Mathematics & Theory =====
      "pigeonhole principle": {
        "gfg": "https://www.geeksforgeeks.org/pigeonhole-principle/",
        "yt": "https://www.youtube.com/watch?v=ROreX6XThV8",
        "def": "States that if n items are put into m containers, with n > m, then at least one container must contain more than one item."
      },
      "truth table": {
        "gfg": "https://www.geeksforgeeks.org/mathematics-propositional-logic-introduction/",
        "yt": "https://www.youtube.com/watch?v=1XmG7D_F96U",
        "def": "A mathematical table used in logic to determine whether a complex proposition is true or false."
      },
      "recurrence relation": {
        "gfg": "https://www.geeksforgeeks.org/recurrence-relation/",
        "yt": "https://www.youtube.com/watch?v=S9No7v-U86I",
        "def": "An equation that defines a sequence based on a rule that gives the next term as a function of the previous term(s)."
      },

      // ===== Software Architecture =====
      "microservices": {
        "gfg": "https://www.geeksforgeeks.org/microservices-introduction/",
        "yt": "https://www.youtube.com/watch?v=rv4Y_m-yN1U",
        "def": "An architectural style that structures an application as a collection of services."
      },
      "mvc architecture": {
        "gfg": "https://www.geeksforgeeks.org/mvc-design-pattern/",
        "yt": "https://www.youtube.com/watch?v=1IsL678ixX8",
        "def": "Model-View-Controller, a design pattern used to decouple user interface, data, and application logic."
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