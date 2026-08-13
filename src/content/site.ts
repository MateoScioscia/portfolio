// ============================================================
//  TODO EL CONTENIDO DE LA PÁGINA VIVE ACÁ.
//  Para cambiar cualquier texto de la web, editás este archivo.
//  Lo que diga TODO todavía falta completar.
// ============================================================

export const profile = {
  name: "Mateo Scioscia",
  firstName: "Mateo",
  role: "Analista de Datos & BI",
  tagline:
    "Transformo datos en información clara para que los equipos decidan mejor. Power BI, SQL y Python aplicados al negocio.",
  location: "Buenos Aires, Argentina",
  email: "matescioscia@gmail.com",
  phone: "+54 9 11 6484-0645",
  available: true,
  photo: "/profile.jpg", // guardá la foto ahí para que aparezca
  cv: "/cv.pdf",
};

export const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateo-scioscia-1b2060200/",
  },
  // TODO: agregar GitHub cuando lo tengas
  // { label: "GitHub", href: "https://github.com/usuario" },
];

export const about = {
  eyebrow: "Sobre mí",
  heading: "Datos que sirven para decidir",
  paragraphs: [
    "Estudio la Licenciatura en Sistemas de Información de las Organizaciones en la UBA y hace más de tres años trabajo con datos: los extraigo, los limpio y los convierto en tableros que la gente usa todos los días.",
    "Hoy estoy en Prevención de Lavado de Activos en Grupo ST, donde construyo dashboards de control de riesgo financiero en tiempo real y automatizo procesos operativos con Power Automate. Antes fui Analista BI en Life Seguros durante casi tres años, manteniendo y ampliando paneles en Power BI y Qlik Sense.",
    "Me interesa el punto donde el análisis de datos se cruza con la inteligencia artificial. Curioso, proactivo y de adaptación rápida: si algo no sé, lo aprendo.",
  ],
};

// Contadores animados del hero. Ajustá los números si preferís otros.
export const stats = [
  { value: 4, suffix: "+", label: "Años trabajando con datos" },
  { value: 3, suffix: "", label: "Empresas" },
  { value: 5, suffix: "", label: "Formaciones completadas" },
  { value: 10, suffix: "+", label: "Herramientas y tecnologías" },
];

export const skillGroups = [
  {
    title: "Business Intelligence",
    items: [
      "Power BI (DAX, Power Query)",
      "Qlik Sense",
      "Looker Studio",
      "Diseño de dashboards",
      "Modelado de datos",
    ],
  },
  {
    title: "Datos y análisis",
    items: [
      "SQL",
      "Python",
      "Excel avanzado (tablas dinámicas, macros)",
      "Limpieza y transformación",
      "Análisis exploratorio",
    ],
  },
  {
    title: "Automatización y procesos",
    items: [
      "Power Automate",
      "Optimización de procesos operativos",
      "Matrices de riesgo",
      "Seguimiento de issues de datos",
    ],
  },
  {
    title: "Negocio y comunicación",
    items: [
      "Informes de negocio",
      "Presentaciones ejecutivas",
      "Resolución de problemas",
      "Inglés A2 (conversacional)",
    ],
  },
];

// Trayectoria laboral. Se muestra como línea de tiempo dentro de "Sobre mí".
// Si no la querés, borrá las entradas y la sección desaparece sola.
export const experience = [
  {
    role: "Prevención de lavado de activos — área financiera",
    company: "Grupo ST",
    period: "Abr 2026 - presente",
    bullets: [
      "Dashboards de control para el seguimiento en tiempo real de matrices de riesgo financiero.",
      "Automatización y optimización de procesos operativos con Power Automate.",
      "Análisis estratégico de datos orientado a la mitigación de lavado de dinero.",
    ],
  },
  {
    role: "Analista BI",
    company: "Life Seguros",
    period: "May 2023 - Abr 2026",
    bullets: [
      "Mantenimiento de paneles en Power BI y procesos en Qlik Sense.",
      "Desarrollo e implementación de mejoras y nuevos requerimientos.",
      "Seguimiento de issues a nivel de datos y visualización, informes de negocio.",
    ],
  },
  {
    role: "Call center de cobranzas",
    company: "Gestión de préstamos y cobranzas",
    period: "Jun 2022 - May 2023",
    bullets: [
      "Análisis de datos de clientes para entender necesidades financieras y resolver problemas de pago.",
      "Informes de objetivos de recaudación y disminución de cuentas en mora.",
    ],
  },
];

