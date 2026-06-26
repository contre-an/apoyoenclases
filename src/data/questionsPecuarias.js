export function getTimerSeconds(points) {
  const map = { 100: 30, 200: 45, 300: 60, 400: 75, 500: 90, 600: 90, 800: 105, 1000: 120 };
  return map[points] ?? 30;
}

export const categoriesPecuarias = [
  /* ═══════════════════════ PERÍMETRO 1 ═══════════════════════ */
  {
    id: 'corrales-perim',
    name: '🐄 Corrales y Cercas',
    color: '#5D4037',
    type: 'perimetro',
    questions: [
      {
        id: 'cp-100', points: 100,
        question: 'Un corral rectangular para bovinos mide 12 m de largo y 8 m de ancho. ¿Cuántos metros de alambre (perímetro) se necesitan para cercarlo?',
        context: '🐄 El ganadero necesita saber cuánto alambre de púas comprar para cercar el corral',
        options: ['40 m', '96 m', '20 m', '80 m'],
        answer: 0,
        hint: 'Perímetro de un rectángulo = 2 × (largo + ancho). Suma largo y ancho, luego multiplica por 2',
        explanation: 'P = 2 × (12 + 8) = 2 × 20 = 40 m de cerca. ¡Así calculamos cuánto alambre comprar!',
      },
      {
        id: 'cp-200', points: 200,
        question: 'Una cerda lactante necesita un corral cuadrado de 5 m². ¿Cuánto mide el perímetro de ese corral?',
        context: '🐷 Las cerdas madres necesitan un espacio mínimo. Con el área del corral cuadrado podemos hallar su borde',
        options: ['8.94 m', '20 m', '4 m', '25 m'],
        answer: 0,
        hint: 'Lado = √5 ≈ 2.236 m. Perímetro = 4 × lado',
        explanation: 'Lado = √5 ≈ 2.236 m. Perímetro = 4 × 2.236 ≈ 8.94 m de cerca para el corral de la cerda.',
      },
      {
        id: 'cp-300', points: 300,
        question: 'Una finca ganadera tiene un potrero triangular. Sus tres lados miden 300 m, 400 m y 500 m. ¿Cuántos metros de cerca necesita?',
        context: '🌿 Los potreros en Colombia rara vez son rectangulares. Muchos siguen la topografía del terreno',
        options: ['1,200 m', '600 m', '60,000 m²', '400 m'],
        answer: 0,
        hint: 'Perímetro de un triángulo = suma de los 3 lados: 300 + 400 + 500',
        explanation: 'P = 300 + 400 + 500 = 1,200 m de cerca. ¡Siempre suma todos los lados sin importar la forma!',
      },
      {
        id: 'cp-400', points: 400,
        question: 'Un porcicultor construye una cerca alrededor de 4 corrales (cada uno de 5m×4m) dispuestos en fila. ¿Cuánto mide el perímetro del conjunto entero?',
        context: '🐷 Los 4 corrales forman un bloque de 20m×4m. Solo se cerca el borde exterior, no las paredes internas',
        options: ['48 m', '80 m', '160 m', '24 m'],
        answer: 0,
        hint: 'El bloque completo mide 20 m de largo (5×4) y 4 m de ancho. Perímetro = 2×(20+4)',
        explanation: 'Bloque = 20m × 4m. P = 2×(20+4) = 48 m. Solo se cerca el perímetro exterior.',
      },
      {
        id: 'cp-500', points: 500,
        question: 'Un potrero cuadrado de 1.44 hectáreas se cerca con 4 hilos de alambre de púas. ¿Cuántos metros de alambre se necesitan en total?',
        context: '🌿 En Colombia las cercas ganaderas usan 4 a 5 hilos de alambre. El total es el perímetro multiplicado por el número de hilos',
        options: ['1,920 m', '480 m', '960 m', '2,400 m'],
        answer: 0,
        hint: '1.44 ha = 14,400 m². Lado = √14,400 = 120 m. Perímetro = 4×120 = 480 m. Alambre total = 480 × 4 hilos',
        explanation: 'Lado = √14,400 = 120 m. P = 480 m. Total alambre = 480 × 4 hilos = 1,920 m. ¡Multiplica el perímetro por el número de hilos!',
      },
    ],
  },

  /* ═══════════════════════ PERÍMETRO 2 ═══════════════════════ */
  {
    id: 'galpones-perim',
    name: '🐔 Galpones Avícolas',
    color: '#E65100',
    type: 'perimetro',
    questions: [
      {
        id: 'gp-100', points: 100,
        question: 'Un galpón rectangular de pollos mide 50 m de largo y 12 m de ancho. ¿Cuánto mide su perímetro?',
        context: '🐔 El avicultor necesita calcular el perímetro para saber cuánto material de cerramiento comprar',
        options: ['124 m', '600 m', '62 m', '100 m'],
        answer: 0,
        hint: 'P = 2 × (largo + ancho) = 2 × (50 + 12)',
        explanation: 'P = 2 × (50 + 12) = 2 × 62 = 124 m de perímetro para el galpón.',
      },
      {
        id: 'gp-200', points: 200,
        question: 'Un galpón avícola tiene un perímetro de 100 m y mide 30 m de largo. ¿Cuánto mide de ancho?',
        context: '🐔 Conocemos el perímetro total y uno de los lados. Debemos despejar el lado faltante de la fórmula',
        options: ['20 m', '70 m', '10 m', '40 m'],
        answer: 0,
        hint: 'P = 2×(L+A) → 100 = 2×(30+A) → 50 = 30+A → A = ?',
        explanation: '100 = 2×(30+A) → 50 = 30+A → A = 20 m. ¡Despejamos el ancho de la fórmula del perímetro!',
      },
      {
        id: 'gp-300', points: 300,
        question: 'Un galpón avícola de 80m×14m necesita malla metálica en todo su perímetro excepto en 2 puertas de 3m cada una (ubicadas en los extremos cortos). ¿Cuántos metros de malla se necesitan?',
        context: '🐔 La malla protege el galpón de depredadores como zorros y aves de rapiña. Se descuenta el espacio de las puertas',
        options: ['182 m', '188 m', '194 m', '96 m'],
        answer: 0,
        hint: 'Perímetro total = 2×(80+14) = 188 m. Descuenta las 2 puertas: 188 − (2×3)',
        explanation: 'P = 2×(80+14) = 188 m. Malla = 188 − 6 = 182 m. ¡Siempre resta las aberturas al calcular el material!',
      },
      {
        id: 'gp-400', points: 400,
        question: 'Un avicultor construye 2 galpones paralelos de 40m×12m separados por un corredor central de 4m. ¿Cuánto mide el perímetro exterior del conjunto completo?',
        context: '🐔 Los galpones paralelos con corredor central facilitan el manejo de las aves y la ventilación cruzada',
        options: ['136 m', '208 m', '68 m', '104 m'],
        answer: 0,
        hint: 'El bloque completo mide 40m de largo y 12+4+12 = 28m de ancho. P = 2×(40+28)',
        explanation: 'Ancho total = 12+4+12 = 28m. P = 2×(40+28) = 2×68 = 136m. El corredor interior no afecta el perímetro exterior.',
      },
      {
        id: 'gp-500', points: 500,
        question: 'Un avicultor divide un galpón de 60m×12m en 3 secciones iguales con 2 paredes internas. ¿Cuántos metros de pared se necesitan en total (perímetro exterior + paredes internas)?',
        context: '🐔 Las granjas avícolas dividen los galpones por etapa de cría. Las paredes internas se suman al perímetro exterior',
        options: ['168 m', '144 m', '192 m', '72 m'],
        answer: 0,
        hint: 'Perímetro exterior = 2×(60+12) = 144 m. 2 paredes internas de 12 m cada una = 24 m. Total = 144+24',
        explanation: 'P exterior = 144 m. 2 paredes internas × 12 m = 24 m. Total = 144 + 24 = 168 m de pared.',
      },
    ],
  },

  /* ═══════════════════════ PERÍMETRO 3 ═══════════════════════ */
  {
    id: 'potreros-perim',
    name: '🌿 Potreros FEDEGAN',
    color: '#2E7D32',
    type: 'perimetro',
    questions: [
      {
        id: 'pp-100', points: 100,
        question: 'Un potrero rectangular mide 200 m de largo y 150 m de ancho. ¿Cuántos metros de cerca necesita?',
        context: '🌿 FEDEGAN recomienda calcular el perímetro antes de comprar el alambre para los potreros',
        options: ['700 m', '30,000 m', '350 m', '1,400 m'],
        answer: 0,
        hint: 'P = 2 × (largo + ancho) = 2 × (200 + 150)',
        explanation: 'P = 2 × (200 + 150) = 2 × 350 = 700 m de cerca para el potrero.',
      },
      {
        id: 'pp-200', points: 200,
        question: 'Un potrero cuadrado tiene un área de 10,000 m². ¿Cuánto mide su perímetro?',
        context: '🌿 Conocemos el área del potrero cuadrado. Primero hallamos el lado y luego calculamos el perímetro',
        options: ['400 m', '100 m', '1,000 m', '200 m'],
        answer: 0,
        hint: 'Lado = √10,000 = 100 m. Perímetro = 4 × lado',
        explanation: 'Lado = √10,000 = 100 m. P = 4 × 100 = 400 m de cerca para el potrero cuadrado.',
      },
      {
        id: 'pp-300', points: 300,
        question: 'Un potrero irregular tiene 6 lados que miden: 100 m, 60 m, 40 m, 30 m, 60 m y 30 m. ¿Cuántos metros de cerca necesita?',
        context: '🌿 Los potreros en forma de L son comunes en fincas colombianas. El perímetro es la suma de todos los lados exteriores',
        options: ['320 m', '280 m', '360 m', '250 m'],
        answer: 0,
        hint: 'Suma todos los lados: 100 + 60 + 40 + 30 + 60 + 30',
        explanation: 'P = 100+60+40+30+60+30 = 320 m. ¡Para formas irregulares, suma todos los lados exteriores!',
      },
      {
        id: 'pp-400', points: 400,
        question: 'Un potrero rectangular: el largo es el doble del ancho. Si el perímetro es 120 m, ¿cuáles son las dimensiones?',
        context: '🌿 Problema real de finca: conoces el perímetro y la proporción largo/ancho. Debes despejar las medidas',
        options: ['Largo = 40 m, Ancho = 20 m', 'Largo = 60 m, Ancho = 10 m', 'Largo = 30 m, Ancho = 30 m', 'Largo = 80 m, Ancho = 5 m'],
        answer: 0,
        hint: 'Si ancho = x, largo = 2x. Perímetro: 2×(x + 2x) = 120 → 6x = 120 → x = 20',
        explanation: 'Ancho = 20 m, Largo = 40 m. Verifica: P = 2×(20+40) = 120 m. ✓',
      },
      {
        id: 'pp-500', points: 500,
        question: 'Un potrero cuadrado de 2.25 hectáreas se cerca con 5 hilos de alambre. ¿Cuántos metros de alambre se requieren en total?',
        context: '🌿 Se usan 5 hilos de alambre de púas para contener ganado bravo. El alambre total = perímetro × número de hilos',
        options: ['3,000 m', '600 m', '750 m', '15,000 m'],
        answer: 0,
        hint: '2.25 ha = 22,500 m². Lado = √22,500 = 150 m. Perímetro = 4×150 = 600 m. Alambre = 600 × 5 hilos',
        explanation: 'Lado = 150 m. P = 600 m. Total alambre = 600 × 5 hilos = 3,000 m de alambre de púas.',
      },
    ],
  },

  /* ═══════════════════════ ÁREA 1 ═══════════════════════ */
  {
    id: 'porquerizas-area',
    name: '🐷 Porquerizas y Establos',
    color: '#AD1457',
    type: 'area',
    questions: [
      {
        id: 'pa-100', points: 100,
        question: 'Según el ICA de Colombia, un cerdo en engorde necesita mínimo 0.74 m². ¿Cuántos m² necesita una porqueriza para 20 cerdos?',
        context: '🐷 El ICA regula el espacio mínimo por animal en sistemas porcícolas certificados en Colombia',
        options: ['14.8 m²', '20.74 m²', '7.4 m²', '148 m²'],
        answer: 0,
        hint: 'Área total = número de cerdos × m² por cerdo = 20 × 0.74',
        explanation: 'Área = 20 × 0.74 = 14.8 m². ¡Siempre multiplica el número de animales por el espacio mínimo!',
      },
      {
        id: 'pa-200', points: 200,
        question: 'Una porqueriza rectangular para 20 cerdos (0.74 m²/cerdo) tiene un ancho de 4 m. ¿Cuánto mide de largo?',
        context: '🐷 Diseño de instalaciones: se conoce el área total necesaria y el ancho. Debemos hallar el largo',
        options: ['3.7 m', '7.4 m', '14.8 m', '1.85 m'],
        answer: 0,
        hint: 'Área total = 20 × 0.74 = 14.8 m². Largo = Área ÷ Ancho = 14.8 ÷ 4',
        explanation: 'Área = 14.8 m². Largo = 14.8 ÷ 4 = 3.7 m. ¡Una porqueriza compacta y eficiente!',
      },
      {
        id: 'pa-300', points: 300,
        question: 'Una granja porcícola tiene 3 corrales rectangulares de 5 m × 4 m cada uno. ¿Cuál es el área total de producción?',
        context: '🐷 Las granjas tecnificadas tienen múltiples corrales. El área total es la suma de todas las áreas individuales',
        options: ['60 m²', '20 m²', '40 m²', '80 m²'],
        answer: 0,
        hint: 'Área de 1 corral = 5 × 4 = 20 m². Área total = 3 × 20',
        explanation: 'Área/corral = 20 m². Total = 3 × 20 = 60 m². Con 0.74 m²/cerdo, ¡caben ~81 cerdos!',
      },
      {
        id: 'pa-400', points: 400,
        question: 'Un establo necesita 6 m² por vaca. Se requiere alojar 9 vacas en un establo cuadrado. ¿Cuánto mide el lado del establo?',
        context: '🐄 FEDEGAN recomienda 6 m²/vaca en establación. Con el área total podemos hallar las dimensiones del establo cuadrado',
        options: ['7.35 m', '54 m', '9 m', '6 m'],
        answer: 0,
        hint: 'Área total = 9 × 6 = 54 m². Para un cuadrado: lado = √54 ≈ 7.35 m',
        explanation: 'Área = 9 × 6 = 54 m². Lado = √54 ≈ 7.35 m. ¡La raíz cuadrada nos da el lado del establo!',
      },
      {
        id: 'pa-500', points: 500,
        question: 'Un establo rectangular, el largo es el doble del ancho. Si el perímetro es 120 m, ¿cuántos m² tiene el establo?',
        context: '🐄 Problema real de finca: con el perímetro y la proporción largo/ancho podemos hallar el área',
        options: ['800 m²', '400 m²', '1,200 m²', '600 m²'],
        answer: 0,
        hint: 'Si ancho = x, largo = 2x. 2×(x + 2x) = 120 → x = 20 m. Área = largo × ancho = 40 × 20',
        explanation: 'Ancho = 20 m, Largo = 40 m. Área = 40 × 20 = 800 m². ¡El doble de una cancha de fútbol sala!',
      },
    ],
  },

  /* ═══════════════════════ ÁREA 2 ═══════════════════════ */
  {
    id: 'estanques-area',
    name: '🐟 Estanques Piscícolas',
    color: '#0277BD',
    type: 'area',
    questions: [
      {
        id: 'ea-100', points: 100,
        question: 'Un estanque rectangular para tilapia mide 10 m de largo y 5 m de ancho. ¿Cuál es su área?',
        context: '🐟 La tilapia roja es la especie piscícola más cultivada en Colombia. El área del estanque determina la producción',
        options: ['50 m²', '30 m', '100 m²', '15 m'],
        answer: 0,
        hint: 'Área = largo × ancho = 10 × 5',
        explanation: 'Área = 10 × 5 = 50 m². Un estanque estándar para piscicultura familiar.',
      },
      {
        id: 'ea-200', points: 200,
        question: 'Un estanque circular para cachama tiene radio de 7 m. ¿Cuál es su área? (π ≈ 3.14)',
        context: '🐟 La cachama es el segundo pez más cultivado en Colombia. Los estanques circulares mejoran la distribución del agua',
        options: ['153.86 m²', '43.96 m', '49 m²', '307.72 m²'],
        answer: 0,
        hint: 'Área del círculo = π × r² = 3.14 × 7²',
        explanation: 'Área = 3.14 × 7² = 3.14 × 49 = 153.86 m². ¡El área usa el radio al cuadrado, no el diámetro!',
      },
      {
        id: 'ea-300', points: 300,
        question: 'Una granja piscícola tiene 4 estanques cuadrados de 6 m × 6 m cada uno. ¿Cuál es el área total de cultivo?',
        context: '🐟 Las granjas piscícolas tecnificadas tienen múltiples estanques. El área total determina la capacidad de producción',
        options: ['144 m²', '36 m²', '72 m²', '96 m²'],
        answer: 0,
        hint: 'Área de 1 estanque = 6 × 6 = 36 m². Área total = 4 × 36',
        explanation: 'Área/estanque = 36 m². Total = 4 × 36 = 144 m² de espejo de agua para la producción piscícola.',
      },
      {
        id: 'ea-400', points: 400,
        question: 'Una granja de trucha arco iris construye un estanque semicircular con radio de 8m. ¿Cuál es el área del estanque? (π ≈ 3.14)',
        context: '🐟 Los estanques semicirculares aprovechan las laderas naturales y son muy usados para truchas en zonas de clima frío',
        options: ['100.48 m²', '200.96 m²', '50.24 m²', '25.12 m²'],
        answer: 0,
        hint: 'Área semicírculo = (π × r²) ÷ 2 = (3.14 × 8²) ÷ 2',
        explanation: 'Área = (3.14 × 64) ÷ 2 = 200.96 ÷ 2 = 100.48 m². ¡El semicírculo tiene la mitad del área del círculo completo!',
      },
      {
        id: 'ea-500', points: 500,
        question: 'Un piscicultor construye un estanque rectangular donde el largo es 4 veces el ancho. Si necesita 200 m² de área, ¿cuánto mide el largo?',
        context: '🐟 Diseño de estanques: conocemos la relación largo/ancho y el área requerida. Debemos hallar las dimensiones',
        options: ['28.28 m', '7.07 m', '50 m', '14.14 m'],
        answer: 0,
        hint: 'largo = 4×ancho. Área = largo×ancho = 4×ancho² = 200 → ancho = √50 ≈ 7.07 m → largo = 4×7.07',
        explanation: 'ancho = √50 ≈ 7.07 m. largo = 4 × 7.07 ≈ 28.28 m. Verifica: 7.07 × 28.28 ≈ 200 m². ✓',
      },
    ],
  },

  /* ═══════════════════════ MIXTO ═══════════════════════ */
  {
    id: 'finca-mixto',
    name: '🐐 Finca Pecuaria',
    color: '#6A1B9A',
    type: 'mixto',
    questions: [
      {
        id: 'fm-100', points: 100,
        question: 'Un corral cuadrado tiene 20 m de lado. ¿Cuántos metros de cerca necesita y cuántos m² tiene?',
        context: '🐐 Para diseñar corrales necesitamos AMBAS medidas: el perímetro (cerca) y el área (espacio para animales)',
        options: ['Cerca: 80 m — Área: 400 m²', 'Cerca: 400 m — Área: 80 m²', 'Cerca: 40 m — Área: 200 m²', 'Cerca: 80 m — Área: 200 m²'],
        answer: 0,
        hint: 'Perímetro = 4 × lado = 4 × 20. Área = lado² = 20²',
        explanation: 'P = 4 × 20 = 80 m de cerca. Área = 20² = 400 m². ¡Un corral para ~200 cabras (2m²/cabra)!',
      },
      {
        id: 'fm-200', points: 200,
        question: 'Un potrero de 200m×150m. ¿Cuántos m de cerca necesita y cuántas hectáreas tiene?',
        context: '🌿 Los ganaderos siempre calculan el perímetro (cerca) y el área (hectáreas) al comprar o arrendar un potrero',
        options: ['700m de cerca — 3 hectáreas', '350m de cerca — 3 hectáreas', '700m de cerca — 30 hectáreas', '300m de cerca — 3 hectáreas'],
        answer: 0,
        hint: 'P = 2×(200+150) = 700 m. Área = 200×150 = 30,000 m² ÷ 10,000 = ? ha',
        explanation: 'P = 700 m de cerca. Área = 30,000 m² ÷ 10,000 = 3 ha. Este potrero soporta 3 cabezas de ganado.',
      },
      {
        id: 'fm-300', points: 300,
        question: 'Una gallina ponedora en piso necesita 0.25 m² (4 gallinas/m²). Un galpón de 48m×10m. ¿Cuántas gallinas caben?',
        context: '🥚 Las gallinas ponedoras requieren más espacio que los pollos de engorde. Usamos el área para calcular la capacidad',
        options: ['1,920 gallinas', '480 gallinas', '4,800 gallinas', '192 gallinas'],
        answer: 0,
        hint: 'Área = 48 × 10 = 480 m². Gallinas = 480 × 4 gallinas/m²',
        explanation: 'Área = 480 m². Gallinas = 480 × 4 = 1,920 gallinas ponedoras. ¡Una granja de tamaño mediano!',
      },
      {
        id: 'fm-400', points: 400,
        question: 'Un avicultor quiere construir un galpón para 5,000 pollos de engorde (10 aves/m²). El galpón tendrá 12 m de ancho. ¿Cuánto debe medir de largo?',
        context: '🐔 Diseño inverso: sabemos cuántas aves queremos y calculamos las dimensiones del galpón',
        options: ['41.67 m', '600 m', '4,167 m', '50 m'],
        answer: 0,
        hint: 'Área necesaria = 5,000 ÷ 10 = 500 m². Largo = Área ÷ Ancho = 500 ÷ 12',
        explanation: 'Área = 5,000 ÷ 10 = 500 m². Largo = 500 ÷ 12 ≈ 41.67 m. Se construiría de 42 m por seguridad.',
      },
      {
        id: 'fm-500', points: 500,
        question: 'Un galpón avícola de 600 m² produce pollos. Se deja un 15% del área para pasillos y equipos. ¿Cuántos pollos caben en el área útil de producción (10 aves/m²)?',
        context: '🐔 En la práctica real no toda el área del galpón es productiva. Siempre hay pasillos, bebederos y comederos',
        options: ['5,100 pollos', '6,000 pollos', '900 pollos', '5,000 pollos'],
        answer: 0,
        hint: 'Área útil = 600 × (1 - 0.15) = 600 × 0.85 = 510 m². Pollos = 510 × 10',
        explanation: 'Área útil = 600 × 0.85 = 510 m². Pollos = 510 × 10 = 5,100 aves. ¡Siempre descuenta el área no productiva!',
      },
    ],
  },
];

