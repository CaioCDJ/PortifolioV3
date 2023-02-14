<?php

  if(isset($_POST['title']) && !empty($_POST["destination"])){

    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $description = $_POST['description'];

    if(mail($email->get_destination(),$email->get_title(),$email->get_description())){
      
      echo("Email enviado com sucesso.");
    } else{

      echo("Email Não enviado.");
    }
  }
?>
