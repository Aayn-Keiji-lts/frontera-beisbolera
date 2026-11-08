const profileMessage = document.getElementById('profile-message');
const editForm = document.getElementById('edit-profile-form');
const passwordForm = document.getElementById('password-form');
let currentUser = null;

function profileNotice(message, isError = false) {
  profileMessage.textContent = message;
  profileMessage.classList.toggle('is-error', isError);
  profileMessage.classList.toggle('is-success', !isError);
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
}

async function api(url, options = {}) {
  const response = await fetch(url, {
    credentials: 'same-origin',
    ...options,
    headers: { ...(options.headers || {}), ...(options.body ? { 'Content-Type': 'application/json' } : {}) }
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.ok) throw new Error(result.mensaje || 'No se pudo completar la solicitud.');
  return result;
}

function renderStamps(stamps) {
  const container = document.getElementById('stamp-list');
  if (!stamps.length) {
    container.innerHTML = '<p class="empty-profile">Todavía no tienes estampas.</p>';
    return;
  }
  container.innerHTML = stamps.map(stamp => `
    <article class="stamp-card">
      ${stamp.imagen_url ? `<img src="${escapeHtml(stamp.imagen_url)}" alt="${escapeHtml(stamp.nombre)}" loading="lazy">` : '<div class="stamp-placeholder">⚾</div>'}
      <strong>${escapeHtml(stamp.nombre)}</strong>
      <span>${escapeHtml(stamp.equipo || 'LMB')}</span>
      ${stamp.descripcion ? `<small>${escapeHtml(stamp.descripcion)}</small>` : ''}
    </article>`).join('');
}

function renderScores(scores, triviaScores) {
  const container = document.getElementById('scores-list');
  const entries = scores.map(score => ({ title: score.nombre_juego, points: score.puntos }))
    .concat(triviaScores.map(score => ({ title: `Trivia: ${score.equipo}`, points: score.puntos })));
  container.innerHTML = entries.length ? entries.map(item => `
    <div class="score-card"><span class="score-game">${escapeHtml(item.title)}</span>
    <span class="score-number">${Number(item.points) || 0} pts</span></div>`).join('')
    : '<p class="empty-profile">Aún no hay puntajes registrados.</p>';
  const triviaContainer = document.getElementById('trivia-list');
  triviaContainer.innerHTML = triviaScores.length ? triviaScores.map(item => `
    <div class="score-card"><span class="score-game">${escapeHtml(item.equipo)}</span>
    <span class="score-number">${Number(item.puntos) || 0} pts</span></div>`).join('')
    : '<p class="empty-profile">Aún no has completado trivias.</p>';
}

function renderUser(user) {
  currentUser = user;
  document.getElementById('display-username').textContent = `@${user.nombre_usuario}`;
  document.getElementById('profile-name').textContent = user.nombre;
  document.getElementById('profile-lastname').textContent = user.apellido_paterno;
  document.getElementById('profile-mothername').textContent = user.apellido_materno;
  document.getElementById('profile-since').textContent = user.fecha_registro
    ? `Miembro desde ${new Date(user.fecha_registro).toLocaleDateString('es-MX')}` : '';
  for (const [key, value] of Object.entries(user)) {
    const field = editForm.elements.namedItem(key);
    if (field) field.value = value ?? '';
  }
}

async function loadProfile() {
  try {
    const result = await api('/api/perfil');
    renderUser(result.usuario);
    renderStamps(result.estampas || []);
    renderScores(result.puntajes || [], result.trivias || []);
    profileNotice('Perfil cargado correctamente.');
  } catch (error) {
    if (error.message.includes('Inicia sesión') || error.message.includes('sesión')) {
      window.location.replace('../inicio_sesion/inicio_sesion.html');
      return;
    }
    profileNotice(error.message, true);
  }
}

document.getElementById('edit-profile-button').addEventListener('click', () => {
  passwordForm.hidden = true;
  editForm.hidden = !editForm.hidden;
});
document.getElementById('change-password-button').addEventListener('click', () => {
  editForm.hidden = true;
  passwordForm.hidden = !passwordForm.hidden;
});
document.querySelectorAll('[data-close-form]').forEach(button => {
  button.addEventListener('click', () => { document.getElementById(button.dataset.closeForm).hidden = true; });
});

editForm.addEventListener('submit', async event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(editForm).entries());
  try {
    const result = await api('/api/perfil', { method: 'PUT', body: JSON.stringify(data) });
    profileNotice(result.mensaje);
    editForm.hidden = true;
    await loadProfile();
  } catch (error) { profileNotice(error.message, true); }
});

passwordForm.addEventListener('submit', async event => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(passwordForm).entries());
  try {
    const result = await api('/api/perfil/password', { method: 'PUT', body: JSON.stringify(data) });
    profileNotice(result.mensaje);
    passwordForm.reset();
    passwordForm.hidden = true;
  } catch (error) { profileNotice(error.message, true); }
});

loadProfile();
