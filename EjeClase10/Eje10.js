//Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana correspondiente. Si el número no está dentro de ese rango, muestra un mensaje de error.
const prompt = require('prompt-sync')();
let numero = (prompt("💻Ingrese un número del 1 al 7: "));
switch (numero) {
    case '1':
        console.log("El día correspondiente es Lunes.");
        break;
    case '2':
        console.log("El día correspondiente es Martes.");
        break;
    case '3':
        console.log("El día correspondiente es Miércoles.");
        break;
    case '4':
        console.log("El día correspondiente es Jueves.");
        break;
    case '5':
        console.log("El día correspondiente es Viernes.");
        break;
    case '6':
        console.log("El día correspondiente es Sábado.");
        break;
    case '7':
        console.log("El día correspondiente es Domingo.");
        break;
    default:
        console.log("Error: Número fuera de rango. Por favor ingrese un número del 1 al 7.");
        break;
}