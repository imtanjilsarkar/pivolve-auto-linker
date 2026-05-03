// content.js — PiVolve Auto Linker
(function () {
  "use strict";

  let keywordData = {};
  let isPopupVisible = false;
  let popupElement = null;

  // ——— Fetch keyword data from background ———
  async function init() {
    try {
      const data = await chrome.runtime.sendMessage({ action: "getKeywords" });
      if (data && data.keywords) {
        keywordData = data.keywords;
        scanAndHighlight();
      }
    } catch (error) {
      console.error("PiVolve: Failed to get keywords:", error);
    }
  }

  // ——— Scan page text and wrap keywords ———
  function scanAndHighlight() {
    const keywords = Object.keys(keywordData);
    if (keywords.length === 0) return;

    // Build regex: match whole words, case-insensitive
    const escapedKeywords = keywords
      .sort((a, b) => b.length - a.length) // longer first to avoid partial matches
      .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "gi");

    walkTextNodes(document.body, regex);
  }

  // ——— Traverse only text nodes (safe, doesn't break page) ———
  function walkTextNodes(node, regex) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentNode;

      // Skip if inside our own popup or already processed
      if (
        parent.closest("#pivolve-popup") ||
        parent.closest(".pivolve-highlight") ||
        parent.closest("script") ||
        parent.closest("style") ||
        parent.closest("textarea") ||
        parent.closest("input")
      ) {
        return;
      }

      const text = node.textContent;
      if (text.trim() && regex.test(text)) {
        replaceTextNode(node, regex);
      }
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      node.childNodes.length > 0
    ) {
      // Recursively walk children
      Array.from(node.childNodes).forEach(child => walkTextNodes(child, regex));
    }
  }

  // ——— Replace text node with highlighted spans ———
  function replaceTextNode(textNode, regex) {
    const text = textNode.textContent;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    // Reset regex (since we reuse it)
    regex.lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      // Text before match
      if (match.index > lastIndex) {
        fragment.appendChild(
          document.createTextNode(text.slice(lastIndex, match.index))
        );
      }

      // Highlighted keyword
      const matchedWord = match[0];
      const lowerWord = matchedWord.toLowerCase();
      const data = keywordData[lowerWord];

      if (data) {
        const span = document.createElement("span");
        span.className = "pivolve-highlight";
        span.textContent = matchedWord;
        span.dataset.keyword = lowerWord;
        span.dataset.gfg = data.gfg || "";
        span.dataset.yt = data.yt || "";
        span.dataset.def = data.def || "";

        // Event listeners
        span.addEventListener("mouseenter", showPopup);
        span.addEventListener("mouseleave", schedulePopupHide);

        fragment.appendChild(span);
      } else {
        fragment.appendChild(document.createTextNode(matchedWord));
      }

      lastIndex = regex.lastIndex;
    }

    // Remaining text after last match
    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    textNode.parentNode.replaceChild(fragment, textNode);
  }

  // ——— Show popup near highlighted word ———
  function showPopup(event) {
    const span = event.currentTarget;
    const keyword = span.dataset.keyword;
    const def = span.dataset.def;
    const gfg = span.dataset.gfg;
    const yt = span.dataset.yt;

    // Remove any existing popup
    removePopup();

    // Create popup
    popupElement = document.createElement("div");
    popupElement.id = "pivolve-popup";
    popupElement.innerHTML = `
      <div class="pivolve-popup-header">
        <strong>${keyword}</strong>
        <button class="pivolve-popup-close">&times;</button>
      </div>
      ${def ? `<p class="pivolve-popup-def">${def}</p>` : ""}
      <div class="pivolve-popup-links">
        ${
          gfg
            ? `<a href="${gfg}" target="_blank" class="pivolve-link pivolve-gfg">
                 📘 GeeksforGeeks
               </a>`
            : ""
        }
        ${
          yt
            ? `<a href="${yt}" target="_blank" class="pivolve-link pivolve-yt">
                 ▶️ YouTube
               </a>`
            : ""
        }
      </div>
    `;

    document.body.appendChild(popupElement);

    // Position near the word
    positionPopup(span);

    // Add close button listener
    popupElement.querySelector(".pivolve-popup-close").addEventListener("click", removePopup);

    // Keep popup alive when hovering over it
    popupElement.addEventListener("mouseenter", () => {
      isPopupVisible = true;
    });
    popupElement.addEventListener("mouseleave", schedulePopupHide);

    isPopupVisible = true;
  }

  // ——— Position popup near target element ———
  function positionPopup(target) {
    if (!popupElement) return;

    const rect = target.getBoundingClientRect();
    const popupWidth = 320;
    const popupHeight = popupElement.offsetHeight || 150;

    let top = rect.top + window.scrollY - popupHeight - 10; // Above the word
    let left = rect.left + window.scrollX;

    // If not enough space above, show below
    if (top < window.scrollY + 10) {
      top = rect.bottom + window.scrollY + 10;
    }

    // Prevent overflow on right side
    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 20;
    }

    // Prevent overflow on left side
    if (left < 10) left = 10;

    popupElement.style.top = `${top}px`;
    popupElement.style.left = `${left}px`;
  }

  // ——— Schedule popup removal (small delay for UX) ———
  function schedulePopupHide() {
    isPopupVisible = false;
    setTimeout(() => {
      if (!isPopupVisible) {
        removePopup();
      }
    }, 300); // 300ms grace period
  }

  function removePopup() {
    if (popupElement) {
      popupElement.remove();
      popupElement = null;
      isPopupVisible = false;
    }
  }

  // ——— Start ———
  init();
})();