//Ejercicio 2: Número positivo, negativo o cero
const prompt = require ('prompt-sync')();
let numero = parseFloat(prompt("Ingrese un número, por favor: "));
if (numero > 0){
    console.log("El valor ingresado es positivo.");
} else if (numero < 0){
    console.log("El valor ingresado es negativo.");
}
else {
    console.log("El valor ingresado es cero.");
}