// crea un array, nueva lista y que se conviertan al cudardo

let numeros = [2,3,6,8,7,6,4]

let cuadrados = numeros.map(function(numero){
    return numero * numero
});

console.log("Este es el resultado de cada número del array multiplicado por si mismo:\n" + cuadrados);