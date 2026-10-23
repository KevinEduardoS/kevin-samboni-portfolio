export const profileBase = {
  firstName: "Kevin",
  lastName: "Samboni",
  initials: "KS",
  email: "Kevinedu121996@hotmail.com",
  phone: "+57 318 269 5313",
  linkedin: "https://www.linkedin.com/in/kevin-samboni-gonzalez-53a0a03a0/",
  github: "https://github.com/KevinEduardoS",
  cvPath: "/cv/CV-Kevin-Samboni-2026.pdf",
};

const content = {
  es: {
    ui: {
      nav: [
        { id: "inicio", label: "Inicio" },
        { id: "sobre", label: "Sobre mí" },
        { id: "habilidades", label: "Stack" },
        { id: "experiencia", label: "Trayectoria" },
        { id: "proyectos", label: "Proyectos" },
        { id: "educacion", label: "Educación" },
        { id: "contacto", label: "Contacto" },
      ],
      cvButton: "CV",
      hero: {
        availability: "Disponible para nuevos proyectos",
        tagline: "INGENIERO DE SOFTWARE · QA & FULL STACK",
        desc: "Diseño y valido software confiable — de la automatización de procesos al aseguramiento de calidad — para equipos que necesitan productos que funcionen bien desde el primer despliegue.",
        downloadCv: "Descargar CV",
        contactMe: "Contáctame",
      },
      about: {
        kicker: "Sobre mí",
        heading: "Sobre mí",
        stats: [
          { value: 3, suffix: "+", label: "Proyectos entregados" },
          { value: 3, suffix: "", label: "Años de experiencia" },
          { value: 100, suffix: "%", label: "Enfoque en calidad (QA)" },
        ],
      },
      skills: {
        kicker: "Stack",
        heading: "Habilidades",
      },
      experience: {
        kicker: "Trayectoria",
        heading: "Dónde he generado impacto",
        subtext: "Una línea de tiempo de roles, proyectos y resultados medibles.",
      },
      projects: {
        kicker: "Proyectos",
        heading: "Lo que he construido",
      },
      education: {
        kicker: "Formación",
        heading: "Educación",
      },
      contact: {
        kicker: "Contacto",
        heading: ["Construyamos algo", "que funcione bien."],
        desc: "¿Tienes un proyecto en mente? Construyámoslo bien desde el día uno: código limpio, calidad validada en cada paso y cero sorpresas en producción. Escríbeme y hablemos de cómo hacerlo realidad.",
        emailBtn: "Escríbeme",
        alsoFindMe: "También me encuentras en",
      },
      footer: "Portafolio Profesional",
    },
    profile: {
      heroDesc: undefined, // uses ui.hero.desc
      summary:
        "Ingeniero de software con experiencia en desarrollo frontend (JavaScript, React, Angular), nociones de backend (Node.js), aseguramiento de calidad (QA), levantamiento de requerimientos y documentación técnica, forjada en proyectos del sector público y aplicaciones propias. Enfocado en construir productos confiables mediante testing riguroso y automatización de procesos, con conocimientos complementarios en Machine Learning y NLP.",
      summaryHighlights: [
        "desarrollo frontend",
        "aseguramiento de calidad (QA)",
        "testing riguroso y automatización de procesos",
        "Machine Learning",
        "NLP",
      ],
    },
    skillCategories: [
      {
        id: "languages",
        category: "Lenguajes",
        skills: ["JavaScript", "TypeScript", "MySQL"],
      },
      {
        id: "frameworks",
        category: "Frameworks y Librerías",
        skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      },
      {
        id: "qa",
        category: "QA / Testing",
        skills: [
          "Pruebas manuales funcionales",
          "Testing de regresión",
          "Validación de flujos críticos",
          "Aseguramiento de calidad en producción",
        ],
      },
      {
        id: "architecture",
        category: "Arquitectura y automatización",
        skills: ["Diseño de sistemas", "Algoritmos de asignación automática de procesos"],
      },
      {
        id: "pm",
        category: "Gestión de proyectos",
        skills: ["Levantamiento de requerimientos", "Documentación técnica"],
      },
      {
        id: "ai",
        category: "IA",
        skills: [
          "Fundamentos de Machine Learning",
          "NLP",
          "Integración de herramientas de IA en flujos de trabajo",
        ],
      },
      {
        id: "spoken",
        category: "Idiomas",
        skills: ["Español (nativo)", "Inglés (básico)"],
      },
    ],
    experience: [
      {
        role: "QA Manual",
        place: "Proyecto móvil personal",
        period: "2026 — Actualidad",
        current: true,
        points: [
          "Ejecuté pruebas manuales integrales y aseguramiento de calidad para una aplicación de e-commerce de venta de licores.",
          "Validé funcionalidades críticas de geolocalización para búsqueda de tiendas, gestión de carrito de compras y sistema de seguimiento de pedidos en tiempo real.",
        ],
      },
      {
        role: "Desarrollador Web / QA",
        place: "Alcaldía de Neiva",
        period: "2025",
        current: false,
        points: [
          "Diseñé y desarrollé un sistema automatizado para la gestión y reparto de querellas y despachos comisorios.",
          "Optimicé la administración de procesos mediante la implementación de algoritmos de asignación automática de casos, incrementando la confiabilidad del sistema.",
          "Realicé pruebas de calidad (QA) exhaustivas para garantizar el funcionamiento ininterrumpido de los servicios ciudadanos.",
        ],
      },
      {
        role: "Desarrollador Web / Capacitador",
        place: "Universidad Surcolombiana",
        period: "2023 — 2024",
        current: false,
        points: [
          "Desarrollé aplicaciones web dinámicas utilizando JavaScript, React y Angular, mejorando la experiencia de usuario en plataformas institucionales.",
          "Colaboré con equipos multidisciplinarios para el diseño de interfaces centradas en el usuario (UX).",
          "Lideré capacitaciones técnicas sobre fundamentos de IA aplicada y herramientas ofimáticas.",
        ],
      },
    ],
    projects: [
      {
        title: "Storylint",
        org: "Linter de historias de usuario",
        tech: ["Next.js 14 · TypeScript · Tailwind CSS"],
        impact: "Detecta ambigüedades y criterios de aceptación faltantes antes del desarrollo, genera casos de prueba por dominio y mejora la calidad de las historias antes de que lleguen a producción.",
        desc: "StoryLint analiza historias de usuario antes de que lleguen a desarrollo: identifica ambigüedades, criterios de aceptación faltantes y genera automáticamente casos de prueba para seis dominios de negocio, incluyendo pago, login, registro, búsqueda y archivos. Nació de mi trabajo diario en QA y funciona sin necesidad de API key, completamente del lado del servidor.",
        link: "https://storylint-coral.vercel.app/",
        githubLink: "https://github.com/KevinEduardoS/storylint",
      },
      {
        title: "IncidentFlow",
        org: "Sistema de gestión de incidencias",
        tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Framer Motion", "QA"],
        impact: "Modela un flujo empresarial de seis etapas, protege las transiciones de estado desde el servidor y registra auditoría completa, permitiendo controlar incidentes con reglas de negocio y métricas de resolución.",
        desc: "IncidentFlow gestiona incidentes mediante un Kanban en tiempo real con permisos por rol, historial de auditoría, métricas calculadas en SQL y acceso directo a datos con pg. Incluye 42 pruebas automatizadas en tres capas —unitarias e integración, componentes y pruebas end-to-end— ejecutadas en CI con GitHub Actions.",
        link: "https://incidentflow-three.vercel.app/",
        githubLink: "https://github.com/KevinEduardoS/-IncidentFlow",
      },
    ],
    education: [
      {
        title: "Ingeniería de Software",
        place: "Universidad Surcolombiana",
        year: "2019 — 2025",
        desc: "Formación profesional enfocada en desarrollo de software, control de calidad (QA) y arquitectura de sistemas.",
      },
    ],
  },

  en: {
    ui: {
      nav: [
        { id: "inicio", label: "Home" },
        { id: "sobre", label: "About" },
        { id: "habilidades", label: "Stack" },
        { id: "experiencia", label: "Experience" },
        { id: "proyectos", label: "Projects" },
        { id: "educacion", label: "Education" },
        { id: "contacto", label: "Contact" },
      ],
      cvButton: "CV",
      hero: {
        availability: "Available for new projects",
        tagline: "SOFTWARE ENGINEER · QA & FULL STACK",
        desc: "I design and validate reliable software — from process automation to quality assurance — for teams that need products that work well from the very first release.",
        downloadCv: "Download CV",
        contactMe: "Contact me",
      },
      about: {
        kicker: "About me",
        heading: "About me",
        stats: [
          { value: 3, suffix: "+", label: "Projects delivered" },
          { value: 3, suffix: "", label: "Years of experience" },
          { value: 100, suffix: "%", label: "Focus on quality (QA)" },
        ],
      },
      skills: {
        kicker: "Stack",
        heading: "Skills",
      },
      experience: {
        kicker: "Experience",
        heading: "Where I've made an impact",
        subtext: "A timeline of roles, projects, and measurable results.",
      },
      projects: {
        kicker: "Projects",
        heading: "What I've built",
      },
      education: {
        kicker: "Education",
        heading: "Education",
      },
      contact: {
        kicker: "Contact",
        heading: ["Let's build something", "that works."],
        desc: "Got a project in mind? Let's build it right from day one — clean code, validated quality at every step, and zero surprises in production. Reach out and let's make it happen.",
        emailBtn: "Email me",
        alsoFindMe: "You can also find me on",
      },
      footer: "Professional Portfolio",
    },
    profile: {
      summary:
        "Software engineer with experience in frontend development (JavaScript, React, Angular), backend fundamentals (Node.js), quality assurance (QA), requirements gathering, and technical documentation — forged across public-sector projects and personal applications. Focused on building reliable products through rigorous testing and process automation, with complementary knowledge in Machine Learning and NLP.",
      summaryHighlights: [
        "frontend development",
        "quality assurance (QA)",
        "rigorous testing and process automation",
        "Machine Learning",
        "NLP",
      ],
    },
    skillCategories: [
      {
        id: "languages",
        category: "Languages",
        skills: ["JavaScript", "TypeScript", "MySQL"],
      },
      {
        id: "frameworks",
        category: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Node.js", "Tailwind CSS"],
      },
      {
        id: "qa",
        category: "QA / Testing",
        skills: [
          "Manual functional testing",
          "Regression testing",
          "Critical flow validation",
          "Production quality assurance",
        ],
      },
      {
        id: "architecture",
        category: "Architecture & Automation",
        skills: ["System design", "Automatic case-assignment algorithms"],
      },
      {
        id: "pm",
        category: "Project Management",
        skills: ["Requirements gathering", "Technical documentation"],
      },
      {
        id: "ai",
        category: "AI",
        skills: [
          "Machine Learning fundamentals",
          "NLP",
          "AI tool integration into workflows",
        ],
      },
      {
        id: "spoken",
        category: "Languages Spoken",
        skills: ["Spanish (native)", "English (basic)"],
      },
    ],
    experience: [
      {
        role: "Manual QA",
        place: "Personal mobile project",
        period: "2026 — Present",
        current: true,
        points: [
          "Executed comprehensive manual testing and quality assurance for a liquor e-commerce application.",
          "Validated critical geolocation features for store search, shopping cart management, and real-time order tracking.",
        ],
      },
      {
        role: "Web Developer / QA",
        place: "City Hall of Neiva",
        period: "2025",
        current: false,
        points: [
          "Designed and developed an automated system for managing and assigning citizen complaints and court referrals.",
          "Optimized process management by implementing automatic case-assignment algorithms, increasing system reliability.",
          "Conducted thorough QA testing to ensure uninterrupted citizen services.",
        ],
      },
      {
        role: "Web Developer / Trainer",
        place: "Surcolombiana University",
        period: "2023 — 2024",
        current: false,
        points: [
          "Built dynamic web applications using JavaScript, React, and Angular, improving the user experience across institutional platforms.",
          "Collaborated with cross-functional teams on user-centered interface (UX) design.",
          "Led technical training sessions on applied AI fundamentals and office productivity tools.",
        ],
      },
    ],
    projects: [
      {
        title: "Storylint",
        org: "User story linter",
        tech: ["Next.js 14 · TypeScript · Tailwind CSS"],
        impact: "Detects ambiguities and missing acceptance criteria before development, generates test cases by domain, and improves story quality before they reach production.",
        desc: "StoryLint analyzes user stories before they reach development: it identifies ambiguities, missing acceptance criteria, and automatically generates test cases for six business domains, including payment, login, registration, search, and files. It originated from my daily QA work and works without an API key, entirely on the server side.",
        link: "https://storylint-coral.vercel.app/",
        githubLink: "https://github.com/KevinEduardoS/storylint",
      },
      {
        title: "IncidentFlow",
        org: "Incident management system",
        tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Framer Motion", "QA"],
        impact: "Models a six-stage business workflow, enforces server-side state transitions, and records complete audit history, allowing incidents to be managed with business rules and resolution metrics.",
        desc: "IncidentFlow manages incidents through a real-time Kanban board with role-based permissions, complete audit history, SQL-calculated metrics, and direct pg data access. It includes 42 automated tests across unit and integration layers, components, and end-to-end flows, all running in CI with GitHub Actions.",
        link: "https://incidentflow-three.vercel.app/",
        githubLink: "https://github.com/KevinEduardoS/-IncidentFlow",
      },
    ],
    education: [
      {
        title: "Software Engineering",
        place: "Surcolombiana University",
        year: "2019 — 2025",
        desc: "Professional education focused on software development, quality control (QA), and systems architecture.",
      },
    ],
  },
};

export default content;
