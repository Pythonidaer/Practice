<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  // $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  // $message = $_POST['message'];

  $mailTo = "jmh@jonnovative.biz";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an e-mail from ".$name.".\n\n" //.$message;

  // $mailTo = "codefolio.work@gmail.com"; <-- shows us how at end of vid.

  // WE DID NOT INCLUDE ANY "ERROR HANDLING" WATCH HIS OTHER VIDEOS.

  mail($mailTo, $txt, $headers); //$subject,
  header("Location: index.php?mailsend");
  // won't work if we're using local host --> send to NETLIFY ?!?!
}
