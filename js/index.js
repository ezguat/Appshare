$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    $(".desktop").fadeIn(2000);
    $("button#click").on('click',function () {
        document.cookie="name="+$("#search").val().toLowerCase();
        window.location.href="Result.html";
    });
});

