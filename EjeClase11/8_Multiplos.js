//Crear un programa de multiplos
const prompt = require ("prompt-sync")();
console.log("Multiplos de un número");
// Ingreso de numero
let numero = parseInt(prompt("Ingresa un número para ver sus múltiplos hasta el 100: "));

console.log("Múltiplos de " + numero + " hasta el 100:");
for (let multiplo = 1; multiplo * numero <= 100; multiplo++) {
    let resultado = numero * multiplo; // puedo usar numero += multiplo
    console.log(resultado);
}
