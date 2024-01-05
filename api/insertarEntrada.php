<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$database = "museo";

$conn = new mysqli($servername, $username, $password, $database);

$fechaEntrada = isset($_POST['fechaEntrada']) ? $_POST['fechaEntrada'] : '';
$descuentoMenor7 = isset($_POST['descuentoMenor7']) ? $_POST['descuentoMenor7'] : 0;
$descuentoJubilado = isset($_POST['descuentoJubilado']) ? $_POST['descuentoJubilado'] : 0;
$descuentoAmigo = isset($_POST['descuentoAmigo']) ? $_POST['descuentoAmigo'] : 0;
$precioTotal = isset($_POST['precioTotal']) ? $_POST['precioTotal'] : 0;

$sql = "INSERT INTO entradas (FechaEntrada, DescuentoMenor7, DescuentoJubilado, DescuentoAmigo, Precio) 
        VALUES ('$fechaEntrada', $descuentoMenor7, $descuentoJubilado, $descuentoAmigo, $precioTotal)";

if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error al insertar datos: " . $conn->error;
}

$conn->close();
?>