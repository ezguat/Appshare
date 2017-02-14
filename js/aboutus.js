/**
 * Created by jackz on 2017/2/8.
 */
$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        grabCursor : true,
});
});
