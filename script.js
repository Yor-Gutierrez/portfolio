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

  const tools = [
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic and accessible structure."
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Modern styles and responsive design."
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Dynamic frontend interactivity."
  },
  {
    name: "Vue.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    desc: "Reactive components and modern SPAs."
  },
  {
    name: "SQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    desc: "Efficient queries and database management."
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    desc: "Server-side logic and backend development."
  },
  {
    name: "WordPress",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    desc: "Custom design, plugins, and technical SEO."
  },
  {
    name: "UX/UI",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    desc: "User-centered experiences and intuitive design."
  },
  {
    name: "Git & GitHub",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    desc: "Version control and agile collaboration."
  },
  {
    name: "SEO",
    img: "https://api.iconify.design/simple-icons/googleanalytics.svg",
    desc: "Technical optimization to boost search rankings."
  }
];

const container = document.getElementById("carousel-track");

// 🌀 Repetimos el grupo varias veces (5, por ejemplo)
const REPEAT_TIMES = 5;

function renderInfiniteCarousel() {
  for (let i = 0; i < REPEAT_TIMES; i++) {
    tools.forEach(tool => {
      const card = document.createElement("div");
      card.className = "habilidad-card";
      card.innerHTML = `
        <img src="${tool.img}" alt="${tool.name}" width="50">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>
      `;
      container.appendChild(card);
    });
  }
}

renderInfiniteCarousel();

