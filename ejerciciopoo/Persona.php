<?php
require_once("Date.php");
class Persona {
    use Date;
    public $nombre;
    public $apellido;
    public $dni;
    public $tipo; //en caso de ser alumno o docente. 
    public $arancel;  
    public $edadActual;


    public function __construct($nombre,$apellido,$dni,$tipo,$arancel){ //Metodo constructor
        $this->nombre=$nombre;
        $this->apellido=$apellido;
        $this->dni=$dni;
        $this->tipo=$tipo;
        $this->arancel=$arancel;
    }

//////////////////GETER///////////////////
public function getNombre(){
    return $this->nombre;
}
public function getApellido(){
    return $this->apellido;
}
public function getDni(){
    return $this->dni;
}     
public function getTipo(){
    return $this->tipo;
}
public function getArancel(){
    return $this->arancel;
}
public function getEdadActual(){
    return $this->edadActual;
}

/////////////////SETER////////////////////
public function setNombre($nombre){  
    $this->nombre=$nombre;
}
public function setApellido($apellido){
    $this->apellido=$apellido;
}
public function setDni($dni){
    $this->dni=$dni;
}
public function setTipo($tipo){
    $this->tipo=$tipo;
}
public function setArancel($arancel){
    $this->arancel=$arancel;
}
// No hara falta un set edad, ya que se consigue la misma comparando la fecha de nacimiento y la fecha actual.


} //cierra class

?>