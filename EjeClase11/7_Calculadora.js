//Generar una calculadora
const prompt = require ("prompt-sync")();
console.log("Calculadora");
// Ingreso de numeros
let numero1 = parseFloat(prompt("Ingresa un número: "));
let operacion = prompt("Ingresa la operación (+, -, *, /): ");
let numero2 = parseFloat(prompt("Ingresa un número: "));

switch (operacion) {
    case "+":
        console.log("Resultado: " + (numero1 + numero2));

        break;
    case "-":
        console.log("Resultado: " + (numero1 - numero2));
        break;
    case "*":
        console.log("Resultado: " + (numero1 * numero2));
        break;
    case "/":
        console.log("Resultado: " + (numero1 / numero2));
        break;
    default:
        console.log("Operación no válida"); 
        break;
}
