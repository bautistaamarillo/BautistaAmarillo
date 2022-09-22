function tipoempleado(valor) {

    let zona = 'Zona: <input type="text" name="zona"></input> <br>'
    let comision = 'Comision: <input type="text" name="comision"></input> <br>'

    if (valor == "repartidor"){
        document.getElementById("mensaje_tipoempleado").innerHTML = zona
    }

    if (valor == "comercial"){
        document.getElementById("mensaje_tipoempleado").innerHTML = comision
    }

}