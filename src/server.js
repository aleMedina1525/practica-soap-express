// Punto de arranque: solo enciende el servidor
const app = require('./app');
const config = require('./config');

app.listen(config.PORT, function () {
  console.log('Servidor escuchando en http://localhost:' + config.PORT);
  console.log('WSDL Conversiones: http://localhost:' + config.PORT + '/soap/conversiones?wsdl');
  console.log('WSDL Geometria:    http://localhost:' + config.PORT + '/soap/geometria?wsdl');
});
