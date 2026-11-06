(async function () {
  const loginLinks = [...document.querySelectorAll('a[href*="inicio_sesion"]')];
  const registerLinks = [...document.querySelectorAll('a[href*="registro"]')];
  const logout = document.getElementById('logout-button') || document.querySelector('.logout-btn');
  try {
    const response = await fetch('/api/auth/me', { credentials: 'same-origin' });
    const result = await response.json();
    if (response.ok && result.ok) {
      loginLinks.forEach(link => link.hidden = true);
      registerLinks.forEach(link => link.hidden = true);
      if (logout) {
        logout.hidden = false;
        logout.href = '#';
        logout.addEventListener('click', async event => {
          event.preventDefault();
          try {
            await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
          } finally {
            window.location.href = '/home/index.html';
          }
        });
      }
    } else if (logout) {
      logout.hidden = true;
    }
  } catch (error) {
    if (logout) logout.hidden = true;
    console.warn('No fue posible consultar la sesión:', error);
  }
})();
