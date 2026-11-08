// 1. Banco de 40 preguntas sobre la Liga Mexicana de Béisbol (LMB)
const questionBank = [
  { q: "¿Cuál equipo ostenta más campeonatos en la historia de la LMB?", opts: ["Diablos Rojos del México", "Tigres de Quintana Roo", "Sultanes de Monterrey", "Leones de Yucatán"], ans: 0 },
  { q: "¿En qué año se fundó la Liga Mexicana de Béisbol?", opts: ["1925", "1938", "1946", "1910"], ans: 0 },
  { q: "¿Quién fundó la LMB junto con Alejandro Aguilar Reyes 'Nano'?", opts: ["Ernesto Carmona", "Jorge Pasquel", "Pleyo González", "Alejandro Aguilar"], ans: 0 },
  { q: "¿Cuál es la sede de los Sultanes de Monterrey?", opts: ["Estadio Mobil Super", "Estadio Alfredo Harp Helú", "Estadio Monclova", "Estadio Revolución"], ans: 0 },
  { q: "¿Qué trofeo se le entrega al campeón de la LMB?", opts: ["Copa Zaachila", "Copa Azteca", "Trofeo LMB", "Copa Gobernador"], ans: 0 },
  { q: "¿Cómo se llama el estadio de los Diablos Rojos del México inaugurado en 2019?", opts: ["Alfredo Harp Helú", "Foro Sol", "Parque Delta", "Parque Seguro Social"], ans: 0 },
  { q: "¿Qué equipo representa a la Comarca Lagunera?", opts: ["Algodoneros Unión Laguna", "Acereros de Monclova", "Saraperos de Saltillo", "Rieleros de Aguascalientes"], ans: 0 },
  { q: "¿Qué apodo recibe el equipo de Puebla?", opts: ["Pericos", "Loros", "Águilas", "Tucanes"], ans: 0 },
  { q: "¿En qué ciudad juegan los Saraperos?", opts: ["Saltillo", "Monclova", "Torreón", "Chihuahua"], ans: 0 },
  { q: "¿Qué multimillonario e impulsor trajo grandes estrellas ligamayoristas a la LMB en los años 40?", opts: ["Jorge Pasquel", "Alejandro Harp", "Carlos Slim", "Alfredo Harp"], ans: 0 },
  { q: "¿Cuál es el apodo tradicional de los Tigres?", opts: ["Los Felinos", "Los Escarlatas", "Los Fantasmas Grises", "Los Árboles"], ans: 0 },
  { q: "¿Cómo se les conoce históricamente a los Sultanes de Monterrey?", opts: ["Los Fantasmas Grises", "Los Melenudos", "Los Belicosos", "Los Espaciales"], ans: 0 },
  { q: "¿En qué estado juegan los Olmecas?", opts: ["Tabasco", "Campeche", "Yucatán", "Veracruz"], ans: 0 },
  { q: "¿Qué equipo juega en Mérida, Yucatán?", opts: ["Leones", "Tigres", "Piratas", "Olmecas"], ans: 0 },
  { q: "¿Qué equipo de la LMB tiene como sede la ciudad de Tijuana?", opts: ["Toros", "Calafias", "Bravos", "Dorados"], ans: 0 },
  { q: "¿Cómo se llama el legendario bateador con récord de más jonrones de por vida en la LMB?", opts: ["Nelson Barrera", "Hector Espino", "Alejandro Ortiz", "Andrés Mora"], ans: 0 },
  { q: "¿Quién es considerado el más grande bateador mexicano de todos los tiempos ('El Bambino Mexicano')?", opts: ["Héctor Espino", "Vinny Castilla", "Adrian González", "Beto Ávila"], ans: 0 },
  { q: "¿Qué lanzador mexicano brilló en MLB con los Dodgers y surgió de la LMB en Leones de Yucatán?", opts: ["Fernando Valenzuela", "Joakim Soria", "Julio Urías", "Yovani Gallardo"], ans: 0 },
  { q: "¿Cuál es el equipo de Aguascalientes?", opts: ["Rieleros", "Acereros", "Generales", "Tecolotes"], ans: 0 },
  { q: "¿Qué equipo divide su sede entre México y Texas (Dos Laredos)?", opts: ["Tecolotes de los Dos Laredos", "Toros de Tijuana", "Bravos de León", "Charros de Jalisco"], ans: 0 },
  { q: "¿Cómo se llama el estadio de los Leones de Yucatán?", opts: ["Kukulcán Alamo", "Resurgimiento", "Beto Ávila", "Hermanos Serdán"], ans: 0 },
  { q: "¿En qué estado juegan los Acereros?", opts: ["Coahuila", "Nuevo León", "Tamaulipas", "Sonora"], ans: 0 },
  { q: "¿Qué equipo viste tradicionalmente de verde y blanco en Puebla?", opts: ["Pericos", "Piratas", "El Águila", "Guerreros"], ans: 0 },
  { q: "¿Cómo se llama el histórico estadio de Veracruz?", opts: ["Beto Ávila", "Nelson Barrera", "Eduardo Vasconcelos", "Domingo Santana"], ans: 0 },
  { q: "¿Qué equipo juega en Oaxaca?", opts: ["Guerreros", "Olmecas", "Piratas", "Pericos"], ans: 0 },
  { q: "¿Cuál de estos equipos regresó a la LMB en Jalisco?", opts: ["Charros de Jalisco", "Mariachis de Jalisco", "Tequileros", "Tigres"], ans: 0 },
  { q: "¿Cómo se llama el equipo que representa a Campeche?", opts: ["Piratas", "Marineros", "Corsarios", "Delfines"], ans: 0 },
  { q: "¿Qué lanzador lanzó un juego perfecto en la LMB en 1953?", opts: ["Lauro Monteverde", "Ramiro Cuevas", "Vicente Romo", "Ramón Arano"], ans: 1 },
  { q: "¿Cuál de estas divisiones conforma el formato de competencia de la LMB?", opts: ["Zona Norte y Zona Sur", "Zona Este y Zona Oeste", "Liga Central y Pacífica", "Grupo A y Grupo B"], ans: 0 },
  { q: "¿Qué equipo tiene como mascota al 'Chacho'?", opts: ["Tigres de Quintana Roo", "Diablos Rojos", "Sultanes", "Toros"], ans: 0 },
  { q: "¿Qué legendario estadio en CDMX albergó béisbol por décadas antes de convertirse en centro comercial?", opts: ["Parque Delta", "Foro Sol", "Estadio Azul", "Parque España"], ans: 0 },
  { q: "¿Cómo se llama el manager con más victorias históricas en la LMB?", opts: ["Paquín Estrada", "Benjamin 'Cananea' Reyes", "Guillermo Garibay", "Raúl Cano"], ans: 1 },
  { q: "¿En qué mes inicia habitualmente la temporada regular de la LMB?", opts: ["Abril", "Enero", "Junio", "Octubre"], ans: 0 },
  { q: "¿Qué equipo tiene la mascota 'Sultanito'?", opts: ["Sultanes de Monterrey", "Rieleros", "Saraperos", "Acereros"], ans: 0 },
  { q: "¿Quién fue el primer mexicano en ganar un título de bateo en Grandes Ligas, procedente de LMB?", opts: ["Beto Ávila", "Vinny Castilla", "Jorge Orta", "Aureliano Rodríguez"], ans: 0 },
  { q: "¿Qué equipo juega en la ciudad de León, Guanajuato?", opts: ["Bravos de León", "Abejas", "Tigres", "Panteras"], ans: 0 },
  { q: "¿Cómo se llama la emblemática mascota de los Diablos Rojos?", opts: ["Rocco", "Lorenzo", "Rayo", "Toro"], ans: 0 },
  { q: "¿Qué histórico equipo veracruzano es conocido como 'El Glorioso'?", opts: ["El Águila de Veracruz", "Cafeteros de Córdoba", "Rojos del Águila", "Tiburones"], ans: 0 },
  { q: "¿Cuántos strikes necesita un pitcher para lograr un ponche?", opts: ["3", "4", "2", "5"], ans: 0 },
  { q: "¿Cuántos outs se necesitan para completar una entrada completa (ambos equipos)?", opts: ["6 outs", "3 outs", "4 outs", "8 outs"], ans: 0 }
];

