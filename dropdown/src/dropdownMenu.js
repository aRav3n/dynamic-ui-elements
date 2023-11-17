import DownArrow from "./images/down_arrow.svg";

export default function createDropdownMenuFunctionality(
  menuBackgroundColorHex,
  menuUlIdWithHash
) {
  const head = document.querySelector("head");
  const style = document.createElement("style");
  const dropdownMenus = document.querySelectorAll(".dropdown");
  const arrowSpan = document.createElement("span");
  const downArrow = new Image();

  style.innerHTML = `:root {
  --menu-bg-color: ${menuBackgroundColorHex};
  --menu-txt-color: #000000;
  --menu-hvr-txt-color: #ffffff;
}

* {
  color: inherit;
  font: inherit;
}

body {
  margin: 0;
}

.dropdown ul {
  display: grid;
}

.dropdown li:last-child {
  padding-bottom: 0.25rem;
}

.dropdown span img {
  height: 0.5rem;
  transition: transform 300ms ease-in-out;
  width: auto;
}

${menuUlIdWithHash} {
  background-color: var(--menu-bg-color);
  color: var(--menu-txt-color);
  display: grid;
  gap: 1vw;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  justify-content: space-evenly;
  list-style-type: none;
  height: 2rem;
  margin: 0;
  width: 100vw;
}

${menuUlIdWithHash} li li {
  background-color: var(--menu-bg-color);
  padding: 0.25rem 0.5rem;
}

${menuUlIdWithHash} a {
  text-decoration: none;
}

${menuUlIdWithHash} li {
  padding: 0.25 0.5rem;
}

${menuUlIdWithHash} > li {
  display: inline-block;
  padding: 0.5rem;
}

${menuUlIdWithHash} a:hover {
  color: var(--menu-hvr-txt-color);
}

${menuUlIdWithHash} ul {
  display: none;
  list-style-type: none;
  padding: 0;
}

.menuShown img {
  transform: rotate(180deg);
}`;
  head.appendChild(style);
  downArrow.src = DownArrow;
  arrowSpan.appendChild(downArrow);
  for (let i = 0; i < dropdownMenus.length; i++) {
    const dropdownMenu = dropdownMenus[i];
    dropdownMenu.insertBefore(arrowSpan, dropdownMenu.children[0]);
    const dropdownArrow = dropdownMenu.querySelector("span");
    const vizChange = function visibilityChange() {
      const dropdownMenuItems = dropdownMenu.querySelector("ul");
      if (dropdownMenuItems.style.display === "grid") {
        dropdownMenuItems.style.display = "none";
      } else {
        dropdownMenuItems.style.display = "grid";
      }
      dropdownArrow.classList.toggle("menuShown");
    };
    document.addEventListener("DOMContentLoaded", () => {
      vizChange();
    });
    dropdownMenu.addEventListener("click", () => {
      vizChange();
    });
  }
}
