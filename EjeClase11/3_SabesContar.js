// pedir un numero al usuario
const prompt = require ("prompt-sync")();

// declarar la variable numero
let numeroPositivo = parseInt(prompt("Ingresa un número positivo: "));

// contar con for desde 1 hasta el numero ingresado
for (let conteo=1; conteo<=numeroPositivo; conteo++){
    console.log(conteo);
}