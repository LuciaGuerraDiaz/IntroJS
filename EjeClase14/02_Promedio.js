// Pedir notas al usuario y calcular el promedio

const prompt = require("prompt-sync")();

console.log("Calculadora de Promedio de Notas");    
// son 5 notas a ingresar
const totalNotas = 5;
const notas = [];

// Función para ingresar cada nota
const ingresarCadaNota = (i) => {
    const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
    notas.push(nota);
};
// Ingreso de notas,despues de definir la funcion
console.log("Ingrese las 5 notas una por una: ");
for (let i = 0; i < totalNotas; i++) {
    ingresarCadaNota(i);
};

// Calcular suma
let sumaNotas = 0;
for (let nota of notas) {
    sumaNotas += nota;
};

// Calcular promedio
const promedioNotas = sumaNotas / totalNotas;

// Mostrar resultado
console.log(`El promedio de las notas es: ${promedioNotas.toFixed(2)}%`);