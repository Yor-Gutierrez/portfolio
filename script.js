document.addEventListener("DOMContentLoaded", () => {
//  const proyectos = [
//   {
//     titulo: "La Leona Waterfall Website",
//     puntos: [
//       "Sitio turístico creado con Wix, optimizado para SEO local.",
//       "Diseño UX limpio y mobile‑first.",
//       "Cliente en Costa Rica."
//     ],
//     imagen: "documentos/offitours.jpg",
//     link: "https://leonawaterfallhike.com"
//   },
//   // ... más proyectos
// ];

// const contenedor = document.getElementById("proyectos-lista");
// proyectos.forEach(p => {
//   const block = document.createElement("div");
//   block.className = "project-block";
//   block.innerHTML = `
//     <div class="project-image">
//       <img src="${p.imagen}" alt="${p.titulo}">
//     </div>
//     <div class="project-details">
//       <h3>${p.titulo}</h3>
// //       <ul>${p.puntos.map(pt => `<li>${pt}</li>`).join("")}</ul>
// //       <a href="${p.link}" class="read-more" target="_blank">Read More 🔒</a>
// //     </div>`;
// //   contenedor.appendChild(block);
// // });

});


// cambiador
//const palabras = ["Web Developer", "UX/UI Designer", "Wordpress Developer"]
//  let i = 0;
//  const cambiador = document.getElementById("cambiador");

//  setInterval(() => {
//    i = (i + 1) % palabras.length;
//    cambiador.textContent = palabras[i];
//  }, 2000); // Cambia cada 2 segundos

  const palabras = ["George","Web Developer", "UX/UI Designer", "Wordpress Developer"];
  const mensajeFinal = "Nice to meet you!";
  let palabraIndex = 0;
  let letraIndex = 0;
  let escribiendo = true;
  let cicloTerminado = false;

  const cambiador = document.getElementById("cambiador");
  const titulo = document.getElementById("titulo");

  function escribir() {
    if (cicloTerminado) return;

    const palabraActual = palabras[palabraIndex];

    if (escribiendo) {
      cambiador.textContent = palabraActual.substring(0, letraIndex + 1);
      letraIndex++;

      if (letraIndex === palabraActual.length) {
        escribiendo = false;
        setTimeout(escribir, 1500);
        return;
      }
    } else {
      cambiador.textContent = palabraActual.substring(0, letraIndex - 1);
      letraIndex--;

      if (letraIndex === 0) {
        palabraIndex++;
        escribiendo = true;

        if (palabraIndex >= palabras.length) {
          // Reemplazar todo el título con el mensaje final
          setTimeout(() => {
            titulo.innerHTML = `${mensajeFinal}<span class="cursor">|</span>`;
            cicloTerminado = true;
          }, 500);
          return;
        }
      }
    }

    setTimeout(escribir, 100);
  }

  escribir();


