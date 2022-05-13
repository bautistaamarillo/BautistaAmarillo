let mostrarejemplo = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Capitan America",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
        ,
        nombres: function(){
        return this.name;
        }
      },
      {
        "name": "Iron Man",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
        ,
        nombres: function(){
        return this.name;
        }
      },
      {
        "name": "Sub Zero",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
        ,
        nombres: function(){
        return this.name;
        }
      }
    ]
  }

function botonedad(){ 
for (const key in mostrarejemplo.members){
const element=mostrarejemplo.members[key];

if (element.age > 100) {
let nombrefinal = element.name
document.getElementById("botontarea").innerHTML = "Nombre : "+nombrefinal;
            }
         }
    }

function botonreset(){
    location.reload()
}
 // Consigna
  //boton reset que al apretarlo refresque la pagina
  // en el html hacer una etiqueta que diga nombre: y un boton en cualquier parte de la pantalla
  // que diga enviar y cuando apretemos el boton tiene que aparecer al lado de nombre
  //el nombre de aquel superheroe que tenga mas de 100 años 

  //anotaciones
//- Funcion botonedad usando key y element muestro los valores deseados, con el if compruebo la edad y mando el nombre a la variable nombrefinal