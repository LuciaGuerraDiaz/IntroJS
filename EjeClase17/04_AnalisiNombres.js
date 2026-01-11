// //Pide al usuario que ingrese una lista de nombres separados por comas. Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, “Pablo” y “Pedro”.
// Luego, escribe la función “transformarYAnalizarNombres”que realice las siguientes tareas:
// 1. Quite los espacios en blanco alrededor de cada nombre.
// 2. Verifi que si existe el nombre "Juan".
// 3. Reemplace todos los nombres "María" por "Ana".
// 4. Encuentre el índice del nombre "Pedro".
// 5. Devuelva una cadena de nombres en orden alfabético separados por puntos. Investigar el método “.sort()”
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects


const prompt = require("prompt-sync")();

// Crear lista de nombres
const nombreIngresados = prompt (
    "Ingrese los nombres separados por comas: "
);

//Crear funcion
function transFormarYAnalizarNombres(texto){
    const nombres = texto.split(",").map(nombre => nombre.trim()); // Convierte los datos strings ingresados a arrays y quita los espacios. 
    const existeNombre = nombres.includes("Juan"); //Includes, busca en el array si existe Juan
    const nombresReemplazados = nombres.map(nombre => nombre === "Maria" ? "Ana": nombre); //map recorre y => reemplaza. 
    const indicePedro = nombresReemplazados.findIndex (nombre => nombre === "Pedro"); //buscar la posicion de pedro
    const nombresOrdenados = [...nombresReemplazados]//Los ... recorren el array
    .sort()
    .join(".");

    return { //Llamar a los resultados del analisis.
        nombresLimpios: nombres,
        existeNombre: existeNombre,
        nombresReemplazados: nombresReemplazados,
        indicePedro: indicePedro,
        nombresOrdenados: nombresOrdenados
    };
}
//Mostrar resultados, aca tengo que llamar al nombre de la función con promt donde se ingresan los datos. Eso da visible el resultado. 
const resultado = transFormarYAnalizarNombres(nombreIngresados);
console.log(resultado);

// Método	Tipo	Para qué sirve
// split(",")	String	Separar texto
// trim()	String	Quitar espacios
// map()	Array	Transformar elementos
// includes()	Array	Verificar existencia
// findIndex()	Array	Buscar índice
// sort()	Array	Ordenar alfabéticamente
// join(".")	Array	Unir en string