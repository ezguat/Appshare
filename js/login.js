$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    if(w>=1360&&w<=1366)
    {
        $("#account").css('width','150%');
        $("#password").css('width','150%');
        $("#click").css('margin-top','-10%');
        $("#click").css('height','9%');
        $("#click").css('margin-left','70%');
    }
    if(w<=1280)
    {
        $("#account").css('width','150%');
        $("#password").css('width','150%');
        $("#click").css('margin-top','-10%');
        $("#click").css('height','6%');
        $("#click").css('margin-left','73%');
    }
    iptracket();
    var restoredSession =localStorage.getItem('session');
    $('#click').click(function () {
        if($('#account').val()&&$('#password').val()){
            $.get("../php/login.php",{name:$('#account').val(),password:$('#password').val()},function (data) {
                if(data==0)
                {
                    document.getElementById('change').innerHTML="账号或密码错误！";
                    $("#change").css('color','red');
                }
                else{
                    dateObj=new Date();//当前时间
                    $.get("../php/login.php",{system:detectOS(),browser:detectionbrowser(),time:dateObj,local_ip:restoredSession},function(data) {
                    });
                    window.location.href="admin.html";
                }
            });
        }
        else {
                document.getElementById('change').innerHTML="输入不能为空!";
                $("#change").css('color','#B9833B');
        }
    });
    function detectOS() {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) return "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) return "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) return "Linux";
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) return "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) return "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) return "Win2003";
            var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) return "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) return "Win7";
            var isWin81 = sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows 8.1") > -1;
            if (isWin81) return "Win8.1";
            var isWin10 = sUserAgent.indexOf("Windows NT 6.4") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) return "Win10";
            var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) return "Win10";
        }
        return "other";
    }
    function detectionbrowser() {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
                (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                        (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
        /*以下进行测试*/
        if (Sys.ie) return ('IE: ' + Sys.ie);
        if (Sys.firefox) return('Firefox: ' + Sys.firefox);
        if (Sys.chrome) return('Chrome: ' + Sys.chrome);
        if (Sys.opera) return('Opera: ' + Sys.opera);
        if (Sys.safari) return('Safari: ' + Sys.safari);
        if (Sys.ie == 6.0){return ("fuck!")}
    }
    function iptracket() {
        $.getJSON('//ip.jsontest.com/?callback=?', function(data) {
            localStorage.setItem('session', JSON.stringify(data, null, 2).split("}")[0].split(":")[1]);
        });
    }
});
