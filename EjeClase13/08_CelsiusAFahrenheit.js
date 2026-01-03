// crear una funcion f= (cx9/) +32 

const prompt = require ("prompt-sync")();
//const prompt = require ("prompt-sync")();  

console.log("CONVERSOR GRADOS CELSIUS A FAHRENHEIT");

let celsius = parseFloat(prompt("Ingresa los grados Celsius, que quieres convertir a Fahrenheit: "));

function convertirCelsiusAFahrenheit (celsius) {
    let fahrenheit = (celsius * 9)/5 + 32
    return fahrenheit;
}
let resultado = convertirCelsiusAFahrenheit(celsius);
console.log ("Los", celsius, "°C son:", resultado, "°F");