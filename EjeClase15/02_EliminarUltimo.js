//Eliminar el último invitado. USO de pop

const invitados = [
    "Ana", "María", "Facundo", "Jimena",
]

console.log("Lista de invitados");
console.log(invitados);

console.log("Eliminar el ultimo invitado, usando pop")
// Se definie la funcion y se usa el método al array
const desinvitarUltimo = invitados.pop();
//Mostrar el resultado
console.log(`El invitado que no puede asistir es: ${desinvitarUltimo}`);
console.log("La lista actualizada de invitados:");
console.log(invitados);

