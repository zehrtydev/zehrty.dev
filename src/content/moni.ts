import type { SiteNavigationContent } from "./home";

type LabeledValue = { label: string; value: string };
type LabeledDetail = { label: string; detail: string };

export type MoniCaseStudyContent = SiteNavigationContent & {
  skipLabel: string;
  footerLanguageLabel: string;
  externalTabLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    descriptor: string;
    intro: string;
    metadata: string;
    productCta: string;
    exploreCta: string;
    evidenceLabel: string;
    evidence: LabeledValue[];
  };
  problem: {
    title: string;
    paragraphs: string[];
    statement: string;
  };
  decision: {
    title: string;
    paragraphs: string[];
    responsibilities: Array<{
      label: string;
      title: string;
      example: string;
      detail: string;
    }>;
    continuation: string[];
    statement: string;
  };
  flow: {
    title: string;
    opening: string;
    diagramLabel: string;
    messageLabel: string;
    message: string;
    parserLabel: string;
    parserDetail: string;
    decisionLabel: string;
    yesLabel: string;
    noLabel: string;
    fallbackLabel: string;
    fallbackDetail: string;
    structuredLabel: string;
    draftLabel: string;
    draftDisclaimer: string;
    draft: LabeledValue[];
    reviewLabel: string;
    reviewDetail: string;
    actions: string[];
    persistenceLabel: string;
    persistenceDetail: string;
    explanations: LabeledDetail[];
    statement: string;
  };
  architecture: {
    title: string;
    body: string;
    systemLabel: string;
    nodes: Array<{ label: string; details?: string[] }>;
    operationsLabel: string;
    operations: string;
    roleLabel: string;
    role: string;
    aiUse: LabeledDetail[];
    statement: string;
  };
  production: {
    title: string;
    paragraphs: string[];
    timeline: LabeledDetail[];
    responsibilitiesLabel: string;
    responsibilities: string[];
    statement: string;
    closing: string;
  };
  users: {
    title: string;
    opening: string[];
    evidence: LabeledValue[];
    paragraphs: string[];
    evolution: string[];
    statement: string;
    learningTitle: string;
    learnings: string[];
    reflection: string;
    currentState: string;
  };
  closing: {
    statement: string;
    body: string;
    productCta: string;
    backCta: string;
    backHref: string;
  };
};

