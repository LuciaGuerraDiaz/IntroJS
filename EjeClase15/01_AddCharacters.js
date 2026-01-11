//Añadir personales a la lista de Videojuegos

const characters = [
    "Link", "Zelda"
]; 

characters.push("Mario", "Luigui"); // Push agrega los nombres al array

const prompt = require("prompt-sync")();
const personajeAdd = prompt("Ingrese otro personaje: ")

characters.push(personajeAdd)

console.log(characters)