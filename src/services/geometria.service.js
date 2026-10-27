// Lógica del servicio GeometriaService
// La estructura debe coincidir con el WSDL: Servicio -> Puerto -> Operaciones

function AreaRectangulo(args) {
  const base = Number(args.base);
  const altura = Number(args.altura);
  return { area: base * altura };
}

function PerimetroRectangulo(args) {
  const base = Number(args.base);
  const altura = Number(args.altura);
  return { perimetro: 2 * (base + altura) };
}

const geometriaService = {
  GeometriaService: {
    GeometriaPort: {
      AreaRectangulo: AreaRectangulo,
      PerimetroRectangulo: PerimetroRectangulo
    }
  }
};

module.exports = geometriaService;
