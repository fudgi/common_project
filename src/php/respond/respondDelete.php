<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../MySQL_Transaction.php');
  require_once('../authentificator.php');

  //---------------------
  //TODO: Проверка инпут полей
  //---------------------
  Authentificator::check();
  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));

  $queryPhotos = "DELETE FROM `photo_list` WHERE `respond_id` = '{$gettedData->respond_id}'";
  MySQL_Transaction::querySender($queryPhotos);

  $query = "DELETE FROM `request_respond_data` WHERE `user_id`='{$_SESSION["user_id"]}' AND `request_id` = '{$gettedData->request_id}';";
  $answer = MySQL_Transaction::querySender($query);
  if($answer) {        
      MySQL_Transaction::sendBack("OK",$answer);
  }
  else MySQL_Transaction::sendBack("ERROR","Can't delete answer");