const PAGINAS_PROTEGIDAS = [
  'trivias.html',
  'perfil.html',
  'minijuego.html'
];

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Inyectar HTML del navbar
  await cargarComponenteNavbar();

  // 2. Verificar estado de la sesión
  const estaAutenticado = await verificarEstadoSesion();

  // 3. Redirigir si la vista actual es privada
  const rutaActual = window.location.pathname;
  const esPaginaPrivada = PAGINAS_PROTEGIDAS.some(pag => rutaActual.includes(pag));

  if (esPaginaPrivada && !estaAutenticado) {
    window.location.href = '../inicio_sesion/inicio_sesion.html';
    return;
  }

  // 4. Activar eventos
  configurarLogout();
  configurarMenuMovil();
});

async function cargarComponenteNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const rutasPosibles = [
    '/components/NavBar.html',
    '../../components/NavBar.html',
    '../components/NavBar.html',
    './components/NavBar.html'
  ];

  for (const ruta of rutasPosibles) {
    try {
      const response = await fetch(ruta);
      if (response.ok) {
        const html = await response.text();
        container.innerHTML = html;
        return;
      }
    } catch (e) {
      // Probar siguiente ruta
    }
  }

  console.error('No se pudo cargar NavBar.html');
}

async function verificarEstadoSesion() {
  try {
    const res = await fetch('/api/auth/me', {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });

    const data = await res.json();

    if (res.ok && data.ok) {
      document.body.classList.add('is-logged-in');
      document.body.classList.remove('is-guest');

      if (data.usuario && data.usuario.id_usuario) {
        localStorage.setItem('id_usuario', data.usuario.id_usuario);
      }
      return true;
    } else {
      establecerEstadoInvitado();
      return false;
    }
  } catch (error) {
    console.error('Error al consultar sesión:', error);
    establecerEstadoInvitado();
    return false;
  }
}

function establecerEstadoInvitado() {
  document.body.classList.add('is-guest');
  document.body.classList.remove('is-logged-in');
  localStorage.removeItem('id_usuario');
}

function configurarLogout() {
  const logoutBtn = document.getElementById('logout-btn');
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      const data = await res.json();

      if (data.ok) {
        localStorage.removeItem('id_usuario');
        window.location.href = '../inicio_sesion/inicio_sesion.html';
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  });
}

function configurarMenuMovil() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}