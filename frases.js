const frases = [
  "Ingeniero de Software",
  "Desarrollador Web",
  "WordPress Developer",
  "Frontend Developer",
  "UX/UI Enthusiast"
];

let indice = 0;
const rotador = document.getElementById("frase-rotativa");

function cambiarFrase() {
  rotador.classList.remove("aparece");
  setTimeout(() => {
    rotador.textContent = frases[indice];
    rotador.classList.add("aparece");
    indice = (indice + 1) % frases.length;
  }, 200); // tiempo para reiniciar animación
}

setInterval(cambiarFrase, 3000); // cambia cada 3 segundos
cambiarFrase(); // primera carga
