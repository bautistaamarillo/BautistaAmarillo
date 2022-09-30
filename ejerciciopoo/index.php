<?php
require_once("Alumno.php");
require_once("Docente.php");

$nombre =$_POST["nombre"];
$apellido =$_POST["apellido"];
$dni = $_POST["dni"];
$tipo =$_POST["tipo"];
$arancel =$_POST["arancel"];
$fechaNacimiento = $_POST["fecha_nac"];


// $fecha_actual = new DateTime(); //fecha actual
// echo $fecha_actual->format('Y-m-d');

// $aux = substr("Sapiantae",2,-3);
// echo '<br>'.$aux;




if ($tipo == "docente"){ //Si el tipo ingresado es docente:
    $docente = new Docente ($nombre,$apellido,$dni,$tipo,$arancel);
    $auxEdad = $docente->comparaEdad($fechaNacimiento);
    $auxBirthday = $docente->detectarBirthday($fechaNacimiento);  //Asigno los valores de el trait donde busco la edad y el cumpleaños a variables auxiliares

    $docente->calcArancel($arancel,$auxEdad,$auxBirthday);

}


if ($tipo == "alumno"){//Si el tipo ingresado es alumno:
    $alumno = new Alumno ($nombre,$apellido,$dni,$tipo,$arancel);
    $auxEdad = $alumno->comparaEdad($fechaNacimiento);
    $auxBirthday = $alumno->detectarBirthday($fechaNacimiento);  

    $alumno->calcArancel($arancel,$auxEdad,$auxBirthday);

}

if ($tipo == "nullvalue"){// En caso de que no haya ingresado ningun tipo
    echo"Debe ingresar un tipo";
}




?>