export const education = [
  {
    title: "Licenciatura en Sistemas de Información de las Organizaciones",
    org: "Universidad de Buenos Aires",
    period: "Mar 2025 - Dic 2029",
  },
  { title: "Python", org: "Udemy", period: "Ene 2026 - Feb 2026" },
  {
    title: "Python para análisis de datos (Inicial)",
    org: "Educación IT",
    period: "Nov 2023 - Dic 2023",
  },
  { title: "Business Analytics", org: "Coder House", period: "Ago 2023 - Oct 2023" },
  { title: "Data Analytics", org: "Digital House", period: "Nov 2022 - Abr 2023" },
];

export type Project = {
  slug: string; // define la URL: /proyectos/<slug>
  title: string;
  summary: string; // 1-2 frases, se ve en la grilla
  description: string[]; // párrafos de la página de detalle
  highlights?: string[]; // bullets de "qué resuelve"
  tags: string[];
  category: string;
  image?: string; // en public/projects/... ; si falta, se muestra un bloque con la inicial
  /**
   * URL para embeber el tablero e que quede interactivo dentro del portfolio.
   *
   * Power BI: Power BI Service → abrir el reporte → Archivo → Insertar informe
   *   → Publicar en la web → copiar el link (https://app.powerbi.com/view?r=...).
   *
   * Looker Studio: primero compartir el reporte como "Cualquier persona con el
   *   enlace puede ver", después usar la URL de /embed/reporting/<id>.
   */
  embed?: string;
  live?: string;
  repo?: string;
  year?: string;
};

// Categorías de los filtros. "Todos" siempre va primero.
export const projectCategories = [
  "Todos",
  "Power BI",
  "Looker Studio",
  "Desarrollo web",
];

