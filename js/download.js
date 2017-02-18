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
