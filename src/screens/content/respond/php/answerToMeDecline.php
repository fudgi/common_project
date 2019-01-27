<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../../../../php/MySQL_Transaction.php');

    MySQL_Transaction::connectionSetup();
    $gettedData = json_decode(file_get_contents('php://input'));

    $query =   "UPDATE `request_respond_data` 
                SET `state` = '0' 
                WHERE `request_respond_data`.`id` = {$gettedData->respond_id}";
    $data = (MySQL_Transaction::querySender($query)) or die("error");

    $query =   "UPDATE `request_data` 
                SET `request_confirmed_respond` = NULL
                WHERE `request_data`.`request_id` = {$gettedData->request_id}";
    $data = (MySQL_Transaction::querySender($query)) or die("error");

    echo $data;