export const moniEs: MoniCaseStudyContent = {
  locale: "es",
  homeHref: "/",
  counterpartHref: "/en/projects/moni",
  counterpartLabel: "EN",
  skipLabel: "Saltar al contenido",
  footerLanguageLabel: "View in English",
  externalTabLabel: "(abre en una pestaña nueva)",
  nav: {
    work: "Trabajo",
    about: "Sobre mí",
    contact: "Contacto",
    menu: "Menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
  },
  hero: {
    eyebrow: "CASE STUDY / 01",
    title: "MONI",
    descriptor: "Asistente financiero por WhatsApp.",
    intro:
      "Un producto que nació para reducir la fricción de registrar gastos y terminó convirtiéndose en mi primer sistema real operando con múltiples usuarios.",
    metadata: "Producto personal · Full-stack · IA aplicada · Producción",
    productCta: "Visitar Moni ↗",
    exploreCta: "Explorar el caso ↓",
    evidenceLabel: "Evidencia actual",
    evidence: [
      { label: "Estado", value: "En producción" },
      { label: "Usuarios", value: "6 personas reales" },
      { label: "Sistema", value: "Flujo principal operativo" },
      { label: "Consulta", value: "Dashboard disponible" },
    ],
  },
  problem: {
    title: "01 — El problema",
    paragraphs: [
      "Registrar gastos debería ser una acción rápida, pero en la práctica suele convertirse en otra tarea pendiente.",
      "Muchas aplicaciones financieras requieren abrir una app, entrar al flujo correcto y completar varios campos manualmente. Esa fricción hace que el registro se postergue, se haga de forma incompleta o simplemente se abandone.",
      "Moni nació primero como una herramienta para mí mismo. Quería llevar un mejor control de mis gastos sin depender de recordar entrar a otra aplicación cada vez que hacía una compra.",
      "La oportunidad estaba en reducir la cantidad de pasos. Si WhatsApp ya formaba parte de mi rutina diaria, registrar un gasto podía convertirse en algo tan natural como enviar un mensaje.",
    ],
    statement:
      "El problema no era almacenar los gastos. Era lograr que registrarlos requiriera el menor esfuerzo posible.",
  },
  decision: {
    title: "02 — La decisión de producto",
    paragraphs: [
      "En lugar de construir primero otra interfaz para capturar movimientos, decidí llevar la entrada de datos a una herramienta que el usuario ya utiliza constantemente: WhatsApp.",
      "La decisión no buscaba reemplazar por completo una aplicación financiera. Buscaba separar dos necesidades diferentes.",
    ],
    responsibilities: [
      {
        label: "WHATSAPP",
        title: "Capturar rápido",
        example: "10000 en comida",
        detail: "Entrada rápida · lenguaje natural · sin formularios",
      },
      {
        label: "DASHBOARD",
        title: "Entender y analizar",
        example: "Balance · movimientos",
        detail: "Categorías · evolución · consulta en profundidad",
      },
    ],
    continuation: [
      "Moni interpreta el mensaje y prepara los datos del movimiento, pero no registra nada automáticamente. Antes de persistirlo, el usuario puede revisar la interpretación, confirmarla, corregirla o cancelar la operación.",
      "WhatsApp se convirtió así en la capa de entrada del producto y la aplicación web en el espacio para explorar la información con mayor profundidad.",
    ],
    statement:
      "No necesitaba que el usuario aprendiera un nuevo hábito para registrar un gasto. Necesitaba integrar el registro en uno que ya existía.",
  },
  flow: {
    title: "03 — Del mensaje al dato",
    opening:
      "Un mensaje sencillo puede terminar convertido en una transacción estructurada, pero antes pasa por varias capas.",
    diagramLabel: "Flujo de interpretación y persistencia",
    messageLabel: "Mensaje de WhatsApp",
    message: "10000 en comida",
    parserLabel: "Parser determinista",
    parserDetail: "Primera ruta de interpretación",
    decisionLabel: "¿Resuelto?",
    yesLabel: "Sí · ruta principal",
    noLabel: "No · requiere apoyo",
    fallbackLabel: "Fallback con IA",
    fallbackDetail: "Solo cuando la ruta determinista es insuficiente",
    structuredLabel: "Datos estructurados",
    draftLabel: "TRANSACTION DRAFT",
    draftDisclaimer: "Representación conceptual; no describe el esquema exacto de producción.",
    draft: [
      { label: "amount", value: "10000" },
      { label: "type", value: "expense" },
      { label: "category", value: "food" },
      { label: "date", value: "inferred" },
      { label: "status", value: "pending" },
    ],
    reviewLabel: "Revisión del usuario",
    reviewDetail: "La interpretación todavía no se guarda.",
    actions: ["Confirmar", "Corregir", "Cancelar"],
    persistenceLabel: "Persistencia",
    persistenceDetail: "Solo la confirmación continúa al registro.",
    explanations: [
      { label: "Ruta principal", detail: "El parser resuelve lo que puede interpretarse de forma explícita." },
      { label: "Fallback", detail: "La IA se usa solo cuando el análisis determinista no es suficiente." },
      { label: "Control humano", detail: "Ninguna transacción interpretada llega a persistencia sin confirmación." },
    ],
    statement:
      "Interpretar no es lo mismo que decidir. Moni puede proponer una transacción; el usuario decide si se guarda.",
  },
  architecture: {
    title: "04 — Cómo está construido",
    body:
      "La arquitectura de Moni gira alrededor de dos experiencias: capturar información rápidamente y consultarla con profundidad.",
    systemLabel: "SYSTEM MONI",
    nodes: [
      { label: "WhatsApp" },
      { label: "Lógica de Moni", details: ["Parser determinista", "Fallback con IA", "Validación del flujo"] },
      { label: "Confirmación del usuario" },
      { label: "Supabase", details: ["Datos", "Autenticación"] },
      { label: "Dashboard web", details: ["Consulta", "Análisis"] },
    ],
    operationsLabel: "CAPA DE OPERACIÓN",
    operations: "Producción · VPS · Linux · Operación continua",
    roleLabel: "Mi papel",
    role: "Producto · Arquitectura · Desarrollo full-stack · Despliegue",
    aiUse: [
      {
        label: "IA dentro del producto",
        detail: "Fallback de interpretación cuando la lógica determinista es insuficiente.",
      },
      {
        label: "IA durante el desarrollo",
        detail: "Apoyo para investigación, programación, revisión y depuración.",
      },
    ],
    statement:
      "Moni no está construido alrededor de la IA. Está construido alrededor de un flujo controlado, con IA utilizada solo donde aporta valor.",
  },
  production: {
    title: "05 — De prototipo a producción",
    paragraphs: [
      "Moni no nació ejecutándose en infraestructura de producción.",
      "Durante su primera etapa funcionó localmente en mi propio computador mientras validaba el flujo principal, ajustaba la interpretación de mensajes y comprobaba si realmente podía utilizarlo de forma cotidiana.",
      "Después aparecieron usuarios reales.",
      "Ese cambio convirtió la disponibilidad en un problema. Si Moni dependía de que mi computador permaneciera encendido y conectado, no podía comportarse como un producto real.",
      "Operar Moni también me obligó a investigar Linux, administración de VPS, dominios, despliegue y la integración con servicios externos como Resend.",
    ],
    timeline: [
      { label: "LOCAL", detail: "Moni corre en mi computador mientras valido el flujo principal." },
      { label: "VERCEL TESTING", detail: "Etapa de despliegue y pruebas web." },
      { label: "DOMINIO", detail: "Una identidad pública propia en moni.zehrty.dev." },
      { label: "VPS / LINUX", detail: "La disponibilidad deja de depender del computador personal." },
      { label: "PRODUCCIÓN", detail: "El sistema debe permanecer operativo continuamente." },
    ],
    responsibilitiesLabel: "Responsabilidades operativas que aparecieron",
    responsibilities: [
      "Linux",
      "VPS",
      "Dominio + DNS",
      "Variables de entorno",
      "Procesos persistentes",
      "Autenticación",
      "Conectividad",
      "Servicios externos",
    ],
    statement:
      "Llegar a producción no fue solo desplegar el mismo código en otro lugar. Fue empezar a operar un sistema.",
    closing:
      "Moni dejó de ser un proyecto que yo ejecutaba para convertirse en un servicio que debía seguir funcionando aunque yo no estuviera frente al computador.",
  },
  users: {
    title: "06 — Cuando aparecieron usuarios reales",
    opening: [
      "Moni comenzó diseñado alrededor de mi propia forma de registrar gastos.",
      "Eso dejó de ser suficiente cuando otras personas comenzaron a utilizarlo.",
    ],
    evidence: [
      { label: "Usuarios", value: "6 usuarios reales" },
      { label: "Contexto", value: "Círculo cercano" },
      { label: "Estado", value: "Producción" },
    ],
    paragraphs: [
      "Actualmente está en producción y el flujo principal funciona de extremo a extremo: registrar desde WhatsApp, revisar la interpretación y consultar posteriormente la información desde el dashboard.",
      "Con ellos aparecieron situaciones que yo no había previsto.",
      "Formas diferentes de escribir, comportamientos distintos, casos límite y expectativas nuevas obligaron a transformar una herramienta personal en un sistema capaz de soportar más de una forma de usarlo.",
    ],
    evolution: [
      "Herramienta personal",
      "Primeros usuarios",
      "Casos no previstos",
      "Ajustes de producto y lógica",
      "Sistema multiusuario",
      "Producto en evolución",
    ],
    statement:
      "La parte más difícil no fue hacer que Moni funcionara para mí. Fue hacer que siguiera funcionando cuando otras personas empezaron a utilizarlo de maneras que yo no había previsto.",
    learningTitle: "Lo que cambió al tener usuarios reales",
    learnings: [
      "Aparecieron formas distintas de escribir.",
      "Surgieron casos límite que no existían en mis pruebas.",
      "Hubo que pensar mejor el comportamiento multiusuario.",
      "La confiabilidad dejó de ser un detalle.",
      "Mantener el producto pasó a ser parte del trabajo.",
    ],
    reflection:
      "Construir Moni me obligó a pasar de pensar como el único usuario a pensar como responsable de un producto que otras personas realmente utilizan.",
    currentState:
      "Producción · 6 usuarios reales · Flujo principal operativo · Dashboard disponible · En evolución",
  },
  closing: {
    statement: "MONI SIGUE FUNCIONANDO.",
    body:
      "Lo que comenzó como una herramienta personal hoy es un producto real en producción que sigo utilizando, manteniendo y evolucionando.",
    productCta: "Ver Moni en producción ↗",
    backCta: "← Volver a trabajo",
    backHref: "/#work",
  },
};

