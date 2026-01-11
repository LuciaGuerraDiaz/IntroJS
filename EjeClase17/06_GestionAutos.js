// Escribe una función "gestionarAutos" que realice las siguientes tareas con una lista predefi nida de marcas de autos:
// 1. Quite los espacios en blanco alrededor de cada marca.
// 2. Verifi que si existe la marca "Tesla".
// 3. Reemplace todas las marcas "Ford" por "BMW".
// 4. Encuentre el índice de la marca "Chevrolet".
// 5. Devuelva una cadena de marcas en orden alfabético separadas por puntos. Utilizar “.sort()”

console.log("GESTION DE AUTOS");
//Crear el array
const marcasAutos = [
" Toyota ",
"Ford",
"Chevrolet ",
" Ford ",
"Nissan"
];
//Crear la funcion
function gestionarAutos (marcas){
    const marcasLimpias = marcas.map(marca => marca.trim());//Usar trim para quitar los espacios
    const existeTesla = marcasLimpias.includes("Tesla"); //Includes para buscar Tesla
    const marcasReemplazadas = marcasLimpias.map(marca => //Reemplaso usando map porque es un metodo de array 
    marca === "Ford" ? "BMW" : marca);
    const indiceChevrolet = marcasReemplazadas.findIndex(marca => marca === "Chevrolet");//Busco indice
    const marcasOrdenadas = [...marcasReemplazadas]//Ordeno, los ... entran al array de stings
    .sort()//alfabéticamente
    .join("."); //Une en una cadana
//Muestro la información que gestioné en la funcion
    return{
        marcasLimpias,
        existeTesla,
        marcasReemplazadas,
        indiceChevrolet,
        marcasOrdenadas,
    };
};

//Muestro el resultado de la gestión de las marcas de autos
const resultado = gestionarAutos(marcasAutos);
console.log(resultado);
