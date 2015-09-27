<?php

// WARNING - THIS IS WAY TOO OPEN!?!

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // POST REQUEST
  echo "POST REQUEST: ";
  foreach ($_POST as $key => $value) {
    echo '<p>'.$key.'='.$value.'</p>';
  }
  $uri=$_POST["uri"]; // support old code
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') { // GET REQUEST
  echo "GET REQUEST: ";
  foreach ($_GET as $key => $value) {
    echo '<p>'.$key.'='.$value.'</p>';
  }
  $uri=$_GET["uri"]; // support old code
} else {
  $uri = "";
}
  // PHP file_get_contents() doesn't accept +'s as part of the URL string!
  $content = file_get_contents($uri);
  echo $content;

?>
