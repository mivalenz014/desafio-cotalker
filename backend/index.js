const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

/* Crear aplicación de express */
const app = express();

/* Conexión a la BD */
dbConnection();

/* CORS */
app.use(cors());

/* Carpeta pública */
app.use(express.static('public'));

/* Lectura y parseo del request body */
app.use(express.json());

/* Rutas */
app.use('/api/entries', require('./routes/entries'));

/* Escuchar peticiones */
app.listen(process.env.PORT, () => {
	console.log('Application running in port 4000')
});

