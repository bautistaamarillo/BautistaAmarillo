<?php
require_once("Persona.php");
require_once("Cuenta.php");
require_once("CuentaJoven.php");


$persona = new Persona ("Bautista","20","43632740");
$persona->mostrar();
$persona->esMayorDeEdad();

// $cuenta = new Cuenta ("Bautista",100);
// $cuenta->ingresar(-2);
// $cuenta->ingresar(900);
// $cuenta->retirar(1200);
// $cuenta->mostrar();

$cuentaJoven = new CuentaJoven ("Bautista",20,300,800);


$cuentaJoven->mostrar();

?>