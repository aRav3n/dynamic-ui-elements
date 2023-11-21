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
  
  body {
    display: grid;
    justify-content: center;
  }
  
  #imageSlider {
    align-items: center;
    display: grid;
    gap: 1vw;
    grid-template-columns: 22.5vw 45vw 22.5vw;
    grid-template-rows: 45vw;
    margin: 5vh 0;
    padding: 0;
  }
  
  #imageSlider div {
    justify-content: center;
    position: relative;
  }
  
  #imageSlider img {
    aspect-ratio: 1 / 1;
    flex: 1 1 22vw;
    height: auto;
    max-width: 100%;
    object-fit: cover;
    position: relative;
    width: auto;
    z-index: 1;
  }
  
  #imageSlider div {
    display: none;
  }
  
  #imageSlider #imgMain {
    display: flex;
    grid-column-start: 2;
  }
  
  #imageSlider #imgNext {
    display: flex;
    grid-column-start: 3;
  }
  
  #imageSlider #imgPrevious {
    display: flex;
    grid-column-start: 1;
  }
  #imageSlider #imgNext img,
  #imageSlider #imgPrevious img {
    opacity: 40%;
  }
  
  #imageSlider #imgNext:hover img,
  #imageSlider #imgPrevious:hover img {
    opacity: 70%;
  }
  
  #imageSlider span {
    left: 40%;
    position: absolute;
    top: 30%;
  }
  
  #imgNext span::before {
    content: url(../src/images/arrow_forward.svg);
  }
  
  #imgPrevious span::before {
    content: url(../src/images/arrow_back.svg);
  }
  
  #imgNext span::before,
  #imgPrevious span::before {
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

  let imgPrevious = -1;
  let imgMain = 0;
  let imgNext = 1;

  const updateNumbers = function updatePreviousNextAndMain(number) {
    imgMain += number;
    imgPrevious = imgMain - 1;
    imgNext = imgMain + 1;
  };

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
    console.log({ imgPrevious, imgMain, imgNext });
    const buttonBack = document.querySelector("#imgPrevious");
    const buttonNext = document.querySelector("#imgNext");

    if (buttonBack) {
      buttonBack.addEventListener("click", () => {
        updateNumbers(-1);
        updateIds();
        changeIds();
      });
    }

    if (buttonNext) {
      buttonNext.addEventListener("click", () => {
        updateNumbers(1);
        updateIds();
        changeIds();
      });
    }
  };

  const updateHtml = function putImgsIntoDivsAndAddSpans() {
    styleSlider();
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
  makeImageSlider();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLCtCQUErQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHN0eWxlU2xpZGVyID0gZnVuY3Rpb24gaW5qZWN0Q3NzV2l0aEpTKCkge1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBzdHlsZS5pbm5lckhUTUwgPSBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIGJvZHkge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMXZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjIuNXZ3IDQ1dncgMjIuNXZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDV2dztcbiAgICBtYXJnaW46IDV2aCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIGltZyB7XG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgICBmbGV4OiAxIDEgMjJ2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgZGl2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgI2ltZ01haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciAjaW1nTmV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMztcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdQcmV2aW91cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgfVxuICAjaW1hZ2VTbGlkZXIgI2ltZ05leHQgaW1nLFxuICAjaW1hZ2VTbGlkZXIgI2ltZ1ByZXZpb3VzIGltZyB7XG4gICAgb3BhY2l0eTogNDAlO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgI2ltZ05leHQ6aG92ZXIgaW1nLFxuICAjaW1hZ2VTbGlkZXIgI2ltZ1ByZXZpb3VzOmhvdmVyIGltZyB7XG4gICAgb3BhY2l0eTogNzAlO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgc3BhbiB7XG4gICAgbGVmdDogNDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMwJTtcbiAgfVxuICBcbiAgI2ltZ05leHQgc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoLi4vc3JjL2ltYWdlcy9hcnJvd19mb3J3YXJkLnN2Zyk7XG4gIH1cbiAgXG4gICNpbWdQcmV2aW91cyBzcGFuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybCguLi9zcmMvaW1hZ2VzL2Fycm93X2JhY2suc3ZnKTtcbiAgfVxuICBcbiAgI2ltZ05leHQgc3Bhbjo6YmVmb3JlLFxuICAjaW1nUHJldmlvdXMgc3Bhbjo6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogNDUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogbWF4KDV2dywgMjBweCk7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgI2ltZ05leHQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAjaW1nUHJldmlvdXM6aG92ZXIgc3Bhbjo6YmVmb3JlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICB9YDtcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFrZUltYWdlU2xpZGVyID0gZnVuY3Rpb24gbWFrZUltYWdlU2xpZGVyRnJvbURpdigpIHtcbiAgY29uc3QgaW1hZ2VBcnJheSA9IFtdO1xuICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2VTbGlkZXJcIik7XG4gIGNvbnN0IGltYWdlQ291bnQgPSBpbWFnZVNsaWRlci5jaGlsZEVsZW1lbnRDb3VudDtcbiAgY29uc3QgaW1hZ2VTbGlkZXJDaGlsZHJlbiA9IFtdO1xuXG4gIGxldCBpbWdQcmV2aW91cyA9IC0xO1xuICBsZXQgaW1nTWFpbiA9IDA7XG4gIGxldCBpbWdOZXh0ID0gMTtcblxuICBjb25zdCB1cGRhdGVOdW1iZXJzID0gZnVuY3Rpb24gdXBkYXRlUHJldmlvdXNOZXh0QW5kTWFpbihudW1iZXIpIHtcbiAgICBpbWdNYWluICs9IG51bWJlcjtcbiAgICBpbWdQcmV2aW91cyA9IGltZ01haW4gLSAxO1xuICAgIGltZ05leHQgPSBpbWdNYWluICsgMTtcbiAgfTtcblxuICBjb25zdCBidWlsZEltYWdlQXJyYXkgPSBmdW5jdGlvbiBwdXB1bGF0ZUltYWdlQXJyYXlGcm9tSW1hZ2VzSW5IdG1sKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW1nID0gaW1hZ2VTbGlkZXIuY2hpbGRyZW5baV07XG4gICAgICBpbWFnZUFycmF5LnB1c2goY3VycmVudEltZyk7XG4gICAgfVxuICAgIGltYWdlU2xpZGVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSWRzID0gZnVuY3Rpb24gdXBkYXRlRGl2SWRzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50RGl2ID0gaW1hZ2VTbGlkZXIuY2hpbGRyZW5baV07XG4gICAgICBpZiAoaSA9PT0gaW1nUHJldmlvdXMpIHtcbiAgICAgICAgY3VycmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ1ByZXZpb3VzXCIpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSBpbWdNYWluKSB7XG4gICAgICAgIGN1cnJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdNYWluXCIpO1xuICAgICAgfSBlbHNlIGlmIChpID09PSBpbWdOZXh0KSB7XG4gICAgICAgIGN1cnJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdOZXh0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlSWRzID0gZnVuY3Rpb24gY2hhbmdlRGl2SWRzT25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyh7IGltZ1ByZXZpb3VzLCBpbWdNYWluLCBpbWdOZXh0IH0pO1xuICAgIGNvbnN0IGJ1dHRvbkJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ1ByZXZpb3VzXCIpO1xuICAgIGNvbnN0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltZ05leHRcIik7XG5cbiAgICBpZiAoYnV0dG9uQmFjaykge1xuICAgICAgYnV0dG9uQmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB1cGRhdGVOdW1iZXJzKC0xKTtcbiAgICAgICAgdXBkYXRlSWRzKCk7XG4gICAgICAgIGNoYW5nZUlkcygpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGJ1dHRvbk5leHQpIHtcbiAgICAgIGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdXBkYXRlTnVtYmVycygxKTtcbiAgICAgICAgdXBkYXRlSWRzKCk7XG4gICAgICAgIGNoYW5nZUlkcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUh0bWwgPSBmdW5jdGlvbiBwdXRJbWdzSW50b0RpdnNBbmRBZGRTcGFucygpIHtcbiAgICBzdHlsZVNsaWRlcigpO1xuICAgIGJ1aWxkSW1hZ2VBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50SW1nID0gaW1hZ2VBcnJheVtpXTtcbiAgICAgIGNvbnN0IGN1cnJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY3VycmVudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoY3VycmVudEltZyk7XG4gICAgICBjdXJyZW50RGl2LmFwcGVuZENoaWxkKGN1cnJlbnRTcGFuKTtcbiAgICAgIGltYWdlU2xpZGVyQ2hpbGRyZW4ucHVzaChjdXJyZW50RGl2KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaW1hZ2VTbGlkZXJDaGlsZHJlbltpXTtcbiAgICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICB9XG4gIH07XG4gIHVwZGF0ZUh0bWwoKTtcbiAgdXBkYXRlSWRzKCk7XG4gIGNoYW5nZUlkcygpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBtYWtlSW1hZ2VTbGlkZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9