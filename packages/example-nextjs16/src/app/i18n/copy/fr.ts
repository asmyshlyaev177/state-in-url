// French (fr) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=fr source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
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
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'La même API, trois routeurs',
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
    componentsStep: '2. Utilisez-le dans n’importe quel composant',
    hookStep: '3. Créez un hook réutilisable pour une partie de l’état',
  },

  aiSkills: {
    title: 'Vous utilisez un agent de codage IA ?',
    pitfallsLead:
      "Les agents se trompent toujours sur les deux mêmes choses ici. Ils définissent la forme de l'état avec",
    pitfallsMid: ', que la contrainte',
    pitfallsTail:
      " rejette d'emblée. Et ils construisent l'objet d'état par défaut dans le composant, ce qui casse le partage en silence — il est indexé par l'identité de l'objet, donc rien ne génère d'erreur, les deux composants cessent simplement de se voir.",
    shipsLead: 'Le paquet fournit donc six',
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
      nextjsSsr: 'App Router : transfert de searchParams, Proxy pour les layouts',
      reactRouterRemixSetup: 'Configuration de React Router v6/v7 ou Remix v2',
      formLibraryIntegration: 'Association avec react-hook-form (ou formik)',
      sharedStateNoUrl: "useSharedState — partager sans toucher à l'URL",
    },
    sourcesLead: 'Les sources sont',
    sourcesLinkText: 'sur GitHub',
    sourcesMid: "Un agent qui ne peut pas charger les compétences d'Intent devrait lire",
    sourcesTail: ' à la place — les mêmes règles, condensées en un seul fichier.',
  },

  description: {
    title: 'Pourquoi state-in-url ?',
    whyLead:
      "Il existe des bibliothèques d'état dans l'URL, mais la plupart sont soit fastidieuses à configurer, soit limitées dans ce qu'elles peuvent stocker.",
    whyMid: ' vise à être celle qui fonctionne tout simplement : une API qui reflète',
    whyTail: ", avec l'URL comme stockage.",
    storeLead:
      "Stockez l'état sans code répétitif, construisez des liens profonds et partagez des données entre composants client sans rapport — aucun provider nécessaire. La structure et les types sont préservés de bout en bout : un",
    dateMid: ' entre, une',
    dateTail: ' sort.',
    tested:
      "Construit en test-first, avec des suites unitaires et e2e inter-navigateurs qui s'exécutent à chaque commit.",
    suspenseTitle: 'Next.js : aucune limite Suspense',
    suspenseLead: "Le hook n'appelle jamais",
    suspenseAfterHook: ", donc un composant qui l'utilise n'a pas besoin d'être enveloppé dans",
    suspenseAfterBoundary:
      " et n'exclut pas sa page du pré-rendu — PPR et",
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
  },
};
