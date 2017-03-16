$(document).ready(function () {
    var h;
    var w;
    w=document.documentElement.clientWidth||document.body.clientWidth;
    h=document.documentElement.clientHeight||document.body.clientHeight;
    $('body').css('height',h);
    $('body').css('width',w);
    $('#click').click(function () {
        $.get("../php/login.php",{name:$('#account').val(),password:$('#password').val()},function (data) {
            if(data==0)
            {
                alert(data);
            }            else{
                alert(data);
            }
        });
    });
});

