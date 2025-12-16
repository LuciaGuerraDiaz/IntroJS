//Solicitar al usuario que ingrese numeros hasta ingrese un valor negativo, sumar los resultados. 
const prompt = require("prompt-sync")();
//varibles

let numero;
let suma = 0;   

// Pedir numero al usuario

console.log("Ingrese numeros para sumar. Ingrese un numero negativo para finalizar.");

while (true){
    numero = parseInt(prompt("Ingrese un numero: "));
    if (numero < 0){
        console.log(numero);
        break; // Cuando esta condicion cambia se vuelve el while falso y sale del bucle
    }
    suma += numero; // Suma los numeros ingresados
}
console.log("La suma de los número ingresados es: " + suma);