export const TOTAL_QUESTIONS_PECUARIAS = categoriesPecuarias.reduce(
  (total, cat) => total + cat.questions.length, 0
);

// ─── Preguntas adicionales del pool (4 por valor = 20 nuevas) ────────────────
const extraQuestions = {
  100: [
    {
      id: 'p100a', points: 100,
      question: 'Un gallinero cuadrado tiene 5 m de lado. ¿Cuántos metros de malla se necesitan para cercarlo?',
      context: '🐔 El avicultor debe calcular la malla necesaria para el contorno del gallinero',
      options: ['20 m', '25 m', '10 m', '40 m'],
      answer: 0,
      hint: 'Perímetro de un cuadrado = 4 × lado = 4 × 5',
      explanation: 'P = 4 × 5 = 20 m de malla para el gallinero cuadrado.',
    },
    {
      id: 'p100b', points: 100,
      question: 'Una pocilga rectangular mide 8 m de largo y 4 m de ancho. ¿Cuánto mide su perímetro?',
      context: '🐷 El porcicultor necesita calcular la cerca del corral de la cerda',
      options: ['24 m', '32 m', '12 m', '48 m'],
      answer: 0,
      hint: 'P = 2 × (largo + ancho) = 2 × (8 + 4)',
      explanation: 'P = 2 × (8 + 4) = 2 × 12 = 24 m de cerca.',
    },
    {
      id: 'p100c', points: 100,
      question: 'Un estanque rectangular para peces mide 10 m de largo y 6 m de ancho. ¿Cuánto mide su perímetro?',
      context: '🐟 El acuicultor necesita saber cuánta malla poner alrededor del estanque',
      options: ['32 m', '60 m', '16 m', '120 m'],
      answer: 0,
      hint: 'P = 2 × (largo + ancho) = 2 × (10 + 6)',
      explanation: 'P = 2 × (10 + 6) = 2 × 16 = 32 m.',
    },
    {
      id: 'p100d', points: 100,
      question: 'Un potrero triangular tiene lados de 30 m, 40 m y 50 m. ¿Cuántos metros de cerca necesita?',
      context: '🌿 Un potrero con forma triangular siguiendo la topografía del terreno',
      options: ['120 m', '60 m', '300 m', '100 m'],
      answer: 0,
      hint: 'Perímetro del triángulo = suma de los 3 lados: 30 + 40 + 50',
      explanation: 'P = 30 + 40 + 50 = 120 m de cerca.',
    },
  ],
  200: [
    {
      id: 'p200a', points: 200,
      question: 'Un galpón avícola tiene perímetro de 60 m y largo de 20 m. ¿Cuánto mide de ancho?',
      context: '🐔 Conocemos el perímetro total y el largo del galpón. Debemos despejar el ancho',
      options: ['10 m', '20 m', '40 m', '30 m'],
      answer: 0,
      hint: 'P = 2×(L+A) → 60 = 2×(20+A) → 30 = 20+A → A = ?',
      explanation: '60 = 2×(20+A) → 30 = 20+A → A = 10 m de ancho.',
    },
    {
      id: 'p200b', points: 200,
      question: 'Un corral cuadrado para bovinos tiene área de 64 m². ¿Cuánto mide el perímetro?',
      context: '🐄 Conocemos el área del corral cuadrado. Primero hallamos el lado y luego el perímetro',
      options: ['32 m', '16 m', '8 m', '64 m'],
      answer: 0,
      hint: 'Área = lado² → lado = √64 = 8 m. Perímetro = 4 × lado',
      explanation: 'Lado = √64 = 8 m. P = 4 × 8 = 32 m de cerca.',
    },
    {
      id: 'p200c', points: 200,
      question: 'Dos pocilgas rectangulares de 6 m × 4 m se construyen una al lado de la otra (comparten un lado de 4 m). ¿Cuánto mide el perímetro exterior del conjunto?',
      context: '🐷 Al unir dos pocilgas se forma un bloque rectangular mayor',
      options: ['32 m', '40 m', '48 m', '20 m'],
      answer: 0,
      hint: 'El conjunto mide 12 m × 4 m. P = 2 × (12 + 4)',
      explanation: 'Bloque = 12 m × 4 m. P = 2 × (12 + 4) = 32 m. La pared compartida es interior y no cuenta.',
    },
    {
      id: 'p200d', points: 200,
      question: 'Un potrero cuadrado tiene área de 10,000 m² (1 hectárea). ¿Cuánto mide su perímetro?',
      context: '🌿 Conocemos el área del potrero cuadrado. Calculamos el perímetro para estimar el alambre necesario',
      options: ['400 m', '100 m', '1,000 m', '200 m'],
      answer: 0,
      hint: 'Lado = √10,000 = 100 m. Perímetro = 4 × lado',
      explanation: 'Lado = √10,000 = 100 m. P = 4 × 100 = 400 m de cerca.',
    },
  ],
  300: [
    {
      id: 'p300a', points: 300,
      question: 'Un corral rectangular: el largo es el doble del ancho. Si el perímetro es 90 m, ¿cuánto mide el largo?',
      context: '🐄 Conocemos la relación largo/ancho y el perímetro. Debemos hallar las dimensiones',
      options: ['30 m', '15 m', '45 m', '60 m'],
      answer: 0,
      hint: 'Si ancho = x, largo = 2x. Perímetro: 2×(x + 2x) = 90 → 6x = 90 → x = 15. Largo = ?',
      explanation: 'Ancho = 15 m, Largo = 30 m. Verifica: P = 2×(15+30) = 90 m ✓',
    },
    {
      id: 'p300b', points: 300,
      question: 'Un estanque circular para tilapia tiene diámetro de 10 m. ¿Cuántos metros de malla necesita para el contorno? (π ≈ 3.14)',
      context: '🐟 El estanque circular necesita malla en todo su contorno para evitar la fuga de peces',
      options: ['31.4 m', '15.7 m', '62.8 m', '314 m'],
      answer: 0,
      hint: 'Circunferencia = π × diámetro = 3.14 × 10',
      explanation: 'C = π × d = 3.14 × 10 = 31.4 m de malla alrededor del estanque.',
    },
    {
      id: 'p300c', points: 300,
      question: 'Un galpón de 30 m×8 m se divide en 3 secciones iguales con 2 paredes internas. ¿Cuántos metros de pared se necesitan en total?',
      context: '🐔 Las granjas dividen los galpones por etapas de cría. Las paredes internas se suman al perímetro exterior',
      options: ['92 m', '76 m', '16 m', '60 m'],
      answer: 0,
      hint: 'Perímetro exterior = 2×(30+8) = 76 m. 2 paredes internas × 8 m cada una = 16 m. Total = 76 + 16',
      explanation: 'P exterior = 76 m. 2 paredes × 8 m = 16 m. Total = 76 + 16 = 92 m de pared.',
    },
    {
      id: 'p300d', points: 300,
      question: 'Un corral de 20 m×10 m: uno de los lados cortos (10 m) colinda con un río y no necesita cerca. ¿Cuántos metros de alambre se necesitan?',
      context: '🌿 Cuando hay un río o muro natural, no se cerca ese lado. Solo se cercan los 3 lados restantes',
      options: ['50 m', '40 m', '30 m', '60 m'],
      answer: 0,
      hint: 'Se cercan 3 lados: los 2 largos (20 m c/u) y el lado corto opuesto (10 m). Suma: 20+20+10',
      explanation: '3 lados = 20 + 20 + 10 = 50 m de alambre. El lado del río no necesita cerca.',
    },
  ],
  400: [
    {
      id: 'p400a', points: 400,
      question: 'Un potrero irregular tiene forma de trapecio. Sus bases miden 80 m y 60 m, y sus lados miden 30 m y 40 m. ¿Cuántos metros de cerca necesita?',
      context: '🌿 Los potreros trapezoidales son comunes en terrenos con pendiente. El perímetro es la suma de todos los lados',
      options: ['210 m', '240 m', '180 m', '200 m'],
      answer: 0,
      hint: 'Suma todos los lados del trapecio: 80 + 60 + 30 + 40',
      explanation: 'P = 80 + 60 + 30 + 40 = 210 m de cerca para el potrero trapezoidal.',
    },
    {
      id: 'p400b', points: 400,
      question: 'Un lote cuadrado de 60 m de lado se divide en 4 potreros iguales con 3 divisiones paralelas. ¿Cuántos metros de cerca se necesitan en total (exterior + divisiones)?',
      context: '🌿 La rotación de potreros con divisiones internas maximiza el uso del pastizal en ganadería',
      options: ['420 m', '240 m', '480 m', '360 m'],
      answer: 0,
      hint: 'Perímetro exterior = 4×60 = 240 m. 3 divisiones internas × 60 m cada una = 180 m. Total = ?',
      explanation: 'P exterior = 240 m. Divisiones = 3 × 60 = 180 m. Total = 240 + 180 = 420 m de cerca.',
    },
    {
      id: 'p400c', points: 400,
      question: 'Un establo rectangular tiene área de 150 m² y largo de 15 m. ¿Cuánto mide el perímetro y cuántas vacas (6 m²/vaca) caben?',
      context: '🐄 El ganadero necesita saber el perímetro para la cerca y la capacidad para planear la producción',
      options: ['Perímetro: 50 m · 25 vacas', 'Perímetro: 25 m · 50 vacas', 'Perímetro: 50 m · 10 vacas', 'Perímetro: 40 m · 25 vacas'],
      answer: 0,
      hint: 'Ancho = 150÷15 = 10 m. P = 2×(15+10). Vacas = 150÷6',
      explanation: 'Ancho = 10 m. P = 50 m. Vacas = 150÷6 = 25 vacas.',
    },
    {
      id: 'p400d', points: 400,
      question: 'Un avicultor necesita un galpón cuadrado para 1,000 pollos de engorde (10 aves/m²). ¿Cuánto mide el lado del galpón y su perímetro?',
      context: '🐔 Diseño de instalaciones: de la capacidad deseada calculamos las dimensiones del galpón cuadrado',
      options: ['Lado: 10 m · Perímetro: 40 m', 'Lado: 8 m · Perímetro: 32 m', 'Lado: 12 m · Perímetro: 48 m', 'Lado: 5 m · Perímetro: 20 m'],
      answer: 0,
      hint: 'Área necesaria = 1,000÷10 = 100 m². Para cuadrado: lado = √100 = 10 m. P = 4×10',
      explanation: 'Área = 100 m². Lado = √100 = 10 m. P = 4 × 10 = 40 m de perímetro.',
    },
  ],
  500: [
    {
      id: 'p500a', points: 500,
      question: 'Un corral circular tiene área de 314 m². ¿Cuántos metros de cerca necesita? (π ≈ 3.14)',
      context: '🐄 Los corrales circulares reducen esquinas donde el ganado se acumula. Calculamos el perímetro desde el área',
      options: ['62.8 m', '31.4 m', '125.6 m', '100 m'],
      answer: 0,
      hint: 'Área = π×r² → r² = 314÷3.14 = 100 → r = 10 m. Cerca = 2×π×r',
      explanation: 'r = √100 = 10 m. Cerca = 2 × 3.14 × 10 = 62.8 m.',
    },
    {
      id: 'p500b', points: 500,
      question: 'Un potrero cuadrado de 3.24 ha se cerca con 6 hilos de alambre de púas. ¿Cuántos metros de alambre en total se necesitan?',
      context: '🌿 Para ganado bravo se usan 6 hilos. El alambre total = perímetro × número de hilos',
      options: ['4,320 m', '720 m', '2,160 m', '3,600 m'],
      answer: 0,
      hint: '3.24 ha = 32,400 m². Lado = √32,400 = 180 m. Perímetro = 4×180 = 720 m. Alambre = 720 × 6 hilos',
      explanation: 'Lado = 180 m. P = 720 m. Alambre = 720 × 6 = 4,320 m de alambre de púas.',
    },
    {
      id: 'p500c', points: 500,
      question: 'Un galpón de 100 m×60 m se divide en 12 secciones iguales (4 filas × 3 columnas). ¿Cuántos metros de pared se necesitan en total?',
      context: '🐔 Una granja avícola tecnificada divide el galpón en secciones para distintas edades de las aves',
      options: ['740 m', '320 m', '600 m', '520 m'],
      answer: 0,
      hint: 'P exterior = 2×(100+60)=320 m. Divisiones horizontales: 3×100=300 m. Divisiones verticales: 2×60=120 m. Total = ?',
      explanation: 'P exterior = 320 m + H: 300 m + V: 120 m = 740 m de pared en total.',
    },
    {
      id: 'p500d', points: 500,
      question: 'Un piscicultor construye 6 estanques circulares de radio 5 m cada uno. ¿Cuántos metros de borde tienen en total los 6 estanques? (π ≈ 3.14)',
      context: '🐟 En una granja piscícola tecnificada se instalan múltiples estanques circulares',
      options: ['188.4 m', '31.4 m', '376.8 m', '94.2 m'],
      answer: 0,
      hint: 'Circunferencia de 1 estanque = 2×3.14×5 = 31.4 m. Total = 6 × 31.4',
      explanation: 'C = 2×3.14×5 = 31.4 m por estanque. Total = 6 × 31.4 = 188.4 m.',
    },
  ],
};

