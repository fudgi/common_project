<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');
    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    
    $query = "SELECT DISTINCT
                c.category_id,
                c.category_name 
                FROM request_data r
                LEFT JOIN category c
                ON r.category_id = c.category_id 
                WHERE r.creator_user_id != '{$gettedData->user_id}'";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    echo json_encode($data);
