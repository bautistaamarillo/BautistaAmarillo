<?php
require_once("Carrito.php");
require_once("Producto.php");
Class Tienda{
        use Carrito,Producto;
        public $fltTotal=0;

    public function getCarrito(){

        $this->fltTotal=$this->fltPrecio*$this->intCantidad;

        $infoCarrito="<h2> Carrito <h2/>
        <hr> Producto: {$this->strProducto} <br>
        <hr> Cantidad: {$this->intCantidad} <br>
        <hr> Precio: \${$this->fltPrecio} <br>
        <hr> Total: \${$this->fltTotal} <br>";


        return $infoCarrito;

}





}


?>