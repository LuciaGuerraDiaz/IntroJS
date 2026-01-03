// solicitar la hora, le hice unos cambios a la consigna

const prompt = require("prompt-sync")();

prompt("Presiona ENTER para saber la hora actual");

function mostrarSaludo() {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();

    //Agregar minutos si son menores que 10
    if (minutos < 10){
        minutos = "0" + minutos;
    }

    if (horaActual < 12) {
        console.log("Buenos días");
    } else if (horaActual < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }

    console.log("Hora actual:", horaActual + ":" + minutos);
}

mostrarSaludo();