<div align="center">

<img src="https://img.shields.io/badge/⚡-PiVolve%20Auto%20Linker-6C63FF?style=for-the-badge&logoColor=white" alt="PiVolve Auto Linker" />

# ⚡ PiVolve Auto Linker

**Instantly understand CSE keywords while browsing — just hover.**

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=flat-square&logo=googlechrome&logoColor=white)](https://github.com/imtanjilsarkar/pivolve-auto-linker)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-green?style=flat-square)](https://developer.chrome.com/docs/extensions/mv3/)
[![License](https://img.shields.io/badge/License-Free%20for%20Education-orange?style=flat-square)](LICENSE)
[![Size](https://img.shields.io/badge/Size-Under%2050KB-brightgreen?style=flat-square)](https://github.com/imtanjilsarkar/pivolve-auto-linker)
[![Made for Bangladesh](https://img.shields.io/badge/Made%20for-Bangladeshi%20CSE%20Students-red?style=flat-square)](https://github.com/imtanjilsarkar/pivolve-auto-linker)

<br/>

> A lightweight Chrome extension for CSE students. Hover over any CS keyword on any webpage — get the definition, a GeeksforGeeks article, and a YouTube tutorial. **No new tab. No searching. Just hover.**

</div>

---

##  The Problem It Solves

| Before PiVolve | After PiVolve |
|---|---|
| Google "linked list" → open 5 random websites | Hover over **linked list** anywhere → instant popup |
| Switch tabs, search GFG, find the article | One click → straight to GeeksforGeeks |
| Open YouTube separately for visual explanation | YouTube link right inside the popup |
| Constantly breaks reading flow | Stay on the page, keep your focus |

---

##  Features

-  **125+ CSE Keywords** — Data Structures, Algorithms, OOP, DBMS, OS, Programming Concepts
-  **Hover to Reveal** — Keywords stay invisible until you need them
-  **Clean Glassmorphism Popup** — Smooth animations, no visual clutter
-  **One-Click Links** — GeeksforGeeks article + YouTube video for every keyword
-  **Per-Site Toggle** — Turn PiVolve ON/OFF per website (remembers your choice)
-  **Dark Mode** — Automatically adapts to your system theme
-  **Zero Cost** — No server, no API, no fees. Fully offline after first load
-  **Lightweight** — Under 50KB total

---

##  Installation (2 Minutes)

### Step 1 — Download the Extension

Click the green **`Code`** button at the top of this page → **`Download ZIP`**

Or clone via Git:

```bash
git clone https://github.com/imtanjilsarkar/pivolve-auto-linker.git
```

---

### Step 2 — Extract the ZIP

1. Right-click the downloaded `pivolve-auto-linker-main.zip`
2. Select **Extract All**
3. Choose a folder (e.g. Desktop)
4. Click **Extract**

You should see a folder containing: `manifest.json`, `content.js`, `content.css`, `background.js`

---

### Step 3 — Open Chrome Extensions

Type this in your Chrome address bar and press **Enter**:

```
chrome://extensions
```

---

### Step 4 — Enable Developer Mode

In the **top-right corner** of the Extensions page, toggle **Developer mode** ON.

---

### Step 5 — Load the Extension

1. Click **`Load unpacked`** (top-left)
2. Select the extracted `pivolve-auto-linker-main` folder
3. Click **Select Folder**

---

###  Step 6 — Done!

PiVolve Auto Linker will now appear in your extensions list. Pin it to your toolbar for quick access.

---

##  How To Test It

Open any of these pages and hover over highlighted keywords:

| Site | Link |
|---|---|
| GeeksforGeeks DSA | [geeksforgeeks.org/data-structures](https://www.geeksforgeeks.org/data-structures/) |
| Wikipedia Data Structure | [en.wikipedia.org/wiki/Data_structure](https://en.wikipedia.org/wiki/Data_structure) |
| Google Search | Search `"what is binary search tree"` |

Try hovering over: `array`, `stack`, `binary search`, `linked list`, `recursion`

---

## 🎮 How To Use

| Action | How |
|---|---|
| See definition & links | Hover over any highlighted keyword |
| Open GeeksforGeeks | Click **📘 GeeksforGeeks** in the popup |
| Watch YouTube tutorial | Click **▶️ YouTube** in the popup |
| Close the popup | Click **×** or move your mouse away |
| Turn OFF on a site | Click the **⚡** button (bottom-right corner) |
| Turn ON again | Click the **⏸️** button again |

---

##  Project Structure

```
pivolve-auto-linker/
├── manifest.json          # Extension configuration
├── background.js          # Keyword data + management
├── content.js             # Page scanner & popup logic
├── content.css            # Styling & animations
├── data/
│   └── keywords.json      # Future: live keyword database
└── README.md
```

---

## 🔧 Advanced: Adding Your Own Keywords

1. Open `background.js`
2. Find the `keywords: { ... }` section
3. Add a new entry in this format:

```javascript
"your keyword": {
  "gfg": "https://www.geeksforgeeks.org/your-link/",
  "yt": "https://www.youtube.com/watch?v=VIDEO_ID",
  "def": "Short one-sentence definition."
}
```

4. Save the file
5. Go to `chrome://extensions`
6. Click the **refresh ↻** icon on PiVolve

---

##  Troubleshooting

| Problem | Solution |
|---|---|
| No keywords highlighted | Refresh the page (`F5`). Check the ⚡ toggle is ON |
| Popup doesn't appear | Hover directly over the underlined word |
| Extension disappeared | Go to `chrome://extensions`, ensure Developer mode is ON |
| Keywords missing on some sites | Some sites block extensions. Try Wikipedia or GFG instead |
| Want to use in Incognito? | `chrome://extensions` → Details → Turn on **Allow in incognito** |

---

## 🛠 Built With

- **Vanilla JavaScript** — No frameworks, no bloat
- **Chrome Extension Manifest V3**
- **CSS Glassmorphism**
- **Zero external dependencies**

---

##  Roadmap

- [ ] GitHub Pages integration (update keywords without reinstalling)
- [ ] 500+ keywords covering full CSE syllabus
- [ ] Contributor system (suggest keywords via GitHub Issues)
- [ ] Custom keyword bookmarking
- [ ] Firefox support

---

##  Author

**Tanjil Sarkar**
CSE Student, Bangladesh
 GitHub: [@imtanjilsarkar](https://github.com/imtanjilsarkar)
 Company: [PiVolve](https://github.com/imtanjilsarkar)

---

##  License

Free for personal and educational use.

---

<div align="center">

If PiVolve helped you, please give it a ⭐ on GitHub — it helps other students find it!

<br/>

*PiVolve © 2026*

</div>
