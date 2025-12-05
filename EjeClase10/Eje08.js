//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo. Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)
const prompt = require('prompt-sync')();

let lado1 = (prompt("💻Ingrese la longitud del primer lado del triángulo: "));
let lado2 = (prompt("💻Ingrese la longitud del segundo lado del triángulo: "));
let lado3 = (prompt("💻Ingrese la longitud del tercer lado del triángulo: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Los tres lados son iguales. Equilatero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es isósceles. Tiene dos lados iguales.");
} else {
    console.log("Los tres lados son diferentes escaleno.");
}