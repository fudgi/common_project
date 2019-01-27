<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    $query = "SELECT 
        r.request_title,
        r.request_location,
        r.request_whenDate,
        r.request_tillDate,
        r.request_price,
        r.request_location,
        r.request_confirmed_respond,
        u.username,
        u.photo,
        u.telephone
        FROM request_data r
        LEFT JOIN user_data u ON r.creator_user_id = u.user_id
        WHERE r.request_id = '{$gettedData->request_id}'";
    $data []= MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query))[0];
    
    if($data[0]['request_confirmed_respond'] != NULL) {
        $query = "SELECT    
            rr.id,
            rr.price,
            rr.request_id,
            rr.respond_text,
            rr.state,
            u.username,
            u.photo,
            u.telephone
            FROM request_respond_data rr
            LEFT JOIN user_data u 
            ON rr.user_id = u.user_id 
            WHERE rr.id = '{$data[0]['request_confirmed_respond']}'";
    } else {
        $query = "SELECT    
            rr.id,
            rr.price,
            rr.request_id,
            rr.respond_text,
            rr.state,
            u.username,
            u.photo,
            u.telephone
            FROM request_respond_data rr
            LEFT JOIN user_data u 
            ON rr.user_id = u.user_id 
            WHERE rr.request_id = '{$gettedData->request_id}' AND rr.state IS NULL";
    }

    $tempData = MySQL_Transaction::querySender($query);
    if ($tempData->num_rows > 0) {
        $data []= MySQL_Transaction::fetchData($tempData);
    } else {
        $data []="0";
    }
    echo json_encode($data);

    
