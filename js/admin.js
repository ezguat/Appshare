$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
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
