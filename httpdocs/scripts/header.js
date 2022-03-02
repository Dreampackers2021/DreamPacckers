//メニュー レスポンシブ
const menuIcon = document.querySelector("#MenuBar");
const navMenu = document.querySelector("#Nav");
const bgOverlay = document.getElementById("overlay");
var navLinks = navMenu.querySelectorAll("li a");
var iconOpen = menuIcon.querySelector(".icon-open");
var iconClose = menuIcon.querySelector(".icon-close");

console.log(menuIcon)

function changeIcon() {
  if (navMenu.classList.contains("active")) {
    iconClose.style.display = "block";
    iconOpen.style.display = "none";
  } else {
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
  }
}

function showHiddenMenu() {
  navMenu.classList.toggle("active");
  bgOverlay.classList.toggle("active");
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
    navMenu.classList.remove("active");
    bgOverlay.classList.remove("active");
    changeIcon();
  });
});