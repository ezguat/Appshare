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
});
