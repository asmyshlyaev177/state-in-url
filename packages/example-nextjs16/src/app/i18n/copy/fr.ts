// French (fr) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=fr source=en.ts source-blob=7ed7b2279891828661b2d22fb37cb520b35aae17 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: "state-in-url - stocke l'état dans l'URL comme en JSON, typé",
      description:
        "Stockez n'importe quel état utilisateur dans les paramètres de requête ; imaginez du JSON dans une URL de navigateur, tout en conservant les types et la structure des données. Pour Next.js, React-router et le JS pur.",
    },
    reactRouter: {
      title: "state-in-url pour React Router — état typé dans l'URL, v6 et v7",
      description:
        "Stockez de l'état imbriqué et typé dans la chaîne de requête avec React Router v6 et v7. Démo en direct et configuration du hook useUrlState de state-in-url.",
    },
    remix: {
      title: "state-in-url pour Remix — état typé dans l'URL avec Remix v2",
      description:
        "Stockez de l'état imbriqué et typé dans la chaîne de requête avec Remix v2. Démo en direct et configuration du hook useUrlState de state-in-url.",
    },
    astro: {
      title: "state-in-url pour Astro — état typé dans l'URL dans les îlots",
      description:
        "Stockez de l'état imbriqué et typé dans la chaîne de requête avec Astro : îlots React ou Preact, ou pages sans framework côté client. Démo en direct et configuration du hook useUrlState de state-in-url.",
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs — état d’URL typé en React, comparés',
      description:
        'Comparaison honnête de state-in-url et nuqs : mise en place, forme de l’état, objets imbriqués, dates et taille du bundle — plus TanStack Router, use-query-params et useSearchParams, avec démo en direct.',
    },
  },

  header: {
    titleLead: 'État typé, vivant dans',
    titleUrl: "l'URL",
    desc: "est l'état React qui s'écrit lui-même dans la chaîne de requête. Les objets, les tableaux et les dates conservent leurs types, chaque état est un lien partageable et survit aux rechargements — sans providers, sans code répétitif.",
    factsLabel: 'Faits sur la bibliothèque',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB en gzip',
      'zéro dépendance',
      'TypeScript-first',
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: 'La même API, quatre frameworks',
    selectLabel: 'Sélectionner le framework',
  },

  demo: {
    titleLead: 'useUrlState — en direct avec',
    hint: "Tapez ci-dessous — regardez l'URL s'allumer",
    formTitle: 'Premier composant client',
    statusTitle: 'Autre composant client',
    statusSubtitle:
      "Lit depuis l'URL — sans props, sans context, les types et la structure sont préservés",
    fields: {
      name: 'Nom',
      age: 'Âge',
      agreeToTerms: 'Accepter les conditions',
      tags: 'Tags',
    },
  },

  quickStart: {
    title: 'Démarrage rapide',
    stateStep: '1. Définissez l’état',
    hookStep: '2. Enveloppez-le dans un hook réutilisable',
    componentsStep:
      '3. Utilisez-le dans n’importe quel composant — tous le partagent',
    advancedStep: '4. Faites grandir le hook quand il en faut plus',
  },

  aiSkills: {
    title: 'Vous utilisez un agent de codage IA ?',
    pitfallsLead:
      "Les agents se trompent toujours sur les deux mêmes choses ici. Ils définissent la forme de l'état avec",
    pitfallsMid: ', que la contrainte',
    pitfallsTail:
      " rejette d'emblée. Et ils construisent l'objet d'état par défaut dans le composant, ce qui casse le partage en silence — il est indexé par l'identité de l'objet, donc rien ne génère d'erreur, les deux composants cessent simplement de se voir.",
    shipsLead: 'Le paquet fournit donc sept',
    shipsMid: ' fichiers. Votre agent en charge un à la demande via',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ", et ils sont versionnés avec la bibliothèque plutôt qu'avec cette page.",
    installLabel: "Copier la commande d'installation d'Intent",
    runLead: 'Exécutez une fois dans un projet qui a déjà',
    runMid: ' installé. Votre agent trouve alors les compétences dans',
    runTail: '.',
    skills: {
      featureStateHook:
        "Définir l'état et envelopper useUrlState dans un hook à portée de fonctionnalité",
      inputHandling: 'Champs de texte, curseurs, tout ce qui change vite',
      nextjsSsr:
        'App Router : transfert de searchParams, Proxy pour les layouts',
      reactRouterRemixSetup: 'Configuration de React Router v6/v7 ou Remix v2',
      astroSetup: 'Îlots Astro (React ou Preact), ou pages sans framework côté client',
      formLibraryIntegration: 'Association avec react-hook-form (ou formik)',
      sharedStateNoUrl: "useSharedState — partager sans toucher à l'URL",
    },
    sourcesLead: 'Les sources sont',
    sourcesLinkText: 'sur GitHub',
    sourcesMid:
      "Un agent qui ne peut pas charger les compétences d'Intent devrait lire",
    sourcesTail:
      ' à la place — les mêmes règles, condensées en un seul fichier.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'Vous cherchez une alternative à nuqs ? Les deux gardent un état typé dans la query string ; elles diffèrent par la configuration requise et par ce qu’une valeur peut être.',
    colFeature: 'Quoi',
    rows: {
      setup: {
        label: 'Mise en place',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, helpers pour JS pur',
        nuqs: 'Un composant adaptateur enveloppe l’application',
      },
      stateShape: {
        label: 'Forme de l’état',
        siu: 'Un objet typé, comme React.useState',
        nuqs: 'Valeurs par clé, un parseur déclaré pour chacune',
      },
      reuse: {
        label: 'Réutilisation entre composants',
        siu: 'Enveloppez le hook une fois — chaque composant partage l’état, sans props',
        nuqs: 'Vous extrayez votre propre hook autour de la table de parseurs',
      },
      nested: {
        label: 'Objets et tableaux imbriqués',
        siu: 'Intégré — structure et types préservés',
        nuqs: 'Parseur JSON plus votre propre validateur',
      },
      dates: {
        label: 'Dates',
        siu: 'Préservées automatiquement',
        nuqs: 'Parseur intégré, déclaré par clé',
      },
      size: {
        label: 'Taille, import complet',
        siu: '~2,9 Ko gzip',
        nuqs: '~6,7 Ko gzip',
      },
      deps: {
        label: 'Dépendances au runtime',
        siu: 'Aucune',
        nuqs: 'Une',
      },
      routers: {
        label: 'Routeurs',
        siu: 'Next.js, React Router v6/v7, Remix, helpers pour JS pur',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, React pur',
      },
    },
    sizeNote:
      'Tailles : import de la bibliothèque entière, esbuild minify + gzip, mesuré en août 2026 face à nuqs 2.10.1.',
    outro:
      'nuqs est une bonne bibliothèque — choisissez-la pour un query param lisible par valeur, ou si vous êtes sur TanStack Router. Choisissez state-in-url pour un objet typé complet dans l’URL, sans configuration.',
    fullLink:
      'Lisez la comparaison complète — la même fonctionnalité dans les deux, et comment migrer',
  },

  vsNuqs: {
    codeTitle: 'La même fonctionnalité, dans les deux',
    codeIntro:
      'Un panneau de filtres : un texte de recherche, un numéro de page, une liste de tags et une date. nuqs déclare un parseur par clé et branche un adaptateur à la racine ; state-in-url prend l’objet et l’enveloppe dans un hook réutilisable.',
    codeOutro:
      'Ce seul hook personnalisé est toute l’API de la fonctionnalité : chaque composant qui l’appelle partage le même état typé — la liste de tags reste un tableau, la date revient en véritable objet Date. Pas de props, pas de context, pas de câblage par clé.',
    setupTitle: 'Mise en place et boilerplate',
    setupBody:
      'nuqs se branche sur votre routeur via un composant adaptateur enveloppant l’application, et chaque morceau d’état déclare son parseur. state-in-url fournit un hook par routeur — importez celui qui correspond, passez-lui un objet d’état par défaut, terminé. Rien n’enveloppe rien.',
    ssrTitle: 'Next.js, SSR et prérendu',
    ssrLead: 'Sur l’App Router, state-in-url n’appelle jamais',
    ssrMid:
      ', donc les composants qui l’utilisent n’ont pas besoin d’une frontière',
    ssrTail:
      'et leurs pages restent prérendues — PPR compris. Les composants serveur lisent le même état via la prop searchParams, transmise telle quelle.',
    migrateTitle: 'Migrer depuis nuqs',
    migrateBody:
      'La migration est le plus souvent mécanique : rassemblez les clés d’une fonctionnalité dans un seul objet d’état par défaut, supprimez les déclarations de parseurs — des valeurs typées portent la même information — et remplacez les setters par clé par un seul setter acceptant un partiel. Chaque champ de premier niveau reste son propre paramètre de query.',
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        q: 'state-in-url est-il une bonne alternative à nuqs ?',
        a: 'Oui, quand vous voulez un objet typé complet dans l’URL sans configuration : pas de composant adaptateur, pas de parseurs par clé, objets imbriqués et dates préservés automatiquement. nuqs reste le meilleur choix pour un query param lisible par valeur, ou si vous êtes sur TanStack Router.',
      },
      {
        q: 'Lequel est le plus léger, state-in-url ou nuqs ?',
        a: 'Mesuré avec esbuild (minify + gzip, import de la bibliothèque entière) en août 2026 : state-in-url pèse ~2,9 Ko sans dépendance ; nuqs 2.10.1 pèse ~6,7 Ko avec une dépendance. Importer un sous-ensemble réduit les deux.',
      },
      {
        q: 'state-in-url a-t-il besoin d’un adaptateur ou d’un provider ?',
        a: 'Non. Chaque routeur a son point d’entrée — importez le hook correspondant, passez-lui un objet d’état par défaut, et ça fonctionne. Aucun composant adaptateur autour de l’application, aucun provider de contexte à configurer.',
      },
      {
        q: 'Est-il difficile de migrer de nuqs vers state-in-url ?',
        a: 'Le plus souvent non : rassemblez les clés d’une fonctionnalité dans un seul objet d’état par défaut, supprimez les déclarations de parseurs et remplacez les setters par clé par un seul setter acceptant un partiel. Chaque champ de premier niveau reste son propre paramètre de query.',
      },
      {
        q: 'Et les search params de TanStack Router ?',
        a: 'Si vous êtes sur TanStack Router, utilisez ce qu’il fournit : des search params JSON-first validés par route avec validateSearch. state-in-url et nuqs comptent quand votre routeur est Next.js, React Router ou Remix, sans search params typés intégrés.',
      },
    ],
    alternatives: {
      title: 'Ce que valent les autres options',
      intro:
        'nuqs n’est pas la seule alternative. Le même besoin — un état typé dans la query string — est aussi couvert par les routeurs eux-mêmes et des bibliothèques plus anciennes, chacune avec son compromis.',
      colLibrary: 'Bibliothèque',
      colSetup: 'Mise en place',
      colNested: 'Objets imbriqués et dates',
      colSize: 'Taille',
      colPick: 'À choisir quand',
      rows: {
        siu: {
          setup: 'Aucune — importez le hook',
          nested: 'Préservés automatiquement, types compris',
          size: '~2,9 Ko gzip, zéro dépendance',
          pick: 'Vous voulez un objet typé sans configuration sur Next.js, React Router ou Remix',
        },
        nuqs: {
          setup: 'Composant adaptateur, parseur par clé',
          nested: 'Parseur JSON plus votre propre validateur',
          size: '~6,7 Ko gzip, une dépendance',
          pick: 'Vous voulez chaque valeur comme query param lisible',
        },
        tanstack: {
          setup: 'validateSearch sur chaque route',
          nested:
            'JSON-first pour objets et tableaux ; dates via une sérialisation maison',
          size: 'Intégré au routeur',
          pick: 'Vous êtes sur TanStack Router — utilisez ce qu’il fournit',
        },
        useQueryParams: {
          setup: 'Provider plus adaptateur de routeur, config par paramètre',
          nested: 'Via un type de paramètre JSON, faiblement typé',
          size: '~4,4 Ko gzip plus serialize-query-params',
          pick: 'Une base de code déjà construite dessus',
        },
        useSearchParams: {
          setup: 'Aucune — intégré au routeur',
          nested:
            'Chaînes uniquement — parsing, types et défauts à votre charge',
          size: '0 Ko',
          pick: 'Un ou deux paramètres plats, pas besoin de bibliothèque',
        },
      },
    },
  },

  description: {
    title: 'Pourquoi state-in-url ?',
    whyLead:
      "Il existe des bibliothèques d'état dans l'URL, mais la plupart sont soit fastidieuses à configurer, soit limitées dans ce qu'elles peuvent stocker.",
    whyMid:
      ' vise à être celle qui fonctionne tout simplement : une API qui reflète',
    whyTail: ", avec l'URL comme stockage.",
    storeLead:
      "Stockez l'état sans code répétitif, construisez des liens profonds et partagez des données entre composants client sans rapport — aucun provider nécessaire. La structure et les types sont préservés de bout en bout : un",
    dateMid: ' entre, une',
    dateTail: ' sort.',
    tested:
      "Construit en test-first, avec des suites unitaires et e2e inter-navigateurs qui s'exécutent à chaque commit.",
    suspenseTitle: 'Next.js : aucune limite Suspense',
    suspenseLead: "Le hook n'appelle jamais",
    suspenseAfterHook:
      ", donc un composant qui l'utilise n'a pas besoin d'être enveloppé dans",
    suspenseAfterBoundary: " et n'exclut pas sa page du pré-rendu — PPR et",
    suspenseAfterFlag:
      " inclus. Il lit l'URL directement et suit chaque changement ultérieur, y compris un",
    suspenseTail: " issu d'un code qui n'en sait rien.",
    otherTitle: 'Pas sur Next.js ou react-router ?',
    helpersLead: 'Les helpers',
    helpersTail:
      " fonctionnent avec n'importe quel framework ou du JS pur — les hooks sont une commodité par-dessus.",
    ctaLead: 'Consultez la',
    ctaLinkText: 'page GitHub',
    ctaTail: ' — une étoile fait beaucoup.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: "Partagez-le avec d'autres développeurs",
    dialogTitle: 'bibliothèque state-in-url',
    buttons: {
      x: 'Bouton de partage X/Twitter',
      linkedin: 'Bouton de partage LinkedIn',
      reddit: 'Bouton de partage Reddit',
      vk: 'Bouton de partage VK',
      facebook: 'Bouton de partage Facebook',
    },
  },

  footer: {
    tagline: "état typé, vivant dans l'URL",
    updated: 'Mis à jour',
    navLabel: 'Pied de page',
  },

  errors: {
    title: "Quelque chose s'est mal passé !",
    retry: 'Réessayer',
    notFoundTitle: 'Introuvable',
    notFoundBody: 'Impossible de trouver la ressource demandée',
    boundaryTitle: "Quelque chose s'est mal passé :",
    boundaryFallback: "Une erreur s'est produite",
  },

  chrome: {
    logoAlt: 'Logo',
    installCopyLabel: "Copier la commande d'installation",
    copied: 'Copié',
    copiedAnnouncement: 'Commande copiée dans le presse-papiers',
    opensInNewTab: "(s'ouvre dans un nouvel onglet)",
    npmLinkLabel: 'Lien NPM',
    urlBarLabel: 'URL actuelle avec état synchronisé',
    sourceCode: 'Code source',
    reloadPage: 'Recharger la page',
    languageLabel: 'Langue',
    home: 'Accueil',
    homeLink: 'state-in-url — accueil',
    breadcrumbs: 'Fil d’Ariane',
  },
};
