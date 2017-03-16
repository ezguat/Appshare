<?php
if(isset($_GET['name'])&&isset($_GET['password']))
{
    $servername="localhost";
    $username="alpha";
    $password="123456";
    $dbname="administration";
//创建连接
    $conn=new mysqli ($servername,$username,$password,$dbname);
//检测连接
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
    $sql="SELECT password FROM admin WHERE account='{$_GET['name']}'";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            if($row[0][0]==$_GET['password']){
                echo 1;
            }
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