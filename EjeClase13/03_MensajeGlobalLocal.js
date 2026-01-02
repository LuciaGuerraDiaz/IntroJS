// saludo global y local

//Scope Global, se declara fuera de cualquier funcion y existe en todo el codigo.
let saludoGlobal = 'Hola desde el Scope global';
function mostrarGlobal () {
    let saludoLocal = "Soy el local"
    console.log(saludoLocal);
};
mostrarGlobal(); //Esto muestra la opción del saludo local invocando la funcion

//Segunda forma de ver el saludo local con return

function mostrarGlobal2 () {

    let local = "Soy el saludo local usando return";
    return local
}

let mensajelocal2 = mostrarGlobal2 ();
console.log(mensajelocal2);

// Imprime: Soy una variable global
console.log(saludoGlobal);

