<?php

    if ($_FILES["file"]["error"] > 0)
    {
        echo "错误：" . $_FILES["file"]["error"] . "<br>";
    }
    else
    {
//        if (isset($_GET['address'])){
        echo "上传文件名: " . $_FILES["file"]["name"] . "<br>";
        echo "文件类型: " . $_FILES["file"]["type"] . "<br>";
        echo "文件大小: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
      //  echo "文件临时存储的位置: " . $_FILES["file"]["tmp_name"] . "<br>";
        move_uploaded_file($_FILES["file"]["tmp_name"], "/var/www/html/upload/" . $_FILES["file"]["name"]);
       // echo "文件存储在: " . "/var/www/html/upload/" . $_FILES["file"]["name"];
//        }
    }
?>
