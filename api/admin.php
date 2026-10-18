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

if (!isset($data['action'])) {
    die("Error: Acción no especificada");
}

$action = $data['action'];

if ($action === 'login') {
    if (!isset($data['username']) || !isset($data['password'])) {
        die("Error: Datos incompletos");
    }

    $username = $conn->real_escape_string($data['username']);
    $password = $conn->real_escape_string($data['password']);

    $sql = "SELECT * FROM usuarios WHERE Nombre = '$username' AND Password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "login-success";
    } else {
        echo "login-failure";
    }
} elseif ($action === 'eliminar') {
    if (!isset($data['usuarioID'])) {
        die("Error: ID de usuario no especificado");
    }

    $usuarioID = $conn->real_escape_string($data['usuarioID']);

    $sql = "DELETE FROM usuarios WHERE UsuarioID = $usuarioID";
    $result = $conn->query($sql);

    if ($result) {
        echo "eliminacion-success";
    } else {
        echo "eliminacion-failure";
    }
} elseif ($action === 'modificar') {
    if (!isset($data['usuarioID']) || !isset($data['nuevoNombre']) || !isset($data['nuevoEmail'])) {
        die("Error: Datos incompletos para modificar usuario");
    }

    $usuarioID = $conn->real_escape_string($data['usuarioID']);
    $nuevoNombre = $conn->real_escape_string($data['nuevoNombre']);
    $nuevoEmail = $conn->real_escape_string($data['nuevoEmail']);

    $sql = "UPDATE usuarios SET Nombre = '$nuevoNombre', Email = '$nuevoEmail' WHERE UsuarioID = $usuarioID";
    $result = $conn->query($sql);

    if ($result) {
        echo "modificacion-success";
    } else {
        echo "modificacion-failure";
    }
}

$conn->close();
?>