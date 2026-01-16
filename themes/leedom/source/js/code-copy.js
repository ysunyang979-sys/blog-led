// 代码块复制功能
(function () {
  "use strict";

  function initCodeCopy() {
    var codeBlocks = document.querySelectorAll(".highlight");

    codeBlocks.forEach(function (block) {
      // 避免重复添加按钮
      if (block.querySelector(".copy-btn")) return;

      // 创建复制按钮
      var copyBtn = document.createElement("button");
      copyBtn.className = "copy-btn";
      copyBtn.textContent = "复制";
      copyBtn.type = "button";

      // 获取代码内容
      copyBtn.addEventListener("click", function () {
        var code = block.querySelector(".code");
        if (!code) {
          code = block.querySelector("pre");
        }

        if (code) {
          var text = code.textContent || code.innerText;

          // 使用现代 Clipboard API
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
              .writeText(text)
              .then(function () {
                showCopied(copyBtn);
              })
              .catch(function () {
                fallbackCopy(text, copyBtn);
              });
          } else {
            fallbackCopy(text, copyBtn);
          }
        }
      });

      block.appendChild(copyBtn);

      // 添加语言标签
      var figcaption = block.querySelector("figcaption");
      if (figcaption) {
        var langSpan = figcaption.querySelector("span");
        if (langSpan && langSpan.textContent) {
          var langLabel = document.createElement("span");
          langLabel.className = "lang-label";
          langLabel.textContent = langSpan.textContent;
          block.appendChild(langLabel);
        }
      }
    });
  }

  function showCopied(btn) {
    var originalText = btn.textContent;
    btn.textContent = "已复制!";
    btn.classList.add("copied");

    setTimeout(function () {
      btn.textContent = originalText;
      btn.classList.remove("copied");
    }, 2000);
  }

  function fallbackCopy(text, btn) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      showCopied(btn);
    } catch (err) {
      console.error("复制失败:", err);
    }

    document.body.removeChild(textArea);
  }

  // DOM 加载完成后初始化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCodeCopy);
  } else {
    initCodeCopy();
  }
})();
