<?php session_start(); ?>
<?php
   
   require 'db_conect.php';
   $email = $_POST['email'];
   $result = $mysqli->query("SELECT * FROM users WHERE `email` LIKE '%".$email."%'");
   $user = mysqli_fetch_array($result);
   $_SESSION['email'] = $user['email'];
   $_SESSION['status'] = $user['role'];
if ($result->num_rows > 0) {
   if($user['role'] == 1){
      echo "<script>window.location.href='admin.php'</script>";
   }
   else{
      echo "<script>window.location.href='cabinet.php'</script>";
   }
}
        else{
            echo "<script>window.location.href='/'</script>";
        }

    ?>
    </thead>
    <tbody>

        
            
  </body>
</html>
    
