<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    require_once('../authentificator.php');

    Authentificator::check();
    MySQL_Transaction::connectionSetup();
    
    $query = "SELECT * FROM `user_data`WHERE user_id='{$_SESSION['user_id']}';";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    MySQL_Transaction::sendBack("OK",$data[0]);
