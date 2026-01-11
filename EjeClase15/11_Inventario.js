// //let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
// Debes realizar las siguientes acciones:
// 1.	Agregar un nuevo producto "Impresora" al inventario usando el método adecuado. .push()
// 2.	Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado. includes()
// 3.	Eliminar el primer producto del inventario. shift()
// 4.	Mostrar la lista actualizada de productos en una sola cadena, separados por comas. .join()

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log("Inventario de productos\n")
console.log(`El inventario actual contine los siguientes productos: ${inventario}`);
// Métodos
const addProducto = inventario.push("Impresora");
const checkProducto = inventario.includes("Tablet");
const litaInventario = inventario.join(",");
// Mensajes en la consola
console.log(`Producto agregado al inventario: ${addProducto}`);
console.log(`Inventario actualizado: ${inventario}`);
console.log(`El artículo se encuenta en el inventario: ${checkProducto}`);
console.log(`Inventario actualizado: ${inventario}`);

const quitarProducto = inventario.shift();
console.log(`El primer articulo del inventario fue elimiando: ${quitarProducto}`);
console.log(`Inventario actualizado: ${inventario}`);
console.log(`Estos son los productoa actuales en el inventario: ${inventario}`);