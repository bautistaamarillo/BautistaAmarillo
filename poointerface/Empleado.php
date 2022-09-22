<?php
 
class Empleado{ //clase
  public $nombre ;
  public $apellido ;
  public $edad ;
  public $salario;
  const PLUS = 300;
 
  public function __construct($nombre,$apellido,$edad,$salario){ //Metodo constructor
  $this->nombre = $nombre;
  $this->apellido = $apellido;
  $this->edad = $edad;
  $this->salario = $salario;
 }
 
 public function getNombre(){
    return $this->nombre;
 }
    public function getApellido(){
        return $this->apellido;
    }
        public function getEdad(){
            return $this->edad;
        }
            public function getSalario(){
                return $this->salario;
            }
 
   public function setNombre($nombre){  
    $this->nombre=$nombre;}

    public function setApellido($apellido){  
        $this->apellido=$apellido;}

        public function setEdad($edad){  
            $this->edad=$edad;}
            
            public function setSalario($salario){  
                $this->salario=$salario;}
   
 
}
 
// $empleado = new Empleado ('Bautista','Amarillo','20','200');
 
?>