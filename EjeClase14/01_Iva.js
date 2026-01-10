//Generar una aplicación que calcule el IVA de un producto.

//Ingreso de datos del producto.
const prompt = require("prompt-sync")();

console.log("Calculadora de IVA, Bienvenid@s!");
//Pido el precio del producto.

const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
//Pido el porcentaje de IVA.
let porcentajeIva = parseFloat(prompt("Ingrese el porcentaje de IVA (por ejemplo, 21 para 21%):")); 
//Calculo el IVA.
const iva = (precioProducto, porcentajeIva) => (precioProducto * porcentajeIva) / 100;
//Otra opción sin flecha: (precioProducto * porcentajeIva) / 100;
const resultadoIva = iva(precioProducto, porcentajeIva);

//Calculo el precio final con IVA.
const precioFinal = (precioProducto, resultadoIva) => precioProducto + resultadoIva;
const resultadoPrecioFinal = precioFinal(precioProducto, resultadoIva);

//Otra opcion sin => precioProducto + iva;
//Muestro los resultados.
console.log(`El IVA del producto es: ${resultadoIva}%`);
console.log(`El precio final del producto con IVA es: $${resultadoPrecioFinal}`); 
console.log("Gracias por usar la Calculadora de IVA!");