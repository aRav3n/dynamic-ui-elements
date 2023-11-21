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

const imageSlider = function imageSliderFromDiv() {
  const imageSlider = document.querySelector("#imageSlider");
  const imageSliderChildren = [];

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
    console.log(imageSlider.childElementCount);
    const child = imageSlider.children[i];
    const div = document.createElement("div");
    const span = document.createElement("span");
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

document.addEventListener("DOMContentLoaded", () => {
  styleSlider();
  imageSlider();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG1DQUFtQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYXJhdjNuLWltYWdlLXNsaWRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FyYXYzbi1pbWFnZS1zbGlkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hcmF2M24taW1hZ2Utc2xpZGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgc3R5bGVTbGlkZXIgPSBmdW5jdGlvbiBpbmplY3RDc3NXaXRoSlMoKSB7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZFwiKTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLmlubmVySFRNTCA9IGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogNXZoIGF1dG87XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogOTB2dztcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyIGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjaW1hZ2VTbGlkZXIgaW1nIHtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZmxleDogMSAxIDgwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdNYWluIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBtYXgoNDV2dywgMjAwcHgpO1xuICBcbiAgfVxuICBcbiAgI2ltYWdlU2xpZGVyICNpbWdOZXh0IGltZyxcbiAgI2ltYWdlU2xpZGVyICNpbWdQcmV2aW91cyBpbWcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvcGFjaXR5OiA0MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiBtYXgoMjB2dywgMTAwcHgpO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciAjaW1nTmV4dDpob3ZlciBpbWcsXG4gICNpbWFnZVNsaWRlciAjaW1nUHJldmlvdXM6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiA3MCU7XG4gIH1cbiAgXG4gICNpbWFnZVNsaWRlciBzcGFuIHtcbiAgICBsZWZ0OiA0MCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAjaW1nTmV4dCBzcGFuOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybCguLi9zcmMvaW1hZ2VzL2Fycm93X2ZvcndhcmQuc3ZnKTtcbiAgfVxuICBcbiAgI2ltZ1ByZXZpb3VzIHNwYW46OmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKC4uL3NyYy9pbWFnZXMvYXJyb3dfYmFjay5zdmcpO1xuICB9XG4gIFxuICAjaW1nTmV4dCBzcGFuOjpiZWZvcmUsXG4gICNpbWdQcmV2aW91cyBzcGFuOjpiZWZvcmUge1xuICAgIGJvdHRvbTogMjUwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogNDUlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogbWF4KDV2dywgMjBweCk7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgI2ltZ05leHQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAjaW1nUHJldmlvdXM6aG92ZXIgc3Bhbjo6YmVmb3JlIHtcbiAgICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICB9YDtcbiAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW1hZ2VTbGlkZXIgPSBmdW5jdGlvbiBpbWFnZVNsaWRlckZyb21EaXYoKSB7XG4gIGNvbnN0IGltYWdlU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZVNsaWRlclwiKTtcbiAgY29uc3QgaW1hZ2VTbGlkZXJDaGlsZHJlbiA9IFtdO1xuXG4gIGxldCBpbWdNYWluID0gMDtcbiAgY29uc3QgaW1nUHJldmlvdXMgPSBpbWdNYWluIC0gMTtcbiAgY29uc3QgaW1nTmV4dCA9IGltZ01haW4gKyAxO1xuXG4gIGNvbnN0IHVwZGF0ZUlkcyA9IGZ1bmN0aW9uIHVwZGF0ZURpdklkcygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlU2xpZGVyQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpdiA9IGltYWdlU2xpZGVyQ2hpbGRyZW5baV07XG4gICAgICBpZiAoaSA9PT0gaW1nUHJldmlvdXMpIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nUHJldmlvdXNcIik7XG4gICAgICB9IGVsc2UgaWYgKGkgPT09IGltZ01haW4pIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nTWFpblwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PT0gaW1nTmV4dCkge1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdOZXh0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlU2xpZGVyLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhpbWFnZVNsaWRlci5jaGlsZEVsZW1lbnRDb3VudCk7XG4gICAgY29uc3QgY2hpbGQgPSBpbWFnZVNsaWRlci5jaGlsZHJlbltpXTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBpbWFnZVNsaWRlckNoaWxkcmVuLnB1c2goZGl2KTtcbiAgfVxuICBpbWFnZVNsaWRlci5pbm5lckhUTUwgPSBcIlwiO1xuICB1cGRhdGVJZHMoKTtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBpbWFnZVNsaWRlckNoaWxkcmVuKSB7XG4gICAgaW1hZ2VTbGlkZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICB9XG5cbiAgY29uc3QgY2hhbmdlSWRzID0gZnVuY3Rpb24gY2hhbmdlRGl2SWRzT25DbGljaygpIHtcbiAgICBjb25zdCBidXR0b25CYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdQcmV2aW91c1wiKTtcbiAgICBjb25zdCBidXR0b25OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWdOZXh0XCIpO1xuXG4gICAgYnV0dG9uQmFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW1nTWFpbi0tO1xuICAgICAgdXBkYXRlSWRzKCk7XG4gICAgICBjaGFuZ2VJZHMoKTtcbiAgICB9KTtcblxuICAgIGJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGltZ01haW4rKztcbiAgICAgIHVwZGF0ZUlkcygpO1xuICAgICAgY2hhbmdlSWRzKCk7XG4gICAgfSk7XG4gIH07XG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHN0eWxlU2xpZGVyKCk7XG4gIGltYWdlU2xpZGVyKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==