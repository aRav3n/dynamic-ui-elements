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

export const makeImageSlider = function makeImageSliderFromDiv() {
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
