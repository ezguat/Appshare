$(document).ready(function () {
    var h;
    var w;
    var qwe;
    qwe=1;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    if(w<=414)
    {
        $(".header").fadeOut(1);
        $(".content").fadeOut(1);
        $(".mobile-3").fadeIn();
    }
    $("#search").click(function () {
        if(qwe==1){
            $("#search_div").fadeIn(500);
            qwe=0;
        }
        else
        {
            $("#search_div").fadeOut(500);
            qwe=1;
        }
    });
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay : 2000,
        centeredSlides : true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
    });
    $("button#check").click(function () {
        if($("#printer").val().toLowerCase()){
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#printer").val().toLowerCase()); // => 返回testKey对应的值
            window.location.href="../Result.html";
        }
    });
        $(function(){
            $(".zoom").imgbox({
                'speedIn'		: 0,
                'speedOut'		: 0,
                'alignment'		: 'center',
                'overlayShow'	: true,
                'allowMultiple'	: false
            });
        });
});
