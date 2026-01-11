// Ejercicio 5: Manipulación de Arrays y Cadenas
// A partir del siguiente array de frases, escribe la función “procesarFrases” que realice las siguientes tareas:
// 1. Convierta cada frase a minúsculas. Investigar el método “.toLowerCase()” para este punto.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
// 2. Divida cada frase en palabras.
// 3. Reemplace las palabras "malo" por "bueno".
// 4. Combine las palabras de cada frase en una nueva cadena separada por espacios.
// 5. Devuelva un nuevo array con las frases modifi cadas.
// ● Ejercicio

console.log("PROCESAR TEXTO");
// Array de frases
const frases = [
"Este producto es Malo",
"El clima es malo hoy",
"No es malo intentarlo.",
];
console.log(`Este es el texto original:\n ${frases}`);
// crear la Función para procesar las frases
function procesarFrases(arrFrases) {
    const frasesModificadas = arrFrases.map(frase => {
    const fraseMinuscula = frase.toLowerCase();  // Pasar a minúsculas
    const palabras = fraseMinuscula.split(" ");  // Dividir/split la frase en palabras
    const palabrasReemplazadas = palabras.map(palabra => // 3. Reemplazar "malo" por "bueno"
    palabra === "malo" ? "exclente" : palabra
    );
    return palabrasReemplazadas.join(" "); //Unir las palabras en una nueva cadena
});
return frasesModificadas;
};

const resultado = procesarFrases(frases); // Llamar a la función crearndo el resultado
console.log(`Este es el texto con la función aplicada:\n ${resultado}`)

// Método	Tipo	Para qué sirve
// toLowerCase()	String	Pasar a minúsculas
// split(" ")	String	Dividir en palabras
// map()	Array	Transformar elementos
// join(" ")	Array	Unir en texto