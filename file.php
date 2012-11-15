<?php

// WARNING - THIS IS WAY TOO OPEN!?!

if ($_SERVER['REQUEST_METHOD'] == 'POST') { // POST REQUEST
  if(isset($_POST['uri'])){
    $uri=$_POST["uri"];
  } else {
    $uri = "";
  }
} elseif ($_SERVER['REQUEST_METHOD'] == 'GET') { // GET REQUEST
  if(isset($_GET['uri'])){
    $uri=$_GET["uri"];
  } else {
    $uri = "";
  }
} else {
  $uri = "";
}
  // PHP file_get_contents() doesn't accept +'s as part of the URL string! 
  $uri = str_replace(" ", "%20", $uri); //this works for sure
  $content = file_get_contents($uri);
  echo $content;
  
?>
