//Prefijo y sufijo

let listapalabras = ["Hola", "Mundo", "javaScript"]

let preysuFijo = listapalabras.map(function (palabra){
    return ("¡" + palabra + "!");
});

console.log(preysuFijo);

let preSuFijo = listapalabras.map(palabra => `¡${palabra}!`);

console.log(preSuFijo);