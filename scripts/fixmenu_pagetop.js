


fm_addEvent(window, 'load', function() {
    var offSetTop = 350;
    fm_addEvent(window, 'scroll', function() {
var a = document.documentElement.scrollTop;
var b = document.body.scrollTop;
console.log(a);
console.log(b);
    })
})