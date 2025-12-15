// Adivinar el númeo
const prompt = require ("prompt-sync")();
console.log("Ingresa un número del número del 1 al 10: ");
// Número a adivinar
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;  
// Mientras no adivine
while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt("OTra oportunidad! Ingresa otro número: "));
    if (numeroUsuario === numeroSecreto) {
        console.log("¡Felicidades! ¡Adivinaste el número secreto: " + numeroSecreto + "!");
    }}
