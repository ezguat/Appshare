$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    if(w>414&&w<=1600){
        $("div#file1").css('height','70%');
        $("div#adt").css('margin-top','-3%');
        $("p#mesgp").css('margin-top','-1%');
    }
    if(w>1280&&w<=1400)
    {
        $("#form-1").css('margin-top','-7%');
        $("#info-1").css('height','50%');
        $("#info-2").css('width','24%');
    }
    if(w<=414)
    {
        $('.leftarea').css('display','none');
        $('.rightareaup-info').css('display','none');
        $('.rightareaup-file').css('display','none');
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal',
            pagination : '.swiper-pagination',
            paginationType : 'fraction',
            autoplay:4000,
            autoplayDisableOnInteraction : false,
            grabCursor : true,
            DisableOnInteraction:true,
        });
        $.get("../php/admin.php",{name:sessionStorage.getItem('account'),password:sessionStorage.getItem('passwd')},function (data) {
            if(data==true){
                document.getElementById("hello").innerText=sessionStorage.getItem('account')+",你好！";
                $.get("../php/admin.php",{tell:1},function (data) {
                    document.getElementById("ip-mobile").innerText=data.split(",")[0];
                    document.getElementById("browser-mobile").innerText=data.split(",")[1].split(":")[0];
                    document.getElementById("system-mobile").innerText=data.split(",")[2];
                    document.getElementById("time-mobile").innerText=data.split(",")[3];
                    $("#ip-mobile").css('color','black');
                    $("#time-mobile").css('color','black');
                    $("#browser-mobile").css('color','black');
                    $("#system-mobile").css('color','black');
                });
                $.get("../php/admin.php",{answer:1},function (data) {
                    document.getElementById("webserver-mobile").innerText="Web服务器:"+data.split(",")[1];
                    document.getElementById("php-mobile").innerText="PHP版本:"+data.split(",")[2];
                    document.getElementById("mysql-mobile").innerText="Mysql版本:"+data.split(",")[3].split("-")[0];
                    document.getElementById("GD-mobile").innerText="GD库版本:"+data.split(",")[4];
                    document.getElementById("freetype-mobile").innerText="Freetype:"+data.split(",")[5];
                    document.getElementById("remotefile-mobile").innerText="远程文件获取:"+data.split(",")[6];
                    document.getElementById("upload-mobile").innerText="最大上传大小:"+data.split(",")[7];
                    document.getElementById("executivetime-mobile").innerText="最大执行时间:"+data.split(",")[8];
                    document.getElementById("servertime-mobile").innerText="服务器时间:"+data.split(",")[9];
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
                $.get("../php/admin.php",{port:1},function (data) {
                    if(data){
                        document.getElementById("ftp-mobile").innerText="Ftp(21):"+data.split(';')[0];
                        document.getElementById("My-mobile").innerText="Mysql(3306):"+data.split(';')[1];
                        document.getElementById("ssh-mobile").innerText="SSH(22):"+data.split(';')[2];
                        document.getElementById("tel-mobile").innerText="Telnet(23):"+data.split(';')[3];
                    }
                    else {
                        document.getElementById("ftp-mobile").innerText="Ftp(21):close";
                        document.getElementById("My-mobile").innerText="Mysql(3306):close";
                        document.getElementById("ssh-mobile").innerText="SSH(22):close";
                        document.getElementById("tel-mobile").innerText="Telnet(23):close";
                    }
                });
            }
            else {
                window.location.href="../content/login.html";
            }
        });
    }
    $.get("../php/admin.php",{name:sessionStorage.getItem('account'),password:sessionStorage.getItem('passwd')},function (data) {
        if(data==true){
            document.getElementById("hello").innerText=sessionStorage.getItem('account')+",你好！";
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
                 document.getElementById("mysql").innerText="Mysql版本:"+data.split(",")[3].split("-")[0];
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
            $.get("../php/admin.php",{port:1},function (data) {
                if(data){
                    document.getElementById("ftp").innerText="Ftp(21):"+data.split(';')[0];
                    document.getElementById("My").innerText="Mysql(3306):"+data.split(';')[1];
                    document.getElementById("ssh").innerText="SSH(22):"+data.split(';')[2];
                    document.getElementById("tel").innerText="Telnet(23):"+data.split(';')[3];
                }
                else {
                    document.getElementById("ftp").innerText="Ftp(21):close";
                    document.getElementById("My").innerText="Mysql(3306):close";
                    document.getElementById("ssh").innerText="SSH(22):close";
                    document.getElementById("tel").innerText="Telnet(23):close";
                }
            });
        $("#tip0").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                // alert(number);
                var tip=12;
                if(number>=tip){
                    check1(0);
                }
                else {
                    check2(number%12,0);
                }
            });
        });
        $("#tip1").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=24;
                if(number>=tip){
                    check1(1);
                }
                else {
                    check2(number%12,1);
                }
            });
        });
        $("#tip2").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=36;
                if(number>=tip){
                    check1(2);
                }
                else {
                    check2(number%12,2);
                }
            });
        });
        $("#tip3").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=48;
                if(number>=tip){
                    check1(3);
                }
                else {
                    check2(number%12,3);
                }
            });
        });
        $("#tip4").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=60;
                if(number>=tip){
                    check1(4);
                }
                else {
                    check2(number%12,4);
                }
            });
        });
        $("#tip5").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=72;
                if(number>=tip){
                    check1(5);
                }
                else {
                    check2(number%12,5);
                }
            });
        });
        $("#tip6").click(function () {
            $.get("../php/admin.php",{advice:1},function (data){
                var number=data.split(';')[0];
                var tip=84;
                if(number>=tip){
                    check1(6);
                }
                else {
                    check2(number%12,6);
                }
            });
        });
        function check1(get) {
            $.get("../php/admin.php",{advice:1},function (data) {
                // alert(data);
                var number=data.split(';')[0];
                var tip=parseInt(number/12);
                var one=0;
                do {
                    $("li#tip"+one).css('display','inline-block');
                    one++;
                } while(one<=tip);
                for(var count=0;count<=11;count++){
                    $("td#t"+count).fadeOut(10);
                    for(var jump=(4*count);jump<=4*(count+1);jump++){
                        $("td#td"+jump).fadeOut(10);
                    }
                }
                for(var count=0;count<=11;count++){
                    $("td#t"+count).fadeIn(10);
                    for(var jump=(4*count);jump<=4*(count+1);jump++){
                        $("td#td"+jump).fadeIn(10);
                    }
                }
                var go=48*get;
                go++;
                for(var two=0;two<number;two++){
                    for(var three=(4*two)+1;three<=4*(two+1);three++){
                        document.getElementById("td"+three).innerHTML=data.split(";")[go++];
                    }
                }
            });
        }
        function check2(tell,say) {
            $.get("../php/admin.php",{advice:1},function (data) {
                for(var count=0;count<=11;count++){
                    $("td#t"+count).fadeOut(10);
                    for(var jump=(4*count);jump<=4*(count+1);jump++){
                        $("td#td"+jump).fadeOut(10);
                    }
                }
                for(var count=0;count<tell;count++){
                    $("td#t"+count).fadeIn(10);
                    for(var jump=(4*count);jump<=4*(count+1);jump++){
                        $("td#td"+jump).fadeIn(10);
                    }
                }
                var come=48*say;
                come++;
                for(var count=0;count<tell;count++){
                    for(var three=(4*count)+1;three<=4*(count+1);three++){
                        document.getElementById("td"+three).innerHTML=data.split(";")[come++];
                    }
                }
            });

        }
            $(document).ready(function () {
                $("a#file1").on('click',function () {
                    $(".rightareaup-info").css('display','none');
                    $(".rightareaup-file").css('display','block');
                    $(".rightareaup-mesg").css('display','none');
                });
                $("a#info").on('click',function () {
                    $(".rightareaup-file").css('display','none');
                    $(".rightareaup-info").css('display','block');
                    $(".rightareaup-mesg").css('display','none');
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
                $("a#message").on('click',function () {
                    $(".rightareaup-file").css('display','none');
                    $(".rightareaup-info").css('display','none');
                    $(".rightareaup-mesg").css('display','block');
                    $.get("../php/admin.php",{advice:1},function (data) {
                        document.getElementById("mesgp").innerText="共有"+data.split(";")[0]+"条留言记录";
                        var number=data.split(";")[0];
                        // alert($number);
                        var get=parseInt(number/12);
                        var one=0;
                        do {
                            $("li#tip"+one).css('display','inline-block');
                            one++;
                        } while(one<=get);
                        for(var start=0;start<number;start++){
                            for(var jump=(4*start);jump<=4*(start+1);jump++){
                                $("td#td"+jump).fadeIn();
                                $("td#t"+start).fadeIn();
                            }
                        }
                        // 将软件的各种信息通过for函数查询出来
                        for(var two=0;two<number;two++){
                            for(var three=(4*two)+1,go=three;three<=4*(two+1);three++){
                                document.getElementById("td"+three).innerHTML=data.split(";")[go++];
                            }
                        }
                    });

                });
                $("a#first").on('click',function () {
                    // alert("no");
                    var start=1;
                    for(;start<=60;start=start+3){
                        document.getElementById("1-"+start).innerText="";
                        var jump=start+1;
                        document.getElementById("1-"+jump).innerText="";
                    }
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
                    // alert(storage1)
                });
                $(".click").on('click',function () {
                    $("a#back").css('display','inline-block');
                });
                $("a#refresh").on('click',function () {
                    var storage=$("td#1-1").text();
                    // localStorage.removeItem('sesion');
                    var long=storage.split('/').length;
                    var test=1;
                    var storage1=storage.split('/')[0]+'/';
                    while(test<long-1) {
                        storage1 = storage1 + storage.split('/')[test] + '/';
                        test++;
                    }
                    // alert(storage1);
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
                $("td#1-10").on('click',function () {
                    tophp($("td#1-10").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-10").text());
                });
                $("td#1-13").on('click',function () {
                    tophp($("td#1-13").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-13").text());
                });
                $("td#1-16").on('click',function () {
                    tophp($("td#1-16").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-16").text());
                });
                $("td#1-19").on('click',function () {
                    tophp($("td#1-19").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-19").text());
                });
                $("td#1-22").on('click',function () {
                    tophp($("td#1-22").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-22").text());
                });
                $("td#1-25").on('click',function () {
                    tophp($("td#1-25").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-25").text());
                });
                $("td#1-28").on('click',function () {
                    tophp($("td#1-28").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-28").text());
                });
                $("td#1-31").on('click',function () {
                    tophp($("td#1-31").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-31").text());
                });
                $("td#1-34").on('click',function () {
                    tophp($("td#1-34").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-34").text());
                });
                $("td#1-37").on('click',function () {
                    tophp($("td#1-37").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-37").text());
                });
                $("td#1-40").on('click',function () {
                    tophp($("td#1-40").text());
                    localStorage.removeItem('session');
                    localStorage.setItem('session',$("td#1-40").text());
                });
            });
            $(document).ready(function () {
            $("a#1-3-delete").on('click',function () {
                $.get("../php/admin.php",{delete:$("td#1-1").text()},function (data) {
                                         tell(data);
                });
            });
            $("a#1-6-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-4").text()},function (data) {
                        tell(data);
                    });
                });
            $("a#1-9-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-7").text()},function (data) {
                        tell(data);
                    });
                });
            $("a#1-12-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-10").text()},function (data) {
                        tell(data);
                    });
                });
            $("a#1-15-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-13").text()},function (data) {
                        tell(data);
                    });
            });
            $("a#1-18-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-16").text()},function (data) {
                        tell(data);
                    });
                });
            $("a#1-21-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-19").text()},function (data) {
                        tell(data);
                    });
                });
                $("a#1-24-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-22").text()},function (data) {
                        tell(data);
                    });
                });
                $("a#1-27-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-25").text()},function (data) {
                        tell(data);
                    });
                });
                $("a#1-30-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-28").text()},function (data) {
                        tell(data);
                    });
                });
                $("a#1-33-delete").on('click',function () {
                    $.get("../php/admin.php",{delete:$("td#1-31").text()},function (data) {
                        tell(data);
                    });
                });
                function tell(data) {
                    if(data==0){
                        alert("请删除文件!");
                    }
                    else {
                        alert("成功删除！");
                    }
                }
            });
            $(document).ready(function () {
                $("a#paste1").on('click',function () {
                    var storage=$("td#1-1").text();
                    var long=storage.split('/').length;
                    var test=1;
                    var storage1=storage.split('/')[0]+'/';
                    while(test<long-1) {
                        storage1 = storage1 + storage.split('/')[test] + '/';
                        test++;
                    }
                     var cut2=localStorage.getItem('cut1');
                     var long1=cut2.split('/').length;
                    storage1=storage1+cut2.split('/')[long1-1];
                    $.get("../php/admin.php",{cut2:storage1,cut1:cut2},function (data) {
                      tell(data);
                    });
                });
                $("a#1-3-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-1").text());
                });
                $("a#1-6-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-4").text());
                });
                $("a#1-9-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-7").text());
                });
                $("a#1-12-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-10").text());
                });
                $("a#1-15-move").on('click',function () {
                   $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-13").text());
                });
                $("a#1-18-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-16").text());
                });
                $("a#1-21-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-19").text());
                });
                $("a#1-24-move").on('click',function () {
                    $("a#paste").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-22").text());
                });
                $("a#1-27-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-25").text());
                });
                $("a#1-30-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-28").text());
                });
                $("a#1-33-move").on('click',function () {
                    $("a#paste1").css('display','inline-block');
                    localStorage.setItem('cut1',$("td#1-31").text());
                });
                function tell(data) {
                    if(data==1){
                        alert("移动文件成功!");
                    }
                }
            });
            $(document).ready(function () {
                $("a#paste2").on('click',function () {
                    var storage=$("td#1-1").text();
                    var long=storage.split('/').length;
                    var test=1;
                    var storage1=storage.split('/')[0]+'/';
                    while(test<long-1) {
                        storage1 = storage1 + storage.split('/')[test] + '/';
                        test++;
                    }
                    var copy1=localStorage.getItem('copy1');
                    var long1=copy1.split('/').length;
                    storage1=storage1+copy1.split('/')[long1-1];
                    $.get("../php/admin.php",{copy2:storage1,copy1:copy1},function (data) {
                        copytell(data);
                    });
                    var jump=localStorage.getItem('session');
                    tophp(jump);
                });
                $("a#1-3-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-1").text());
                });
                $("a#1-6-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-4").text());
                });
                $("a#1-9-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-7").text());
                });
                $("a#1-12-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-10").text());
                });
                $("a#1-15-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-13").text());
                });
                $("a#1-18-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-16").text());
                });
                $("a#1-21-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-19").text());
                });
                $("a#1-24-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-22").text());
                });
                $("a#1-27-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-25").text());
                });
                $("a#1-30-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-28").text());
                });
                $("a#1-33-copy").on('click',function () {
                    $("a#paste2").css('display','inline-block');
                    localStorage.setItem('copy1',$("td#1-31").text());
                });
                function copytell(data) {
                    if(data==1){
                        alert("复制文件成功!");
                    }
                }
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
        }
        else {
            window.location.href="../content/login.html";
        }
    });
});
