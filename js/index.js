$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    if(w<=414)
    {
        $('.mobile').css('height',h);
        $('.mobile').css('width',w);
        $(".mobile").fadeIn();
        $("button#click_mobile").on('click',function () {
            //监听按钮事件,当按下按钮的时候执行后面代码。
            if($("#search_mobile").val().toLowerCase())        //首先判断输入框是否为空
            {
                localStorage.removeItem('index');
                localStorage.removeItem('app');
                localStorage.removeItem('requests');
                localStorage.removeItem('category');
                localStorage.setItem('app',$("#search_mobile").val().toLowerCase());
                window.location.href="content/Result.html";
            }
        });
    }
    if(w>1000)
    {
        $('.desktop').css('height',h);
        $('.desktop').css('width',w);
        $(".desktop").fadeIn(1000);
    }
    $("button#click").on('click',function () {
        //监听按钮事件,当按下按钮的时候执行后面代码。
        if($("#search").val().toLowerCase())        //首先判断输入框是否为空
        {
            localStorage.removeItem('index');
            localStorage.removeItem('app');
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            localStorage.setItem('app',$("#search").val().toLowerCase());
            window.location.href="content/Result.html";
        }
    });
    document.onkeydown = function(e) {
        //捕捉回车事件
        var ev = (typeof event!= 'undefined') ? window.event : e;
        if(ev.keyCode == 13) {
            localStorage.removeItem('index');
            localStorage.removeItem('app');
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            localStorage.setItem('app',$("#search").val().toLowerCase());
            window.location.href="content/Result.html";
        }
    }
});

