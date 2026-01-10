//Modelos de autos

const prompt = require("prompt-sync")();
console.log("Verificar la posicion del Modelos de Autos en el array");

const modelosAutos = [
    "Onix",
    "Cruze",
    "Camaro",
    "Mustang",
    "Fiesta",
    "Focus",
    "Punto",
    "500",
    "Mustang",
    "Cruze",
    "Fiesta",
];

const UltimaAparicionModelo = (modelo) => {
    const posicion = modelosAutos.lastIndexOf(modelo);
    return posicion !== -1
        ? `El modelo ${modelo} fue encontrado por última vez en el índice: ${posicion}.`
        : `El modelo ${modelo} no fue encontrado en la lista.`;
};

// Interaccion de Usuario con el programa. Ingreso del dato por el usuario
const modeloUsuario = prompt("Ingrese el modelo de auto a buscar: ");

// Llamada a la función
const resultado = UltimaAparicionModelo(modeloUsuario);

// Mostrar resultado
console.log(resultado);