document.addEventListener("DOMContentLoaded", () => {
  // 1. CARGA DE AUDIOS (Ajusta las rutas a tu carpeta multimedia)
  const audioStrike = new Audio('../../Assets/boo.mp3');
  const audioHit = new Audio('../../Assets/hit.mp3');
  const audioAplausos = new Audio('../../Assets/aplausos.mp3');
  
  // Variables del juego
  let puntos = 0;
  let strikes = 0;
  let juegoActivo = false;
  let animacionLinea = null;
  let posicionLinea = 0; 
  let direccion = 1; 
  const velocidad = 2; 

  // Elementos del DOM
  const overlay = document.getElementById('game-overlay');
  const btnIniciar = document.getElementById('btn-iniciar-juego');
  const titleOverlay = document.getElementById('overlay-title');
  const msgOverlay = document.getElementById('overlay-message');
  const linea = document.getElementById('linea-indicadora');
  const msgAccion = document.getElementById('action-message');
  const textStrikes = document.getElementById('strikes-counter');
  const textPuntos = document.getElementById('points-counter');
  const contAnimacion = document.getElementById('animacion-bateo');
  const btnBatear = document.querySelectorAll('.btn-accion');

  // Iniciar / Reiniciar Juego
  btnIniciar.addEventListener('click', () => {
    strikes = 0;
    puntos = 0;
    actualizarMarcador();
    overlay.style.display = 'none';
    iniciarAnimacion();
  });

  // Batear
  btnBatear.forEach(btn => {
    btn.addEventListener('click', () => {
      if (!juegoActivo) return; 
      
      juegoActivo = false; 
      cancelAnimationFrame(animacionLinea);
      evaluarTiro(posicionLinea);
    });
  });

  // Motor de la barra
  function animarLinea() {
    if (!juegoActivo) return;

    posicionLinea += direccion * velocidad;

    if (posicionLinea >= 100) {
      posicionLinea = 100;
      direccion = -1;
    } else if (posicionLinea <= 0) {
      posicionLinea = 0;
      direccion = 1;
    }

    linea.style.top = `${posicionLinea}%`;
    animacionLinea = requestAnimationFrame(animarLinea);
  }

  function iniciarAnimacion() {
    juegoActivo = true;
    posicionLinea = 0;
    direccion = 1;
    msgAccion.classList.remove('show-message'); 
    
    // Devolvemos el bate y la pelota a su posición inicial
    contAnimacion.className = 'game-assets'; 
    
    animacionLinea = requestAnimationFrame(animarLinea);
  }

  // Evaluar Tiro y Animaciones
  function evaluarTiro(pos) {
    let resultado = "";
    let colorMsj = "";

    // Resetear las clases de animación forzando una recarga visual
    contAnimacion.className = 'game-assets';
    void contAnimacion.offsetWidth; 

    // --- HOME RUN (45% a 55%) ---
    if (pos >= 46 && pos <= 54) {
      resultado = "¡HOME RUN!";
      colorMsj = "#00ff00";
      puntos += 100;
      
      // Reproducir sonido de hit y aplausos casi juntos
      audioHit.play();
      setTimeout(() => audioAplausos.play(), 300);

      // Fase 1: El bate choca con la pelota
      contAnimacion.classList.add('anim-choque');
      
      // Fase 2: Un instante después, la pelota sale volando
      setTimeout(() => {
        contAnimacion.classList.replace('anim-choque', 'anim-homerun');
      }, 150);
      
    // --- BUEN SWING (30-45% y 55-70%) ---
    } else if ((pos >= 31 && pos < 46) || (pos > 54 && pos <= 69)) {
      resultado = "¡BUEN HIT!";
      colorMsj = "#ffff00";
      puntos += 20;
      
      audioHit.play(); // Solo sonido de golpe

      contAnimacion.classList.add('anim-choque');
      setTimeout(() => {
        contAnimacion.classList.replace('anim-choque', 'anim-hit');
      }, 150);

    // --- STRIKE (Resto) ---
    } else {
      resultado = "¡STRIKE!";
      colorMsj = "#ff0000";
      strikes++;
      
      audioStrike.play(); // Sonido de abucheo
      contAnimacion.classList.add('anim-strike'); // Pelota pasa de largo
    }

    mostrarMensaje(resultado, colorMsj);
    actualizarMarcador();

    // Comprobar fin del juego o siguiente turno
    if (strikes >= 3) {
      setTimeout(() => {
        terminarJuego("¡PONCHADO!", "Has acumulado 3 strikes. ¡Inténtalo de nuevo!");
      }, 1500);
    } else {
      setTimeout(() => {
        iniciarAnimacion();
      }, 1500);
    }
  }

  function mostrarMensaje(texto, color) {
    msgAccion.innerText = texto;
    msgAccion.style.color = color;
    msgAccion.classList.add('show-message');
  }

  function actualizarMarcador() {
    textStrikes.innerText = `Strikes: ${strikes} / 3`;
    textPuntos.innerText = `Puntos: ${puntos}`;
  }

  function terminarJuego(titulo, mensaje) {
    titleOverlay.innerText = titulo;
    titleOverlay.style.color = "#ff0000";
    msgOverlay.innerText = mensaje;
    btnIniciar.innerText = "Jugar de nuevo";
    overlay.style.display = 'flex';
    puntos -= 50; 
  }
});