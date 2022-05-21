function botonfinal() {
    fetch("https://randomuser.me/api")
    .then (res => res.json())
    .then (data => {
 
 
        let nombre = data.results[0].name.first;
        let apellido = data.results[0].name.last;
        let sexo = data.results[0].gender;
        let edad = data.results[0].registered.age;
        let email = data.results[0].email;
        let foto = data.results[0].picture.large;
        let latitud = data.results[0].location.coordinates.latitude
        let longitud = data.results[0].location.coordinates.longitude
 

 
        // console.log(latitud)
       
        if (sexo == "female" && edad >=20 && edad <=40) { //condicion

            var map = L.map('map').setView([latitud, longitud], 13);
         
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        }).addTo(map);
       
        L.control.scale().addTo(map);
        var marker = L.marker([latitud,longitud]).addTo(map);
 
            let html = `Nombre: ${nombre}  <br>
            Apellido: ${apellido} <br>
            Sexo: ${sexo} <br>
            Edad: ${edad} <br>
            Email: ${email} <br>
            // Foto: <br><img src= "${foto}"> <br> 
            Latitud: ${latitud} <br>
            Longitud: ${longitud} `
 //En Foto: puse el primer <br> para que la foto quede abajo del texto, ya que sino quedaba el texto a la izquierda de la foto
 // Y dejaba un espacio vacio
            document.getElementById("datos_id").innerHTML = html
           
        }
         else{
 
             alert("Este usuario no cumple con los requisitos deseados")
         }
   
         console.log(sexo) // Para verificar que el sexo no sea femenino
         console.log(edad) //Verificacion para ver si la edad cumple la condicion o no
       
    })
 

    }

    //extra boton reset
    function botonreset() {  
    location.reload()
    }
 
 
    // consigna que muestre si y soli si es mujer, y que este en el rango de los 20 a 40 años.
    //si no cumple con las condiciones, que aprezca un cartel que diga :
    // No existe el usuario/a
 
    // Tambien agregarle latitud y longitud.
    // y un mapa que salga la ubicacion de la persona
    // para esto vamos a usar una herramienta que se llame leaflet.js
    //Primero vamos a las dos url .js y .css y las pego en archivos nuevos llamados
    //mapa.js y el css lo guardamos en un archivo que se llame estilos.css
    //para el estilo tengoq ue exportarlo con un href , el mapa.js solo lo pongo en el index.html
    //cuando nosotros apretemos el boton de solicitar datos, mostremos ademas de los datos de la persona
    //que muestre donde vive.
 
    //leaflet.js