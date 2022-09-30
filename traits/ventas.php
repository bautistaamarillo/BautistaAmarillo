<?php
require_once("Tienda.php");

$producto = $_POST["producto"];
$precio = $_POST["precio"];
$stock = $_POST["stock"];
$cantidad = $_POST["cantidad"];

$objProducto = new Tienda();
$objProducto->setProducto($producto, $precio, $stock);
$objProducto->setCarrito($producto, $cantidad);

//echo $objProducto->intStock;
if ($cantidad<=($objProducto->intStock) && $cantidad>0){
    $objProducto->setStock($cantidad);
    echo $objProducto->getProducto();
    echo $objProducto->getCarrito();
}else{
    echo "error stock no disponible";
}





?>


