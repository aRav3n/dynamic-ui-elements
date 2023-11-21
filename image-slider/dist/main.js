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
/* harmony export */   makeImageSlider: () => (/* binding */ makeImageSlider)
/* harmony export */ });
const styleSlider = function injectCssWithJS() {
  const head = document.querySelector("head");
  const style = document.createElement("style");
  style.innerHTML = `* {
    margin: 0;
    padding: 0;
  }
  
  #imageSlider {
    align-items: center;
    display: flex;
    gap: 1vw;
    height: auto;
    margin: 5vh auto;
    padding: 0;
    width: 90vw;
  }
  
  #imageSlider div {
    position: relative;
  }
  
  #imageSlider img {
    aspect-ratio: 1 / 1;
    display: none;
    flex: 1 1 80vw;
    height: auto;
    object-fit: cover;
    position: relative;
  }
  
  #imageSlider #imgMain img {
    display: block;
    height: auto;
    width: max(45vw, 200px);
  
  }
  
  #imageSlider #imgNext img,
  #imageSlider #imgPrevious img {
    display: block;
    height: auto;
    opacity: 40%;
    position: relative;
    width: max(20vw, 100px);
    z-index: 1;
  }
  
  #imageSlider #imgNext:hover img,
  #imageSlider #imgPrevious:hover img {
    opacity: 70%;
  }
  
  #imageSlider span {
    left: 40%;
    position: relative;
  }
  
  #imgNext span::before {
    content: url(../src/images/arrow_forward.svg);
  }
  
  #imgPrevious span::before {
    content: url(../src/images/arrow_back.svg);
  }
  
  #imgNext span::before,
  #imgPrevious span::before {
    bottom: 250%;
    height: auto;
    left: 45%;
    position: absolute;
    width: max(5vw, 20px);
    z-index: 2;
  }
  
  #imgNext:hover span::before,
  #imgPrevious:hover span::before {
    -webkit-filter: invert(100%);
    filter: invert(100%);
  }`;
  head.appendChild(style);
};

const makeImageSlider = function makeImageSliderFromDiv() {
  const imageArray = [];
  const imageSlider = document.querySelector("#imageSlider");
  const imageCount = imageSlider.childElementCount;
  const imageSliderChildren = [];

  let imgMain = 0;
  const imgPrevious = imgMain - 1;
  const imgNext = imgMain + 1;

  const buildImageArray = function pupulateImageArrayFromImagesInHtml() {
    for (let i = 0; i < imageCount; i++) {
      const currentImg = imageSlider.children[i];
      imageArray.push(currentImg);
    }
    imageSlider.innerHTML = "";
  };

  const updateIds = function updateDivIds() {
    for (let i = 0; i < imageCount; i++) {
      const currentDiv = imageSlider.children[i];
      if (i === imgPrevious) {
        currentDiv.setAttribute("id", "imgPrevious");
      } else if (i === imgMain) {
        currentDiv.setAttribute("id", "imgMain");
      } else if (i === imgNext) {
        currentDiv.setAttribute("id", "imgNext");
      } else {
        currentDiv.setAttribute("id", "");
      }
    }
  };

  const changeIds = function changeDivIdsOnClick() {
    const buttonBack = document.querySelector("#imgPrevious");
    const buttonNext = document.querySelector("#imgNext");

    if (buttonBack) {
      buttonBack.addEventListener("click", () => {
        imgMain--;
        updateIds();
        changeIds();
      });
    }

    if (buttonNext) {
      buttonNext.addEventListener("click", () => {
        imgMain++;
        updateIds();
        changeIds();
      });
    }
  };

  const updateHtml = function putImgsIntoDivsAndAddSpans() {
    buildImageArray();
    for (let i = 0; i < imageCount; i++) {
      const currentImg = imageArray[i];
      const currentDiv = document.createElement("div");
      const currentSpan = document.createElement("span");
      currentDiv.appendChild(currentImg);
      currentDiv.appendChild(currentSpan);
      imageSliderChildren.push(currentDiv);
    }
    for (let i = 0; i < imageCount; i++) {
      const child = imageSliderChildren[i];
      imageSlider.appendChild(child);
    }
  };
  updateHtml();
  updateIds();
  changeIds();
};

