// pedir al usuario dos números y mostrar los números entre ellos,si son pares o impares.
const prompt = require ("prompt-sync")();   

// pedir dos números al usuario
let numero1 = parseInt(prompt("Ingresa el primer número: "));
let numero2 = parseInt(prompt("Ingresa el segundo número: "));
// mostrar los números entre ellos
console.log("Números entre " + numero1 + " y " + numero2 + ":");
for (let EntreValores = numero1 + 1; EntreValores < numero2; EntreValores++){
    console.log(EntreValores);
    if (EntreValores === 0){
    console.log("El número es cero.");} 
    else if (EntreValores % 2 === 0) {
    console.log("El número " + EntreValores + " es par.");}   
    else {console.log("El número " + EntreValores + " es impar.");}}


//Versión solo mostrando numeros pares entre ellos

// pedir mas números al usuario
let numero3 = parseInt(prompt("Ingresa el tercer número: "));
let numero4 = parseInt(prompt("Ingresa el cuarto número: "));

console.log("Números pares entre " + numero3 + " y " + numero4 + ":");

for (let EntreValores2 = numero3 + 1; EntreValores2 < numero4; EntreValores2 ++) {
    if (EntreValores2 % 2 === 0) {
        console.log(EntreValores2);
    }
}
