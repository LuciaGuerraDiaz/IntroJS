//Busqueda de libros
const prompt = require("prompt-sync")();
console.log("\nBúsqueda de Libros");

//Definir el arry titulo, autor, anioPublicacion

libros =[
    {titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", anioPublicacion: 1967},
    {titulo: "1984", autor: "George Orwell", anioPublicacion: 1949},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", anioPublicacion: 1605},
];

const mostrarLibros = (listaLibros) => {
    console.log("\nLista de Libros:\n");
    for (let libro of listaLibros) { //El for recorre el arrqy y muestra los libros
        console.log(`Título: ${libro.titulo} | Autor: ${libro.autor} | Año de Publicación: ${libro.anioPublicacion}`);
    }   
};
mostrarLibros(libros);
