// Generar un ciclo que cuente lo numeros dentro de un rango. 
const prompt =  require("prompt-sync")();
//Definir variables
let inicio;
let fin;
// pedir numros al usuario
inicio = parseInt(prompt("Ingrese el numero de inicio del rango: "));
fin = parseInt(prompt("Ingrese el numero final del rango: "));
console.log("Los numeros dentro del rango son: ");
// Ciclo for para contar los numeros dentro del rango
for (let rangoNumeros = inicio; rangoNumeros <= fin; rangoNumeros++){
    console.log(rangoNumeros); // Muestra los numeros dentro del rango
    if (rangoNumeros % 2 !== 0) {
        continue;
    }
}

