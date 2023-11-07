import DownArrow from './images/down_arrow.svg';

export default function createDropdownMenuFunctionality() {
  const dropdownMenus = document.querySelectorAll(".dropdown");
  const arrowSpan = document.createElement("span");
  const downArrow = new Image();
  downArrow.src = DownArrow;
  arrowSpan.appendChild(downArrow);
  for (let i = 0; i < dropdownMenus.length; i++) {
    const dropdownMenu = dropdownMenus[i];
    dropdownMenu.insertBefore(arrowSpan, dropdownMenu.children[0]);
    const dropdownArrow = dropdownMenu.querySelector('span');
    const vizChange = function visibilityChange() {
      const dropdownMenuItems = dropdownMenu.querySelector("ul");
      if (dropdownMenuItems.style.display === "grid") {
        dropdownMenuItems.style.display = "none";
      } else {
        dropdownMenuItems.style.display = "grid";
      };
      dropdownArrow.classList.toggle('menuShown');
    };
    document.addEventListener("DOMContentLoaded", () => {
      vizChange();
    });
    dropdownMenu.addEventListener("click", () => {
      vizChange();
    });
  }
};