// Ejercicio 3: Gestión Compleja de Arrays
// A partir del siguiente array de productos, escriba la función ‘gestionarProductos’ que realice las siguientes tareas:
// 1. Añada un nuevo producto al array.
// 2. Elimine el último producto del array.
// 3. Encuentre el índice de un producto específi co. En este punto pueden usar forEach o investigar el método “fi ndIndex()”
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fi ndIndex
// 4. Verifi que si existe un producto con precio mayor a 50. Para esto investigar el método “.some()” https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// 5. Devuelva una cadena de nombres de productos separados por comas.
// ● Ejercicio

console.log("Gestión de Productos");

const productos = [
  { nombre: "Arroz", precio: 30 },
  { nombre: "Lentejas", precio: 60 },
  { nombre: "Maiz", precio: 70 }
];

function gestionarProductos() {

productos.push({ nombre: "Azúcar", precio: 45 });//Añadir un nuevo producto
productos.pop();//Eliminar el último producto
const indexProducto = productos.findIndex(
    producto => producto.nombre === "Lentejas"
); //Encontrar el índice de un producto específico
const hayMayor50 = productos.some(
    producto => producto.precio > 50);  // Verificar si existe un producto con precio mayor a 50

// 5. Devolver cadena de nombres separados por comas
const nombresProductos = productos
    .map(producto => producto.nombre)
    .join(", ");

return {
    indexProducto,
    hayMayor50,
    nombresProductos
};
}

// Llamar a la función
const resultado = gestionarProductos();
console.log(resultado);