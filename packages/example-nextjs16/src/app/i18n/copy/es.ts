// Spanish (es) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=es source=en.ts source-blob=0b8e15b33eef39645b3d11c606155cb4178a6817 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title:
        'state-in-url - guarda el estado en la URL como en JSON, con seguridad de tipos',
      description:
        'Guarda cualquier estado de usuario en los parámetros de consulta; imagina JSON en la URL de un navegador, manteniendo los tipos y la estructura de los datos. Para Next.js, React-router y JS puro.',
    },
    reactRouter: {
      title:
        'state-in-url para React Router — estado tipado en la URL, v6 y v7',
      description:
        'Guarda estado anidado y tipado en la cadena de consulta con React Router v6 y v7. Demo en vivo y configuración del hook useUrlState de state-in-url.',
    },
    remix: {
      title: 'state-in-url para Remix — estado tipado en la URL en Remix v2',
      description:
        'Guarda estado anidado y tipado en la cadena de consulta con Remix v2. Demo en vivo y configuración del hook useUrlState de state-in-url.',
    },
    vsNuqs: {
      title:
        'state-in-url vs nuqs — estado tipado en la URL en React, comparados',
      description:
        'Comparación honesta de state-in-url y nuqs: configuración, forma del estado, objetos anidados, fechas y tamaño del bundle — más TanStack Router, use-query-params y useSearchParams, con demo en vivo.',
    },
  },

  header: {
    titleLead: 'Estado tipado, viviendo en',
    titleUrl: 'la URL',
    desc: 'es el estado de React que se escribe a sí mismo en la cadena de consulta. Los objetos, los arrays y las fechas conservan sus tipos, cada estado es un enlace compartible y sobrevive a las recargas, sin providers ni código repetitivo.',
    factsLabel: 'Datos de la biblioteca',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB en gzip',
      'cero dependencias',
      'TypeScript-first',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'La misma API, tres routers',
    selectLabel: 'Seleccionar framework',
  },

  demo: {
    titleLead: 'useUrlState — en vivo con',
    hint: 'Escribe abajo — observa cómo se enciende la URL',
    formTitle: 'Primer componente de cliente',
    statusTitle: 'Otro componente de cliente',
    statusSubtitle:
      'Lee desde la URL — sin props, sin context, los tipos y la estructura se conservan',
    fields: {
      name: 'Nombre',
      age: 'Edad',
      agreeToTerms: 'Aceptar los términos',
      tags: 'Etiquetas',
    },
  },

  quickStart: {
    title: 'Inicio rápido',
    stateStep: '1. Define el estado',
    hookStep: '2. Envuélvelo en un hook reutilizable',
    componentsStep: '3. Úsalo en cualquier componente — todos lo comparten',
    advancedStep: '4. Haz crecer el hook cuando necesites más',
  },

  aiSkills: {
    title: '¿Usas un agente de codificación con IA?',
    pitfallsLead:
      'Los agentes se equivocan siempre en las mismas dos cosas aquí. Escriben la forma del estado con',
    pitfallsMid: ', que la restricción',
    pitfallsTail:
      ' rechaza de plano. Y construyen el objeto de estado por defecto dentro del componente, lo que rompe el uso compartido en silencio: se indexa por identidad del objeto, así que nada da error, los dos componentes simplemente dejan de verse.',
    shipsLead: 'Así que el paquete incluye seis',
    shipsMid: ' archivos. Tu agente carga uno bajo demanda a través de',
    intentLinkText: 'TanStack Intent',
    shipsTail: ', y se versionan con la biblioteca y no con esta página.',
    installLabel: 'Copiar comando de instalación de Intent',
    runLead: 'Ejecuta una vez en un proyecto que ya tenga',
    runMid: ' instalado. Tu agente encontrará entonces las habilidades en',
    runTail: '.',
    skills: {
      featureStateHook:
        'Definir el estado y envolver useUrlState en un hook de ámbito de funcionalidad',
      inputHandling:
        'Campos de texto, deslizadores, cualquier cosa que cambie rápido',
      nextjsSsr: 'App Router: reenvío de searchParams, Proxy para layouts',
      reactRouterRemixSetup: 'Configuración de React Router v6/v7 o Remix v2',
      formLibraryIntegration: 'Combinación con react-hook-form (o formik)',
      sharedStateNoUrl: 'useSharedState — compartir sin tocar la URL',
    },
    sourcesLead: 'Las fuentes están',
    sourcesLinkText: 'en GitHub',
    sourcesMid:
      'Un agente que no pueda cargar las habilidades de Intent debería leer',
    sourcesTail: ' en su lugar — las mismas reglas, condensadas en un archivo.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      '¿Buscas una alternativa a nuqs? Ambas guardan estado tipado en la query string; difieren en cuánto hay que configurar y en qué puede ser un valor.',
    colFeature: 'Qué',
    rows: {
      setup: {
        label: 'Configuración',
        siu: 'Ninguna — importa el hook y listo',
        nuqs: 'Un componente adaptador envuelve la app',
      },
      stateShape: {
        label: 'Forma del estado',
        siu: 'Un objeto tipado, como React.useState',
        nuqs: 'Valores por clave, con un parser declarado para cada una',
      },
      reuse: {
        label: 'Reutilización entre componentes',
        siu: 'Envuelve el hook una vez — cada componente comparte el estado, sin props',
        nuqs: 'Extraes tu propio hook alrededor del mapa de parsers',
      },
      nested: {
        label: 'Objetos y arrays anidados',
        siu: 'Integrado — estructura y tipos se conservan',
        nuqs: 'Parser JSON más tu propio validador',
      },
      dates: {
        label: 'Fechas',
        siu: 'Se conservan automáticamente',
        nuqs: 'Parser integrado, declarado por clave',
      },
      size: {
        label: 'Tamaño, import completo',
        siu: '~2,9 KB gzip',
        nuqs: '~6,7 KB gzip',
      },
      deps: {
        label: 'Dependencias en runtime',
        siu: 'Ninguna',
        nuqs: 'Una',
      },
      routers: {
        label: 'Routers',
        siu: 'Next.js, React Router v6/v7, Remix, helpers para JS puro',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, React puro',
      },
    },
    sizeNote:
      'Tamaños: import de toda la librería, esbuild minify + gzip, medido en agosto de 2026 contra nuqs 2.10.1.',
    outro:
      'nuqs es una buena librería: elígela si quieres cada valor como su propio query param legible o usas TanStack Router. Elige state-in-url cuando quieras un objeto tipado completo en la URL sin configuración.',
    fullLink:
      'Lee la comparación completa — la misma feature en ambas y cómo migrar',
  },

  vsNuqs: {
    codeTitle: 'La misma feature, en ambas',
    codeIntro:
      'Un panel de filtros: un texto de búsqueda, un número de página, una lista de tags y una fecha. nuqs declara un parser por clave y conecta un adaptador en la raíz; state-in-url toma el objeto y lo envuelve en un hook reutilizable.',
    codeOutro:
      'Ese único hook personalizado es toda la API de la feature: cada componente que lo llama comparte el mismo estado tipado — la lista de tags sigue siendo un array y la fecha vuelve como un objeto Date real. Sin props, sin context, sin cableado por clave.',
    setupTitle: 'Configuración y boilerplate',
    setupBody:
      'nuqs se conecta a tu router mediante un componente adaptador que envuelve la app, y cada pieza de estado declara su parser. state-in-url trae un hook por router: importa el que corresponda, pásale un objeto de estado por defecto y listo. Nada envuelve nada.',
    ssrTitle: 'Next.js, SSR y prerenderizado',
    ssrLead: 'En el App Router, state-in-url nunca llama a',
    ssrMid: ', así que los componentes que lo usan no necesitan un límite de',
    ssrTail:
      'y sus páginas siguen prerenderizándose — PPR incluido. Los componentes de servidor leen el mismo estado por la prop searchParams, reenviada tal cual.',
    migrateTitle: 'Migrar desde nuqs',
    migrateBody:
      'Casi siempre es mecánico: reúne las claves de una feature en un único objeto de estado por defecto, elimina las declaraciones de parsers — los valores tipados llevan la misma información — y sustituye los setters por clave por un único setter que acepta un partial. Cada campo de primer nivel sigue siendo su propio parámetro de query.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Es state-in-url una buena alternativa a nuqs?',
        a: 'Sí, cuando quieres un objeto tipado completo en la URL sin configuración: sin componente adaptador, sin parsers por clave, y con objetos anidados y fechas conservados automáticamente. nuqs sigue siendo mejor opción si quieres cada valor como su propio query param legible o usas TanStack Router.',
      },
      {
        q: '¿Cuál es más pequeña, state-in-url o nuqs?',
        a: 'Medido con esbuild (minify + gzip, import de toda la librería) en agosto de 2026: state-in-url ronda los 2,9 KB con cero dependencias; nuqs 2.10.1 ronda los 6,7 KB con una dependencia. Importar un subconjunto reduce ambas.',
      },
      {
        q: '¿Necesita state-in-url un adaptador o provider?',
        a: 'No. Cada router tiene su propio entry point: importa el hook correspondiente, pásale un objeto de estado por defecto y funciona. No hay componente adaptador que envuelva la app ni provider de contexto que configurar.',
      },
      {
        q: '¿Es difícil migrar de nuqs a state-in-url?',
        a: 'Suele ser mecánico: reúne las claves de una feature en un único objeto de estado por defecto, elimina las declaraciones de parsers y sustituye los setters por clave por un único setter con un partial. Cada campo de primer nivel sigue siendo su propio parámetro de query.',
      },
      {
        q: '¿Y los search params de TanStack Router?',
        a: 'Si usas TanStack Router, usa lo que trae: search params JSON-first validados por ruta con validateSearch. state-in-url y nuqs importan cuando tu router es Next.js, React Router o Remix, donde no hay search params tipados integrados.',
      },
    ],
    alternatives: {
      title: 'Cómo se comparan las demás opciones',
      intro:
        'nuqs no es la única alternativa. El mismo trabajo — estado tipado en la query string — también lo cubren los routers y librerías más antiguas, cada una con su compromiso.',
      colLibrary: 'Librería',
      colSetup: 'Configuración',
      colNested: 'Objetos anidados y fechas',
      colSize: 'Tamaño',
      colPick: 'Elígela cuando',
      rows: {
        siu: {
          setup: 'Ninguna — importa el hook',
          nested: 'Conservados automáticamente, tipos incluidos',
          size: '~2,9 KB gzip, cero deps',
          pick: 'Quieres un objeto tipado sin configuración en Next.js, React Router o Remix',
        },
        nuqs: {
          setup: 'Componente adaptador, parser por clave',
          nested: 'Parser JSON más tu propio validador',
          size: '~6,7 KB gzip, una dep',
          pick: 'Quieres cada valor como su propio query param legible',
        },
        tanstack: {
          setup: 'validateSearch en cada ruta',
          nested:
            'JSON-first para objetos y arrays; fechas con serialización propia',
          size: 'Integrado en el router',
          pick: 'Usas TanStack Router — usa lo que trae',
        },
        useQueryParams: {
          setup: 'Provider más adaptador de router, config por parámetro',
          nested: 'Mediante un tipo de parámetro JSON, tipado laxo',
          size: '~4,4 KB gzip más serialize-query-params',
          pick: 'Una base de código ya construida sobre ella',
        },
        useSearchParams: {
          setup: 'Ninguna — integrado en el router',
          nested: 'Solo strings — parseo, tipos y defaults corren de tu cuenta',
          size: '0 KB',
          pick: 'Uno o dos parámetros planos de texto, sin librería',
        },
      },
    },
  },

  description: {
    title: '¿Por qué state-in-url?',
    whyLead:
      'Existen bibliotecas de estado en la URL, pero la mayoría son engorrosas de configurar o limitadas en lo que pueden almacenar.',
    whyMid: ' aspira a ser la que simplemente funciona: una API que imita',
    whyTail: ', con la URL como almacén.',
    storeLead:
      'Guarda estado sin código repetitivo, construye enlaces profundos y comparte datos entre componentes de cliente no relacionados, sin necesidad de provider. La estructura y los tipos se conservan de extremo a extremo: un',
    dateMid: ' entra, un',
    dateTail: ' sale.',
    tested:
      'Construido con test-first, con suites unitarias y e2e entre navegadores ejecutándose en cada commit.',
    suspenseTitle: 'Next.js: sin límite de Suspense',
    suspenseLead: 'El hook nunca llama a',
    suspenseAfterHook:
      ', por lo que un componente que lo usa no necesita envolverse en',
    suspenseAfterBoundary: ' y no excluye su página del prerenderizado: PPR y',
    suspenseAfterFlag:
      ' incluidos. Lee la URL directamente y sigue cada cambio posterior, incluido un',
    suspenseTail: ' desde código que no sabe nada de él.',
    otherTitle: '¿No usas Next.js o react-router?',
    helpersLead: 'Los helpers',
    helpersTail:
      ' funcionan con cualquier framework o JS puro: los hooks son una comodidad encima.',
    ctaLead: 'Échale un vistazo a la',
    ctaLinkText: 'página de GitHub',
    ctaTail: ': una estrella ayuda mucho.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: 'Compártelo con otros desarrolladores',
    dialogTitle: 'biblioteca state-in-url',
    buttons: {
      x: 'Botón de compartir en X/Twitter',
      linkedin: 'Botón de compartir en LinkedIn',
      reddit: 'Botón de compartir en Reddit',
      vk: 'Botón de compartir en VK',
      facebook: 'Botón de compartir en Facebook',
    },
  },

  footer: {
    tagline: 'estado tipado, viviendo en la URL',
    updated: 'Actualizado',
    navLabel: 'Pie de página',
  },

  errors: {
    title: '¡Algo salió mal!',
    retry: 'Intentar de nuevo',
    notFoundTitle: 'No encontrado',
    notFoundBody: 'No se pudo encontrar el recurso solicitado',
    boundaryTitle: 'Algo salió mal:',
    boundaryFallback: 'Ocurrió un error',
  },

  chrome: {
    logoAlt: 'Logotipo',
    installCopyLabel: 'Copiar comando de instalación',
    copied: 'Copiado',
    copiedAnnouncement: 'Comando copiado al portapapeles',
    opensInNewTab: '(se abre en una pestaña nueva)',
    npmLinkLabel: 'Enlace a NPM',
    urlBarLabel: 'URL actual con estado sincronizado',
    sourceCode: 'Código fuente',
    reloadPage: 'Recargar página',
    languageLabel: 'Idioma',
    home: 'Inicio',
    homeLink: 'state-in-url — página principal',
    breadcrumbs: 'Ruta de navegación',
  },
};
