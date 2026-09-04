// French (fr) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=fr source=en.ts source-blob=d77309b236f9e4529c3c3b32f7338be30db41126 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url — état typé dans l’URL pour React et Next.js, comme useState',
      description:
        'Gestion d’état dans l’URL pour React : gardez un état typé dans la chaîne de requête, comme useState. Survit au rechargement, chaque état est un lien partageable, le bouton Précédent fonctionne. Next.js, React Router, Remix, Astro.',
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
    nextjs: {
      title: 'Gestion d’état dans l’URL avec Next.js App Router — state-in-url',
      description:
        'Gardez un état typé dans l’URL Next.js : searchParams depuis les Server Components, aucune frontière Suspense, prérendu conservé, layouts via proxy.ts, historique mis à jour sans aller-retour serveur. Guide et FAQ du hook useUrlState de state-in-url.',
    },
    vsNuqs: {
      title: 'Alternative à nuqs — state-in-url vs nuqs, état d’URL typé en React, comparés',
      description:
        'Comparaison honnête de state-in-url et nuqs : mise en place, forme de l’état, objets imbriqués, dates et taille du bundle — plus TanStack Router, use-query-params et useSearchParams, avec démo en direct.',
    },
  },

  header: {
    titleLead: 'État typé dans l’URL pour React et Next.js —',
    titleUrl: 'comme useState',
    desc: 'est l’état React qui s’écrit lui-même dans la chaîne de requête. Les objets, les tableaux et les dates conservent leurs types, chaque état est un lien partageable, il survit aux rechargements et le bouton Précédent fonctionne — sans providers, sans frontière Suspense, sans code répétitif.',
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
    heading: 'Gestion d’état dans l’URL pour Next.js, React Router, Remix et Astro — la même API',
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

  faq: {
    title: 'État dans l’URL en React — questions fréquentes',
    items: [
      {
        q: 'Pourquoi garder l’état React dans l’URL ?',
        a: 'Une URL qui porte l’état est un lien partageable : rechargez-la, mettez-la en favori ou envoyez-la, et les mêmes filtres, le même onglet ou la même page s’ouvrent. Précédent et Suivant fonctionnent sans rien faire, et des composants sans rapport lisent les mêmes valeurs sans provider. state-in-url le fait avec un seul objet typé plutôt qu’avec des chaînes parsées à la main.',
      },
      {
        q: 'Quel état a sa place dans l’URL ?',
        a: 'Tout ce qu’un lecteur pourrait mettre en favori ou partager : filtres, tri, pagination, onglet actif, plage de dates, texte de recherche. Laissez de côté ce qui est privé, énorme ou purement transitoire — jetons d’authentification, ouverture d’une boîte de dialogue, position de la souris. Un test rapide : un lien partagé aurait-il encore un sens avec cette valeur dedans ?',
      },
      {
        q: 'Comment lire et écrire des paramètres d’URL en React avec state-in-url ?',
        a: 'Appelez useUrlState avec un objet d’état par défaut. urlState contient les valeurs courantes, déjà typées ; setUrl écrit un objet partiel dans la chaîne de requête ; setState met l’état à jour sans toucher à l’URL tant que vous ne l’y écrivez pas. Nombres, booléens, tableaux, objets imbriqués et Dates reviennent avec les types qu’ils avaient en entrant.',
      },
      {
        q: 'L’état dans l’URL survit-il à un rechargement de page ?',
        a: 'Oui. L’état est la chaîne de requête, donc un rechargement, un favori ou un lien collé ailleurs le restaure. Sur l’App Router de Next.js, passez la prop searchParams de la page au hook pour que le premier rendu serveur affiche déjà les bonnes valeurs plutôt que les valeurs par défaut.',
      },
      {
        q: 'Fonctionne-t-il avec les Server Components de Next.js, sans frontière Suspense ?',
        a: 'Oui. Le hook n’appelle jamais useSearchParams, donc un composant qui l’utilise n’a pas besoin de frontière Suspense et n’exclut pas la page du prérendu, PPR compris. Les Server Components lisent le même état via la prop searchParams ; un layout peut le décoder depuis un en-tête défini dans proxy.ts.',
      },
      {
        q: 'Puis-je synchroniser react-hook-form ou une bibliothèque de tableaux avec l’URL ?',
        a: 'Oui. Gardez la bibliothèque de formulaires comme source de vérité, initialisez-la avec urlState comme valeurs par défaut, et reflétez ses changements avec setUrl depuis un gestionnaire de changement ou un effet. Le même schéma fonctionne pour l’état de TanStack Table, les panneaux de filtres et tout ce qui expose des valeurs et un setter.',
      },
      {
        q: 'Quels frameworks state-in-url prend-il en charge ?',
        a: 'Next.js 14 à 16 avec l’App Router, React Router v6 et v7, Remix v2 et les îlots Astro (React ou Preact), chacun via son propre point d’entrée. Le JavaScript pur et tout autre framework peuvent utiliser directement les helpers encodeState et decodeState. La bibliothèque pèse ~2 KB en gzip, sans dépendance.',
      },
    ],
  },

  nextjs: {
    crumb: 'Guide Next.js',
    title: 'Gestion d’état dans l’URL avec Next.js App Router',
    intro:
      'state-in-url garde un état typé dans la chaîne de requête sur Next.js 14, 15 et 16 : un hook useUrlState par fonctionnalité, sans adaptateur, sans provider, sans frontière Suspense. Cette page couvre ce qui est propre à l’App Router — Server Components, prérendu, layouts et historique.',
    demoLead: 'La démo en direct de la',
    demoLinkText: 'page d’accueil',
    demoTail: ' tourne sur Next.js 16.',
    serverTitle: 'Transmettez searchParams depuis la page serveur',
    serverBody:
      'Une page Server Component reçoit searchParams — une Promise depuis Next.js 15. Attendez-la avec await et passez l’objet au composant client, qui le remet au hook. Le premier rendu serveur affiche alors les valeurs de l’URL plutôt que les valeurs par défaut : pas de flash, pas d’avertissement d’hydratation.',
    suspenseTitle: 'Aucune frontière Suspense, prérendu conservé',
    prerenderNote:
      'Une page prérendue affiche tout de même les valeurs par défaut, puisqu’il n’y a pas de chaîne de requête au moment du build — rendez une route dynamiquement quand un lien partagé doit être juste dès le premier affichage.',
    layoutTitle: 'Layouts : décodez la chaîne de requête depuis un en-tête',
    layoutBody:
      'Les layouts serveur ne reçoivent jamais searchParams. Copiez la chaîne de requête dans un en-tête de requête dans proxy.ts (middleware.ts fonctionne encore, comme alias déprécié) et décodez-la dans le layout avec decodeState et le même objet d’état par défaut — le résultat est typé exactement comme urlState côté client.',
    historyTitle: 'Historique, mises à jour sans aller-retour serveur et scroll',
    historyBody:
      'setUrl remplace l’entrée d’historique courante par défaut, donc la saisie n’empile pas les entrées ; passez replace: false pour en pousser une. Les mises à jour passent par l’History API — aucun aller-retour serveur ni requête _rsc à chaque frappe. Indiquez useHistory: false pour passer par le routeur Next.js à la place, quand le serveur doit re-rendre à chaque changement. scroll vaut false par défaut.',
    inputTitle: 'Champs rapides : affichez maintenant, écrivez l’URL plus tard',
    inputBody:
      'Pour les champs de texte et les curseurs, mettez à jour avec setState à chaque changement et appelez setUrl() sans argument au blur ou après un debounce. Le composant se re-rend immédiatement ; l’URL est écrite une fois, avec un diff basé sur le contenu, donc l’appeler à répétition ne pose aucun problème.',
    faq: {
      title: 'État dans l’URL avec Next.js — questions fréquentes',
      items: [
        {
          q: 'Comment garder l’état dans l’URL avec Next.js App Router ?',
          a: 'Définissez un objet d’état par défaut hors du composant, enveloppez useUrlState de state-in-url/next dans un petit hook, et appelez ce hook dans n’importe quel composant client. urlState est la valeur courante typée et setUrl écrit un partiel dans la chaîne de requête. Passez-lui la prop searchParams de la page pour que le rendu serveur soit déjà correct.',
        },
        {
          q: 'useSearchParams a-t-il besoin d’une frontière Suspense, et state-in-url ?',
          a: 'Le useSearchParams de Next fait basculer une route rendue statiquement en rendu client jusqu’à la frontière Suspense la plus proche, et le build échoue sans elle. state-in-url ne l’appelle jamais : il lit searchParams côté serveur et window.location côté client, donc aucune frontière n’est nécessaire et le prérendu, PPR compris, est conservé.',
        },
        {
          q: 'Comment lire l’état de l’URL dans un Server Component ?',
          a: 'Les pages le reçoivent via la prop searchParams — attendez-la avec await, puis transmettez-la au hook client ou décodez-la côté serveur avec decodeState et le même objet par défaut. Les layouts ne reçoivent pas searchParams ; exposez la chaîne de requête via un en-tête défini dans proxy.ts et décodez celui-ci.',
        },
        {
          q: 'Mettre à jour l’URL re-rend-il la page côté serveur ?',
          a: 'Pas par défaut. setUrl met à jour via l’History API, donc rien n’est récupéré et aucune requête _rsc n’est émise. Quand le serveur doit voir le nouvel état — par exemple pour recharger une liste dans un Server Component — passez useHistory: false pour que les mises à jour passent par le routeur Next.js et que la route se re-rende.',
        },
        {
          q: 'state-in-url est-il une alternative à nuqs pour Next.js ?',
          a: 'Oui. Les deux gardent un état typé dans la chaîne de requête ; state-in-url prend un seul objet, valeurs imbriquées et dates préservées, n’a besoin ni de composant adaptateur ni de parseur par clé, et ne touche jamais à useSearchParams. nuqs convient mieux quand chaque valeur doit être son propre query param lisible à la main. Voir la comparaison complète.',
        },
        {
          q: 'Quelles versions de Next.js sont prises en charge ?',
          a: 'Next.js 14, 15 et 16 avec l’App Router, y compris les searchParams asynchrones introduits en 15 et cacheComponents avec PPR en 16. Les autres configurations peuvent utiliser les helpers encodeState et decodeState, indépendants du framework, avec le routeur de leur choix.',
        },
      ],
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
    suspenseTitle: 'Next.js : aucune frontière Suspense',
    suspenseLead: "Le hook n'appelle jamais",
    suspenseAfterHook:
      ", donc un composant qui l'utilise n'a pas besoin d'être enveloppé dans",
    suspenseAfterBoundary: " et n'exclut pas sa page du prérendu — PPR et",
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
