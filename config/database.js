const mysql = require('mysql2/promise');

const required = ['DB_HOST', 'DB_USER', 'DB_NAME'];
const missing = required.filter(key => !process.env[key]);
if (missing.length) {
  console.warn(`Faltan variables de MySQL en .env: ${missing.join(', ')}`);
}

const conexion = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'frontera_beisbolera',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: 'utf8mb4'
});

module.exports = conexion;
