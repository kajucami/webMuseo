<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$database = "webmuseo";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

$query = "SELECT * FROM exposiciones";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $artistas = array();
    while ($row = $result->fetch_assoc()) {
        $artistas[] = $row;
    }
    echo json_encode($artistas);
} else {
    echo "No se encontraron exposiciones en la base de datos.";
}

$conn->close();