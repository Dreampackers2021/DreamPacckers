$(function(){
  var pageInit = function(){
    fixTableHeader();
  }

  const fixTableHeader = function() {
    const $scrollTable = $('[data-scrollTable]');

    function init() {
      $.each($scrollTable, function(i, elm) {
        if(checkScroll(elm)) {
          const $wrapper = $(elm).parent(),
                copyTable_width = copyHeader(elm) - 1;

          $(elm).addClass('-scroll');
          //$wrapper.css('margin-left', copyTable_width + 'px');
        }
      });
    }

    function checkScroll(elm) {
      const $wrapper = $(elm).parent(),
            wrapper_width = $wrapper.innerWidth(),
            table_width = $(elm).outerWidth();

      if(table_width > wrapper_width) {
        return true;
      }
      return false;
    }

    function copyHeader(elm) {
      const table_class = $(elm).attr('class'),
            $thead = $(elm).find('thead'),
            $tbody = $(elm).find('tbody');

      let $dom_table = $('<table></table>', {
            'class': table_class,
            'data-copyTable': '',
            'aria-hidden': 'true'
          }),
          $dom_thead = $('<thead></thead>'),
          $dom_tbody = $('<tbody></tbody');

      if($thead.length > 0) {
        const $tr = $thead.find('tr');
        $.each($tr, function(i, elm) {
          const $dom_tr = $('<tr></tr>');
          $(elm).find(':first-child').not('br').clone().appendTo($dom_tr);
          $dom_thead.append($dom_tr);
          var thHeight = $(elm).outerHeight();
          $dom_thead.find('th').css('height', thHeight + 'px');
        });
      }

      if($tbody.length > 0) {
        const $tr = $tbody.find('tr');
        $.each($tr, function(i, elm) {
          const $dom_tr = $('<tr></tr>');
          $(elm).find(':first-child').not('br').clone().appendTo($dom_tr);
          $dom_tbody.append($dom_tr);
        });

        const copyTable = $dom_table.append($dom_thead).append($dom_tbody).addClass('-copy');
        $(elm).parent().after(copyTable);

        return copyTable.outerWidth();
      }
    }

    function resizeScrollArea(elm) {
      const $copyTable = $('[data-copyTable]');

      $.each($copyTable, function(i, elm) {
        const copyTable_width = $(elm).outerWidth() - 1;
        //$(elm).prev().css('margin-left', copyTable_width + 'px');
      });
    }

    $(window).on('resize', function(){
      $.each($scrollTable, function(i, elm) {
        if($(elm).hasClass('-scroll')) {
          resizeScrollArea(elm);
        }
      });
    });

    if($scrollTable.length > 0) {
      init();
    }
  }

  // var fixTableHeader = function(){
  //   var $scrollTable = $('[data-scrollTable]');
  //
  //   var init = function() {
  //     $.each($scrollTable, function(i, elm){
  //       if(checkScroll(elm)){
  //         var wrap = $(elm).parent();
  //         var copyTableWidth = copyHeader(elm) -1;
  //         $(elm).addClass('-scroll');
  //       }
  //     });
  //     resizeScrollArea(elm);
  //   }
  //   var checkScroll = function(i, elm){
  //     var wrap = $scrollTable.parent();
  //     var wrapWidth = wrap.innerWidth();
  //     var tableWidth = $scrollTable.outerWidth();
  //     var table_class = $scrollTable.attr('class');
  //     if(tableWidth > wrapWidth){
  //       return true;
  //     }
  //     return false;
  //   }
  //   var copyHeader = function(elm){
  //     var tableClass = $scrollTable.attr('class');
  //     var thead = $scrollTable.find('thead');
  //     var tbody = $scrollTable.find('tbody');
  //     var domTable = $('<table></table>', {
  //       'class': tableClass,
  //       'data-copyTable': '',
  //       'area-hidden': 'ture'
  //     });
  //     var domThead = $('<thead></thead>');
  //     var domTbody = $('<tbody></tbody>');
  //
  //     if(thead.length > 0) {
  //       var tr = thead.find('tr');
  //       tr.each(function(i, elm) {
  //         var domTr = $('<tr></tr>');
  //         $(elm).find(':first-child').not('br').clone().appendTo(domTr);
  //         domThead.append(domTr);
  //       });
  //     }
  //     if(tbody.length > 0) {
  //       var tr = tbody.find('tr');
  //       tr.each(function(i, elm) {
  //          var domTr = $('<tr></tr>');
  //          $(elm).find(':first-child').not('br').clone().appendTo(domTr);
  //          domTbody.append(domTr);
  //       });
  //       var copyTable = domTable.append(domThead).append(domTbody).addClass('-copy');
  //       $scrollTable.parent().after(copyTable);
  //       return copyTable.outerWidth();
  //     }
  //   }
  //   var resizeScrollArea = function(elm) {
  //     var copyTable = $('[data-copyTable]');
  //     copyTable.each(function(i, elm) {
  //       var copyTable_width = $(elm).outerWidth() - 1;
  //       $(elm).prev().css('margin-left', copyTable_width + 'px');
  //     });
  //   }
  //   $(window).on('resize', function(){
  //     $.each($scrollTable, function(i, elm) {
  //       if($(elm).hasClass('-scroll')) {
  //         resizeScrollArea(elm);
  //       }
  //     });
  //   });
  //   if($scrollTable.length > 0) {
  //     init();
  //   }
  // }
  pageInit();

});
