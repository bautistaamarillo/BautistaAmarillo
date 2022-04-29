function array(){
let miarray = [99,4,34,93,1];

//
//ordenar
//mostrar valores si son > 50

miarray.sort ( (a, b) => {
    if (a == b) {
        return 0;
    }
    if(a < b) {
        return -1;
    }
    return 1;
});
//console.log(miarray) (Con este console log verificaba que los numeros se hayan ordenado)

for (let i = 0;i< miarray.length;  i ++){
    if (miarray[i]>50){
    console.log("El numero: "+miarray[i]+ " es mayor a 50");
        }
    }
    for (let i = 0;i< miarray.length;  i ++){
    if (miarray[i] % 2 == 0)
        console.log("El numero: " +miarray[i]+ " es par");
    }
    }



