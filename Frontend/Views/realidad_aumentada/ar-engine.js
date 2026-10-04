import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
import { MindARThree } from 'https://cdn.jsdelivr.net/npm/mind-ar@1.2.2/dist/mindar-image-three.prod.js';

document.addEventListener("DOMContentLoaded", () => {
  const startAR = async () => {

    const clock = new THREE.Clock();

    let mixerGuante; 
    let accionGuante;

    // 1. Configuración principal de MindAR
    const mindarThree = new MindARThree({
  container: document.querySelector("#ar-container"),
  imageTargetSrc: "../../Assets/Escudos.mind", // Tu nuevo archivo compilado múltiple
  uiScanning: "no"
});

const {renderer, scene, camera} = mindarThree;
const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);
// Aseguramos que la cámara esté en la escena para pegarle cosas encima
scene.add(camera);

// Variables para el sistema de confeti

// 1. Crear las anclas según el orden en que subiste las imágenes al compilador
const anchorAcereros = mindarThree.addAnchor(0); // Escudo 1
const anchorDorados = mindarThree.addAnchor(1);  // Escudo 2
const anchorCaliente = mindarThree.addAnchor(2); // Escudo 3
const anchorCharros = mindarThree.addAnchor(3);  // Escudo 4
const anchorRieleros = mindarThree.addAnchor(4); // Escudo 5
const anchorSaraperos = mindarThree.addAnchor(5);  // Escudo 6
const anchorSultanes = mindarThree.addAnchor(6); // Escudo 7
const anchorTecolotes = mindarThree.addAnchor(7);  // Escudo 8
const anchorToros = mindarThree.addAnchor(8); // Escudo 9
const anchorAlgodoneros = mindarThree.addAnchor(9);  // Escudo 10

// 1. Variables para controlar la información actual
let infoActual = {
  titulo: "Apunta a un escudo",
  texto: "Escanea el escudo de un equipo para ver la información de su objeto."
};

// 2. Elementos del HTML
const modalInfo = document.getElementById('info-card');
const tituloInfo = document.getElementById('info-titulo');
const textoInfo = document.getElementById('info-texto');
const btnCerrarInfo = document.getElementById('btn-cerrar-info');
const botonInfo = document.getElementById('btnInfo');

// 3. Asignar la información cuando se encuentra un escudo
// (Repite esto para cada uno de tus 10 equipos cambiando el texto y el ancla)
anchorDorados.onTargetFound = () => {
  infoActual.titulo = "Dorados de Chihuahua";
  infoActual.texto = "Guante de cuero que sirve para atrapar las pelotas que son lanzadas y no hacerse daño.";
};

// Ejemplo para los Sultanes
anchorSultanes.onTargetFound = () => {
  infoActual.titulo = "Sultanes de Monterrey";
  infoActual.texto = "El bateador es el jugador encargado de golpear la pelota y hacer puntos.";
};

// 4. Qué hacer al presionar los botones
botonInfo.addEventListener('click', () => {
  // Rellenamos la tarjeta con los textos actuales
  tituloInfo.innerText = infoActual.titulo;
  textoInfo.innerText = infoActual.texto;
  // Mostramos la tarjeta
  modalInfo.className = 'info-card-visible';
});

btnCerrarInfo.addEventListener('click', () => {
  // Ocultamos la tarjeta
  modalInfo.className = 'info-card-oculta';
});

const gltfLoader = new GLTFLoader();

// 2. Cargar el modelo para el Escudo 0 (Sultanes)
gltfLoader.load('../../Assets/Modelos/Jocho3.glb', (gltf) => {
  const modeloAcereros = gltf.scene;
  modeloAcereros.scale.set(1.0, 1.0, 1.0); 
  anchorAcereros.group.add(modeloAcereros); // Se pega al ancla 0
});

// 3. Cargar el modelo para el Escudo 1 (Ej. Dorados)
gltfLoader.load('../../Assets/Modelos/GuanteNLA2.glb', (gltf) => {
  const modeloDorados = gltf.scene;
  modeloDorados.scale.set(0.5, 0.5, 0.5); 
  anchorDorados.group.add(modeloDorados); // Se pega al ancla 1

  if (gltf.animations && gltf.animations.length > 0) {
    mixerGuante = new THREE.AnimationMixer(modeloDorados);
    
    // Extraemos la primera animación (índice 0) que hiciste en Blender
    const clip = gltf.animations[0]; 
    accionGuante = mixerGuante.clipAction(clip);
    
    // Opcional: Configurar para que solo se reproduzca una vez y no en bucle infinito
    accionGuante.setLoop(THREE.LoopOnce);
    // Para que regrese suavemente a su estado original, o se quede donde terminó
    accionGuante.clampWhenFinished = true; 
  }

});

gltfLoader.load('../../Assets/Modelos/GorraBebida1.glb', (gltf) => {
  const  modeloCaliente= gltf.scene;
  modeloCaliente.scale.set(0.1, 0.1, 0.1); 
  anchorCaliente.group.add(modeloCaliente); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Bate.glb', (gltf) => {
  const modeloCharros = gltf.scene;
  modeloCharros.scale.set(0.1, 0.1, 0.1); 
  anchorCharros.group.add(modeloCharros); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Gorra.glb', (gltf) => {
  const modeloRieleros = gltf.scene;
  modeloRieleros.scale.set(0.1, 0.1, 0.1); 
  anchorRieleros.group.add(modeloRieleros); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/DedoEspuma.glb', (gltf) => {
  const modeloSaraperos = gltf.scene;
  modeloSaraperos.scale.set(0.1, 0.1, 0.1); 
  anchorSaraperos.group.add(modeloSaraperos); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Bateador_V1.glb', (gltf) => {
  const modeloSultanes = gltf.scene;
  modeloSultanes.scale.set(0.1, 0.1, 0.1); 
  anchorSultanes.group.add(modeloSultanes); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Catcher.glb', (gltf) => {
  const modeloTecolotes = gltf.scene;
  modeloTecolotes.scale.set(0.1, 0.1, 0.1); 
  anchorTecolotes.group.add(modeloTecolotes); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Lanzador_V2.glb', (gltf) => {
  const modeloToros = gltf.scene;
  modeloToros.scale.set(0.1, 0.1, 0.1); 
  anchorToros.group.add(modeloToros); // Se pega al ancla 1
});

gltfLoader.load('../../Assets/Modelos/Pelota.glb', (gltf) => {
  const modeloAlgodoneros = gltf.scene;
  modeloAlgodoneros.scale.set(0.1, 0.1, 0.1); 
  anchorAlgodoneros.group.add(modeloAlgodoneros); // Se pega al ancla 1
});

// 1. Seleccionamos el botón del HTML usando su ID
const botonAnimacion = document.getElementById('btnAnimacion');

// 2. Le indicamos qué hacer cuando reciba un clic
botonAnimacion.addEventListener('click', () => {
  
  // Verificamos si la animación del guante ya se terminó de cargar
  if (accionGuante) {
    // reset() es vital: si el usuario presiona el botón varias veces, 
    // la animación regresará al fotograma 0 y se reproducirá desde el inicio.
    accionGuante.reset(); 
    accionGuante.play();
  }
});


const btnCaptura = document.getElementById('btnCaptura');

btnCaptura.addEventListener('click', () => {
  // 1. Obtenemos el elemento de video de MindAR y el canvas de Three.js
  const video = document.querySelector('video');
  const canvas3D = renderer.domElement;

  if (!video || !canvas3D) return;

  // 2. Creamos un canvas temporal en la memoria con el mismo tamaño de la pantalla
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas3D.width;
  tempCanvas.height = canvas3D.height;
  const contexto = tempCanvas.getContext('2d');

  // 3. Dibujamos el video de la cámara web como fondo
  // Calculamos la proporción para que el video no se deforme
  const videoProporcion = video.videoWidth / video.videoHeight;
  const canvasProporcion = tempCanvas.width / tempCanvas.height;
  
  let drawWidth = tempCanvas.width;
  let drawHeight = tempCanvas.height;
  let offsetX = 0;
  let offsetY = 0;

  if (videoProporcion > canvasProporcion) {
    drawWidth = tempCanvas.height * videoProporcion;
    offsetX = (tempCanvas.width - drawWidth) / 2;
  } else {
    drawHeight = tempCanvas.width / videoProporcion;
    offsetY = (tempCanvas.height - drawHeight) / 2;
  }

  contexto.drawImage(video, offsetX, offsetY, drawWidth, drawHeight);

  // 4. Dibujamos el modelo 3D de Three.js exactamente encima del video
  renderer.render(scene, camera);

  contexto.drawImage(canvas3D, 0, 0, tempCanvas.width, tempCanvas.height);

  // 5. Convertimos el canvas fusionado en una imagen PNG
  const imagenUrl = tempCanvas.toDataURL('image/png');

  // 6. Forzamos la descarga en el navegador del usuario
  const linkDescarga = document.createElement('a');
  linkDescarga.href = imagenUrl;
  // Le damos un nombre por defecto a la foto
  linkDescarga.download = 'Frontera-Beisbolera-AR.png'; 
  
  document.body.appendChild(linkDescarga);
  linkDescarga.click();
  document.body.removeChild(linkDescarga);
});

    // encendemos cámara
    // 1. Variables globales para el confeti
let sistemaConfeti = null;
let velocidadesConfeti = [];

// 2. Agrupamos tus anclas en una lista para poder buscarlas
const todasLasAnclas = [
  anchorAcereros, anchorDorados, anchorCaliente, anchorCharros, 
  anchorRieleros, anchorSaraperos, anchorSultanes, anchorTecolotes, 
  anchorToros, anchorAlgodoneros
];

const botonParticulas = document.getElementById('btnParticulas');

botonParticulas.addEventListener('click', () => {
  console.log("1. Botón de partículas presionado"); // DEPURACIÓN

  let anclaActiva = null;
  
  // Revisamos qué escudo está viendo la cámara en este momento
  for (let i = 0; i < todasLasAnclas.length; i++) {
    if (todasLasAnclas[i].group.visible) {
      anclaActiva = todasLasAnclas[i].group;
      console.log("2. Escudo detectado en el índice: " + i); // DEPURACIÓN
      break; 
    }
  }

  // Si no hay escudo en pantalla, cancelamos la explosión para evitar errores
  if (!anclaActiva) {
    console.log("ERROR: Ningún escudo detectado. Apunta la cámara a un logo."); // DEPURACIÓN
    return;
  }

  // 3. Crear las partículas
  const cantidad = 400; 
  const geometria = new THREE.BufferGeometry();
  const posiciones = new Float32Array(cantidad * 3);
  const colores = new Float32Array(cantidad * 3);
  
  velocidadesConfeti = []; 

  for (let i = 0; i < cantidad; i++) {
    // Como ahora pegaremos el confeti directamente al escudo, la posición inicial es 0,0,0
    posiciones[i * 3] = 0;
    posiciones[i * 3 + 1] = 0;
    posiciones[i * 3 + 2] = 0;

    colores[i * 3] = Math.random();
    colores[i * 3 + 1] = Math.random();
    colores[i * 3 + 2] = Math.random();

    // VELOCIDAD CORREGIDA: 10 veces más lento para un efecto realista
    velocidadesConfeti.push({
      x: (Math.random() - 0.5) * 0.02,
      y: Math.random() * 0.04 + 0.02, 
      z: (Math.random() - 0.5) * 0.02
    });
  }

  geometria.setAttribute('position', new THREE.BufferAttribute(posiciones, 3));
  geometria.setAttribute('color', new THREE.BufferAttribute(colores, 3));

  const material = new THREE.PointsMaterial({
    size: 20.0,
    vertexColors: true,
    transparent: true,
    opacity: 1.0,
    depthTest: false 
  });

  if (sistemaConfeti) {
    if (sistemaConfeti.parent) sistemaConfeti.parent.remove(sistemaConfeti);
    sistemaConfeti.geometry.dispose();
    sistemaConfeti.material.dispose();
  }

  sistemaConfeti = new THREE.Points(geometria, material);
  
  // SOLUCIÓN CLAVE: En lugar de usar la escena general, lo pegamos al escudo físico
  anclaActiva.add(sistemaConfeti);
  console.log("3. Confeti creado y anclado con éxito al modelo."); // DEPURACIÓN

  setTimeout(() => {
    if (sistemaConfeti) {
      if (sistemaConfeti.parent) sistemaConfeti.parent.remove(sistemaConfeti);
      sistemaConfeti.geometry.dispose();
      sistemaConfeti.material.dispose();
      sistemaConfeti = null;
      console.log("4. Confeti destruido de la memoria tras 4 segundos."); // DEPURACIÓN
    }
  }, 3000);
});

// ------------ LÓGICA DEL BUCLE DE RENDERIZADO ------------
await mindarThree.start();

renderer.setAnimationLoop(() => {
  const delta = clock.getDelta(); 
  
  if (mixerGuante) {
    mixerGuante.update(delta); 
  }
  
  if (sistemaConfeti) {
    const posiciones = sistemaConfeti.geometry.attributes.position.array;
    
    for (let i = 0; i < velocidadesConfeti.length; i++) {
      posiciones[i * 3] += velocidadesConfeti[i].x;
      posiciones[i * 3 + 1] += velocidadesConfeti[i].y;
      posiciones[i * 3 + 2] += velocidadesConfeti[i].z;

      // GRAVEDAD CORREGIDA: Menos fuerza para que la caída sea suave
      velocidadesConfeti[i].y -= 0.001; 
    }
    
    sistemaConfeti.geometry.attributes.position.needsUpdate = true;
  }

  renderer.render(scene, camera);
});

  };

  startAR();
});