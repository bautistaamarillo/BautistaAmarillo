function sumar (num1,num2) {

    let resultado = num1+num2;
    console.log(resultado);
}



function sumar1(){
let auxi1 = document.getElementById("a1").value;
let auxi2 = document.getElementById("b1").value;



console.log(auxi1);
let resul = Number(auxi1) + Number(auxi2);
console.log (resul)

document.getElementById("id_resultado").innerHTML = "Resultado: " + resul;

if (auxi1 > auxi2){
    alert("A Es mayor")
}
else{ (auxi1 < auxi2) 
 alert("B Es mayor")
} 

}

