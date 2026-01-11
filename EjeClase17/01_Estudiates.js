// Ejercicio 1: Manipulación Completa de un Objeto Literal y Arrays
// Crea un objeto literal que represente un estudiante. El mismo debe tener las siguientes propiedades: nombre, edad y un array de notas (con 5 notas).
// Luego, escribe la función “procesarEstudiante” que tendrá como objetivo realizar las siguientes tareas:
// 1. Agregar una nueva nota al array de notas.
// 2. Eliminar la primera nota del array.
// 3. Calcular el promedio de las notas restantes.
// 4. Convertir el nombre del estudiante a mayúsculas. Para esto investiga sobre el método “toUpperCase()”
// https://www.w3schools.com/jsref/jsref_touppercase.asp
// 5. Devuelver un objeto con el nombre en mayúsculas y el promedio de las notas.

//Array de objetos

const estudiante = {
    nombre: "Lucía Guerra",
    edad: 20,
    notas:[7, 8, 6, 9, 7]
};

//Proceso del estudiante
function procesarEstudiante(est){
    est.notas.push(8); //Agregar notas
    est.notas.shift(); // Borrar la primera nota
    let suma = 0;
    est.notas.forEach(nota =>{
        suma += nota;
    });
const promedioNotas = suma / est.notas.length; // Optener el promedio

// Convertir a mayúsculas
const nombreMayuscula = est.nombre.toUpperCase();

// Mostrar los datos
return {
    nombre: nombreMayuscula,
    promedio: promedioNotas
};
}

//Llamar a la función
const resultado = procesarEstudiante(estudiante);
console.log(resultado);
