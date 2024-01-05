<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$database = "museo";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $expoID = 3; 

  $imageData = file_get_contents($_FILES['file']['tmp_name']);
  $imageData = $conn->real_escape_string($imageData);

  $sql = "UPDATE exposiciones SET ImagenExpo = '$imageData' WHERE ExpoID = $expoID";

  if ($conn->query($sql) === true) {
    echo 'Imagen insertada con exito';
  } else {
    echo 'Error insertando imagen: ' . $conn->error;
  }
}

$conn->close();
?>