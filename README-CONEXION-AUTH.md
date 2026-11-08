# Frontera Beisbolera: conexión MySQL, registro e inicio de sesión

## 1. Requisitos
- Node.js (18 o posterior recomendado).
- MySQL Server iniciado.
- MySQL Workbench (opcional, para importar el esquema).

## 2. Importar la base de datos
1. Abre MySQL Workbench y conecta con tu servidor local.
2. Abre `database.sql` (el archivo SQL que compartiste).
3. Ejecuta el script completo con el botón del rayo.
4. Confirma que se creó `frontera_beisbolera` y la tabla `usuarios`.

El esquema espera que la tabla `usuarios` tenga `nombre`, `apellido_paterno`,
`apellido_materno`, `nombre_usuario`, `password_hash` y `activo`.

## 3. Configurar credenciales
Abre el archivo `.env` en la carpeta principal. Comprueba:
- `DB_HOST`: normalmente `127.0.0.1`
- `DB_PORT`: normalmente `3306`
- `DB_USER`: el usuario de MySQL (por ejemplo `root`)
- `DB_PASSWORD`: la contraseña REAL de ese usuario de MySQL. No necesariamente es `root`.
- `DB_NAME`: `frontera_beisbolera`

No compartas el archivo `.env` ni subas la contraseña de MySQL a GitHub.
Si creas el proyecto desde `.env.example`, copia ese archivo a `.env` y configura tus datos.
La clave `SESSION_SECRET` debe ser una cadena aleatoria larga.

## 4. Instalar dependencias e iniciar
Desde Visual Studio Code:
1. Abre la carpeta raíz del proyecto (donde está `server.js`).
2. Abre Terminal > Nueva terminal.
3. Ejecuta:
   ```bash
   npm install
   npm start
   ```
4. Abre **http://localhost:3000** en el navegador. No abras los HTML directamente con Live Server:
   las páginas necesitan el backend Express para registrar e iniciar sesión.

## 5. Probar la conexión
Abre `http://localhost:3000/api/prueba-db`.
Si funciona, verás JSON con `estado: "success"` y `base_datos: "frontera_beisbolera"`.
Si falla, la respuesta indica si faltan credenciales, no existe la base o no se encuentra la tabla.

## 6. Probar registro e inicio
1. Entra a `http://localhost:3000/registro/registro.html`.
2. Registra nombre, apellidos, usuario (3–40 caracteres) y contraseña (8–72 caracteres).
3. El sistema guarda la contraseña con bcrypt; nunca guarda la contraseña original.
4. Al registrarte correctamente, se crea una sesión y regresa a la página principal.
5. Cierra sesión borrando la cookie desde el navegador si deseas probar el login de nuevo, o usa `POST /api/auth/logout`.

## Rutas API
- `POST /api/auth/registro`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `POST /api/auth/logout`
- `GET /api/prueba-db`

**Importante:** este proyecto es una aplicación de desarrollo local. Antes de publicarlo en internet,
configura HTTPS, una clave `SESSION_SECRET` segura, y revisa las políticas de seguridad.


En este paquete se conserva el `.env` que venía en tu proyecto (DB_PASSWORD=root). Si esa no es la contraseña de tu MySQL local, cámbiala antes de ejecutar `npm start`.


## 7. Perfil conectado a MySQL
La pantalla `perfil/perfil.html` ahora consulta `GET /api/perfil` usando la cookie de sesión:
- Datos personales desde `usuarios`.
- Estampas obtenidas desde `usuarios_estampas` + `estampas` + `equipos`.
- Mejor puntaje por juego desde `puntajes_juego`.
- Mejor resultado por equipo desde `intentos_trivia`.

Los botones **Editar perfil** y **Cambiar contraseña** también guardan los cambios en MySQL.
La contraseña actual se verifica y la nueva se almacena como hash bcrypt.

## 8. Importante para probar
- Ejecuta la aplicación desde la carpeta que contiene `server.js`, con `npm install` y `npm start`.
- Entra siempre mediante `http://localhost:3000`; no abras los HTML con doble clic ni con Live Server.
- El servidor publica la carpeta `procesamiento` que está al mismo nivel que `server.js`. La copia anidada `frontera-beisbolera/procesamiento`, si existe en tu ZIP anterior, no es la carpeta que sirve Express.
- Para ver estampas o puntajes, primero deben existir registros relacionados con el usuario en `usuarios_estampas`, `puntajes_juego` o `intentos_trivia`. Si las tablas están vacías, el perfil mostrará un mensaje indicando que aún no hay datos.
- Nunca publiques `.env` ni compartas `DB_PASSWORD` o `SESSION_SECRET`. Cambia la clave de sesión por una cadena aleatoria propia.
