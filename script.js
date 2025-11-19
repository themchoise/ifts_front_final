const mainNav = document.getElementById("mainNav");
const item1Row1 = document.querySelector(".item1-row1");
let hamburgerMenu = null;

function updateNavigation() {
  const viewportWidth = window.innerWidth;
  console.log(`Viewport width: ${viewportWidth}px`);

  if (viewportWidth < 768) {
    mainNav.style.display = "none";

    if (!hamburgerMenu) {
      hamburgerMenu = document.createElement("div");
      hamburgerMenu.className = "hamburger-menu";
      hamburgerMenu.style.cssText =
        "position: absolute; top: 25px; left: 25px; cursor: pointer; z-index: 100;";

      const hamburgerImg = document.createElement("img");
      hamburgerImg.setAttribute("src", "./images/icon-hamburger.svg");
      hamburgerImg.setAttribute("alt", "Menu");
      hamburgerImg.style.cssText = "width: 24px; height: 20px;";

      hamburgerMenu.appendChild(hamburgerImg);
      item1Row1.insertBefore(hamburgerMenu, item1Row1.firstChild);
    }
  } else {
    mainNav.style.display = "flex";

    if (hamburgerMenu && hamburgerMenu.parentNode) {
      hamburgerMenu.parentNode.removeChild(hamburgerMenu);
      hamburgerMenu = null;
    }
  }
}

document.addEventListener("DOMContentLoaded", updateNavigation);

window.addEventListener("resize", updateNavigation);
