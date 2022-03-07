//メニュー レスポンシブ
const menuIcon = document.querySelector("#MenuBar");
const navMenu = document.querySelector("#Nav");
const bgOverlay = document.getElementById("overlay");
var navLinks = navMenu.querySelectorAll("li a");
var iconOpen = menuIcon.querySelector(".icon-open");
var iconClose = menuIcon.querySelector(".icon-close");

function changeIcon() {
  if (navMenu.classList.contains("is-active")) {
    iconClose.style.display = "block";
    iconOpen.style.display = "none";
  } else {
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
  }
}

function showHiddenMenu() {
  navMenu.classList.toggle("is-active");
  bgOverlay.classList.toggle("is-active");
  changeIcon();
}

if (navMenu && menuIcon && bgOverlay) {
  //show menu when click icon
  //hidden menu when click overlay
  menuIcon.addEventListener("click", () => {
    showHiddenMenu();

  });
  bgOverlay.addEventListener("click", () => {
    showHiddenMenu();
  });
}

//Hide Menu when Click the Links
navLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-active");
    bgOverlay.classList.remove("is-active");
    changeIcon();
  });
});
