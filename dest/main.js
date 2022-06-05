$(document).ready(function () {
  $(".header").load("header.html");
  $(".footer").load("footer.html");
});

var slides = document.querySelectorAll(".slider");
var btns = document.querySelectorAll(".dot");
let currentSlide = 1;

var manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });

  var repeat = function (activeClass) {
    let active = document.getElementsByClassName("active");
    let i = 1;

    var repeater = () => {
      setTimeout(function () {
        [...active].forEach((activeSlide) => {
          activeSlide.classList.remove("active");
        });

        slides[i].classList.add("active");
        btns[i].classList.add("active");
        i++;

        if (slides.length == i) {
          i = 0;
        }
        if (i >= slides.length) {
          return;
        }
        repeater();
      }, 4000);
    };
    repeater();
  };
  repeat();
});

//when click menu - scroll to section
let wrapper = document.querySelector("body");
if (wrapper.classList.contains("mobarekipage")) {
  const bannerTop = document.querySelector(".banner-top");
  const headerMobarekiPg = document.querySelector(".mobarekipage header");
  const ulHeader = headerMobarekiPg.querySelector("ul");
  const aHeader = document.querySelectorAll("header ul a");

  const hShowHeader = bannerTop.clientHeight - headerMobarekiPg.clientHeight;

  function scrollShowHeader() {
    let wWindow = window.innerWidth;
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > hShowHeader) {
        headerMobarekiPg.classList.add("is-active");
        ulHeader.classList.add("is-active");
      } else {
        headerMobarekiPg.classList.remove("is-active");
        ulHeader.classList.remove("is-active");
      }
    });
  }
  scrollShowHeader();

  const scrollToLink = (element) => {
    element.forEach((link) => {
      const className = link.getAttribute("href").replace("#", "");
      let section = document.querySelector("." + className);
      // sections.push(section);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: section.offsetTop });
      });
    });
  };

  let menuLink = document.querySelectorAll(".bubble a");
  scrollToLink(menuLink);
  scrollToLink(aHeader);
  const buttontLink = document.querySelectorAll("a.button.--bg-yellow");
  scrollToLink(buttontLink);
  // buttontLink.forEach((link) => {
  //   const buttonClass = link.getAttribute("href").replace("#", "");
  //   const divLink = document.querySelector("." + buttonClass);
  //   link.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     window.scrollTo({ top: divLink.offsetTop });
  //   });
  // });
}
