// Es par o impar el núemero ingresado
const prompt = require ("prompt-sync")();
// pedir un numero al usuario
let numero = parseInt(prompt("Ingresa un número: "));
// verificar si es par o impar
if (numero === 0){
    console.log("El número " + numero + " es cero.");
} else if (numero % 2 === 0){
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}
