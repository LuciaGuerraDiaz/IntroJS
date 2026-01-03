// Contar hasta

const prompt = require("prompt-sync")();

console.log("CONTAR HASTA EL NÚMERO...")

let numeroUsuario = parseFloat(prompt("Ingresa un número para contar: "));

function contarHasta (numeroUsuario) {
    numerosConteo = [];
    for (let i = 1; i <= numeroUsuario; i++){
    numerosConteo.push(i);
    }
    console.log(numerosConteo.join(" - "));
}

contarHasta(numeroUsuario);