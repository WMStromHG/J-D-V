<?php
//nick,openid,headimgurl,unionid
$openid = $_POST["openid"];
$nick =$_POST["nick"];
$headimgurl = $_POST["headimgurl"];
$unionid =$_POST["unionid"];

//echo $nick."<br> | <br>";
//echo $openid."<br> | <br>";

if(!$openid || !$unionid){
    die("Sorry! openid and unionid is error!");
}

$url = "http://hope.demogic.com/open-api/memberQuery.json";
$data = '&openId='.$openid;
$data.= '&optType=1';
$re = api($url, $data);

//$dd = date('Y-m-d H:i:s',time());
//$api = 'timestamp='. $dd;
//$api.= '&transId=appkey'. $dd;
//$sign = 'timestamp='.$dd.'transId=appkey'.$dd.'secret=jdv9574f';
//$api.= '&sign='. strtoupper( md5($sign) );
//$api.= '&entMicroSignal=gh_9574fe75234a';
////$data.= $api.'&openId=oYeilw7PYhyWmG7TPxeQV2SrQe1U';
//$data.= $api.'&openId='.$openid;
//$data.= '&optType=1';
////echo $data."<br> | <br>";
////echo $sign."<br> | <br>";
//$re = curl_post($url, $data);

$member = $re->memberQuery_response;

//print_r($member);

if($member->result == 2){
    //非会员,注册临时会员
    $re = member_register($openid, $unionid, $nick, $headimgurl);
    if($re->result){
        die("Sorry! GIC API is error! The problem is in addMemberId.json : cause = ".$re->cause);
    }
    //注册成功，发券
}else if($member->result == 1){
    //会员，获取会员等级
    die("会员");
}else{
    die("Sorry! GIC API is error! The problem is in memberQuery.json : cause is ".$member->cause);
}


//临时会员注册
function member_register($openid, $unionid, $nick='GameUser', $img='http://mk1.jdv.cc/img/user.png'){
    $url = "http://hope.demogic.com/open-api/addMemberId.json";
    $data = '&unionid='.$unionid;
    $data.= '&openId='.$openid;
    $data.= '&headImgUrl='.$img;
    $data.= '&nickname='.$nick;
    return api($url, $data);
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