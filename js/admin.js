$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    $.get("../php/admin.php",{tell:1},function (data) {
        document.getElementById("ip").innerText=data.split(",")[0];
        document.getElementById("browser").innerText=data.split(",")[1].split(":")[0];
        document.getElementById("system").innerText=data.split(",")[2];
        document.getElementById("time").innerText=data.split(",")[3];
        $("#ip").css('color','black');
        $("#time").css('color','black');
        $("#browser").css('color','black');
        $("#system").css('color','black');
    });
    $.get("../php/admin.php",{answer:1},function (data) {
        document.getElementById("webserver").innerText="Web服务器:"+data.split(",")[1];
        document.getElementById("php").innerText="PHP版本:"+data.split(",")[2];
        document.getElementById("mysql").innerText="Mysql版本:"+data.split(",")[3];
        document.getElementById("GD").innerText="GD库版本:"+data.split(",")[4];
        document.getElementById("freetype").innerText="Freetype:"+data.split(",")[5];
        document.getElementById("remotefile").innerText="远程文件获取:"+data.split(",")[6];
        document.getElementById("upload").innerText="最大上传大小:"+data.split(",")[7];
        document.getElementById("executivetime").innerText="最大执行时间:"+data.split(",")[8];
        document.getElementById("servertime").innerText="服务器时间:"+data.split(",")[9];
    });
    $.get("../php/admin.php",{directory:1},function (data) {
        // alert(data.split('+')[0].split('_')[1]);
        $long=data.split('+').length;
        // alert($long);
        for($start=1;$start<$long;$start++)
        {
            $("#"+$start).css('visibility','visible');
        }
        for($start=0,$jump=1;$start<$long;$start++,$jump=$jump+3){
            document.getElementById("1-"+$jump).innerText=data.split('+')[$start].split('^')[0];
            $now=$jump+1;
            document.getElementById("1-"+$now).innerText=data.split('+')[$start].split('^')[1]+"KB";
        }
    });
    $(document).ready(function () {
        $("a#file").on('click',function () {
            $(".rightareaup-info").css('display','none');
            $(".rightareaup-file").css('display','block');
        });
        $("a#info").on('click',function () {
            $(".rightareaup-file").css('display','none');
            $(".rightareaup-info").css('display','block');
        });
        $("a#first").on('click',function () {
            // alert("no");
            var start=1;
            for(;start<=60;start=start+3){
                document.getElementById("1-"+start).innerText="";
                var jump=start+1;
                document.getElementById("1-"+jump).innerText="";
            }
            $.get("../php/admin.php",{directory:1},function (data) {
                // alert(data.split('+')[0].split('_')[1]);
                $long=data.split('+').length;
                // alert($long);
                for($start=1;$start<$long;$start++)
                {
                    $("#"+$start).css('visibility','visible');
                }
                for($start=0,$jump=1;$start<$long;$start++,$jump=$jump+3){
                    document.getElementById("1-"+$jump).innerText=data.split('+')[$start].split('^')[0];
                    $now=$jump+1;
                    document.getElementById("1-"+$now).innerText=data.split('+')[$start].split('^')[1]+"KB";
                }
            });

            $("a#back").css('display','none');
        });
        $("a#back").on('click',function () {
                var storage=$("td#1-1").text();
                // localStorage.removeItem('sesion');
                var long=storage.split('/').length;
                var test=1;
                var storage1=storage.split('/')[0]+'/';
                while(test<long-2) {
                    storage1 = storage1 + storage.split('/')[test] + '/';
                    test++;
                }
                // alert(storage1)
                $.get("../php/admin.php",{tophp2:storage1},function (data) {
                    $long=data.split('+').length;
                    // alert($long);
                    for(one=1;one<=20;one++){
                        $("#"+one).css('visibility','hidden');
                    }
                    for($start=1;$start<$long;$start++)
                    {
                        $("#"+$start).css('visibility','visible');
                    }
                    for($start=0,$jump=1;$start<$long;$start++,$jump=$jump+3){
                        document.getElementById("1-"+$jump).innerText=data.split('+')[$start].split('^')[0];
                        $now=$jump+1;
                        document.getElementById("1-"+$now).innerText=data.split('+')[$start].split('^')[1]+"KB";
                    }
                });
        });
        $(".click").on('click',function () {
            $("a#back").css('display','inline-block');
        });
    });
    $(document).ready(function () {
        $("td#1-1").on('click',function () {
            tophp($("td#1-1").text());
            localStorage.removeItem('session');
            localStorage.setItem('session',$("td#1-1").text());
        });
        $("td#1-4").on('click',function () {
            tophp($("td#1-4").text());
            localStorage.removeItem('session');
            localStorage.setItem('session',$("td#1-4").text());
        });
        $("td#1-7").on('click',function () {
            tophp($("td#1-7").text());
            localStorage.removeItem('session');
            localStorage.setItem('session',$("td#1-7").text());
        });
    });
    function tophp(url) {
        var start=1;
        $.get("../php/admin.php",{tophp:url},function (data) {
        if(!data){
            alert("已经没有了!");
        }
        else {
                for(one=1;one<=20;one++){
                    $("#"+one).css('visibility','hidden');
                }
                long=data.split('+').length-1;
                for(one=1;one<=long;one++){
         $("#"+one).css('visibility','visible');
     }
                    for(start=1,jump=0;jump<long;start=start+3,jump++){
         document.getElementById("1-"+start).innerText=data.split('+')[jump].split('^')[0];
         var one=start+1;
         document.getElementById("1-"+one).innerText=data.split('+')[jump].split('^')[1]+'B';
     }
        }
        });
    }
});