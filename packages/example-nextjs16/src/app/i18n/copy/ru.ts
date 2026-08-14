// Russian (ru) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=ru source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - хранит состояние в URL как в JSON, типобезопасно',
      description:
        'Храните любое пользовательское состояние в параметрах запроса; представьте JSON в URL браузера, сохраняя типы и структуру данных. Для Next.js, React-router и чистого JS.',
    },
    reactRouter: {
      title: 'state-in-url для React Router — типизированное состояние в URL, v6 и v7',
      description:
        'Храните вложенное типизированное состояние в строке запроса с React Router v6 и v7. Живое демо и настройка hook useUrlState из state-in-url.',
    },
    remix: {
      title: 'state-in-url для Remix — типизированное состояние в URL в Remix v2',
      description:
        'Храните вложенное типизированное состояние в строке запроса с Remix v2. Живое демо и настройка hook useUrlState из state-in-url.',
    },
  },

  header: {
    titleLead: 'Типизированное состояние живёт в',
    titleUrl: 'URL',
    desc: '— это состояние React, которое само записывает себя в строку запроса. Объекты, массивы и даты сохраняют свои типы, любое состояние — это ссылка, которой можно поделиться, и оно переживает перезагрузку. Без провайдеров, без бойлерплейта.',
    factsLabel: 'Факты о библиотеке',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB в gzip',
      'ноль зависимостей',
      'TypeScript-first',
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'Один API, три роутера',
    selectLabel: 'Выбор фреймворка',
  },

  demo: {
    titleLead: 'useUrlState — живое демо:',
    hint: 'Введите ниже — смотрите, как загорается URL',
    formTitle: 'Первый клиентский компонент',
    statusTitle: 'Другой клиентский компонент',
    statusSubtitle:
      'Читает из URL — без props, без context, типы и структура сохраняются',
    fields: {
      name: 'Имя',
      age: 'Возраст',
      agreeToTerms: 'Согласие с условиями',
      tags: 'Теги',
    },
  },

  quickStart: {
    title: 'Быстрый старт',
    stateStep: '1. Опишите состояние',
    componentsStep: '2. Используйте в любых компонентах',
    hookStep: '3. Создайте переиспользуемый хук для части состояния',
  },

  aiSkills: {
    title: 'Пользуетесь AI-агентом для кодинга?',
    pitfallsLead:
      'Агенты каждый раз совершают здесь одни и те же две ошибки. Они описывают форму состояния через',
    pitfallsMid: ', а ограничение',
    pitfallsTail:
      ' его сразу отвергает. И они создают объект состояния по умолчанию внутри компонента, что незаметно ломает обмен — он адресуется по идентичности объекта, поэтому ошибки нет, просто два компонента перестают видеть друг друга.',
    shipsLead: 'Поэтому пакет поставляется с шестью',
    shipsMid: '-файлами. Ваш агент загружает один по запросу через',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ', и они версионируются вместе с библиотекой, а не с этой страницей.',
    installLabel: 'Скопировать команду установки Intent',
    runLead: 'Запустите один раз в проекте, где уже установлен',
    runMid: '. После этого агент найдёт навыки в',
    runTail: '.',
    skills: {
      featureStateHook:
        'Определение состояния и оборачивание useUrlState в hook с областью фичи',
      inputHandling: 'Текстовые поля, слайдеры — всё, что меняется быстро',
      nextjsSsr: 'App Router: проброс searchParams, Proxy для layout',
      reactRouterRemixSetup: 'Настройка React Router v6/v7 или Remix v2',
      formLibraryIntegration: 'Совместное использование с react-hook-form (или formik)',
      sharedStateNoUrl: 'useSharedState — обмен без обращения к URL',
    },
    sourcesLead: 'Исходники лежат',
    sourcesLinkText: 'на GitHub',
    sourcesMid: 'Агенту, который не умеет загружать навыки Intent, стоит прочитать',
    sourcesTail: ' — те же правила, сжатые в один файл.',
  },

  description: {
    title: 'Почему state-in-url?',
    whyLead:
      'Библиотеки состояния в URL существуют, но большинство либо громоздки в настройке, либо ограничены в том, что могут хранить.',
    whyMid: ' стремится быть той, что просто работает: API, повторяющий',
    whyTail: ', с URL в качестве хранилища.',
    storeLead:
      'Храните состояние без бойлерплейта, стройте глубокие ссылки и делитесь данными между несвязанными клиентскими компонентами — провайдер не нужен. Структура и типы сохраняются от начала до конца:',
    dateMid: ' входит, а',
    dateTail: ' выходит.',
    tested:
      'Собрано по принципу test-first, юнит-тесты и кросс-браузерные e2e-наборы запускаются на каждом коммите.',
    suspenseTitle: 'Next.js: граница Suspense не нужна',
    suspenseLead: 'Этот hook никогда не вызывает',
    suspenseAfterHook: ', поэтому использующему его компоненту не нужна обёртка в',
    suspenseAfterBoundary:
      ' и он не исключает страницу из предварительного рендеринга — включая PPR и',
    suspenseAfterFlag:
      '. Он читает URL напрямую и отслеживает каждое последующее изменение, включая',
    suspenseTail: ' из кода, который о нём ничего не знает.',
    otherTitle: 'Не на Next.js или react-router?',
    helpersLead: 'Вспомогательные функции',
    helpersTail:
      " работают с любым фреймворком или чистым JS — hook'и это лишь удобная обёртка поверх.",
    ctaLead: 'Загляните на',
    ctaLinkText: 'страницу на GitHub',
    ctaTail: ' — звёздочка многое значит.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: 'Поделитесь с другими разработчиками',
    dialogTitle: 'библиотека state-in-url',
    buttons: {
      x: 'Кнопка «Поделиться в X/Twitter»',
      linkedin: 'Кнопка «Поделиться в LinkedIn»',
      reddit: 'Кнопка «Поделиться в Reddit»',
      vk: 'Кнопка «Поделиться во VK»',
      facebook: 'Кнопка «Поделиться в Facebook»',
    },
  },

  footer: {
    tagline: 'типизированное состояние, живущее в URL',
    updated: 'Обновлено',
    navLabel: 'Подвал',
  },

  errors: {
    title: 'Что-то пошло не так!',
    retry: 'Попробовать снова',
    notFoundTitle: 'Не найдено',
    notFoundBody: 'Не удалось найти запрошенный ресурс',
    boundaryTitle: 'Что-то пошло не так:',
    boundaryFallback: 'Произошла ошибка',
  },

  chrome: {
    logoAlt: 'Логотип',
    installCopyLabel: 'Скопировать команду установки',
    copied: 'Скопировано',
    copiedAnnouncement: 'Команда скопирована в буфер обмена',
    opensInNewTab: '(открывается в новой вкладке)',
    npmLinkLabel: 'Ссылка на NPM',
    urlBarLabel: 'Текущий URL с синхронизированным состоянием',
    sourceCode: 'Исходный код',
    reloadPage: 'Перезагрузить страницу',
    languageLabel: 'Язык',
  },
};
