$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    $('#click').click(function () {
        if($('#account').val()&&$('#password').val()){
            $.get("php/login.php",{name:$('#account').val(),password:$('#password').val()},function (data) {
                if(data==0)
                {
                    document.getElementById('change').innerHTML="账号或密码错误！";
                    $("#change").css('color','red');
                }
                else{
                    window.location.href="admin.html";
                }
            });

        }
        else {
                document.getElementById('change').innerHTML="输入不能为空!";
                $("#change").css('color','#B9833B');
        }
    });
});

