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
        $(".rightarea").fadeOut(1);
        $(".leftarea").fadeOut(1);
        $(".mobile-2").fadeIn();
    }
    var index=localStorage.getItem('index');   //利用split函数对cookies进行取值
    var test=localStorage.getItem('test'); // => 返回testKey对应的值
    if(test) { //判断session是否为空
        document.getElementById("request").innerHTML=test;
        $.get("php/Result.php",{name:test},function (data) {    //利用GET将值利用php去查询Mysql数据库
            if(data==0)   //判断数据库中是否有相应结果
            {
                $('#warning').fadeIn();
            }
            else
            {
                $number=data.split(" ",1)[0];
                $count=1;
                for(;$count<=$number;$count++){
                    $("div#div"+$count).fadeIn();
                    $("div#divm"+$count).fadeIn();
                }
                //将软件的各种信息通过for函数查询出来
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("name"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("company"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    document.getElementById("url"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                    $test++;
                }
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("nm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("cm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    $left++;
                    $right++;
                    $test++;
                }
            }
        });
    }
    else {
        document.getElementById("request").innerHTML=index;
        $.get("php/Result.php",{name:index},function (data) {
            if(data==0)
            {
                $('#warning').fadeIn();
            }
            else
            {
                $number=data.split(" ",1)[0];
                $count=1;
                for(;$count<=$number;$count++){
                    $("div#div"+$count).fadeIn();
                    $("div#divm"+$count).fadeIn();
                }
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("name"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("company"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    document.getElementById("url"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                    $test++;
                }
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("nm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("cm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    $left++;
                    $right++;
                    $test++;
                }
            }
        });
    }
    $("button#check").click(function () {
        if($("#content").val().toLowerCase()){
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content").val().toLowerCase());
            window.location.reload();
        }
    });
    $("button#check_mobile").click(function () {
        if($("#content_mobile").val().toLowerCase()){
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content_mobile").val().toLowerCase());
            window.location.reload();
        }
    });
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
});