export const moniEn: MoniCaseStudyContent = {
  locale: "en",
  homeHref: "/en",
  counterpartHref: "/projects/moni",
  counterpartLabel: "ES",
  skipLabel: "Skip to content",
  footerLanguageLabel: "Ver en español",
  externalTabLabel: "(opens in a new tab)",
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    menu: "Menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
  },
  hero: {
    eyebrow: "CASE STUDY / 01",
    title: "MONI",
    descriptor: "A financial assistant on WhatsApp.",
    intro:
      "A product that began as a way to reduce the friction of logging expenses and became my first real system serving multiple users.",
    metadata: "Personal product · Full-stack · Applied AI · Production",
    productCta: "Visit Moni ↗",
    exploreCta: "Explore the case ↓",
    evidenceLabel: "Current evidence",
    evidence: [
      { label: "Status", value: "In production" },
      { label: "Users", value: "6 real people" },
      { label: "System", value: "Core flow operational" },
      { label: "Access", value: "Dashboard available" },
    ],
  },
  problem: {
    title: "01 — The problem",
    paragraphs: [
      "Logging an expense should be quick, yet in practice it often becomes another task left for later.",
      "Many finance apps require people to open an app, find the right flow, and complete several fields by hand. That friction makes expense records easy to postpone, leave incomplete, or abandon altogether.",
      "Moni began as a tool for my own use. I wanted a clearer view of my spending without relying on myself to remember to open another application after every purchase.",
      "The opportunity was to remove steps. Because WhatsApp was already part of my daily routine, recording an expense could feel as natural as sending a message.",
    ],
    statement:
      "The problem was not storing expenses. It was making each record require as little effort as possible.",
  },
  decision: {
    title: "02 — The product decision",
    paragraphs: [
      "Instead of first building another interface for capturing transactions, I moved data entry into a tool people already use constantly: WhatsApp.",
      "The goal was not to replace a finance application completely. It was to separate two distinct needs.",
    ],
    responsibilities: [
      {
        label: "WHATSAPP",
        title: "Capture quickly",
        example: "10000 en comida",
        detail: "Fast input · natural language · no forms",
      },
      {
        label: "DASHBOARD",
        title: "Understand and analyze",
        example: "Balance · transactions",
        detail: "Categories · change over time · deeper review",
      },
    ],
    continuation: [
      "Moni interprets the message and prepares the transaction data, but it does not save anything automatically. Before persistence, the user can review the interpretation, confirm it, correct it, or cancel the operation.",
      "WhatsApp therefore became the product’s input layer, while the web application became the place for examining the information in greater depth.",
    ],
    statement:
      "The user did not need to learn a new habit to log an expense. The product needed to fit into one that already existed.",
  },
  flow: {
    title: "03 — From message to data",
    opening:
      "A simple message can become a structured transaction, but it passes through several layers first.",
    diagramLabel: "Interpretation and persistence flow",
    messageLabel: "WhatsApp message",
    message: "10000 en comida",
    parserLabel: "Deterministic parser",
    parserDetail: "Primary interpretation path",
    decisionLabel: "Resolved?",
    yesLabel: "Yes · primary route",
    noLabel: "No · support needed",
    fallbackLabel: "AI fallback",
    fallbackDetail: "Only when deterministic parsing is insufficient",
    structuredLabel: "Structured data",
    draftLabel: "TRANSACTION DRAFT",
    draftDisclaimer: "Conceptual representation; not the exact production schema.",
    draft: [
      { label: "amount", value: "10000" },
      { label: "type", value: "expense" },
      { label: "category", value: "food" },
      { label: "date", value: "inferred" },
      { label: "status", value: "pending" },
    ],
    reviewLabel: "User review",
    reviewDetail: "The interpretation has not been saved yet.",
    actions: ["Confirm", "Correct", "Cancel"],
    persistenceLabel: "Persistence",
    persistenceDetail: "Only confirmation continues to the final record.",
    explanations: [
      { label: "Primary route", detail: "The parser resolves what can be interpreted explicitly." },
      { label: "Fallback", detail: "AI is used only when deterministic parsing is not sufficient." },
      { label: "Human control", detail: "No interpreted transaction reaches persistence without confirmation." },
    ],
    statement:
      "Interpretation is not the same as a decision. Moni can propose a transaction; the user decides whether it is saved.",
  },
  architecture: {
    title: "04 — How it is built",
    body:
      "Moni’s architecture revolves around two experiences: capturing information quickly and reviewing it in depth.",
    systemLabel: "SYSTEM MONI",
    nodes: [
      { label: "WhatsApp" },
      { label: "Moni application logic", details: ["Deterministic parser", "AI fallback", "Flow validation"] },
      { label: "User confirmation" },
      { label: "Supabase", details: ["Data", "Authentication"] },
      { label: "Web dashboard", details: ["Review", "Analysis"] },
    ],
    operationsLabel: "OPERATIONS LAYER",
    operations: "Production · VPS · Linux · Continuous operation",
    roleLabel: "My role",
    role: "Product · Architecture · Full-stack development · Deployment",
    aiUse: [
      {
        label: "AI inside the product",
        detail: "An interpretation fallback when deterministic logic is insufficient.",
      },
      {
        label: "AI during development",
        detail: "Support for research, programming, review, and debugging.",
      },
    ],
    statement:
      "Moni is not built around AI. It is built around a controlled flow, with AI used only where it adds value.",
  },
  production: {
    title: "05 — From prototype to production",
    paragraphs: [
      "Moni did not begin on production infrastructure.",
      "During its first stage, it ran locally on my own computer while I validated the core flow, refined message interpretation, and tested whether I could rely on it in daily use.",
      "Then real users appeared.",
      "That change made availability a real problem. If Moni depended on my computer staying on and connected, it could not behave like a real product.",
      "Operating Moni also pushed me to learn about Linux, VPS administration, domains, deployment, and integrations with external services such as Resend.",
    ],
    timeline: [
      { label: "LOCAL", detail: "Moni runs on my computer while I validate the core flow." },
      { label: "VERCEL TESTING", detail: "A stage for web deployment and testing." },
      { label: "DOMAIN", detail: "Its own public identity at moni.zehrty.dev." },
      { label: "VPS / LINUX", detail: "Availability no longer depends on my personal computer." },
      { label: "PRODUCTION", detail: "The system now has to remain continuously operational." },
    ],
    responsibilitiesLabel: "Operational responsibilities that emerged",
    responsibilities: [
      "Linux",
      "VPS",
      "Domain + DNS",
      "Environment variables",
      "Persistent processes",
      "Authentication",
      "Connectivity",
      "External services",
    ],
    statement:
      "Reaching production was not just deploying the same code somewhere else. It meant beginning to operate a system.",
    closing:
      "Moni stopped being a project I ran and became a service that had to keep working when I was away from my computer.",
  },
  users: {
    title: "06 — When real users arrived",
    opening: [
      "Moni was initially designed around the way I log expenses.",
      "That stopped being enough when other people began using it.",
    ],
    evidence: [
      { label: "Users", value: "6 real users" },
      { label: "Context", value: "Close circle" },
      { label: "Status", value: "Production" },
    ],
    paragraphs: [
      "Moni is now in production, and the core flow works end to end: logging a transaction through WhatsApp, reviewing the interpretation, and later consulting the information in the dashboard.",
      "Those users surfaced situations I had not anticipated.",
      "Different writing styles, behaviors, edge cases, and expectations forced a personal tool to become a system capable of supporting more than one way of using it.",
    ],
    evolution: [
      "Personal tool",
      "First users",
      "Unanticipated cases",
      "Product and logic adjustments",
      "Multi-user system",
      "Evolving product",
    ],
    statement:
      "The hardest part was not making Moni work for me. It was keeping it reliable when other people began using it in ways I had not anticipated.",
    learningTitle: "What changed with real users",
    learnings: [
      "Different ways of writing began to appear.",
      "Edge cases emerged that my own testing had not revealed.",
      "Multi-user behavior needed more deliberate thought.",
      "Reliability stopped being a detail.",
      "Maintaining the product became part of the work.",
    ],
    reflection:
      "Building Moni pushed me from thinking as its only user to thinking as the person responsible for a product that other people genuinely use.",
    currentState:
      "Production · 6 real users · Core flow operational · Dashboard available · Evolving",
  },
  closing: {
    statement: "MONI IS STILL RUNNING.",
    body:
      "What began as a personal tool is now a real product in production that I continue to use, maintain, and evolve.",
    productCta: "See Moni in production ↗",
    backCta: "← Back to work",
    backHref: "/en#work",
  },
};
