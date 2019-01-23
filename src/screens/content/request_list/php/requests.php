<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));

    $condition = " AND r.category_id = '{$gettedData->selected_category}'";
    if($gettedData->selected_category == "1"){
        $condition = "";
    }
    $query = "SELECT 
                r.request_id, 
                r.creator_user_id, 
                r.request_title,
                r.request_location, 
                r.request_whenDate, 
                r.request_tillDate,
                r.request_price,
                u.user_id, 
                u.username, 
                u.photo
                FROM request_data r
                LEFT JOIN user_data u ON r.creator_user_id=u.user_id 
                WHERE r.creator_user_id != '{$gettedData->user_id}' ".$condition;
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo json_encode($data);
