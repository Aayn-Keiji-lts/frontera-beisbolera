const questionBank = [
  {
    q: "¿En qué año se fundó la franquicia de Acereros de Monclova?",
    opts: ["1970", "1974", "1975", "1940"],
    ans: 1
  },
  {
    q: "¿En qué ciudad y estado tiene su sede Acereros de Monclova?",
    opts: ["Torreón, Coahuila", "Saltillo, Coahuila", "Monclova, Coahuila", "Durango, Durango"],
    ans: 2
  },
  {
    q: "¿A qué zona de la Liga Mexicana de Béisbol pertenece Acereros de Monclova?",
    opts: ["Zona Norte", "Zona Sur", "Zona Centro", "Zona Pacífico"],
    ans: 0
  },
  {
    q: "¿Cuál de las siguientes franquicias coahuilenses se fundó en la década de los 70?",
    opts: ["Algodoneros de Unión Laguna", "Acereros de Monclova", "Tecolotes de los Dos Laredos", "Dorados de Chihuahua"],
    ans: 1
  },
  {
    q: "Según el registro de la LMB, ¿qué equipo de Monclova se fundó exactamente un año antes que Rieleros de Aguascalientes (1975)?",
    opts: ["Saraperos de Saltillo", "Charros de Jalisco", "Acereros de Monclova", "Toros de Tijuana"],
    ans: 2
  },
  {
    q: "¿En qué año fue fundado el equipo Algodoneros de Unión Laguna?",
    opts: ["1940", "1936", "1949", "1970"],
    ans: 0
  },
  {
    q: "¿En qué ciudad de Coahuila juegan los Algodoneros de Unión Laguna?",
    opts: ["Monclova", "Saltillo", "Torreón", "Piedras Negras"],
    ans: 2
  },
  {
    q: "¿Qué dos equipos de la Zona Norte compartieron exactamente el mismo año de fundación (1940)?",
    opts: [
      "Algodoneros de Unión Laguna y Tecolotes de los Dos Laredos",
      "Sultanes de Monterrey y Charros de Jalisco",
      "Dorados de Chihuahua y Saraperos de Saltillo",
      "Acereros de Monclova y Rieleros de Aguascalientes"
    ],
    ans: 0
  },
  {
    q: "¿A qué circuito pertenece la franquicia de Algodoneros de Unión Laguna?",
    opts: ["Zona Sur de la LMB", "Zona Norte de la LMB", "Liga Invernal Mexicana", "Liga del Pacífico"],
    ans: 1
  },
  {
    q: "¿Qué equipo de Coahuila en la Zona Norte fue fundado primero?",
    opts: ["Saraperos de Saltillo (1970)", "Acereros de Monclova (1974)", "Algodoneros de Unión Laguna (1940)", "Toros de Tijuana (2004)"],
    ans: 2
  },
  {
    q: "¿En qué año se fundó la franquicia Caliente de Durango?",
    opts: ["2004", "2024", "1975", "1949"],
    ans: 1
  },
  {
    q: "¿En qué ciudad y estado juega Caliente de Durango?",
    opts: ["Durango, Durango", "Zapopan, Jalisco", "Chihuahua, Chihuahua", "Tijuana, Baja California"],
    ans: 0
  },
  {
    q: "¿Cuál es el equipo de más reciente fundación (2024) entre los 10 de la Zona Norte?",
    opts: ["Toros de Tijuana", "Caliente de Durango", "Rieleros de Aguascalientes", "Dorados de Chihuahua"],
    ans: 1
  },
  {
    q: "¿En qué década fue fundada la franquicia Caliente de Durango en la LMB?",
    opts: ["Década de 2000", "Década de 2010", "Década de 2020", "Década de 1990"],
    ans: 2
  },
  {
    q: "¿Qué equipo representa al estado de Durango en la Zona Norte de la LMB según la tabla?",
    opts: ["Generales de Durango", "Alacranes de Durango", "Caliente de Durango", "Mineros de Durango"],
    ans: 2
  },
  {
    q: "¿En qué año se fundó el equipo Charros de Jalisco dentro de la lista de la Zona Norte?",
    opts: ["1949", "1939", "1970", "1975"],
    ans: 0
  },
  {
    q: "¿En qué municipio y estado de México tiene su sede el equipo Charros de Jalisco?",
    opts: ["Guadalajara, Jalisco", "Zapopan, Jalisco", "Tlaquepaque, Jalisco", "Tlajomulco, Jalisco"],
    ans: 1
  },
  {
    q: "¿Cuál de las siguientes franquicias se fundó exactamente 10 años después que Sultanes de Monterrey (1939)?",
    opts: ["Algodoneros de Unión Laguna", "Tecolotes de los Dos Laredos", "Charros de Jalisco", "Dorados de Chihuahua"],
    ans: 2
  },
  {
    q: "¿En qué división de la Liga Mexicana de Béisbol se ubica Charros de Jalisco?",
    opts: ["Zona Sur", "Zona Norte", "Zona Centro", "Zona Occidente"],
    ans: 1
  },
  {
    q: "¿Qué equipo de la Zona Norte representa al estado de Jalisco según la tabla de la LMB?",
    opts: ["Mariachis de Guadalajara", "Charros de Jalisco", "Tequileros de Jalisco", "Rieleros de Jalisco"],
    ans: 1
  },
  {
    q: "¿En qué año fue fundado el equipo Dorados de Chihuahua?",
    opts: ["1936", "1939", "1940", "1974"],
    ans: 0
  },
  {
    q: "¿En qué ciudad tiene su sede el equipo Dorados de Chihuahua?",
    opts: ["Ciudad Juárez, Chihuahua", "Chihuahua, Chihuahua", "Delicias, Chihuahua", "Parral, Chihuahua"],
    ans: 1
  },
  {
    q: "Entre los equipos de la Zona Norte listados, ¿cuál es el más antiguo por año de fundación?",
    opts: ["Sultanes de Monterrey (1939)", "Dorados de Chihuahua (1936)", "Algodoneros de Unión Laguna (1940)", "Charros de Jalisco (1949)"],
    ans: 1
  },
  {
    q: "¿A qué zona de la LMB pertenece la escuadra de Dorados de Chihuahua?",
    opts: ["Zona Norte", "Zona Sur", "Zona Fronteriza", "Zona Centro"],
    ans: 0
  },
  {
    q: "¿En qué década de los años 1900 nació la franquicia de Dorados de Chihuahua?",
    opts: ["Década de 1920", "Década de 1930", "Década de 1940", "Década de 1970"],
    ans: 1
  },
  {
    q: "¿En qué año se fundó el equipo Rieleros de Aguascalientes?",
    opts: ["1970", "1974", "1975", "2004"],
    ans: 2
  },
  {
    q: "¿En qué ciudad y estado juega Rieleros de Aguascalientes?",
    opts: ["Aguascalientes, Aguascalientes", "Saltillo, Coahuila", "Monclova, Coahuila", "Zapopan, Jalisco"],
    ans: 0
  },
  {
    q: "¿Qué equipo coahuilense se fundó exactamente 5 años antes que Rieleros de Aguascalientes (1975)?",
    opts: ["Acereros de Monclova", "Saraperos de Saltillo", "Algodoneros de Unión Laguna", "Tecolotes de los Dos Laredos"],
    ans: 1
  },
  {
    q: "¿En qué zona de la Liga Mexicana de Béisbol se sitúa Rieleros de Aguascalientes?",
    opts: ["Zona Sur", "Zona Norte", "Zona Bajío", "Zona Centro"],
    ans: 1
  },
  {
    q: "¿En qué década fue fundada la franquicia de Rieleros de Aguascalientes?",
    opts: ["Década de 1960", "Década de 1970", "Década de 1940", "Década de 1980"],
    ans: 1
  },
  {
    q: "¿En qué año fue fundado el equipo Saraperos de Saltillo?",
    opts: ["1970", "1974", "1975", "1939"],
    ans: 0
  },
  {
    q: "¿En qué ciudad de Coahuila juega el equipo Saraperos?",
    opts: ["Monclova", "Torreón", "Saltillo", "Piedras Negras"],
    ans: 2
  },
  {
    q: "¿Cuál de estos tres equipos del estado de Coahuila es el segundo más antiguo según la tabla (1970)?",
    opts: ["Acereros de Monclova", "Algodoneros de Unión Laguna", "Saraperos de Saltillo", "Tecolotes de los Dos Laredos"],
    ans: 2
  },
  {
    q: "¿En qué división de la LMB compite Saraperos de Saltillo?",
    opts: ["Zona Norte", "Zona Sur", "Zona Noreste", "Zona del Golfo"],
    ans: 0
  },
  {
    q: "¿Cuántos años separan la fundación de Saraperos de Saltillo (1970) de la de Acereros de Monclova (1974)?",
    opts: ["2 años", "4 años", "5 años", "10 años"],
    ans: 1
  },
  {
    q: "¿En qué año se fundó el club Sultanes de Monterrey?",
    opts: ["1936", "1939", "1940", "1949"],
    ans: 1
  },
  {
    q: "¿En qué ciudad y estado tiene su sede el equipo Sultanes de Monterrey?",
    opts: ["Monterrey, Nuevo León", "Saltillo, Coahuila", "Nuevo Laredo, Tamaulipas", "Durango, Durango"],
    ans: 0
  },
  {
    q: "¿Cuál fue el segundo equipo más antiguo en fundarse dentro de la lista de la Zona Norte?",
    opts: ["Dorados de Chihuahua (1936)", "Sultanes de Monterrey (1939)", "Algodoneros de Unión Laguna (1940)", "Tecolotes de los Dos Laredos (1940)"],
    ans: 1
  },
  {
    q: "¿A qué circuito pertenece la novena de Sultanes de Monterrey?",
    opts: ["Zona Norte de la LMB", "Zona Sur de la LMB", "Liga de Béisbol del Bajío", "Zona Centro"],
    ans: 0
  },
  {
    q: "¿Qué equipo de Nuevo León aparece en la tabla de la Zona Norte 2024?",
    opts: ["Sultanes de Monterrey", "Broncos de Reynosa", "Tecolotes de los Dos Laredos", "Dorados de Chihuahua"],
    ans: 0
  },
  {
    q: "¿En qué año se fundó la franquicia Tecolotes de los Dos Laredos?",
    opts: ["1939", "1940", "1949", "1970"],
    ans: 1
  },
  {
    q: "¿Qué particularidad geográfica tienen las sedes de Tecolotes de los Dos Laredos?",
    opts: [
      "Tienen sedes en Monterrey, Nuevo León y Saltillo, Coahuila",
      "Tienen sedes binacionales en Nuevo Laredo, Tamaulipas y Laredo, Texas",
      "Tienen sedes en Torreón, Coahuila y Durango, Durango",
      "Tienen sedes en Tijuana, Baja California y Chihuahua, Chihuahua"
    ],
    ans: 1
  },
  {
    q: "¿Qué equipo comparte el mismo año de fundación (1940) con Tecolotes de los Dos Laredos?",
    opts: ["Algodoneros de Unión Laguna", "Sultanes de Monterrey", "Charros de Jalisco", "Dorados de Chihuahua"],
    ans: 0
  },
  {
    q: "¿A qué zona de la Liga Mexicana de Béisbol pertenecen los Tecolotes de los Dos Laredos?",
    opts: ["Zona Sur", "Zona Norte", "Zona Transfronteriza", "Zona Texana"],
    ans: 1
  },
  {
    q: "¿Qué franquicia de la Zona Norte representa a una ciudad mexicana en Tamaulipas y a una estadounidense en Texas?",
    opts: ["Toros de Tijuana", "Tecolotes de los Dos Laredos", "Acereros de Monclova", "Dorados de Chihuahua"],
    ans: 1
  },
  {
    q: "¿En qué año fue fundada la franquicia Toros de Tijuana?",
    opts: ["1975", "2004", "2024", "1949"],
    ans: 1
  },
  {
    q: "¿En qué ciudad y estado juega Toros de Tijuana?",
    opts: ["Tijuana, Baja California", "Mexicali, Baja California", "Ensenada, Baja California", "Laredo, Texas"],
    ans: 0
  },
  {
    q: "¿Cuál fue el segundo equipo más reciente en fundarse (año 2004) de la lista de la Zona Norte?",
    opts: ["Caliente de Durango (2024)", "Toros de Tijuana (2004)", "Rieleros de Aguascalientes (1975)", "Acereros de Monclova (1974)"],
    ans: 1
  },
  {
    q: "¿En qué zona de la LMB compite la escuadra de Toros de Tijuana?",
    opts: ["Zona Norte", "Zona Sur", "Zona Noroeste", "Zona Peninsular"],
    ans: 0
  },
  {
    q: "¿Qué equipo representa al estado de Baja California en la lista de la Zona Norte de la LMB?",
    opts: ["Tecolotes de los Dos Laredos", "Toros de Tijuana", "Dorados de Chihuahua", "Caliente de Durango"],
    ans: 1
  }
];

