<?php
    require_once('MySQL_Transaction.php');

    class Authentificator {

        public static function check(){
            // if (isset($_COOKIE["TestCookie"])) {
            //     session_id($_COOKIE["TestCookie"]);
            // }
            session_start();
            // echo session_id();
            // setcookie("TestCookie", session_id());
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
    