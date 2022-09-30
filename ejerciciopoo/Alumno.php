<?php
require_once("Persona.php");
class Alumno extends Persona{
    use Date;

    public function calcArancel($arancel,$edadActual,$birthday){
        $fechaActual = new DateTime();
        $fechaActual = $fechaActual->format("m-d");

        if($edadActual <= 17){
            echo"Usted es menor de edad, no puede ingresar."; //Si es menor a 18 error, y sino resuelvo.
        }

        else{
        if ($edadActual <= 25){
            $this->arancel=$this->arancel - ($this->arancel*0.20); //descuento del 20 %
        }
        if($birthday == $fechaActual){
            $this->arancel=0;
        }
        //Le asigno el valor de $this->arancel a la variable $arancel y muestro los echo.
        $arancel = $this->arancel;
        echo "Nombre: {$this->nombre}<br>";
        echo "Apellido: {$this->apellido}<br>";
        echo "DNI: {$this->dni}<br>";
        echo "Tipo: {$this->tipo}<br>";
        echo "Arancel: {$arancel}<br>";
        echo "Edad: {$edadActual}";

        
    }//Fin else

    }//Fin de la funcion



}






?>