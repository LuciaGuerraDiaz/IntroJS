//De nuevo hacemos la formula de los pares, el resto de cada numero debe ser 0 - %2 === 0

let numeros = [2,3,6,8,7,6,4]

let pares = numeros.filter(function(numero){
    return numero %2 === 0
}
);

console.log("Estos son los número pares dentro del array: "+ pares);