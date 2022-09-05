<?php
require_once("Empleado.php");


class Comercial extends Empleado{
    public $comision; 

    public function setComision($comision){  //Para editar el atributo comision.
        $this->comision=$comision;
    }

    public function plus(){
        if ($this->edad > 30 && $comision > 200) {
            $this->salario = $this->salario+self::PLUS;
        }

        return print"El empleado: {$this->nombre},{$this->apellido}, Edad: {$this->edad} comision:{$this->comision} cobra: \${$this->salario}";
    }

}


?>