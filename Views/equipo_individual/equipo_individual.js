const equiposData = {
  sultanes: {
    nombre: "Sultanes de Monterrey",
    logo: "../multimedia/sultanes icon.png",
    fallback: "MT",
    descripcion: "Los Sultanes de Monterrey son un equipo tradicional de la Liga Mexicana de Béisbol con sede en Monterrey, Nuevo León, fundados en 1939.",
    momento: {
      titulo: "Sultanes de Monterrey campeón de la Zona Norte tras remontada a Tecos de los Dos Laredos",
      imagen: "../../Assets/Images/Sultanes_campeon_ZN_2024.jpg",
      pie: "Le pegó tan fuerte que casi se sale del estadio",
      fecha: "-1 de Septiembre del 2024"
    },
    estadisticas: [
      {
      //¡La jugada del décimo título!
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. C. Soto", valor: "64" },
          { jugador: "2. Z. Almonte", valor: "59" },
          { jugador: "3. R. Mendoza", valor: "52" }
        ]
      },
      {
        categoria: "PITICHEO",
        subtitulo: "Mayor nuemro de ponches",
        filas: [
          { jugador: "1. T. Kinley", valor: "84" },
          { jugador: "2. N. Kingham", valor: "76" },
          { jugador: "3. S. Sánchez", valor: "68" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. S. Sánchez", valor: "2.35" },
          { jugador: "2. T. Kinley", valor: "2.80" },
          { jugador: "3. C. Morales", valor: "3.10" }
        ]
      }
    ],
    videos: [
      { titulo: "¡La jugada del décimo título!", archivo: "../../Assets/Videos/La_jugada_del_décimo_título.mp4" },
      { titulo: "Ramirez captura el tercer out con gran atrapada", archivo: "../../Assets/Videos/Ramirez_tercer_out.mp4" },
      { titulo: "Ortega retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/Ortega_tercer_out.mp4" },
      { titulo: "Bañuelos retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/Bañuelos_tercer_out.mp4" },
      { titulo: "Bañuelos retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/Bañuelos_tercer_ponche.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/Video_6.mp4" }
    ]
  },
  diablos: {
    nombre: "Diablos Rojos del México",
    logo: "../multimedia/logo-diablos.png",
    fallback: "MEX",
    descripcion: "Los Diablos Rojos del México son una de las franquicias más laureadas y representativas del béisbol mexicano, con sede en el Estadio Alfredo Harp Helú.",
    momento: {
      titulo: "DIABLOS ROJOS DEL MÉXICO CORONA AÑO MÁGICO CON SU TÍTULO NÚMERO 17",
      imagen: "../../Assets/Images/Diablos_campeonato_17.jpg",
      pie: "",
      fecha: "-9 de septiembre de 2024"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. J. Pirela", valor: "78" },
          { jugador: "2. R. Canó", valor: "77" },
          { jugador: "3. J. Gamboa", valor: "56" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor nuemro de ponches",
        filas: [
          { jugador: "1. T. Bauer", valor: "120" },
          { jugador: "2. E. Leal", valor: "74" },
          { jugador: "3. R. Pinto", valor: "58" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de carreras limpias más alto",
        filas: [
          { jugador: "1. T. Bauer", valor: "2.48" },
          { jugador: "2. E. Leal", valor: "2.92" },
          { jugador: "3. R. Pinto", valor: "3.20" }
        ]
      }
    ],
    videos: [
      { titulo: "¡Último out y Diablos es líder absoluto del Standing LMB 2026!", archivo: "../../Assets/Videos/Diablos_campeon_2026.mp4" },
      { titulo: "Diablos concreta la doble matanza", archivo: "../../Assets/Videos/Diablos_doble_matanza.mp4" },
      { titulo: "Diablos ejecuta doble play para colgar el cero", archivo: "../../Assets/Videos/Diablos_doble_play.mp4" },
      { titulo: "Elevado de Alcantara para el final del juego", archivo: "../../Assets/Videos/Elevado_de_Alcantara.mp4" },
      { titulo: "Imparable de Franklin Barreto; entra la carrera 11", archivo: "../../Assets/Videos/Imparable_Franklin_carrera_11.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  tigres: {
    nombre: "Tigres de Quintana Roo",
    logo: "../multimedia/logo-tigres.png",
    fallback: "TIG",
    descripcion: "Los Tigres de Quintana Roo, anteriormente Tigres capitalinos, cuentan con una larga y gloriosa tradición en el circuito de verano.",
    momento: {
      titulo: "La Garra Felina",
      imagen: "../../Assets/Images/70_tigres.jpeg",
      pie: "Cierre perfecto para coronarse campeones",
      fecha: "-10 de Abril del 2025"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. A. Rodríguez", valor: "54" },
          { jugador: "2. A. Wilson", valor: "48" },
          { jugador: "3. E. Barrera", valor: "42" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor nuemro de ponches",
        filas: [
          { jugador: "1. R. Carrillo", valor: "71" },
          { jugador: "2. C. De Paula", valor: "64" },
          { jugador: "3. E. Valenzuela", valor: "55" }
        ]
      },
      {
        categoria: "Fildeo",
        subtitulo: "Prcentaje de fildeo más alto",
        filas: [
          { jugador: "1. R. Carrillo", valor: "3.45" },
          { jugador: "2. C. De Paula", valor: "3.90" },
          { jugador: "3. B. Arredondo", valor: "4.15" }
        ]
      }
    ],
    videos: [
      { titulo: "Defensiva bengalí concreta doble play", archivo: "../../Assets/Videos/Defensiva_bengalí_concreta_dobleplay.mp4" },
      { titulo: "Ponche de Henry Sosa para el tercer out", archivo: "../../Assets/Videos/Henry_Sosa_tercer_out.mp4" },
      { titulo: "Aldo Flores asegura el elevado para el tercer out", archivo: "../../Assets/Videos/Aldo_Flores_elevado.mp4" },
      { titulo: "Tras wildpitch; Julián Ornelas timbra la de la quiniela", archivo: "../../Assets/Videos/Julian_Ornelas_quiniela.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  toros: {
    nombre: "Toros de Tijuana",
    logo: "../multimedia/logo-toros.png",
    fallback: "TIJ",
    descripcion: "Los Toros de Tijuana representan a la frontera norte con gran poderío ofensivo y títulos recientes en la Serie del Rey.",
    momento: {
      titulo: "TOROS DE TIJUANA ES CAMPEÓN DE LA LIGA MEXICANA DE BEISBOL BANORTE",
      imagen: "../../Assets/Images/tijuana_campeon_2026.jpeg",
      pie: "",
      fecha: "-15 de septiembre del 2021"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. M. Adams", valor: "68" },
          { jugador: "2. J. Lake", valor: "61" },
          { jugador: "3. N. Castro", valor: "54" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. M. Barreda", valor: "88" },
          { jugador: "2. J. Vargas", valor: "73" },
          { jugador: "3. F. Pérez", valor: "62" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. M. Barreda", valor: "2.85" },
          { jugador: "2. F. Pérez", valor: "3.10" },
          { jugador: "3. J. Vargas", valor: "3.45" }
        ]
      }
    ],
    videos: [
      { titulo: "En el guante de Junior Lake el out 27, Toros campeón", archivo: "../../Assets/Videos/En_el_guante_de_Junior_Lake_el_out_27_Toros_campeón.mp4" },
      { titulo: "Ramírez saca el ponche; a tres outs de la victoria", archivo: "../../Assets/Videos/Ramírez_ponche_victoria.mp4" },
      { titulo: "Pérez se lanza y tira a primera para el tercer out", archivo: "../../Assets/Videos/Pérez_tercer_out.mp4" },
      { titulo: "Seth Beer hace swing y cae el tercer out", archivo: "../../Assets/Videos/Seth_Beer_tercer_out.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  leones: {
    nombre: "Leones de Yucatán",
    logo: "../multimedia/logo-leones.png",
    fallback: "YUC",
    descripcion: "Los Leones de Yucatán son los reyes de la Zona Sur, reconocidos por su excelente pitcheo y su apasionada afición en Mérida.",
    momento: {
      titulo: "66 Años de Leones en MLB",
      imagen: "../../Assets/Images/66_de_leones.jpg",
      pie: "",
      fecha: "-16 de Abril del 2020"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. A. Charles", valor: "72" },
          { jugador: "2. Y. Drake", valor: "65" },
          { jugador: "3. L. Juárez", valor: "58" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. C. Thompson", valor: "82" },
          { jugador: "2. Y. Negrín", valor: "75" },
        { jugador: "3. F. Doubront", valor: "69" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. Y. Negrín", valor: "2.75" },
          { jugador: "2. C. Thompson", valor: "3.05" },
          { jugador: "3. F. Doubront", valor: "3.30" }
        ]
      }
    ],
    videos: [
      { titulo: "Oliver Carrillo desempata con cuadrangular solitario", archivo: "../../Assets/Videos/Oliver_Carrillo_desempata.mp4" },
      { titulo: "Marco Jaime timbra la carrera del desempate", archivo: "../../Assets/Videos/Marco_Jaime_desempate.mp4" },
      { titulo: "Reivaj García suma una rayita con sencillo productor", archivo: "../../Assets/Videos/Reivaj_García_sencillo.mp4" },
      { titulo: "Ichiro Rodriguez pega de hit y entra una carrera más", archivo: "../../Assets/Videos/Ichiro_Rodriguez_hit.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  acereros: {
    nombre: "Acereros de Monclova",
    logo: "../multimedia/logo-acereros.png",
    fallback: "MVA",
    descripcion: "La Furia Azul de Monclova, un equipo de gran tradición en Coahuila que logró consagrarse en la Serie del Rey 2019.",
    momento: {
      titulo: "Acereros de Monclova viene de atras y se corona en Serie del Rey",
      imagen: "../../Assets/Images/Acereros-de-Monclova-viene-de-atras-y-se-corona-en-Serie-del-Rey-2019.jpg",
      pie: "",
      fecha: "-03 de octubre del 2019"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. W. Ríos", valor: "2.90" },
          { jugador: "2. Z. Lowther", valor: "3.15" },
          { jugador: "3. E. Ramírez", valor: "3.50" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. Z. Lowther", valor: "92" },
          { jugador: "2. W. Ríos", valor: "81" },
          { jugador: "3. E. Ramírez", valor: "64" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. W. Ríos", valor: "2.90" },
          { jugador: "2. Z. Lowther", valor: "3.15" },
          { jugador: "3. E. Ramírez", valor: "3.50" }
        ]
      }
    ],
    videos: [
      { titulo: "Cuadrangular solitario de Rodolfo Amador", archivo: "../../Assets/Videos/Cuadrangular_solitario_de_Rodolfo_Amador.mp4" },
      { titulo: "Márquez controla rodado y tira a la inicial para el tercer out", archivo: "../../Assets/Videos/Márquez_tercer_out.mp4" },
      { titulo: "Andretty Cordero anota la segunda carrera para Acereros", archivo: "../../Assets/Videos/Andretty_Cordero_segunda_carrera.mp4" },
      { titulo: "Video 4", archivo: "../../Assets/Videos/video4.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  algodoneros: {
    nombre: "Algodoneros Unión Laguna",
    logo: "../multimedia/logo-algodoneros.png",
    fallback: "LAG",
    descripcion: "Representantes de la Comarca Lagunera, uno de los equipos más antiguos y queridos de la pelota veraniega mexicana.",
    momento: {
      titulo: "Algodoneros Avanza a la serie de campeonato",
      imagen: "../../Assets/Images/ALGODONEROS-UNION-LAGUNA-AVANZA-A-LA-SERIE-DE-CAMPEONATO.jpeg",
      pie: "",
      fecha: "-27 de Agosto del 2023"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. N. Villar", valor: "69" },
          { jugador: "2. N. Tovalín", valor: "63" },
          { jugador: "3. H. Rodríguez", valor: "51" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. J. Van Meter", valor: "79" },
          { jugador: "2. A. Alberto", valor: "70" },
          { jugador: "3. Y. Cabrera", valor: "61" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. J. Van Meter", valor: "2.80" },
          { jugador: "2. A. Alberto", valor: "3.10" },
          { jugador: "3. T. McIlraith", valor: "3.25" } 
        ]
      }
    ],
    videos: [
      { titulo: "Algodoneros derrota en casa a los Rieleros", archivo: "../../Assets/Videos/Algodoneros_derrota_en_casa_a_Rieleros.mp4" },
      { titulo: "Elevado de Nick Torres; Adrián Tovalín timbra", archivo: "../../Assets/Videos/Elevado_Nick_Torres_Adrián_Tovalín_timbra.mp4" },
      { titulo: "Ryan Hendrix retira el tercer out por la vía del ponche", archivo: "../../Assets/Videos/Ryan_Hendrix_tercer_out.mp4" },
      { titulo: "Mason Martin produce la quinta carrera", archivo: "../../Assets/Videos/Mason_Martin_quinta_carrera.mp4" },
      { titulo: "Julián Escobedo se desliza y completa el out", archivo: "../../Assets/Videos/Julián_Escobedo_desliz.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  pericos: {
    nombre: "Pericos de Puebla",
    logo: "../multimedia/logo-pericos.png",
    fallback: "PUE",
    descripcion: "Los Pericos de Puebla han destacado como uno de los equipos más competitivos del país, con múltiples campeonatos de la LMB.",
    momento: {
      titulo: "Pericos de puebla campeones serie rey 2023",
      imagen: "../../Assets/Images/pericos-puebla-campeones-serie-rey-2023.jpg",
      pie: "",
      fecha: "-15 de septiembre del 2023"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. P. O'Brien", valor: "73" },
          { jugador: "2. C. Adames", valor: "67" },
          { jugador: "3. D. Ortiz", valor: "55" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. G. Ynoa", valor: "85" },
          { jugador: "2. Y. Santos", valor: "73" },
          { jugador: "3. F. Haro", valor: "60" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. Y. Santos", valor: "2.70" },
          { jugador: "2. G. Ynoa", valor: "3.18" },
          { jugador: "3. A. Preciado", valor: "3.40" }
        ]
      }
    ],
    videos: [
      { titulo: "Lorenzo Cedrola llega al plato en pisa y corre", archivo: "../../Assets/Videos/Lorenzo_Cedrola_plato_pisa_corre.mp4" },
      { titulo: "Samar Leyva suma una rayita con cuadrangular", archivo: "../../Assets/Videos/Samar_Leyva_cuadrangular.mp4" },
      { titulo: "Wild pitch permite la entrada de la sexta carrera de Pericos", archivo: "../../Assets/Videos/Wild_pitch_pericos.mp4" },
      { titulo: "Doblete de Sebastián Elizalde suma la quinta carrera", archivo: "../../Assets/Videos/Doblete_Sebastián_Elizalde_quinta_carrera.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/video6.mp4" }
    ]
  },
  saraperos: {
    nombre: "Saraperos de Saltillo",
    logo: "../multimedia/logo-saraperos.png",
    fallback: "SAL",
    descripcion: "El Sarape de Saltillo cuenta con una rica historia y un inolvidable bicampeonato en la LMB (2009 y 2010).",
    momento: {
      titulo: "SARAPEROS EN LIGAS INVERNALES",
      imagen: "../../Assets/Images/saraperos_en_ligas_invernales.jpg",
      pie: "RELEVO DE JESÚS CRUZ EN EL JUEGO DEL CAMPEONATO DE LOS CHARROS",
      fecha: "-26 de Enerp del 2026"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Mas carreras producidas",
        filas: [
          { jugador: "1. F. Villegas", valor: "70" },
          { jugador: "2. M. Rosario", valor: "62" },
          { jugador: "3. H. Urrutia", valor: "56" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Mayor número de ponches",
        filas: [
          { jugador: "1. J. Webster", valor: "80" },
          { jugador: "2. A. Rosario", valor: "72" },
          { jugador: "3. D. Huff", valor: "65" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo más alto",
        filas: [
          { jugador: "1. J. Webster", valor: "3.05" },
          { jugador: "2. A. Rosario", valor: "3.35" },
          { jugador: "3. D. Huff", valor: "3.60" }
        ]
      }
    ],
    videos: [
      { titulo: "Mallex Smith detona su primer cuadrangular en la LMB", archivo: "../../Assets/Videos/Mallex_Smith_primer_cuadrangular_LMB.mp4" },
      { titulo: "El venezolano José Peraza atizó par de cuadrangulares", archivo: "../../Assets/Videos/Jose_Peraza_dos_cuadras.mp4" },
      { titulo: "Cuarto cuadrangular de Bobby Bradley con Saraperos", archivo: "../../Assets/Videos/Cuarto_cuadrangular_de_Bobby_Bradley_con_Saraperos.mp4" },
      { titulo: "Atrapadon de Alex Mejía", archivo: "../../Assets/Videos/Alex_Mejía_atrapadon.mp4" },
      { titulo: "Grand Slam de Missael Rivera con Saraperos de Saltillo", archivo: "../../Assets/Videos/Grand_Slam_Missael_Rivera.mp4" },
      { titulo: "Out en home para terminar la entrada", archivo: "../../Assets/Videos/Out_en_home_para_terminar_la_entrada.mp4" }
    ]
  }
};

//Termina los datos de los equipos

function renderizarEstadisticas(estadisticas) {
  const contenedor = document.getElementById("stats-container");
  if (!contenedor) return;

  if (!estadisticas || estadisticas.length === 0) {
    contenedor.innerHTML = "<p>No hay estadísticas disponibles para este equipo.</p>";
    return;
  }

  const html = estadisticas.map(grupo => {
    const subtituloHtml = grupo.subtitulo
      ? `<div class="table-header-row">
           <span>${grupo.subtitulo}</span>
           <span></span>
         </div>`
      : "";

    const filasHtml = grupo.filas.map(fila => `
      <div class="table-row">
        <span>${fila.jugador}</span>
        <span>${fila.valor}</span>
      </div>
    `).join("");

    return `
      <div class="table-group">
        <div class="table-title">${grupo.categoria}</div>
        ${subtituloHtml}
        ${filasHtml}
      </div>
    `;
  }).join("");

  contenedor.innerHTML = html;
}

function renderizarVideos(videos) {
  const container = document.getElementById("videos-container");
  if (!container) return;

  if (!videos || videos.length === 0) {
    container.innerHTML = "<p style='color: white; grid-column: span 3; text-align: center;'>Sin videos disponibles</p>";
    return;
  }

  container.innerHTML = videos.map(vid => `
    <a href="../videos_equipo/videos_equipo.html?video=${encodeURIComponent(vid.archivo)}&title=${encodeURIComponent(vid.titulo)}" class="video-item">
      <video 
        src="${vid.archivo}#t=0.5" 
        preload="metadata" 
        muted 
        playsinline>
      </video>
      <span class="video-label">${vid.titulo}</span>
    </a>
  `).join("");
}

function actualizarPaginaEquipo() {
  console.log("Cargando datos del equipo...");
  
  //Obtener parámetro de URL
  const params = new URLSearchParams(window.location.search);
  const teamKey = params.get("team")?.toLowerCase().trim();
  console.log("Equipo detectado en URL:", teamKey);

  if (!teamKey || !equiposData[teamKey]) {
    console.warn("Equipo no encontrado o no especificado. Mostrando sultanes por defecto.");
  }

  const data = equiposData[teamKey] || equiposData["sultanes"];

  //Nombre del equipo
  document.title = `Wiki Frontera Beisbolera - ${data.nombre}`;

  //Logo y fallback
  const logoImg = document.getElementById("team-logo");
  const fallback = document.getElementById("team-fallback");
  if (logoImg) {
    logoImg.style.display = "block";
    logoImg.src = data.logo;
    logoImg.alt = `Logo ${data.nombre}`;
  }
  if (fallback) {
    fallback.style.display = "none";
    fallback.textContent = data.fallback;
  }

  //Nombre y descripción
  const nameEl = document.getElementById("team-name");
  if (nameEl) nameEl.textContent = data.nombre;

  const descEl = document.getElementById("team-description");
  if (descEl) descEl.textContent = data.descripcion;

  //Mejor momento
  if (data.momento) {
    const momentTitle = document.getElementById("moment-title");
    if (momentTitle) momentTitle.textContent = data.momento.titulo;

    const momentImg = document.getElementById("moment-img");
    if (momentImg) {
      momentImg.style.display = "block";
      momentImg.src = data.momento.imagen;
    }

    const momentCaption = document.getElementById("moment-caption");
    if (momentCaption) {
      momentCaption.innerHTML = `${data.momento.pie}
      ${data.momento.fecha}`;
    }
    }

    //Estadisticas
    renderizarEstadisticas(data.estadisticas);

    //Videos
    renderizarVideos(data.videos);

    console.log("Datos actualizados correctamente para:", data.nombre);
}

if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", actualizarPaginaEquipo);
} else {
actualizarPaginaEquipo();
}