// 2. Colección de estampas regulares con la ruta relativa exacta a dos niveles arriba
const regularStamps = [
  { id: 1, name: "Kennys Vargas #19", img: "../../Assets/Images/estampas/KennysVargas.png" },
  { id: 2, name: "Chris Carter #23", img: "../../Assets/Images/estampas/ChrisCarter.png" },
  { id: 3, name: "Fernando Villegas #27", img: "../../Assets/Images/estampas/FernandoVillegas.png" },
  { id: 4, name: "Junior Lake #2", img: "../../Assets/Images/estampas/JuniorLake.png" },
  { id: 5, name: "Manny García #25", img: "../../Assets/Images/estampas/MannyGarcia.png" },
  { id: 6, name: "Ramiro Peña #19", img: "../../Assets/Images/estampas/RamiroPena.png" },
  { id: 7, name: "Brayan Lozano #78", img: "../../Assets/Images/estampas/BrayanLozano.png" },
  { id: 8, name: "Wilfredo Tovar #7", img: "../../Assets/Images/estampas/WilfredoTovar.png" },
  { id: 9, name: "Derek West #7", img: "../../Assets/Images/estampas/DerekWest.png" },
  { id: 10, name: "Jonathan Villar #6", img: "../../Assets/Images/estampas/JonathanVillar.png" }
];

