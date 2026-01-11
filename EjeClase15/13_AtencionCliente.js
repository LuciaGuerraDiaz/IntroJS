// ●	Simulador de una cola de atención al cliente
// Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
// 1.	Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
// 2.	Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
// 3.	Al final, muestra cuántos clientes fueron atendidos en total.
// Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].


console.log("Atención al cliente");

const filaClientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let atendidos = 0;

//Atender al primero
while (filaClientes.length > 0) {
  const clienteVIP = filaClientes.shift(); // Atiende al primero.
  if (clienteVIP === "VIP") {
    console.log(`Cliente atendido actualmente\nGracias por usar nuestro servicio Premium: ${clienteVIP}`);
  } else {
    console.log(`Cliente atendido actualmente: ${clienteVIP}`);
  }
  atendidos++;
}