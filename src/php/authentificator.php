<?php
    require_once('MySQL_Transaction.php');

    class Authentificator {

        public static function check(){
            if (isset($_COOKIE["session_id"])) {
                session_id($_COOKIE["session_id"]);
                session_start();
            }
            else {
                session_start();
                setcookie("session_id", session_id(), mktime(0,0,0,12,31,2019));
            }
            // echo session_id();
            // echo json_encode($_SESSION);
            // $_SESSION['user_id'] = NULL;
            // echo $_SESSION['user_id'];
            if (isset($_SESSION['user_id']))
            {
                return 1;
            }
            else {
                MySQL_Transaction::sendBack("ERROR","not logged in");
                die();
            }
        }

        public static function leave(){
            if (isset($_SESSION['user_id']))
            {
                $_SESSION['user_id']=NULL;
            }
            MySQL_Transaction::sendBack("ERROR","not logged in");
            die();
        }
    }
    