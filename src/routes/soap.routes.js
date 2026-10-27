// Router donde se registran los servicios SOAP
const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const conversionesService = require('../services/conversiones.service');
const geometriaService = require('../services/geometria.service');

const router = express.Router();

// Se leen los contratos WSDL desde la carpeta src/wsdl
const conversionesWsdl = fs.readFileSync(path.join(__dirname, '../wsdl/conversiones.wsdl'), 'utf8');
const geometriaWsdl = fs.readFileSync(path.join(__dirname, '../wsdl/geometria.wsdl'), 'utf8');

// soap.listen(servidor, ruta, implementación, wsdl)
// Cada servicio queda publicado en su ruta y su WSDL en ruta + "?wsdl"
soap.listen(router, '/soap/conversiones', conversionesService, conversionesWsdl);
soap.listen(router, '/soap/geometria', geometriaService, geometriaWsdl);

module.exports = router;
