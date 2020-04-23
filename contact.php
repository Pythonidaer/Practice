<?php

if (isset($_POST['submit]'])) {
  $firstName = $_POST['first-name'];
  $lastName = $_POST['last-name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mailTo = "codefolio.work@gmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$firstName." ".$lastName." ".$phone.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.php?mailsend");
}
