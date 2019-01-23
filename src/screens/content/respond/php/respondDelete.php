<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../../../../php/MySQL_Transaction.php');
  //---------------------
  //TODO: Проверка инпут полей
  //---------------------
  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));
  $query = "DELETE FROM `request_respond_data` WHERE `user_id`='{$gettedData->user_id}' AND `request_id` = '{$gettedData->request_id}';";
  $answer = MySQL_Transaction::querySender($query);
  if($answer) {        
     echo json_encode($answer);
  }
  else echo "Не";