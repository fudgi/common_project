<?php
  header('Content-Type: text/html; charset=utf-8');
  require_once('../MySQL_Transaction.php');

  $gettedData = json_decode(file_get_contents('php://input'));
  session_start();
  if (isset($gettedData->email) && isset($gettedData->password)){
    MySQL_Transaction::connectionSetup();
    $query = "SELECT `user_id` FROM `user_data` WHERE `email` = '{$gettedData->email}' AND `password` = '{$gettedData->password}';";
    $notPreparedData = MySQL_Transaction::querySender($query);

    if(mysqli_num_rows($notPreparedData)==1){
      $data = MySQL_Transaction::fetchData($notPreparedData);
      $_SESSION["user_id"] = $data[0]["user_id"];
      MySQL_Transaction::sendBack("OK","");
    }
    else MySQL_Transaction::sendBack("ERROR","wrong email or password");
  }
  else MySQL_Transaction::sendBack("ERROR","email or password is not specified");