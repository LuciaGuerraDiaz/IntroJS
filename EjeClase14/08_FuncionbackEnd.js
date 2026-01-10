// numeros
// Defino las variables, datos que necesito

// Solicitar los datos al usurio
const prompt = require("prompt-sync")();
console.log("Verificador BackEnd");
const numUnoUsuario = parseInt(prompt("Ingrese el primer número: "));
const numDosUsuario = parseInt(prompt("Ingrese el segundo número: "));

// Denino la funcion que se realiza entre esos dos datos

const backEnd =(numeroUno, numeroDos) => {
    for (let i= 1; i <= 100; i++) { //for recorre el indice del 1 al 100 y i++ agrega de a 1.
        if (i % numeroUno === 0 && i % numeroDos === 0) {
            console.log("BackEnd");
        } else if (i % numeroUno === 0) {
            console.log("Back");
        } else if (i % numeroDos === 0) {
            console.log("End");
        } else {
            console.log(i);
        }
    }
};

if (numUnoUsuario === 0 || numDosUsuario === 0) {
    console.log("Error: Los números ingresados deben ser distintos de cero.");
}else {
    backEnd(numUnoUsuario, numDosUsuario);
};        

// Llamo a la funcion con los datos solicitados 
backEnd(numUnoUsuario, numDosUsuario);

//Recordar
// Herramienta	Uso
// for	Recorrer 1–100
// %	Ver múltiplos
// if / else	Condiciones