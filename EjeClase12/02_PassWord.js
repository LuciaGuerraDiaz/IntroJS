// Generar una contraseña 1234
const prompt = require("prompt-sync")();
//variables
let password = "1234";
let ingreso;

do {
    ingreso = prompt("Ingrese la contraseña, solo 4 números: "); //pide la contraseña
    
    if (ingreso.length === 4 && !isNaN(ingreso)) {
        console.log("4 Datos, procesando..."); //valida el ingreso de 4 números
        continue; // vuelve a pedir la contraseña) 
    } else {
        console.log("La contraseña debe tener 4 números. Intente nuevamente.");
        continue; // vuelve a pedir la contraseña
        }
    }
while (ingreso !== password) {
    console.log("Contraseña correcta. Bienvenido!"); //verifica si la contraseña es correcta
}