<?php
trait Carrito{

     public $strProducto; //str (string)
     public $intCantidad; // int (integer)


     public function setCarrito(string $Producto,int $Cantidad){
       
        $this->strProducto=$Producto;
        $this->intCantidad=$Cantidad;


}
}

?>