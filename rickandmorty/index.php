<?php
require_once("conexion.php");
$id = $_POST["id"];
$nombre = $_POST["name"];
$estado = $_POST["status"];
$sexo = $_POST["gender"];
$origen = $_POST["origin"];
$especie = $_POST["species"];
$tipo = $_POST["type"];
$ubicacion = $_POST["location"];
$foto = $_POST["image"];


$consultaid = "SELECT * from personajes where id_personaje=".$id; //Consulta para mostrar solo ID
$resultado = mysqli_query($conexion,$consultaid); //Resultado de la consulta $consultaid
if ($resultado->num_rows > 0){
    echo "Error, esta ingresando un personaje existente.";
}
else{

$insertar = "INSERT INTO personajes (id_personaje, nombre, estado, sexo, origen, especie, tipo, ubicacion, foto) VALUES (?,?,?,?,?,?,?,?,?)";
$stmt= $conexion->prepare($insertar);
$stmt->bind_param('issssssss',$id, $nombre, $estado, $sexo, $origen, $especie, $tipo, $ubicacion, $foto);
$stmt->execute();
//En stmt->bind_param Utilizo 'issss' para identificar el tipo de las variables.
if ($stmt->execute()){ //Mensaje de verificacion si se guardo o no.
echo "Personaje guardado con exito.";
}else{
echo"Hubo un error al guardar el personaje.";
} 

};

?>