<?php

  if(isset($_POST['title']) && !empty($_POST["destination"])){

    $title = $_POST['title'];
    $destination = $_POST['destination'];
    $destination = $_POST['description'];

    if(mail($email->get_destination(),$email->get_title(),$email->get_description())){
      
      echo("Email enviado com sucesso.");
    } else{

      echo("Email Não enviado.");
    }
  
  }
?>
