// Supongo que es un filtro, find

let nombres = [
    "Ana", "Luis", "Gloria", "Soraya", "Elizabeth"
];

let BuscoNombre = nombres.find(function (nombre){
    return nombre === "Luis";
});

console.log(BuscoNombre);