//Pedir a usuario que ingrese sus gastos semanales por día. 
//Informar total de gastos
//


const prompt = require("prompt-sync")();

let gastos = [];

// pedir los datos para generar la matriz

for (let semana = 0; semana < 4; semana++) {
    let gastosSemana = [];
    console.log(`\nSemana ${semana + 1}`);

    for (let dia = 0; dia < 7; dia++) {
        let gastoDia;

        do {
            gastoDia = parseFloat(
                prompt(`Ingrese el gasto del día ${dia + 1}: `)
            );

            if (isNaN(gastoDia)) {
                console.log("Error: debe ingresar un número válido.");
            }

        } while (isNaN(gastoDia));

        gastosSemana.push(gastoDia);
    }

    gastos.push(gastosSemana);
}

let gastoMes = 0;

for(let i = 0; i < gastos.length; i++) {
        for (let j = 0; j < gastos[i].length; j++) {
            gastoMes += gastos[i][j];
        }
}

console.log("Gasto del mes fue de: $", gastoMes);

//let GastoSemana = 0;
console.log ("Quieres saber de alguna de las semanas?")

let semanaElegida;

do {
    semanaElegida = parseInt(
        prompt("Ingrese el número de semana (1 a 4): ")
    );

    if (semanaElegida < 1 || semanaElegida > 4 || isNaN(semanaElegida)) {
        console.log("Semana inválida. Debe ingresar un número del 1 al 4.");
    }

} while (semanaElegida < 1 || semanaElegida > 4 || isNaN(semanaElegida));

let totalSemana = 0;

for (let i = 0; i < gastos[semanaElegida - 1].length; i++) {
    totalSemana += gastos[semanaElegida - 1][i];
}

console.log("Gasto total de la semana", semanaElegida + ":", totalSemana);

//let MayorGasto = []; //Identificar Dia y semana que se hizo

let mayorGastoSemana = 0;
let semanaMayor = 0;

for (let i = 0; i < gastos.length; i++) {
    let sumaSemana = 0;

    for (let j = 0; j < gastos[i].length; j++) {
        sumaSemana += gastos[i][j];
    }

    if (sumaSemana > mayorGastoSemana) {
        mayorGastoSemana = sumaSemana;
        semanaMayor = i + 1;
    }
}

console.log("Semana con mayor gasto:", semanaMayor);

//Dia con mas gasto

let mayorGastoDia = 0;
let diaMayor = 0;

for (let dia = 0; dia < 7; dia++) {
    let sumaDia = 0;

    for (let semana = 0; semana < 4; semana++) {
        sumaDia += gastos[semana][dia];
    }

    if (sumaDia > mayorGastoDia) {
        mayorGastoDia = sumaDia;
        diaMayor = dia + 1;
    }
}

console.log("Día con mayor gasto, esa semana fue:", diaMayor);
