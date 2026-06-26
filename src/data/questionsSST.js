// Todas las preguntas de este módulo tienen timerOverride: 30 (30 segundos fijos)

export const categoriesSST = [
  /* ═══════════════════════ CATEGORÍA 1 ═══════════════════════ */
  {
    id: 'marco-normativo',
    name: '🏛️ Marco Normativo',
    color: '#1565C0',
    type: 'normativa',
    questions: [
      {
        id: 'mn-100', points: 100, timerOverride: 30,
        question: 'Según el Art. 392 de la Resolución 2400 de 1979, ¿cuál es el peso máximo legal de carga manual que puede levantar un trabajador hombre?',
        context: '🏛️ El Estatuto de Seguridad Industrial colombiano establece límites claros de carga manual para proteger la salud de los trabajadores',
        options: ['25 kg', '40 kg', '23 kg', '30 kg'],
        answer: 0,
        hint: 'La norma colombiana de 1979 fija un límite diferente al de la ecuación NIOSH (23 kg)',
        explanation: 'La Resolución 2400/1979, Art. 392 establece 25 kg para hombres y 12,5 kg para mujeres como límites legales colombianos.',
      },
      {
        id: 'mn-200', points: 200, timerOverride: 30,
        question: 'El Decreto 1072 de 2015 organiza el SG-SST en un ciclo de cuatro pasos. ¿Cómo se denomina ese ciclo?',
        context: '🏛️ El Sistema de Gestión de la Seguridad y Salud en el Trabajo colombiano se estructura bajo un ciclo de mejora continua',
        options: ['PHVA (Planear, Hacer, Verificar, Actuar)', 'DOFA (Debilidades, Oportunidades, Fortalezas, Amenazas)', 'SMART (Específico, Medible, Alcanzable, Relevante, Tiempo)', 'GTC-45 (Identificar, Evaluar, Valorar, Controlar)'],
        answer: 0,
        hint: 'Es un ciclo de mejora continua conocido internacionalmente como ciclo de Deming o PDCA en inglés',
        explanation: 'El Decreto 1072/2015 estructura el SG-SST en el ciclo PHVA: Planear, Hacer, Verificar, Actuar — base de la mejora continua en SST.',
      },
      {
        id: 'mn-300', points: 300, timerOverride: 30,
        question: 'Según la Resolución 0312 de 2019, ¿qué porcentaje mínimo debe obtener una empresa en la autoevaluación anual para que su nivel sea "aceptable"?',
        context: '🏛️ La autoevaluación anual mide el cumplimiento de los estándares mínimos del SG-SST y determina las acciones a tomar',
        options: ['85% o más', '60% o más', '70% o más', '50% o más'],
        answer: 0,
        hint: 'El resultado <60% es crítico, entre 60-85% es moderadamente aceptable. ¿Cuál es el umbral de lo "aceptable"?',
        explanation: 'La Res. 0312/2019, Art. 27: ≥85% = aceptable; 60-85% = moderadamente aceptable; <60% = crítico (requiere plan de mejora inmediato).',
      },
      {
        id: 'mn-400', points: 400, timerOverride: 30,
        question: 'El Art. 2.2.4.6.24 del Decreto 1072 establece que el Equipo de Protección Personal (EPP) debe ser suministrado por el empleador de qué manera:',
        context: '🏛️ El Decreto Único Reglamentario del Sector Trabajo es claro sobre quién debe asumir el costo del EPP',
        options: ['Sin ningún costo para el trabajador', 'Con descuento del 50% del salario', 'A precio de costo sin ganancia', 'El trabajador lo compra y el empleador lo reembolsa'],
        answer: 0,
        hint: 'La norma busca que ningún obstáculo económico impida al trabajador usar su protección',
        explanation: 'Parágrafo 1 del Art. 2.2.4.6.24: el EPP debe suministrarse SIN NINGÚN COSTO para el trabajador. Esto es obligación del empleador.',
      },
      {
        id: 'mn-500', points: 500, timerOverride: 30,
        question: 'La Ley 1562 de 2012 define "enfermedad laboral" como la contraída por exposición a factores de riesgo en el trabajo. ¿Cada cuántos años debe actualizarse la Tabla de Enfermedades Laborales del Decreto 1477 de 2014?',
        context: '🏛️ El legislador colombiano exigió que la lista de enfermedades laborales se mantenga actualizada con la evidencia científica',
        options: ['Cada 3 años', 'Cada 5 años', 'Cada año', 'Cada 10 años'],
        answer: 0,
        hint: 'La Ley 1562/2012 fijó un período relativamente corto para que la tabla no quede desactualizada',
        explanation: 'La Ley 1562/2012 ordena actualizar la tabla de enfermedades laborales cada 3 años. El Decreto 676/2020 incorporó la COVID-19 a la tabla vigente.',
      },
    ],
  },

  /* ═══════════════════════ CATEGORÍA 2 ═══════════════════════ */
  {
    id: 'manejo-cargas',
    name: '💪 Manejo de Cargas',
    color: '#6A1B9A',
    type: 'cargas',
    questions: [
      {
        id: 'mc-100', points: 100, timerOverride: 30,
        question: '¿Cuál es el peso máximo legal que puede levantar una trabajadora mujer según el Art. 392 de la Resolución 2400 de 1979?',
        context: '💪 La norma colombiana establece límites distintos según el género para proteger la salud musculoesquelética',
        options: ['12,5 kg', '25 kg', '20 kg', '15 kg'],
        answer: 0,
        hint: 'El límite para mujeres es exactamente la mitad del límite para hombres según la Res. 2400/1979',
        explanation: 'Art. 392 Res. 2400/1979: límite para mujeres = 12,5 kg (la mitad de los 25 kg establecidos para hombres).',
      },
      {
        id: 'mc-200', points: 200, timerOverride: 30,
        question: 'Un bulto típico de concentrado para ganado pesa 40 kg. Según la normativa colombiana, ¿qué medida es OBLIGATORIA para manejarlo?',
        context: '💪 Los bultos de concentrado son una de las cargas más comunes en el sector pecuario colombiano y exceden el límite legal',
        options: ['Usar ayudas mecánicas (carretilla, zorra) o levantamiento en equipo', 'Usar guantes de cuero resistentes', 'Hacer pausas activas cada 30 minutos', 'Solicitar autorización escrita del jefe inmediato'],
        answer: 0,
        hint: 'Un bulto de 40 kg supera el límite de 25 kg (hombre) y de 12,5 kg (mujer). La norma es clara sobre qué hacer',
        explanation: '40 kg excede el límite legal. La Res. 2400 obliga a usar ayudas mecánicas (carretillas, zorras, transpaletas) o levantar en equipo cuando se supera el límite.',
      },
      {
        id: 'mc-300', points: 300, timerOverride: 30,
        question: 'La Ecuación NIOSH establece una constante de carga (LC) de 23 kg en condiciones ideales. ¿Qué porcentajes de trabajadores realizarían ese levantamiento sin riesgo de lesión?',
        context: '💪 La ecuación NIOSH busca proteger a la mayor proporción posible de la fuerza laboral al definir sus límites',
        options: ['75% de las mujeres y 90% de los hombres', '90% de las mujeres y 75% de los hombres', '50% de hombres y 50% de mujeres', '100% de los hombres y 50% de las mujeres'],
        answer: 0,
        hint: 'El porcentaje mayor es para el grupo con mayor fuerza muscular promedio, pero ambos porcentajes están por debajo del 100%',
        explanation: 'NIOSH: bajo condiciones ideales con 23 kg, el 75% de las mujeres y el 90% de los hombres realizarían el levantamiento sin riesgo (compresión L5/S1 < 3,4 kN).',
      },
      {
        id: 'mc-400', points: 400, timerOverride: 30,
        question: 'Según la guía HSE del Reino Unido (L23), cuando DOS personas levantan juntas, la carga máxima recomendada equivale a:',
        context: '💪 El levantamiento en equipo tiene reglas técnicas específicas: la capacidad combinada NO es simplemente la suma de las individuales',
        options: ['Dos tercios de la suma de sus capacidades individuales', 'La suma exacta de sus capacidades individuales', 'La mitad de la suma de sus capacidades individuales', 'El doble de la capacidad del trabajador más fuerte'],
        answer: 0,
        hint: 'Si una persona puede levantar 20 kg, dos personas juntas NO pueden levantar 40 kg. La guía HSE da una fracción específica',
        explanation: 'HSE L23: equipo de 2 personas → carga máxima = 2/3 de la suma individual. Ej.: si cada uno levanta 20 kg, juntos no deben superar ~26,6 kg.',
      },
      {
        id: 'mc-500', points: 500, timerOverride: 30,
        question: 'En la técnica correcta de levantamiento, ¿a qué distancia máxima del cuerpo el factor horizontal NIOSH (HM) es igual a 1 — es decir, condición ideal sin penalización?',
        context: '💪 La ecuación NIOSH penaliza los levantamientos alejados del cuerpo porque aumentan la compresión en el disco intervertebral L5/S1',
        options: ['25 cm o menos', '50 cm o menos', '63 cm o menos', '10 cm o menos'],
        answer: 0,
        hint: 'A 63 cm el levantamiento ya es "inviable" y la tarea debe rediseñarse. El HM=1 aplica para una distancia mucho menor',
        explanation: 'NIOSH: HM = 25/H. Cuando H ≤ 25 cm, HM = 1 (condición ideal). A 63 cm, HM = 0,40 y más allá el levantamiento es inviable.',
      },
    ],
  },

  /* ═══════════════════════ CATEGORÍA 3 ═══════════════════════ */
  {
    id: 'manejo-animales',
    name: '🐄 Manejo de Animales',
    color: '#2E7D32',
    type: 'animales',
    questions: [
      {
        id: 'ma-100', points: 100, timerOverride: 30,
        question: 'Según Temple Grandin (Colorado State University), ¿en qué parte del cuerpo del animal se ubica el "punto de equilibrio"?',
        context: '🐄 Conocer el punto de equilibrio es fundamental para mover el ganado de forma segura y sin estrés',
        options: ['En el hombro del animal', 'En la cabeza del animal', 'En las ancas (parte trasera)', 'En el centro del cuerpo'],
        answer: 0,
        hint: 'Este punto divide al animal en dos zonas: si el manejador está detrás de él, el animal avanza; si está delante, retrocede',
        explanation: 'El punto de equilibrio se ubica en el HOMBRO del animal. Estar detrás de él hace que el animal avance; estar delante hace que retroceda.',
      },
      {
        id: 'ma-200', points: 200, timerOverride: 30,
        question: 'Para hacer que un bovino AVANCE hacia adelante, el manejador debe posicionarse:',
        context: '🐄 Usar correctamente el punto de equilibrio permite mover el ganado sin golpes ni picanas eléctricas',
        options: ['Detrás del punto de equilibrio (a la altura de las ancas o costado trasero)', 'Frente al animal mirándolo de cara', 'Directamente detrás de las patas traseras', 'A 10 metros de distancia del animal'],
        answer: 0,
        hint: 'Recuerda: la regla del punto de equilibrio indica posiciones opuestas para avanzar vs. retroceder',
        explanation: 'Para que el animal AVANCE: manejador detrás del hombro (punto de equilibrio). Para que RETROCEDA: manejador delante del hombro.',
      },
      {
        id: 'ma-300', points: 300, timerOverride: 30,
        question: '¿Cuánto tiempo aproximado necesita un animal agitado para calmarse antes de continuar el manejo seguro?',
        context: '🐄 Un animal estresado multiplica el riesgo de accidentes. Saber cuándo pausar el manejo es clave para la seguridad',
        options: ['Unos 20 minutos', 'Unos 5 minutos', 'Unos 45 minutos', 'Más de 1 hora'],
        answer: 0,
        hint: 'Temple Grandin establece un tiempo concreto para que bajen los niveles de cortisol y adrenalina del animal',
        explanation: 'Temple Grandin: un animal agitado requiere ~20 minutos para calmarse. Continuar antes aumenta el riesgo de patadas, cornadas y aplastamiento.',
      },
      {
        id: 'ma-400', points: 400, timerOverride: 30,
        question: 'Al pasar por detrás de un EQUINO (caballo), ¿cuál es la posición más segura para el trabajador?',
        context: '🐄 Los equinos tienen dos puntos ciegos críticos: directamente al frente (~1 m) y directamente detrás. Pasar por la zona ciega trasera requiere técnica',
        options: ['Muy pegado al cuerpo del animal, manteniendo una mano sobre él', 'Alejado a 3-5 metros del animal', 'Corriendo rápidamente para salir de la zona de peligro', 'Frente al animal anunciando la presencia en voz alta'],
        answer: 0,
        hint: 'Una patada a 3 metros llega con todo su momentum. Una patada pegado al cuerpo no alcanza su fuerza máxima',
        explanation: 'Pegado al cuerpo del animal: la patada no alcanza fuerza plena. Alejado: la patada llega con máximo momentum. Siempre mantener una mano sobre el animal al pasar.',
      },
      {
        id: 'ma-500', points: 500, timerOverride: 30,
        question: 'Los porcinos tienen una visión panorámica de ~310° con punto ciego de ~55° directamente detrás. Para manejarlos de forma segura como barrera visual y física, Temple Grandin recomienda:',
        context: '🐄 El tablero de manejo es una herramienta básica de seguridad en porcicultura que protege al trabajador de embestidas y mordeduras',
        options: ['Tablero de manejo ("hog board") anclado al piso, por delante del cuerpo (no contra las rodillas)', 'Soga alrededor del cuello del cerdo para controlarlo', 'Manguera de agua a presión para mantenerlos alejados', 'Manga metálica igual que para bovinos'],
        answer: 0,
        hint: 'El tablero actúa como extensión visual y física del cuerpo del trabajador; su posición correcta es fundamental',
        explanation: 'El "hog board" o pig board anclado al piso y por DELANTE del cuerpo (no contra las rodillas) actúa como barrera visual y física que redirige al cerdo.',
      },
    ],
  },

  /* ═══════════════════════ CATEGORÍA 4 ═══════════════════════ */
  {
    id: 'medicamentos-vet',
    name: '💉 Medicamentos y Agujas',
    color: '#C62828',
    type: 'medicamentos',
    questions: [
      {
        id: 'mv-100', points: 100, timerOverride: 30,
        question: 'La tilmicosina (Micotil 300) puede causar la muerte de un trabajador expuesto accidentalmente por:',
        context: '💉 La tilmicosina es un antibiótico veterinario con advertencia de caja negra de la FDA por su peligrosidad para humanos',
        options: ['Cardiotoxicidad: arritmias ventriculares y paro cardíaco', 'Neurotoxicidad: convulsiones y coma', 'Hepatotoxicidad: falla hepática fulminante', 'Nefrotoxicidad: insuficiencia renal aguda'],
        answer: 0,
        hint: 'La tilmicosina afecta un órgano vital cuyas consecuencias pueden ser inmediatas y mortales sin antídoto específico',
        explanation: 'Tilmicosina causa CARDIOTOXICIDAD: prolongación del QT y arritmia ventricular que puede derivar en paro cardíaco. No hay antídoto específico; el manejo es de soporte.',
      },
      {
        id: 'mv-200', points: 200, timerOverride: 30,
        question: 'Según la FDA, desde la aprobación de la tilmicosina (Micotil 300) en 1992, ¿cuántos reportes de muerte humana se han registrado?',
        context: '💉 La FDA lleva un registro de eventos adversos en personas expuestas a este medicamento veterinario',
        options: ['25 reportes de muerte humana', '5 reportes de muerte humana', '200 reportes de muerte humana', 'Ningún reporte de muerte humana'],
        answer: 0,
        hint: 'El número total de reportes adversos (no solo muertes) supera los 2.200. Las muertes son una fracción de ese total',
        explanation: 'FDA: más de 2.200 reportes de eventos adversos en personas expuestas a Micotil 300, incluyendo 25 reportes de muerte humana desde 1992.',
      },
      {
        id: 'mv-300', points: 300, timerOverride: 30,
        question: 'La autoinyección accidental de una vacuna OLEOSA (adyuvante de aceite mineral, como la vacuna aftosa) en un dedo es:',
        context: '💉 Las vacunas con adyuvante oleoso crean una presión intensa en los tejidos cerrados del dedo que puede destruirlos',
        options: ['Una emergencia médica que requiere cirugía urgente aunque el volumen sea pequeño', 'Un accidente leve que se trata con hielo y reposo', 'Peligrosa solo si el volumen inyectado supera 5 ml', 'Urgente solo si hay sangrado visible'],
        answer: 0,
        hint: 'El problema no es el volumen sino el efecto mecánico (presión compartimental) y la reacción granulomatosa del aceite mineral',
        explanation: 'Emergencia médica: requiere incisión, descompresión, irrigación y desbridamiento URGENTE. Sin intervención quirúrgica a tiempo puede causar necrosis y amputación del dedo.',
      },
      {
        id: 'mv-400', points: 400, timerOverride: 30,
        question: '¿Cuál es la regla MÁS IMPORTANTE para prevenir autoinyecciones accidentales al trabajar con jeringas y agujas en el campo?',
        context: '💉 El reencapuchado de agujas es la causa más frecuente de autoinyección accidental en trabajadores pecuarios',
        options: ['NO reencapuchar las agujas después de usarlas; desecharlas inmediatamente en guardián rígido', 'Usar guantes dobles de látex al inyectar', 'Trabajar siempre con la mano no dominante para inyectar', 'Usar agujas de mayor calibre para mayor control'],
        answer: 0,
        hint: 'El momento de mayor riesgo de pinchazo es cuando se intenta volver a poner la tapa a la aguja ya usada',
        explanation: 'NO REENCAPUCHAR es la regla #1. La acción de reencapuchar es la principal causa de autoinyecciones. Las agujas usadas van directo al guardián/contenedor rígido.',
      },
      {
        id: 'mv-500', points: 500, timerOverride: 30,
        question: 'Según estudios (Rubin et al., 2022), ¿qué porcentaje de trabajadores pecuarios ha sufrido alguna vez una autoinyección accidental durante la vacunación animal a lo largo de su vida laboral?',
        context: '💉 La frecuencia real del problema es mucho mayor de lo que se reporta, pues la mayoría de incidentes no se declaran',
        options: ['Entre el 64% y el 93%', 'Menos del 10%', 'Entre el 20% y el 40%', 'Menos del 1%'],
        answer: 0,
        hint: 'La cifra es sorprendentemente alta; casi toda la fuerza laboral pecuaria ha sido expuesta alguna vez',
        explanation: 'Rubin et al. (2022): la ocurrencia de autoinyección accidental durante la vacunación animal a lo largo de la vida laboral es del 64% al 93%. La mayoría no se reporta.',
      },
    ],
  },

  /* ═══════════════════════ CATEGORÍA 5 ═══════════════════════ */
  {
    id: 'zoonosis-epp',
    name: '🦠 Zoonosis y EPP',
    color: '#00695C',
    type: 'zoonosis',
    questions: [
      {
        id: 'ze-100', points: 100, timerOverride: 30,
        question: '¿Cuál es la zoonosis más extendida en el mundo, con aproximadamente 1,03 millones de casos y 58.900 muertes al año según Costa et al. (2015)?',
        context: '🦠 Esta enfermedad es especialmente prevalente en países tropicales como Colombia, con mayor riesgo tras lluvias e inundaciones',
        options: ['Leptospirosis', 'Brucelosis', 'Rabia', 'Tuberculosis bovina'],
        answer: 0,
        hint: 'Se transmite por contacto con orina de animales infectados y agua contaminada; los roedores son reservorios clave',
        explanation: 'La LEPTOSPIROSIS es la zoonosis más extendida globalmente. En Colombia es de notificación obligatoria desde 2007 y es endémica por el clima tropical.',
      },
      {
        id: 'ze-200', points: 200, timerOverride: 30,
        question: 'La BRUCELOSIS representa un riesgo laboral especialmente alto durante:',
        context: '🦠 La brucelosis afecta principalmente a ganaderos, veterinarios y trabajadores de mataderos en Colombia',
        options: ['Partos, abortos y manipulación de placentas y fetos', 'El ordeño manual sin guantes', 'La alimentación diaria del ganado', 'La aplicación de vacunas al hato bovino'],
        answer: 0,
        hint: 'Los fluidos reproductivos y los tejidos fetales contienen las mayores concentraciones de Brucella abortus',
        explanation: 'Brucelosis: mayor riesgo en PARTOS, ABORTOS y manipulación de placentas/fetos. La bacteria está en altas concentraciones en estos tejidos y fluidos reproductivos.',
      },
      {
        id: 'ze-300', points: 300, timerOverride: 30,
        question: 'El SULFURO DE HIDRÓGENO (H₂S) en fosas de estiércol y biodigestores es especialmente peligroso porque a ~100 ppm:',
        context: '🦠 Este gas ha causado muertes múltiples en fincas pecuarias, incluyendo trabajadores de rescate que intentaban ayudar a las víctimas',
        options: ['Paraliza el nervio olfatorio (la persona deja de percibir el olor a "huevo podrido")', 'Se vuelve visible como un gas amarillo que alerta al trabajador', 'Solo causa irritación ocular y lagrimeo leve', 'Produce explosiones al contacto con el aire'],
        answer: 0,
        hint: 'La señal de alarma natural (el olor) deja de funcionar a concentraciones altas, haciendo el peligro invisible',
        explanation: 'A ~100 ppm el H₂S paraliza el nervio olfatorio: la persona DEJA DE OLER el gas. A niveles extremos puede matar con pocas respiraciones. Nunca entrar a fosas sin medición de gases.',
      },
      {
        id: 'ze-400', points: 400, timerOverride: 30,
        question: 'Para protección respiratoria contra polvo orgánico y bioaerosoles en labores pecuarias (incluyendo partículas de Mycobacterium bovis y Bacillus anthracis), ¿qué tipo de respirador se debe usar?',
        context: '🦠 Escoger el respirador equivocado puede dar una falsa sensación de seguridad sin protección real',
        options: ['Respirador N95 aprobado NIOSH (≥95% eficiencia de filtración de partículas)', 'Tapabocas de tela de algodón doble capa', 'Mascarilla quirúrgica desechable azul', 'Cualquier mascarilla con válvula de exhalación disponible'],
        answer: 0,
        hint: 'El N95 filtra al menos el 95% de partículas en el aire, incluyendo las biológicas. Importante: NO protege contra gases como el amoniaco',
        explanation: 'N95 aprobado NIOSH: ≥95% eficiencia contra partículas biológicas. ATENCIÓN: para amoníaco se requiere cartucho específico verde — el N95 NO protege contra gases ni vapores.',
      },
      {
        id: 'ze-500', points: 500, timerOverride: 30,
        question: 'El esquema básico de vacunación contra el tétanos para trabajadores pecuarios contempla 3 dosis y refuerzo periódico. ¿Cada cuánto tiempo se aplica el refuerzo de mantenimiento?',
        context: '🦠 El tétanos es una prioridad en el sector agropecuario por las heridas frecuentes con materiales contaminados con esporas de Clostridium tetani',
        options: ['Cada 10 años', 'Cada año', 'Cada 5 años', 'Cada 3 años'],
        answer: 0,
        hint: 'El toxoide tetánico genera una inmunidad duradera que no requiere refuerzo anual como la vacuna de la influenza',
        explanation: 'Tétanos: esquema básico de 3 dosis (0, ≥4 semanas, y al año de la segunda). Refuerzo de mantenimiento CADA 10 AÑOS para trabajadores agropecuarios.',
      },
    ],
  },
];

