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

export const makeImageSlider = function makeImageSliderFromDiv() {
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