document.addEventListener("DOMContentLoaded", () => {
  styleSlider();
  makeImageSlider();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBzdHlsZVNsaWRlciA9IGZ1bmN0aW9uIGluamVjdENzc1dpdGhKUygpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDF2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiA1dmggYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiA5MHZ3O1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciBpbWcge1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4OiAxIDEgODB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgI2ltZ01haW4gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IG1heCg0NXZ3LCAyMDBweCk7XG4gIFxuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgI2ltZ05leHQgaW1nLFxuICAjaW1hZ2VTbGlkZXIgI2ltZ1ByZXZpb3VzIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9wYWNpdHk6IDQwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IG1heCgyMHZ3LCAxMDBweCk7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdOZXh0OmhvdmVyIGltZyxcbiAgI2ltYWdlU2xpZGVyICNpbWdQcmV2aW91czpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIHNwYW4ge1xuICAgIGxlZnQ6IDQwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNpbWdOZXh0IHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKC4uL3NyYy9pbWFnZXMvYXJyb3dfZm9yd2FyZC5zdmcpO1xuICB9XG4gIFxuICAjaW1nUHJldmlvdXMgc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoLi4vc3JjL2ltYWdlcy9hcnJvd19iYWNrLnN2Zyk7XG4gIH1cbiAgXG4gICNpbWdOZXh0IHNwYW46OmJlZm9yZSxcbiAgI2ltZ1ByZXZpb3VzIHNwYW46OmJlZm9yZSB7XG4gICAgYm90dG9tOiAyNTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBsZWZ0OiA0NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBtYXgoNXZ3LCAyMHB4KTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG4gIFxuICAjaW1nTmV4dDpob3ZlciBzcGFuOjpiZWZvcmUsXG4gICNpbWdQcmV2aW91czpob3ZlciBzcGFuOjpiZWZvcmUge1xuICAgIC13ZWJraXQtZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSk7XG4gIH1gO1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYWtlSW1hZ2VTbGlkZXIgPSBmdW5jdGlvbiBtYWtlSW1hZ2VTbGlkZXJGcm9tRGl2KCkge1xuICBjb25zdCBpbWFnZUFycmF5ID0gW107XG4gIGNvbnN0IGltYWdlU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZVNsaWRlclwiKTtcbiAgY29uc3QgaW1hZ2VDb3VudCA9IGltYWdlU2xpZGVyLmNoaWxkRWxlbWVudENvdW50O1xuICBjb25zdCBpbWFnZVNsaWRlckNoaWxkcmVuID0gW107XG5cbiAgbGV0IGltZ01haW4gPSAwO1xuICBjb25zdCBpbWdQcmV2aW91cyA9IGltZ01haW4gLSAxO1xuICBjb25zdCBpbWdOZXh0ID0gaW1nTWFpbiArIDE7XG5cbiAgY29uc3QgYnVpbGRJbWFnZUFycmF5ID0gZnVuY3Rpb24gcHVwdWxhdGVJbWFnZUFycmF5RnJvbUltYWdlc0luSHRtbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEltZyA9IGltYWdlU2xpZGVyLmNoaWxkcmVuW2ldO1xuICAgICAgaW1hZ2VBcnJheS5wdXNoKGN1cnJlbnRJbWcpO1xuICAgIH1cbiAgICBpbWFnZVNsaWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUlkcyA9IGZ1bmN0aW9uIHVwZGF0ZURpdklkcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudERpdiA9IGltYWdlU2xpZGVyLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGkgPT09IGltZ1ByZXZpb3VzKSB7XG4gICAgICAgIGN1cnJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdQcmV2aW91c1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaW1nTWFpbikge1xuICAgICAgICBjdXJyZW50RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nTWFpblwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaW1nTmV4dCkge1xuICAgICAgICBjdXJyZW50RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nTmV4dFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGNoYW5nZUlkcyA9IGZ1bmN0aW9uIGNoYW5nZURpdklkc09uQ2xpY2soKSB7XG4gICAgY29uc3QgYnV0dG9uQmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nUHJldmlvdXNcIik7XG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nTmV4dFwiKTtcblxuICAgIGlmIChidXR0b25CYWNrKSB7XG4gICAgICBidXR0b25CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGltZ01haW4tLTtcbiAgICAgICAgdXBkYXRlSWRzKCk7XG4gICAgICAgIGNoYW5nZUlkcygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbk5leHQpIHtcbiAgICAgIGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW1nTWFpbisrO1xuICAgICAgICB1cGRhdGVJZHMoKTtcbiAgICAgICAgY2hhbmdlSWRzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSHRtbCA9IGZ1bmN0aW9uIHB1dEltZ3NJbnRvRGl2c0FuZEFkZFNwYW5zKCkge1xuICAgIGJ1aWxkSW1hZ2VBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW1nID0gaW1hZ2VBcnJheVtpXTtcbiAgICAgIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY3VycmVudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoY3VycmVudEltZyk7XG4gICAgICBjdXJyZW50RGl2LmFwcGVuZENoaWxkKGN1cnJlbnRTcGFuKTtcbiAgICAgIGltYWdlU2xpZGVyQ2hpbGRyZW4ucHVzaChjdXJyZW50RGl2KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaW1hZ2VTbGlkZXJDaGlsZHJlbltpXTtcbiAgICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH07XG4gIHVwZGF0ZUh0bWwoKTtcbiAgdXBkYXRlSWRzKCk7XG4gIGNoYW5nZUlkcygpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBzdHlsZVNsaWRlcigpO1xuICBtYWtlSW1hZ2VTbGlkZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9