// Middleware de registro
// Muestra: método HTTP, URL, código de estado y tiempo de procesamiento.
// No lee ni modifica el XML de la petición ni de la respuesta.
function logger(req, res, next) {
  const inicio = Date.now();

  // 'finish' se dispara cuando la respuesta ya se envió al cliente
  res.on('finish', function () {
    const tiempo = Date.now() - inicio;
    const fecha = new Date().toISOString();
    console.log('[' + fecha + '] ' + req.method + ' ' + req.originalUrl + ' -> ' + res.statusCode + ' (' + tiempo + ' ms)');
  });

  next();
}

module.exports = logger;
