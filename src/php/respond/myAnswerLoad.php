<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    require_once('../authentificator.php');

    Authentificator::check();
    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    $query = "SELECT 
        r.request_title,
        r.request_location,
        r.request_whenDate,
        r.request_tillDate,
        r.request_price,
        r.request_location,
        u.username,
        u.photo,
        u.telephone
        FROM request_data r
        LEFT JOIN user_data u ON r.creator_user_id = u.user_id
        WHERE r.request_id = '{$gettedData->request_id}'";
    $data []= MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query))[0];
    MySQL_Transaction::sendBack("OK",$data);
