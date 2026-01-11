//Hacer una lista de mascotas con prioridad de atención

const mascotas = [
    "Perro", "Gato", "Conejo"
];

console.log("Lista de espera de atención veterinaria: ");
console.log(mascotas);

//Agregar el hamster, con prioridad
mascotas.unshift("Hámster");
console.log(mascotas);

//Atender a la primera mascota
const mascotaPrioridad = mascotas.shift();

//Ver los resultados
console.log(`La mascota con prioridad de atención es: ${mascotaPrioridad}`);
console.log("Fila actualizada:");
console.log(mascotas);
