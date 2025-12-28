//Generar una matriz y recorrerla para sumar sus elementos encima o igual a 1, pero menores a 1000

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, ,1, 1100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
];

let suma = 0;

//ESte es el recorrido por la matriz debe recorrer i filas y columnas
for (let i = 0; i < matriz.length; i++) {
    for (let columnas = 0; columnas < matriz[i].length; columnas++) {
    let numero = matriz[i][columnas];
    // Esta es la condición para la suma
    if (numero >= 10 && numero < 1000) {
        suma += numero; // Sumar el número a la suma total
    }
}
}

console.log("La suma de los elementos en la matriz que son mayores o iguales a 10 y menores a 1000 es: " + suma);

