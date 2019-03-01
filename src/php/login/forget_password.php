<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../MySQL_Transaction.php');

  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));
  
  if (isset($gettedData->email)){
    $query = "SELECT `user_id` FROM `user_data` WHERE `email` = '{$gettedData->email}'";
    $data = MySQL_Transaction::querySender($query);
    if(mysqli_num_rows($data)==1){
      //отправка e-mail
      MySQL_Transaction::sendBack("OK","");
    }
    else MySQL_Transaction::sendBack("ERROR","wrong email");
  }
  else MySQL_Transaction::sendBack("ERROR","email is not specified");