<?php

if(isset($_POST[‘operation’]))

{

$number=$_POST[‘number’];

$msg=$_POST[‘msg’];

//sms gateway api link 
$url=”http://121.241.242.114:8080/sendsms?username=" "&password=" "&type=0&dlr=1&destination=$number&source=DEMO&message=$msg“;

$c = curl_init();

curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($c, CURLOPT_URL, $url);

$contents = curl_exec($c); curl_close($c); echo ‘SMS Sent, thank you’;

}?>