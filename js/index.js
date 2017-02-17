$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    $(".desktop").fadeIn(2000);
    $("button#click").on('click',function () {
        //监听按钮事件,当按下按钮的时候执行后面代码。
        if($("#search").val().toLowerCase())        //首先判断输入框是否为空
        {
            document.cookie="name="+$("#search").val().toLowerCase(); //将输入框的值作为cookies存储下来
            window.location.href="Result.html";
        }
    });
});

