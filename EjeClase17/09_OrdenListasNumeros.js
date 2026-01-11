// Lista desordenada
const numeros = [22, 12, 5, 100, 3, 7];

// Bubble Sort para ordenar el array de menor a mayor
function bubbleSort(arr) {
let n = arr.length;
let swapped; //una variable booleana (true/false) que usamos para controlar si en una pasada del bubble sort hubo algún intercambio entre elementos.

do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        // Intercambiar
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
    }
    }
    n--; // Optimización: el último elemento ya está en su lugar
} while (swapped);

return arr;
}

// Búsqueda binaria (el array debe estar ordenado)//parecido a ejercicio 8
function busquedaBinaria(array, valorBuscado) { //aca usa dos valores porque es binaria la búsqueda
let inicio = 0;
let fin = array.length - 1;

while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);

    if (array[medio] === valorBuscado) {
    return medio;
    } else if (array[medio] < valorBuscado) {
    inicio = medio + 1;
    } else {
    fin = medio - 1;
    }
}

  return -1; // No encontrado
}

// Ordenamos la lista primero
const numerosOrdenados = bubbleSort([...numeros]); // usamos copia para no modificar original

console.log("Array ordenado:", numerosOrdenados);

// Preguntas
console.log("Posición del número 12:", busquedaBinaria(numerosOrdenados, 12));
console.log("Posición del número 5:", busquedaBinaria(numerosOrdenados, 5));
console.log("Posición del número 22:", busquedaBinaria(numerosOrdenados, 22));
console.log("Posición del número 100:", busquedaBinaria(numerosOrdenados, 100));