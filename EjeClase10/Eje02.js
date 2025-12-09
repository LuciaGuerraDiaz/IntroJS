// Define dos constantes RANGO_MINIMO y RANGO_MAXIMO con valores numericos a eleccion

const prompt = require('prompt-sync')();
const RANGO_MINIMO = 10;
const RANGO_MAXIMO = 100;

// Solicita al usuario que ingrese un número dentro del rango definido
let numero = parseFloat(prompt(`💻Ingrese un número entre ${RANGO_MINIMO} y ${RANGO_MAXIMO}: `));
console.log(`Número ingresado: ${numero}`);

// Verifica si el número ingresado está dentro del rango
if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está dentro del rango.");
} else {
    console.log("El número está fuera del rango ☹️");
}
console.log("Excelente 😎");
