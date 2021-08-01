<?php
session_start();
require "db_conect.php";
 if(!empty($_POST["button-users"])==true){
$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$email=$_POST["email"];
$password = md5($_POST["password"]);
$phone = $_POST["phone"];
$_SESSION['email'] = $email;
var_dump($phone);
$mysqli->query("INSERT INTO users(`Id`, `firstname`, `lastname`, `email`, `password`, `role`, `phone`) VALUES(null,'$firstname','$lastname','$email','$password','0', '$phone')");
$result = $mysqli->query("SELECT * FROM users WHERE `email` LIKE '%".$email."%'");
if ($result->num_rows > 0) {
      echo "<script>window.location.href='cabinet.php'</script>";
}
        else{
            echo "<script>window.location.href='/'</script>";
        }
  }
?>