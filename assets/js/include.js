/**
 * Khazana Stores - HTML Module Inclusion Engine
 * Loads HTML modules specified by data-include attributes (e.g. data-include="modules/header.html")
 */

(function () {
  const ModuleLoader = {
    loadModule: function (el) {
      const file = el.getAttribute('data-include');
      if (!file) return Promise.resolve();

      return fetch(file)
        .then(response => {
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          return response.text();
        })
        .then(html => {
          this.insertHTML(el, html);
        })
        .catch(err => {
          // Fallback to XMLHttpRequest for local file execution
          return new Promise((resolve) => {
            try {
              const xhr = new XMLHttpRequest();
              xhr.open('GET', file, true);
              xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                  if ((xhr.status === 200 || xhr.status === 0) && xhr.responseText) {
                    this.insertHTML(el, xhr.responseText);
                  } else {
                    console.warn(`[ModuleLoader] Could not load ${file}`);
                  }
                  resolve();
                }
              };
              xhr.send();
            } catch (e) {
              console.warn(`[ModuleLoader] Failed XHR for ${file}:`, e);
              resolve();
            }
          });
        });
    },

    insertHTML: function (el, html) {
      const parent = el.parentNode;
      if (!parent) return;
      
      const temp = document.createElement('div');
      temp.innerHTML = html.trim();

      // Extract <script> tags so they can be re-executed after DOM insertion
      // (innerHTML does NOT run scripts; we must recreate them manually)
      const scripts = Array.from(temp.querySelectorAll('script'));
      scripts.forEach(s => s.parentNode.removeChild(s));
      
      const fragment = document.createDocumentFragment();
      while (temp.firstChild) {
        fragment.appendChild(temp.firstChild);
      }
      
      parent.replaceChild(fragment, el);

      // Re-execute extracted scripts
      scripts.forEach(function (oldScript) {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(function (attr) {
          newScript.setAttribute(attr.name, attr.value);
        });
        newScript.textContent = oldScript.textContent;
        document.body.appendChild(newScript);
      });
    },

    init: function () {
      const elements = document.querySelectorAll('[data-include]');
      if (!elements.length) {
        document.dispatchEvent(new CustomEvent('tftModulesLoaded'));
        return Promise.resolve();
      }

      const promises = Array.from(elements).map(el => this.loadModule(el));
      return Promise.all(promises).then(() => {
        document.dispatchEvent(new CustomEvent('tftModulesLoaded'));
      });
    }
  };

  window.TFT_ModuleLoader = ModuleLoader;

  // Auto-run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ModuleLoader.init());
  } else {
    ModuleLoader.init();
  }
})();
