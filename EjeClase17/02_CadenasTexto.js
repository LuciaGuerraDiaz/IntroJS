// Ejercicio 2: Análisis y Modifi cación de Cadenas de Texto
// Pide al usuario que ingrese una oración. Luego, escribe la función “procesarOracion” que haga lo siguiente:
// 1. Quite los espacios en blanco al principio y al fi nal.
// 2. Divida la oración en palabras.
// 3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar “/a/g” que indica que se debe buscar todas las apariciones del carácter 'a' en la cadena (la bandera g es para global, lo que signifi ca que reemplazará todas las apariciones, no solo la primera).
// 4. Encuentre la posición de la primera aparición de la palabra "javascript". De no aparecer retornar -1
// 5. Convierta la oración a una cadena de palabras separadas por guiones.


const prompt = require("prompt-sync")();

//Pedir oración
const oracionUsuario =  prompt("Ingrese una oración: ");

//función para procesar la oración
function procesarOracion (oracion) {
    const oracionLimpia = oracion.trim();  //Quitar espacion metodo .trim()
    const dividir = oracionLimpia.split(" "); //Divide las palabras. split() es el puente que transforma:String ➜ Array
    const reemplazar = oracionLimpia.replace(/a/g, "@"); // reemplazar a por @
    const posicionJS = oracionLimpia.toLowerCase().indexOf("javascript"); //busca palabra especifica
    const oracionGuiones = dividir.join("-"); //Unir usando guiones join() se usa en arrays, no en strings,por eso: se divide primero y luego se une.
    //no me queda muy claro porque no se usa oracion.limpia aca.
    return {
        oracionSinEspacios: oracionLimpia,
        dividir: dividir,
        reemplazar: reemplazar,
        posicionJS: posicionJS,
        oracionGuiones: oracionGuiones
    };
}
const resultado = procesarOracion(oracionUsuario);
console.log(resultado);

//Si quieres ver más opciones en tu vida explora lo que hay más allá del mapa
// FLUJO PARA ENTENDER LOS DATOS DEL EJERCICIO
// String (oracion)
//    ↓ trim()
// String (oracionLimpia)
//    ↓ split(" ")
// Array (dividir)
//    ↓ join("-")
// String (oracionGuiones)

// const texto = "uno dos tres";

// // String → Array
// const arr = texto.split(" ");

// // Array → String
// const unido = arr.join("-");