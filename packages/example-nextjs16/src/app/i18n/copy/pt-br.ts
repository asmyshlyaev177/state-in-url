// Portuguese (Brazil) (pt-BR) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=pt-BR source=en.ts source-blob=7ed7b2279891828661b2d22fb37cb520b35aae17 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title:
        'state-in-url - armazena estado na URL como em JSON, com segurança de tipos',
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
    astro: {
      title: 'state-in-url para Astro — estado tipado na URL em ilhas',
      description:
        'Armazene estado aninhado e tipado na string de consulta com Astro: ilhas React ou Preact, ou páginas sem framework no cliente. Demonstração ao vivo e configuração do hook useUrlState do state-in-url.',
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs — estado tipado na URL em React, comparados',
      description:
        'Comparação honesta entre state-in-url e nuqs: configuração, formato do estado, objetos aninhados, datas e tamanho do bundle — mais TanStack Router, use-query-params e useSearchParams, com demo ao vivo.',
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
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: 'A mesma API, quatro frameworks',
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
    hookStep: '2. Envolva-o num hook reutilizável',
    componentsStep: '3. Use em qualquer componente — todos compartilham',
    advancedStep: '4. Expanda o hook quando precisar de mais',
  },

  aiSkills: {
    title: 'Usando um agente de codificação de IA?',
    pitfallsLead:
      'Os agentes erram as mesmas duas coisas aqui, todas as vezes. Eles definem a forma do estado com',
    pitfallsMid: ', que a restrição',
    pitfallsTail:
      ' rejeita de imediato. E eles constroem o objeto de estado padrão dentro do componente, o que quebra o compartilhamento em silêncio — ele é indexado pela identidade do objeto, então nada gera erro, os dois componentes simplesmente param de se ver.',
    shipsLead: 'Então o pacote inclui sete',
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
      nextjsSsr:
        'App Router: encaminhamento de searchParams, Proxy para layouts',
      reactRouterRemixSetup: 'Configuração do React Router v6/v7 ou Remix v2',
      astroSetup: 'Ilhas do Astro (React ou Preact), ou páginas sem framework no cliente',
      formLibraryIntegration: 'Combinando com react-hook-form (ou formik)',
      sharedStateNoUrl: 'useSharedState — compartilhar sem tocar na URL',
    },
    sourcesLead: 'As fontes estão',
    sourcesLinkText: 'no GitHub',
    sourcesMid:
      'Um agente que não consegue carregar as habilidades do Intent deve ler',
    sourcesTail: ' em vez disso — as mesmas regras, condensadas em um arquivo.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'Procurando uma alternativa ao nuqs? Ambas guardam estado tipado na query string; diferem em quanta configuração exigem e no que um valor pode ser.',
    colFeature: 'O quê',
    rows: {
      setup: {
        label: 'Configuração',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, helpers para JS puro',
        nuqs: 'Um componente adaptador envolve o app',
      },
      stateShape: {
        label: 'Formato do estado',
        siu: 'Um objeto tipado, como React.useState',
        nuqs: 'Valores por chave, com um parser declarado para cada uma',
      },
      reuse: {
        label: 'Reuso entre componentes',
        siu: 'Envolva o hook uma vez — cada componente compartilha o estado, sem props',
        nuqs: 'Você extrai seu próprio hook em volta do mapa de parsers',
      },
      nested: {
        label: 'Objetos e arrays aninhados',
        siu: 'Nativo — estrutura e tipos preservados',
        nuqs: 'Parser JSON mais seu próprio validador',
      },
      dates: {
        label: 'Datas',
        siu: 'Preservadas automaticamente',
        nuqs: 'Parser embutido, declarado por chave',
      },
      size: {
        label: 'Tamanho, import completo',
        siu: '~2,9 KB gzip',
        nuqs: '~6,7 KB gzip',
      },
      deps: {
        label: 'Dependências em runtime',
        siu: 'Nenhuma',
        nuqs: 'Uma',
      },
      routers: {
        label: 'Roteadores',
        siu: 'Next.js, React Router v6/v7, Remix, helpers para JS puro',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, React puro',
      },
    },
    sizeNote:
      'Tamanhos: import da biblioteca inteira, esbuild minify + gzip, medido em agosto de 2026 contra o nuqs 2.10.1.',
    outro:
      'nuqs é uma boa biblioteca — prefira-o se quiser cada valor como seu próprio query param legível, ou se usa TanStack Router. Prefira state-in-url quando quiser um objeto tipado inteiro na URL sem configuração.',
    fullLink:
      'Leia a comparação completa — a mesma feature nas duas e como migrar',
  },

  vsNuqs: {
    codeTitle: 'A mesma feature, nas duas',
    codeIntro:
      'Um painel de filtros: um texto de busca, um número de página, uma lista de tags e uma data. nuqs declara um parser por chave e liga um adaptador na raiz; state-in-url recebe o objeto e o envolve num hook reutilizável.',
    codeOutro:
      'Esse único hook customizado é toda a API da feature: cada componente que o chama compartilha o mesmo estado tipado — a lista de tags continua um array e a data volta como um objeto Date de verdade. Sem props, sem context, sem fiação por chave.',
    setupTitle: 'Configuração e boilerplate',
    setupBody:
      'nuqs se conecta ao seu roteador por um componente adaptador que envolve o app, e cada pedaço de estado declara seu parser. state-in-url traz um hook por roteador — importe o correspondente, passe um objeto de estado padrão e pronto. Nada envolve nada.',
    ssrTitle: 'Next.js, SSR e pré-renderização',
    ssrLead: 'No App Router, state-in-url nunca chama',
    ssrMid: ', então componentes que o usam não precisam de um limite de',
    ssrTail:
      'e suas páginas continuam pré-renderizando — PPR incluído. Componentes de servidor leem o mesmo estado pela prop searchParams, repassada como está.',
    migrateTitle: 'Migrando do nuqs',
    migrateBody:
      'Quase sempre é mecânico: junte as chaves de uma feature num único objeto de estado padrão, remova as declarações de parser — valores tipados carregam a mesma informação — e troque os setters por chave por um único setter que aceita um partial. Cada campo de primeiro nível continua sendo seu próprio parâmetro de query.',
    faqTitle: 'Perguntas frequentes',
    faq: [
      {
        q: 'state-in-url é uma boa alternativa ao nuqs?',
        a: 'Sim, quando você quer um objeto tipado inteiro na URL sem configuração: sem componente adaptador, sem parsers por chave, e com objetos aninhados e datas preservados automaticamente. nuqs continua sendo a melhor escolha se você quer cada valor como seu próprio query param legível ou está no TanStack Router.',
      },
      {
        q: 'Qual é menor, state-in-url ou nuqs?',
        a: 'Medido com esbuild (minify + gzip, import da biblioteca inteira) em agosto de 2026: state-in-url tem ~2,9 KB e zero dependências; nuqs 2.10.1 tem ~6,7 KB e uma dependência. Importar um subconjunto reduz as duas.',
      },
      {
        q: 'state-in-url precisa de adaptador ou provider?',
        a: 'Não. Cada roteador tem seu próprio entry point — importe o hook correspondente, passe um objeto de estado padrão e funciona. Não há componente adaptador envolvendo o app nem provider de contexto para configurar.',
      },
      {
        q: 'É difícil migrar do nuqs para o state-in-url?',
        a: 'Normalmente não: junte as chaves de uma feature num único objeto de estado padrão, remova as declarações de parser e troque os setters por chave por um único setter com um partial. Cada campo de primeiro nível continua sendo seu próprio parâmetro de query.',
      },
      {
        q: 'E os search params do TanStack Router?',
        a: 'Se você está no TanStack Router, use o que ele traz: search params JSON-first validados por rota com validateSearch. state-in-url e nuqs importam quando seu roteador é Next.js, React Router ou Remix, onde não há search params tipados embutidos.',
      },
    ],
    alternatives: {
      title: 'Como ficam as outras opções',
      intro:
        'nuqs não é a única alternativa. O mesmo trabalho — estado tipado na query string — também é coberto pelos próprios roteadores e por bibliotecas mais antigas, cada uma com seu compromisso.',
      colLibrary: 'Biblioteca',
      colSetup: 'Configuração',
      colNested: 'Objetos aninhados e datas',
      colSize: 'Tamanho',
      colPick: 'Escolha quando',
      rows: {
        siu: {
          setup: 'Nenhuma — importe o hook',
          nested: 'Preservados automaticamente, com tipos',
          size: '~2,9 KB gzip, zero deps',
          pick: 'Você quer um objeto tipado sem configuração no Next.js, React Router ou Remix',
        },
        nuqs: {
          setup: 'Componente adaptador, parser por chave',
          nested: 'Parser JSON mais seu próprio validador',
          size: '~6,7 KB gzip, uma dep',
          pick: 'Você quer cada valor como seu próprio query param legível',
        },
        tanstack: {
          setup: 'validateSearch em cada rota',
          nested:
            'JSON-first para objetos e arrays; datas com serialização própria',
          size: 'Embutido no roteador',
          pick: 'Você está no TanStack Router — use o que ele traz',
        },
        useQueryParams: {
          setup: 'Provider mais adaptador de roteador, config por parâmetro',
          nested: 'Por um tipo de parâmetro JSON, tipagem frouxa',
          size: '~4,4 KB gzip mais serialize-query-params',
          pick: 'Uma base de código já construída sobre ele',
        },
        useSearchParams: {
          setup: 'Nenhuma — embutido no roteador',
          nested: 'Só strings — parsing, tipos e padrões por sua conta',
          size: '0 KB',
          pick: 'Um ou dois parâmetros planos de string, sem biblioteca',
        },
      },
    },
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
    suspenseAfterHook:
      ', então um componente que o usa não precisa ser envolvido em',
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
    home: 'Início',
    homeLink: 'state-in-url — página inicial',
    breadcrumbs: 'Trilha de navegação',
  },
};
