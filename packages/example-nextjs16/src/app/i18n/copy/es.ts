// Spanish (es) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=es source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - guarda el estado en la URL como en JSON, con seguridad de tipos',
      description:
        'Guarda cualquier estado de usuario en los parámetros de consulta; imagina JSON en la URL de un navegador, manteniendo los tipos y la estructura de los datos. Para Next.js, React-router y JS puro.',
    },
    reactRouter: {
      title: 'state-in-url para React Router — estado tipado en la URL, v6 y v7',
      description:
        'Guarda estado anidado y tipado en la cadena de consulta con React Router v6 y v7. Demo en vivo y configuración del hook useUrlState de state-in-url.',
    },
    remix: {
      title: 'state-in-url para Remix — estado tipado en la URL en Remix v2',
      description:
        'Guarda estado anidado y tipado en la cadena de consulta con Remix v2. Demo en vivo y configuración del hook useUrlState de state-in-url.',
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
    componentsStep: '2. Úsalo en cualquier componente',
    hookStep: '3. Crea un hook reutilizable para una parte del estado',
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
    shipsTail:
      ', y se versionan con la biblioteca y no con esta página.',
    installLabel: 'Copiar comando de instalación de Intent',
    runLead: 'Ejecuta una vez en un proyecto que ya tenga',
    runMid: ' instalado. Tu agente encontrará entonces las habilidades en',
    runTail: '.',
    skills: {
      featureStateHook:
        'Definir el estado y envolver useUrlState en un hook de ámbito de funcionalidad',
      inputHandling: 'Campos de texto, deslizadores, cualquier cosa que cambie rápido',
      nextjsSsr: 'App Router: reenvío de searchParams, Proxy para layouts',
      reactRouterRemixSetup: 'Configuración de React Router v6/v7 o Remix v2',
      formLibraryIntegration: 'Combinación con react-hook-form (o formik)',
      sharedStateNoUrl: 'useSharedState — compartir sin tocar la URL',
    },
    sourcesLead: 'Las fuentes están',
    sourcesLinkText: 'en GitHub',
    sourcesMid: 'Un agente que no pueda cargar las habilidades de Intent debería leer',
    sourcesTail: ' en su lugar — las mismas reglas, condensadas en un archivo.',
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
    suspenseAfterHook: ', por lo que un componente que lo usa no necesita envolverse en',
    suspenseAfterBoundary:
      ' y no excluye su página del prerenderizado: PPR y',
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
  },
};
