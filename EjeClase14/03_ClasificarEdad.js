// Solicito al usuarios su edad y le digo en que categoria se encuentra.

const prompt = require("prompt-sync")();

console.log("Clasificador de Edad");    
// Solicito la edad
const edad = parseInt(prompt("Por favor, ingrese su edad: "));  
// Clasifico la edad
let categoria = "";
if (edad < 0) {
    categoria = "No naciste aún";
} else if (edad < 13) {
    categoria = "Eres un Niño";
} else if (edad >= 13 && edad < 18) {
    categoria = "Adolescente";
} else if (edad >= 18 && edad < 65) {
    categoria = "Adulto";
} else {
    categoria = "Adulto Mayor";
}
console.log(`Usted es ${categoria}.`);