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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxpQkFBaUIsb0RBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNsQjBDOztBQUUxQztBQUNBLEVBQUUsNERBQVM7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51Ly4vc3JjL21vYmlsZVBvcHVwTWVudS5qcyIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmF2M24tbW9iaWxlLW1lbnUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXJhdjNuLW1vYmlsZS1tZW51Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvYnViYmxlX3BsdXMuc3ZnXCI7XG5cbmNvbnN0IHRvZ2dsZUludmlzaWJpbGl0eSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgaWYgKG9iamVjdC5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgIG9iamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Quc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2JpbGVQb3B1cE1lbnUoXG4gIHVsSWRXaXRoSGFzaCxcbiAgcG9wdXBCdXR0b25IZXhDb2xvcldpdGhIYXNoLFxuICBwbHVzSWNvbkhleENvbG9yV2l0aEhhc2hcbikge1xuICBjb25zdCBwbHVzSWNvbiA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIGNvbnN0IG1lbnVVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodWxJZFdpdGhIYXNoKTtcblxuICBzdHlsZS5pbm5lckhUTUwgPSBgOnJvb3Qge1xuICAgIC0tbW9iaWxlLW1lbnUtaWNvbi1zaXplOiAyLjVyZW07XG4gICAgLS1tb2JpbGUtbWVudS1yYWRpdXM6IGNhbGModmFyKC0tbW9iaWxlLW1lbnUtaWNvbi1zaXplKSAvIDIpO1xuICAgIC0tbW9iaWxlLW1lbnUtc3BhY2luZzogMTB2bWluO1xuICAgIC0tbW9iaWxlLW1lbnUtdGV4dC1zaXplOiAxcmVtO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSB7XG4gICAgYm90dG9tOiB2YXIoLS1tb2JpbGUtbWVudS1zcGFjaW5nKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDA7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBsZWZ0OiB2YXIoLS1tb2JpbGUtbWVudS1zcGFjaW5nKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUgYSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW1vYmlsZS1tZW51LXJhZGl1cyk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICAjbW9iaWxlTWVudSBhOmhvdmVyIHtcbiAgICBnYXA6IGNhbGModmFyKC0tbW9iaWxlLW1lbnUtdGV4dC1zaXplKSAvIDIpO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLW1vYmlsZS1tZW51LXRleHQtc2l6ZSk7XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IGltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwb3B1cEJ1dHRvbkhleENvbG9yV2l0aEhhc2h9O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IHZhcigtLW1vYmlsZS1tZW51LWljb24tc2l6ZSk7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gICNtb2JpbGVNZW51IGxpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnUgbGk6aG92ZXIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLW1lbnUtdGV4dC1zaXplKTtcbiAgfVxuICBcbiAgI21vYmlsZU1lbnVUb2dnbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGx1c0ljb25IZXhDb2xvcldpdGhIYXNofTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm90dG9tOiB2YXIoLS1tb2JpbGUtbWVudS1zcGFjaW5nKTtcbiAgICBoZWlnaHQ6IHZhcigtLW1vYmlsZS1tZW51LWljb24tc2l6ZSk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiB2YXIoLS1tb2JpbGUtbWVudS1zcGFjaW5nKTtcbiAgICB3aWR0aDogYXV0bztcbiAgfWA7XG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIG1lbnVVbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHBsdXNJY29uLnNyYyA9IFBsdXNJY29uO1xuICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vYmlsZU1lbnVUb2dnbGVcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICBwbHVzSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUludmlzaWJpbGl0eShwbHVzSWNvbik7XG4gICAgdG9nZ2xlSW52aXNpYmlsaXR5KG1lbnVVbCk7XG4gIH0pO1xuICBtZW51VWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVJbnZpc2liaWxpdHkocGx1c0ljb24pO1xuICAgIHRvZ2dsZUludmlzaWJpbGl0eShtZW51VWwpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcG9wdXBNZW51IGZyb20gXCIuL21vYmlsZVBvcHVwTWVudVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHBvcHVwTWVudShcIiNtb2JpbGVNZW51XCIsIFwiIzFmZTZiN1wiLFwiI2ZmNjYwMGZmXCIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=