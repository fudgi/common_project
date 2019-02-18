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
    
    //содержание отклика
    $query = "SELECT * FROM `request_respond_data` WHERE `request_id`='{$gettedData->request_id}' AND `user_id`='{$gettedData->user_id}'";
    $tempdata[] = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query))[0];

    //загрузка фото из отклика
    $queryPhoto = "SELECT `imageURL` FROM `photo_list` WHERE `respond_id`={$tempdata[0]['id']}";
    $queryResultData = MySQL_Transaction::querySender($queryPhoto);
    if ($queryResultData->num_rows > 0) {
        while($row = mysqli_fetch_assoc($queryResultData)) {
            $array[] = $row;
        }
        $tempdata[] = $array;
        // return $array;
    }

    $data[] = $tempdata;
    echo json_encode($data);