// 3. Estampa Suprema desbloqueable al completar la colección base
const masterStamp = { 
  id: 100, 
  name: "Copa Zaachila - Leyenda LMB", 
  img: "../../Assets/Images/estampas/estampa_suprema.png" 
};

let selectedQuestions = [];
let userAnswers = [-1, -1, -1, -1, -1];
let currentIndex = 0;

function initTrivia() {
  const shuffled = [...questionBank].sort(() => 0.5 - Math.random());
  selectedQuestions = shuffled.slice(0, 5);
  userAnswers = [-1, -1, -1, -1, -1];
  currentIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const qData = selectedQuestions[currentIndex];
  
  document.getElementById('questionProgress').innerText = `Pregunta ${currentIndex + 1} de 5`;
  document.getElementById('questionTitle').innerText = qData.q;

  const optionsGrid = document.getElementById('optionsGrid');
  optionsGrid.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D'];

  qData.opts.forEach((optText, idx) => {
    const isChecked = userAnswers[currentIndex] === idx ? 'checked' : '';
    
    const optLabel = document.createElement('label');
    optLabel.className = 'option-card';
    optLabel.innerHTML = `
      <input type="radio" name="currentAnswer" value="${idx}" ${isChecked}>
      <span class="option-content">
        <span class="option-indicator">${letters[idx]}</span>
        <span class="option-text">${optText}</span>
      </span>
    `;

    optLabel.querySelector('input').addEventListener('change', () => {
      userAnswers[currentIndex] = idx;
    });

    optionsGrid.appendChild(optLabel);
  });

  document.getElementById('btnPrev').style.display = currentIndex === 0 ? 'none' : 'inline-flex';
  document.getElementById('btnNext').style.display = currentIndex === 4 ? 'none' : 'inline-flex';
  document.getElementById('btnSubmit').style.display = currentIndex === 4 ? 'inline-flex' : 'none';
}

