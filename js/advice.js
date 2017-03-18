$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    if(w<414)
    {
        $(".desktop").css('display','none');
        $(".mobile").css('display','block');
    }
    var filter=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    $('button#myButton').click(function () {
        if(filter.test($('#mail').val()))   //判断邮件是否按照的正则表达式
        {
            if($('#name').val()!=""&&$('#mail').val()!=""&&$('#advice').val()!=""){   //判断是否为空
                $.get("php/advice.php",{name:$('#name').val(),mail:$('#mail').val(),advice:$('#advice').val()},function (data) {
                    $('#warning').fadeOut();
                    $('#succssful').fadeIn();
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
    });
    $('button#myButton_mobile').click(function () {
        if(filter.test($('#mail_mobile').val()))   //判断邮件是否按照的正则表达式
        {
            if($('#name_mobile').val()!=""&&$('#mail_mobile').val()!=""&&$('#advice_mobile').val()!=""){   //判断是否为空
                $.get("php/advice.php",{name:$('#name_mobile').val(),mail:$('#mail_mobile').val(),advice:$('#advice_mobile').val()},function (data) {
                    $('#warning_mobile').fadeOut();
                    $('#succssful_mobile').fadeIn();
                });
            }
            else
            {
                $('#succssful_mobile').fadeOut();
                $('#warning_mobile').fadeIn();
            }
        }
        else {
            $('#succssful_mobile').fadeOut();
            $('#warning_mobile').fadeIn();
        }
    });
});
