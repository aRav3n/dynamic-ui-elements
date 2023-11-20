export const imageSlider = function imageSliderFromDiv() {
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
