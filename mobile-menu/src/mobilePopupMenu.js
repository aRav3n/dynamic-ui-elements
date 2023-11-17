import PlusIcon from "./images/bubble_plus.svg";

const toggleInvisibility = function (object) {
  if (object.style.display === "none") {
    object.style.display = "";
  } else {
    object.style.display = "none";
  }
};

export default function mobilePopupMenu(ulIdWithHash, popupButtonHexColorWithHash, plusIconHexColorWithHash) {
  const plusIcon = new Image();
  const body = document.querySelector("body");
  const head = document.querySelector("head");
  const style = document.createElement('style');
  const menuUl = document.querySelector(ulIdWithHash);

  style.innerHTML = `:root {
    --mobile-menu-icon-size: 2.5rem;
    --mobile-menu-radius: calc(var(--mobile-menu-icon-size) / 2);
    --mobile-menu-spacing: 10vmin;
    --mobile-menu-text-size: 1rem;
  }
  
  #mobileMenu {
    bottom: var(--mobile-menu-spacing);
    display: flex;
    flex-direction: column;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 0;
    height: 40vh;
    justify-content: space-between;
    left: var(--mobile-menu-spacing);
    padding: 0;
    position: fixed;
  }
  
  #mobileMenu a {
    align-items: center;
    background-color: #bfbfbf;
    border-radius: var(--mobile-menu-radius);
    color: black;
    display: flex;
    font-weight: bold;
    text-decoration: none;
  }
  
  #mobileMenu a:hover {
    gap: calc(var(--mobile-menu-text-size) / 2);
    padding-right: var(--mobile-menu-text-size);
  }
  
  #mobileMenu img {
    background-color: ${popupButtonHexColorWithHash};
    border-radius: 50%;
    height: var(--mobile-menu-icon-size);
    width: auto;
  }
  
  #mobileMenu li {
    display: flex;
    width: fit-content;
  }
  
  #mobileMenu li:hover {
    font-size: var(--mobile-menu-text-size);
  }
  
  #mobileMenuToggle {
    background-color: ${plusIconHexColorWithHash};
    border-radius: 50%;
    bottom: var(--mobile-menu-spacing);
    height: var(--mobile-menu-icon-size);
    position: fixed;
    right: var(--mobile-menu-spacing);
    width: auto;
  }`;
  head.appendChild(style);

  plusIcon.src = PlusIcon;
  plusIcon.setAttribute("id", "mobileMenuToggle");
  body.appendChild(plusIcon);
  plusIcon.addEventListener("click", () => {
    toggleInvisibility(plusIcon);
  });
}
