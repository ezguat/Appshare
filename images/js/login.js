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
    $('#click').click(function () {
         detectionbrowser();
         iptracket();
            detectOS();
            var localtime=new Date();
        localStorage.setItem('time',localtime);
        if($('#account').val()&&$('#password').val()){
            $.get("../php/login.php",{name:$('#account').val(),password:$('#password').val()},function (data) {
                if(data==false)
                {
                    document.getElementById('change').innerHTML="账号或密码错误！";
                    $("#change").css('color','red');
                }
                else{
                    //当前时间
                    var restoredSession =localStorage.getItem('ipaddress');
                    var browser=localStorage.getItem('browser');
                    var systemversion=localStorage.getItem('system');
                    var time=localStorage.getItem('time');
                    $.get("../php/login.php",{system:systemversion,browser:browser,time:dateObj,local_ip:restoredSession},function(data) {
                    });
                    sessionStorage.setItem('account',$('#account').val());
                    sessionStorage.setItem('passwd',$('#password').val());
                   // window.location.href="admin.html";
			alert(systemversion);
			alert(browser);
			alert(dateObj);
			alert(restoredSession);
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
        if (isMac) localStorage.setItem('system',"Mac") ;
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix)localStorage.setItem('system',"Unix") ;
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) localStorage.setItem('system',"Linux") ;
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) localStorage.setItem('system',"Win2000") ;
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) localStorage.setItem('system',"WinXP") ;
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) localStorage.setItem('system',"Win2003") ;
            var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) localStorage.setItem('system',"WinVista") ;
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) localStorage.setItem('system',"Win7") ;
            var isWin81 = sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows 8.1") > -1;
            if (isWin81) localStorage.setItem('system',"Win8.1") ;
            var isWin10 = sUserAgent.indexOf("Windows NT 6.4") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) localStorage.setItem('system',"Win10") ;
            var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) localStorage.setItem('system',"Win10") ;
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
        if (Sys.ie) localStorage.setItem('browser',('IE: ' + Sys.ie)) ;
        if (Sys.firefox) localStorage.setItem('browser',('Firefox: ' + Sys.firefox)) ;
        if (Sys.chrome) localStorage.setItem('browser',('Chrome: ' + Sys.chrome)) ;
        if (Sys.opera) localStorage.setItem('browser',('Opera: ' + Sys.opera)) ; 
        if (Sys.safari) localStorage.setItem('browser',('Safari: ' + Sys.safari)) ; 
    }
    function iptracket() {
        $.getJSON('//ip.jsontest.com/?callback=?', function(data) {
            localStorage.setItem('ipaddress', JSON.stringify(data, null, 2).split("}")[0].split(":")[1]);
        });
    }
});
