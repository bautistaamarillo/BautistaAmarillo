<?php
class Cuenta{
public  $titular;
public  $cantidad;
public  $cantidadIngresada;
public  $cantidadRetirada;

//Metodos:
//Constructor
public function __construct( $titular,$cantidad){
    $this->titular = $titular;
    $this->cantidad = $cantidad;
    }

//GETTERS//
public function getTitular(){
    return $this->titular;
}
public function getCantidad(){
    return $this->cantidad;
}
//SETTERS//
public function setTitular($titular){  
    $this->titular=$titular;
}
public function setCantidad($cantidad){  
    $this->cantidad=$cantidad;
}

//Mostrar
public function mostrar(){
    echo "Los datos de la persona son; <br>
    Nombre: {$this->titular}<br>
    Cantidad: {$this->cantidad}<br><br>"; 
}

//metodo ingresar
public function ingresar($cantidadIngresada){
    if ($cantidadIngresada > 0 ){
$this->cantidad =$this->cantidad + $cantidadIngresada;
    }

}
//Metodo Retirar
public function retirar($cantidadRetirada){
    $this->cantidad = $this->cantidad - $cantidadRetirada;
}










}






?>