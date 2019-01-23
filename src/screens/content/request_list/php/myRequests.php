<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    
    $query = "SELECT `request_id`,`request_title`,`request_location`,
                     `request_whenDate`,`request_tillDate`,`request_price`
                     FROM `request_data`
                     WHERE creator_user_id='{$gettedData->user_id}';";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo json_encode($data);
