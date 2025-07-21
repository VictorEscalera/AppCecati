const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.post('/login', async (req, res) => {
  const { correo, curp } = req.body;

  try {
    const alumno = await Alumno.findOne({ correo, curp });
    if (!alumno) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    res.json({ alumno }); // Aquí devuelves toda su info
  } catch (err) {
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;
