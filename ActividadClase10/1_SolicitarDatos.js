//Usar libreria prompt-sync para solicitar datos por consola
const prompt = require('prompt-sync')();
//Declaro dos variables usando let, //Solicito al usuario que ingrese su nombre

let nombre = prompt("Por favor, ingresa tu nombre: ");
let edad = prompt("Por favor, ingresa tu edad: ");
let peso = prompt("Por favor, ingresa tu peso en kg: ");

//Muestro un mensaje de bienvenida con los datos ingresados

console.log("Bienvenido tu nombre es: " + nombre + " tienes " + edad + " años y tu peso es de: " + peso + "kilogramos.");