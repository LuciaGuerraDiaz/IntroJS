const numeros = [1, 3, 5, 6, 9, 11]; // Defino el array


function busquedaBinaria(array, valorBuscado) {
let inicio = 0;
let fin = array.length - 1;//-1 para que incluya el conteo desde del cero

while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2); //Aca hago el medio entre el incio y fin.

    if (array[medio] === valorBuscado) {
      return medio; // posición encontrada
    } else if (array[medio] < valorBuscado) {
      inicio = medio + 1; // buscar a la derecha
    } else {
      fin = medio - 1; // buscar a la izquierda
    }
}

  return -1; // no encontrado
}
//Aca busco los index de los números utilizando la lógica de la funcion, creo que para grandes datos esto acorta la búsqueda. 
console.log("Posición del 1:", busquedaBinaria(numeros, 1));
console.log("Posición del 5:", busquedaBinaria(numeros, 5));
console.log("Posición del 6:", busquedaBinaria(numeros, 6));
console.log("Posición del 9:", busquedaBinaria(numeros, 9));
console.log("Posición del 11:", busquedaBinaria(numeros, 11));

