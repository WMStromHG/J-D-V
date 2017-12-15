<?php
$unionid =$_GET["unionid"];


if(!$unionid) die(0);
$rs = get_ticket($unionid, 0);
if($rs->result==1){
    die(1);
}elseif($rs->result==12808){
    die(2);
} else die(0);

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