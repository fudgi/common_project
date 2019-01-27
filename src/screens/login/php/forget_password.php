<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../../../php/MySQL_Transaction.php');

  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));
  if (isset($gettedData->email)){
    $query = "SELECT `user_id` FROM `user_data` WHERE `email` LIKE '{$gettedData->email.}";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query)); 
    //Если нет такого мыла, то возвращает false
    die("TRUE");
  }
  echo "Введите email";
  ?>