<?php
function check_login($con){
    if(isset($_SESSION['user_id'])){
        $id=$_SESSION['user_id'];
        $query= "select * from user where user_id ='$id' limit 1";
        $result =mysqli+query($con,$query);
        if($result && msqli_num_row($result)>0){
          $user_data=msqli_fetch_assoc($result);
          return $user_data;
        }
      }
//redirect the user to login
header("Location:login.php");
die;
}
function random($length){
    $text ="";
    if($length < 5){
        $length = 5;
    }
    $len =ran(4,$length);
    for($i=0;$i < $len;$i++){
        $text .=rand(0,9);
    }
    return $text;
}