function mostrarResultados(){
let id = document.getElementById("idingresada").value;
        fetch("https://rickandmortyapi.com/api/character/"+id)
        .then (res => res.json())
        .then (data => {
            
        
        let nombre = data.name;
        let estado = data.status;
        let especie = data.species;
        let tipo = data.type;
        let sexo = data.gender;
        let origen = data.origin.name;
        let ubicacion= data.location.name;
        let imagen= data.image;

        let html = `ID: ${id}<br>
        Nombre: ${nombre}  <br> 
        Estado: ${estado} <br>
        Especie: ${especie} <br>
        Tipo: ${tipo} <br>
        Sexo: ${sexo} <br>
        Origen: ${origen}<br>
        Ubicacion: ${ubicacion}<br>
        Imagen: <img src= "${imagen}">
        ` //Finalizo el codigo html, todo esto asignado a una variable html

        document.getElementById("mensajefinal").innerHTML = html



        //Le asigno valores teniendo en cuenta las id para luego obtenerlos por un form y pasarlos a php
        document.getElementById("id").value = id;
        document.getElementById("name").value = nombre;
        document.getElementById("status").value = estado;
        document.getElementById("species").value = especie;
        document.getElementById("type").value = tipo;
        document.getElementById("gender").value = sexo;
        document.getElementById("origin").value = origen;
        document.getElementById("location").value = ubicacion;
        document.getElementById("image").value = imagen;
   
    
    })


}