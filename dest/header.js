//メニュー レスポンシブ
const menuIcon = document.querySelector("#MenuBar");
const navMenu = document.querySelector("#Nav");
const bgOverlay = document.getElementById("overlay");
var navLinks = navMenu.querySelectorAll("li a");
var menuHambuger = menuIcon.querySelector("span");

function showHiddenMenu() {
  navMenu.classList.toggle("is-active");
  bgOverlay.classList.toggle("is-active");
  menuHambuger.classList.toggle("is-active");
}

if (navMenu && menuIcon && bgOverlay) {
  menuIcon.addEventListener("click", () => {
    showHiddenMenu();

  });
  bgOverlay.addEventListener("click", () => {
    showHiddenMenu();
  });
}

navLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
    menuHambuger.classList.remove("is-active");
  });
});
