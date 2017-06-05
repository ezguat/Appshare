<?php
if(isset($_GET['comment']))
{
    $servername="localhost";
    $username="alpha";
    $password="123456";
    $dbname="comments";
//创建连接
    $conn=new mysqli ($servername,$username,$password,$dbname);
//检测连接
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
//    模糊查询是否有该软件或者相关的
    $sql="SELECT * from {$_GET['comment']} where 1 order by dates desc";
    $result=$conn->query($sql);
       if($result->num_rows>0)
    {
        while($row1=$result->fetch_all())
        {

            $length=sizeof($row1);
            echo $length;
            echo ";";
            for($start1=0;$start1<$length;$start1++)
            {
                for($start2=0;$start2<3;$start2++)
                {
                    print_r($row1[$start1][$start2]);
                    echo ";";
                }
            }

        }
    }
    else{

        echo 0;
    }
    $conn->close();
}
if(isset($_GET['comment1'])&&isset($_GET['user'])&&isset($_GET['user_comment'])&&isset($_GET['time']))
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
    $sql="SELECT * from users WHERE account ='{$_GET['user']}'";
    $result1=$conn->query($sql);
    if($result1->num_rows>0)
    {
        while($row=$result1->fetch_all())
        {
            $servername="localhost";
            $username="alpha";
            $password="123456";
            $dbname="comments";
            $conn=new mysqli ($servername,$username,$password,$dbname);
            if($conn->connect_error){
                die("连接失败:".$conn->connect_error);
            }
            $sql="INSERT INTO {$_GET['comment1']} (users,dates,comments) VALUES ('{$_GET['user']}','{$_GET['time']}','{$_GET['user_comment']}') ";
            $result=$conn->query($sql);
            if($result->num_rows>0)
            {
                while($row1=$result->fetch_all())
                {
//                    print_r("done");
                }
            }
//            else{
//
//                echo "插入失败";
//            }
        }
    }
    else{

        echo "用户名不存在！";
    }
//    模糊查询是否有该软件或者相关的
    $conn->close();
}
?>