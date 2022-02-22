$(function() {

  /* スライダー */
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    speed: 1500,
    pauseOnFocus: false,
    pauseOnHover: false,
    touchMove: false,
    swipe: false,
    variableWidth: true,
  });
});

var itemHeights = []; //
$(function(){
  $(".top-news-section-item-long").each(function(){ //ターゲット(縮めるアイテム)
    var thisHeight = $(this).height(); //ターゲットの高さを取得
    itemHeights.push(thisHeight); //それぞれの高さを配列に入れる
    $(this).addClass("is-hide"); //CSSで指定した高さにする
    console.log(itemHeights[0]);
  });
});

$(".top-news-section-item-more").click(function(){
  var index = $(this).index(".top-news-section-item-more"); //トリガーが何個目か
  var addHeight = itemHeights[index]; //個数に対応する高さを取得
  $(this).fadeOut().addClass("is-show").prev().animate({height: addHeight},200).removeClass("is-hide"); //高さを元に戻す
});
