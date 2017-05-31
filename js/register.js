$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    var filter=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    $("#register").click(function () {
        alert(document.getElementById('mail').val());
        // if(filter.test($('#mail').val()))   //判断邮件是否按照的正则表达式
        // {
        //     if($('#name').val()!=""&&$('#mail').val()!=""){   //判断是否为空
        //         $.get("../php/register.php",{name:document.getElementById('user').textContent, mail:document.getElementById('mail').textContent},function (data) {});
        //     }
        //     else
        //     {
        //         $('#succssful').fadeOut();
        //         $('#warning').fadeIn();
        //     }
        // }
        // else {
        //     $('#succssful').fadeOut();
        //     $('#warning').fadeIn();
        // }
    });
});
