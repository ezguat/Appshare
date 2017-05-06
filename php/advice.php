<?php
if(isset($_GET['name'])&&isset($_GET['mail'])&&isset($_GET['advice']))
{
    $servername="localhost";
    $username="alpha";
    $password="123456";
    $dbname="advice";
//创建连接
    $conn=new mysqli ($servername,$username,$password,$dbname);
//检测连接
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
    $sql="INSERT INTO advices (users,mail,advice) VALUES ('{$_GET['name']}','{$_GET['mail']}','{$_GET['advice']}')";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            print_r("done");
        }
    }
    else{

        echo 0;
    }
    $conn->close();
}
else
{
    echo"error";
}
?>