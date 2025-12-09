//Declarar variables de diferentes tipos de datos

const prompt = require('prompt-sync')();

// Tipo de dato: Número
let verdadero = true;
let texto = "Hola Mundo";
let numero = 42;
let nada = null;

//Operaciones y validaciones
// 1. Operación matemática
let suma = numero + 5;
console.log("Resultado de la suma:", suma, "Es el numero de la variable numero + 5");
// 2. Concatenación de cadenas
let saludo = texto + " - Bienvenido a IntroJS";
console.log(saludo);
// 3. Validación verdadero/falso
if (verdadero) {
    console.log("La variable 'verdadero' es verdadera.");
} else {
    console.log("La variable 'verdadero' es falsa.");
}
// 4. Verificar si una variable es null
if (nada === null) {
    console.log("La variable 'nada' es null.");
} else {
    console.log("La variable 'nada' no es null.");
}
