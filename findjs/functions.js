//5 Objetos
let socio1={
    apellido: "Parra",
    nombre: "Javier",
    edad: 41,
    facturas: 1,
    DNI: 1,
}
let socio2={
    apellido: "Bautista",
    nombre: "Amarillo",
    edad: 20,
    facturas: 5,
    DNI: 2,
}
let socio3={
    apellido: "Leo",
    nombre: "Mattioli",
    edad: 38,
    facturas: 7,
    DNI: 3,
};
let socio4={
    apellido: "Horacio",
    nombre: "Quiroga",
    edad: 71,
    facturas: 20,
    DNI: 4,
};
let socio5={
    apellido: "Blass",
    nombre: "Parera",
    edad: 92,
    facturas: 7,
    DNI: 5,
}

let socios=[socio1,socio2,socio3,socio4,socio5];
// console.log("Este es el array"+socios);
function botonbusqueda(){
var busquedadni = document.getElementById("documento").value; //valor ingresado en la pagina

 resultado = socios.find(socio => socio.DNI == busquedadni) //busca en que socio el dni coincida con el valor ingresado
//  console.log(resultado);
 if (resultado == undefined){ //Si resultado no coincide con ningun valor entonces:
     document.getElementById("mensaje_verificacion").style.backgroundColor="red";
     document.getElementById("mensaje_verificacion").innerHTML = "No existe";
}else{ //si coincide entonces:
let nombre = resultado.nombre;
let apellido = resultado.apellido;
let facturas = resultado.facturas;
let color;

const verde = 3;  
const amarillo = 6; 

if(facturas <= verde){ 
color= "green";  
}
if(facturas >verde && facturas<amarillo ){
color= "yellow";  
}
if(facturas >amarillo){ 
color="red"; 
}
     document.getElementById("mensaje_verificacion").style.backgroundColor=color;
     document.getElementById("mensaje_verificacion").innerHTML ="Nombre: "+nombre+" "+apellido+ ",Facturas: "+facturas;
}
}

//Consigna: se necesita buscar por el dni
//Si el socio no existe mostrar en rojo No existe.
// Si existe, evaluar lo siguiente : si tiene menos de tres facturas, mostrar en verde
// Si  tiene + 3 y -6 mostrar en amarillo y si tiene +6 mostrar en rojo, en todos los casos
//Mostrar nombre y cantidad de facturas.
//El 3 deberia aparecer en verde,por ende tendria que ser menor e igual a 3