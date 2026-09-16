export type Locale = "es" | "en";

export type HomeContent = {
  locale: Locale;
  homeHref: string;
  counterpartHref: string;
  counterpartLabel: string;
  nav: {
    work: string;
    about: string;
    contact: string;
    menu: string;
    closeMenu: string;
    languageLabel: string;
  };
  hero: {
    firstSentence: string;
    headlineLines: string[];
    secondSentence: string;
    primaryCta: string;
    secondaryCta: string;
    context: Array<{ label: string; value: string }>;
  };
  work: {
    sectionLabel: string;
    title: string;
    intro: string;
    friction: string;
    exampleLabel: string;
    example: string;
    exampleResult: string;
    visualizationLabel: string;
    demo: {
      title: string;
      inputLabel: string;
      inputHint: string;
      submitLabel: string;
      sourceLabel: string;
      resultLabel: string;
      idleMessage: string;
      fields: {
        amount: string;
        category: string;
        transactionType: string;
        date: string;
        review: string;
      };
      values: {
        expense: string;
        food: string;
        inferred: string;
        pending: string;
        notPersisted: string;
      };
      persistenceLabel: string;
      captionLabel: string;
      caption: string;
      disclaimer: string;
      invalidMessage: string;
      announcement: string;
    };
    workflowTitle: string;
    workflowDescription: string;
    workflow: Array<{ label: string; detail: string; emphasis?: boolean }>;
    roleLabel: string;
    role: string;
    statusLabel: string;
    status: string;
    caseStudyLabel: string;
    caseStudyHref: string;
    productLabel: string;
  };
  about: {
    sectionLabel: string;
    title: string;
    headlineLines: string[];
    bio: string;
    contexts: Array<{ label: string; value: string }>;
  };
  contact: {
    sectionLabel: string;
    title: string;
    headlineLines: string[];
    body: string;
    emailLabel: string;
  };
  footer: {
    languageLabel: string;
  };
};

export type SiteNavigationContent = Pick<
  HomeContent,
  "locale" | "homeHref" | "counterpartHref" | "counterpartLabel" | "nav"
>;

