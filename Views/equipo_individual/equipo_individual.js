const equiposData = {
  sultanes: {
    nombre: "Sultanes de Monterrey",
    logo: "../../Assets/Images/logos-equipos/sultanes-logo.png",
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
      { titulo: "¡La jugada del décimo título!", archivo: "../../Assets/Videos/sultanes/La_jugada_del_décimo_título.mp4" },
      { titulo: "Ramirez captura el tercer out con gran atrapada", archivo: "../../Assets/Videos/sultanes/Ramirez_tercer_out.mp4" },
      { titulo: "Ortega retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/sultanes/Ortega_tercer_out.mp4" },
      { titulo: "Bañuelos retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/sultanes/Bañuelos_tercer_out.mp4" },
      { titulo: "Bañuelos retira el tercer out por la vía del ponche ", archivo: "../../Assets/Videos/sultanes/Bañuelos_tercer_ponche.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/Video_6.mp4" }
    ]
  },
  caliente: {
    nombre: "Caliente de Durango",
    logo: "../../Assets/Images/logos-equipos/caliente-logo.png",
    fallback: "DUR",
    descripcion: "La franquicia más reciente de la Zona Norte, incorporada en 2024 para encender la pasión por el béisbol en Durango.",
    momento: {
      titulo: "Caliente de Durango sorprende en debut",
      imagen: "../../Assets/Images/debut-caliente-durango.jpeg",
      pie: "El nuevo equipo de la entidad, Caliente de Durango, hizo su debut en la Liga Mexicana de Béisbol",
      fecha: "-13 de Abril del 2024"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Hits conectados",
        filas: [
          { jugador: "1. A. García", valor: "78" },
          { jugador: "2. M. Robles", valor: "71" },
          { jugador: "3. L. Silva", valor: "64" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Ponches recetados",
        filas: [
          { jugador: "1. R. Cruz", valor: "62" },
          { jugador: "2. E. Valenzuela", valor: "55" },
          { jugador: "3. J. Vargas", valor: "48" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Outs concretados en jardines",
        filas: [
          { jugador: "1. D. Ortiz", valor: "110" },
          { jugador: "2. J. Pérez", valor: "98" },
          { jugador: "3. H. Gómez", valor: "85" }
        ]
      }
    ],
    videos: [
      { titulo: "Webster Rivas anota la sexta carrera", archivo: "../../Assets/Videos/caliente/webster_rivas_sexta_carrera.mp4" },
      { titulo: "Imparable productor de Drew Stankiewicz", archivo: "../../Assets/Videos/caliente/imparable_drew.mp4" },
      { titulo: "Daniel Johnson asegura la esférica para el primer out", archivo: "../../Assets/Videos/caliente/daniel_johnson_esferica.mp4" },
      { titulo: "Estevan Florial conecta jonrón de dos carreras", archivo: "../../Assets/Videos/caliente/estevan_florial_jonron_dos_carreras.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/caliente/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/caliente/video6.mp4" }
    ]
  },

  charros: {
    nombre: "Charros de Jalisco",
    logo: "../../Assets/Images/logos-equipos/charros-logo.png",
    fallback: "JAL",
    descripcion: "Equipo emblemático fundado en 1949 con sede en Zapopan, Jalisco, representante de la elegancia y tradición tapatía.",
    momento: {
      titulo: "Charros de Jalisco es campeon de la Liga Mexicana del Pacífico 2025",
      imagen: "../../Assets/Images/charros-campeon-liga-mexicana-pacifico.jpg",
      pie: "Charros de Jalisco se consagra campeón de la Liga Mexicana del Pacífico",
      fecha: "-29 de Mayo del 2025"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Bases por bolas recibidas",
        filas: [
          { jugador: "1. J. Aguilar", valor: "42" },
          { jugador: "2. M. Serna", valor: "38" },
          { jugador: "3. R. Castro", valor: "35" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Juegos ganados",
        filas: [
          { jugador: "1. L. Mendoza", valor: "9" },
          { jugador: "2. O. Félix", valor: "7" },
          { jugador: "3. A. Solís", valor: "6" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Asistencias en el cuadro",
        filas: [
          { jugador: "1. A. Rodríguez", valor: "145" },
          { jugador: "2. E. Rivera", valor: "130" },
          { jugador: "3. G. Gutiérrez", valor: "112" }
        ]
      }
    ],
    videos: [
      { titulo: "Ponche de Emerson Martínez para el primer out", archivo: "../../Assets/Videos/charros/ponche_emerson_martinez.mp4" },
      { titulo: "César Gómez retira el tercer out por la vía del ponche", archivo: "../../Assets/Videos/charros/cesar_gomez_tercer_out.mp4" },
      { titulo: "Imparable productor de José Herrera", archivo: "../../Assets/Videos/charros/imparable_productor_jose_herrera.mp4" },
      { titulo: "Elevado de Walsh; Wielansky timbra en pisa y corre", archivo: "../../Assets/Videos/charros/elevado_walsh_wielansky.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/charros/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/charros/video6.mp4" }
    ]
  },
  
  toros: {
    nombre: "Toros de Tijuana",
    logo: "../../Assets/Images/logos-equipos/toros-logo.png",
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
      { titulo: "En el guante de Junior Lake el out 27, Toros campeón", archivo: "../../Assets/Videos/toros/En_el_guante_de_Junior_Lake_el_out_27_Toros_campeón.mp4" },
      { titulo: "Ramírez saca el ponche; a tres outs de la victoria", archivo: "../../Assets/Videos/toros/Ramírez_ponche_victoria.mp4" },
      { titulo: "Pérez se lanza y tira a primera para el tercer out", archivo: "../../Assets/Videos/toros/Pérez_tercer_out.mp4" },
      { titulo: "Seth Beer hace swing y cae el tercer out", archivo: "../../Assets/Videos/toros/Seth_Beer_tercer_out.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/toros/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/toros/video6.mp4" }
    ]
  },
  tecolotes: {
    nombre: "Tecolotes de los Dos Laredos",
    logo: "../../Assets/Images/logos-equipos/tecolotes-logo.png",
    fallback: "LAR",
    descripcion: "Único equipo profesional binacional del béisbol mundial, fundado en 1940, jugando entre Nuevo Laredo (Tamaulipas) y Laredo (Texas).",
    momento: {
      titulo: "Campones de la copa gobernador 2025",
      imagen: "../../Assets/Images/Tecolotes-ganan-la-Copa-Gobernador-tras-un-gran-duelo-de-pitcheo.jpg",
      pie: "Tecolotes ganan la Copa Gobernador tras un gran duelo de pitcheo",
      fecha: "-20 de Abril del 2025"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Bases totales",
        filas: [
          { jugador: "1. K. Gatewood", valor: "142" },
          { jugador: "2. B. Flete", valor: "128" },
          { jugador: "3. Y. Drake", valor: "115" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "WHIP",
        filas: [
          { jugador: "1. R. Barrón", valor: "1.10" },
          { jugador: "2. N. Antone", valor: "1.18" },
          { jugador: "3. G. Broussard", valor: "1.25" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo en el infield",
        filas: [
          { jugador: "1. A. Harris", valor: ".988" },
          { jugador: "2. L. Jiménez", valor: ".982" },
          { jugador: "3. R. Valenzuela", valor: ".976" }
        ]
      }
    ],
    videos: [
      { titulo: "Yonny Hernández con elevado para el out final", archivo: "../../Assets/Videos/tecolotes/yonny_hernandez_elevado_out_final.mp4" },
      { titulo: "Jonrón de tres carreras de Zoilo Almonte", archivo: "../../Assets/Videos/tecolotes/jonron_zoilo_almonte.mp4" },
      { titulo: "Miles Simington pega jonrón solitario", archivo: "../../Assets/Videos/tecolotes/miles_simington_jonron_solitario.mp4" },
      { titulo: "Drew Parrish consigue el ponche con casa llena", archivo: "../../Assets/Videos/tecolotes/drew_parrish_ponche_casa_llena.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/tecolotes/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/tecolotes/video6.mp4" }
    ]
  },
  acereros: {
    nombre: "Acereros de Monclova",
    logo: "../../Assets/Images/logos-equipos/acereros-logo.png",
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
      { titulo: "Cuadrangular solitario de Rodolfo Amador", archivo: "../../Assets/Videos/asereros/Cuadrangular_solitario_de_Rodolfo_Amador.mp4" },
      { titulo: "Márquez controla rodado y tira a la inicial para el tercer out", archivo: "../../Assets/Videos/asereros/Márquez_tercer_out.mp4" },
      { titulo: "Andretty Cordero anota la segunda carrera para Acereros", archivo: "../../Assets/Videos/asereros/Andretty_Cordero_segunda_carrera.mp4" },
      { titulo: "Video 4", archivo: "../../Assets/Videos/asereros/video4.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/asereros/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/asereros/video6.mp4" }
    ]
  },
  algodoneros: {
    nombre: "Algodoneros Unión Laguna",
    logo: "../../Assets/Images/logos-equipos/algodoneros-logo.png",
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
      { titulo: "Algodoneros derrota en casa a los Rieleros", archivo: "../../Assets/Videos/algodoneros/Algodoneros_derrota_en_casa_a_Rieleros.mp4" },
      { titulo: "Elevado de Nick Torres; Adrián Tovalín timbra", archivo: "../../Assets/Videos/algodoneros/Elevado_Nick_Torres_Adrián_Tovalín_timbra.mp4" },
      { titulo: "Ryan Hendrix retira el tercer out por la vía del ponche", archivo: "../../Assets/Videos/algodoneros/Ryan_Hendrix_tercer_out.mp4" },
      { titulo: "Mason Martin produce la quinta carrera", archivo: "../../Assets/Videos/algodoneros/Mason_Martin_quinta_carrera.mp4" },
      { titulo: "Julián Escobedo se desliza y completa el out", archivo: "../../Assets/Videos/algodoneros/Julián_Escobedo_desliz.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/algodoneros/video6.mp4" }
    ]
  },rieleros: {
    nombre: "Rieleros de Aguascalientes",
    logo: "../../Assets/Images/logos-equipos/rieleros-logo.png",
    fallback: "AGS",
    descripcion: "La Máquina Pitahaya de Aguascalientes, fundada en 1975, es un equipo caracterizado por su combatividad y juego explosivo.",
    momento: {
      titulo: "La histórica coronación de Rieleros en 2012",
      imagen: "../../Assets/Images/rieleros-campeones.jpeg",
      pie: "Rieleros campones de la zona norte",
      fecha: "-27 de Agosto del 2012"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Slugging (SLG)",
        filas: [
          { jugador: "1. A. Murillo", valor: ".580" },
          { jugador: "2. R. Reyes", valor: ".540" },
          { jugador: "3. M. Cornejo", valor: ".495" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Holds",
        filas: [
          { jugador: "1. I. Arballo", valor: "14" },
          { jugador: "2. R. Corcoran", valor: "10" },
          { jugador: "3. F. Villegas", valor: "8" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Porcentaje de fildeo",
        filas: [
          { jugador: "1. E. Cordero", valor: ".991" },
          { jugador: "2. O. Piña", valor: ".988" },
          { jugador: "3. L. Medina", valor: ".980" }
        ]
      }
    ],
    videos: [
      { titulo: "Jonrón de dos carreras de Matt McDermott", archivo: "../../Assets/Videos/rieleros/jonron_dos_carreras_matt_mcdermott.mp4" },
      { titulo: "Carlos Mendivil remolca par de carreras ", archivo: "../../Assets/Videos/rieleros/carlos_mendivil_remolca_par_carreras.mp4" },
      { titulo: "Matt McDermott anota la segunda carrera", archivo: "../../Assets/Videos/rieleros/matt_mcdermott_segunda_carrera.mp4" },
      { titulo: "Gabriel Noriega anota tras sencillo de Rodríguez`", archivo: "../../Assets/Videos/rieleros/gabriel_noriega_sencillo_rodriguez.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/rieleros/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/rieleros/video6.mp4" }
    ]
  },
  dorados: {
    nombre: "Dorados de Chihuahua",
    logo: "../../Assets/Images/logos-equipos/dorados-logo.png",
    fallback: "CHI",
    descripcion: "La franquicia más antigua de la Zona Norte, fundada en 1936 en Chihuahua, Chihuahua, cuna de grandes peloteros.",
    momento: {
      titulo: "Dorados de Chihuahua regresa a la LMB",
      imagen: "../../Assets/Images/Dorados-LMB.jpg",
      pie: "Despues de 14 años, el Estadio Monumental de Chihuahua vuelve a vibrar con el béisbol veraniego",
      fecha: "-21 de Diciembre del 2023"
    },
    estadisticas: [
      {
        categoria: "BATEO",
        subtitulo: "Bases robadas",
        filas: [
          { jugador: "1. C. Valenzuela", valor: "16" },
          { jugador: "2. F. Peguero", valor: "12" },
          { jugador: "3. J. Silva", valor: "10" }
        ]
      },
      {
        categoria: "PITCHEO",
        subtitulo: "Entradas lanzadas",
        filas: [
          { jugador: "1. A. Delgado", valor: "95.2" },
          { jugador: "2. G. Reyes", valor: "88.0" },
          { jugador: "3. M. Preciado", valor: "76.1" }
        ]
      },
      {
        categoria: "FILDEO",
        subtitulo: "Putouts (Outs realizados)",
        filas: [
          { jugador: "1. H. Urrutia", valor: "380" },
          { jugador: "2. J. Martínez", valor: "210" },
          { jugador: "3. R. Orozco", valor: "175" }
        ]
      }
    ],
    videos: [
      { titulo: "Sencillo de Joel Flores y entra la sexta carrera", archivo: "../../Assets/Videos/dorados/sencillo_joel_flores.mp4" },
      { titulo: "Joel Flores produce la cuarta carrera", archivo: "../../Assets/Videos/dorados/joel_flores_cuarta_carrera.mp4" },
      { titulo: "Wild pitch y anota Coco Montes ", archivo: "../../Assets/Videos/dorados/wild_pitch_coco_montes.mp4" },
      { titulo: "Coco Montes llega al plato con rodado de out", archivo: "../../Assets/Videos/dorados/coco_montes_rodado_out.mp4" },
      { titulo: "Video 5", archivo: "../../Assets/Videos/dorados/video5.mp4" },
      { titulo: "Video 6", archivo: "../../Assets/Videos/dorados/video6.mp4" }
    ]
  },
  saraperos: {
    nombre: "Saraperos de Saltillo",
    logo: "../../Assets/Images/logos-equipos/saraperos-logo.png",
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
      { titulo: "Mallex Smith detona su primer cuadrangular en la LMB", archivo: "../../Assets/Videos/saraperos/Mallex_Smith_primer_cuadrangular_LMB.mp4" },
      { titulo: "El venezolano José Peraza atizó par de cuadrangulares", archivo: "../../Assets/Videos/saraperos/Jose_Peraza_dos_cuadras.mp4" },
      { titulo: "Cuarto cuadrangular de Bobby Bradley con Saraperos", archivo: "../../Assets/Videos/saraperos/Cuarto_cuadrangular_de_Bobby_Bradley_con_Saraperos.mp4" },
      { titulo: "Atrapadon de Alex Mejía", archivo: "../../Assets/Videos/saraperos/Alex_Mejía_atrapadon.mp4" },
      { titulo: "Grand Slam de Missael Rivera con Saraperos de Saltillo", archivo: "../../Assets/Videos/saraperos/Grand_Slam_Missael_Rivera.mp4" },
      { titulo: "Out en home para terminar la entrada", archivo: "../../Assets/Videos/saraperos/Out_en_home_para_terminar_la_entrada.mp4" }
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