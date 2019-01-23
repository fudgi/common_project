<?php
    require_once('variables.php');
    
    class MySQL_Transaction {
        private static $link;
        public static function connectionSetup (){
            if(!isset(self::$link)){
                $connection = new mysqli(DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME);
            }               
            if (mysqli_connect_errno()) {
                die("Подключение к серверу MySQL невозможно: ".mysqli_connect_error());
            }
            mysqli_set_charset($connection, "utf8");
            self::$link = $connection;
        }

        public static function querySender($query){
            $table = mysqli_query(self::$link, $query);
            return $table;
        }

        public static function fetchData ($queryResultData){
            if ($queryResultData->num_rows > 0) {
                while($row = mysqli_fetch_assoc($queryResultData)) {
                    $array[] = $row;
                }
                return $array;
            }
            else {
                die("FALSE");
            }
        }

        public static function getLastID(){
            return mysqli_insert_id(self::$link);
        }
    }
?>