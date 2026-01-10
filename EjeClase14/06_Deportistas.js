//Definir un array de deportitas, nombre energia y experiencia. 
// Funcion "entrenarHoras"; parametro; cantidad de horas, resta energia horas*5 y suma experiencia,horas*2

const prompt = require("prompt-sync")();
console.log("Registro de Deportistas");

//declaro el array de objetos.
deportistas = [];
let continuar = "si";


while (continuar.toLowerCase() === 'si'){
    const nombreDeportista = prompt("Ingrese el nombre del deportista a registrar: ");
    const horasEntrenadas = parseInt(prompt("Ingrese la cantidad de horas de entrenamiento del deportista: "));
    
    const deportista = {
        nombre: nombreDeportista,
        energia: 100,
        experiencia: 0,
        entrenarHoras: function(horas) {
            this.energia -= horas * 5;
            this.experiencia += horas * 2;
            if (this.energia < 0) this.energia = 0;
        }   
    }
    deportista.entrenarHoras(horasEntrenadas);

    deportistas.push(deportista);

    continuar = prompt("¿Desea ingresar otro deportista? (si/no): ");
};

// Mostrar resultados
console.log("\nResultados del entrenamiento:");
for (let d of deportistas) {
    console.log(
        `Deportista: ${d.nombre} | Energía: ${d.energia} | Experiencia: ${d.experiencia}`
    );
}

