<?php

if(isset($_POST['submit']))

{

$number=$_POST['phone'];
$date_time = date('Y-m-d H:i:s');
$msg='You just have a contract with Unisex-Saloon-Contract-Service. It is an Honour to have you as a Client'. $date_time;

//sms gateway api link 
$url="http://121.241.242.114:8080/sendsms?username=" "&password=" "&type=0&dlr=1&destination=$number&source=DEMO&message=$msg";
$url = "http://api.mVaayoo.com/mvaayooapi/MessageCompose?user=YourUserName:YourPassword&senderID=YourSenderID&receipientno=1234567890&msgtxt=This is a test from mVaayoo API&state=4";  
$c = curl_init();

curl_setopt($c, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($c, CURLOPT_URL, $url);

$contents = curl_exec($c);
curl_close($c);
echo ‘SMS Sent, thank you’;

}?>