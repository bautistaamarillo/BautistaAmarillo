//5 Objetos
let libro1 = {
    ID: 1,
    autor: "Mark Twain",
    titulo: "El forastero misterioso",
    stock: 5,
    valor: 100,
    editorial: "La Flor",
}
let libro2 = {
    ID: 2,
    autor: "Jorge Borges",
    titulo: "Ficciones",
    stock: 4,
    valor: 120,
    editorial: "Lectores",
}
let libro3 = {
    ID: 3,
    autor: "Jose Hernandez",
    titulo: "Martin Fierro",
    stock: 10,
    valor: 70,
    editorial: "La Flor",
};
let libro4 = {
    ID: 4,
    autor: "Miguel de Cervantes",
    titulo: "La Galatea",
    stock: 3,
    valor: 200,
    editorial: "La Perla",
};
let libro5 = {
    ID: 5,
    autor: "Robert Kiyosaki",
    titulo: "Padre rico, Padre pobre",
    stock: 2,
    valor: 160,
    editorial: "Editorialisima",
}

let libros = [libro1, libro2, libro3, libro4, libro5];

function botonbusqueda() {

    
    var buscaid = document.getElementById("idingresada").value;
    let valores;
    libros.forEach(element => {
        if (element.ID == buscaid) { //verifico la similitud entre la id ingresada, y la de los libros, si existe:
            valores = element //le asigno los datos de element a valores.
        }
        if (valores == undefined) { //si la id ingresada no coincide, entonces:
            //por ende,el libro no esta disponible/no existe.
            document.getElementById("mensaje_final").innerHTML = "El libro no esta disponible.";
        }
        else {
            let valorlibro = valores.valor;
            let editoriallibro = valores.editorial;
            let stocklibro = valores.stock;
            let autorlibro = valores.autor;
            let titulolibro = valores.titulo;
            let color;
            let descu20 = 0;
            let descu5 = 0;

        
            // console.log(descuento20(valorlibro));

            if (valorlibro >= 100) {
                descu20 = descuento20(valorlibro);//descuento  
            }
            if (editoriallibro == "La Flor"){
                descu5 = descuento5(valorlibro);
            }
            if(stocklibro <=5 ){ // Si el stock es menor o igual a 5 cambia el color a rojo
                color = "red";
            }
            else{ // Si es mayor a 5, entonces cambia el color a verde.
                color = "green";
            }


            preciofinal = valorlibro - (descu20 + descu5); // Al precio inicial, le resto los descuentos, en caso de que no tenga ningun descuento, el precio no cambia.
            document.getElementById("mensaje_final").innerHTML = "Autor: "+autorlibro+ '<br>'+"Titulo: "+titulolibro;
            document.getElementById("mensaje_stock").style.backgroundColor = color;
            document.getElementById("mensaje_stock").innerHTML ="Stock: "+stocklibro;
            document.getElementById("idvalor").innerHTML = "Valor: "+preciofinal;

            //utilice esas id distintas, para que unicamente se le modifique el fondo de color al mensaje de Stock :.

        }
    });
}

function descuento20(valorlibro) {
    valordescontado = valorlibro * 0.20 ;
    return valordescontado;
}
function descuento5(valorlibro) {
    valordescontado = valorlibro * 0.05 ;
    return valordescontado;
}