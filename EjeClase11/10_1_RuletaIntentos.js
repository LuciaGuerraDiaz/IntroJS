//Generamos nuevamente el juego de adivinar numeros, pero esta vez con 3 intentos

//libreria
const prompt = require("prompt-sync")();
//generamos un numero aleatorio entre 1 y 10
let numeroGanador = Math.floor(Math.random() * 10) +1;
// Establecer el número de intentos.
let victoria = false;
// pedimos al usuario que ingrese un numero
console.log("Bienvenido al juego, tendrás tres intentos para adivinar el número secreto, ingresa un número del 1 al 10" );
//Ciclo de for para los 3 intentos
for (let intentos = 1; intentos <= 3; intentos++) {
    //pedimos al usuario que ingrese un numero  
    let numeroUsuario = parseInt(prompt("Adivina el numero entre 1 y 10: "));

    //comparamos el numero del usuario con el numero ganador
    if (numeroUsuario === numeroGanador) {
        console.log("¡Felicidades! Has adivinado el número correcto: " + numeroGanador);
        victoria = true;
        break; // Salir del ciclo si el usuario adivina correctamente
    } else {
        console.log("Número incorrecto. Te quedan " + (3 - intentos) + " intentos.");
    }
}
// Mensaje final si no se adivina el número
if (!victoria) {
    console.log("Lo siento, has agotado tus intentos. El número correcto era: " + numeroGanador);
}