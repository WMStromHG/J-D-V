<?php
//nick,openid,headimgurl,unionid
$openid = $_GET["openid"];
$nick =$_GET["nick"];
$headimgurl = $_GET["headimgurl"];
$unionid =$_GET["unionid"];
$timet = $_GET["gametime"]/1000;
$times = date("i:s",$timet);
$t1 = substr($times, 0, 1);
$t2 = substr($times, 1, 1);
$t3 = substr($times, 3, 1);
$t4 = substr($times, 4, 1);

$w1 = "none";
$w2 = "none";
$wc1 = "none";
$wc2 = "none";
$w3 = "none";

if($timet<=60*3 && $timet>0){
    $w1 = "block";
}elseif($timet>60*3 && $timet<=60*5){
    $w2 = "block";
}elseif($timet>60*5 && $timet<=60*7){
    $wc1 = "block";
}elseif($timet>60*7 && $timet<=60*9){
    $wc2 = "block";
}else{
    $w3 = "block";
}


if($timet<=60 && $timet>0){
    $x = rand(0, 4);
    $score = 95 + $x;
}elseif($timet>60 && $timet<=120){
    $x = rand(0, 10);
    $score = 85 + $x;
}elseif($timet>120 && $timet<=180){
    $x = rand(0, 10);
    $score = 75 + $x;
}elseif($timet>180 && $timet<=240){
    $x = rand(0, 10);
    $score = 65 + $x;
}elseif($timet>240 && $timet<=300){
    $x = rand(0, 10);
    $score = 55 + $x;
}elseif($timet>300 && $timet<=360){
    $x = rand(0, 10);
    $score = 45 + $x;
}else{
    $x = rand(-10, 10);
    $score = 35 + $x;
}



if(!$openid || !$unionid){
    die("Sorry! openid and unionid is error!");
}

$url = "http://hope.demogic.com/open-api/getMemberInfo.json";
$data = '&unionid='.$unionid;
//$data.= '&optType=1';
$re = api($url, $data);

$member = $re->getMemberInfo_Response;

if($member->result == 2 || $member->result == 14005){
    //非会员,注册临时会员
    $re = member_register($openid, $unionid, $nick, $headimgurl, 0);
    $rs = $re->addMemberId_response;
    if($rs->result==14002 || $rs->result==14004){
        //注册成功，发券 / 12808 / 1
        $re_tk = get_ticket($unionid, 0);

        $ticket_json = json_encode($re_tk);

        if($re_tk->couponLaunch_response->result==1) $ticket_get_err = 1;
        elseif($re_tk->couponLaunch_response->result==12808) $ticket_get_err = 2;
        elseif($re_tk->couponLaunch_response->result==2) $ticket_get_err = 3;
        else $ticket_get_err = 0;
//        print_r($re_tk);
    }else{
        die("Sorry! GIC API is error! The problem is in addMemberId.json : cause = ".$rs->cause);
    }



}else if($member->result == 1){
    //会员，获取会员等级
//    echo ("会员");
//    print_r($member);

    $re_tk = get_ticket($unionid, 0);

    $ticket_json = json_encode($re_tk);

    if($re_tk->couponLaunch_response->result==1) $ticket_get_err = 1;
    elseif($re_tk->couponLaunch_response->result==12808) $ticket_get_err = 2;
    elseif($re_tk->couponLaunch_response->result==2) $ticket_get_err = 3;
    else {
        $ticket_get_err = 0;
        //die("Sorry! GIC API is error! The problem is in couponLaunchByUnionid.json : err is ".$ticket_json);
    }

}else{
    die("Sorry! GIC API is error! The problem is in getMemberInfo.json : cause is ".$member->cause);
}

//发券
function get_ticket($unionid='', $p=0){
    if(!$unionid) {
        die("Sorry! Paras is error! unionid is  empty");
    }
    $couponNum = "ff80808160463b600160487974bc0197";
    $url = "http://hope.demogic.com/open-api/couponLaunchByUnionid.json";
    $data = '&unionid='.$unionid;
    $data.= '&couponNum='.$couponNum;
    $data.= '&sceneName=JDVGame';
    $data.= '&sceneValue=20171212';
    $data.= '&extendInformation={"time":"'.date('Y-m-d H:i:s',time()).'"}';

    return api($url, $data, $p);
}

