# Conclusiones

En esta práctica me quedó claro que SOAP es una forma de que dos programas se comuniquen mandándose mensajes en XML. Lo interesante es el sobre (Envelope): todas las peticiones y respuestas tienen la misma estructura, Envelope, Body y adentro la operación con sus datos. Gracias a eso, cualquier sistema que entienda SOAP sabe exactamente dónde buscar la información, sin importar en qué lenguaje esté hecho.

El WSDL es como el manual de instrucciones del servicio. Con solo abrir `/soap/conversiones?wsdl` en el navegador se ve qué operaciones hay, qué datos piden (por ejemplo `celsius`, o `base` y `altura`), de qué tipo son y en qué dirección está el servicio. O sea, otra persona podría usar mi servicio sin ver mi código, solo leyendo el contrato. Eso sí, hay que tener cuidado: si un nombre no coincide entre el WSDL y el código, la operación no funciona.

Una diferencia que se notó en el registro del middleware es que consultar el WSDL es un GET que solo devuelve el contrato, mientras que invocar una operación es un POST donde mando un XML con datos y recibo un resultado, como los 77 °F que salen de 25 °C.

Separar las rutas en un Router hizo que `app.js` quedara cortito y fácil de leer. Si mañana quiero agregar un tercer servicio, solo toco el archivo de rutas, sin mover lo demás.

El middleware de registro se justifica porque lo escribí una sola vez y registró todas las peticiones de los dos servicios: método, URL, código de estado y tiempo. Si lo hubiera metido en cada operación, tendría el mismo código repetido cuatro veces y sería más fácil equivocarse.

Por último, SOAP con WSDL conviene en sistemas donde se necesita un contrato estricto, como un banco que se conecta con el gobierno para validar datos, porque las dos partes saben exactamente qué mandar y qué recibir. En cambio, para una app móvil o una página web sencilla, una API REST con JSON es más fácil: los mensajes son más cortos y no hace falta armar todo un sobre XML.