export const TOTAL_QUESTIONS_SST = categoriesSST.reduce(
  (total, cat) => total + cat.questions.length, 0
);

// ─── Preguntas adicionales del pool (4 por valor = 20 nuevas) ────────────────
const extraQuestionsSST = {
  100: [
    {
      id: 'sst100a', points: 100, timerOverride: 30,
      question: 'El Art. 393 de la Resolución 2400 de 1979 prohíbe el levantamiento de cargas pesadas a ciertas personas. ¿Cuál de los siguientes grupos está INCLUIDO en esa prohibición?',
      context: '🏛️ La norma protege especialmente a grupos vulnerables del riesgo biomecánico',
      options: ['Mujeres en estado de embarazo', 'Hombres mayores de 30 años', 'Trabajadores con más de 5 años de experiencia', 'Trabajadores que usen guantes'],
      answer: 0,
      hint: 'La norma protege a quienes tienen condiciones físicas particulares que aumentan el riesgo de lesión',
      explanation: 'Art. 393 Res. 2400/1979 prohíbe el levantamiento de cargas pesadas a: personas con cardiopatías, hipertensión, lesiones pulmonares, mujeres embarazadas y personas con lesiones articulares.',
    },
    {
      id: 'sst100b', points: 100, timerOverride: 30,
      question: '¿Qué sigla colombiana identifica al Sistema de Gestión de la Seguridad y Salud en el Trabajo?',
      context: '🏛️ Colombia adoptó un sistema obligatorio de gestión de riesgos laborales basado en un ciclo de mejora continua',
      options: ['SG-SST', 'SGSSS', 'ARL', 'COPASST'],
      answer: 0,
      hint: 'Es el sistema regulado por el Decreto 1072 de 2015, Libro 2, Parte 2, Título 4, Capítulo 6',
      explanation: 'SG-SST: Sistema de Gestión de la Seguridad y Salud en el Trabajo, regulado por el Decreto 1072/2015 y complementado por la Res. 0312/2019.',
    },
    {
      id: 'sst100c', points: 100, timerOverride: 30,
      question: 'La GTC-45 es la herramienta técnica colombiana para:',
      context: '🏛️ Esta guía técnica es la base para construir la matriz de peligros en el SG-SST',
      options: ['Identificación de peligros y valoración de riesgos (matriz de peligros)', 'Calcular los salarios mínimos del sector agropecuario', 'Definir los límites de contaminación de agua en fincas', 'Certificar los equipos de protección personal'],
      answer: 0,
      hint: 'Su nombre completo es "Guía Técnica Colombiana para la identificación de peligros y valoración de riesgos"',
      explanation: 'GTC-45: Guía Técnica Colombiana para identificar peligros y valorar riesgos. Clasifica los peligros en: biológico, físico, químico, psicosocial, biomecánico y condiciones de seguridad.',
    },
    {
      id: 'sst100d', points: 100, timerOverride: 30,
      question: '¿Qué sigla denomina a las entidades que administran los riesgos laborales en Colombia y que deben ser consultadas en caso de accidente de trabajo?',
      context: '🏛️ En Colombia existe un sistema de aseguramiento de riesgos laborales con entidades especializadas',
      options: ['ARL (Administradora de Riesgos Laborales)', 'EPS (Entidad Promotora de Salud)', 'AFP (Administradora de Fondos de Pensiones)', 'ICBF (Instituto Colombiano de Bienestar Familiar)'],
      answer: 0,
      hint: 'Esta entidad cubre la atención médica y las prestaciones económicas derivadas de accidentes y enfermedades laborales',
      explanation: 'ARL: Administradora de Riesgos Laborales. Todo empleador debe afiliar a sus trabajadores a una ARL, que cubre accidentes de trabajo y enfermedades laborales.',
    },
  ],
  200: [
    {
      id: 'sst200a', points: 200, timerOverride: 30,
      question: 'Según la técnica correcta de levantamiento, ¿qué movimiento se debe EVITAR durante el levantamiento de una carga?',
      context: '💪 Ciertas posiciones del cuerpo durante el levantamiento multiplican la carga sobre la columna vertebral',
      options: ['La torsión del tronco (girar la espalda mientras se sostiene el peso)', 'Flexionar las rodillas para bajar el centro de gravedad', 'Mantener la carga cerca del cuerpo', 'Planificar el recorrido antes de levantar'],
      answer: 0,
      hint: 'Este movimiento combinado con el peso reduce drásticamente el límite de carga recomendado en la ecuación NIOSH',
      explanation: 'La TORSIÓN del tronco durante el levantamiento es el movimiento más peligroso: aumenta la carga sobre los discos intervertebrales y puede causar hernias. La asimetría reduce drásticamente el LPR/RWL.',
    },
    {
      id: 'sst200b', points: 200, timerOverride: 30,
      question: 'Para el manejo seguro de lechones, ¿cuál es la técnica correcta de levantamiento según los protocolos de bienestar animal y seguridad del trabajador?',
      context: '💪 Levantar lechones incorrectamente puede causar daño al animal y lesiones al trabajador por mordeduras y patadas',
      options: ['Sujetar una pata trasera y soportar el pecho con la otra mano', 'Levantar por la oreja para mayor control', 'Sujetar por una sola pata delantera', 'Agarrar por la cola para inmovilizarlo'],
      answer: 0,
      hint: 'La norma prohíbe explícitamente algunas formas de sujeción que dañan al animal y ponen en riesgo al trabajador',
      explanation: 'Lechones: sujetar una pata trasera y soportar el pecho con la otra mano. NUNCA por la oreja (hematoma auricular), ni por una sola pata delantera, ni por la cola.',
    },
    {
      id: 'sst200c', points: 200, timerOverride: 30,
      question: 'El Art. 392 de la Resolución 2400 de 1979 también establece que los trabajadores que se dedican constantemente al levantamiento de cargas deben:',
      context: '💪 La norma no solo limita el peso sino también las condiciones de trabajo continuo con cargas',
      options: ['Recibir intervalos de pausa (pausas activas)', 'Usar cinturón lumbar de soporte siempre', 'Levantar solo cargas de menos de 10 kg', 'Trabajar en parejas en todo momento'],
      answer: 0,
      hint: 'La norma busca que el trabajador tenga periodos de recuperación muscular y no permanezca en esfuerzo continuo',
      explanation: 'Art. 392 Res. 2400: el parágrafo ordena conceder INTERVALOS DE PAUSA a quienes se dedican constantemente al levantamiento y transporte de cargas.',
    },
    {
      id: 'sst200d', points: 200, timerOverride: 30,
      question: '¿Cuál es la distancia mínima recomendada para almacenar bultos pesados en bodegas pecuarias, con el fin de evitar levantamientos desde el piso?',
      context: '💪 El diseño del almacenamiento influye directamente en el riesgo biomecánico del trabajador',
      options: ['A la altura de la cadera del trabajador', 'A nivel del suelo para mayor estabilidad', 'A la altura de los hombros para facilitar el agarre', 'A más de 2 metros para liberar espacio en el piso'],
      answer: 0,
      hint: 'La altura ideal minimiza la distancia vertical de levantamiento, que es uno de los factores de la ecuación NIOSH',
      explanation: 'Los bultos pesados deben almacenarse a ALTURA DE CADERA para evitar levantamientos desde el piso, que son los que generan mayor compresión en el disco L5/S1.',
    },
  ],
  300: [
    {
      id: 'sst300a', points: 300, timerOverride: 30,
      question: '¿Cuál es la "zona de fuga" de un animal según Temple Grandin y qué ocurre cuando el manejador la penetra profundamente?',
      context: '🐄 Entender la zona de fuga es la base del manejo de bajo estrés y la seguridad del trabajador con animales',
      options: ['El espacio personal del animal: al penetrarla profundamente el animal embiste o huye pasando junto a la persona', 'La distancia mínima de seguridad para el manejador, de 5 metros en bovinos', 'El ángulo ciego del animal donde no puede ver ni atacar', 'El área restringida del corral donde no debe entrar el trabajador'],
      answer: 0,
      hint: 'Penetrar profundamente esta zona genera una respuesta de huida o ataque — ambas peligrosas para el trabajador',
      explanation: 'Zona de fuga: espacio personal del animal. Penetrarla profundamente provoca que el animal embista o se devuelva pasando junto al manejador. Se debe trabajar en el BORDE de la zona de fuga.',
    },
    {
      id: 'sst300b', points: 300, timerOverride: 30,
      question: '¿Cuántas orejas hacia atrás indican que un equino o bovino va a patear o morder?',
      context: '🐄 Leer el lenguaje corporal de los animales es una competencia de seguridad fundamental en el sector pecuario',
      options: ['Las orejas "echadas hacia atrás" planas contra la cabeza indican agresión inminente', 'Las orejas hacia adelante siempre indican agresión', 'Las orejas moviéndose en diferentes direcciones indican peligro', 'Solo los ojos con esclerótica visible indican agresión'],
      answer: 0,
      hint: 'Esta señal corporal es universal en équidos y bovinos como advertencia antes de un ataque',
      explanation: 'Orejas ECHADAS HACIA ATRÁS (planas contra la cabeza) = señal de alerta de ataque inminente en equinos y bovinos. También: cola agitada, ojos con esclerótica visible (eye white).',
    },
    {
      id: 'sst300c', points: 300, timerOverride: 30,
      question: 'En porcinos, ¿en qué situaciones son las cerdas y los verracos MÁS peligrosos para el trabajador?',
      context: '🐄 Conocer los momentos de mayor agresividad en porcinos es clave para planificar las tareas con mayor riesgo',
      options: ['Las cerdas: cerca del parto y al manipular lechones cerca de ellas. Los verracos: en celo y al pelear', 'Las cerdas son siempre más peligrosas que los verracos', 'Solo son peligrosos cuando tienen hambre o están enfermos', 'Solo los verracos son peligrosos, las cerdas son dóciles'],
      answer: 0,
      hint: 'Los instintos maternales y reproductivos determinan los picos de agresividad en esta especie',
      explanation: 'Cerdas: mayor agresividad en CELO y cerca del PARTO — especial cuidado al manipular lechones cerca de la madre. Verracos: peligrosísimos al pelear, deben moverse individualmente.',
    },
    {
      id: 'sst300d', points: 300, timerOverride: 30,
      question: 'Los organofosforados usados como garrapaticidas pueden causar síndrome colinérgico. La exposición dérmica puede dar síntomas tardíos de hasta:',
      context: '🦠 Los organofosforados se acumulan en tejido adiposo y sus efectos pueden aparecer mucho después de la exposición',
      options: ['Hasta 5 días después con agentes lipofílicos', 'Solo en las primeras 2 horas', 'Hasta 12 horas en todos los casos', 'Solo si se ingieren directamente'],
      answer: 0,
      hint: 'Los agentes más lipofílicos se redistribuyen lentamente desde el tejido adiposo, retrasando la aparición de síntomas',
      explanation: 'Organofosforados lipofílicos: síntomas dérmicos pueden aparecer hasta 5 DÍAS después por redistribución desde el tejido adiposo. Casos generales: hasta 12 h. Requiere monitoreo de colinesterasa.',
    },
  ],
  400: [
    {
      id: 'sst400a', points: 400, timerOverride: 30,
      question: 'Ante una autoinyección accidental de tilmicosina (Micotil 300) o vacuna oleosa, ¿cuál es la acción INMEDIATA correcta?',
      context: '💉 En estas emergencias el tiempo es crítico — cada minuto cuenta para el pronóstico del trabajador',
      options: ['Acudir INMEDIATAMENTE a urgencias llevando la etiqueta del producto e informar al médico que es un medicamento veterinario', 'Limpiar la zona con alcohol y observar por 24 horas antes de consultar', 'Aplicar hielo y colocar el miembro afectado en alto reposo', 'Consultar al veterinario de la finca antes de ir al hospital'],
      answer: 0,
      hint: 'El médico de urgencias necesita saber exactamente qué producto fue inyectado para dar el tratamiento correcto',
      explanation: 'Urgencias INMEDIATAS + etiqueta del producto + informar que es medicamento veterinario. Para vacuna oleosa: el médico debe saber que necesita descompresión quirúrgica urgente.',
    },
    {
      id: 'sst400b', points: 400, timerOverride: 30,
      question: 'Según la Resolución 2400 de 1979, ¿a partir de cuántos decibeles (dB) se exige al empleador suministrar protección auditiva al trabajador?',
      context: '🦠 El ruido excesivo en instalaciones pecuarias (especialmente porcinas) puede causar hipoacusia laboral permanente',
      options: ['Por encima de 85 dB', 'Por encima de 70 dB', 'Por encima de 60 dB', 'Por encima de 100 dB'],
      answer: 0,
      hint: 'Este es el límite internacional reconocido para daño auditivo por exposición prolongada',
      explanation: 'Res. 2400: se exige protección auditiva por encima de 85 dB. Los chillidos de porcinos pueden superar este límite fácilmente, haciendo obligatorio el uso de protectores auditivos.',
    },
    {
      id: 'sst400c', points: 400, timerOverride: 30,
      question: 'La rabia bovina en Colombia se transmite principalmente por:',
      context: '🦠 La rabia silvestre tiene un vector específico en la ganadería colombiana que la diferencia de la rabia urbana (perros)',
      options: ['Mordeduras de murciélagos hematófagos al ganado bovino, equino y bufalino', 'Contacto con heces de animales infectados en el potrero', 'Consumo de agua contaminada con saliva de animales rabiosos', 'Picaduras de garrapatas portadoras del virus'],
      answer: 0,
      hint: 'El vector de la rabia silvestre en Colombia es un mamífero volador que se alimenta de sangre',
      explanation: 'Rabia silvestre en Colombia: los MURCIÉLAGOS HEMATÓFAGOS transmiten el virus por mordedura al ganado (bovinos, bufalinos, equinos). Es mortal una vez aparecen síntomas.',
    },
    {
      id: 'sst400d', points: 400, timerOverride: 30,
      question: 'Para ENTRAR a una fosa de estiércol o biodigestor (espacio confinado con riesgo de H₂S), ¿cuál es el procedimiento mínimo obligatorio?',
      context: '🦠 Los espacios confinados en fincas pecuarias han causado muertes múltiples, incluyendo a rescatistas que intentaron salvar a las primeras víctimas',
      options: ['Medición de gases antes de entrar, ventilación forzada y aplicar procedimiento de espacios confinados', 'Entrar solo si el olor es soportable y con alguien afuera esperando', 'Usar mascarilla N95 y linterna para ver el gas', 'Esperar 30 minutos después de agitar el estiércol para que los gases se disipen'],
      answer: 0,
      hint: 'El H₂S a 100 ppm anula el olfato, por lo que confiar en "si huele mal no entro" puede ser fatal',
      explanation: 'OBLIGATORIO: medición de gases con detector, ventilación forzada y procedimiento de espacios confinados con equipo de rescate disponible. Nunca entrar sin estos tres elementos en fosas con estiércol.',
    },
  ],
  500: [
    {
      id: 'sst500a', points: 500, timerOverride: 30,
      question: 'Según el estudio del ICA (Osorio et al., 2013) con datos de 72.374 predios colombianos, ¿cuál fue la positividad de BRUCELOSIS bovina a nivel de predios/fincas?',
      context: '🦠 Conocer la prevalencia real de la brucelosis en Colombia es fundamental para evaluar el riesgo ocupacional del sector pecuario',
      options: ['23% de los predios (16.567 fincas positivas)', '5% de los predios (resultado muy bajo)', '50% de los predios (la mitad estaba afectada)', '2% de los predios (riesgo casi inexistente)'],
      answer: 0,
      hint: 'El porcentaje en predios (fincas) es mucho mayor que el porcentaje en bovinos individuales (5%). Casi 1 de cada 4 fincas',
      explanation: 'ICA/Osorio 2013: positividad del 5% en bovinos individuales (68.187/1.496.688) pero del 23% a nivel de PREDIOS (16.567 fincas). Implica riesgo alto de exposición ocupacional.',
    },
    {
      id: 'sst500b', points: 500, timerOverride: 30,
      question: '¿Qué vacunas componen el esquema de vacunación OCUPACIONAL prioritario recomendado para trabajadores del sector pecuario colombiano?',
      context: '🦠 La prevención biológica del trabajador pecuario requiere un esquema específico diferente al esquema general de la población',
      options: ['Tétanos (toxoide tetánico) y Rabia preexposición para personal de alto riesgo', 'Solo influenza estacional anual', 'Hepatitis B, varicela y fiebre amarilla', 'Brucelosis y leptospirosis (vacunas humanas disponibles en Colombia)'],
      answer: 0,
      hint: 'Las dos vacunas prioritarias corresponden a las dos enfermedades fatales más directamente ligadas a heridas y contacto con animales en la finca',
      explanation: 'Prioritarias: TÉTANOS (por heridas con material del suelo/corrales con Clostridium tetani) y RABIA preexposición (para veterinarios y trabajadores en zonas endémicas con murciélagos hematófagos).',
    },
    {
      id: 'sst500c', points: 500, timerOverride: 30,
      question: 'El Art. 2.2.4.6.32 del Decreto 1072/2015 obliga a investigar accidentes e incidentes laborales. ¿Cuántos días máximo tiene el empleador para realizar esa investigación desde que ocurre el evento?',
      context: '🏛️ La investigación oportuna de accidentes permite identificar causas y prevenir repetición — es obligación legal con plazo definido',
      options: ['15 días calendario', '30 días hábiles', '8 días hábiles', '60 días calendario'],
      answer: 0,
      hint: 'Es un plazo corto que busca que la investigación se haga mientras la evidencia y los testimonios están frescos',
      explanation: 'Art. 2.2.4.6.32 Decreto 1072: la investigación de accidentes e incidentes debe realizarse dentro de los 15 DÍAS CALENDARIO siguientes al evento. El reporte a la ARL también tiene plazos específicos.',
    },
    {
      id: 'sst500d', points: 500, timerOverride: 30,
      question: 'La Resolución 0312/2019 clasifica los estándares mínimos del SG-SST según el número de trabajadores y el nivel de riesgo. ¿En qué capítulo quedan las empresas con más de 50 trabajadores O aquellas con ≤50 trabajadores pero clasificadas en riesgo IV o V?',
      context: '🏛️ Las granjas pecuarias tecnificadas grandes o con manejo de animales peligrosos tienen obligaciones del nivel más exigente',
      options: ['Capítulo 3 (estándares completos y más exigentes)', 'Capítulo 1 (estándares simplificados)', 'Capítulo 2 (estándares intermedios)', 'Están exentas si tienen menos de 100 trabajadores'],
      answer: 0,
      hint: 'El riesgo IV o V (característico de la ganadería con manejo de animales) eleva las obligaciones independientemente del tamaño',
      explanation: 'Res. 0312/2019: Capítulo 3 = >50 trabajadores O ≤50 trabajadores con riesgo IV-V. Las granjas pecuarias con manejo de animales grandes suelen clasificar en riesgo IV o V, exigiendo estándares del Capítulo 3.',
    },
  ],
};

