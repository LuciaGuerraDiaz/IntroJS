const prompt = require('prompt-sync')();

// Perdir colores primarios al usuario

let color1 = prompt("💻Ingrese un color primario: ");
let color2 = prompt("💻Ingrese otro color primario: ");

// Determinar el color resultante de la mezcla
if ((color1 === "rojo" && color2 === "azul") || (color1 === "azul" && color2 === "rojo")) {
    console.log("La mezcla de rojo y azul da como resultado el color violeta.");
} else if ((color1 === "rojo" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "rojo")) {
    console.log("La mezcla de rojo y amarillo da como resultado el color naranja.");
} else if ((color1 === "azul" && color2 === "amarillo") || (color1 === "amarillo" && color2 === "azul")) {
    console.log("La mezcla de azul y amarillo da como resultado el color verde.");
} else {
    console.log("Colores no válidos o no primarios ingresados.");
}