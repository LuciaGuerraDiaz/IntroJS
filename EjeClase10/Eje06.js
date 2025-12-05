//Pide al usuario que ingrese su edad y verifi ca si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.
const prompt = require('prompt-sync')();

let edad = (prompt("💻Ingrese su edad: "))
if (edad >= 18) {
    console.log("Usted es mayor de edad. ¡Bienvenido!")
} else {edad < 18
    console.log("Usted es menor de edad. ¡Lo siento, no puede ingresar a esta plataforma! Volve en " + (18 - edad) + " años.");
}
