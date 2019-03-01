<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    require_once('../authentificator.php');

    Authentificator::check();
    MySQL_Transaction::connectionSetup();
    $query = "SELECT 
                    r.request_id, 
                    r.request_title, 
                    r.request_location, 
                    r.request_whenDate,
                    r.request_tillDate,
                    r.request_price,
                    COUNT(rr.id) AS answer_count,
                    rrr.state
                    FROM request_data r
                    LEFT JOIN request_respond_data rr 
                    ON r.request_id=rr.request_id AND (rr.state <> 0 OR rr.state IS NULL)
                    LEFT JOIN request_respond_data rrr
                    ON r.request_id=rrr.request_id AND rrr.state = 1
                    WHERE r.creator_user_id= '{$_SESSION['user_id']}'
                    GROUP BY 1";
    $data = MySQL_Transaction::fetchData(MySQL_Transaction::querySender($query));
    MySQL_Transaction::sendBack("OK",$data);
