export default function createDropdownMenuFunctionality() {
  const dropdownMenus = document.querySelectorAll(".dropdown");
  const arrowSpan = document.createElement("span");
  arrowSpan.innerHTML = "▼";
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