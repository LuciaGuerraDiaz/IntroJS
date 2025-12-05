//Declara dos variables booleanos condicion1 y condicion2.Declara
// Pide al ususarios que ingrese dos valores booleanos (true o Fals)
// muestra el resultado de diversas combinaciones lógicas. 

//const prompt = require('prompt-sync')();

// Si el usuarios escribe "true" la variable será verdadera y sino falsa.
//let condicion1 = prompt("💻Ingrese el primer valor booleano: (true/false): ") === 'true';
//exports.condicion1 = condicion1;
//let condicion2 = prompt("💻Ingrese el segundo valor booleano (true/false): ") === 'true';
//exports.condicion2 = condicion2;

// mostrar las convinaciones lógicas al usuario.//
//console.log("Resultados de las combinaciones lógicas:");
//console.log(`AND (condicion1 && condicion2): ${condicion1 && condicion2}`); //vedardadero si ambos son verdaderos
//console.log(`OR (condicion1 || condicion2): ${condicion1 || condicion2}`); //verdadero si al menos uno es verdadera
//console.log(`NOT condicion1 (!condicion1): ${!condicion1}`); //invierte el valor de condicion1


console.log("Colores primarios disponibles: rojo, azul, amarillo");
let color1 = prompt("💻Ingrese el primer color: ").toLowerCase();
let color2 = prompt("💻Ingrese el segundo color: ").toLowerCase();

let condicion1 = prompt("💻Ingrese el primer valor booleano: (true/false): ") === 'true';
let condicion2 = prompt("💻Ingrese el segundo valor booleano (true/false): ") === 'true';

console.log("Resultados:");
console.log(`AND (condicion1 && condicion2): ${condicion1 && condicion2}`); //vedardadero si ambos son verdaderos
console.log(`OR (condicion1 || condicion2): ${condicion1 || condicion2}`); //verdadero si al menos uno es verdadera
console.log(`NOT condicion1 (!condicion1): ${!condicion1}`); //invierte el valor de condicion1
