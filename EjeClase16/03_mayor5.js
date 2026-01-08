// Usamos find porque arroja solo el primer resultado que escuentra en el array

let numeros = [2,3,6,8,7,6,4];

let mayorCinco = numeros.find(function (mayor){
    return mayor >5;
});

console.log("El primer número mayor que 5 en el array es: " + mayorCinco);