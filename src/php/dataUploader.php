<?php
    require_once('MySQL_Transaction.php');

    class Images {
        public static function imageUpload ($respond_id, $request_id, $files) {
            $result= array();
            foreach ($files as $key => $value) {
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
                    $path = "../../img/respondImages/".$request_id."_".$respond_id."_".$file_name;
                    move_uploaded_file($file_tmp, $path);
                    $pathToSave = "/react-app-07/src/img/respondImages/".$request_id."_".$respond_id."_".$file_name;
                    $queryImage = "INSERT INTO `photo_list` (`id`, `respond_id`, `imageURL`, `timestamp`) VALUES (NULL, '{$respond_id}', '{$pathToSave}', CURRENT_TIMESTAMP)";
                    MySQL_Transaction::querySender($queryImage);
                    $result[$key]="Success";
                }
            }
            return $result;
        }
    }