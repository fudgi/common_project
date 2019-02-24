<?php
    header('Content-Type: text/html; charset=utf-8');
    require_once('../MySQL_Transaction.php');
    MySQL_Transaction::connectionSetup();

    if(empty($_POST["request_id"]) || empty($_POST["responder_id"]) || empty($_POST["price"]) || empty($_POST["description"])){
        die("ERROR");
    }
    //already exist check
    $query = "SELECT * FROM `request_respond_data` WHERE `request_id`='{$_POST["request_id"]}' AND `user_id`='{$_POST["responder_id"]}'";
    $data = MySQL_Transaction::querySender($query);
    
    if(mysqli_num_rows($data) == NULL) {
        //saving request_respond
        $queryCreation = "INSERT INTO `request_respond_data` (`id`, `request_id`, `user_id`, `price`, `respond_text`, `timestamp`)
                         VALUES (NULL, '{$_POST["request_id"]}', '{$_POST["responder_id"]}', 
                         '{$_POST["price"]}', '{$_POST["description"]}', CURRENT_TIMESTAMP);";
        MySQL_Transaction::querySender($queryCreation);

        //saving images
        $respond_id = MySQL_Transaction::getLastID();
        $result= array();
        foreach ($_FILES as $key => $value) {
            $file_name = $value['name'];
            $file_size =$value['size'];
            $file_tmp =$value['tmp_name'];

            //for extension check
            $tmp = explode('.', $value['name']);
            $file_ext= strtolower(end($tmp));
            $extensions= array("jpeg","jpg","png");
            
            if($file_size > 5000000 || in_array($file_ext, $extensions)=== false){
                $result[$key]='Error';
            }
            else {
                $path = "../../img/respondImages/".$_POST["responder_id"]."_".$respond_id."_".$file_name;
                move_uploaded_file($file_tmp, $path);
                $pathToSave = "/react-app-07/src/img/respondImages/".$_POST["responder_id"]."_".$respond_id."_".$file_name;
                $queryImage = "INSERT INTO `photo_list` (`id`, `respond_id`, `imageURL`, `timestamp`) VALUES (NULL, '{$respond_id}', '{$pathToSave}', CURRENT_TIMESTAMP)";
                MySQL_Transaction::querySender($queryImage);
                $result[$key]="Success";
            }
        }
        echo $respond_id;
    }
    else { 
        echo "Запись уже существует";
    }