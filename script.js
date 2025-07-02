document.addEventListener("DOMContentLoaded", () => {
  // === PROYECTOS ===
  const proyectos = [
    {
      titulo: "La Leona Waterfall Website",
      descripcion:
        "Sitio web turístico creado con Wix, optimizado para SEO local y experiencia de usuario.",
      herramientas: ["Wix", "SEO", "Diseño UX/UI"],
      detalles:
        "Este proyecto fue desarrollado en Wix para un cliente local en Costa Rica. Se trabajó en la estructura, navegación y optimización para buscadores. Se adaptó a dispositivos móviles con un enfoque visual amigable.",
      imagen: "documentos/WhatsApp Image 2022-02-23 at 3.01.42 PM (3).jpeg",
      link: "https://leonawaterfallhike.com",
    },
    {
      titulo: "La Leona Waterfall by Offi tours",
      descripcion:
        "Sitio turístico que ofrece tours a todas partes del mundo, especialmente USA, Costa Rica, Francia, México.",
      herramientas: ["WordPress", "PHP", "SEO", "JavaScript"],
      detalles:
        "Desarrollo personalizado en WordPress con integración de reservas y optimización SEO. Uso de librerías JS para gestión de tiempos y calendario.",
      imagen: "/documentos/offitours.jpg",
      link: "https://offitours.com",
    },
    {
      titulo: "Colaboración con Cityplace",
      descripcion:
        "Colaboración para la creación de una página web para Cityplace.",
      herramientas: ["JavaScript", "Moment.js", "PHP"],
      detalles:
        "Implementación de funcionalidades dinámicas para la gestión de reservas usando librerías de tiempo y PHP para backend.",
      imagen: "documentos/Screenshot 2025-06-25 140232.jpg",
      link: "https://cityplacecr.com",
    },
  ];

  const proyectosLista = document.getElementById("proyectos-lista");
  const modal = document.getElementById("modal-info");
  const modalTitulo = document.getElementById("modal-titulo");
  const modalImagen = document.getElementById("modal-imagen");
  const modalDetalles = document.getElementById("modal-detalles");
  const modalHerramientas = document.getElementById("modal-herramientas");
  const modalLink = document.getElementById("modal-link");
  const closeBtn = document.querySelector(".close-btn");

  function cargarProyectos() {
    proyectosLista.innerHTML = "";

    proyectos.forEach((proyecto, index) => {
      const card = document.createElement("div");
      card.className = "proyecto-card";

      card.innerHTML = `
        <img class="proyecto-img" src="${proyecto.imagen}" alt="${proyecto.titulo}">
        <div class="proyecto-content">
          <h3>${proyecto.titulo}</h3>
          <p>${proyecto.descripcion}</p>
          <div class="proyecto-buttons">
            <a href="${proyecto.link}" target="_blank" class="btn-cv">Ver Proyecto</a>
            <button class="btn-cv btn-info" data-index="${index}">Más Información</button>
          </div>
        </div>
      `;

      proyectosLista.appendChild(card);
    });

    const botonesInfo = document.querySelectorAll(".btn-info");
    botonesInfo.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const i = e.target.getAttribute("data-index");
        abrirModal(i);
      });
    });
  }

  function abrirModal(i) {
    const proyecto = proyectos[i];
    modalTitulo.textContent = proyecto.titulo;
    modalImagen.src = proyecto.imagen;
    modalImagen.alt = proyecto.titulo;
    modalDetalles.textContent = proyecto.detalles;

    modalHerramientas.innerHTML = "";
    proyecto.herramientas.forEach((herr) => {
      const li = document.createElement("li");
      li.textContent = herr;
      modalHerramientas.appendChild(li);
    });

    modalLink.href = proyecto.link;
    modal.style.display = "flex";
  }

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-info")) {
      const index = e.target.getAttribute("data-index");
      const info = document.getElementById(`info-${index}`);
      if (info) info.classList.toggle("visible");
    }
  });

  cargarProyectos();

  // === MODO OSCURO ===
  const toggle = document.getElementById("toggleModoOscuro");
  if (toggle) {
    toggle.addEventListener("change", () => {
      document.body.classList.toggle("modo-oscuro");
    });
  }
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


