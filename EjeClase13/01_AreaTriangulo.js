// Ara triangulo
const prompt = require("prompt-sync")();

let base = 0;
let altura = 0;

function calcularAreaTriangulo(base, altura) {
    return ((base * altura)/2);
}
//pedir dato al usuario

base = parseFloat(prompt("Ingrese la medida de la base del triángulo: "));
altura = parseFloat(prompt("Ingrese la medida de la base del triángulo: "));

// Calcular datos ingresados y mostrar resultado
let area = calcularAreaTriangulo(base, altura);
console.log("Los datos ingresados son: Base: " + base, "Altura: " + altura)
console.log("El área del Triángulo es:", area);