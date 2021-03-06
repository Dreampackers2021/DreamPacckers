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
if (wrapper.classList.contains('mobarekipage')){
  let menuLink = document.querySelectorAll('.bubble a')
  let sections = [];
  menuLink.forEach((link) => {
    const className = link.getAttribute('href').replace('#','')
    let section = document.querySelector("." + className);
    sections.push(section)
    link.addEventListener('click',(e)=> {
      e.preventDefault()
      window.scrollTo({top: section.offsetTop})
    })
  })

  const buttontLink = document.querySelectorAll('a.button.--bg-yellow')
  let divLinks = []
  buttontLink.forEach((link)=> {
    const buttonClass = link.getAttribute('href').replace('#','')
    console.log(buttonClass)
    const divLink = document.querySelector("." + buttonClass)
    divLinks.push(divLink)
    link.addEventListener('click',(e)=>{
      e.preventDefault()
      window.scrollTo({top: divLink.offsetTop})
    })
  })
  

}