//Utilizando funcion expresada

const prompt = require("prompt-sync")();

const numeroMayor = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//Pedir datos
let num1 = parseFloat(prompt("Ingresa número 1: "));
let num2 = parseFloat(prompt("Ingresa número 2: "));

//Dar resultado
let respuesta = numeroMayor (num1, num2);
console.log("El numero mayor es " + respuesta);

