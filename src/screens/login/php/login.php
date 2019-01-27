<?php
  // session_start();
  header('Content-Type: text/html; charset=utf-8');
  require_once('../../../php/MySQL_Transaction.php');

  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));

  if (isset($gettedData->email)){
    $query = "SELECT `user_id` FROM `user_data` WHERE `email` = '{$gettedData->email}' AND `password` = '{$gettedData->password}';";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo 1;
    // $_SESSION["user_id"] = $data[0]["user_id"];
  }
  
  // if(isset($_SESSION["user_id"])){
  //   $query = "SELECT `username`, `email` FROM `user_data` WHERE `user_id` = '{$_SESSION['user_id']}';";
  //   $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
  //   if(isset($data[0]["username"])){
  //     $text = "С возвращением, {$data[0]['username']}"; 
  //   }
  //   else {
  //     $text = "С возвращением, {$data[0]['email']}. Мы пока еще не знаем, как вас зовут"; 
  //   }
  //   die($text);
  // }