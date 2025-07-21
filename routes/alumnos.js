const express = require('express');
const router = express.Router();
const Alumno = require('../models/Alumno');

router.get('/', async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
