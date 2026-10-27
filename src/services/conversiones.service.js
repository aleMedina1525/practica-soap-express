// Lógica del servicio ConversionesService
// La estructura debe coincidir con el WSDL: Servicio -> Puerto -> Operaciones

function CelsiusAFahrenheit(args) {
  const celsius = Number(args.celsius);
  const fahrenheit = celsius * 9 / 5 + 32;
  return { fahrenheit: fahrenheit };
}

function KilometrosAMillas(args) {
  const kilometros = Number(args.kilometros);
  const millas = kilometros * 0.621371;
  // Se redondea a 5 decimales para evitar resultados como 6.213710000000001
  return { millas: Math.round(millas * 100000) / 100000 };
}

const conversionesService = {
  ConversionesService: {
    ConversionesPort: {
      CelsiusAFahrenheit: CelsiusAFahrenheit,
      KilometrosAMillas: KilometrosAMillas
    }
  }
};

module.exports = conversionesService;
