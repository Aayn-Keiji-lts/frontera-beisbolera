-- FRONTERA BEISBOLERA - esquema simplificado y normalizado
-- MySQL 8.0+
-- Se eliminaron estadisticas_equipo y momentos_equipo.
-- La tabla trivias contiene una fila por pregunta, cuatro opciones
-- y la letra de la respuesta correcta. Cada equipo debe tener 5 preguntas.

CREATE DATABASE IF NOT EXISTS frontera_beisbolera
  CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE frontera_beisbolera;

CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  apellido_paterno VARCHAR(80) NOT NULL,
  apellido_materno VARCHAR(80) NOT NULL,
  nombre_usuario VARCHAR(40) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  activo BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS equipos (
  id_equipo BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL UNIQUE,
  ciudad VARCHAR(100),
  nombre_corto VARCHAR(40),
  logo_url VARCHAR(500),
  descripcion TEXT,
  activo BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS videos_equipo (
  id_video BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_equipo BIGINT UNSIGNED NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  url_video VARCHAR(500) NOT NULL,
  descripcion TEXT,
  activo BOOLEAN NOT NULL DEFAULT TRUE,
  INDEX idx_videos_equipo (id_equipo),
  CONSTRAINT fk_videos_equipo FOREIGN KEY (id_equipo)
    REFERENCES equipos(id_equipo) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS estampas (
  id_estampa BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  descripcion TEXT,
  imagen_url VARCHAR(500),
  id_equipo BIGINT UNSIGNED,
  UNIQUE KEY uq_estampas_nombre_equipo (nombre, id_equipo),
  CONSTRAINT fk_estampas_equipo FOREIGN KEY (id_equipo)
    REFERENCES equipos(id_equipo) ON UPDATE CASCADE ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS usuarios_estampas (
  id_usuario BIGINT UNSIGNED NOT NULL,
  id_estampa BIGINT UNSIGNED NOT NULL,
  obtenida_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_usuario, id_estampa),
  CONSTRAINT fk_usuarios_estampas_usuario FOREIGN KEY (id_usuario)
    REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_usuarios_estampas_estampa FOREIGN KEY (id_estampa)
    REFERENCES estampas(id_estampa) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- Una fila = una pregunta de la trivia del equipo.
CREATE TABLE IF NOT EXISTS trivias (
  id_trivia BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_equipo BIGINT UNSIGNED NOT NULL,
  texto_pregunta TEXT NOT NULL,
  opcion_a VARCHAR(500) NOT NULL,
  opcion_b VARCHAR(500) NOT NULL,
  opcion_c VARCHAR(500) NOT NULL,
  opcion_d VARCHAR(500) NOT NULL,
  respuesta_correcta ENUM('A','B','C','D') NOT NULL,
  orden TINYINT UNSIGNED NOT NULL,
  puntos INT UNSIGNED NOT NULL DEFAULT 10,
  activa BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE KEY uq_trivia_equipo_orden (id_equipo, orden),
  CONSTRAINT chk_trivia_orden CHECK (orden BETWEEN 1 AND 5),
  CONSTRAINT fk_trivias_equipo FOREIGN KEY (id_equipo)
    REFERENCES equipos(id_equipo) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS intentos_trivia (
  id_intento BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_usuario BIGINT UNSIGNED NOT NULL,
  id_equipo BIGINT UNSIGNED NOT NULL,
  puntos_obtenidos INT UNSIGNED NOT NULL DEFAULT 0,
  iniciada_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finalizada_en TIMESTAMP NULL,
  INDEX idx_intentos_usuario (id_usuario, iniciada_en),
  INDEX idx_intentos_equipo (id_equipo, iniciada_en),
  CONSTRAINT fk_intentos_usuario FOREIGN KEY (id_usuario)
    REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_intentos_equipo FOREIGN KEY (id_equipo)
    REFERENCES equipos(id_equipo) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT chk_intentos_fechas CHECK (
    finalizada_en IS NULL OR finalizada_en >= iniciada_en
  )
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS respuestas_intento (
  id_intento BIGINT UNSIGNED NOT NULL,
  id_trivia BIGINT UNSIGNED NOT NULL,
  respuesta_elegida ENUM('A','B','C','D') NULL,
  correcta BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (id_intento, id_trivia),
  CONSTRAINT fk_respuestas_intento FOREIGN KEY (id_intento)
    REFERENCES intentos_trivia(id_intento) ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT fk_respuestas_trivia FOREIGN KEY (id_trivia)
    REFERENCES trivias(id_trivia) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS puntajes_juego (
  id_puntaje BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  id_usuario BIGINT UNSIGNED NOT NULL,
  nombre_juego VARCHAR(100) NOT NULL DEFAULT 'Minijuego de Bateo',
  puntos INT UNSIGNED NOT NULL DEFAULT 0,
  registrado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_puntajes_usuario_juego (id_usuario, nombre_juego, puntos),
  CONSTRAINT fk_puntajes_usuario FOREIGN KEY (id_usuario)
    REFERENCES usuarios(id_usuario) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

INSERT IGNORE INTO equipos (nombre, ciudad, nombre_corto) VALUES
('Sultanes de Monterrey', 'Monterrey', 'Sultanes'),
('Diablos Rojos del México', 'Ciudad de México', 'Diablos'),
('Tigres de Quintana Roo', 'Cancún', 'Tigres'),
('Toros de Tijuana', 'Tijuana', 'Toros'),
('Leones de Yucatán', 'Mérida', 'Leones'),
('Acereros de Monclova', 'Monclova', 'Acereros'),
('Algodoneros de Unión Laguna', 'Torreón', 'Algodoneros');

-- Validar que cada equipo tenga exactamente 5 preguntas desde el backend.
-- MySQL no garantiza el total de filas por equipo con un CHECK.
-- Consulta de verificación:
-- SELECT e.nombre, COUNT(t.id_trivia) AS cantidad_preguntas
-- FROM equipos e LEFT JOIN trivias t ON t.id_equipo=e.id_equipo
-- GROUP BY e.id_equipo, e.nombre ORDER BY e.nombre;
--
-- Guardar contraseñas como hash seguro (Argon2 o bcrypt), nunca en texto plano.
