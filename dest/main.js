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

const arr = ['Nike', 'Adidas', 'NB', 'Dior', 'LV'];
let newArr2 = arr.slice(3, 5);
console.log(newArr2);

let arr9 = [1, 2, 3, 4, 5];
/* let newArr = arr9.splice(3, 2);  */// hiểu sai về hàm splice. 4 là số lượng phần tử cần xóa chỗ này chỉ truyền vào 2. (3, 2) => Bắt đầu từ vị trí thứ 3.
// splice nó không tạo ra mảng mới mà nó sẽ thao tác trên mảng cũ
arr9.splice(arr9.length - 2);
console.log(arr9);

const isEvenV2 = (number) => number % 2 === 0;

if (isEvenV2) {
    console.log('Số chẵn');
} else {
    console.log('Số lẽ');
}
