/**
 * Created by jackz on 2017/2/11.
 */
$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||window.screen.width;
    h=document.documentElement.clientHeight||window.screen.height;
    $('.desktop').css('height',h);
    $('.desktop').css('width',w);
    var email=$('#mail').val();
    var filter=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    $('button#myButton').click(function () {
        if(!filter.test(email))   //判断邮件是否按照的正则表达式
        {
            if($('#name').val()!=""&&$('#mail').val()!=""&&$('#advice').val()!=""){   //判断是否为空
                $.get("php/advice.php",{name:$('#name').val(),mail:$('#mail').val(),advice:$('#advice').val()},function (data) {
                    $('#succssful').fadeIn();
                });
            }
            else
            {
                $('#warning').fadeIn();
            }
        }
        else {
            $('#warning').fadeIn();
        }
    });
});
