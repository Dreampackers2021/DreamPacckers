var backToTop = document.getElementById('BackToTop');

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > 500) {
        backToTop.classList.add('show');
    }else {
        backToTop.classList.remove('show');
    }
}

backToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
});