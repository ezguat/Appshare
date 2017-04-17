$(document).ready(function () {
    var h;
    var w;
    var qwe;
    var asd;
    asd=3;
    qwe=1;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    if(w<=414)
    {
        $(".header").fadeOut(1);
        $(".content").fadeOut(1);
        $(".mobile-3").fadeIn(1);
    }
    if(1440<w&&w<=1680){
        $("#introduce_div").css("width","50%");
        $("#check").css("width","8%");
    }
    if(1366<w&&w<=1440){
        $("#introduce_div").css("width","50%");
        $("#detail_div").css("width","33%");
        $("#check").css("width","8%");
    }
    if(w<=1366){
        $("#introduce_div").css("width","53%");
        $("#detail_div").css("width","32%");
        $(".content").css("height","86%");
        $("#dbutton").css("margin-top","5%");
        $("#check").css("width","8%");
    }
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
        direction: 'horizontal',
        autoplay : 2000,
        centeredSlides : true,
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        DisableOnInteraction:true,
    });
    $("button#check").click(function () {
        if($("#printer").val().toLowerCase()){
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            localStorage.setItem('test',$("#printer").val().toLowerCase()); // => 返回testKey对应的值
            window.location.href="../content/Result.html";
        }
    });
    document.onkeydown = function(e) {
        //捕捉回车事件
        var ev = (typeof event!= 'undefined') ? window.event : e;
        if(ev.keyCode == 13) {
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            localStorage.setItem('test',$("#printer").val().toLowerCase()); // => 返回testKey对应的值
            window.location.href="../content/Result.html";
        }
    };
    $("button#check_mobile").click(function () {
        if($("#printer_mobile").val().toLowerCase()){
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            localStorage.setItem('test',$("#printer_mobile").val().toLowerCase()); // => 返回testKey对应的值
            window.location.href="../content/Result.html";
        }
    });
    $(function(){
            $(".zoom").imgbox({
                padding:   0,
                border:   0,
                speedIn		: 0,
                speedOut	: 0,
                alignment		: 'center',
                overlayShow	    : true,
                allowMultiple	: false,
                theme:'light',
                slideshow:false
            });
    });
});
