const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.post('/login', async (req, res) => {
  const { correo, curp } = req.body;
  console.log('Intento de login con:', correo, curp); // 👈 Agrega esto

  try {
    const alumno = await Alumno.findOne({ correo, curp });
    if (!alumno) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    res.json({ alumno });
  } catch (err) {
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});


module.exports = router;
