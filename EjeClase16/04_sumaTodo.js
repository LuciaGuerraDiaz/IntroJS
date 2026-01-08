// Suma todo JS, aca usaremor el método Reduce

let numeros = [2,3,6,8,7,6,4];

let sumaTodos = numeros.reduce(function (acumulacion, numero){
    return acumulacion + numero
});

console.log("La suma de todo el array es: " + sumaTodos);