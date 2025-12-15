//Genera una tabla de multiplicar del 1 al 10
const prompt = require ("prompt-sync")();

// Numero al usuario
let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar del 1 al 10: "));

console.log("Tabla de multiplicar del " + numero + ":");
for (let multiplica = 1; multiplica <= 10; multiplica++) {
    let resultado = numero * multiplica;
    console.log(numero + " x " + multiplica + " = " + resultado);
}
