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

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $sql = "SELECT * FROM exposiciones";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $artistas = array();

    while ($row = $result->fetch_assoc()) {
      $artistas[] = array(
        'NombreExpo' => $row['NombreExpo'],
        'FechaInicio' => $row['FechaInicio'],
        'FechaFin' => $row['FechaFin'],
        'Descripcion' => $row['Descripcion'],
        'ImagenExpo' => base64_encode($row['ImagenExpo']),
      );
    }

    echo json_encode($artistas);
  } else {
    echo 'No se encontraron exposiciones.';
  }
}

$conn->close();
?>