export const homeEs: HomeContent = {
  locale: "es",
  homeHref: "/",
  counterpartHref: "/en",
  counterpartLabel: "EN",
  nav: {
    work: "Trabajo",
    about: "Sobre mí",
    contact: "Contacto",
    menu: "Menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  hero: {
    firstSentence:
      "Soy desarrollador enfocado en inteligencia artificial y automatización.",
    headlineLines: [
      "Soy desarrollador",
      "enfocado en",
      "inteligencia artificial y",
      "automatización.",
    ],
    secondSentence:
      "Construyo productos reales para resolver problemas concretos mientras sigo creciendo como ingeniero.",
    primaryCta: "Explorar mi trabajo",
    secondaryCta: "Contactarme",
    context: [
      { label: "Focus", value: "IA / Automatización" },
      { label: "Current", value: "Construyendo productos reales" },
      { label: "Status", value: "Creciendo como ingeniero" },
    ],
  },
  work: {
    sectionLabel: "Trabajo seleccionado",
    title: "Moni",
    intro:
      "Registrar un gasto no debería convertirse en otra tarea pendiente.",
    friction:
      "Las aplicaciones financieras tradicionales exigen abrir otra herramienta, encontrar el flujo correcto y completar cada dato. Moni reduce esa fricción usando WhatsApp, una aplicación que ya forma parte del día a día.",
    exampleLabel: "Un mensaje basta",
    example: "10000 en comida",
    exampleResult:
      "Moni lo interpreta como datos financieros estructurados: monto, tipo de movimiento, categoría y fecha.",
    visualizationLabel: "Visualización explicativa del producto",
    demo: {
      title: "Demostración de interpretación",
      inputLabel: "Mensaje de ejemplo",
      inputHint: "Esta demostración local reconoce únicamente la frase incluida.",
      submitLabel: "Interpretar",
      sourceLabel: "Frase de origen",
      resultLabel: "Interpretación estructurada",
      idleMessage: "Envía el mensaje de ejemplo para revelar su interpretación.",
      fields: {
        amount: "Monto",
        category: "Categoría",
        transactionType: "Tipo",
        date: "Fecha",
        review: "Revisión",
      },
      values: {
        expense: "Gasto",
        food: "Comida",
        inferred: "No especificada (inferida)",
        pending: "Pendiente de revisión",
        notPersisted: "No guardado",
      },
      persistenceLabel: "Persistencia",
      captionLabel: "Visualización explicativa del producto",
      caption:
        "La frase se representa como monto, categoría, tipo, fecha y estado de revisión.",
      disclaimer:
        "Representación local de demostración. No se comunica con Moni ni guarda una transacción.",
      invalidMessage: "Usa la frase de demostración: “10000 en comida”.",
      announcement:
        "Interpretación mostrada: monto 10000, categoría Comida, tipo Gasto, fecha no especificada e inferida, pendiente de revisión. No guardado.",
    },
    workflowTitle: "Del mensaje al registro",
    workflowDescription:
      "El análisis determinista ocurre primero. La inteligencia artificial interviene solo si hace falta, y ningún movimiento se guarda sin confirmación del usuario.",
    workflow: [
      { label: "Mensaje de WhatsApp", detail: "Entrada en lenguaje natural" },
      { label: "Análisis determinista", detail: "Primera ruta de interpretación" },
      { label: "IA si hace falta", detail: "Fallback controlado", emphasis: true },
      { label: "Interpretación estructurada", detail: "Monto, tipo, categoría y fecha" },
      { label: "Confirmar, corregir o cancelar", detail: "Revisión explícita del usuario" },
      { label: "Registro", detail: "Persistencia después de confirmar" },
    ],
    roleLabel: "Mi papel",
    role:
      "Diseñé y construí Moni de principio a fin: diseño de producto, arquitectura y desarrollo full-stack. Usé herramientas de IA como apoyo para investigar, programar, revisar, depurar y acelerar el trabajo.",
    statusLabel: "Estado actual",
    status:
      "Moni funciona en producción con seis usuarios reales, actualmente personas cercanas a mí. El flujo principal de transacciones está operativo, el dashboard está disponible y el producto continúa evolucionando.",
    caseStudyLabel: "Ver caso técnico",
    caseStudyHref: "/projects/moni",
    productLabel: "Visitar Moni ↗",
  },
  about: {
    sectionLabel: "Sobre mí",
    title: "Aprender mientras construyo.",
    headlineLines: ["Aprender", "mientras", "construyo."],
    bio:
      "Estudio Ingeniería de Sistemas en la UNAD mientras me formo en Programación e Inteligencia Artificial en Campuslands y continúo aprendiendo inglés. Trabajo como Auxiliar de Sistemas en Petrocasinos S.A. Me atraen los proyectos que me obligan a salir de lo conocido, investigar y aprender mientras construyo soluciones reales.",
    contexts: [
      { label: "UNAD", value: "Ingeniería de Sistemas" },
      { label: "Campuslands", value: "Programación / Inteligencia Artificial" },
      { label: "Inglés", value: "En curso" },
      { label: "Petrocasinos S.A.", value: "Auxiliar de Sistemas" },
    ],
  },
  contact: {
    sectionLabel: "Contacto",
    title: "Hablemos de un problema que valga la pena resolver.",
    headlineLines: ["Hablemos de un", "problema que", "valga la pena", "resolver."],
    body: "Si mi forma de construir encaja con lo que tienes en mente, escríbeme.",
    emailLabel: "Escribir a soporte@zehrty.dev",
  },
  footer: {
    languageLabel: "View in English",
  },
};

