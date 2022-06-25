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

function botonbusqueda(){
var busquedadni = document.getElementById("documento").value;
let valores;
socios.forEach(element => {
    if (element.DNI == busquedadni){ //verifico que el dni ingresado sea igual a alguno de los socios
        valores = element //le asigno los datos de element a valores.
    } 
    if(valores==undefined){ //si valores es undefined, entonces no existe.
        document.getElementById("mensaje_verificacion").style.backgroundColor="red";
        document.getElementById("mensaje_verificacion").innerHTML = "No existe";
    }
    else{ 
    let nombre = valores.nombre;
    let apellido = valores.apellido;
    let facturas = valores.facturas;
    let color;
   
    const verde = 3; 
    const amarillo = 6; 
    
    if(facturas <= verde){ //menor e igual ya que de ser solo menor, toma los valores 2,1 pero no el 3
    color= "green";  
    }
    if(facturas >verde && facturas<amarillo ){ //Si es mayor a 3 y menor a 6 entonces muestra amarillo
    color= "yellow";  
    }
    if(facturas >amarillo){ //si tiene mas de 6 facturas cambia el color a rojo
    color="red"; 
    }

    document.getElementById("mensaje_verificacion").style.backgroundColor=color; //utilizo color para asignarle el color al fondo,dependiendo la cantidad de facturas
    document.getElementById("mensaje_verificacion").innerHTML ="Nombre: "+nombre+" "+apellido+ ",Facturas: "+facturas; //muestro nombre y facturas del socio

    }   
});
}


//Consigna: se necesita buscar por el dni
//Si el socio  no existe mostrar el fondo rojo y texto que diga No existe.
// Si existe, evaluar lo siguiente : si tiene menos de tres facturas, mostrar en verde
// Si  tiene + 3 y -6 mostrar en amarillo y si tiene +6 mostrar en rojo, en todos los casos
//Mostrar nombre y cantidad de facturas.
//El 3 deberia aparecer en verde,por ende tendria que ser menor e igual a 3