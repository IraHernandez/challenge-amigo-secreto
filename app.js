// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value;

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  nombreAmigos.push(nombre);

  const lista = document.getElementById("listaAmigos");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;
  lista.appendChild(nuevoElemento);

  input.value = "";
}