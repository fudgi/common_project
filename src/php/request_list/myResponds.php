<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    $query ="SELECT  rr.request_id,
        r.request_title,
        r.request_location,
        r.request_whenDate,
        r.request_tillDate,
        r.request_price,
        u.user_id,
        u.username,
        u.photo
        FROM request_respond_data rr
        LEFT JOIN request_data r ON rr.request_id = r.request_id
        LEFT JOIN user_data u ON r.creator_user_id = u.user_id
        WHERE rr.user_id = '{$gettedData->user_id}'";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo json_encode($data);