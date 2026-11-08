const express = require('express');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const cors = require('cors');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const conexion = require('./config/database');
const app = express();
const PORT = Number(process.env.PORT) || 3005;

// =================================================================
// 1. MIDDLEWARES PRINCIPALES Y ARCHIVOS ESTÁTICOS
// =================================================================
app.use(cors());
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true }));

// Servir vistas, componentes y recursos estáticos
app.use(express.static(path.join(__dirname, 'Views')));
app.use('/components', express.static(path.join(__dirname, 'components')));
app.use(express.static(__dirname));

// =================================================================
// 2. SISTEMA DE SESIÓN POR COOKIES (HMAC)
// =================================================================
const SESSION_SECRET = process.env.SESSION_SECRET;
if (!SESSION_SECRET || SESSION_SECRET.length < 32) {
  console.warn('AVISO: Define SESSION_SECRET en .env (mínimo 32 caracteres). Se usará una clave temporal.');
}
const signingSecret = SESSION_SECRET || crypto.randomBytes(32).toString('hex');
const COOKIE_NAME = 'frontera_session';
const SESSION_DURATION_SECONDS = 7 * 24 * 60 * 60;

function sign(value) {
  return crypto.createHmac('sha256', signingSecret).update(value).digest('base64url');
}

function createSession(user) {
  const payload = Buffer.from(JSON.stringify({
    id: String(user.id_usuario),
    username: user.nombre_usuario,
    exp: Math.floor(Date.now() / 1000) + SESSION_DURATION_SECONDS
  })).toString('base64url');
  return `${payload}.${sign(payload)}`;
}

function readCookie(req, name) {
  const cookieHeader = req.headers.cookie || '';
  const cookies = cookieHeader.split(';').map(item => item.trim());
  const cookie = cookies.find(item => item.startsWith(`${name}=`));
  return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
}

function getSession(req) {
  const token = readCookie(req, COOKIE_NAME);
  if (!token) return null;

  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payload, signature] = parts;
  const expected = sign(payload);

  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data.id || !data.username || !data.exp || data.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return data;
  } catch {
    return null;
  }
}

function setSessionCookie(res, user) {
  const token = createSession(user);
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SESSION_DURATION_SECONDS * 1000,
    path: '/'
  });
}

function clearSessionCookie(res) {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, sameSite: 'lax', path: '/' });
}

// Middleware de autenticación para proteger endpoints backend
function requireAuth(req, res, next) {
  const session = getSession(req);
  if (!session) {
    return res.status(401).json({ ok: false, mensaje: 'Inicia sesión para continuar.' });
  }
  req.sessionUser = session;
  next();
}