export const homeEn: HomeContent = {
  locale: "en",
  homeHref: "/en",
  counterpartHref: "/",
  counterpartLabel: "ES",
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  hero: {
    firstSentence:
      "I’m a developer focused on artificial intelligence and automation.",
    headlineLines: [
      "I’m a developer",
      "focused on",
      "artificial intelligence and",
      "automation.",
    ],
    secondSentence:
      "I build real products to solve concrete problems while continuing to grow as an engineer.",
    primaryCta: "Explore my work",
    secondaryCta: "Get in touch",
    context: [
      { label: "Focus", value: "AI / Automation" },
      { label: "Current", value: "Building real products" },
      { label: "Status", value: "Growing as an engineer" },
    ],
  },
  work: {
    sectionLabel: "Selected work",
    title: "Moni",
    intro: "Logging an expense should not become another task to put off.",
    friction:
      "Traditional finance apps make people open another tool, find the right flow, and enter every detail. Moni reduces that friction through WhatsApp—an app already woven into everyday routines.",
    exampleLabel: "One message is enough",
    example: "10000 en comida",
    exampleResult:
      "Moni interprets it as structured financial data: amount, transaction type, category, and date.",
    visualizationLabel: "Explanatory product visualization",
    demo: {
      title: "Interpretation demonstration",
      inputLabel: "Example message",
      inputHint: "This local demonstration recognizes only the included phrase.",
      submitLabel: "Interpret",
      sourceLabel: "Source phrase",
      resultLabel: "Structured interpretation",
      idleMessage: "Submit the example message to reveal its interpretation.",
      fields: {
        amount: "Amount",
        category: "Category",
        transactionType: "Type",
        date: "Date",
        review: "Review",
      },
      values: {
        expense: "Expense",
        food: "Food",
        inferred: "Unspecified (inferred)",
        pending: "Pending review",
        notPersisted: "Not saved",
      },
      persistenceLabel: "Persistence",
      captionLabel: "Explanatory product visualization",
      caption:
        "The phrase is represented as an amount, category, type, date, and review state.",
      disclaimer:
        "Local demonstration only. It does not contact Moni or save a transaction.",
      invalidMessage: "Use the demonstration phrase: “10000 en comida”.",
      announcement:
        "Interpretation shown: amount 10000, category Food, type Expense, date unspecified and inferred, pending review. Not saved.",
    },
    workflowTitle: "From message to record",
    workflowDescription:
      "Deterministic parsing runs first. AI steps in only when needed, and no transaction is stored without the user’s confirmation.",
    workflow: [
      { label: "WhatsApp message", detail: "Natural-language input" },
      { label: "Deterministic parsing", detail: "Primary interpretation path" },
      { label: "AI when needed", detail: "Controlled fallback", emphasis: true },
      { label: "Structured interpretation", detail: "Amount, type, category, and date" },
      { label: "Confirm, correct, or cancel", detail: "Explicit user review" },
      { label: "Record", detail: "Stored only after confirmation" },
    ],
    roleLabel: "My role",
    role:
      "I designed and built Moni end to end: product design, architecture, and full-stack development. I used AI tools to support research, programming, review, debugging, and faster iteration.",
    statusLabel: "Current status",
    status:
      "Moni is running in production with six real users, currently people close to me. The core transaction flow is operational, the dashboard is available, and the product continues to evolve.",
    caseStudyLabel: "View technical case study",
    caseStudyHref: "/en/projects/moni",
    productLabel: "Visit Moni ↗",
  },
  about: {
    sectionLabel: "About",
    title: "Learning by building.",
    headlineLines: ["Learning", "by building."],
    bio:
      "I study Systems Engineering at UNAD while training in Programming and Artificial Intelligence at Campuslands and continuing to learn English. I work as an IT Assistant at Petrocasinos S.A. I’m drawn to projects that push me beyond what I already know, requiring me to investigate and learn while building real solutions.",
    contexts: [
      { label: "UNAD", value: "Systems Engineering" },
      { label: "Campuslands", value: "Programming / Artificial Intelligence" },
      { label: "English", value: "In progress" },
      { label: "Petrocasinos S.A.", value: "IT Assistant" },
    ],
  },
  contact: {
    sectionLabel: "Contact",
    title: "Let’s talk about a problem worth solving.",
    headlineLines: ["Let’s talk about", "a problem", "worth solving."],
    body: "If the way I build fits what you have in mind, send me a message.",
    emailLabel: "Email soporte@zehrty.dev",
  },
  footer: {
    languageLabel: "Ver en español",
  },
};