// Pool de preguntas por valor (5 base + 4 extra = 9 por valor)
export const questionPoolSST = (() => {
  const vals = [100, 200, 300, 400, 500];
  return Object.fromEntries(vals.map(pts => [
    pts,
    [
      ...categoriesSST.flatMap(c => c.questions.filter(q => q.points === pts)),
      ...extraQuestionsSST[pts],
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

const CAT_COLORS_SST = [
  '#1565C0', '#6A1B9A', '#2E7D32', '#C62828', '#00695C',
  '#E65100', '#37474F', '#AD1457', '#0277BD', '#BF360C',
];

export function buildGameCategoriesSST(numTeams) {
  const POINT_VALUES = [100, 200, 300, 400, 500];
  const poolSize = Math.min(...POINT_VALUES.map(pts => questionPoolSST[pts].length));
  const numCols = Math.min(Math.ceil(5 / numTeams) * numTeams, poolSize);

  const selected = {};
  for (const pts of POINT_VALUES) {
    selected[pts] = shuffle([...questionPoolSST[pts]]).slice(0, numCols);
  }

  return Array.from({ length: numCols }, (_, i) => ({
    id: `sst-slot-${i}`,
    name: String.fromCharCode(65 + i),
    color: CAT_COLORS_SST[i % CAT_COLORS_SST.length],
    type: 'pool',
    questions: POINT_VALUES.map(pts => selected[pts][i]),
  }));
}
