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

export const imageSlider = function imageSliderFromDiv() {
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
