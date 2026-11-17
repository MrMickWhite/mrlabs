
export const siteConfig = {
  brand: 'mrmickwhite Esencias',
  domain: 'labs.mrmickwhite.com',
  whatsapp: '593985210501',
  email: 'info@labs.mrmickwhite.com',
  whatsappMessage: 'Hola, quiero información sobre las esencias mrmickwhite de 30 ml.'
};

export const navTabs = [
  { href: 'index.html', label: 'Inicio', key: 'inicio' },
  { href: 'esencias.html', label: 'Esencias', key: 'esencias' },
  { href: 'jabones.html', label: 'Jabones', key: 'jabones' },
  { href: 'cremas.html', label: 'Cremas', key: 'cremas' },
  { href: 'nosotros.html', label: 'Nosotros', key: 'nosotros' },
  { href: 'contacto.html', label: 'Contacto', key: 'contacto' },
];

export const families = [
  { id: 'todos', label: 'Todas' },
  { id: 'citricas', label: 'Cítricas' },
  { id: 'florales', label: 'Florales' },
  { id: 'especiadas', label: 'Especiadas' },
  { id: 'herbales', label: 'Herbales' },
  { id: 'base', label: 'Vehicular / Base' },
];

export const essences = [
  {
    id: 'naranja',
    name: 'Naranja',
    subtitle: 'Cítrica Vibrante',
    family: 'citricas',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#ef7d1f',
    icon: '🍊',
    heroImage: '',
    labelImage: '',
    overview: 'Variante cítrica con perfil alegre y brillante, pensada para rutinas de activación y bienestar diario.',
    slogan: 'Energía luminosa para tus rituales diarios.',
    tags: ['Energía', 'Alegría', 'Frescura'],
    ingredients: ['Paraffinum Liquidum', 'Citrus Sinensis Oil'],
    benefits: [
      'Aporta una sensación aromática fresca y optimista.',
      'Ideal para masajes revitalizantes y uso diurno.',
      'Se integra bien en una línea visual cálida y vibrante.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Presentación de 30 ml con enfoque cítrico dentro de la colección base de mrmickwhite Esencias.'
  },
  {
    id: 'lima',
    name: 'Lima',
    subtitle: 'Energía Cítrica',
    family: 'citricas',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#7cb023',
    icon: '🍋',
    labelImage: 'assets/images/label-lima.webp',
    overview: 'Aroma cítrico diseñado para una percepción fresca, limpia y fácil de identificar dentro de la línea.',
    slogan: 'Frescura botánica que impulsa el bienestar.',
    tags: ['Frescura', 'Vitalidad', 'Bienestar'],
    ingredients: ['Paraffinum Liquidum', 'Citrus Aurantifolia Oil'],
    benefits: [
      'Aporta una sensación de frescura y vitalidad al cuerpo y la mente.',
      'Ideal para masajes revitalizantes que ayudan a mejorar la concentración.',
      'Aroma cítrico que promueve bienestar y energía positiva.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'No usar en mujeres embarazadas sin orientación profesional.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Etiqueta verde vibrante, fácil de distinguir a distancia y limpia para impresión en frasco de 30 ml.'
  },
  {
    id: 'bergamota',
    name: 'Bergamota',
    subtitle: 'Frescura Equilibrada',
    family: 'citricas',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#9bb22e',
    icon: '🌿',
    labelImage: '',
    overview: 'Una presentación proyectada para ampliar la colección con una nota cítrica-herbal más elegante y sobria.',
    slogan: 'Balance cítrico con presencia refinada.',
    tags: ['Equilibrio', 'Frescura', 'Armonía'],
    ingredients: ['Paraffinum Liquidum', 'Citrus Bergamia Oil'],
    benefits: [
      'Perfil aromático fresco y equilibrado.',
      'Ideal para una experiencia sensorial limpia y refinada.',
      'Aporta variedad elegante dentro del catálogo.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Diseñada como esencia de 30 ml para enriquecer la línea cítrica con una estética premium.'
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    subtitle: 'Serenidad Floral',
    family: 'florales',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#8b66d6',
    icon: '🪻',
    labelImage: 'assets/images/label-lavanda.webp',
    overview: 'Presentación floral con estética suave y serena, pensada para masajes nocturnos y ambientes tranquilos.',
    slogan: 'Calma visual y bienestar en cada gota.',
    tags: ['Calma', 'Bienestar', 'Armonía'],
    ingredients: ['Paraffinum Liquidum', 'Lavandula Angustifolia Oil'],
    benefits: [
      'Ayuda a promover una sensación de calma y relajación.',
      'Ideal para masajes nocturnos o de descanso.',
      'Su aroma floral contribuye al bienestar y a un ambiente sereno.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'No usar en mujeres embarazadas sin orientación profesional.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Etiqueta lavanda con jerarquía legible y áreas de texto pensadas para impresión clara en 30 ml.'
  },
  {
    id: 'clavo-de-olor',
    name: 'Clavo de olor',
    subtitle: 'Ritual Botánico',
    family: 'especiadas',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#d8521f',
    icon: '🌰',
    labelImage: 'assets/images/label-clavo.webp',
    overview: 'Variante especiada con presencia intensa y una identidad visual terracota que resalta en la línea.',
    slogan: 'Una esencia envolvente con carácter botánico.',
    tags: ['Equilibrio', 'Bienestar', 'Armonía'],
    ingredients: ['Paraffinum Liquidum', 'Syzygium Aromaticum Oil'],
    benefits: [
      'Ayuda a relajar la tensión muscular y mental.',
      'Ideal para masajes revitalizantes y de bienestar.',
      'Aroma especiado y envolvente que promueve el equilibrio.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'No usar en mujeres embarazadas sin orientación profesional.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Diseño en tonos terracota y crema, pensado para lectura clara y fácil diferenciación.'
  },
  {
    id: 'semilla-de-uva',
    name: 'Semilla de uva',
    subtitle: 'Seda Nutritiva',
    family: 'base',
    type: 'Aceite vehicular',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#6f8a2a',
    icon: '🍇',
    labelImage: 'assets/images/label-uva.webp',
    overview: 'Aceite base dentro de la línea, con una presentación sobria y elegante para una percepción premium.',
    slogan: 'Ligereza, nutrición y una imagen de pureza botánica.',
    tags: ['Nutrición', 'Ligereza', 'Protección'],
    ingredients: ['Vitis Vinifera (Grape) Seed Oil'],
    benefits: [
      'Nutre e hidrata profundamente la piel sin sensación grasa.',
      'Mejora la elasticidad y ayuda a mantener la piel suave y tersa.',
      'Excelente deslizamiento, ideal como aceite base para masajes.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Aceite vehicular de 30 ml con identidad oliva y crema, útil como producto base y también como venta individual.'
  },
  {
    id: 'te',
    name: 'Té',
    subtitle: 'Pureza y Enfoque',
    family: 'herbales',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#3f8a4a',
    icon: '🍃',
    labelImage: '',
    overview: 'Propuesta herbal que refuerza la percepción de limpieza, enfoque y una estética botánica sobria.',
    slogan: 'Una nota verde para rituales más serenos.',
    tags: ['Pureza', 'Enfoque', 'Balance'],
    ingredients: ['Paraffinum Liquidum', 'Camellia Sinensis Extract'],
    benefits: [
      'Contribuye a una experiencia aromática limpia y enfocada.',
      'Aporta variedad herbal a la línea.',
      'Ideal para ampliar el catálogo con una opción sobria.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Concepto para presentación de 30 ml, dentro de una línea herbal elegante y limpia.'
  },
  {
    id: 'hierba-luisa',
    name: 'Hierba luisa',
    subtitle: 'Armonía Herbal',
    family: 'herbales',
    type: 'Aceite para masajes',
    volume: '30 ml',
    ounces: '1.01 fl oz',
    accent: '#5fa024',
    labelImage: '',
    overview: 'Variante herbal en desarrollo con un perfil visual suave y natural para reforzar la colección botánica.',
    slogan: 'Aroma herbal para una colección más completa.',
    tags: ['Herbal', 'Armonía', 'Bienestar'],
    ingredients: ['Paraffinum Liquidum', 'Cymbopogon Citratus Extract'],
    benefits: [
      'Aporta una sensación herbal suave y agradable.',
      'Enriquece la línea con una identidad botánica reconocible.',
      'Funciona bien para comunicación de calma y naturalidad.'
    ],
    precautions: [
      'Solo para uso externo.',
      'Realice una prueba en una pequeña área de la piel antes de usar.',
      'Evite el contacto con ojos y mucosas.',
      'No aplicar sobre piel irritada o lesionada.',
      'Mantener fuera del alcance de los niños.',
      'Conservar en un lugar fresco, seco y alejado de la luz directa.'
    ],
    presentation: 'Esencia de 30 ml pensada para completar la familia herbal de mrmickwhite Esencias.'
  },
];

export const values = [
  { title: 'Botánico', text: 'Ingredientes naturales cuidadosamente seleccionados por su pureza y calidad.', icon: '☘️' },
  { title: 'Bienestar', text: 'Productos que promueven una sensación de equilibrio físico, mental y emocional.', icon: '🧘' },
  { title: 'Artesanal', text: 'Hechos en pequeños lotes con dedicación y respeto por la naturaleza.', icon: '🤲' },
  { title: 'Presentación premium', text: 'Envases de vidrio ámbar que protegen la esencia y preservan su calidad.', icon: '🧴' },
];
