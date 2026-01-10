//Verificar el origen del auto, solo "Chevrolet", "Ford" y "Fiat" son de origen nacional.
const prompt = require("prompt-sync")();
console.log("Verificador de Origen del Auto");

const marcaAuto = prompt("Ingrese la marca de su auto: ");
let origen = "";

//Verifico el origen del auto con switch.
// switch (marcaAuto.toLowerCase()) {
//     case "chevrolet":
//     case "ford":
//     case "fiat":
//         origen = "Nacional";
//         break;
//     default:
//         origen = "Importado";
//         break;
// }

// console.log(`El auto de marca ${marcaAuto} es de origen: ${origen}.`);

//Verifico el origen del auto con flecha
const verificarOrigen = (marca) =>
    ["chevrolet", "ford", "fiat"].includes(marca.toLowerCase())
        ? "Nacional" //Ternario true
        : "Importado"; //Ternario false

//Muestra el resultado
origen = verificarOrigen(marcaAuto);

console.log(`El auto de marca ${marcaAuto} es de origen: ${origen}.`);

//Verificacion usando if else
// const verificarOrigen = (marca) => {
//     if (["chevrolet", "ford", "fiat"].includes(marca.toLowerCase())) {
//         return "Nacional";
//     } else {
//         return "Importado";
//     }
// };