<?php
//nick,openid,headimgurl,unionid
$openid = $_POST["openid"];
$nick =$_POST["nick"];
$headimgurl = $_POST["headimgurl"];
$unionid =$_POST["unionid"];
$gametime = $_POST["gametime"];

if(!$nick) $nick = "匿名";

if(!$openid || !$unionid){
    die("Sorry! 第三方游戏接口 is error!");
}

?>
<html>
<script language="javascript">
    document.location.href="http://mk1.jdv.cc/showticket.php?openid=<?php echo $openid?>&nick=<?php echo $nick?>&headimgurl=<?php echo $headimgurl?>&unionid=<?php echo $unionid?>&gametime=<?php echo $gametime?>";
</script>
</html>
