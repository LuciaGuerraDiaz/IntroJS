//Define una constante PI con el valor de pi (3.14159). Pide al usuario que ingrese el radio de un círculo y calcula su área y perímetro utilizando la constante PI.

const prompt = require('prompt-sync')();

const PI = 3.14159;

let radio = (prompt("Ingrese el radio del círculo: "));
let area = Math.PI * radio ** 2;
let perimetro = 2 * PI * radio;

console.log("Área del círculo: " + area);
console.log("Perímetro del círculo: " + perimetro);
