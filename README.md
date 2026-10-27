# Práctica: Servicios web SOAP con Express y WSDL

Aplicación en Node.js y Express que expone dos servicios web SOAP, cada uno con su contrato WSDL.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm start
```

## Estructura

```
src/
  server.js              Arranque del servidor
  app.js                 Configuración de Express (middleware + Router)
  config.js              Puerto de la aplicación
  middleware/logger.js   Middleware de registro de peticiones
  routes/soap.routes.js  Router que registra los servicios SOAP
pruebas/                 Peticiones XML de prueba
evidencias/              Capturas y resultados de las pruebas
```

> En construcción.
