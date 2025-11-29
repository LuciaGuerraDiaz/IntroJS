const prompt = require ('prompt-sync')();
//Pedimos al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número entero, por favor: "));
if (numero % 2 === 0) 
console.log("El número ingresado es par.");
else if (numero % 2 !== 0)
console.log("El número ingresado es impar.");