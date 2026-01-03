// Funcion declarada usando una variable local, que guarda el resultado

function esPar (numero){
    let resultado; //variable local
    if (numero % 2 === 0){
        resultado = "Es par";
    } else {
        resultado = "Es impar"; 
    }
    return resultado;
}

console.log(esPar(4));
console.log(esPar(7));