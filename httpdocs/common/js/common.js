$(function(){

  var pc = {};
  var tab = {};
  var sp = {};

  // media set
  var checkMatchMedia = function() {
    pc = window.matchMedia("only screen and (min-width: 769px)");
    //tab = window.matchMedia("only screen and (min-width: 641px) and (max-width: 768px)");
    tab = window.matchMedia("only screen and (max-width: 768px)");
    sp = window.matchMedia("only screen and (max-width: 768px)");
  };
  checkMatchMedia();

  // pagetop
  var pageTop = function() {
    var $topBtn = $('.back2top');
    var classShow = 'show';
    var amountScrolled = 200;
    var amountScrolledNav = 25;
    $(window).scroll(function() {
      if ( $(window).scrollTop() > amountScrolled ) {
        $topBtn.addClass(classShow);
      } else {
        $topBtn.removeClass(classShow);
      }
    });
    $topBtn.click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  }

	/**
	 * スムーススクロール
	 */
	var smoothScroll = function() {
    var headerHeight = $('header').outerHeight();
    $('a[href^="#"]').not('.h-nav-list a[href^="#"]').on('click', function(e) {
      var $this = $(this);
      if(!$this.hasClass('menu-trigger')) {
        var href = $this.attr('href');
        var offset = $(href).offset();
        $('body,html').animate({
        	scrollTop: offset.top - headerHeight
        }, 500);
      }
    });
    $(window).on('load', function() {
      var url = $(location).attr('href');
      if(url.indexOf("#") != -1){
        var anchor = url.split("#");
        var target = $('#' + anchor[anchor.length - 1]);
        if(target.length){
          var pos = Math.floor(target.offset().top) - headerHeight;
          $("html, body").animate({scrollTop:pos}, 500);
        }
      }
    });
	};

  /**
   * グロナビ固定とcurrent付与
   */
  var globalNav = function(){
    var $el = $('.h-content');
    var $window = $(window);
    var $nav = $('.h-nav-list a[href^="#"]');
    var $section = $('main section');
    var navHeight = $el.outerHeight();
    var headerHeight = $('header').outerHeight();
    var classFixed = 'fixed';
    var classCurrent = 'current';
    var currentScrollY = 0;

    var init = function(){
      //fixed();
      setScrollEvent();
      scroll();
      current();
    };
    var setScrollEvent = function(){
      $el.addClass(classFixed);
      $('body').css({
        'margin-top': navHeight
      });
    };
    var scroll = function(){
      $nav.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var href = $this.attr('href');
        var offset = $(href).offset();
        $('body,html').animate({
          scrollTop: offset.top - navHeight
        },500);
      });

    };
    var current = function(){
      var ary = [];
      for(var i = 0; $nav.length > i; i++){
        var sectionId = $nav.eq(i).attr('href');
        var sectionTop = $(sectionId).offset().top - (navHeight);
        var sectionBtm = sectionTop + $(sectionId).outerHeight() - 1;
        ary[i] = [sectionTop,sectionBtm]
      };
      $window.scroll(function(){
        var currentScrollY = $window.scrollTop();
        for(var i = 0; ary.length > i; i++){
          if(ary[i][0] <= currentScrollY && ary[i][1] >= currentScrollY){
            $nav.removeClass(classCurrent);
            $nav.eq(i).addClass(classCurrent);
          }
          if(ary[0][0] >= (currentScrollY + 5)) {
            $nav.removeClass(classCurrent);
          }
        };
      });
    };
    $('.menu-toggle').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.h-nav').addClass('active');
            $('.h-nav').fadeIn();
        } else {
            $('.h-nav').removeClass('active');
            $('.h-nav').fadeOut();
        }
    });
    init();
  };
  globalNav();

  var salesImg = function(){
    $(window).on('load', function(){
      var $salesMainImg = $('.sp-section-item-img');
      if(sp.matches) {
        for(i=0; i < $salesMainImg.length; i++) {
          var salesMainImgWidth = ($salesMainImg.eq(i).find('img').width() / 2);
          $salesMainImg.eq(i).find('img').css('width', salesMainImgWidth);
        }
      } else {
        for(i=0; i < $salesMainImg.length; i++) {
          $salesMainImg.eq(i).find('img').removeAttr('style');
        }
      }
    });

    $(window).on('resize', function(){
    if($(window).width() > 768) {

      var $salesMainImg = $('.sp-section-item-img');
      if(sp.matches) {
        for(i=0; i < $salesMainImg.length; i++) {
          var salesMainImgWidth = ($salesMainImg.eq(i).find('img').width() / 2);
          $salesMainImg.eq(i).find('img').css('width', salesMainImgWidth);
        }
      } else {
        for(i=0; i < $salesMainImg.length; i++) {
          $salesMainImg.eq(i).find('img').removeAttr('style');
        }
      }
    }
    });

  };
  salesImg();

  var systemLogoImg = function(){
    if(sp.matches) {
      var $logo = $('.logo-list li');
      for(i=0; i < $logo.length; i++) {
        var $logoWidth = ($logo.eq(i).find('img').width() / 2);
        $logo.eq(i).find('img').css('width', $logoWidth);
      }
    }
  };
  systemLogoImg();

  //  共通設定 //
  pc.addListener(responsive);
  responsive(sp);

  function responsive(sp) {
    $(document).ready(function() {
        pageTop();
        smoothScroll();
      $('.l-header').load('/common/inc/header.html', function (){
        globalNav();
      });
      $('.l-footer').load('/common/inc/footer.html', function (){
        pageTop();
        smoothScroll();
      });

    });
  }

  // リサイズ処理 //
  var resizeEvent = (function() {
    var spWidth = 768;
    var onLoadWidth = 0;
    var init = function() {
      onLoadWidth = $(window).outerWidth();
      setEvents();
      return this;
    };
    var isMediaSp = function() {
      return ($(window).width() > spWidth) ? false : true;
    };
    var setEvents = function() {
      $(window).on('resize', function() {
        if(onLoadWidth !== $(window).outerWidth()) {
          onResize();
        }
      });
      return this;
    };
    var onResize = function() {
      checkMatchMedia();
      onLoadWidth = $(window).outerWidth();
      //imageSwitch();
      isMediaSp ? responsive(sp) : pc.addListener(responsive);
      return this;
    };
    init();
  })();

});
