<?php

// Valido todos los datos, en el caso de que tenga un valor asignado
//genero una variable y despues la muestro en pantalla con el echo

if (isset($_POST ["apellido"])){
    $apellidoaux = $_POST ["apellido"].'<br>';
}    
if (isset($_POST ["nombre"])){
    $nombreaux = $_POST ["nombre"].'<br>';
}
if (isset($_POST ["documento"])){
    $documentoaux = $_POST ["documento"].'<br>';
}
if (isset($_POST ["fechanacimiento"])){
    $fechanacimientoaux = $_POST ["fechanacimiento"].'<br>';
}
if (isset($_POST ["gender"])){
    $generoaux = $_POST ["gender"].'<br>';
}
 echo($apellidoaux);
 echo($nombreaux);
 echo($documentoaux);
 echo($fechanacimientoaux);
 echo($generoaux);

 //Valido y recorro el array color que cree anteriormente en el html
 //Cuando el checkbox esta tildado, muestra el color.
 if (isset ($_POST["color"])){
 $auxiliarcolores = $_POST["color"];
 }
 foreach ($auxiliarcolores as $key => $colores) {
     echo($colores).'<br>';
}

?>