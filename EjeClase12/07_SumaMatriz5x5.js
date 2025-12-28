// Generar matriz 5x5 y sumar sus elementos

let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

let sumaTotal = 0;
// Recorrer la matriz y sumar sus elementos
for (let i = 0; i < matriz5x5.length; i++) {
    for (let j = 0; j < matriz5x5[i].length; j++) {
        sumaTotal += matriz5x5[i][j];
    }
}

console.log("La suma de matriz 5x5 es: " + sumaTotal);

