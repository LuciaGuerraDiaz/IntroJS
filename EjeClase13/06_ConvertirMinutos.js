//
const prompt = require ("prompt-sync")();

let horas = prompt("Ingresa un número de horas: ")

function convertirHorasAMinutos(horas) {;
    let minutos; // variable local

    minutos = horas * 60;
    return minutos;
}
// Llamar a la funcion
let resultado = convertirHorasAMinutos(horas);
// Imprimir resultado
console.log("Las horas ingresadas son: ", resultado, "minutos.");