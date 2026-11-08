require('dotenv').config();

console.log("HOST:", process.env.DB_HOST);
console.log("PUERTO:", process.env.DB_PORT);
console.log("USUARIO:", process.env.DB_USER);
console.log("BASE DE DATOS:", process.env.DB_NAME);
console.log("CONTRASEÑA CONFIGURADA:", !!process.env.DB_PASSWORD);