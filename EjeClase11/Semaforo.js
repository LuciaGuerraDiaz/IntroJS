// Pedir colores al usuario
const prompt = require ("prompt-sync")();

// Declarar la variable color del semáforo
let color = prompt("Ingresa un color (rojo, amarillo, verde): ");

// Evaluar el color ingresado con la accion del semaráforo

switch(color.toLowerCase()){
    case "rojo": console.log("Semáforo en " + color + ": Alto, no puedes avanzar."); 
    break;
    case "amarillo": console.log("Semáforo en " + color + ": Precaución, prepárate para avanzar.");
    break;
    case "verde": console.log("Semáforo en " + color + ": Avanza con seguridad.");
    break;
    default: console.log("Color no válido. Por favor ingresa rojo, amarillo o verde.");
    break;
}
