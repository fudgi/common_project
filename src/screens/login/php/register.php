<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../../../php/MySQL_Transaction.php');

  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));
  $query = "INSERT INTO `user_data`(`email`, `password`) VALUES ('{$gettedData->email}','{$gettedData->password}')";
  $answer = MySQL_Transaction::querySender($query);
  if($answer) {    
    //получить user_id и отправить письмо на мыло 
    echo 1;
  }
  else echo 0;
?>