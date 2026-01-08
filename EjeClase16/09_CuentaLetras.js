// Cuenta letras

let texto = [
    'sol', 'plantas', 'astro'
];

let cuentaLetras = texto.reduce(function(totalLetras, palabra){
    return totalLetras + palabra.length;
}, 0);

console.log(cuentaLetras)

//ESte es el que entiendo menos. 