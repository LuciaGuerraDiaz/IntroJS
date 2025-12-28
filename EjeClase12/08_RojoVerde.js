// Generar una suma en diagonal marcada en rojo
// otra diagonal en verde
// Deben devolver Rojo 505 y Verde 505

//Generar matriz 5x5 y sumar sus elementos en diagonal roja y verde

let matrizDiagonal = [
    [101, 101, 102, 103, 101],
    [104, 101, 102, 101, 100],
    [101, 102, 101, 104, 105],
    [104, 101, 101, 101, 103],
    [101, 102, 103, 104, 101]
    ]

let sumaRojo = 0;
let sumaVerde = 0;

for (let i = 0; i < matrizDiagonal.length; i++) {
    for (let j = 0; j < matrizDiagonal[i].length; j++) {
        if (i === j) {
            sumaRojo += matrizDiagonal[i][j];
        }
        if (i + j === matrizDiagonal.length - 1) {
            sumaVerde += matrizDiagonal[i][j];
        }
    }
}
console.log("La suma de la diagonal Rojo de Derecha a izquierad es:", sumaRojo);
console.log("La suma de la diagonal Verde de Izquierda a Derecha es:", sumaVerde);