export const projects: Project[] = [
  {
    slug: "liga-argentina",
    title: "Liga Profesional Argentina — Estadísticas",
    summary:
      "Tablero de 14 páginas para explorar el rendimiento de los equipos del fútbol argentino: goles, ataques, posesión, faltas, arbitrajes y comparación directa entre clubes.",
    description: [
      "Reporte completo de la Liga Profesional Argentina construido en Power BI. Modelé los datos de la temporada y armé una navegación por secciones para que cualquiera pueda responder sus propias preguntas sin pedirme nada.",
      "El tablero recorre la tabla de posiciones, goles, ataques, córners, partidos, faltas, pases, defensa, posesión y arbitrajes, e incluye una página de comparación directa entre dos equipos y un tooltip personalizado con el detalle de cada árbitro.",
    ],
    highlights: [
      "14 páginas navegables con menú propio",
      "Página de comparación entre equipos",
      "Tooltip personalizado con el detalle por árbitro",
      "Medidas en DAX para métricas ofensivas y defensivas",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Modelado de datos"],
    category: "Power BI",
    year: "2025",
    // TODO: pegar acá la URL de "Publicar en la web" para que quede interactivo
    embed: "",
    image: "/projects/liga-argentina.png",
  },
  {
    slug: "eurocopa-2024",
    title: "Eurocopa 2024 — Análisis del torneo",
    summary:
      "Tablero de 10 páginas sobre la Euro 2024: goles, tiros por país y por jugador, faltas, córners, pases y defensa, con una vista para comparar selecciones.",
    description: [
      "Análisis de la Eurocopa 2024 en Power BI. Armé el modelo de datos del torneo y diseñé el reporte con identidad visual propia (fotos de estadios y branding del campeonato) para que se lea como un producto terminado, no como una planilla.",
      "Cada página aísla una dimensión del juego —ofensiva, defensiva, disciplina, distribución— y la última permite comparar dos selecciones lado a lado.",
    ],
    highlights: [
      "10 páginas temáticas del torneo",
      "Tiros desglosados por país y por jugador",
      "Vista de comparación entre selecciones",
      "Diseño visual cuidado con recursos gráficos propios",
    ],
    tags: ["Power BI", "DAX", "Power Query", "Visualización"],
    category: "Power BI",
    year: "2024",
    // TODO: pegar acá la URL de "Publicar en la web" para que quede interactivo
    embed: "",
    image: "/projects/eurocopa.png",
  },
  {
    slug: "analisis-jugadores",
    title: "Análisis de jugadores — trabajo para cliente",
    summary:
      "Tablero de scouting futbolístico hecho para un cliente: rendimiento por jugador con métricas avanzadas (xG, G+A por 90', pressing, duelos) organizadas en perfil ofensivo, defensivo y de construcción de juego.",
    description: [
      "Reporte de análisis de jugadores desarrollado en Looker Studio por encargo de un cliente. Traduce estadísticas crudas de partidos en un perfil de rendimiento legible de un vistazo, para poder comparar futbolistas sin tener que abrir una planilla.",
      "El tablero arranca con un resumen del jugador —G+A por 90', xG total, porcentaje de pases, balance de posesión e índice de pressing— y después profundiza en tres bloques: acciones ofensivas (tiros, toques en el área, regates eficaces), acciones defensivas (duelos ganados, recuperaciones, intercepciones, tarjetas) y construcción de juego (pases por dirección, pases clave, centros, efectividad en envíos largos).",
      "Incluye gráficos de contraste que son los que realmente responden preguntas: xG acumulado contra goles reales para ver si el jugador rinde por encima o por debajo de lo esperado, tiros totales contra tiros al arco, y volumen de juego contra eficacia.",
    ],
    highlights: [
      "Trabajo freelance entregado a un cliente real",
      "Métricas avanzadas: xG, G+A por 90', índice de pressing, % de duelos",
      "Perfil dividido en ataque, defensa y construcción de juego",
      "xG acumulado vs goles reales para medir sobre/bajo rendimiento",
    ],
    tags: [
      "Looker Studio",
      "Google Data Studio",
      "Visualización de datos",
      "Métricas avanzadas",
    ],
    category: "Looker Studio",
    year: "2023", // TODO: confirmar el año
    /**
     * El reporte es público, pero tiene deshabilitada la inserción en otros
     * sitios. Para que se vea embebido acá: Looker Studio → Compartir →
     * Insertar informe → activar "Habilitar la inserción", y después pegar:
     * https://lookerstudio.google.com/embed/reporting/f91a92a7-aad6-46da-b471-91a68004e802
     * Mientras tanto, el botón "Ver el sitio" abre el reporte real.
     */
    embed: "",
    live: "https://datastudio.google.com/s/q1mOCYTKEnI",
    image: "/projects/analisis-jugadores.png",
  },
  {
    slug: "tienda-juegos",
    title: "Casa de Juegos — tienda PS4/PS5",
    summary:
      "Tienda de juegos digitales y membresías PS Plus, con catálogo filtrable, ofertas, preventas, panel de administración y analítica de visitas.",
    description: [
      "Tienda online de juegos digitales y suscripciones para PS4 y PS5, construida de punta a punta con Next.js y Prisma.",
      "El catálogo tiene buscador y filtros por categoría, consola y estado (solo ofertas, próximamente), con precios diferenciados por tipo de cuenta y avisos de preventa. La compra se coordina por WhatsApp o Instagram desde cada producto, y una sección de preguntas frecuentes resuelve las dudas típicas antes de que el cliente escriba.",
      "Por detrás hay un panel de administración con login propio para cargar productos, gestionar precios y ofertas, y seguir la analítica de visitas e interacciones con cada juego.",
    ],
    highlights: [
      "Catálogo con buscador y filtros por categoría, consola y ofertas",
      "Precios por tipo de cuenta, ofertas y preventas",
      "Panel de administración con autenticación y analítica",
      "Registro de interacciones por producto para medir qué se busca",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    category: "Desarrollo web",
    year: "2026",
    image: "/projects/tienda-juegos.png",
  },
];

export const contact = {
  eyebrow: "Contacto",
  heading: "Trabajemos juntos",
  blurb:
    "Estoy abierto a propuestas de análisis de datos, BI y automatización. Escribime y te respondo a la brevedad.",
};
