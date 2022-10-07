<?php
require_once("Cuenta.php");
 class CuentaJoven extends Cuenta{
    public $bonificacion;
    public $edad;
    
    //Metodos:
    //Constructor
    public function __construct( $titular,$edad,$cantidad,$bonificacion){
        $this->titular = $titular;
        $this->edad = $edad;
        $this->cantidad = $cantidad;
        $this->bonificacion = $bonificacion;
    }

    //GETTERS//
    public function getTitular(){
        return $this->titular;
    }
    public function getEdad(){
        return $this->edad;
    }
    public function getCantidad(){
        return $this->cantidad;
    }
    public function getBonificacion(){
        return $this->bonificacion;
    }

    //SETTERS//

public function setTitular($titular){  
    $this->titular=$titular;
}
public function setEdad($edad){
    $this->edad=$edad;
}
public function setCantidad($cantidad){  
    $this->cantidad=$cantidad;
}
public function setBonificacion($bonificacion){
    $this->bonificacion=$bonificacion;
}

//esTitularValido

public function esTitularValido(){
    if ($this->edad >= 18 and $this->edad < 25) {
        return true;
    }
    else{
        return false;
    }
}

//mostrar
public function mostrar(){

    if ($this->esTitularValido()){
        echo "Cuenta Joven,<br>
        Bonificacion: {$this->bonificacion}";

    }

}





}






?>