// Flores y conta cuantas veces las menciona el usuario. 

const prompt = require("prompt-sync")();
console.log("Contador de Flores");

//Array vacio
const flores = [];

//Que el usuario ingrese 3 flores
for (let i = 0; i <3; i++){
    flores[i] = prompt( `Ingrese su flor favorita ${i+1}:`);
}

// Preguntar por una flor especifica para saber cuantas veces se repite

const florBuscada = prompt("Ingrese una flor para verificar si está entre sus favoritas: ");

//Contador en el array
let contador = 0;
for (let i = 0; i < flores.length; i++) {
    if (flores[i] === florBuscada) {
        contador++;
    }
};

// 5. Mostrar resultado
if (contador > 0) {
    console.log(`La flor "${florBuscada}" fue mencionada ${contador} vez/veces.`);
} else {
    console.log(`La flor "${florBuscada}" no está entre sus favoritas.`);
};