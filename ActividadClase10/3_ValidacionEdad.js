//Declaro variables numericas
const prompt = require('prompt-sync')();

const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

let edadUsuario = parseInt(prompt("💻Ingrese su edad: "));
//Validar si la edad ingresada esta dentro del rango permitido
if ((edadUsuario >= EDAD_MINIMA) && (edadUsuario <= EDAD_MAXIMA)) {
    console.log("Hola, usted tiene " + edadUsuario + " años, por tu edad y puede continuar.");
} else {
    console.log("Lo siento, usted tiene " + edadUsuario + " años, por tu edad no puedes continuar.");
}