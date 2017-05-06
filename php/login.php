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
                echo true;
            }
        }
    }
    else{
        echo false;

    }
    $conn->close();
}
if(isset($_GET['system'])&&isset($_GET['browser'])&&isset($_GET['time'])&&isset($_GET['local_ip'])){
    $servername="localhost";
    $username="alpha";
    $password="123456";
    $dbname="administration";
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error){
     die("连接失败: " . $conn->connect_error);
}
//创建连接
$conn=new mysqli ($servername,$username,$password,$dbname);
$sql="INSERT INTO login_log (ip,browser,system,local_time) VALUES (''{$_GET['local_ip']}'','{$_GET['browser']}','{$_GET['system']}','{$_GET['time']}')";

if ($conn->query($sql) === TRUE) {
     echo "新记录插入成功";
} else {
     echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
}
?>
