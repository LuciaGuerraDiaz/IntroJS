// Lista predefinida de flores
const flores = [
" Rosa ",
"Margarita",
" Orquídea ",
"Tulipán"
];

// Función solicitada
function gestionarFloreria(listaFlores) {
let floresLimpias = listaFlores.map(flor => flor.trim()); // //Declaro flor, porque es para idetificar que se aplique el metodo en cada elemento del array. Quitar espacios en blanco, uso map para recorre el array y  flor, para poder aplicar trim en los strings
  if (floresLimpias.includes("Margarita")) { //existe "Margarita" y agregar "Azucena"
    floresLimpias.push("Azucena");
  }
  floresLimpias = floresLimpias.map(flor =>//Reemplazar "Orquídea" por "Clavel"
    flor === "Orquídea" ? "Clavel" : flor
  );
const indiceGirasol = floresLimpias.findIndex(
    flor => flor === "Girasol"
  );
  if (indiceGirasol === -1) {
    floresLimpias.unshift("Girasol");
  } //Buscar "Girasol" y agregarlo al inicio si no está
const floresOrdenadas = [...floresLimpias] //Buscar "Girasol" y agregarlo al inicio si no está
    .sort()
    .join(".");
  return floresOrdenadas;
}

// Llamar a la función
const resultado = gestionarFloreria(flores);
console.log(resultado);


//RECORDATORIO CON LA METÁFORA DE LA BOLSITA. 
// 🔹 El parámetro es la bolsita, donde pongo lo que le voy pedir a la funcion. 
// 🔹 El argumento es lo que metés dentro, los datos
// 🔹 El nombre de la bolsita lo elegís vos

// 🔹 El parámetro es la bolsita
// 🔹 El argumento es lo que metés dentro
// 🔹 El nombre de la bolsita lo elegís vos