<?php
require_once("Repartidor.php");
require_once("Comercial.php");



$repartidor = new Repartidor('Bautista','Amarillo','26','2000');

$repartidor->setZona('Zona A');

$repartidor->plus();




?>