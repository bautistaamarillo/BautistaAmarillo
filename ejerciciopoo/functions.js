function tipoSelect(valor) {

    let asignavalor = document.getElementById("valorarancel");
    
    if (valor == "alumno"){
        asignavalor.value = 500
  
    }
        if(valor == "docente"){
            asignavalor.value = 1000

        }
            if(valor == "nullvalue"){
                asignavalor.value = 0
            }

}