 <?php
require_once("Repartidor.php");
require_once("Comercial.php");


 //Meto en variables todos los datos obtenidos del formulario
$nombre =$_POST["nombre"];
$apellido =$_POST["apellido"];
$edad =$_POST["edad"];
$salario =$_POST["salario"];
$tipoempleado =$_POST["tipoempleados"]; //dependiendo del tipo de empleado, obtengo comision o zona




if ($tipoempleado == "comercial") {
    $comision = $_POST["comision"]; //atributo de comision
    $comercial = new comercial($nombre,$apellido,$edad,$salario); //inicializo 
    $comercial->setComision($comision); //seteo la comision
    echo $comercial->plus();
}

if ($tipoempleado == "repartidor") {
    $zona = $_POST["zona"]; //atributo de zona
    $repartidor = new Repartidor($nombre,$apellido,$edad,$salario);
    $repartidor->setZona($zona); //seteo la zona

echo $repartidor->plus();
}





?> 