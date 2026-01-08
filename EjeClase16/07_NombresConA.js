// Hacer un filtro que identifique los nombres que inicien con A

let nombres = [
    "Ana", "Luis", "Gloria", "Soraya", "Elizabeth"
];

let nombresConA = nombres.filter(function (nombre){
    return nombre[0] === "A";
});

console.log(nombresConA);

// tambien hay un método llamado .startsWith() más facil de usar 

let nombresConAA = nombresA.filter(function (nombre) {
    return nombre.startsWith("A");
});

console.log(nombresConAA);