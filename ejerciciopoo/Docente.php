<?php
require_once("Persona.php");
class Docente extends Persona{
    use Date;

    public function calcArancel($arancel,$edadActual,$birthday){
        // $edadActual = $this->comparaEdad($this->fechaNacimiento); //Puedo mostrar el edadactual del trait de esta manera, o agregandolo como parametro a la funcion
        $fechaActual = new DateTime();
        $fechaActual = $fechaActual->format("m-d");//Le asigno a fecha actual, solamente el mes y el dia para poder compararlo con el mes y dia de su cumpleaños.

        if($edadActual <= 17){
            echo"Usted es menor de edad, no puede ingresar."; //Si es menor a 18 error, y sino resuelvo.
        }
        else{
        if ($edadActual >= 40){
            $this->arancel=$this->arancel - ($this->arancel*0.10); //descuento del diez %
        }

        if ($fechaActual == $birthday){
            $this->arancel=$this->arancel * 2; //multiplico el arancel por dos.
        }
        $arancel = $this->arancel;
        echo "Nombre: {$this->nombre}<br>";
        echo "Apellido: {$this->apellido}<br>";
        echo "DNI: {$this->dni}<br>";
        echo "Tipo: {$this->tipo}<br>";
        echo "Arancel: {$arancel}<br>";
        echo "Edad: {$edadActual}";




        } //Fin else

    } //Fin funcion



}//Fin clase





?>