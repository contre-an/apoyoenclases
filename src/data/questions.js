export function getTimerSeconds(points) {
  const map = { 100: 30, 200: 45, 300: 60, 400: 75, 500: 90, 600: 90, 800: 105, 1000: 120 };
  return map[points] ?? 30;
}

export const categories = [
  /* ═══════════════════════ PERÍMETRO ═══════════════════════ */
  {
    id: 'perim-circulos',
    name: '🍕 Perímetro Circular',
    color: '#C62828',
    type: 'perimetro',
    questions: [
      {
        id: 'pc-100', points: 100,
        question: '¿Cuál es la fórmula para calcular la circunferencia (perímetro) de un círculo?',
        context: '🍕 Imagina que quieres saber cuánto mide el borde de una pizza',
        options: ['C = 2 × π × r', 'C = π × r²', 'C = π × d²', 'C = r × r'],
        answer: 0,
        hint: 'La fórmula usa π (pi) ≈ 3.14 y el radio r del círculo',
        explanation: 'C = 2πr, donde r es el radio. ¡El borde de la pizza es su circunferencia!',
      },
      {
        id: 'pc-200', points: 200,
        question: 'Una pizza tiene diámetro de 30 cm. ¿Cuánto mide su borde? (π ≈ 3.14)',
        context: '🍕 El diámetro es el ancho completo de la pizza',
        options: ['94.2 cm', '188.4 cm', '47.1 cm', '706.5 cm'],
        answer: 0,
        hint: 'Primero halla el radio: radio = diámetro ÷ 2. Luego aplica C = 2 × π × r',
        explanation: 'Radio = 30÷2 = 15 cm → C = 2 × 3.14 × 15 = 94.2 cm',
      },
      {
        id: 'pc-300', points: 300,
        question: 'Un molde circular para torta tiene radio de 12 cm. ¿Cuánto papel mantequilla necesitas para rodear su borde? (π ≈ 3.14)',
        context: '🎂 El papel va justo en el contorno del molde',
        options: ['75.36 cm', '37.68 cm', '452.16 cm', '150.72 cm'],
        answer: 0,
        hint: 'Aplica directamente C = 2 × π × r con r = 12 cm',
        explanation: 'C = 2 × 3.14 × 12 = 75.36 cm de papel mantequilla',
      },
      {
        id: 'pc-400', points: 400,
        question: 'Tienes dos pizzas: una con radio 10 cm y otra con radio 15 cm. ¿Cuánto más grande es el borde de la segunda? (π ≈ 3.14)',
        context: '🍕🍕 Compara los bordes de las dos pizzas',
        options: ['31.4 cm', '15.7 cm', '62.8 cm', '5 cm'],
        answer: 0,
        hint: 'La diferencia = 2π×(r₂ - r₁). Calcula 2 × 3.14 × (15 - 10)',
        explanation: 'C₂ - C₁ = 2π(15-10) = 2 × 3.14 × 5 = 31.4 cm',
      },
      {
        id: 'pc-500', points: 500,
        question: 'Un aro decorador de tortas tiene una circunferencia de 125.6 cm. ¿Cuál es su radio? (π ≈ 3.14)',
        context: '🎂 Conoces el borde total, ¡calcula el radio!',
        options: ['20 cm', '10 cm', '40 cm', '25 cm'],
        answer: 0,
        hint: 'Despeja r: si C = 2πr, entonces r = C ÷ (2 × π) = 125.6 ÷ 6.28',
        explanation: 'r = C ÷ (2π) = 125.6 ÷ 6.28 = 20 cm',
      },
    ],
  },
  {
    id: 'perim-rect',
    name: '🍳 Perímetro Rectangular',
    color: '#1565C0',
    type: 'perimetro',
    questions: [
      {
        id: 'pr-100', points: 100,
        question: '¿Cuál es la fórmula del perímetro de un rectángulo?',
        context: '🍳 Una bandeja rectangular tiene largo y ancho',
        options: ['P = 2 × (largo + ancho)', 'P = largo × ancho', 'P = 4 × lado', 'P = largo + ancho'],
        answer: 0,
        hint: 'Hay 2 lados largos y 2 lados anchos. Suma todos',
        explanation: 'P = 2(l + a). Sumamos: largo + ancho + largo + ancho',
      },
      {
        id: 'pr-200', points: 200,
        question: 'Una tabla de cortar mide 40 cm de largo y 25 cm de ancho. ¿Cuál es su perímetro?',
        context: '🔪 La tabla tiene forma rectangular',
        options: ['130 cm', '65 cm', '1000 cm', '260 cm'],
        answer: 0,
        hint: 'P = 2 × (40 + 25). Primero suma 40 + 25, luego multiplica por 2',
        explanation: 'P = 2 × (40 + 25) = 2 × 65 = 130 cm',
      },
      {
        id: 'pr-300', points: 300,
        question: 'Un molde para bizcochos mide 35 cm × 22 cm. ¿Cuánto papel de aluminio necesitas para rodear todos sus bordes?',
        context: '🧁 El papel rodea todo el contorno del molde',
        options: ['114 cm', '57 cm', '770 cm', '228 cm'],
        answer: 0,
        hint: 'Reemplaza en P = 2 × (largo + ancho) con largo=35 y ancho=22',
        explanation: 'P = 2 × (35 + 22) = 2 × 57 = 114 cm de papel aluminio',
      },
      {
        id: 'pr-400', points: 400,
        question: 'Una bandeja rectangular tiene perímetro de 160 cm. Si su largo es 50 cm, ¿cuánto mide su ancho?',
        context: '🍳 Conoces el perímetro total y el largo, ¡halla el ancho!',
        options: ['30 cm', '60 cm', '110 cm', '15 cm'],
        answer: 0,
        hint: 'Despeja: ancho = P÷2 - largo = 160÷2 - 50',
        explanation: '160 = 2(50 + a) → 80 = 50 + a → a = 30 cm',
      },
      {
        id: 'pr-500', points: 500,
        question: 'Quieres poner cinta decorativa en una bandeja de 45 cm × 30 cm. La cinta cuesta $2 por centímetro. ¿Cuánto pagarás en total?',
        context: '🎀 La cinta rodea todo el contorno de la bandeja',
        options: ['$300', '$150', '$2.700', '$600'],
        answer: 0,
        hint: 'Primero calcula el perímetro total, luego multiplícalo por $2',
        explanation: 'P = 2(45+30) = 150 cm → Costo = 150 × $2 = $300',
      },
    ],
  },
  {
    id: 'perim-tri',
    name: '🧀 Perímetro Triangular',
    color: '#E65100',
    type: 'perimetro',
    questions: [
      {
        id: 'pt-100', points: 100,
        question: '¿Cómo se calcula el perímetro de un triángulo?',
        context: '🧀 Una rebanada de queso suele tener forma triangular',
        options: ['Sumando sus tres lados', 'Base × altura', 'Base × altura ÷ 2', 'Multiplicando los tres lados'],
        answer: 0,
        hint: 'Un triángulo tiene 3 lados. Sumarlos todos te da el perímetro',
        explanation: 'P de un triángulo = a + b + c (suma de los tres lados)',
      },
      {
        id: 'pt-200', points: 200,
        question: 'Un trozo triangular de queso tiene lados de 8 cm, 10 cm y 12 cm. ¿Cuál es su perímetro?',
        context: '🧀 Suma los tres lados del triángulo',
        options: ['30 cm', '20 cm', '960 cm', '15 cm'],
        answer: 0,
        hint: 'Suma los tres valores: 8 + 10 + 12 = ?',
        explanation: 'P = 8 + 10 + 12 = 30 cm',
      },
      {
        id: 'pt-300', points: 300,
        question: 'Una rebanada triangular de sandía tiene todos sus lados iguales a 15 cm. ¿Cuál es su perímetro?',
        context: '🍉 ¡Sus tres lados son iguales! Es un triángulo equilátero',
        options: ['45 cm', '30 cm', '225 cm', '60 cm'],
        answer: 0,
        hint: 'Triángulo equilátero: P = 3 × lado. Multiplica 3 × 15',
        explanation: 'Triángulo equilátero: P = 3 × 15 = 45 cm',
      },
      {
        id: 'pt-400', points: 400,
        question: 'Un molde triangular tiene perímetro de 54 cm. Dos de sus lados miden 18 cm cada uno. ¿Cuánto mide el tercer lado?',
        context: '🔺 Conoces el perímetro total y dos de los lados',
        options: ['18 cm', '36 cm', '9 cm', '27 cm'],
        answer: 0,
        hint: 'Tercer lado = Perímetro total − lado₁ − lado₂ = 54 - 18 - 18',
        explanation: 'Tercer lado = 54 - 18 - 18 = 18 cm (¡resultó equilátero!)',
      },
      {
        id: 'pt-500', points: 500,
        question: 'Una rebanada triangular tiene lados (2x+3) cm, (3x−1) cm y (x+4) cm con perímetro 36 cm. ¿Cuánto mide el lado más largo?',
        context: '🍕 Resuelve la ecuación para hallar x y luego cada lado',
        options: ['14 cm', '13 cm', '9 cm', '12 cm'],
        answer: 0,
        hint: 'Suma los tres lados e iguala a 36: (2x+3)+(3x-1)+(x+4)=36, simplifica y halla x',
        explanation: '6x+6=36 → x=5 → Lados: 13, 14 y 9 cm. El mayor es 14 cm',
      },
    ],
  },

  /* ═══════════════════════ ÁREA ═══════════════════════ */
  {
    id: 'area-circulos',
    name: '📐 Área Circular',
    color: '#6A1B9A',
    type: 'area',
    questions: [
      {
        id: 'ac-100', points: 100,
        question: '¿Cuál es la fórmula para calcular el área de un círculo?',
        context: '🍕 ¿Cuánta superficie tiene la parte interior de tu pizza?',
        options: ['A = π × r²', 'A = 2 × π × r', 'A = π × d', 'A = r × r × r'],
        answer: 0,
        hint: 'El área usa r² (radio al cuadrado). La fórmula es A = π × r²',
        explanation: 'A = πr². ¡Así calculamos la superficie interior de la pizza!',
      },
      {
        id: 'ac-200', points: 200,
        question: 'Una pizza tiene radio de 15 cm. ¿Cuánto mide su superficie? (π ≈ 3.14)',
        context: '🍕 Calcula cuánta pizza hay en total',
        options: ['706.5 cm²', '94.2 cm²', '1413 cm²', '353.25 cm²'],
        answer: 0,
        hint: 'A = π × r². Primero calcula 15² = 225, luego multiplica por 3.14',
        explanation: 'A = 3.14 × 15² = 3.14 × 225 = 706.5 cm²',
      },
      {
        id: 'ac-300', points: 300,
        question: 'Un molde circular para torta tiene diámetro de 24 cm. ¿Cuál es su área? (π ≈ 3.14)',
        context: '🎂 El diámetro es el ancho total del molde',
        options: ['452.16 cm²', '75.36 cm²', '904.32 cm²', '226.08 cm²'],
        answer: 0,
        hint: 'Radio = diámetro ÷ 2 = 12 cm. Luego A = 3.14 × 12²',
        explanation: 'r = 24÷2 = 12 cm → A = 3.14 × 144 = 452.16 cm²',
      },
      {
        id: 'ac-400', points: 400,
        question: 'Tienes dos pizzas: una con radio 10 cm y otra con radio 20 cm. ¿Cuántas veces más grande es el área de la segunda?',
        context: '🍕🍕 Compara la superficie de ambas pizzas',
        options: ['4 veces más grande', '2 veces más grande', '8 veces más grande', '10 veces más grande'],
        answer: 0,
        hint: 'Calcula A₁ = π×10² y A₂ = π×20², luego divide A₂ ÷ A₁',
        explanation: 'A₂/A₁ = (20²)/(10²) = 400/100 = 4 veces. ¡Al doblar el radio el área se cuadriplica!',
      },
      {
        id: 'ac-500', points: 500,
        question: 'Una pizza circular tiene área de 314 cm². ¿Cuál es su radio? (π ≈ 3.14)',
        context: '🍕 Conoces el área, ¡ahora halla el radio!',
        options: ['10 cm', '5 cm', '20 cm', '50 cm'],
        answer: 0,
        hint: 'Despeja r²: si A = πr², entonces r² = A÷π = 314÷3.14 = 100. Luego √100 = ?',
        explanation: 'r² = 314 ÷ 3.14 = 100 → r = √100 = 10 cm',
      },
    ],
  },
  {
    id: 'area-rect',
    name: '🥘 Área Rectangular',
    color: '#00695C',
    type: 'area',
    questions: [
      {
        id: 'ar-100', points: 100,
        question: '¿Cuál es la fórmula del área de un rectángulo?',
        context: '🥘 El área indica cuánta superficie tiene la bandeja',
        options: ['A = largo × ancho', 'A = 2(largo + ancho)', 'A = 4 × lado', 'A = largo + ancho'],
        answer: 0,
        hint: 'Área = la superficie interior = largo × ancho',
        explanation: 'A = largo × ancho. Es la superficie interior del rectángulo',
      },
      {
        id: 'ar-200', points: 200,
        question: 'Una tabla de cortar mide 40 cm × 25 cm. ¿Cuál es su área?',
        context: '🔪 ¿Cuánta superficie de corte tienes disponible?',
        options: ['1000 cm²', '130 cm', '500 cm²', '65 cm'],
        answer: 0,
        hint: 'A = 40 × 25. Multiplica directamente',
        explanation: 'A = 40 × 25 = 1000 cm²',
      },
      {
        id: 'ar-300', points: 300,
        question: 'Una bandeja cuadrada para hornear tiene lado de 30 cm. ¿Cuál es su área?',
        context: '⬜ Un cuadrado tiene todos sus lados iguales',
        options: ['900 cm²', '120 cm', '3600 cm²', '450 cm²'],
        answer: 0,
        hint: 'Cuadrado: A = lado². Calcula 30 × 30',
        explanation: 'A = 30² = 30 × 30 = 900 cm²',
      },
      {
        id: 'ar-400', points: 400,
        question: 'Una receta necesita una bandeja con área de 600 cm². Si el ancho es 20 cm, ¿cuánto mide el largo?',
        context: '🍳 Conoces el área y el ancho, ¡halla el largo!',
        options: ['30 cm', '60 cm', '15 cm', '580 cm'],
        answer: 0,
        hint: 'Despeja largo: si A = largo × ancho, entonces largo = A ÷ ancho = 600 ÷ 20',
        explanation: 'largo = A ÷ ancho = 600 ÷ 20 = 30 cm',
      },
      {
        id: 'ar-500', points: 500,
        question: 'Quieres forrar con papel el fondo de una bandeja de 45 cm × 35 cm. El papel cuesta $5 por cada 100 cm². ¿Cuánto pagarás?',
        context: '📄 El papel cubre toda la superficie del fondo',
        options: ['$78.75', '$157.50', '$39.38', '$400'],
        answer: 0,
        hint: 'Primero halla el área: A = 45 × 35. Luego divide entre 100 y multiplica por $5',
        explanation: 'A = 45 × 35 = 1575 cm² → Costo = (1575 ÷ 100) × $5 = $78.75',
      },
    ],
  },

  /* ═══════════════════════ MIXTO ═══════════════════════ */
  {
    id: 'mixto',
    name: '👨‍🍳 Desafío Mixto',
    color: '#2E7D32',
    type: 'mixto',
    questions: [
      {
        id: 'mx-200', points: 200,
        question: 'Un molde cuadrado tiene área de 225 cm². ¿Cuál es su perímetro?',
        context: '⬜ Primero halla el lado, luego el perímetro',
        options: ['60 cm', '30 cm', '900 cm', '15 cm'],
        answer: 0,
        hint: 'lado = √225 = 15 cm (¿cuánto multiplicado por sí mismo da 225?). Luego P = 4 × lado',
        explanation: 'lado = √225 = 15 cm → P = 4 × 15 = 60 cm',
      },
      {
        id: 'mx-400', points: 400,
        question: 'Necesitas papel para el fondo y cinta para el borde de una pizza con radio 20 cm. ¿Cuánto necesitas de cada uno? (π ≈ 3.14)',
        context: '🍕 Área = fondo (cm²) · Perímetro = borde (cm)',
        options: ['1256 cm² y 125.6 cm', '125.6 cm² y 1256 cm', '628 cm² y 251.2 cm', '400 cm² y 40 cm'],
        answer: 0,
        hint: 'Para el fondo usa A = πr². Para el borde usa C = 2πr. ¡Son fórmulas distintas!',
        explanation: 'Área: π×20² = 1256 cm² (fondo). Circunferencia: 2π×20 = 125.6 cm (borde)',
      },
      {
        id: 'mx-600', points: 600,
        question: 'Una bandeja rectangular tiene perímetro de 80 cm y largo de 25 cm. ¿Cuál es su área?',
        context: '🍳 Con el perímetro halla el ancho, luego el área',
        options: ['375 cm²', '1000 cm²', '750 cm²', '300 cm²'],
        answer: 0,
        hint: 'Primero halla el ancho: ancho = P÷2 - largo = 80÷2 - 25. Luego A = largo × ancho',
        explanation: 'Ancho = 80÷2 - 25 = 40 - 25 = 15 cm → A = 25 × 15 = 375 cm²',
      },
      {
        id: 'mx-800', points: 800,
        question: 'Tienes exactamente 62.8 cm de masa para el borde de una pizza circular. ¿Cuánta superficie (área) tendrá? (π ≈ 3.14)',
        context: '🍕 Del borde (perímetro) debes hallar el área',
        options: ['314 cm²', '628 cm²', '157 cm²', '100 cm²'],
        answer: 0,
        hint: 'Paso 1: r = C ÷ (2π) = 62.8 ÷ 6.28. Paso 2: A = π × r²',
        explanation: 'r = 62.8 ÷ 6.28 = 10 cm → A = 3.14 × 10² = 314 cm²',
      },
      {
        id: 'mx-1000', points: 1000,
        question: 'Una cocina tiene zona circular (radio 3 m) y zona rectangular (4 m × 3 m). ¿Cuál es el área total de la cocina? (π ≈ 3.14)',
        context: '🏠 Suma las dos áreas por separado y luego combínalas',
        options: ['40.26 m²', '66.52 m²', '28.26 m²', '12 m²'],
        answer: 0,
        hint: 'Área circular: π×3² = ? · Área rectangular: 4×3 = ? · Suma ambas',
        explanation: 'A_círculo: 3.14×9 = 28.26 m² + A_rect: 4×3 = 12 m² = 40.26 m² total',
      },
    ],
  },
];

