<?php
require_once("Vehiculo.php");

class Moto implements Vehiculo{
    
    public function getModelo(){
        return "Yamaha 1500";
    }
    public function getCantidadRuedas(){
        return "Dos.";
    }
    public function getCantidadAsientos(){
        return"Uno.";
    }

}




?>