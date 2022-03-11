//header and footer -- 共通部分
/* window.addEventListener("load", (event) => {
  const nav = document.querySelector("header");
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      nav.innerHTML = data;
    });

    //メニュー レスポンシブ
}) */
/* }); */

$(document).ready(function () {
  $(".header").load("header.html");
  $(".footer").load("footer.html");
  console.log(location.href);
});

// slider
/*
B1: lay element cua .slide
B2: lay element cua .dot (btn)
B3: khai bao slide current
B4: tao ham bam vao dot thay doi hinh anh (manualNav)
B5: doi voi moi slide thi add class name 'active'
B6: doi voi moi button (dot) moi khi click thi thay doi hinh anh
*/

var slides = document.querySelectorAll(".slider");
var btns = document.querySelectorAll(".dot");
let currentSlide = 1;

// B2 thực hiện hàm chuyển slide thủ công
var manualNav = function (manual) {
  // xoa bo class name cho tat ca slide
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  //thêm class name 'active' vào ảnh va button tương ứng với index vua tim duoc
  // trong css ta setting cho class active
  slides[manual].classList.add("active");
  btns[manual].classList.add("active");
};

//B1. xác định giá trị index thông qua mảng button
// từ element của nút bấm ta dùng vòng lặp để lặp với tham số là btn và chỉ số index của nút bấm

btns.forEach((btn, i) => {
  //them sự kiện click vào nút vừa bấm
  btn.addEventListener("click", () => {
    // gọi hàm chuyển ảnh slide thủ công với biến là index của nút bấm
    manualNav(i);
    //gán giá trị slide hiện tại = index của button
    currentSlide = i;
  });

  // Javascript for image slider autoplay navigation
   var repeat = function (activeClass) {
    let active = document.getElementsByClassName("active");
    console.log(active);
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
