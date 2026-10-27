// Configuración de la aplicación Express
const express = require('express');
const logger = require('./middleware/logger');
const soapRoutes = require('./routes/soap.routes');

const app = express();

// 1. El middleware de registro va primero para que vea todas las peticiones
app.use(logger);

// 2. Se monta el Router que registra los servicios SOAP
app.use(soapRoutes);

module.exports = app;
