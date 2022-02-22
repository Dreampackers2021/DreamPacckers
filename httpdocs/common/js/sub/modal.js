$(function() {

  /**
   * 初期処理
   */
  var pageInit = function() {
    /* モーダル */
    modal();
  };

  /**
   * モーダル
   */
  var modal = function() {
    var $el = $('.modal');
    var $closeBtn = $el.find('.js-trigger-close');
    var $inner = $el.find('.js-modal-inner');
    var $mainSection = $('body');
    var $openBtn = $('.js-trigger-open');
    var $nav = $('.lineup-fabric-item a');
    var classOpen = '-open';
    var currentScrollY = 0;
    var isAnimate = false;
    var init = function() {
      setStyle();
      setEvents();
    };
    var setStyle = function() {
      $el.hide();
    };
    var setEvents = function() {
      $openBtn.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var href = $this.attr('href');
        $(href).addClass(classOpen);
        if(!isAnimate) {
          openModal();
          isAnimate = false;
        }
      });
      $closeBtn.on('click', function(){
        $el.removeClass(classOpen);
        if(!isAnimate) {
          closeModal();
          isAnimate = false;
        }
      });
      $el.on('click', function(){
        if(!isAnimate) {
          closeModal();
          isAnimate = false;
        }
      });
      $inner.on('click', function(e) {
        e.stopPropagation();
      });
    };
    var openModal = function() {
      isAnimate = true;
      currentScrollY = $(window).scrollTop();
      $('.-open').fadeIn();
      $mainSection.addClass(classOpen);
      $mainSection.css({
        top: -currentScrollY
      });
    };
    var closeModal = function() {
      isAnimate = true;
      $el.fadeOut();
      $mainSection.removeClass(classOpen);
      $(window).scrollTop(currentScrollY);
    };
    init();
  };

  /**
   * グロナビ固定とcurrent付与
   */
  var globalNav = function(){
    var $el = $('.nav');
    var $window = $(window);
    var $nav = $('.nav__list a');
    var $section = $('.main-section');
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
      $window.scroll(function(){
        var currentScrollY = $window.scrollTop();
        if(currentScrollY > headerHeight){
          $el.addClass(classFixed);
          $('body').css({
            'margin-top': navHeight
          });
        } else {
          $el.removeClass(classFixed);
          $('body').removeAttr('style');
        };
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
        var sectionTop = $(sectionId).offset().top - (navHeight + headerHeight);
        var sectionBtm = sectionTop + $(sectionId).outerHeight() - 1;
        ary[i] = [sectionTop,sectionBtm]
      };
      console.log(ary);
      $window.scroll(function(){
        var currentScrollY = $window.scrollTop();
        for(var i = 0; ary.length > i; i++){
          if(ary[i][0] <= currentScrollY && ary[i][1] >= currentScrollY){
            $nav.removeClass(classCurrent);
            $nav.eq(i).addClass(classCurrent);
          }
        };
      });
    };
    init();
  };





  /* 初期処理 */
  pageInit();

});
