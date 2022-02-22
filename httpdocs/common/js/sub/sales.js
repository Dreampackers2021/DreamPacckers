$(function(){
  $(window).on('load resize', function(){
    var thumbClick = function(){
      var $thumb = $('.sp-section-item-img-thumb');
      var $mainImg = $('.sp-section-item-img');
      //var targetImg = '.sp-section-item-img img';
      $mainImg.each(function(i){
        var mainImgHeight = $(this).outerHeight();
        $(this).css('height', mainImgHeight);
      });
      $thumb.find('li:first-child').addClass('active');

      $thumb.each(function(i,elm){
        var $thumbLi = $(elm).find('li');
        $thumbLi.on('click', function(){
          var thumbImg = $(this).find('img');
          var dataUrl = thumbImg.attr('src');
          var target = $(elm).prev();
          var targetImg = target.find('img');
          $thumbLi.removeClass('active');
          $(this).addClass('active');
          targetImg.fadeOut(function(){
             (targetImg.attr("src", dataUrl)).fadeIn();
          });
        });
      });
    };
    thumbClick();

  });
});
$(window).on('load resize', function(){
  if($(window).width() > 768) {
    // console.log("done");
    // console.log("test");
    $('.sp-section-items').masonry({
      // options
      itemSelector: '.sp-section-item',
      columnWidth: '.grid-sizer',
      gutter: 30,
      percentPosition: true
    });
  }
});
