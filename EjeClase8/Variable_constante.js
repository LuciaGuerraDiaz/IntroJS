//Declaración de variables y constantes, saludo de nombre y edad

let nombre = "Juan"; // Variable que puede cambiar su valor
const edad = 30; // Constante que no puede cambiar su valor

console.log("Mi nombre es:", nombre);
console.log("Edad:", edad);
console.log(`Me llamo ${nombre} y tengo ${edad} años.`);

// Modificando la variable
nombre = "Pedro";
console.log(`Hola, cómo estás? ${nombre} tienes ${edad} años.`);

// Intentando modificar la constante (esto generará un error si se descomenta)
// edad = 31; // Error: Assignment to constant variable
//edad = 31; // Error: Assignment to constant variable.

