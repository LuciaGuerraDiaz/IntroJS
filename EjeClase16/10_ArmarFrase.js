// lista de palabras
//Los datos que tengo
let palabrasSueltas = ['Me', 'gusta', 'Aprender', 'JavaScript'];
//Lo que quiero construir, lo que espero de resultado
let frase = "";
// Como lo construyo o instrucciones para que de el resultado-
let armaFrase = palabrasSueltas.forEach(palabra => {
    frase += palabra + " ";
});

console.log (frase);