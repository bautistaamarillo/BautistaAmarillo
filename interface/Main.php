<?php
require_once("Moto.php");
class Main extends Moto{


}

$moto = new Moto();
echo "Modelo: {$moto->getModelo()} <br>";
echo "Cantidad de ruedas: {$moto->getCantidadRuedas()} <br>";
echo "Cantidad de asientos: {$moto->getCantidadAsientos()} <br>";







?>