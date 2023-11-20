/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   imageSlider: () => (/* binding */ imageSlider)
/* harmony export */ });
const imageSlider = function imageSliderFromDiv() {
  const imageSlider = document.querySelector("#imageSlider");
  const imageSliderChildren = [];
  const span = document.createElement("span");

  let imgMain = 0;
  const imgPrevious = imgMain - 1;
  const imgNext = imgMain + 1;

  const updateIds = function updateDivIds() {
    for (let i = 0; i < imageSliderChildren.length; i++) {
      const div = imageSliderChildren[i];
      if (i === imgPrevious) {
        div.setAttribute("id", "imgPrevious");
      } else if (i === imgMain) {
        div.setAttribute("id", "imgMain");
      } else if (i === imgNext) {
        div.setAttribute("id", "imgNext");
      } else {
        div.setAttribute("id", "");
      }
    }
  };

  for (let i = 0; i < imageSlider.childElementCount; i++) {
    const child = imageSlider.children[i];
    const div = document.createElement("div");
    div.appendChild(child);
    div.appendChild(span);
    imageSliderChildren.push(div);
  }

  imageSlider.innerHTML = "";

  updateIds();

  for (const child of imageSliderChildren) {
    imageSlider.appendChild(child);
  }

  const changeIds = function changeDivIdsOnClick() {
    const buttonBack = document.querySelector("#imgPrevious");
    const buttonNext = document.querySelector("#imgNext");

    buttonBack.addEventListener("click", () => {
      imgMain--;
      updateIds();
      changeIds();
    });

    buttonNext.addEventListener("click", () => {
      imgMain++;
      updateIds();
      changeIds();
    });
  };
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixtQ0FBbUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCBpbWFnZVNsaWRlciA9IGZ1bmN0aW9uIGltYWdlU2xpZGVyRnJvbURpdigpIHtcbiAgY29uc3QgaW1hZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlU2xpZGVyXCIpO1xuICBjb25zdCBpbWFnZVNsaWRlckNoaWxkcmVuID0gW107XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBsZXQgaW1nTWFpbiA9IDA7XG4gIGNvbnN0IGltZ1ByZXZpb3VzID0gaW1nTWFpbiAtIDE7XG4gIGNvbnN0IGltZ05leHQgPSBpbWdNYWluICsgMTtcblxuICBjb25zdCB1cGRhdGVJZHMgPSBmdW5jdGlvbiB1cGRhdGVEaXZJZHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZVNsaWRlckNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkaXYgPSBpbWFnZVNsaWRlckNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGkgPT09IGltZ1ByZXZpb3VzKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ1ByZXZpb3VzXCIpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSBpbWdNYWluKSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ01haW5cIik7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGltZ05leHQpIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nTmV4dFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZVNsaWRlci5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgY2hpbGQgPSBpbWFnZVNsaWRlci5jaGlsZHJlbltpXTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGltYWdlU2xpZGVyQ2hpbGRyZW4ucHVzaChkaXYpO1xuICB9XG5cbiAgaW1hZ2VTbGlkZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICB1cGRhdGVJZHMoKTtcblxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGltYWdlU2xpZGVyQ2hpbGRyZW4pIHtcbiAgICBpbWFnZVNsaWRlci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIH1cblxuICBjb25zdCBjaGFuZ2VJZHMgPSBmdW5jdGlvbiBjaGFuZ2VEaXZJZHNPbkNsaWNrKCkge1xuICAgIGNvbnN0IGJ1dHRvbkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ1ByZXZpb3VzXCIpO1xuICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ05leHRcIik7XG5cbiAgICBidXR0b25CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpbWdNYWluLS07XG4gICAgICB1cGRhdGVJZHMoKTtcbiAgICAgIGNoYW5nZUlkcygpO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW1nTWFpbisrO1xuICAgICAgdXBkYXRlSWRzKCk7XG4gICAgICBjaGFuZ2VJZHMoKTtcbiAgICB9KTtcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=