const prompt = require ('prompt-sync')();
//Pedimos al usuario que ingrese un número
let numero = parseFloat(prompt("Ingrese un número, por favor: "));
let doblenumero = numero * 2;
console.log("El doble del número ingresado es: " + doblenumero);

//Practica: Ejecuta el programa varias veces con diferentes números para verificar que funciona correctamente.