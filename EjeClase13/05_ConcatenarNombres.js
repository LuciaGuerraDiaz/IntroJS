//Concatenar nombres

// Función expresada
const concatenarNombres = function(nombre, apellido) {
    let nombreCompleto; // variable local

    nombreCompleto = nombre + " " + apellido;
    return nombreCompleto;
};

// Ejemplo de uso
console.log(concatenarNombres("Lucia", "Guerra"));