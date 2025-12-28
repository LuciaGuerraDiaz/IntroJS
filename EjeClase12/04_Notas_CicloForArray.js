//Registro de Estudiantes almacenar notas, subir notas metodo promt usar un bucle para solicitar notas y asinarlas al array, imprimir notas
const prompt = require("prompt-sync")();
// Crear array para las notas
let estudiantes = [];
let continuar = true;

while (continuar) {
    // Solicitar nombre del estudiante
    let nombre = prompt("Ingrese el nombre del estudiante: ");
    let notas = [];

// Ciclo para solicitar 3 notas
for (let i = 0; i < 3; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} para ${nombre}: `));
    notas.push(nota); // ✔ ahora sí
}

// Almacenar el estudiante y sus notas en el array
estudiantes.push({
    nombre: nombre,
    notas: notas
});

// Preguntar si se desea continuar
let respuesta = prompt("¿Desea agregar otro estudiante? (s/n): ");
if (respuesta.toLowerCase() !== 's') {
    continuar = false;
}
}

// Imprimir las notas de los estudiantes
console.log("Notas de los estudiantes:");
for (let estudiante of estudiantes) {
    console.log(`${estudiante.nombre}: ${estudiante.notas}`);
}

