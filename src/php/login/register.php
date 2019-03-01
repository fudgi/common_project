<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../MySQL_Transaction.php');

  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));

  if (isset($gettedData->email) && isset($gettedData->password)){
    $query = "INSERT INTO `user_data`(`email`, `password`) VALUES ('{$gettedData->email}','{$gettedData->password}')";
    $answer = MySQL_Transaction::querySender($query);
    
    if($answer) {
      //получить user_id и отправить письмо на мыло 
      MySQL_Transaction::sendBack("OK","");
    }
    else MySQL_Transaction::sendBack("ERROR","already in use");
  }
  else MySQL_Transaction::sendBack("ERROR","email or password is not specified");