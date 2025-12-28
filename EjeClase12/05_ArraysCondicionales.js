//Solicitar 5 nombres y verificar si existen en un array predeterminado
const prompt = require("prompt-sync")();
// Array predeterminado de nombres
let nombresPredeterminados = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];
// Array para almacenar los nombres ingresados por el usuario
let nombresIngresados = []; 
// Solicito 5 nombres al usuario
for (let i = 0; i < 5; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}: `);
    nombresIngresados.push(nombre);
}
// Verifico que los nombres ingresados existen en el array predeterminado
for (let nombre of nombresIngresados) {
    if (nombresPredeterminados.includes(nombre)) {
        console.log(`El nombre "${nombre}" existe en el array predeterminado.`);
    } else {
        console.log(`El nombre "${nombre}" NO existe en el array predeterminado.`);
    }
}
// Resolucion en clase Aun no me funciona bien.

// const prompt = require("prompt-sync")();
// // Crear una matriz 3x3 y sumar sus elementos
// let notas = [];
// let cantidadEstudiantes = 3;
// console.log("Ingrese las notas de los estudiantes:" + cantidadEstudiantes + "estudiantes.");
// for (let i = 0; i < cantidadEstudiantes; i++) {
//     notas[i] = parseFloat(prompt(`Nota del estudiante ${i + 1}: `));
// }
// ||--- IGNORE ---||