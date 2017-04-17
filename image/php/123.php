<?php
$link=mysqli_connect("localhost","alpha","123456"); 
if(!$link) echo "FAILD!连接错误，用户名密码不对"; 
else echo "OK!可以连接"; 
?> 
