<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../../../php/MySQL_Transaction.php');
  //---------------------
  //TODO: Проверка инпут полей
  //---------------------
  MySQL_Transaction::connectionSetup();
  $gettedData = json_decode(file_get_contents('php://input'));
  $query = "INSERT INTO `request_data` 
            (`creator_user_id`, `request_title`, `request_whenDate`, 
            `request_tillDate`, `request_price`, `request_description`, 
            `request_location`, `request_active`, `request_confirmed_respond`, 
            `request_timestamp`, `category_id`)
             VALUES ('{$gettedData->user_id}', '{$gettedData->title}',
              '{$gettedData->whenDate}', '{$gettedData->tillDate}',
               {$gettedData->price}, '{$gettedData->description}',
               '{$gettedData->location}', 1, NULL, 
               CURRENT_TIMESTAMP, '{$gettedData->category_id}')";
  $answer = MySQL_Transaction::querySender($query);
  if($answer) {        
    echo 1;
  }
  else echo 0;