<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));
    $query = "SELECT * FROM `request_respond_data` WHERE `request_id`='{$gettedData->request_id}' AND `user_id`='{$gettedData->responder_id}'";
    $data = MySQL_Transaction::querySender($query);
    if(mysqli_num_rows($data) == NULL) {
        $queryCreation = "INSERT INTO `request_respond_data` (`id`, `request_id`, `user_id`, `price`, `respond_text`, `timestamp`)
                         VALUES (NULL, '{$gettedData->request_id}', '{$gettedData->responder_id}', 
                         '{$gettedData->price}', '{$gettedData->description}', CURRENT_TIMESTAMP);";
        MySQL_Transaction::querySender($queryCreation);
        echo MySQL_Transaction::getLastID();
    }
    else { 
        echo "ERROR";
    }