//临时会员注册
function member_register($openid, $unionid, $nick='GameUser', $img='http://mk1.jdv.cc/img/user.png', $p=0){
    $url = "http://hope.demogic.com/open-api/addMemberId.json";
    $data = '&unionid='.$unionid;
    $data.= '&openId='.$openid;
    $data.= '&nickName='.$nick;
    $data.= '&headImgUrl='.$img;

    return api($url, $data, $p);
}


//公用函数
function api($url, $data, $p=0){

    $dd = date('Y-m-d H:i:s',time());
    $api = 'timestamp='. $dd;
    $api.= '&transId=appkey'. $dd;
    $sign = 'timestamp='.$dd.'transId=appkey'.$dd.'secret=jdv9574f';
    $api.= '&sign='. strtoupper( md5($sign) );
    $api.= '&entMicroSignal=gh_9574fe75234a';
    $data = $api.$data;
    $re = curl_post($url, $data);
    if($p) echo $data;

    if(!$re) die("Sorry! GIC API is error! The problem is ".$url);
    $re = json_decode($re);
    return $re;
}
function curl_get($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // 3. 执行并获取HTML文档内容
    $output = curl_exec($ch);
    // 4. 释放curl句柄
    curl_close($ch);
    return $output;
}
//$data = 'phone='. urlencode($phone);
function curl_post($url, $data){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_POST, 1);//设置为POST方式
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);//POST数据
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // 3. 执行并获取HTML文档内容
    $output = curl_exec($ch);
    // 4. 释放curl句柄
    curl_close($ch);
    return $output;
}


?>

<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type">
    <meta content="text/html; charset=utf-8">
    <meta charset="utf-8">
    <title>J.D.V 以梦为马 · 诗酒趁年华</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="target-densitydpi=device-dpi,width=700px,user-scalable=no">
    <script>
        var DEFAULT_WIDTH = 700,//页面的默认宽度
            ua=navigator.userAgent.toLowerCase(),//根据useragent的信息获取浏览器信息
            deviceWidth=window.screen.width,//设备的宽度
            devicePixelRatio=window.devicePixelRatio||1,//物理像素和设备独立像素的比例，默认为1
            targetDensitydpi;
        //Android4.0以下手机不支持viewport的width，需要设置target-densitydpi
        if(ua.indexOf("android")!==-1&&parseFloat(ua.slice(ua.indexOf("android")+8))<4){
            targetDensitydpi=DEFAULT_WIDTH/deviceWidth*devicePixelRatio*160;
            document.querySelector('meta[name="viewport"]').setAttribute('content', 'target-densitydpi=' + targetDensitydpi + ',width=device-width,user-scalable=no');
        }
    </script>

    <link rel="stylesheet" href="http://mk1.jdv.cc/src/css/style.css" />
    <link rel="stylesheet" href="http://mk1.jdv.cc/src/css/ticket.css" />

</head>

<body>
<div id="_unable"></div>

<div id="app">

    <section class="cc " id="Index">
        <div class="main">

            <img class="mbg" src="img/ticket/ticket_bg.jpg" alt="">

            <div class="nick"><?php echo $nick?></div>
            <div class="word">你的脑洞大小程度已经击败<?php echo $score?>%其他玩家</div>
            <div class="tt t1"><?php echo $t1?></div>
            <div class="tt t2"><?php echo $t2?></div>
            <div class="tt tx">:</div>
            <div class="tt t3"><?php echo $t3?></div>
            <div class="tt t4"><?php echo $t4?></div>

            <div class="w1" style="display: <?php echo $w3?>" ><img src="img/ticket/w1.png" alt=""></div>
            <div class="w2" style="display: <?php echo $w2?>"><img src="img/ticket/w2.png" alt=""></div>
            <div class="w3" style="display: <?php echo $w1?>"><img src="img/ticket/w3.png" alt=""></div>
            <div class="wc1" style="display: <?php echo $wc1?>"><img src="img/ticket/wc1.png" alt=""></div>
            <div class="wc2" style="display: <?php echo $wc2?>"><img src="img/ticket/wc2.png" alt=""></div>

            <div class="getTicket"></div>
            <div class="play"></div>
            <div class="share"></div>

            <div class="ticket">
                <div class="img"></div>
            </div>

            <div class="share_box">
                <div class="img"></div>
            </div>

            <div class="ticket_get_err"><?php echo $ticket_get_err?></div>
            <div class="ticket_json"><?php echo $ticket_json?></div>
        </div>
    </section>

