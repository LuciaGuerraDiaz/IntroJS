// Declara una variable nombre y pide al usuario uno, verifica si el ingresado es igual a tu nombre.

const prompt = require('prompt-sync')();

let nombre = (prompt("Ingrese su nombre: "));
if (nombre === "Lucia") {
    console.log("¡Hola, Lucia! ¡Bienvenida!");
}
else if (nombre !== "Lucia") {
    console.log("Hola, " + nombre + ". ¡No es el nombre que esperaba!");
}