// 2. Colección de estampas regulares con la ruta relativa exacta a dos niveles arriba
const regularStamps = [
  { id: 1, name: "Kennys Vargas #19", img: "../../Assets/Images/estampas/KennysVargas.png" },
  { id: 2, name: "Chris Carter #23", img: "../../Assets/Images/estampas/ChrisCarter.png" },
  { id: 3, name: "Fernando Villegas #27", img: "../../Assets/Images/estampas/FernandoVillegas.png" },
  { id: 4, name: "Junior Lake #2", img: "../../Assets/Images/estampas/JuniorLake.png" },
  { id: 5, name: "Manny García #25", img: "../../Assets/Images/estampas/MannyGarcia.png" },
  { id: 6, name: "Ramiro Peña #19", img: "../../Assets/Images/estampas/RamiroPena.png" },
  { id: 7, name: "Robinson Canó #22", img: "../../Assets/Images/estampas/RobinsonCano.png" },
  { id: 8, name: "Wilfredo Tovar #7", img: "../../Assets/Images/estampas/WilfredoTovar.png" },
  { id: 9, name: "Jonathan Villar #6", img: "../../Assets/Images/estampas/JonathanVillar.png" }
];

// 3. Estampa Suprema desbloqueable al completar la colección base
const masterStamp = { 
  id: 100, 
  name: "🏆 Copa Zaachila - Leyenda LMB", 
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