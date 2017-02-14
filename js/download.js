$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('body').css('height',h);
    $('body').css('width',w);
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay : 2000,
        centeredSlides : true,
        // 如果需要滚动条
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
    })
});