// Pool de preguntas por valor (6 existentes + 4 nuevas = 10 por valor)
export const questionPool = (() => {
  const vals = [100, 200, 300, 400, 500];
  return Object.fromEntries(vals.map(pts => [
    pts,
    [
      ...categoriesPecuarias.flatMap(c => c.questions.filter(q => q.points === pts)),
      ...extraQuestions[pts],
    ],
  ]));
})();

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CAT_COLORS_P = [
  '#5D4037', '#E65100', '#2E7D32', '#AD1457', '#0277BD',
  '#6A1B9A', '#F57F17', '#00695C', '#BF360C', '#37474F',
];

// Construye las categorías del tablero según el número de equipos.
// Selecciona el menor múltiplo de numTeams que sea ≥ 5 y ≤ tamaño del pool.
// Así todos los equipos tienen exactamente las mismas oportunidades por valor.
export function buildGameCategoriesPecuarias(numTeams) {
  const POINT_VALUES = [100, 200, 300, 400, 500];
  const poolSize = Math.min(...POINT_VALUES.map(pts => questionPool[pts].length));
  const numCols = Math.min(Math.ceil(5 / numTeams) * numTeams, poolSize);

  const selected = {};
  for (const pts of POINT_VALUES) {
    selected[pts] = shuffle([...questionPool[pts]]).slice(0, numCols);
  }

  return Array.from({ length: numCols }, (_, i) => ({
    id: `slot-${i}`,
    name: String.fromCharCode(65 + i),
    color: CAT_COLORS_P[i % CAT_COLORS_P.length],
    type: 'pool',
    questions: POINT_VALUES.map(pts => selected[pts][i]),
  }));
}
