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

function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");


  lista.innerHTML = "";

  
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
 
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  const amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = amigoSorteado;
}