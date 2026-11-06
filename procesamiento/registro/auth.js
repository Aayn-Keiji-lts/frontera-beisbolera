const form = document.querySelector('#login-form, #registro-form');
const message = document.getElementById('auth-message');

function showMessage(text, isError = true) {
  message.textContent = text;
  message.classList.toggle('is-error', isError);
  message.classList.toggle('is-success', !isError);
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  showMessage('');
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const isRegister = form.id === 'registro-form';
    const data = Object.fromEntries(new FormData(form).entries());

    if (isRegister) {
      if (data.password !== data['confirm-password']) {
        showMessage('Las contraseñas no coinciden.');
        document.getElementById('confirm-password').focus();
        return;
      }
      if (!document.getElementById('terms').checked) {
        showMessage('Debes aceptar los términos para registrarte.');
        return;
      }
      delete data['confirm-password'];
      const response = await fetch('/api/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.mensaje || 'No se pudo crear la cuenta.');
      showMessage(result.mensaje || 'Registro exitoso.', false);
      window.location.href = '../home/index.html';
    } else {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.mensaje || 'No se pudo iniciar sesión.');
      showMessage(result.mensaje || 'Inicio de sesión exitoso.', false);
      window.location.href = '../home/index.html';
    }
  } catch (error) {
    showMessage(error.message || 'No se pudo conectar con el servidor. Asegúrate de iniciar server.js.');
  } finally {
    submitButton.disabled = false;
  }
});
