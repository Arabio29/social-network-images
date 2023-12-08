const mongoose = require('mongoose');
const { database } = require('./keys');

mongoose.connect(database.URI)
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((err) => {
    console.log(`Error de conexión a la base de datos: ${err}`);
  });

