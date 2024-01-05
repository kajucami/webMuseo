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
    die("Error de conexión a la base de datos: " . $conn->connect_error);
}

// Consulta SQL para obtener los datos
$sql = "SELECT NombreArtista, FechaNacimiento, Pais FROM artistas";
$result = $conn->query($sql);

// Crear un array para almacenar los datos
$artistas = array();

// Recorrer los resultados y agregarlos al array
while ($row = $result->fetch_assoc()) {
    $artistas[] = $row;
}

// Devolver los datos en formato JSON
header('Content-Type: application/json');
echo json_encode($artistas);

// Cerrar la conexión
$conn->close();
?>