</div>


<script src="http://mk1.jdv.cc/lib/jquery-2.1.4.min.js"></script>
<script src="http://mk1.jdv.cc/lib/jquery.mobile-1.4.5.min.js"></script>
<script src="http://mk1.jdv.cc/lib/createjs/createjs-2015.11.26.min.js"></script>

<script src="http://mk1.jdv.cc/lib/velocity/velocity.js"></script>

<script src="http://mk1.jdv.cc/lib/libs.js"></script>
<script src="http://mk1.jdv.cc/src/js/resize.js"></script>


<script>
    $("body").on('touchmove',function(event){ event.preventDefault(); },false);

    $(window).load(function(){
        $("iframe").hide();
        $("#ad_colse_container").remove();
        $("body > *").each(function(){
            if(!$(this).hasClass("ui-page")) $(this).hide();
        });

        setTimeout(function(){
            if(!Dom.ad_bad) window.location.reload();
        },5000);

        // loader();

        $("#Index .getTicket").tap(function(e){
            cc.tap(e);
            //$.get("http://mk1.jdv.cc/.php?unionid= //echo $unionid//", function(result){
            //    if(!result) alert("优惠券领取失败！");
            //    if(result=="2") alert("OK！");
            //});
            if($("#Index .ticket_get_err").html()=="0") alert("你来晚了！优惠券都领完了！");
            else if($("#Index .ticket_get_err").html()=="2") alert("优惠卡券已在微信公众号“JDVclub”的会员中心等你领取，快去领券吧！");
            else $("#Index .ticket").fadeIn();

        });

        $("#Index .ticket").tap(function(e){
            cc.tap(e);
            $("#Index .ticket").fadeOut();
        });

        $("#Index .play").tap(function(e){
            cc.tap(e);
            window.location.href = "http://mk1.jdv.cc";
        });

        $("#Index .share").tap(function(e){
            cc.tap(e);
            $("#Index .share_box").fadeIn();
        });

        $("#Index .share_box").tap(function(e){
            cc.tap(e);
            $("#Index .share_box").fadeOut();
        });

    });


</script>

<script src="http://mk1.jdv.cc/wx/jweixin-1.0.0.js"></script>
<?php
require_once "wx/jssdk.php";
$jssdk = new JSSDK("wx2b5e5b328d9c762c", "0a28b1c3e79cb65a0bdeda110b7d4cbe");
$signPackage = $jssdk->GetSignPackage();
?>

<script>
    /*
     * 注意：
     * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
     * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
     * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
     *
     * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
     * 邮箱地址：weixin-open@qq.com
     * 邮件主题：【微信JS-SDK反馈】具体问题
     * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
     */
    wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: <?php echo $signPackage["timestamp"];?>,
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
    });

    wx.ready(function () {
        Dom.ad_bad = 1;

        wx.onMenuShareAppMessage({
            title: '只有1%的高智商才能通关', // 分享标题
            desc: 'J.D.V 以梦为马 · 诗酒趁年华', // 分享描述
            link: 'http://mk1.jdv.cc/index.php', // 分享链接
            imgUrl: 'http://mk1.jdv.cc/wx/logo.png', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
        });

        wx.onMenuShareTimeline({
            title: '只有1%的高智商才能通关', // 分享标题
            link:'http://mk1.jdv.cc/index.php',
            imgUrl: 'http://mk1.jdv.cc/wx/logo.png' // 分享图标
        });
    });
</script>
<script src="https://s19.cnzz.com/z_stat.php?id=1271414784&web_id=1271414784" language="JavaScript"></script>
</body>
</html>
