<?php
require_once("Empleado.php");


class Repartidor extends Empleado{
    public $zona ;

    public function setZona($zona){  //Para editar el atributo zona.
        $this->zona=$zona;
    }

    public function plus(){
        if ($this->edad >= 25 && $this->zona == 'Zona A') {
            $this->salario = $this->salario+self::PLUS;
        }

    print" El empleado: {$this->nombre} {$this->apellido}, Edad: {$this->edad} años, que reparte en zona: {$this->zona} cobra: \${$this->salario}";
     
    }


}


?>