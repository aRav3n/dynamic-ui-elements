/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mobilePopupMenu.js":
/*!********************************!*\
  !*** ./src/mobilePopupMenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mobilePopupMenu)
/* harmony export */ });
/* harmony import */ var _images_bubble_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/bubble_plus.svg */ "./src/images/bubble_plus.svg");


const toggleInvisibility = function (object) {
  if (object.style.display === "none") {
    object.style.display = "";
  } else {
    object.style.display = "none";
  }
};

function mobilePopupMenu(
  ulIdWithHash,
  popupButtonHexColorWithHash,
  plusIconHexColorWithHash
) {
  const plusIcon = new Image();
  const body = document.querySelector("body");
  const head = document.querySelector("head");
  const style = document.createElement("style");
  const menuUl = document.querySelector(ulIdWithHash);

  style.innerHTML = `:root {
    --mobile-menu-icon-size: 2.5rem;
    --mobile-menu-radius: calc(var(--mobile-menu-icon-size) / 2);
    --mobile-menu-spacing: 10vmin;
    --mobile-menu-text-size: 1rem;
  }
  
  #mobileMenu {
    bottom: var(--mobile-menu-spacing);
    display: flex;
    flex-direction: column;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 0;
    height: 40vh;
    justify-content: space-between;
    left: var(--mobile-menu-spacing);
    padding: 0;
    position: fixed;
  }
  
  #mobileMenu a {
    align-items: center;
    background-color: #bfbfbf;
    border-radius: var(--mobile-menu-radius);
    color: black;
    display: flex;
    font-weight: bold;
    text-decoration: none;
  }
  
  #mobileMenu a:hover {
    gap: calc(var(--mobile-menu-text-size) / 2);
    padding-right: var(--mobile-menu-text-size);
  }
  
  #mobileMenu img {
    background-color: ${popupButtonHexColorWithHash};
    border-radius: 50%;
    height: var(--mobile-menu-icon-size);
    width: auto;
  }
  
  #mobileMenu li {
    display: flex;
    width: fit-content;
  }
  
  #mobileMenu li:hover {
    font-size: var(--mobile-menu-text-size);
  }
  
  #mobileMenuToggle {
    background-color: ${plusIconHexColorWithHash};
    border-radius: 50%;
    bottom: var(--mobile-menu-spacing);
    height: var(--mobile-menu-icon-size);
    position: fixed;
    right: var(--mobile-menu-spacing);
    width: auto;
  }`;
  head.appendChild(style);

  menuUl.style.display = "none";
  plusIcon.src = _images_bubble_plus_svg__WEBPACK_IMPORTED_MODULE_0__;
  plusIcon.setAttribute("id", "mobileMenuToggle");
  body.appendChild(plusIcon);
  plusIcon.addEventListener("click", () => {
    toggleInvisibility(plusIcon);
    toggleInvisibility(menuUl);
  });
  menuUl.addEventListener("click", () => {
    toggleInvisibility(plusIcon);
  });
}


/***/ }),

/***/ "./src/images/bubble_plus.svg":
/*!************************************!*\
  !*** ./src/images/bubble_plus.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "819d13be130c5175cf0d.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mobilePopupMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobilePopupMenu */ "./src/mobilePopupMenu.js");


document.addEventListener("DOMContentLoaded", () => {
  (0,_mobilePopupMenu__WEBPACK_IMPORTED_MODULE_0__["default"])("#mobileMenu", "#1fe6b7","#ff6600ff");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsb0RBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7O0FDbEIwQzs7QUFFMUM7QUFDQSxFQUFFLDREQUFTO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS8uL3NyYy9tb2JpbGVQb3B1cE1lbnUuanMiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4vaW1hZ2VzL2J1YmJsZV9wbHVzLnN2Z1wiO1xuXG5jb25zdCB0b2dnbGVJbnZpc2liaWxpdHkgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gIGlmIChvYmplY3Quc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICBvYmplY3Quc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9iaWxlUG9wdXBNZW51KFxuICB1bElkV2l0aEhhc2gsXG4gIHBvcHVwQnV0dG9uSGV4Q29sb3JXaXRoSGFzaCxcbiAgcGx1c0ljb25IZXhDb2xvcldpdGhIYXNoXG4pIHtcbiAgY29uc3QgcGx1c0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBjb25zdCBtZW51VWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVsSWRXaXRoSGFzaCk7XG5cbiAgc3R5bGUuaW5uZXJIVE1MID0gYDpyb290IHtcbiAgICAtLW1vYmlsZS1tZW51LWljb24tc2l6ZTogMi41cmVtO1xuICAgIC0tbW9iaWxlLW1lbnUtcmFkaXVzOiBjYWxjKHZhcigtLW1vYmlsZS1tZW51LWljb24tc2l6ZSkgLyAyKTtcbiAgICAtLW1vYmlsZS1tZW51LXNwYWNpbmc6IDEwdm1pbjtcbiAgICAtLW1vYmlsZS1tZW51LXRleHQtc2l6ZTogMXJlbTtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUge1xuICAgIGJvdHRvbTogdmFyKC0tbW9iaWxlLW1lbnUtc3BhY2luZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbGVmdDogdmFyKC0tbW9iaWxlLW1lbnUtc3BhY2luZyk7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IGEge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZjtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1tb2JpbGUtbWVudS1yYWRpdXMpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUgYTpob3ZlciB7XG4gICAgZ2FwOiBjYWxjKHZhcigtLW1vYmlsZS1tZW51LXRleHQtc2l6ZSkgLyAyKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1tb2JpbGUtbWVudS10ZXh0LXNpemUpO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSBpbWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cG9wdXBCdXR0b25IZXhDb2xvcldpdGhIYXNofTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1tb2JpbGUtbWVudS1pY29uLXNpemUpO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IGxpOmhvdmVyIHtcbiAgICBmb250LXNpemU6IHZhcigtLW1vYmlsZS1tZW51LXRleHQtc2l6ZSk7XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51VG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BsdXNJY29uSGV4Q29sb3JXaXRoSGFzaH07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvdHRvbTogdmFyKC0tbW9iaWxlLW1lbnUtc3BhY2luZyk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tb2JpbGUtbWVudS1pY29uLXNpemUpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtc3BhY2luZyk7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1gO1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBtZW51VWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwbHVzSWNvbi5zcmMgPSBQbHVzSWNvbjtcbiAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2JpbGVNZW51VG9nZ2xlXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgcGx1c0ljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVJbnZpc2liaWxpdHkocGx1c0ljb24pO1xuICAgIHRvZ2dsZUludmlzaWJpbGl0eShtZW51VWwpO1xuICB9KTtcbiAgbWVudVVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlSW52aXNpYmlsaXR5KHBsdXNJY29uKTtcbiAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHBvcHVwTWVudSBmcm9tIFwiLi9tb2JpbGVQb3B1cE1lbnVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBwb3B1cE1lbnUoXCIjbW9iaWxlTWVudVwiLCBcIiMxZmU2YjdcIixcIiNmZjY2MDBmZlwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9