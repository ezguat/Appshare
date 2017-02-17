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
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
    });
    $("button#check").click(function () {
        if($("#content").val().toLowerCase()){
            sessionStorage.setItem('testKey',$("#content").val().toLowerCase()); // => 返回testKey对应的值
            window.location.href="../Result.html";
        }
    });
});
