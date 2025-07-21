// server.js o index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://victorsolis2019:Tobivictor__11@cluster0.syaedri.mongodb.net/Cecati?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error al conectar:', err));

// Definición del modelo
const AlumnoSchema = new mongoose.Schema({
  nombre: String,
  a_paterno: String,
  a_materno: String
});

const Alumno = mongoose.model('Alumno', AlumnoSchema, 'Alumnos'); // con "A" mayúscula

// Ruta para obtener los alumnos
app.get('/api/alumnos', async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener alumnos' });
  }
});

app.listen(3000, () => {
  console.log('🚀 Servidor escuchando en http://localhost:3000');
});