document.getElementById('btnNext').addEventListener('click', () => {
  if (currentIndex < 4) {
    currentIndex++;
    renderQuestion();
  }
});

document.getElementById('btnPrev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

document.getElementById('triviaForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const unanswered = userAnswers.indexOf(-1);
  if (unanswered !== -1) {
    alert(`Por favor responde la Pregunta ${unanswered + 1} antes de enviar.`);
    currentIndex = unanswered;
    renderQuestion();
    return;
  }

  let score = 0;
  selectedQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === q.ans) score++;
  });

  const idUsuario = localStorage.getItem('id_usuario') || 1;
  let earnedStamp = null;

  // 1. Intento de persistencia mediante API Backend (MySQL)
  try {
    const response = await fetch('/api/estampas/desbloquear-estampa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_usuario: idUsuario })
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success && data.estampa) {
        earnedStamp = data.estampa;
      }
    }
  } catch (err) {
    console.warn('Servidor no disponible, ejecutando lógica local:', err);
  }

  // 2. Respaldo local si el backend no está activo
  if (!earnedStamp) {
    let savedStamps = JSON.parse(localStorage.getItem('myStamps') || '[]');
    const obtainedIds = new Set(savedStamps.map(s => s.id));
    const hasAllRegularStamps = regularStamps.every(s => obtainedIds.has(s.id));

    if (hasAllRegularStamps && !obtainedIds.has(masterStamp.id)) {
      earnedStamp = masterStamp;
    } else {
      const missingStamps = regularStamps.filter(s => !obtainedIds.has(s.id));
      if (missingStamps.length > 0) {
        earnedStamp = missingStamps[Math.floor(Math.random() * missingStamps.length)];
      } else {
        earnedStamp = regularStamps[Math.floor(Math.random() * regularStamps.length)];
      }
    }
    savedStamps.push(earnedStamp);
    localStorage.setItem('myStamps', JSON.stringify(savedStamps));
  }

  // 3. Renderizado de la estampa en el modal de recompensa
  document.getElementById('rewardScoreText').innerText = `Obtuviste ${score} de 5 aciertos`;
  document.getElementById('stampName').innerText = earnedStamp.nombre || earnedStamp.name;

  const stampImg = document.getElementById('stampImg');
  const stampFallback = document.getElementById('stampFallback');

  // Mostramos el modal primero para garantizar dimensiones en el DOM
  document.getElementById('rewardModal').classList.add('active');

  if (stampImg) {
    stampImg.style.display = 'block';
    if (stampFallback) stampFallback.style.display = 'none';

    stampImg.onerror = function() {
      this.style.display = 'none';
      if (stampFallback) stampFallback.style.display = 'flex';
    };

    stampImg.src = earnedStamp.imagen_url || earnedStamp.img;
  }
});

initTrivia();