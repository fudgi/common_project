<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    require_once('../dataUploader.php');
    require_once('../authentificator.php');

    Authentificator::check();
    MySQL_Transaction::connectionSetup();

    if(empty($_POST["request_id"]) || empty($_POST["price"]) || empty($_POST["description"])){
        MySQL_Transaction::sendBack("ERROR","not specified variables");;
    }
    //already exist check
    $query = "SELECT * FROM `request_respond_data` WHERE `request_id`='{$_POST["request_id"]}' AND `user_id`='{$_SESSION['user_id']}'";
    $data = MySQL_Transaction::querySender($query);
    
    if(mysqli_num_rows($data) == NULL) {
        $queryCreation = "INSERT INTO `request_respond_data` (`id`, `request_id`, `user_id`, `price`, `respond_text`, `timestamp`)
                         VALUES (NULL, '{$_POST["request_id"]}', '{$_SESSION['user_id']}', 
                         '{$_POST["price"]}', '{$_POST["description"]}', CURRENT_TIMESTAMP);";
        MySQL_Transaction::querySender($queryCreation);

        //saving images
        $respond_id = MySQL_Transaction::getLastID();
        Images::imageUpload($respond_id,$_POST["request_id"], $_FILES);
        MySQL_Transaction::sendBack("OK","");
    }
    else { 
        MySQL_Transaction::sendBack("ERROR","respond already exist");;
    }