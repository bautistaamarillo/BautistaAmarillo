<?php
trait Date{
public $fechaNacimiento;
public $fechaActual;
public $edadActual;

    public function comparaEdad($fechaNacimiento){
    $fechaNacimiento = new DateTime($fechaNacimiento);
    $fechaActual = new DateTime(date("Y-m-d")); //Al no pasarle parametros, por defecto ingresa la fecha actual

    $edadActual = $fechaActual->diff($fechaNacimiento)->y;//Hago la diferencia, y utilizo "->y" para mostrar los ultimos 2 digitos
        return $edadActual;
    }

    public function detectarBirthday($fechaNacimiento){
        $fechaNacimiento = new DateTime($fechaNacimiento);
        $birthday = $fechaNacimiento->format("m-d"); //Utilizo ->format para que unicamente me devuelva lo deseado
        return $birthday; //me devuelve solo el mes y el dia de la fecha de nacimiento (cumpleaños).

    }


}







?>