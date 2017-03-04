$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    if(w<414){
        $(".desktop").fadeOut(1);
        $(".mobile").fadeIn(1);
    }
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        grabCursor : true,
});
});
