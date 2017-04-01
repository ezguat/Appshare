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
});