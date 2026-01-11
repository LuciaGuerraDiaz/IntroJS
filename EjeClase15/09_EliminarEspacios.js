// Elimar espacios se usa trim - solo limpia de entrada los espacios
const texto = "   Hola mundo     ! ";
const limpieza = texto.trim();
console.log(limpieza); //Hola mundo     !
const limpiezaFinal = texto.replace(/\s+!/g, "!");
console.log(limpiezaFinal);