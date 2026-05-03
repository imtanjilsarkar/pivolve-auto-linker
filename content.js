// content.js — PiVolve Auto Linker (Pro Edition)
(function () {
  "use strict";

  let keywordData = {};
  let isPopupVisible = false;
  let popupElement = null;
  let isExtensionEnabled = true;
  let highlightedElements = [];
  let toggleBtn = null;

  // ——— Init ———
  async function init() {
    // Check if extension is disabled for this site
    const siteKey = getSiteKey();
    const result = await chrome.storage.local.get(siteKey);
    isExtensionEnabled = result[siteKey] !== false; // Default: enabled

    try {
      const data = await chrome.runtime.sendMessage({ action: "getKeywords" });
      if (data && data.keywords) {
        keywordData = data.keywords;
        if (isExtensionEnabled) {
          scanAndHighlight();
        }
      }
    } catch (error) {
      console.error("PiVolve: Failed to get keywords:", error);
    }

    createToggleButton();
  }

  function getSiteKey() {
    const hostname = window.location.hostname;
    return `pivolve_disabled_${hostname}`;
  }

  // ——— Toggle Button ———
  function createToggleButton() {
    if (toggleBtn) return;

    toggleBtn = document.createElement("button");
    toggleBtn.id = "pivolve-toggle-btn";
    toggleBtn.innerHTML = isExtensionEnabled ? "⚡" : "⏸️";
    toggleBtn.setAttribute("data-tooltip", isExtensionEnabled ? "PiVolve On" : "PiVolve Off");
    
    if (!isExtensionEnabled) {
      toggleBtn.classList.add("pivolve-disabled");
    }

    toggleBtn.addEventListener("click", toggleExtension);
    document.body.appendChild(toggleBtn);
  }

  async function toggleExtension() {
    isExtensionEnabled = !isExtensionEnabled;
    const siteKey = getSiteKey();

    // Save state
    await chrome.storage.local.set({ [siteKey]: isExtensionEnabled });

    // Update button
    toggleBtn.innerHTML = isExtensionEnabled ? "⚡" : "⏸️";
    toggleBtn.setAttribute("data-tooltip", isExtensionEnabled ? "PiVolve On" : "PiVolve Off");

    if (isExtensionEnabled) {
      toggleBtn.classList.remove("pivolve-disabled");
      scanAndHighlight();
    } else {
      toggleBtn.classList.add("pivolve-disabled");
      removeAllHighlights();
    }
  }

  function removeAllHighlights() {
    highlightedElements.forEach(span => {
      if (span.parentNode) {
        const textNode = document.createTextNode(span.textContent);
        span.parentNode.replaceChild(textNode, span);
      }
    });
    highlightedElements = [];
    removePopup();
  }

  // ——— Scan and Highlight ———
  function scanAndHighlight() {
    if (!isExtensionEnabled) return;

    const keywords = Object.keys(keywordData);
    if (keywords.length === 0) return;

    const escapedKeywords = keywords
      .sort((a, b) => b.length - a.length)
      .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "gi");
    walkTextNodes(document.body, regex);
  }

  function walkTextNodes(node, regex) {
    if (node.nodeType === Node.TEXT_NODE) {
      const parent = node.parentNode;

      if (
        parent.closest("#pivolve-popup") ||
        parent.closest("#pivolve-toggle-btn") ||
        parent.closest(".pivolve-highlight") ||
        parent.closest("script") ||
        parent.closest("style") ||
        parent.closest("textarea") ||
        parent.closest("input") ||
        parent.closest("pre") ||
        parent.closest("code")
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
      Array.from(node.childNodes).forEach(child => walkTextNodes(child, regex));
    }
  }

  function replaceTextNode(textNode, regex) {
    const text = textNode.textContent;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    regex.lastIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        fragment.appendChild(
          document.createTextNode(text.slice(lastIndex, match.index))
        );
      }

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

        span.addEventListener("mouseenter", showPopup);
        span.addEventListener("mouseleave", schedulePopupHide);

        fragment.appendChild(span);
        highlightedElements.push(span);
      } else {
        fragment.appendChild(document.createTextNode(matchedWord));
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    textNode.parentNode.replaceChild(fragment, textNode);
  }

  // ——— Popup ———
  function showPopup(event) {
    if (!isExtensionEnabled) return;

    const span = event.currentTarget;
    const keyword = span.dataset.keyword;
    const def = span.dataset.def;
    const gfg = span.dataset.gfg;
    const yt = span.dataset.yt;

    removePopup();

    popupElement = document.createElement("div");
    popupElement.id = "pivolve-popup";
    popupElement.innerHTML = `
      <div class="pivolve-popup-header">
        <strong>${keyword}</strong>
        <button class="pivolve-popup-close">×</button>
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
      <div class="pivolve-brand">
        Powered by <span>PiVolve</span>
      </div>
    `;

    document.body.appendChild(popupElement);
    positionPopup(span);

    popupElement.querySelector(".pivolve-popup-close").addEventListener("click", () => {
      animateAndRemovePopup();
    });

    popupElement.addEventListener("mouseenter", () => {
      isPopupVisible = true;
    });
    popupElement.addEventListener("mouseleave", schedulePopupHide);

    isPopupVisible = true;
  }

  function positionPopup(target) {
    if (!popupElement) return;

    const rect = target.getBoundingClientRect();
    const popupWidth = 320;
    let top = rect.top + window.scrollY - (popupElement.offsetHeight || 180) - 10;
    let left = rect.left + window.scrollX;

    if (top < window.scrollY + 10) {
      top = rect.bottom + window.scrollY + 10;
    }

    if (left + popupWidth > window.innerWidth) {
      left = window.innerWidth - popupWidth - 20;
    }
    if (left < 10) left = 10;

    popupElement.style.top = `${top}px`;
    popupElement.style.left = `${left}px`;
  }

  function schedulePopupHide() {
    isPopupVisible = false;
    setTimeout(() => {
      if (!isPopupVisible && popupElement) {
        animateAndRemovePopup();
      }
    }, 300);
  }

  function animateAndRemovePopup() {
    if (popupElement) {
      popupElement.classList.add("pivolve-popup-removing");
      popupElement.addEventListener("animationend", () => {
        removePopup();
      }, { once: true });
    }
  }

  function removePopup() {
    if (popupElement) {
      popupElement.remove();
      popupElement = null;
      isPopupVisible = false;
    }
  }

  // ——— Start ———
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();