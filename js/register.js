$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    if(1360<=w&&w<=1366){
        $("p#font").css("font-size","small");
    }
    var filter=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    $("#register").click(function () {
        if(filter.test($('#mail').val()))   //判断邮件是否按照的正则表达式
        {
            var userlong=$("#user").val().length;
            var commentlong=$("#mail").val().length;
            if($('#user').val()!=""&&$('#mail').val()!=""&&userlong<=5&&commentlong<=12){   //判断是否为空
                $.get("../php/register.php",{name:$('#user').val(), mail:$('#mail').val()},function (data) {
                    tell(data);
                });
            }
            else
            {
                $('#succssful').fadeOut();
                $('#warning').fadeIn();
            }
        }
        else {
            $('#succssful').fadeOut();
            $('#warning').fadeIn();
        }
        function tell(data) {
            if(!data){
                alert("注册成功！");
            }
        }
    });
});