export const TOTAL_QUESTIONS = categories.reduce((sum, cat) => sum + cat.questions.length, 0);

// ─── Preguntas adicionales del pool (5 por valor = 25 nuevas) ────────────────
const extraQuestionsCocina = {
  100: [
    {
      id: 'c100a', points: 100,
      question: 'Una bandeja cuadrada tiene 20 cm de lado. ¿Cuánto mide su perímetro?',
      context: '🍳 El chef necesita saber cuánta cinta decorativa poner alrededor de la bandeja',
      options: ['80 cm', '40 cm', '400 cm', '20 cm'],
      answer: 0,
      hint: 'Perímetro de un cuadrado = 4 × lado = 4 × 20',
      explanation: 'P = 4 × 20 = 80 cm de cinta decorativa.',
    },
    {
      id: 'c100b', points: 100,
      question: 'Un plato circular tiene radio de 10 cm. ¿Cuánto mide su circunferencia? (π ≈ 3.14)',
      context: '🍽️ El cocinero quiere decorar el borde del plato con salsa',
      options: ['62.8 cm', '31.4 cm', '314 cm', '125.6 cm'],
      answer: 0,
      hint: 'Circunferencia = 2 × π × r = 2 × 3.14 × 10',
      explanation: 'C = 2 × 3.14 × 10 = 62.8 cm de borde.',
    },
    {
      id: 'c100c', points: 100,
      question: 'Una tabla de picar mide 30 cm de largo y 20 cm de ancho. ¿Cuánto mide su área?',
      context: '🔪 El cocinero necesita saber cuánta superficie tiene para preparar ingredientes',
      options: ['600 cm²', '100 cm', '300 cm²', '1,200 cm²'],
      answer: 0,
      hint: 'Área = largo × ancho = 30 × 20',
      explanation: 'Área = 30 × 20 = 600 cm² de superficie de trabajo.',
    },
    {
      id: 'c100d', points: 100,
      question: 'Una bandeja de hornear mide 40 cm de largo y 30 cm de ancho. ¿Cuánto mide su área?',
      context: '🧁 El pastelero necesita saber cuánta superficie tiene la bandeja de hornear',
      options: ['1,200 cm²', '140 cm', '600 cm²', '2,400 cm²'],
      answer: 0,
      hint: 'Área = largo × ancho = 40 × 30',
      explanation: 'Área = 40 × 30 = 1,200 cm² de superficie para hornear.',
    },
    {
      id: 'c100e', points: 100,
      question: 'Una sartén cuadrada tiene 25 cm de lado. ¿Cuánto mide su perímetro?',
      context: '🍳 Las sartenes cuadradas son populares en cocinas profesionales',
      options: ['100 cm', '50 cm', '625 cm', '25 cm'],
      answer: 0,
      hint: 'P = 4 × lado = 4 × 25',
      explanation: 'P = 4 × 25 = 100 cm de contorno.',
    },
  ],
  200: [
    {
      id: 'c200a', points: 200,
      question: 'Un molde cuadrado tiene área de 400 cm². ¿Cuánto mide su perímetro?',
      context: '🎂 Conocemos el área del molde cuadrado. Primero hallamos el lado y luego el perímetro',
      options: ['80 cm', '20 cm', '40 cm', '160 cm'],
      answer: 0,
      hint: 'Lado = √400 = 20 cm. Perímetro = 4 × lado',
      explanation: 'Lado = √400 = 20 cm. P = 4 × 20 = 80 cm.',
    },
    {
      id: 'c200b', points: 200,
      question: 'Un sartén circular tiene diámetro de 28 cm. ¿Cuánto mide su circunferencia? (π ≈ 3.14)',
      context: '🍳 El chef quiere saber la longitud del borde del sartén circular',
      options: ['87.92 cm', '43.96 cm', '175.84 cm', '61.54 cm'],
      answer: 0,
      hint: 'C = π × diámetro = 3.14 × 28',
      explanation: 'C = 3.14 × 28 = 87.92 cm de circunferencia.',
    },
    {
      id: 'c200c', points: 200,
      question: 'Una bandeja rectangular tiene perímetro de 100 cm y largo de 35 cm. ¿Cuánto mide de ancho?',
      context: '🍳 Conocemos el perímetro total y el largo. Debemos despejar el ancho',
      options: ['15 cm', '65 cm', '30 cm', '50 cm'],
      answer: 0,
      hint: 'P = 2×(L+A) → 100 = 2×(35+A) → 50 = 35+A → A = ?',
      explanation: '100 = 2×(35+A) → 50 = 35+A → A = 15 cm.',
    },
    {
      id: 'c200d', points: 200,
      question: 'Dos bandejas cuadradas de 20 cm×20 cm se juntan por un lado de 20 cm. ¿Cuánto mide el perímetro exterior del conjunto?',
      context: '🍳 Al unir dos bandejas se forma un rectángulo. Solo se mide el borde exterior',
      options: ['120 cm', '160 cm', '80 cm', '40 cm'],
      answer: 0,
      hint: 'El conjunto mide 40 cm × 20 cm. P = 2 × (40 + 20)',
      explanation: 'Conjunto = 40 cm × 20 cm. P = 2 × (40 + 20) = 120 cm.',
    },
    {
      id: 'c200e', points: 200,
      question: 'Un pastel circular tiene radio de 12 cm. ¿Cuánto mide su área? (π ≈ 3.14)',
      context: '🎂 El pastelero necesita saber cuánta cobertura de fondant usar en la superficie',
      options: ['452.16 cm²', '75.36 cm', '226.08 cm²', '904.32 cm²'],
      answer: 0,
      hint: 'Área = π × r² = 3.14 × 12²',
      explanation: 'Área = 3.14 × 144 = 452.16 cm² de superficie.',
    },
  ],
  300: [
    {
      id: 'c300a', points: 300,
      question: 'Un molde rectangular: el largo es el doble del ancho. Si el perímetro es 84 cm, ¿cuánto mide el largo?',
      context: '🧁 Conocemos la relación largo/ancho y el perímetro. Despejamos el largo',
      options: ['28 cm', '14 cm', '42 cm', '56 cm'],
      answer: 0,
      hint: 'Si ancho = x, largo = 2x. P: 2×(x+2x)=84 → 6x=84 → x=14. Largo = 2×14',
      explanation: 'Ancho = 14 cm, Largo = 28 cm. Verifica: P = 2×(14+28) = 84 cm ✓',
    },
    {
      id: 'c300b', points: 300,
      question: 'Una base de torta semicircular tiene radio de 15 cm. ¿Cuál es su área? (π ≈ 3.14)',
      context: '🎂 Las tartas semicirculares son tendencia en repostería. El área es la mitad del círculo completo',
      options: ['353.25 cm²', '706.5 cm²', '47.1 cm', '176.63 cm²'],
      answer: 0,
      hint: 'Área del semicírculo = (π × r²) ÷ 2 = (3.14 × 15²) ÷ 2',
      explanation: 'A = (3.14 × 225) ÷ 2 = 706.5 ÷ 2 = 353.25 cm².',
    },
    {
      id: 'c300c', points: 300,
      question: 'Una pizza tiene diámetro de 40 cm. ¿Cuánto mide su área? (π ≈ 3.14)',
      context: '🍕 ¡La pizza más grande del restaurante! Calculamos su superficie total',
      options: ['1,256 cm²', '125.6 cm', '3,140 cm²', '628 cm²'],
      answer: 0,
      hint: 'Radio = 40÷2 = 20 cm. Área = π × r² = 3.14 × 20²',
      explanation: 'r = 20 cm. Área = 3.14 × 400 = 1,256 cm² de pizza.',
    },
    {
      id: 'c300d', points: 300,
      question: 'Tienes cinta para decorar: un pastel cuadrado de 20 cm de lado y uno circular de radio 10 cm. ¿Cuántos cm de cinta necesitas en total? (π ≈ 3.14)',
      context: '🎂 Necesitas decorar el borde de ambos pasteles con una cinta continua',
      options: ['142.8 cm', '80 cm', '62.8 cm', '205.6 cm'],
      answer: 0,
      hint: 'P_cuadrado = 4×20 = 80 cm. C_círculo = 2×3.14×10 = 62.8 cm. Total = 80 + 62.8',
      explanation: 'P = 80 cm + C = 62.8 cm. Total = 142.8 cm de cinta.',
    },
    {
      id: 'c300e', points: 300,
      question: 'Una bandeja triangular tiene lados de 25 cm, 30 cm y 35 cm. ¿Cuántos cm de decoración necesita para rodear su borde?',
      context: '🎨 Las bandejas triangulares son originales para presentar postres',
      options: ['90 cm', '60 cm', '45 cm', '120 cm'],
      answer: 0,
      hint: 'Perímetro del triángulo = suma de los 3 lados: 25 + 30 + 35',
      explanation: 'P = 25 + 30 + 35 = 90 cm de decoración.',
    },
  ],
  400: [
    {
      id: 'c400a', points: 400,
      question: 'Un restaurante decora el borde de una pizza. La pizza tiene área de 706.5 cm². ¿Cuántos cm mide el borde? (π ≈ 3.14)',
      context: '🍕 Conocemos el área de la pizza circular. Debemos hallar su circunferencia (borde)',
      options: ['94.2 cm', '47.1 cm', '188.4 cm', '706.5 cm'],
      answer: 0,
      hint: 'Área = πr² → 706.5 = 3.14×r² → r² = 225 → r = 15 cm. Borde = 2×π×r',
      explanation: 'r = 15 cm. Borde = 2 × 3.14 × 15 = 94.2 cm.',
    },
    {
      id: 'c400b', points: 400,
      question: 'Una bandeja rectangular: el largo es el triple del ancho. Si el área es 1,200 cm², ¿cuánto mide el perímetro?',
      context: '🍳 Conocemos la relación largo/ancho y el área. Hallamos dimensiones y luego el perímetro',
      options: ['160 cm', '80 cm', '240 cm', '320 cm'],
      answer: 0,
      hint: 'largo = 3×ancho. Área = 3×ancho² = 1,200 → ancho² = 400 → ancho = 20 cm, largo = 60 cm',
      explanation: 'ancho=20 cm, largo=60 cm. P = 2×(60+20) = 160 cm.',
    },
    {
      id: 'c400c', points: 400,
      question: 'Dos pasteles circulares: uno con radio 8 cm y otro con radio 12 cm. ¿Cuánto mide el área total de ambos? (π ≈ 3.14)',
      context: '🎂 El pastelero necesita calcular el fondant total para cubrir ambos pasteles',
      options: ['653.12 cm²', '200.96 cm²', '452.16 cm²', '1,306.24 cm²'],
      answer: 0,
      hint: 'A₁ = 3.14×8² = 3.14×64. A₂ = 3.14×12² = 3.14×144. Total = A₁ + A₂',
      explanation: 'A₁ = 200.96 cm². A₂ = 452.16 cm². Total = 653.12 cm² de fondant.',
    },
    {
      id: 'c400d', points: 400,
      question: 'Una bandeja cuadrada tiene perímetro de 120 cm. ¿Cuánto mide su área?',
      context: '🍳 Conocemos el perímetro de la bandeja cuadrada. Hallamos el lado y luego el área',
      options: ['900 cm²', '30 cm', '1,800 cm²', '3,600 cm²'],
      answer: 0,
      hint: 'Lado = P ÷ 4 = 120 ÷ 4 = 30 cm. Área = lado²',
      explanation: 'Lado = 30 cm. Área = 30² = 900 cm².',
    },
    {
      id: 'c400e', points: 400,
      question: 'Un molde rectangular tiene largo de (2x+5) cm y ancho de (x+3) cm. Si x = 5, ¿cuánto mide el perímetro?',
      context: '🧁 Las medidas del molde están expresadas con una variable. Sustituimos x para hallar el perímetro',
      options: ['46 cm', '23 cm', '92 cm', '40 cm'],
      answer: 0,
      hint: 'Sustituye x=5: largo = 2×5+5 = 15 cm, ancho = 5+3 = 8 cm. P = 2×(15+8)',
      explanation: 'largo = 15 cm, ancho = 8 cm. P = 2 × (15+8) = 46 cm.',
    },
  ],
  500: [
    {
      id: 'c500a', points: 500,
      question: 'Una pizza circular tiene área de 1,256 cm². ¿Cuántos cm mide su borde para decorar? (π ≈ 3.14)',
      context: '🍕 El chef decora el borde de su pizza estrella. Del área calcula la circunferencia',
      options: ['125.6 cm', '62.8 cm', '251.2 cm', '400 cm'],
      answer: 0,
      hint: 'Área = πr² → r² = 1,256÷3.14 = 400 → r = 20 cm. Borde = 2×π×r',
      explanation: 'r = 20 cm. Borde = 2 × 3.14 × 20 = 125.6 cm.',
    },
    {
      id: 'c500b', points: 500,
      question: 'Una cocina tiene zona circular (radio 2 m) y zona rectangular (6 m×4 m). ¿Cuánto mide el área total? (π ≈ 3.14)',
      context: '🏠 La cocina combina una isla circular y una zona de trabajo rectangular',
      options: ['36.56 m²', '24 m²', '12.56 m²', '48 m²'],
      answer: 0,
      hint: 'A_circular = π×2² = 3.14×4 = 12.56 m². A_rect = 6×4 = 24 m². Total = ?',
      explanation: 'A_circ = 12.56 m² + A_rect = 24 m² = 36.56 m² de área total.',
    },
    {
      id: 'c500c', points: 500,
      question: 'Un chef forra el fondo circular (radio 10 cm) con papel ($5 por 100 cm²) y decora el borde con chocolate ($2 por cm). ¿Cuánto gasta en total? (π ≈ 3.14)',
      context: '🎂 El chef calcula el costo real de decorar un molde circular de alta gama',
      options: ['$141.30', '$125.60', '$15.70', '$282.60'],
      answer: 0,
      hint: 'A = 3.14×100 = 314 cm². Papel = (314÷100)×$5. C = 62.8 cm. Chocolate = 62.8×$2. Suma',
      explanation: 'Papel: 3.14×$5 = $15.70. Chocolate: 62.8×$2 = $125.60. Total = $141.30.',
    },
    {
      id: 'c500d', points: 500,
      question: 'Una bandeja semicircular tiene radio de 20 cm. ¿Cuánto mide su perímetro total (borde recto + borde curvo)? (π ≈ 3.14)',
      context: '🍳 Las bandejas semicirculares se usan para presentar quesos. Su borde tiene dos partes',
      options: ['102.8 cm', '62.8 cm', '125.6 cm', '82.8 cm'],
      answer: 0,
      hint: 'Borde curvo (semicircunferencia) = π×r = 3.14×20 = 62.8 cm. Borde recto (diámetro) = 2×r = 40 cm',
      explanation: 'Semicircunferencia = 62.8 cm. Diámetro = 40 cm. Perímetro total = 62.8 + 40 = 102.8 cm.',
    },
    {
      id: 'c500e', points: 500,
      question: 'Un restaurante tiene 3 mesas circulares (radio 60 cm) y 4 mesas cuadradas (lado 80 cm). ¿Cuántos cm² de mantel necesitan en total? (π ≈ 3.14)',
      context: '🍽️ El administrador del restaurante calcula la tela necesaria para todos los manteles',
      options: ['59,512 cm²', '33,912 cm²', '25,600 cm²', '47,824 cm²'],
      answer: 0,
      hint: 'Mesas circulares: 3×(3.14×60²) = 3×11,304. Mesas cuadradas: 4×(80²) = 4×6,400. Suma',
      explanation: '3 mesas circ: 3×11,304 = 33,912 cm². 4 mesas cuad: 4×6,400 = 25,600 cm². Total = 59,512 cm².',
    },
  ],
};

