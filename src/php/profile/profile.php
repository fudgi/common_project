<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    
    $query = "SELECT * FROM `user_data`WHERE user_id='{$gettedData->user_id}';";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo json_encode($data[0]);
