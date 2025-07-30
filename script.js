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

// 🛠️ Herramientas generales
const tools = [
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Dynamic frontend interactivity and behavior."
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    desc: "Custom backend integrations and dynamic features."
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Responsive design and modern styling."
  },
  {
    name: "Svelte",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    desc: "Fast and lightweight component-based development."
  },
  {
    name: "SEO Plugins",
    img: "https://api.iconify.design/simple-icons/yoast.svg",
    desc: "Enhanced on-page SEO using specialized plugins."
  },
  {
    name: "Google Search Console",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    desc: "Performance monitoring and search indexing."
  },
  {
    name: "WhatsApp Business Chat",
    img: "https://img.icons8.com/color/48/whatsapp--v1.png",
    desc: "Direct communication channel with customers."
  },
  {
    name: "Review Plugins",
    img: "https://img.icons8.com/color/48/feedback.png",
    desc: "Customer review and feedback integration."
  },
  {
    name: "Google Services",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    desc: "Integration with Maps, Analytics, and other Google tools."
  }
];

// 📂 Proyectos con sus herramientas específicas
const proyectos = [
  {
    id: "carousel-cityplace",
    tools: [
      {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic and accessible web structure."
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Modern styling and responsive layouts."
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Frontend scripting and interactive elements."
  },
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Component-based UI development with state management."
  },
  {
    name: "Svelte",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
    desc: "Fast and reactive frontend framework for performance."
  },
  {
    name: "jQuery",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    desc: "Simplified DOM manipulation and animations."
  },
  {
    name: "Moment.js",
    img: "https://img.icons8.com/fluency/48/calendar--v2.png",
    desc: "Date and time formatting for user interfaces."
  },
  {
    name: "Modernizr",
    img: "https://img.icons8.com/color/48/source-code.png",
    desc: "Browser feature detection for graceful degradation."
  },
  {
    name: "SweetAlert2",
    img: "https://img.icons8.com/color/48/approval.png",
    desc: "Stylish alert modals and user confirmations."
  },
  {
    name: "Apache HTTP Server",
    img: "https://img.icons8.com/color/48/cloudflare.png",
    desc: "Web server for hosting and performance delivery."
  },
  {
    name: "Google Ads",
    img: "https://img.icons8.com/color/48/google-ads.png",
    desc: "Online advertising to drive targeted traffic."
  },
  {
    name: "Google Search Console",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    desc: "Search performance tracking and indexing insights."
  },
  {
    name: "Technical SEO",
    img: "https://api.iconify.design/simple-icons/googleanalytics.svg",
    desc: "Structured data, meta tags, and performance optimization."
  }
    ]
  },
  {
    id: "carousel-offitours",
    tools: [
      {
    name: "WordPress",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    desc: "CMS used to build and manage the entire site."
  },
  {
    name: "WooCommerce",
    img: "https://img.icons8.com/color/48/woocommerce.png",
    desc: "E-commerce solution for selling tours and services online."
  },

  {
    name: "Join.chat",
    img: "https://img.icons8.com/color/48/whatsapp--v1.png",
    desc: "WhatsApp integration for real-time customer support."
  },
  {
    name: "Form Plugins Pro",
    img: "https://img.icons8.com/color/48/form.png",
    desc: "Custom contact and booking forms with validations."
  },
  {
    name: "Google Site Kit",
    img: "https://img.icons8.com/color/48/google-sites.png",
    desc: "All-in-one plugin for Analytics, Search Console, and PageSpeed."
  },
  {
    name: "Google Analytics",
    img: "https://img.icons8.com/color/48/google-analytics.png",
    desc: "Tracks user behavior and traffic sources."
  },
  {
    name: "Yoast SEO Premium",
    img: "https://api.iconify.design/simple-icons/yoast.svg",
    desc: "Advanced SEO optimization and keyword targeting."
  },
  {
    name: "jQuery",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    desc: "DOM manipulation and interactive frontend features."
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Styling and responsive layout customization."
  },
  {
    name: "PHP",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    desc: "Server-side scripting for dynamic functionality."
  },
    ]
  },
  {
    id: "carousel-cococo",
    tools: [
      {
    name: ".NET",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
    desc: "Backend development using .NET framework for robust logic."
  },
  {
    name: "Blade",
    img: "https://img.icons8.com/ios/50/template.png",
    desc: "Laravel’s templating engine for clean, reusable views."
  },
  {
    name: "Vue.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    desc: "Reactive frontend components and SPA architecture."
  },
  {
    name: "HTML5",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic and accessible structure for web layout."
  },
  {
    name: "CSS3",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Styling with modern and responsive techniques."
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Frontend logic and dynamic UI functionality."
  },
  {
    name: "Bootstrap",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    desc: "Responsive layout and component-based design."
  },
  {
    name: "jQuery",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    desc: "Simplified DOM interactions and animations."
  },
 
  {
    name: "Moment.js",
    img: "https://img.icons8.com/fluency/48/calendar--v2.png",
    desc: "Date and time formatting and manipulation."
  },
  {
    name: "Axios",
    img: "https://img.icons8.com/ios-filled/50/api-settings.png",
    desc: "Promise-based HTTP client for API communication."
  },
  {
    name: "WhatsApp Chat",
    img: "https://img.icons8.com/color/48/whatsapp--v1.png",
    desc: "Integration for instant messaging with clients."
  },
  {
    name: "Google Search Console",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    desc: "Monitoring search performance and indexing."
  },
  {
    name: "SEO",
    img: "https://api.iconify.design/simple-icons/yoast.svg",
    desc: "Technical and on-page search engine optimization."
  },
  {
    name: "MVC Architecture",
    img: "https://img.icons8.com/ios/50/class.png",
    desc: "Clean separation of frontend, backend, and data logic."
  }
    ]
  }
];


// 🔁 Función para renderizar cualquier carrusel
function renderCarousel(containerId, toolsArray, repeat = 5) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < repeat; i++) {
    toolsArray.forEach(tool => {
      const card = document.createElement("div");
      card.className = "habilidad-card";
      card.innerHTML = `
        <img src="${tool.img}" alt="${tool.name}" width="50">
        <h3>${tool.name}</h3>
        <p>${tool.desc || ""}</p>
      `;
    });
    container.appendChild(card);
  }
}

// 🔧 Render general
renderCarousel("carousel-track", tools);

// 🔧 Render por proyecto
proyectos.forEach(proyecto => {
  renderCarousel(proyecto.id, proyecto.tools);
});



