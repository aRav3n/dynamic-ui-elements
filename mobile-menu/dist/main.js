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
    toggleInvisibility(menuUl);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsb0RBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQjBDO0FBQ1I7O0FBRWxDO0FBQ0EsRUFBRSw0REFBUztBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvLi9zcmMvbW9iaWxlUG9wdXBNZW51LmpzIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYXYzbi1tb2JpbGUtbWVudS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsdXNJY29uIGZyb20gXCIuL2ltYWdlcy9idWJibGVfcGx1cy5zdmdcIjtcblxuY29uc3QgdG9nZ2xlSW52aXNpYmlsaXR5ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICBpZiAob2JqZWN0LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgb2JqZWN0LnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vYmlsZVBvcHVwTWVudShcbiAgdWxJZFdpdGhIYXNoLFxuICBwb3B1cEJ1dHRvbkhleENvbG9yV2l0aEhhc2gsXG4gIHBsdXNJY29uSGV4Q29sb3JXaXRoSGFzaFxuKSB7XG4gIGNvbnN0IHBsdXNJY29uID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgY29uc3QgbWVudVVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1bElkV2l0aEhhc2gpO1xuXG4gIHN0eWxlLmlubmVySFRNTCA9IGA6cm9vdCB7XG4gICAgLS1tb2JpbGUtbWVudS1pY29uLXNpemU6IDIuNXJlbTtcbiAgICAtLW1vYmlsZS1tZW51LXJhZGl1czogY2FsYyh2YXIoLS1tb2JpbGUtbWVudS1pY29uLXNpemUpIC8gMik7XG4gICAgLS1tb2JpbGUtbWVudS1zcGFjaW5nOiAxMHZtaW47XG4gICAgLS1tb2JpbGUtbWVudS10ZXh0LXNpemU6IDFyZW07XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IHtcbiAgICBib3R0b206IHZhcigtLW1vYmlsZS1tZW51LXNwYWNpbmcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGxlZnQ6IHZhcigtLW1vYmlsZS1tZW51LXNwYWNpbmcpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSBhIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tbW9iaWxlLW1lbnUtcmFkaXVzKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IGE6aG92ZXIge1xuICAgIGdhcDogY2FsYyh2YXIoLS1tb2JpbGUtbWVudS10ZXh0LXNpemUpIC8gMik7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtdGV4dC1zaXplKTtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUgaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BvcHVwQnV0dG9uSGV4Q29sb3JXaXRoSGFzaH07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtaWNvbi1zaXplKTtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSBsaTpob3ZlciB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtbWVudS10ZXh0LXNpemUpO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudVRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwbHVzSWNvbkhleENvbG9yV2l0aEhhc2h9O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3R0b206IHZhcigtLW1vYmlsZS1tZW51LXNwYWNpbmcpO1xuICAgIGhlaWdodDogdmFyKC0tbW9iaWxlLW1lbnUtaWNvbi1zaXplKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IHZhcigtLW1vYmlsZS1tZW51LXNwYWNpbmcpO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9YDtcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgbWVudVVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcGx1c0ljb24uc3JjID0gUGx1c0ljb247XG4gIHBsdXNJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9iaWxlTWVudVRvZ2dsZVwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChwbHVzSWNvbik7XG4gIHBsdXNJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlSW52aXNpYmlsaXR5KHBsdXNJY29uKTtcbiAgICB0b2dnbGVJbnZpc2liaWxpdHkobWVudVVsKTtcbiAgfSk7XG4gIG1lbnVVbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUludmlzaWJpbGl0eShwbHVzSWNvbik7XG4gICAgdG9nZ2xlSW52aXNpYmlsaXR5KG1lbnVVbCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBwb3B1cE1lbnUgZnJvbSBcIi4vbW9iaWxlUG9wdXBNZW51XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9tb2JpbGVQb3B1cE1lbnVcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBwb3B1cE1lbnUoXCIjbW9iaWxlTWVudVwiLCBcIiMxZmU2YjdcIixcIiNmZjY2MDBmZlwiKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9