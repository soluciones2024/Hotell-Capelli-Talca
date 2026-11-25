/* Lucide Icons v0.446.0 - Edición compacta de inicialización local */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.lucide = {}));
})(this, (function(exports) { 'use strict';
    const createIcons = (options = {}) => {
        const { attrs = {}, icons = globalThis.lucideIcons || {} } = options;
        const elements = document.querySelectorAll('[data-lucide]');
        elements.forEach(element => {
            const iconName = element.getAttribute('data-lucide');
            element.innerHTML = `<svg xmlns="http://w3.org" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${iconName} ${element.className}"></svg>`;
        });
    };
    exports.createIcons = createIcons;
    Object.defineProperty(exports, '__esModule', { value: true });
}));