// Pool de preguntas por valor (5 existentes + 5 nuevas = 10 por valor)
export const questionPool = (() => {
  const vals = [100, 200, 300, 400, 500];
  return Object.fromEntries(vals.map(pts => [
    pts,
    [
      ...categories.flatMap(c => c.questions.filter(q => q.points === pts)),
      ...extraQuestionsCocina[pts],
    ],
  ]));
})();

function shuffleCocina(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CAT_COLORS_C = [
  '#C62828', '#1565C0', '#E65100', '#6A1B9A', '#00695C',
  '#2E7D32', '#AD1457', '#F57F17', '#0D47A1', '#37474F',
];

// Construye las categorías del tablero según el número de equipos.
// Selecciona el menor múltiplo de numTeams que sea ≥ 5 y ≤ tamaño del pool.
export function buildGameCategoriesCocina(numTeams) {
  const POINT_VALUES = [100, 200, 300, 400, 500];
  const poolSize = Math.min(...POINT_VALUES.map(pts => questionPool[pts].length));
  const numCols = Math.min(Math.ceil(5 / numTeams) * numTeams, poolSize);

  const selected = {};
  for (const pts of POINT_VALUES) {
    selected[pts] = shuffleCocina([...questionPool[pts]]).slice(0, numCols);
  }

  return Array.from({ length: numCols }, (_, i) => ({
    id: `slot-${i}`,
    name: String.fromCharCode(65 + i),
    color: CAT_COLORS_C[i % CAT_COLORS_C.length],
    type: 'pool',
    questions: POINT_VALUES.map(pts => selected[pts][i]),
  }));
}
