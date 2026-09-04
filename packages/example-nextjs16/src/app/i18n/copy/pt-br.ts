// Portuguese (Brazil) (pt-BR) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=pt-BR source=en.ts source-blob=d77309b236f9e4529c3c3b32f7338be30db41126 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title:
        'state-in-url — estado tipado na URL para React e Next.js, como useState',
      description:
        'Gerenciamento de estado na URL para React: guarde estado tipado na query string, como useState. Sobrevive ao refresh, cada estado é um link compartilhável, o botão voltar funciona. Next.js, React Router, Remix, Astro.',
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
    nextjs: {
      title: 'Gerenciamento de estado na URL no Next.js App Router — state-in-url',
      description:
        'Mantenha estado tipado na URL do Next.js: searchParams a partir de Server Components, sem limite de Suspense, pré-renderização mantida, layouts via proxy.ts, atualizações shallow do histórico. Guia e FAQ do hook useUrlState do state-in-url.',
    },
    vsNuqs: {
      title: 'Alternativa ao nuqs — state-in-url vs nuqs, comparação de estado tipado na URL em React',
      description:
        'Comparação honesta entre state-in-url e nuqs: configuração, formato do estado, objetos aninhados, datas e tamanho do bundle — mais TanStack Router, use-query-params e useSearchParams, com demo ao vivo.',
    },
  },

  header: {
    titleLead: 'Estado tipado na URL para React e Next.js —',
    titleUrl: 'como useState',
    desc: 'é o estado React que se grava na query string. Objetos, arrays e datas mantêm seus tipos, cada estado é um link compartilhável, sobrevive a recarregamentos e o botão voltar funciona — sem providers, sem limite de Suspense, sem boilerplate.',
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
    heading: 'Gerenciamento de estado na URL para Next.js, React Router, Remix e Astro — a mesma API',
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

  faq: {
    title: 'Estado na URL em React — perguntas frequentes',
    items: [
      {
        q: 'Por que manter o estado do React na URL?',
        a: 'Uma URL que carrega o estado é um link compartilhável: recarregue, salve nos favoritos ou envie, e os mesmos filtros, aba ou página se abrem. Voltar e avançar funcionam de graça, e componentes não relacionados leem os mesmos valores sem provider. state-in-url faz isso com um único objeto tipado em vez de strings parseadas à mão.',
      },
      {
        q: 'Que estado deve ficar na URL?',
        a: 'Tudo o que alguém possa salvar nos favoritos ou compartilhar: filtros, ordenação, paginação, a aba ativa, um intervalo de datas, texto de busca. Deixe de fora o que é privado, enorme ou puramente transitório — tokens de autenticação, se um diálogo está aberto, a posição do mouse. Um teste rápido: um link compartilhado ainda faria sentido com esse valor nele?',
      },
      {
        q: 'Como ler e definir parâmetros da URL em React com state-in-url?',
        a: 'Chame useUrlState com um objeto de estado padrão. urlState guarda os valores atuais, já tipados; setUrl grava um objeto parcial na query string; setState atualiza o estado sem tocar na URL até você fazer o flush. Números, booleanos, arrays, objetos aninhados e Dates voltam com os mesmos tipos com que entraram.',
      },
      {
        q: 'O estado na URL sobrevive a um refresh da página?',
        a: 'Sim. O estado é a query string, então um recarregamento, um favorito ou um link colado em outro lugar o restaura. No Next.js App Router, passe a prop searchParams da página para o hook, para que a primeira renderização no servidor já mostre os valores certos em vez dos padrões.',
      },
      {
        q: 'Funciona com Server Components do Next.js, sem limite de Suspense?',
        a: 'Sim. O hook nunca chama useSearchParams, então um componente que o usa não precisa de limite de Suspense e não exclui a página da pré-renderização, PPR incluído. Server Components leem o mesmo estado pela prop searchParams; um layout pode decodificá-lo a partir de um header definido no proxy.ts.',
      },
      {
        q: 'Dá para sincronizar react-hook-form ou uma biblioteca de tabela com a URL?',
        a: 'Sim. Mantenha a biblioteca de formulário como fonte da verdade, inicialize-a com urlState como valores padrão e espelhe as mudanças com setUrl a partir de um handler de mudança ou de um effect. O mesmo padrão funciona para o estado do TanStack Table, painéis de filtro e qualquer outra coisa que exponha valores e um setter.',
      },
      {
        q: 'Quais frameworks o state-in-url suporta?',
        a: 'Next.js 14-16 App Router, React Router v6 e v7, Remix v2 e ilhas do Astro (React ou Preact), cada um por seu próprio entry point. JavaScript puro e qualquer outro framework podem usar os helpers encodeState e decodeState diretamente. Tem ~2 KB em gzip e zero dependências.',
      },
    ],
  },

  nextjs: {
    crumb: 'Guia do Next.js',
    title: 'Gerenciamento de estado na URL no Next.js App Router',
    intro:
      'state-in-url mantém estado tipado na query string no Next.js 14, 15 e 16: um hook useUrlState por feature, sem adaptador, sem provider, sem limite de Suspense. Esta página cobre o que é específico do App Router — Server Components, pré-renderização, layouts e histórico.',
    demoLead: 'A demonstração ao vivo na',
    demoLinkText: 'página inicial',
    demoTail: ' roda no Next.js 16.',
    serverTitle: 'Encaminhe searchParams da página no servidor',
    serverBody:
      'Uma página Server Component recebe searchParams — uma Promise desde o Next.js 15. Aguarde-a com await e passe o objeto para o componente de cliente, que o entrega ao hook. A primeira renderização no servidor então mostra os valores da URL em vez dos padrões, sem flash e sem aviso de hidratação.',
    suspenseTitle: 'Sem limite de Suspense, pré-renderização mantida',
    prerenderNote:
      'Uma página pré-renderizada ainda renderiza os padrões, porque não existe query string em tempo de build — renderize a rota dinamicamente quando um link compartilhado precisar estar certo já na primeira pintura.',
    layoutTitle: 'Layouts: decodifique a query string a partir de um header',
    layoutBody:
      'Layouts de servidor nunca recebem searchParams. Copie a query string para um header da requisição no proxy.ts (middleware.ts ainda funciona como alias descontinuado) e decodifique-a no layout com decodeState e o mesmo objeto de estado padrão — o resultado é tipado exatamente como o urlState no cliente.',
    historyTitle: 'Histórico, atualizações shallow e scroll',
    historyBody:
      'setUrl substitui a entrada atual do histórico por padrão, então digitar não acumula entradas; passe replace: false para adicionar uma. As atualizações passam pela History API — sem ida ao servidor e sem requisição _rsc a cada tecla. Passe useHistory: false para usar o roteador do Next.js, quando o servidor deve re-renderizar a cada mudança. scroll é false por padrão.',
    inputTitle: 'Inputs rápidos: renderize agora, grave a URL depois',
    inputBody:
      'Para campos de texto e sliders, atualize com setState a cada mudança e chame setUrl() sem argumentos no blur ou depois de um debounce. O componente re-renderiza imediatamente; a URL é gravada uma vez, com diff baseado em conteúdo, então chamá-lo repetidamente é seguro.',
    faq: {
      title: 'Estado na URL no Next.js — perguntas frequentes',
      items: [
        {
          q: 'Como manter estado na URL no Next.js App Router?',
          a: 'Defina um objeto de estado padrão fora do componente, envolva o useUrlState de state-in-url/next num hook pequeno e chame esse hook em qualquer componente de cliente. urlState é o valor atual tipado e setUrl grava um partial na query string. Passe a prop searchParams da página para que a renderização no servidor já esteja correta.',
        },
        {
          q: 'useSearchParams precisa de limite de Suspense? E o state-in-url?',
          a: 'O useSearchParams do Next faz uma rota renderizada estaticamente passar a renderizar no cliente até o limite de Suspense mais próximo, e o build falha sem um. state-in-url nunca o chama: lê searchParams no servidor e window.location no cliente, então nenhum limite é necessário e a pré-renderização, PPR incluído, é mantida.',
        },
        {
          q: 'Como ler o estado da URL em um Server Component?',
          a: 'Páginas o recebem como a prop searchParams — aguarde-a com await e encaminhe ao hook no cliente ou decodifique no servidor com decodeState e o mesmo objeto padrão. Layouts não recebem searchParams; exponha a query string por um header definido no proxy.ts e decodifique esse header.',
        },
        {
          q: 'Atualizar a URL re-renderiza a página no servidor?',
          a: 'Por padrão, não. setUrl atualiza pela History API, então nada é buscado e nenhuma requisição _rsc é feita. Quando o servidor deve ver o novo estado — digamos, para buscar de novo uma lista num Server Component — passe useHistory: false para que as atualizações passem pelo roteador do Next.js e a rota re-renderize.',
        },
        {
          q: 'state-in-url é uma alternativa ao nuqs para Next.js?',
          a: 'Sim. Ambos mantêm estado tipado na query string; state-in-url recebe um objeto com valores aninhados e datas preservados, não precisa de componente adaptador nem de parser por chave, e nunca toca no useSearchParams. nuqs encaixa melhor quando cada valor deve ser seu próprio query param legível. Veja a comparação completa.',
        },
        {
          q: 'Quais versões do Next.js são suportadas?',
          a: 'Next.js 14, 15 e 16 no App Router, incluindo o searchParams assíncrono introduzido no 15 e cacheComponents com PPR no 16. Outras configurações podem usar os helpers encodeState e decodeState, independentes de framework, com o roteador que preferirem.',
        },
      ],
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
