<?php
$gettedData = json_decode(file_get_contents('php://input'));
var_dump($gettedData);
var_dump($_FILES);

$result= array();
foreach ($_FILES as $key => $value) {
    $file_name = $value['name'];
    $file_size =$value['size'];
    $file_tmp =$value['tmp_name'];

    //for extension check
    $tmp = explode('.', $value['name']);
    $file_ext= strtolower(end($tmp));
    $extensions= array("jpeg","jpg","png");
    
    if($file_size > 2000000 || in_array($file_ext, $extensions)=== false){
       $result[$key]='Error';
    }
    else {
        move_uploaded_file($file_tmp,"../images/".$file_name);
        $result[$key]="Success";
    }
}
print_r($result);
echo $_POST["request_id"];