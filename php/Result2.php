<?php
if(isset($_GET['name']))
{
    $singal=$_GET['name'];
    $servername="localhost";
    $username="alpha";
    $password="123456";
    $dbname="zhuangji";
    $count=0;
//创建连接
    $conn=new mysqli ($servername,$username,$password,$dbname);
//检测连接
    if($conn->connect_error){
        die("连接失败:".$conn->connect_error);
    }
//    模糊查询是否有该软件或者相关的
    $sql="SHOW tables;";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            $lenth=count($row);
            print_r($lenth);
            print_r(" ");
            for($number=0;$number<$lenth;$number++)
            {
                $want=$row[$number][0];
                $sql=" SELECT ID,company,picture,URL FROM $want;";
                $result=$conn->query($sql);
                if($result->num_rows>0)
                {
                    while($row=$result->fetch_all())
                    {
                        for($back=0;$back<=3;$back++){
                            print_r($row[0][$back]);
                            print_r(" ");
                        }
                    }
                }
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