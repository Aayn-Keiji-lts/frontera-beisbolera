const MASTER_STAMP_ID = 100;

app.post('/api/estampas/desbloquear-estampa', async (req, res) => {
  const { id_usuario } = req.body;

  if (!id_usuario) {
    return res.status(400).json({ success: false, message: 'Falta el id_usuario' });
  }

  try {
    const [obtenidasRows] = await db.query(
      'SELECT id_estampa FROM usuarios_estampas WHERE id_usuario = ?',
      [id_usuario]
    );
    const idObtenidas = obtenidasRows.map(r => r.id_estampa);

    const [regularesRows] = await db.query(
      'SELECT * FROM estampas WHERE id_estampa != ?',
      [MASTER_STAMP_ID]
    );

    const faltantes = regularesRows.filter(e => !idObtenidas.includes(e.id_estampa));

    let estampaOtorgada = null;

    if (faltantes.length > 0) {
      estampaOtorgada = faltantes[Math.floor(Math.random() * faltantes.length)];
    } else if (!idObtenidas.includes(MASTER_STAMP_ID)) {
      const [masterRow] = await db.query(
        'SELECT * FROM estampas WHERE id_estampa = ?',
        [MASTER_STAMP_ID]
      );
      estampaOtorgada = masterRow[0];
    } else {
      estampaOtorgada = regularesRows[Math.floor(Math.random() * regularesRows.length)];
    }

    await db.query(
      'INSERT IGNORE INTO usuarios_estampas (id_usuario, id_estampa) VALUES (?, ?)',
      [id_usuario, estampaOtorgada.id_estampa]
    );

    res.json({
      success: true,
      estampa: estampaOtorgada
    });

  } catch (error) {
    console.error('Error al desbloquear estampa:', error);
    res.status(500).json({ success: false, message: 'Error en la base de datos' });
  }
});

app.get('/api/estampas/perfil/:id_usuario', async (req, res) => {
  const { id_usuario } = req.params;

  try {
    const [coleccion] = await db.query(`
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

    res.json({
      success: true,
      coleccion: coleccion
    });
  } catch (error) {
    console.error('Error al cargar perfil:', error);
    res.status(500).json({ success: false, message: 'Error al consultar el álbum' });
  }
});