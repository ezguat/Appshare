$(document).ready(function () {
    var h;
    var w;
    var qwe;
    var asd;
    qwe=1;
    asd=3;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    $("button#check").click(function () {
        if($("#content").val().toLowerCase()){
            localStorage.removeItem('category');
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content").val().toLowerCase());
            window.location.href="Result.html";
        }
    });
    $("button#check_mobile").click(function () {
        if($("#content_mobile").val().toLowerCase()){
            localStorage.removeItem('category');
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content_mobile").val().toLowerCase());
            window.location.href="Result.html";
        }
    });
    $("#search").click(function () {
        if(qwe==1){
            $("#search_div").fadeIn(500);
            $("#menu_div").fadeOut(500);
            qwe=0;
        }
        else
        {
            $("#search_div").fadeOut(500);
            qwe=1;
        }
    });
    $("#menu").click(function () {
        if(asd==3){
            $("#menu_div").fadeIn(500);
            $("#search_div").fadeOut(500);
            asd=4;
        }
        else
        {
            $("#menu_div").fadeOut(500);
            asd=3;
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        autoplay:4000,
        slidesPerView : 5,
        mousewheelControl : true,
    });
});
