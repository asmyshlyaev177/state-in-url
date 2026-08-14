// Portuguese (Brazil) (pt-BR) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=pt-BR source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - armazena estado na URL como em JSON, com segurança de tipos',
      description:
        'Armazene qualquer estado de usuário nos parâmetros de consulta; imagine JSON na URL de um navegador, mantendo os tipos e a estrutura dos dados. Para Next.js, React-router e JS puro.',
    },
    reactRouter: {
      title: 'state-in-url para React Router — estado tipado na URL, v6 e v7',
      description:
        'Armazene estado aninhado e tipado na string de consulta com React Router v6 e v7. Demonstração ao vivo e configuração do hook useUrlState do state-in-url.',
    },
    remix: {
      title: 'state-in-url para Remix — estado tipado na URL no Remix v2',
      description:
        'Armazene estado aninhado e tipado na string de consulta com Remix v2. Demonstração ao vivo e configuração do hook useUrlState do state-in-url.',
    },
  },

  header: {
    titleLead: 'Estado tipado, vivendo na',
    titleUrl: 'URL',
    desc: 'é o estado React que se grava na string de consulta. Objetos, arrays e datas mantêm seus tipos, cada estado é um link compartilhável e sobrevive a recarregamentos — sem providers, sem boilerplate.',
    factsLabel: 'Fatos da biblioteca',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB em gzip',
      'zero dependências',
      'TypeScript-first',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'A mesma API, três routers',
    selectLabel: 'Selecionar framework',
  },

  demo: {
    titleLead: 'useUrlState — ao vivo com',
    hint: 'Digite abaixo — veja a URL acender',
    formTitle: 'Primeiro componente de cliente',
    statusTitle: 'Outro componente de cliente',
    statusSubtitle:
      'Lê da URL — sem props, sem context, os tipos e a estrutura são preservados',
    fields: {
      name: 'Nome',
      age: 'Idade',
      agreeToTerms: 'Aceitar os termos',
      tags: 'Tags',
    },
  },

  quickStart: {
    title: 'Início rápido',
    stateStep: '1. Defina o estado',
    componentsStep: '2. Use em qualquer componente',
    hookStep: '3. Crie um hook reutilizável para uma parte do estado',
  },

  aiSkills: {
    title: 'Usando um agente de codificação de IA?',
    pitfallsLead:
      'Os agentes erram as mesmas duas coisas aqui, todas as vezes. Eles definem a forma do estado com',
    pitfallsMid: ', que a restrição',
    pitfallsTail:
      ' rejeita de imediato. E eles constroem o objeto de estado padrão dentro do componente, o que quebra o compartilhamento em silêncio — ele é indexado pela identidade do objeto, então nada gera erro, os dois componentes simplesmente param de se ver.',
    shipsLead: 'Então o pacote inclui seis',
    shipsMid: ' arquivos. Seu agente carrega um sob demanda por meio do',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ', e eles são versionados com a biblioteca e não com esta página.',
    installLabel: 'Copiar comando de instalação do Intent',
    runLead: 'Execute uma vez em um projeto que já tenha',
    runMid: ' instalado. Seu agente então encontra as habilidades em',
    runTail: '.',
    skills: {
      featureStateHook:
        'Definir o estado e envolver o useUrlState em um hook com escopo de funcionalidade',
      inputHandling: 'Campos de texto, sliders, qualquer coisa que muda rápido',
      nextjsSsr: 'App Router: encaminhamento de searchParams, Proxy para layouts',
      reactRouterRemixSetup: 'Configuração do React Router v6/v7 ou Remix v2',
      formLibraryIntegration: 'Combinando com react-hook-form (ou formik)',
      sharedStateNoUrl: 'useSharedState — compartilhar sem tocar na URL',
    },
    sourcesLead: 'As fontes estão',
    sourcesLinkText: 'no GitHub',
    sourcesMid: 'Um agente que não consegue carregar as habilidades do Intent deve ler',
    sourcesTail: ' em vez disso — as mesmas regras, condensadas em um arquivo.',
  },

  description: {
    title: 'Por que state-in-url?',
    whyLead:
      'Existem bibliotecas de estado na URL, mas a maioria é complicada de configurar ou limitada no que pode armazenar.',
    whyMid: ' pretende ser a que simplesmente funciona: uma API que espelha',
    whyTail: ', com a URL como armazenamento.',
    storeLead:
      'Armazene estado sem boilerplate, construa links profundos e compartilhe dados entre componentes de cliente não relacionados — sem necessidade de provider. A estrutura e os tipos são preservados de ponta a ponta: um',
    dateMid: ' entra, um',
    dateTail: ' sai.',
    tested:
      'Construído com test-first, com suítes unitárias e e2e entre navegadores executando a cada commit.',
    suspenseTitle: 'Next.js: sem limite de Suspense',
    suspenseLead: 'O hook nunca chama',
    suspenseAfterHook: ', então um componente que o usa não precisa ser envolvido em',
    suspenseAfterBoundary:
      ' e não exclui sua página da pré-renderização — PPR e',
    suspenseAfterFlag:
      ' incluídos. Ele lê a URL diretamente e acompanha cada alteração posterior, incluindo um',
    suspenseTail: ' de um código que nada sabe sobre ele.',
    otherTitle: 'Não usa Next.js ou react-router?',
    helpersLead: 'Os helpers',
    helpersTail:
      ' funcionam com qualquer framework ou JS puro — os hooks são uma conveniência por cima.',
    ctaLead: 'Confira a',
    ctaLinkText: 'página no GitHub',
    ctaTail: ' — uma estrela ajuda muito.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: 'Compartilhe com outros desenvolvedores',
    dialogTitle: 'biblioteca state-in-url',
    buttons: {
      x: 'Botão de compartilhar no X/Twitter',
      linkedin: 'Botão de compartilhar no LinkedIn',
      reddit: 'Botão de compartilhar no Reddit',
      vk: 'Botão de compartilhar no VK',
      facebook: 'Botão de compartilhar no Facebook',
    },
  },

  footer: {
    tagline: 'estado tipado, vivendo na URL',
    updated: 'Atualizado',
    navLabel: 'Rodapé',
  },

  errors: {
    title: 'Algo deu errado!',
    retry: 'Tentar novamente',
    notFoundTitle: 'Não encontrado',
    notFoundBody: 'Não foi possível encontrar o recurso solicitado',
    boundaryTitle: 'Algo deu errado:',
    boundaryFallback: 'Ocorreu um erro',
  },

  chrome: {
    logoAlt: 'Logotipo',
    installCopyLabel: 'Copiar comando de instalação',
    copied: 'Copiado',
    copiedAnnouncement: 'Comando copiado para a área de transferência',
    opensInNewTab: '(abre em nova aba)',
    npmLinkLabel: 'Link do NPM',
    urlBarLabel: 'URL atual com estado sincronizado',
    sourceCode: 'Código-fonte',
    reloadPage: 'Recarregar página',
    languageLabel: 'Idioma',
  },
};
