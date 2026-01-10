// lista de palabras
//Los datos que tengo. Haciendo la analogia con exel esta la tabla de datos.
let palabrasSueltas = ['Me', 'gusta', 'Aprender', 'JavaScript'];
//Lo que quiero construir, lo que espero de resultado. Esta es celda de resultado.
let frase = "";
// Como lo construyo o instrucciones para que de el resultado. Esta es la formula.
let armaFrase = palabrasSueltas.forEach(palabra => {
    frase += palabra + " ";
});

console.log (frase);