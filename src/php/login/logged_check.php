<?php
    require_once('../authentificator.php');
    require_once('../MySQL_Transaction.php');
    if(Authentificator::check()){
        MySQL_Transaction::sendBack("OK","");
    }
    