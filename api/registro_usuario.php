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

if (!isset($data['nombre']) || !isset($data['email']) || !isset($data['password'])) {
    die("Error: Datos incompletos");
}

$nombre = $conn->real_escape_string($data['nombre']);
$email = $conn->real_escape_string($data['email']);
$password = $conn->real_escape_string($data['password']);

$emailExistsQuery = "SELECT * FROM usuarios WHERE Email = '$email'";
$emailExistsResult = $conn->query($emailExistsQuery);

if ($emailExistsResult->num_rows > 0) {
    die("Error: El email ya está registrado");
}

$sql = "INSERT INTO usuarios (Nombre, Email, Password) VALUES ('$nombre', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}

$conn->close();
?>