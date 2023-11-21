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

  const buttonBackListener = function listenForButtonBackClick() {
    console.log("buttonBackListener called");
    const buttonBack = document.querySelector("#imgPrevious");
    buttonBack.addEventListener("click", () => {
      updateNumbers(-1);
      updateIds();
    });
  };

  const buttonNextListener = function listenForButtonNextClick() {
    console.log("buttonNextListener called");
    const buttonNext = document.querySelector("#imgNext");
    buttonNext.addEventListener("click", () => {
      updateNumbers(1);
      updateIds();
    });
  };

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
        buttonBackListener();
      } else if (i === imgMain) {
        currentDiv.setAttribute("id", "imgMain");
      } else if (i === imgNext) {
        currentDiv.setAttribute("id", "imgNext");
        buttonNextListener();
      } else {
        currentDiv.setAttribute("id", "");
      }
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
};

document.addEventListener("DOMContentLoaded", () => {
  makeImageSlider();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBzdHlsZVNsaWRlciA9IGZ1bmN0aW9uIGluamVjdENzc1dpdGhKUygpIHtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDF2dztcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyLjV2dyA0NXZ3IDIyLjV2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1dnc7XG4gICAgbWFyZ2luOiA1dmggMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciBpbWcge1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAgZmxleDogMSAxIDIydnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIGRpdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdNYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgI2ltZ05leHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciAjaW1nUHJldmlvdXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIH1cbiAgI2ltYWdlU2xpZGVyICNpbWdOZXh0IGltZyxcbiAgI2ltYWdlU2xpZGVyICNpbWdQcmV2aW91cyBpbWcge1xuICAgIG9wYWNpdHk6IDQwJTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdOZXh0OmhvdmVyIGltZyxcbiAgI2ltYWdlU2xpZGVyICNpbWdQcmV2aW91czpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDcwJTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIHNwYW4ge1xuICAgIGxlZnQ6IDQwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gIH1cbiAgXG4gICNpbWdOZXh0IHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKC4uL3NyYy9pbWFnZXMvYXJyb3dfZm9yd2FyZC5zdmcpO1xuICB9XG4gIFxuICAjaW1nUHJldmlvdXMgc3Bhbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoLi4vc3JjL2ltYWdlcy9hcnJvd19iYWNrLnN2Zyk7XG4gIH1cbiAgXG4gICNpbWdOZXh0IHNwYW46OmJlZm9yZSxcbiAgI2ltZ1ByZXZpb3VzIHNwYW46OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IG1heCg1dncsIDIwcHgpO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbiAgXG4gICNpbWdOZXh0OmhvdmVyIHNwYW46OmJlZm9yZSxcbiAgI2ltZ1ByZXZpb3VzOmhvdmVyIHNwYW46OmJlZm9yZSB7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgfWA7XG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ha2VJbWFnZVNsaWRlciA9IGZ1bmN0aW9uIG1ha2VJbWFnZVNsaWRlckZyb21EaXYoKSB7XG4gIGNvbnN0IGltYWdlQXJyYXkgPSBbXTtcbiAgY29uc3QgaW1hZ2VTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlU2xpZGVyXCIpO1xuICBjb25zdCBpbWFnZUNvdW50ID0gaW1hZ2VTbGlkZXIuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IGltYWdlU2xpZGVyQ2hpbGRyZW4gPSBbXTtcblxuICBsZXQgaW1nUHJldmlvdXMgPSAtMTtcbiAgbGV0IGltZ01haW4gPSAwO1xuICBsZXQgaW1nTmV4dCA9IDE7XG5cbiAgY29uc3QgYnV0dG9uQmFja0xpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuRm9yQnV0dG9uQmFja0NsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiYnV0dG9uQmFja0xpc3RlbmVyIGNhbGxlZFwiKTtcbiAgICBjb25zdCBidXR0b25CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdQcmV2aW91c1wiKTtcbiAgICBidXR0b25CYWNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVOdW1iZXJzKC0xKTtcbiAgICAgIHVwZGF0ZUlkcygpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGJ1dHRvbk5leHRMaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbkZvckJ1dHRvbk5leHRDbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcImJ1dHRvbk5leHRMaXN0ZW5lciBjYWxsZWRcIik7XG4gICAgY29uc3QgYnV0dG9uTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1nTmV4dFwiKTtcbiAgICBidXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB1cGRhdGVOdW1iZXJzKDEpO1xuICAgICAgdXBkYXRlSWRzKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlTnVtYmVycyA9IGZ1bmN0aW9uIHVwZGF0ZVByZXZpb3VzTmV4dEFuZE1haW4obnVtYmVyKSB7XG4gICAgaW1nTWFpbiArPSBudW1iZXI7XG4gICAgaW1nUHJldmlvdXMgPSBpbWdNYWluIC0gMTtcbiAgICBpbWdOZXh0ID0gaW1nTWFpbiArIDE7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRJbWFnZUFycmF5ID0gZnVuY3Rpb24gcHVwdWxhdGVJbWFnZUFycmF5RnJvbUltYWdlc0luSHRtbCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudEltZyA9IGltYWdlU2xpZGVyLmNoaWxkcmVuW2ldO1xuICAgICAgaW1hZ2VBcnJheS5wdXNoKGN1cnJlbnRJbWcpO1xuICAgIH1cbiAgICBpbWFnZVNsaWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUlkcyA9IGZ1bmN0aW9uIHVwZGF0ZURpdklkcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudERpdiA9IGltYWdlU2xpZGVyLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGkgPT09IGltZ1ByZXZpb3VzKSB7XG4gICAgICAgIGN1cnJlbnREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdQcmV2aW91c1wiKTtcbiAgICAgICAgYnV0dG9uQmFja0xpc3RlbmVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGltZ01haW4pIHtcbiAgICAgICAgY3VycmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ01haW5cIik7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGltZ05leHQpIHtcbiAgICAgICAgY3VycmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ05leHRcIik7XG4gICAgICAgIGJ1dHRvbk5leHRMaXN0ZW5lcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlSHRtbCA9IGZ1bmN0aW9uIHB1dEltZ3NJbnRvRGl2c0FuZEFkZFNwYW5zKCkge1xuICAgIHN0eWxlU2xpZGVyKCk7XG4gICAgYnVpbGRJbWFnZUFycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRJbWcgPSBpbWFnZUFycmF5W2ldO1xuICAgICAgY29uc3QgY3VycmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjdXJyZW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY3VycmVudERpdi5hcHBlbmRDaGlsZChjdXJyZW50SW1nKTtcbiAgICAgIGN1cnJlbnREaXYuYXBwZW5kQ2hpbGQoY3VycmVudFNwYW4pO1xuICAgICAgaW1hZ2VTbGlkZXJDaGlsZHJlbi5wdXNoKGN1cnJlbnREaXYpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBpbWFnZVNsaWRlckNoaWxkcmVuW2ldO1xuICAgICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfTtcbiAgdXBkYXRlSHRtbCgpO1xuICB1cGRhdGVJZHMoKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgbWFrZUltYWdlU2xpZGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==