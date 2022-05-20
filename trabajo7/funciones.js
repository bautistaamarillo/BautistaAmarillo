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
        
        
        //  document.getElementById("nombre_id").innerHTML = "Nombre : "+nombre;
        //  document.getElementById("apellido_id").innerHTML = "Apellido : "+apellido;
        //  document.getElementById("sexo_id").innerHTML = "Sexo : "+sexo;
        //  document.getElementById("edad_id").innerHTML = "Edad : "+edad;
        //  document.getElementById("email_id").innerHTML = "Email : "+email;
        //  document.getElementById("foto_id").innerHTML = "Foto: " + `<img src= "${foto}">`

        let html = `Nombre: ${nombre}  <br>
        Apellido: ${apellido} <br>
        Sexo: ${sexo} <br>
        Edad: ${edad} <br>
        Email: ${email} <br>
        Foto: <img src= "${foto}"> `
        document.getElementById("datos_id").innerHTML = html
    })


}
      //**** Boton extra de prueba *****
    function botonreset() {  
    location.reload()
    }



    //consigna :
    // En la pagina web que tenemos nosotros, tiene que estar dibujado un boton que diga solicitar datos
    // y que me aparezca en la pantalla el nombre:, el apellido, el sexo, edad, email, y una foto de la persona