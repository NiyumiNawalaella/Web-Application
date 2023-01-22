<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST))
{
  $email = $_POST['usermail'];
  $email = $_POST['userpassword'];

  if($username == 'admin' && $password == 'admin')
  {
    ?>
    {
      "success" : true,
      "secret": "This is the secret no one knows but the admin"
    }
    <?php
  } else
  {
    ?>
    {
      "success" : false,
      "message" : "Invalid credentials"
    }
    <?php
  }
}
else
{
  // var_dump($_POST)
  ?>
  {
    "success": false,
    "message" : "Only POST access accepted"
  }
  <?php
}
?>
