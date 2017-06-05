<?php
if(isset($_GET['name'])&&isset($_GET['mail']))
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
    $sql="SELECT * FROM user_email WHERE mail='{$_GET['mail']}'";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            echo "已经有人注册了！";
        }
    }
    else{
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
        $sql2="INSERT INTO users (account) VALUES ('{$_GET['name']}')";
        $result2=$conn->query($sql2);
        if($result2->num_rows>0)
        {
            while($row1=$result2->fetch_all())
            {

            }
        }
        $sql1="INSERT INTO user_email (mail) VALUES ('{$_GET['mail']}')";
        $result1=$conn->query($sql1);
        if($result1->num_rows>0)
        {
            while($row1=$result1->fetch_all())
            {
                echo "注册成功！";
            }
        }

    }
    $conn->close();
}
?>