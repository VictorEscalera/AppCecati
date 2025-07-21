const mongoose = require('mongoose');

const AlumnoSchema = new mongoose.Schema({
  nombre: String,
  curp: String,
  fecha_nacimiento: String,
  sexo: String,
  telefono: String,
  correo: String,
  domicilio: String,
  municipio: String,
  estado: String,
  curso: String,
  escolaridad: String,
  matricula: String, // Asegúrate que exista
  password: String // Para login simple
});

module.exports = mongoose.model('Alumno', AlumnoSchema);
