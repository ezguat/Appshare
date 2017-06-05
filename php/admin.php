<?php
if(isset($_GET['tell']))
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
    $sql="SELECT * FROM login_log where 1 order by local_time desc";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
                $lenth=sizeof($row);
                $start=0;
                for(;$start<4;$start++)
                {
                    print_r($row[0][$start]);
                    print_r(",");
                }
        }
    }
    else{
        echo 0;
    }
    $conn->close();
}
if(isset($_GET['answer']))
{
    $sysos = $_SERVER["SERVER_SOFTWARE"]; //获取服务器标识的字串
    $sysversion = PHP_VERSION;//获取PHP服务器版本
//以下两条代码连接MySQL数据库并获取MySQL数据库版本信息
    mysqli_connect("localhost", "alpha", "123456");
    $mysqlinfo=mysqli_get_client_info();
//从服务器中获取GD库的信息
    if(function_exists("gd_info")){
        $gd = gd_info();
        $gdinfo = $gd['GD Version'];
    }else {
        $gdinfo = "未知";
    }
//从GD库中查看是否支持FreeType字体
    $freetype = $gd["FreeType Support"] ? "支持" : "不支持";
//从PHP配置文件中获得是否可以远程文件获取
    $allowurl= ini_get("allow_url_fopen") ? "支持" : "不支持";
//从PHP配置文件中获得最大上传限制
    $max_upload = ini_get("file_uploads") ? ini_get("upload_max_filesize") : "Disabled";
//从PHP配置文件中获得脚本的最大执行时间
    $max_ex_time= ini_get("max_execution_time")."秒";
//以下两条获取服务器时间，中国大陆采用的是东八区的时间,设置时区写成Etc/GMT-8
    date_default_timezone_set("Etc/GMT-8");
    $systemtime = date("Y-m-d H:i:s",time());
    echo " 系统信息,";
    echo "$sysos,";
    echo "$sysversion,";
    echo "$mysqlinfo,";
    echo "$gdinfo,";
    echo "$freetype,";
    echo "$allowurl,";
    echo "$max_upload,";
     echo "$max_ex_time,";
    echo "$systemtime,";
}
if(isset($_GET['directory']))
{
    //功能：遍历指定目录下所有文件
     function scan_dir($dir_name,$dir_flag=1) {
        static $FILE_COUNT=1;//记录文件数目 初值为1
        $FILE_COUNT--;//每调用一次scan_dir()函数自减1
        @$dir_handle=opendir($dir_name);//禁止错误信息显示，这样有利于自定义错误显示
        if(!$dir_handle)die("目录打开失败！");
        while(false!==($filename=readdir($dir_handle))){//文件名为'0'时，readdir返回FALSE，判断返回值是否不全等
            $flag=$dir_flag;
//当$filename不存在或者不是目录时返回false
            if($filename!='.'&&$filename!='..'){
                $FILE_COUNT++;//不记录当前路径和上一级路径
                while($flag>0&&--$flag) //负数仍为真
                    echo '';
                if(is_dir($dir_name.$filename)){//判断是否是目录
                    echo ''.$dir_name.$filename."";
                    echo '^';
                    echo floor(dirsize($dir_name.$filename)/1024);
                    echo '+';
                }
            }
        }closedir($dir_handle);//关闭目录句柄
    }
    scan_dir("/var/www/html/");
}
if(isset($_GET['port']))
{
    $server = "127.0.0.1";//检测的服务地址，如果是本地及用127.0.0.1或者localhost即可，如果其他window服务地址则用其ip地址即可。
    $port = "21";//我们要检测制定端口号
    $port3306 = "3306";//我们要检测制定端口号
    $port22 = "22";//我们要检测制定端口号
    $port23 = "23";//我们要检测制定端口号
    $timeout = "2";//这个地方是超时时间，即2秒钟，可以随意设定
    if(fsockopen("$server", $port, $errno, $errstr, $timeout)) {
        echo "The port_21 is online;";
    }
    else{
        echo "The port_21 is close;";
    }
    if(fsockopen("$server", $port3306, $errno, $errstr, $timeout)) {
        echo "The port_3306 is online;";
    }
    else{
        echo "The port_3306 is close;";
    }
    if(fsockopen("$server", $port22, $errno, $errstr, $timeout)) {
        echo "The port_22 is online;";
    }
    else{
        echo "The port_22 is close;";
    }
    if(fsockopen("$server", $port23, $errno, $errstr, $timeout)) {
        echo "The port_23 is online;";
    }
    else{
        echo "The port_23 is close;";
    }
 
}
function dirsize($path)
{
    $size = 0;
    $handle = opendir($path);
    while (($item = readdir($handle)) !== false) {
        if ($item == '.' || $item == '..') continue;
        $_path = $path . '/' . $item;
        if (is_file($_path)) $size += filesize($_path);
        if (is_dir($_path)) $size += dirsize($_path);
    }
    closedir($handle);
    return $size;
}
if (isset($_GET['tophp'])){
    $address=$_GET['tophp'];
        function scan_dir($dir_name,$dir_flag=1) {
            if(is_dir($dir_name)){
                static $FILE_COUNT=1;//记录文件数目 初值为1
                $FILE_COUNT--;//每调用一次scan_dir()函数自减1
                @$dir_handle=opendir($dir_name);//禁止错误信息显示，这样有利于自定义错误显示
                if(!$dir_handle)die("目录打开失败！");
                while(false!==($filename=readdir($dir_handle))){//文件名为'0'时，readdir返回FALSE，判断返回值是否不全等
                    $flag=$dir_flag;
//当$filename不存在或者不是目录时返回false
                    if($filename!='.'&&$filename!='..'){
                        $FILE_COUNT++;//不记录当前路径和上一级路径
                        while($flag>0&&--$flag) //负数仍为真
                            echo '';
                        if(is_dir($dir_name)){//判断是否是目录
                            echo $dir_name.'/'.$filename;
                            echo '^';
                            echo floor(filesize($dir_name.'/'.$filename));
                            echo '+';
                        }
                        else {

                        };
                    }
                }
                closedir($dir_handle);//关闭目录句柄
            }
        }
    scan_dir("$address");
}
if (isset($_GET['tophp2'])){
    $address=$_GET['tophp2'];
    $add="/var/www/";
    $ad="/var";
    $a="/";
    function scan_dir($dir_name,$dir_flag=1) {
        if(is_dir($dir_name)){
            static $FILE_COUNT=1;//记录文件数目 初值为1
            $FILE_COUNT--;//每调用一次scan_dir()函数自减1
            @$dir_handle=opendir($dir_name);//禁止错误信息显示，这样有利于自定义错误显示
            if(!$dir_handle)die("目录打开失败！");
            while(false!==($filename=readdir($dir_handle))){//文件名为'0'时，readdir返回FALSE，判断返回值是否不全等
                $flag=$dir_flag;
//当$filename不存在或者不是目录时返回false
                if($filename!='.'&&$filename!='..'){
                    $FILE_COUNT++;//不记录当前路径和上一级路径
                    while($flag>0&&--$flag) //负数仍为真
                        echo '';
                    if(is_dir($dir_name)){//判断是否是目录
                        echo $dir_name.$filename;
                        echo '^';
                        echo floor(filesize($dir_name.'/'.$filename));
                        echo '+';
                    }
                    else {

                    };
                }
            }
            closedir($dir_handle);//关闭目录句柄
        }
    }
    if (strcasecmp($address,$add)){
        if(strcasecmp($address,$ad)){
            if(strcasecmp($address,$a)){
                scan_dir("$address");
            }
        }
    }
}
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
if(isset($_GET['delete'])){
if(is_file($_GET['delete'])){
echo unlink($_GET['delete']);
}
else{
    echo 0;
        echo $address;
}
}
if(isset($_GET['cut1'])&&isset($_GET['cut2'])){
    $address=$_GET['cut1'];
    if(is_file($address)==1){
        $newfile=$_GET['cut2'];
    echo copy($address,$newfile);
    unlink($address);
    }
}
if(isset($_GET['copy1'])&&isset($_GET['copy2'])){
$address=$_GET['copy1'];
if(is_file($address)==1){
    $newfile=$_GET['copy2'];
//    echo "sad";
    echo copy($address,$newfile);
}
}
if(isset($_GET['advice'])){
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
    $sql="SELECT * FROM advices WHERE 1 ORDER BY dates DESC ";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            $lenth=sizeof($row);
            print_r($lenth);
            print_r(";");
            for($one=0;$one<$lenth;$one++){
                for($start=0;$start<4;$start++)
                {
                    print_r($row[$one][$start]);
                    print_r(";");
                }
            }
        }
    }
    else{
        echo 0;
    }
    $conn->close();
}
if(isset($_GET['deletemesg'])){
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
    $sql="delete from advices where mail='{$_GET['deletemesg']}'";
    $result=$conn->query($sql);
    if($result->num_rows>0)
    {
        while($row=$result->fetch_all())
        {
            print_r("成功删除！");

        }
    }
    else{
        echo 0;
    }
    $conn->close();
}
?>