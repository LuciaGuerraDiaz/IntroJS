//Crear una funcion expresada llamada calcularFactorial, 
//fórmula factorial n! = n x n - ) x ... x1

const prompt = require("prompt-sync")();

console.log("CONVERSOR A NUMERO FACTORIAL");

const calcularFactorial = function calcularFactorial(numeroUsuario) {
    let factorial = 1;
    for (let i = numeroUsuario; i > 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

let numeroUsuario = prompt("Ingres un numero: ");
console.log("El factorial es: " + calcularFactorial(numeroUsuario));