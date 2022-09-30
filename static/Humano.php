<?php
class Humano{
    public static $nombre = "Bautista Amarillo";
    public static function saludar(){
        echo "Hola mundo!";
    }
    public function saludoPersonalizado(){
        echo "Hola ". self::$nombre;

    }


}
// $humano = new Humano;
// $humano->saludoPersonalizado();

// echo Humano::$nombre."<br>";
// echo Humano::saludar();

class Argentina extends Humano{
    public function saludarArgentino(){
        echo "Hola ".parent::$nombre;
    }

}
echo Argentina::saludarArgentino();







?>