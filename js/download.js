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
        $(".push").fadeOut(1);
        $("div#download-click").fadeOut(1);
        $("div#comment").fadeOut(1);
        $(".comments_mobile").fadeIn(1);
        $(".push-mobile").fadeIn(1);
        $(".comments").fadeOut(1);
        $("a.imgbox-close").css('display','none');
    }
    if(1440<w&&w<=1680){
        $("#introduce_div").css("width","50%");
        $("#check").css("width","8%");
    }
    if(1366<w&&w<=1440){
        $("#introduce_div").css("width","50%");
        $("#detail_div").css("width","33%");
        $("#check").css("width","8%");
        $(".comments").css("width","16%");
        $(".content").css("margin-left","17%");
        $(".push").css("width","12%");
    }
    if(w<=1366){
        $("#introduce_div").css("width","53%");
        $("#detail_div").css("width","32%");
        $(".content").css("height","86%");
        $("#dbutton").css("margin-top","5%");
        $("#check").css("width","8%");
        $(".comments").css("width","16%");
        $(".content").css("margin-left","18%");
        $(".push").css("width","11%");
        $("#push_a").css("height","4%");
        $("#push_a").css("margin-left","2.5%");
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
    $("a#ct").click(function () {
        $("div#download-click").css('display','block');
        $("div#comment").css('display','block');
    });
    $("a#ct-mobile").click(function () {
        $("div#download-click-mobile").css('display','block');
        // $("div#comment").css('display','block');
    });
    $("div#download-click").click(function () {
        $("div#download-click").css('display','none');
        $("div#comment").css('display','none');
    });
    $("button#click").click(function () {
        $("div#download-click").css('display','none');
        $("div#comment").css('display','none');
    });
    $("button#click").click(function () {
        localStorage.setItem('time',new Date().toLocaleDateString());
        var time1=localStorage.getItem('time');
        $.get("../php/comment.php",{comment1:document.getElementById('idname').textContent.toLowerCase(),user:$("input#user").val(),user_comment:$("input#comment_content").val(),time:time1},function (data) {
        });
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
    // alert(document.getElementById('idname').textContent.toLowerCase());
    $.get("../php/comment.php",{comment:document.getElementById('idname').textContent.toLowerCase()},function (data) {
        // alert(data);
        var zero=0;
        var zero1=0;
        var number=data.split(';')[zero++];
        var tip=parseInt(number/8);
        for(var one=0;one<=tip;one++){
            $("li#tip"+one).css('display','inline-block');
            $("li#tip"+one+"-mobile").css('display','inline-block');
        }
        for(var start=1;start<=number;start++){
            $("div#div"+start).css('display','block');
            document.getElementById('user'+start).innerHTML=data.split(';')[zero++];
            document.getElementById('date'+start).innerHTML=data.split(';')[zero++];
            document.getElementById('comment'+start).innerHTML=data.split(';')[zero++];
            $("div#div"+start+"-mobile").css('display','block');
            document.getElementById('user'+start+"-mobile").innerHTML=data.split(';')[zero1++];
            document.getElementById('date'+start+"-mobile").innerHTML=data.split(';')[zero1++];
            document.getElementById('comment'+start+"-mobile").innerHTML=data.split(';')[zero1++];
        }
    });
});
