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
    if(w<=414)
    {
        $(".header").fadeOut(1);
        $(".rightarea").fadeOut(1);
        $(".leftarea").fadeOut(1);
        $(".mobile-2").fadeIn();
        $(".mobile-bottom").fadeIn();
        var test=localStorage.getItem('test'); // => 返回testKey对应的值
        var categories=localStorage.getItem('category'); // => 返回testKey对应的值
        var request=localStorage.getItem('requests');
        if(test) { //判断session是否为空
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            document.getElementById("request").innerHTML=test;
            $.get("../php/Result.php",{name:test},function (data) {    //利用GET将值利用php去查询Mysql数据库
                if(data==0)   //判断数据库中是否有相应结果
                {
                    $('#warning-m').fadeIn();
                }
                else
                {
                    $number=data.split(" ",1)[0];
                    // alert($number);
                    var get=parseInt($number/9);
                    var one=0;
                    do {
                        $("li#tipm"+one).css('display','inline-block');
                        one++;
                    } while(one<=get);
                    $count=1;
                    for(;$count<=$number;$count++){
                        $("div#divm"+$count).fadeIn();
                    }
                    //将软件的各种信息通过for函数查询出来
                    for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                        document.getElementById("nm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                        document.getElementById("cm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                        document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                        document.getElementById("urlm"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                        $test++;
                    }
                }
            });
        }
        if(categories){
            localStorage.removeItem('requests');
            localStorage.removeItem('category');
            document.getElementById("request").innerHTML=request;
            $.get("../php/Result2.php",{name:categories},function (data) {
                if(data==0)
                {
                    $('#warning-m').fadeIn();
                }
                else
                {
                    $number=data.split(" ",1)[0];
                    // alert($number);
                    var get=parseInt($number/9);
                    var one=0;
                    do {
                        $("li#tip"+one).css('display','inline-block');
                        one++;
                    } while(one<=get);
                    $count=1;
                    for(;$count<=$number;$count++){
                        $("div#divm"+$count).fadeIn();
                    }
                    //将软件的各种信息通过for函数查询出来
                    for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                        document.getElementById("nm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                        document.getElementById("cm"+$test).innerHTML=data.split(" ",$left++)[$right++];
                        document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                        document.getElementById("urlm"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                        $test++;
                    }
                }
            });
        }
        $("#tipm0").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=9;
                if(number>=tip){
                    check1_mobile(0);
                }
                else {
                    check2_mobile(number%9,0);
                }
            });
        });
        $("#tipm1").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=18;
                if(number>=tip){
                    check1_mobile(1);
                }
                else {
                    check2_mobile(number%9,1);
                }
            });
        });
        $("#tipm2").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=27;
                if(number>=tip){
                    check1_mobile(2);
                }
                else {
                    check2_mobile(number%9,2);
                }
            });
        });
        $("#tipm3").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=36;
                if(number>=tip){
                    check1_mobile(3);
                }
                else {
                    check2_mobile(number%9,3);
                }
            });
        });
        $("#tipm4").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=45;
                if(number>=tip){
                    check1_mobile(4);
                }
                else {
                    check2_mobile(number%9,4);
                }
            });
        });
        $("#tipm5").click(function () {
            $.get("../php/Result.php",{name:test},function (data){
                var number=data.split(' ')[0];
                var tip=54;
                if(number>=tip){
                    check1_mobile(5);
                }
                else {
                    check2_mobile(number%9,5);
                }
            });
        });
        function check1_mobile(get) {
            $.get("../php/Result.php",{name:test},function (data) {
                // alert(data);
                var number=data.split(' ')[0];
                var tip=parseInt(number/9);
                var one=0;
                do {
                    $("li#tipm"+one).css('display','inline-block');
                    one++;
                } while(one<=tip);
                for(var count=1;count<=9;count++){
                    $("div#divm"+count).fadeOut(20);
                }
                for(var count=1;count<=9;count++){
                    $("div#divm"+count).fadeIn(200);
                }
                var go=36*get;
                go++;
                for(var start=0,$test=1,$come=go+1;start<9;start++){
                    document.getElementById("nm"+$test).innerHTML=data.split(" ",$come++)[go++];
                    document.getElementById("cm"+$test).innerHTML=data.split(" ",$come++)[go++];
                    document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$come++)[go++]);
                    document.getElementById("urlm"+$test).setAttribute("href",data.split(" ",$come++)[go++]);
                    $test++;
                }
            });
        }
        function check2_mobile(tell,say) {
            $.get("../php/Result.php",{name:test},function (data) {
                for(var count=1;count<=9;count++){
                    $("div#divm"+count).fadeOut(20);
                }
                for(var count=1;count<=tell;count++){
                    $("div#divm"+count).fadeIn(200);
                }
                var go=36*say;
                go++;
                for(var start=0,$test=1,$come=go+1;start<tell;start++){
                    document.getElementById("nm"+$test).innerHTML=data.split(" ",$come++)[go++];
                    document.getElementById("cm"+$test).innerHTML=data.split(" ",$come++)[go++];
                    document.getElementById("pm"+$test).setAttribute("src",data.split(" ",$come++)[go++]);
                    document.getElementById("urlm"+$test).setAttribute("href",data.split(" ",$come++)[go++]);
                    $test++;
                }
            });

        }
    }
    if(w>=1600&&w<1920){
        $("#check").css("width","8%");
        $("#header_div").css("width","50%");
        $(".leftarea").css("height","85%");
    }
    if(w>1366&&w<1600){
        $(".leftarea").css("width","12%");
        $(".rightarea").css("margin-right","3%");
        $("#header_div").css("width","50%");
        $("#check").css("width","8%");
        $(".leftarea").css("height","88%");
    }
    if(w==1600){
        $(".rightarea").css("height","85%");
    }
    if (w>1280&&w<=1366){
        $(".leftarea").css("width","12%");
        $(".rightarea").css("margin-right","3%");
        $("#header_div").css("width","50%");
        $("#check").css("width","8%");
        $(".leftarea").css("height","88%");
        $(".newarea").css("height","15%");
        $(".distribution").css("height","45%");
        $(".rightarea").css("height","96%");
    }
    if(w==1280){
        $(".rightarea").css("margin-right","3%");
        $(".leftarea").css("width","12%");
        $("#header_div").css("width","50%");
        $("#check").css("width","8%");
    }
    var test=localStorage.getItem('test'); // => 返回testKey对应的值
    var categories=localStorage.getItem('category'); // => 返回testKey对应的值
    var request=localStorage.getItem('requests');
    if(test) { //判断session是否为空
        localStorage.removeItem('requests');
        localStorage.removeItem('category');
        document.getElementById("request").innerHTML=test;
        $.get("../php/Result.php",{name:test},function (data) {    //利用GET将值利用php去查询Mysql数据库
            if(data==0)   //判断数据库中是否有相应结果
            {
                $('#warning').fadeIn();
                $('#warning-m').fadeIn();
            }
            else
            {
                $number=data.split(" ",1)[0];
                // alert($number);
                var get=parseInt($number/21);
                var one=0;
                do {
                    $("li#tip"+one).css('display','inline-block');
                    one++;
                } while(one<=get);
                $count=1;
                for(;$count<=$number;$count++){
                    $("div#div"+$count).fadeIn();
                }
                //将软件的各种信息通过for函数查询出来
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("name"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("company"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    document.getElementById("url"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                    $test++;
                }
            }
        });
    }
    if(categories){
        localStorage.removeItem('requests');
        localStorage.removeItem('category');
        document.getElementById("request").innerHTML=request;
        $.get("../php/Result2.php",{name:categories},function (data) {
            if(data==0)
            {
                $('#warning').fadeIn();
                $('#warning-m').fadeIn();
            }
            else
            {
                $number=data.split(" ",1)[0];
                // alert($number);
                var get=parseInt($number/21);
                var one=0;
                do {
                    $("li#tip"+one).css('display','inline-block');
                    one++;
                } while(one<=get);
                $count=1;
                for(;$count<=$number;$count++){
                    $("div#div"+$count).fadeIn();
                }
                //将软件的各种信息通过for函数查询出来
                for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                    document.getElementById("name"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("company"+$test).innerHTML=data.split(" ",$left++)[$right++];
                    document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                    document.getElementById("url"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                    $test++;
                }
            }
        });
    }
    $("button#check").click(function () {
        if($("#content").val().toLowerCase()){
            localStorage.removeItem('category');
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content").val().toLowerCase());
            window.location.reload();
        }
    });
    document.onkeydown = function(e) {
        //捕捉回车事件
        var ev = (typeof event!= 'undefined') ? window.event : e;
        if(ev.keyCode == 13) {
            localStorage.removeItem('category');
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content").val().toLowerCase());
            window.location.reload();
        }
    };
    $("button#check_mobile").click(function () {
        if($("#content_mobile").val().toLowerCase()){
            localStorage.removeItem('category');
            localStorage.removeItem('index');
            localStorage.removeItem('test');
            localStorage.setItem('test',$("#content_mobile").val().toLowerCase());
            window.location.reload();
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
    $("p#zhuangji").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#zhuangji").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#zhuangji").text());
        window.location.reload();
    });
    $("p#code").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#code").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#code").text());
        window.location.reload();
    });
    $("p#os").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#os").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#os").text());
        window.location.reload();
    });
    $("p#edit").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#edit").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#edit").text());
        window.location.reload();
    });
    $("p#other").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#other").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#other").text());
        window.location.reload();
    });
    $("p#canvas").click(function () {
        localStorage.removeItem('category');
        localStorage.removeItem('index');
        localStorage.removeItem('test');
        localStorage.removeItem('requests');
        localStorage.setItem('category',$("p#canvas").attr("ID").toLowerCase());
        localStorage.setItem('requests',$("p#canvas").text());
        window.location.reload();
    });
    $("#tip0").click(function () {
        $.get("../php/Result.php",{name:test},function (data){
            var number=data.split(' ')[0];
            var tip=21;
            if(number>=tip){
                check1(0);
            }
            else {
                check2(number%21,0);
            }
        });
    });
    $("#tip1").click(function () {
        $.get("../php/Result.php",{name:test},function (data){
            var number=data.split(' ')[0];
            var tip=42;
            if(number>=tip){
                check1(1);
            }
            else {
                check2(number%21,1);
            }
        });
    });
    $("#tip2").click(function () {
        $.get("../php/Result.php",{name:test},function (data){
            var number=data.split(' ')[0];
            var tip=63;
            if(number>=tip){
                check1(2);
            }
            else {
                check2(number%21,2);
            }
        });
    });
    function check1(get) {
        $.get("../php/Result.php",{name:test},function (data) {
            // alert(data);
            var number=data.split(' ')[0];
            var tip=parseInt(number/21);
            var one=0;
            do {
                $("li#tip"+one).css('display','inline-block');
                one++;
            } while(one<=tip);
            for(var count=1;count<=21;count++){
                $("div#div"+count).fadeOut(20);
            }
            for(var count=1;count<=21;count++){
                $("div#div"+count).fadeIn(200);
            }
            var go=84*get;
            go++;
            for(var start=0,$test=1,$come=go+1;start<21;start++){
                document.getElementById("name"+$test).innerHTML=data.split(" ",$come++)[go++];
                document.getElementById("company"+$test).innerHTML=data.split(" ",$come++)[go++];
                document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$come++)[go++]);
                document.getElementById("url"+$test).setAttribute("href",data.split(" ",$come++)[go++]);
                $test++;
            }
        });
    }
    function check2(tell,say) {
        $.get("../php/Result.php",{name:test},function (data) {
            for(var count=1;count<=21;count++){
                $("div#div"+count).fadeOut(20);
            }
            for(var count=1;count<=tell;count++){
                $("div#div"+count).fadeIn(200);
            }
        var go=84*say;
        go++;
        for(var start=0,$test=1,$come=go+1;start<tell;start++){
            document.getElementById("name"+$test).innerHTML=data.split(" ",$come++)[go++];
            document.getElementById("company"+$test).innerHTML=data.split(" ",$come++)[go++];
            document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$come++)[go++]);
            document.getElementById("url"+$test).setAttribute("href",data.split(" ",$come++)[go++]);
            $test++;
        }
    });

}
});
