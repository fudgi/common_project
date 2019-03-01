<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    require_once('../authentificator.php');

    Authentificator::check();
    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    $query = "SELECT DISTINCT
                c.category_id,
                c.category_name 
                FROM request_data r
                LEFT JOIN category c
                ON r.category_id = c.category_id 
                WHERE r.creator_user_id != '{$_SESSION["user_id"]}'";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    MySQL_Transaction::sendBack("OK",$data);
