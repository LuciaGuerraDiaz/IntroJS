// Libreria promt
const prompt = require('prompt-sync')();

//Declaro variables
let primerNumero = prompt("Bienvenido, ingrese un número: ");
let segundoNumero = prompt("Ingrese otro número: ");

//Convierto las variables a tipo numero
primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);

//Realizo las operaciones
let resultadoSuma = primerNumero + segundoNumero;
let resultadoResta = primerNumero - segundoNumero;
let resultadoMultiplicacion = primerNumero * segundoNumero;
let resultadoDivision = primerNumero / segundoNumero;

//Muestro los resultados por consola
console.log("El resultado de sumar tus números es: " + resultadoSuma);
console.log("El resultado de la resta de tus números es: " + resultadoResta);
console.log("El resultado de la multiplicación de tus números es: " + resultadoMultiplicacion);
console.log("El resultado de la división de tus números es: " + resultadoDivision);

console.log("¡Gracias por usar la calculadora!");