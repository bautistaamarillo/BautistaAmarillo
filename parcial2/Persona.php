<?php
class Persona {
public $nombre;
public $edad;
public $dni;


//METODOS:

///Constructor

public function __construct($nombre,$edad,$dni){
$this->nombre = $nombre;
$this->edad = $edad;
$this->dni = $dni;
}
////////////GETTERS//////////////

public function getNombre(){
    return $this->nombre;
}
public function getEdad(){
    return $this->edad;
}
public function getDni(){
    return $this->dni;
}

////////////SETTERS//////////////

public function setNombre($nombre){  
    $this->nombre=$nombre;
}
public function setEdad($edad){
    $this->edad=$edad;
}
public function setDni($dni){
    $this->dni=$dni;
}

///Mostrar

public function mostrar(){
    echo "Los datos de la persona son; <br>
    Nombre: {$this->nombre}<br>
    Edad: {$this->edad}<br>
    DNI: {$this->dni}<br><br>"; //Utilizo 2 br para que despues de mostrar los datos, el siguiente texto no este de corrido.
}

//esMayorDeEdad

public function esMayorDeEdad(){
    if($this->edad >= 18){ //Para devolver una respuesta logica,primero verifico que la edad sea mayor o igual a 18
        return true;
    }
    else {
        return false;
    }
}




}













?>