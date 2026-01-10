// Calcular descuento según cantidad de productos comprados

const prompt = require("prompt-sync")();

console.log("Calculadora de Descuentos por Cantidad Comprada"); 

// Array de productos, nombre del producto y el precio unitario
const productos = [];  


// Función para calcular el descuento basado en la cantidad.
const calcularDescuento = (cantidad) =>
    cantidad >= 5 ? 0.20 :
    cantidad >= 3 ? 0.10 :
    0;

let continuar = 'si';

//Solicito la informacion de los productos.
while (continuar.toLowerCase() === 'si') {
    const nombreProducto = (prompt("Ingrese el nombre del producto comprado: "));
    const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto: "));
    const cantidad = parseInt(prompt("Ingrese la cantidad comprada: "));    
    productos.push({ nombre: nombreProducto, precio: precioUnitario, cantidad: cantidad });
    continuar = prompt("¿Desea ingresar otro producto? (si/no): ");
};

let subtotalGeneral = 0;
let cantidadTotal = 0;

for (let producto of productos) {
    subtotalGeneral += producto.precio * producto.cantidad;
    cantidadTotal += producto.cantidad;
}

const descuento = calcularDescuento(cantidadTotal);
const totalFinal = subtotalGeneral - (subtotalGeneral * descuento);

console.log(`Por la cantidad de productos comprados tu descuento es de: $${descuento * 100}% `);