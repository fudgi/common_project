<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('MySQL_Transaction.php');
    require_once('authentificator.php');

    Authentificator::check();
    $gettedData = json_decode(file_get_contents('php://input'));
    if(isset($gettedData->command) && $gettedData->command=="leave"){
        Authentificator::leave();
    }
    MySQL_Transaction::connectionSetup();
    $query = "SELECT username, photo FROM `user_data`WHERE user_id='{$_SESSION['user_id']}';";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    MySQL_Transaction::sendBack("OK",$data[0]);