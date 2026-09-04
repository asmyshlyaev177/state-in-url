// Spanish (es) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=es source=en.ts source-blob=d77309b236f9e4529c3c3b32f7338be30db41126 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title:
        'state-in-url — estado tipado en la URL para React y Next.js, como useState',
      description:
        'Gestión de estado en la URL para React: guarda estado tipado en la cadena de consulta, como useState. Sobrevive a las recargas, cada estado es un enlace compartible y el botón atrás funciona. Next.js, React Router, Remix, Astro.',
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
    astro: {
      title: 'state-in-url para Astro — estado tipado en la URL en islas',
      description:
        'Guarda estado anidado y tipado en la cadena de consulta con Astro: islas de React o Preact, o páginas sin framework en el cliente. Demo en vivo y configuración del hook useUrlState de state-in-url.',
    },
    nextjs: {
      title: 'Gestión de estado en la URL en Next.js App Router — state-in-url',
      description:
        'Guarda estado tipado en la URL de Next.js: searchParams desde Server Components, sin límite de Suspense, prerenderizado conservado, layouts vía proxy.ts, actualizaciones superficiales del historial. Guía y preguntas frecuentes del hook useUrlState de state-in-url.',
    },
    vsNuqs: {
      title:
        'Alternativa a nuqs — state-in-url vs nuqs, estado tipado en la URL en React, comparados',
      description:
        'Comparación honesta de state-in-url y nuqs: configuración, forma del estado, objetos anidados, fechas y tamaño del bundle — más TanStack Router, use-query-params y useSearchParams, con demo en vivo.',
    },
  },

  header: {
    titleLead: 'Estado tipado en la URL para React y Next.js —',
    titleUrl: 'como useState',
    desc: 'es el estado de React que se escribe a sí mismo en la cadena de consulta. Los objetos, los arrays y las fechas conservan sus tipos, cada estado es un enlace compartible, sobrevive a las recargas y el botón atrás funciona — sin providers, sin límite de Suspense, sin código repetitivo.',
    factsLabel: 'Datos de la biblioteca',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB en gzip',
      'cero dependencias',
      'TypeScript-first',
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: 'Gestión de estado en la URL para Next.js, React Router, Remix y Astro — la misma API',
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
    shipsLead: 'Así que el paquete incluye siete',
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
      astroSetup: 'Islas de Astro (React o Preact), o páginas sin framework en el cliente',
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
      '¿Buscas una alternativa a nuqs? Ambas guardan estado tipado en la cadena de consulta; difieren en cuánto hay que configurar y en qué puede ser un valor.',
    colFeature: 'Qué',
    rows: {
      setup: {
        label: 'Configuración',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, helpers para JS puro',
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
      'Tamaños: import de toda la biblioteca, esbuild minify + gzip, medido en agosto de 2026 contra nuqs 2.10.1.',
    outro:
      'nuqs es una buena biblioteca: elígela si quieres cada valor como su propio parámetro de consulta legible o usas TanStack Router. Elige state-in-url cuando quieras un objeto tipado completo en la URL sin configuración.',
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
      'Casi siempre es mecánico: reúne las claves de una feature en un único objeto de estado por defecto, elimina las declaraciones de parsers — los valores tipados llevan la misma información — y sustituye los setters por clave por un único setter que acepta un partial. Cada campo de primer nivel sigue siendo su propio parámetro de consulta.',
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        q: '¿Es state-in-url una buena alternativa a nuqs?',
        a: 'Sí, cuando quieres un objeto tipado completo en la URL sin configuración: sin componente adaptador, sin parsers por clave, y con objetos anidados y fechas conservados automáticamente. nuqs sigue siendo mejor opción si quieres cada valor como su propio parámetro de consulta legible o usas TanStack Router.',
      },
      {
        q: '¿Cuál es más pequeña, state-in-url o nuqs?',
        a: 'Medido con esbuild (minify + gzip, import de toda la biblioteca) en agosto de 2026: state-in-url ronda los 2,9 KB con cero dependencias; nuqs 2.10.1 ronda los 6,7 KB con una dependencia. Importar un subconjunto reduce ambas.',
      },
      {
        q: '¿Necesita state-in-url un adaptador o provider?',
        a: 'No. Cada router tiene su propio entry point: importa el hook correspondiente, pásale un objeto de estado por defecto y funciona. No hay componente adaptador que envuelva la app ni provider de contexto que configurar.',
      },
      {
        q: '¿Es difícil migrar de nuqs a state-in-url?',
        a: 'Suele ser mecánico: reúne las claves de una feature en un único objeto de estado por defecto, elimina las declaraciones de parsers y sustituye los setters por clave por un único setter con un partial. Cada campo de primer nivel sigue siendo su propio parámetro de consulta.',
      },
      {
        q: '¿Y los search params de TanStack Router?',
        a: 'Si usas TanStack Router, usa lo que trae: search params JSON-first validados por ruta con validateSearch. state-in-url y nuqs importan cuando tu router es Next.js, React Router o Remix, donde no hay search params tipados integrados.',
      },
    ],
    alternatives: {
      title: 'Cómo se comparan las demás opciones',
      intro:
        'nuqs no es la única alternativa. El mismo trabajo — estado tipado en la cadena de consulta — también lo cubren los routers y bibliotecas más antiguas, cada una con su compromiso.',
      colLibrary: 'Biblioteca',
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
          pick: 'Quieres cada valor como su propio parámetro de consulta legible',
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
          pick: 'Uno o dos parámetros planos de texto, sin biblioteca',
        },
      },
    },
  },

  faq: {
    title: 'Estado en la URL en React — preguntas frecuentes',
    items: [
      {
        q: '¿Por qué guardar el estado de React en la URL?',
        a: 'Una URL que contiene el estado es un enlace compartible: recárgala, guárdala en marcadores o envíala y se abren los mismos filtros, la misma pestaña o la misma página. Atrás y adelante funcionan gratis, y componentes no relacionados pueden leer los mismos valores sin un provider. state-in-url lo hace con un único objeto tipado en lugar de strings parseados a mano.',
      },
      {
        q: '¿Qué estado debería ir en la URL?',
        a: 'Todo lo que un lector podría guardar en marcadores o compartir: filtros, ordenación, paginación, la pestaña activa, un rango de fechas, el texto de búsqueda. Deja fuera lo privado, lo enorme o lo puramente transitorio: tokens de autenticación, si un diálogo está abierto, la posición del ratón. Una prueba rápida: ¿tendría sentido un enlace compartido con este valor dentro?',
      },
      {
        q: '¿Cómo leo y escribo parámetros de la URL en React con state-in-url?',
        a: 'Llama a useUrlState con un objeto de estado por defecto. urlState contiene los valores actuales, ya tipados; setUrl escribe un objeto parcial en la cadena de consulta; setState actualiza el estado sin tocar la URL hasta que lo vuelques. Números, booleanos, arrays, objetos anidados y Dates vuelven con los mismos tipos con los que entraron.',
      },
      {
        q: '¿Sobrevive el estado en la URL a una recarga de la página?',
        a: 'Sí. El estado es la cadena de consulta, así que una recarga, un marcador o un enlace pegado en otro sitio lo restauran. En el App Router de Next.js, pasa la prop searchParams de la página al hook para que el primer render en el servidor ya muestre los valores correctos en lugar de los valores por defecto.',
      },
      {
        q: '¿Funciona con Server Components de Next.js, sin límite de Suspense?',
        a: 'Sí. El hook nunca llama a useSearchParams, así que un componente que lo usa no necesita límite de Suspense y no excluye la página del prerenderizado, PPR incluido. Los Server Components leen el mismo estado a través de la prop searchParams; un layout puede decodificarlo desde una cabecera establecida en proxy.ts.',
      },
      {
        q: '¿Puedo sincronizar react-hook-form o una biblioteca de tablas con la URL?',
        a: 'Sí. Mantén la biblioteca de formularios como fuente de verdad, inicialízala con urlState como valores por defecto y refleja sus cambios con setUrl desde un manejador de cambios o un efecto. El mismo patrón sirve para el estado de TanStack Table, paneles de filtros y cualquier otra cosa que exponga valores y un setter.',
      },
      {
        q: '¿Qué frameworks soporta state-in-url?',
        a: 'Next.js 14-16 App Router, React Router v6 y v7, Remix v2 e islas de Astro (React o Preact), cada uno con su propio entry point. JavaScript puro y cualquier otro framework pueden usar directamente los helpers encodeState y decodeState. Pesa ~2 KB en gzip con cero dependencias.',
      },
    ],
  },

  nextjs: {
    crumb: 'Guía de Next.js',
    title: 'Gestión de estado en la URL en Next.js App Router',
    intro:
      'state-in-url guarda estado tipado en la cadena de consulta en Next.js 14, 15 y 16: un hook useUrlState por feature, sin adaptador, sin provider, sin límite de Suspense. Esta página cubre lo específico del App Router — Server Components, prerenderizado, layouts e historial.',
    demoLead: 'La demo en vivo de la',
    demoLinkText: 'página principal',
    demoTail: ' corre en Next.js 16.',
    serverTitle: 'Reenvía searchParams desde la página de servidor',
    serverBody:
      'Una página que es Server Component recibe searchParams — una Promise desde Next.js 15. Espérala con await y pasa el objeto al componente de cliente, que se lo entrega al hook. El primer render en el servidor muestra entonces los valores de la URL en lugar de los valores por defecto, así que no hay parpadeo ni aviso de hidratación.',
    suspenseTitle: 'Sin límite de Suspense, prerenderizado conservado',
    prerenderNote:
      'Una página prerenderizada sigue renderizando los valores por defecto, porque en el momento del build no hay cadena de consulta — renderiza una ruta dinámicamente cuando un enlace compartido deba ser correcto en el primer pintado.',
    layoutTitle: 'Layouts: decodifica la cadena de consulta desde una cabecera',
    layoutBody:
      'Los layouts de servidor nunca reciben searchParams. Copia la cadena de consulta en una cabecera de la petición en proxy.ts (middleware.ts sigue funcionando como alias obsoleto) y decodifícala en el layout con decodeState y el mismo objeto de estado por defecto — el resultado queda tipado exactamente igual que urlState en el cliente.',
    historyTitle: 'Historial, actualizaciones superficiales y scroll',
    historyBody:
      'setUrl reemplaza la entrada actual del historial por defecto, así que escribir no acumula entradas; pasa replace: false para añadir una. Las actualizaciones van por la History API — sin viaje al servidor ni petición _rsc por cada pulsación. Pasa useHistory: false para ir por el router de Next.js en su lugar, cuando el servidor deba volver a renderizar en cada cambio. scroll es false por defecto.',
    inputTitle: 'Campos rápidos: renderiza ahora, escribe la URL después',
    inputBody:
      'Para campos de texto y deslizadores, actualiza con setState en cada cambio y llama a setUrl() sin argumentos al perder el foco o tras un debounce. El componente se vuelve a renderizar de inmediato; la URL se escribe una sola vez, con diffing por contenido, así que llamarlo repetidamente es seguro.',
    faq: {
      title: 'Estado en la URL en Next.js — preguntas frecuentes',
      items: [
        {
          q: '¿Cómo guardo estado en la URL en Next.js App Router?',
          a: 'Define un objeto de estado por defecto fuera del componente, envuelve useUrlState de state-in-url/next en un hook pequeño y llama a ese hook en cualquier componente de cliente. urlState es el valor actual tipado y setUrl escribe un partial en la cadena de consulta. Pasa la prop searchParams de la página para que el render en el servidor ya sea correcto.',
        },
        {
          q: '¿Necesita useSearchParams un límite de Suspense, y lo necesita state-in-url?',
          a: 'El useSearchParams de Next hace que una ruta renderizada estáticamente pase a renderizarse en el cliente hasta el límite de Suspense más cercano, y el build falla si no hay ninguno. state-in-url nunca lo llama: lee searchParams en el servidor y window.location en el cliente, así que no hace falta ningún límite y el prerenderizado, PPR incluido, se conserva.',
        },
        {
          q: '¿Cómo leo el estado de la URL en un Server Component?',
          a: 'Las páginas lo reciben como la prop searchParams — espérala con await y reenvíala al hook de cliente o decodifícala en el servidor con decodeState y el mismo objeto por defecto. Los layouts no reciben searchParams; expón la cadena de consulta mediante una cabecera establecida en proxy.ts y decodifica esa.',
        },
        {
          q: '¿Actualizar la URL vuelve a renderizar la página en el servidor?',
          a: 'Por defecto, no. setUrl actualiza a través de la History API, así que no se descarga nada ni se hace ninguna petición _rsc. Cuando el servidor deba ver el nuevo estado — por ejemplo, para volver a pedir una lista en un Server Component — pasa useHistory: false para que las actualizaciones vayan por el router de Next.js y la ruta se vuelva a renderizar.',
        },
        {
          q: '¿Es state-in-url una alternativa a nuqs para Next.js?',
          a: 'Sí. Ambas guardan estado tipado en la cadena de consulta; state-in-url toma un solo objeto con valores anidados y fechas conservados, no necesita componente adaptador ni parser por clave, y nunca toca useSearchParams. nuqs encaja mejor cuando cada valor debe ser su propio parámetro de consulta legible a mano. Consulta la comparación completa.',
        },
        {
          q: '¿Qué versiones de Next.js están soportadas?',
          a: 'Next.js 14, 15 y 16 en el App Router, incluidos los searchParams asíncronos introducidos en la 15 y cacheComponents con PPR en la 16. Otras configuraciones pueden usar los helpers encodeState y decodeState, independientes del framework, con el router que prefieran.',
        },
      ],
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
