$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('body').css('height',h);
    $('body').css('width',w);
    var cookies=document.cookie.split(";")[0].split("=")[1];
    $('p#request').innerText=cookies;
    $.get("php/Result.php",{name:cookies},function (data) {
        if(data==0)
        {
            window.location.href="advice.html";
        }
        else
        {
            $number=data.split(" ",1)[0];
            $count=1;
           for(;$count<=$number;$count++){
               $("div#div"+$count).fadeIn();
            }
           for($left=2,$right=1,$test=1,$start=0;$start<$number;$start++){
                document.getElementById("name"+$test).innerHTML=data.split(" ",$left++)[$right++];
                document.getElementById("company"+$test).innerHTML=data.split(" ",$left++)[$right++];
                document.getElementById("picture"+$test).setAttribute("src",data.split(" ",$left++)[$right++]);
                document.getElementById("url"+$test).setAttribute("href",data.split(" ",$left++)[$right++]);
                $test++;
            }
        }
});
});
