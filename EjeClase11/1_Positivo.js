// Ejercicio numero positivo o negativo
// Pedir el numero al usuario

const prompt = require("prompt-sync")();

let cero = 0;
let numero = Number(prompt("Ingrese un número: "));

// Evaluar si el numero es positivo, negativo o cero
if (numero > cero) {
console.log("El número " + numero + " es positivo.");
} else if (numero < cero) {
console.log("El número " + numero + " es negativo.");
} else {
console.log("El número es cero.");
}
