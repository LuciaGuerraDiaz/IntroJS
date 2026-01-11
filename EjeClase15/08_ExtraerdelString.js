// Extraer del string, la palabra Gato usando slice o substring() Termine usando replace 
//Intengo 1
const frase = "Los gatos son geniales";
console.log(frase);
//Extraer "gatos"
const singatos = frase.slice(4,9); //El slice no acepta strings asi que hay que poner el index de la palabra a borrar. 
console.log(`La palabra seleccionada es: ${singatos}`);
//Uso del replace fue más eficiente
const sinGatos2 = frase.replace("gatos ","");
console.log(`La nueva frase sin gatos: ${sinGatos2}`);