function cleanText(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function dbErrorMessage(error) {
  if (error.code === 'ER_NO_SUCH_TABLE') {
    return 'No existe la tabla usuarios. Importa el archivo SQL de Frontera Beisbolera en MySQL.';
  }
  if (error.code === 'ER_BAD_DB_ERROR') {
    return 'No existe la base de datos configurada. Revisa DB_NAME e importa el SQL.';
  }
  if (['ECONNREFUSED', 'ENOTFOUND', 'ETIMEDOUT'].includes(error.code)) {
    return 'No se pudo conectar a MySQL. Verifica que MySQL esté iniciado y que DB_HOST/DB_PORT sean correctos.';
  }
  if (error.code === 'ER_ACCESS_DENIED_ERROR') {
    return 'MySQL rechazó las credenciales. Revisa DB_USER y DB_PASSWORD en el archivo .env.';
  }
  return 'Ocurrió un error al consultar MySQL.';
}

// =================================================================
// 3. RUTAS DE AUTENTICACIÓN Y SESIÓN
// =================================================================

app.get('/', (req, res) => res.redirect('/home/index.html'));

app.get('/api/prueba-db', async (req, res) => {
  try {
    const [rows] = await conexion.query('SELECT DATABASE() AS base_datos');
    res.json({ estado: 'success', informacion: rows[0] });
  } catch (error) {
    console.error('Error en prueba de MySQL:', error.code, error.message);
    res.status(500).json({
      estado: 'error',
      codigo: error.code,
      mensaje: dbErrorMessage(error),
      detalle: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Registro de usuarios
app.post('/api/auth/registro', async (req, res) => {
  const nombre = cleanText(req.body.nombre);
  const apellidoPaterno = cleanText(req.body.apellido_paterno);
  const apellidoMaterno = cleanText(req.body.apellido_materno);
  const nombreUsuario = cleanText(req.body.nombre_usuario);
  const password = typeof req.body.password === 'string' ? req.body.password : '';

  if (!nombre || !apellidoPaterno || !apellidoMaterno || !nombreUsuario || !password) {
    return res.status(400).json({ ok: false, mensaje: 'Completa todos los campos.' });
  }
  if (nombre.length > 80 || apellidoPaterno.length > 80 || apellidoMaterno.length > 80) {
    return res.status(400).json({ ok: false, mensaje: 'Los nombres y apellidos no deben superar 80 caracteres.' });
  }
  if (!/^[a-zA-Z0-9._-]{3,40}$/.test(nombreUsuario)) {
    return res.status(400).json({
      ok: false,
      mensaje: 'El usuario debe tener entre 3 y 40 caracteres y solo letras, números, punto, guion o guion bajo.'
    });
  }
  if (password.length < 8 || password.length > 72) {
    return res.status(400).json({ ok: false, mensaje: 'La contraseña debe tener entre 8 y 72 caracteres.' });
  }

  try {
    const [existing] = await conexion.execute(
      'SELECT id_usuario FROM usuarios WHERE nombre_usuario = ? LIMIT 1',
      [nombreUsuario]
    );
    if (existing.length) {
      return res.status(409).json({ ok: false, mensaje: 'Ese nombre de usuario ya está registrado.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const [result] = await conexion.execute(
      `INSERT INTO usuarios
       (nombre, apellido_paterno, apellido_materno, nombre_usuario, password_hash)
       VALUES (?, ?, ?, ?, ?)`,
      [nombre, apellidoPaterno, apellidoMaterno, nombreUsuario, passwordHash]
    );

    const user = {
      id_usuario: result.insertId,
      nombre_usuario: nombreUsuario,
      nombre,
      apellido_paterno: apellidoPaterno,
      apellido_materno: apellidoMaterno
    };
    setSessionCookie(res, user);
    return res.status(201).json({
      ok: true,
      mensaje: '¡Cuenta creada! Ya iniciaste sesión.',
      usuario: { id_usuario: user.id_usuario, nombre_usuario: user.nombre_usuario, nombre: user.nombre }
    });
  } catch (error) {
    console.error('Error en registro:', error.code, error.message);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ ok: false, mensaje: 'Ese nombre de usuario ya está registrado.' });
    }
    return res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

// Inicio de sesión
app.post('/api/auth/login', async (req, res) => {
  const nombreUsuario = cleanText(req.body.nombre_usuario);
  const password = typeof req.body.password === 'string' ? req.body.password : '';

  if (!nombreUsuario || !password) {
    return res.status(400).json({ ok: false, mensaje: 'Escribe tu usuario y contraseña.' });
  }

  try {
    const [rows] = await conexion.execute(
      `SELECT id_usuario, nombre, apellido_paterno, apellido_materno,
              nombre_usuario, password_hash, activo
       FROM usuarios
       WHERE nombre_usuario = ?
       LIMIT 1`,
      [nombreUsuario]
    );
    const user = rows[0];

    if (!user || !user.activo || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ ok: false, mensaje: 'Usuario o contraseña incorrectos.' });
    }

    setSessionCookie(res, user);
    return res.json({
      ok: true,
      mensaje: `¡Bienvenido, ${user.nombre}!`,
      usuario: {
        id_usuario: user.id_usuario,
        nombre: user.nombre,
        apellido_paterno: user.apellido_paterno,
        apellido_materno: user.apellido_materno,
        nombre_usuario: user.nombre_usuario
      }
    });
  } catch (error) {
    console.error('Error en inicio de sesión:', error.code, error.message);
    return res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

// Validar usuario autenticado
app.get('/api/auth/me', requireAuth, async (req, res) => {
  try {
    const [rows] = await conexion.execute(
      `SELECT id_usuario, nombre, apellido_paterno, apellido_materno, nombre_usuario
       FROM usuarios WHERE id_usuario = ? AND activo = TRUE LIMIT 1`,
      [req.sessionUser.id]
    );
    if (!rows.length) {
      clearSessionCookie(res);
      return res.status(401).json({ ok: false, mensaje: 'La cuenta ya no está activa.' });
    }
    res.json({ ok: true, usuario: rows[0] });
  } catch (error) {
    console.error('Error al consultar sesión:', error.code, error.message);
    res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

// Cierre de sesión
app.post('/api/auth/logout', (req, res) => {
  clearSessionCookie(res);
  res.json({ ok: true, mensaje: 'Sesión cerrada.' });
});

// =================================================================
// 4. RUTAS DEL PERFIL DE USUARIO
// =================================================================

app.get('/api/perfil', requireAuth, async (req, res) => {
  try {
    const [usuarios] = await conexion.execute(
      `SELECT nombre, apellido_paterno, apellido_materno, nombre_usuario, fecha_registro
       FROM usuarios WHERE id_usuario = ? AND activo = TRUE LIMIT 1`,
      [req.sessionUser.id]
    );
    if (!usuarios.length) {
      clearSessionCookie(res);
      return res.status(401).json({ ok: false, mensaje: 'La cuenta ya no está activa.' });
    }

    const [estampas] = await conexion.execute(
      `SELECT e.id_estampa, e.nombre, e.descripcion, e.imagen_url,
              eq.nombre_corto AS equipo
       FROM usuarios_estampas ue
       INNER JOIN estampas e ON e.id_estampa = ue.id_estampa
       LEFT JOIN equipos eq ON eq.id_equipo = e.id_equipo
       WHERE ue.id_usuario = ?
       ORDER BY ue.obtenida_en DESC`,
      [req.sessionUser.id]
    );

    const [puntajes] = await conexion.execute(
      `SELECT nombre_juego, MAX(puntos) AS puntos, MAX(registrado_en) AS fecha
       FROM puntajes_juego
       WHERE id_usuario = ?
       GROUP BY nombre_juego
       ORDER BY puntos DESC`,
      [req.sessionUser.id]
    );

    const [trivias] = await conexion.execute(
      `SELECT e.nombre_corto AS equipo, MAX(it.puntos_obtenidos) AS puntos,
              MAX(it.finalizada_en) AS fecha
       FROM intentos_trivia it
       INNER JOIN equipos e ON e.id_equipo = it.id_equipo
       WHERE it.id_usuario = ? AND it.finalizada_en IS NOT NULL
       GROUP BY it.id_equipo, e.nombre_corto
       ORDER BY puntos DESC`,
      [req.sessionUser.id]
    );

    res.json({ ok: true, usuario: usuarios[0], estampas, puntajes, trivias });
  } catch (error) {
    console.error('Error al cargar perfil:', error.code, error.message);
    res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

app.put('/api/perfil', requireAuth, async (req, res) => {
  const nombre = cleanText(req.body.nombre);
  const apellidoPaterno = cleanText(req.body.apellido_paterno);
  const apellidoMaterno = cleanText(req.body.apellido_materno);
  const nombreUsuario = cleanText(req.body.nombre_usuario);

  if (!nombre || !apellidoPaterno || !apellidoMaterno || !nombreUsuario) {
    return res.status(400).json({ ok: false, mensaje: 'Completa todos los campos.' });
  }
  if ([nombre, apellidoPaterno, apellidoMaterno].some(v => v.length > 80) ||
      !/^[a-zA-Z0-9._-]{3,40}$/.test(nombreUsuario)) {
    return res.status(400).json({ ok: false, mensaje: 'Revisa los nombres y el formato del usuario.' });
  }

  try {
    await conexion.execute(
      `UPDATE usuarios SET nombre = ?, apellido_paterno = ?,
       apellido_materno = ?, nombre_usuario = ? WHERE id_usuario = ?`,
      [nombre, apellidoPaterno, apellidoMaterno, nombreUsuario, req.sessionUser.id]
    );
    res.json({ ok: true, mensaje: 'Perfil actualizado correctamente.' });
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ ok: false, mensaje: 'Ese nombre de usuario ya está en uso.' });
    }
    console.error('Error al actualizar perfil:', error.code, error.message);
    res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

app.put('/api/perfil/password', requireAuth, async (req, res) => {
  const actual = typeof req.body.actual === 'string' ? req.body.actual : '';
  const nueva = typeof req.body.nueva === 'string' ? req.body.nueva : '';
  if (!actual || nueva.length < 8 || nueva.length > 72) {
    return res.status(400).json({ ok: false, mensaje: 'La nueva contraseña debe tener entre 8 y 72 caracteres.' });
  }
  try {
    const [rows] = await conexion.execute(
      'SELECT password_hash FROM usuarios WHERE id_usuario = ? AND activo = TRUE LIMIT 1',
      [req.sessionUser.id]
    );
    if (!rows.length || !(await bcrypt.compare(actual, rows[0].password_hash))) {
      return res.status(400).json({ ok: false, mensaje: 'La contraseña actual es incorrecta.' });
    }
    const hash = await bcrypt.hash(nueva, 12);
    await conexion.execute('UPDATE usuarios SET password_hash = ? WHERE id_usuario = ?', [hash, req.sessionUser.id]);
    res.json({ ok: true, mensaje: 'Contraseña actualizada correctamente.' });
  } catch (error) {
    console.error('Error al cambiar contraseña:', error.code, error.message);
    res.status(500).json({ ok: false, mensaje: dbErrorMessage(error) });
  }
});

// =================================================================
// 5. RUTAS DE ESTAMPAS (OTORGAR & CONSULTAR ÁLBUM)
// =================================================================

const MASTER_STAMP_ID = 100;

app.post('/api/estampas/desbloquear-estampa', async (req, res) => {
  const session = getSession(req);
  const id_usuario = (session && session.id) || req.body.id_usuario;

  console.log(`📥 Petición a /desbloquear-estampa para usuario: ${id_usuario}`);

  if (!id_usuario) {
    console.error('❌ Error: No hay id_usuario ni sesión activa.');
    return res.status(401).json({ success: false, message: 'Inicia sesión para ganar la estampa.' });
  }

  try {
    // 1. Estampas que el usuario ya obtuvo
    const [obtenidasRows] = await conexion.query(
      'SELECT id_estampa FROM usuarios_estampas WHERE id_usuario = ?',
      [id_usuario]
    );
    const idObtenidas = obtenidasRows.map(r => Number(r.id_estampa));

    // 2. Estampas regulares disponibles en la BD
    const [regularesRows] = await conexion.query(
      'SELECT * FROM estampas WHERE id_estampa != ?',
      [MASTER_STAMP_ID]
    );

    // 3. Filtrar estampas no repetidas
    const faltantes = regularesRows.filter(e => !idObtenidas.includes(Number(e.id_estampa)));

    let estampaOtorgada = null;

    if (faltantes.length > 0) {
      estampaOtorgada = faltantes[Math.floor(Math.random() * faltantes.length)];
    } else if (!idObtenidas.includes(MASTER_STAMP_ID)) {
      const [masterRow] = await conexion.query('SELECT * FROM estampas WHERE id_estampa = ?', [MASTER_STAMP_ID]);
      estampaOtorgada = masterRow[0];
    } else {
      estampaOtorgada = regularesRows[Math.floor(Math.random() * regularesRows.length)];
    }

    // 4. Inserción en MySQL
    await conexion.query(
      'INSERT IGNORE INTO usuarios_estampas (id_usuario, id_estampa) VALUES (?, ?)',
      [id_usuario, estampaOtorgada.id_estampa]
    );

    console.log(`✅ Estampa #${estampaOtorgada.id_estampa} (${estampaOtorgada.nombre}) asignada al usuario #${id_usuario}`);

    return res.json({
      success: true,
      estampa: estampaOtorgada
    });

  } catch (error) {
    console.error('❌ Error ejecutando consulta SQL:', error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/api/estampas/perfil/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const [coleccion] = await conexion.query(`
      SELECT 
        e.id_estampa,
        e.nombre,
        e.descripcion,
        e.imagen_url,
        IF(ue.id_usuario IS NOT NULL, TRUE, FALSE) AS desbloqueada,
        ue.obtenida_en
      FROM estampas e
      LEFT JOIN usuarios_estampas ue 
        ON e.id_estampa = ue.id_estampa AND ue.id_usuario = ?
      ORDER BY e.id_estampa ASC
    `, [id_usuario]);

    return res.json({
      success: true,
      coleccion
    });
  } catch (error) {
    console.error('❌ Error al cargar perfil:', error.message);
    return res.status(500).json({ success: false, message: 'Error al consultar el álbum.' });
  }
});

// =================================================================
// 6. LEVANTAR EL SERVIDOR
// =================================================================

app.listen(PORT, async () => {
  console.log('--------------------------------');
  console.log('FRONTERA BEISBOLERA');
  console.log(`Servidor iniciado en: http://localhost:${PORT}`);
  console.log(`Base de datos en uso: ${process.env.DB_NAME || '(sin configurar)'}`);
  try {
    const connection = await conexion.getConnection();
    const [rows] = await connection.query('SELECT DATABASE() AS base_datos');
    console.log('MySQL conectado correctamente:', rows[0].base_datos);
    connection.release();
  } catch (error) {
    console.error('No se pudo conectar a MySQL:', error.code, '-', dbErrorMessage(error));
    console.error('El servidor web seguirá activo; revisa las credenciales en .env.');
  }
  console.log('--------------------------------');
});