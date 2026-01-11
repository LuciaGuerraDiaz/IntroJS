// ●	Clasificación de palabras según su longitud
// Tienes una lista de palabras en una oración. Debes:
// 1.	Dividir la oración en palabras individuales. split (" ")
// 2.	Clasificar las palabras en dos categorías: If o while. forEach
// ▪	Cortas (menos de 5 letras) .length
// ▪	Largas (5 letras o más)
// 3.	Mostrar ambas listas de palabras clasificadas. console
// 4.	La oración es: "JavaScript es un lenguaje poderoso y versátil". join (" ")

let oracion = "Depende de ti cómo quieres vivir cada día";
console.log(oracion);

//Dividir palabras
const palabras = oracion.split(" ");
console.log(palabras);

//Crear arrays vacios para clasificar las palabras.
const cortas = [];
const largas = [];

// Clasificar por longitud
palabras.forEach(palabra => {
    if (palabra.length < 5) {
        cortas.push(palabra);
    }else {
        largas.push(palabra);
    }
});

//Mostrar los mensajes en consola
console.log("Palabras cortas:", cortas.join(", "));
console.log("Palabras largas:", largas.join(", "));
