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
    die("Error de conexión: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['username'])) {
    die("Error: Datos incompletos");
}

$username = $conn->real_escape_string($data['username']);

$sql = "SELECT * FROM usuarios WHERE Nombre = '$username' AND IsAdmin = 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "admin-login-success";
} else {
    echo "login-success";
}

$conn->close();
?>