//Pide al usuario que ingerse tres numeros y determina cuál es el mayor de los tres.
const prompt = require('prompt-sync')();

let numero1 = (prompt("Ingrese el primer número: "));
let numero2 = (prompt("Ingrese el segundo número: "));
let numero3 = (prompt("Ingrese el tercer número: "));

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El número mayor es: " + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El número mayor es: " + numero2);
} else {
    console.log("El número mayor es: " + numero3);
}