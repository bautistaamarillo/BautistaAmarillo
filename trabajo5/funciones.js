//3 objetos que se llamen persona
//tienen que tener nombre, apellido, edad, sexo,nombres y apellidos random
//la persona 1 tiene que tener 33, masculino
//la persona 2 tiene que tener 12 femenino
//la persona 3 tine que tener 94 femenino
//Un cuarto objeto que se llame mostrarpersona 

//para ejecutarlo: mostrar una funcion que hagamos (nombre a eleccion)
//- en cada persona debe haber una funcion que devuelva el apellido,nombre 
//desde mostrarpersona cuando pida nombre completo, tiene que devolver el nombre completo
// y que cuando pongamos mostrarpersona al final, que muestre todas las personas mayores a 18years
//en consolelog
//cada objeto tiene que tener una funcion que devuelva "apellido, nombre" en ese orden
//+indentado


const persona1= {
    nombre:"Magnus",
    apellido:"Carlsen",
    edad: 33,
    sexo: "masculino",
    apellido_nombre: function(){
        return this.apellido+", "+this.nombre;
    }

}
const persona2= {
    nombre:"Rocio",
    apellido:"Quiroz",
    edad: 12,
    sexo: "femenino",
    apellido_nombre: function(){
        return this.apellido+", "+this.nombre;
    }
}
const persona3= {
    nombre: "Mirtha",
    apellido:"Legrand",
    edad: 94,
    sexo: "femenino",
    apellido_nombre: function(){
        return this.apellido+", "+this.nombre;
    }
}

const mostrarpersona = {
    mostrarfinal:function(){
        if (persona1.edad >18){
            console.log("Esta persona es mayor de 18 años: "+persona1.apellido_nombre());
        }
        if (persona2.edad >18){
            console.log("Esta persona es mayor de 18 años: "+persona2.apellido_nombre());
        }
        if (persona3.edad >18){
            console.log("Esta persona es mayor de 18 años: "+persona3.apellido_nombre());
        }

    }
}    

mostrarpersona.mostrarfinal()