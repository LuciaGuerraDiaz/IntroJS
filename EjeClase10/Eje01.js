//Declaro variables numericas
const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("💻Ingrese el primer número: "));
let numero2 = parseFloat(prompt("💻Ingrese el segundo número: "));

//Declarar si son iguales o uno es mayor que el otro. PRIMER INTENTO

//if (numero1 === numero2) {
//    console.log("Los números son iguales (" + numero1 + ") Igual (" + numero2 + ").");
//} else if (numero1 > numero2) {
//    console.log("El primer número es (" + numero1 + ") Es mayor que el segundo número (" + numero2 + ").");
//} else {
//    console.log("El segundo número es (" + numero2 + ") Es menor que el primer número (" + numero1 + ").");
//}
//console.log("Fin del programa.");

///EL PRIMER INTENTO Me da error si los numeros ingresados no son igules. Una vez que ingreso dos numeros iguales, funciona bien.
if (numero1 > numero2) {
    console.log("El primer número es (" + numero1 + ") Es mayor que el segundo número (" + numero2 + ").");
} else if (numero1 < numero2) {
    console.log("El primer número es (" + numero1 + ") Es menor que el segundo número (" + numero2 + ").");
} else {
    console.log("Los números son iguales (" + numero1 + ") Igual (" + numero2 + ").");
}
console.log("Fin del programa 😎.");