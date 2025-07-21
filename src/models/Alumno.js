const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
  nombre: String,
  a_paterno: String,
  a_materno: String
});

module.exports = mongoose.model('Alumno', alumnoSchema);
