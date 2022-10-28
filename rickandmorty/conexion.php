<?php
$user ="root";
$pass = "";
$db = "rickandmorty";
$server = "localhost";

$conexion = new mysqli($server,$user,$pass,$db);

if ($conexion -> connect_errno){
    die ("Error en la conexión.");
}




?>