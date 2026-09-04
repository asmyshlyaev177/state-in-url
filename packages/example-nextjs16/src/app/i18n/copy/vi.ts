// Vietnamese (vi) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=vi source=en.ts source-blob=7ed7b2279891828661b2d22fb37cb520b35aae17 status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - lưu state trong URL như trong JSON, an toàn kiểu',
      description:
        'Lưu bất kỳ state người dùng nào trong tham số truy vấn; hãy tưởng tượng JSON trong URL trình duyệt, trong khi giữ nguyên kiểu và cấu trúc dữ liệu. Cho Next.js, React-router và JS thuần.',
    },
    reactRouter: {
      title:
        'state-in-url cho React Router — state có kiểu trong URL, v6 và v7',
      description:
        'Lưu state lồng nhau, có kiểu trong chuỗi truy vấn với React Router v6 và v7. Demo trực tiếp và hướng dẫn cho hook useUrlState của state-in-url.',
    },
    remix: {
      title: 'state-in-url cho Remix — state có kiểu trong URL với Remix v2',
      description:
        'Lưu state lồng nhau, có kiểu trong chuỗi truy vấn với Remix v2. Demo trực tiếp và hướng dẫn cho hook useUrlState của state-in-url.',
    },
    astro: {
      title: 'state-in-url cho Astro — state có kiểu trong URL với island',
      description:
        'Lưu state lồng nhau, có kiểu trong chuỗi truy vấn với Astro: island React hoặc Preact, hoặc trang không có framework phía client. Demo trực tiếp và hướng dẫn cho hook useUrlState của state-in-url.',
    },
    vsNuqs: {
      title: 'state-in-url vs nuqs — so sánh state URL có kiểu trong React',
      description:
        'So sánh thẳng thắn state-in-url và nuqs: cài đặt, hình dạng state, object lồng nhau, ngày tháng và kích thước bundle — thêm TanStack Router, use-query-params và useSearchParams, kèm demo trực tiếp.',
    },
  },

  header: {
    titleLead: 'State có kiểu, sống trong',
    titleUrl: 'URL',
    desc: 'là state React tự ghi chính nó vào chuỗi truy vấn. Object, array và ngày giữ nguyên kiểu, mọi state là một liên kết có thể chia sẻ và tồn tại qua các lần tải lại — không provider, không boilerplate.',
    factsLabel: 'Thông tin thư viện',
    // The thin space in "~2 KB" is what `&thinsp;` rendered in the markup.
    facts: [
      '~2 KB nén gzip',
      'không phụ thuộc',
      'TypeScript-first',
      'Next.js / react-router / Remix / Astro',
      'MIT',
    ],
  },

  tabs: {
    heading: 'Cùng một API, bốn framework',
    selectLabel: 'Chọn framework',
  },

  demo: {
    titleLead: 'useUrlState — trực tiếp với',
    hint: 'Gõ bên dưới — xem URL sáng lên',
    formTitle: 'Client component đầu tiên',
    statusTitle: 'Client component khác',
    statusSubtitle:
      'Đọc từ URL — không props, không context, kiểu và cấu trúc được giữ nguyên',
    fields: {
      name: 'Tên',
      age: 'Tuổi',
      agreeToTerms: 'Đồng ý điều khoản',
      tags: 'Tags',
    },
  },

  quickStart: {
    title: 'Bắt đầu nhanh',
    stateStep: '1. Định nghĩa state',
    hookStep: '2. Bọc nó trong một hook tái sử dụng',
    componentsStep: '3. Dùng trong bất kỳ component nào — cùng chia sẻ state',
    advancedStep: '4. Mở rộng hook khi cần thêm',
  },

  aiSkills: {
    title: 'Đang dùng AI coding agent?',
    pitfallsLead:
      'Các agent mắc cùng hai lỗi ở đây, mọi lúc. Chúng định nghĩa hình dạng state bằng',
    pitfallsMid: ', mà ràng buộc',
    pitfallsTail:
      ' từ chối ngay lập tức. Và chúng xây dựng object state mặc định bên trong component, điều này ngầm phá vỡ việc chia sẻ — nó được khóa theo định danh object, nên không có lỗi, hai component chỉ đơn giản ngừng nhìn thấy nhau.',
    shipsLead: 'Vậy nên package kèm theo bảy',
    shipsMid: ' file. Agent của bạn tải một file theo yêu cầu qua',
    intentLinkText: 'TanStack Intent',
    shipsTail:
      ', và chúng được quản lý phiên bản cùng thư viện chứ không phải cùng trang này.',
    installLabel: 'Sao chép lệnh cài Intent',
    runLead: 'Chạy một lần trong dự án đã cài',
    runMid: '. Sau đó agent của bạn tìm các skill trong',
    runTail: '.',
    skills: {
      featureStateHook:
        'Định nghĩa state, và bọc useUrlState trong một hook theo phạm vi tính năng',
      inputHandling:
        'Ô nhập văn bản, thanh trượt, bất cứ thứ gì thay đổi nhanh',
      nextjsSsr: 'App Router: chuyển tiếp searchParams, Proxy cho layout',
      reactRouterRemixSetup: 'Thiết lập React Router v6/v7 hoặc Remix v2',
      astroSetup: 'Island của Astro (React hoặc Preact), hoặc trang không có framework phía client',
      formLibraryIntegration: 'Kết hợp với react-hook-form (hoặc formik)',
      sharedStateNoUrl: 'useSharedState — chia sẻ mà không chạm vào URL',
    },
    sourcesLead: 'Nguồn ở',
    sourcesLinkText: 'trên GitHub',
    sourcesMid: 'Agent không thể tải các skill Intent nên đọc',
    sourcesTail: ' thay thế — cùng các quy tắc, cô đọng trong một file.',
  },

  comparison: {
    title: 'state-in-url vs nuqs',
    intro:
      'Đang tìm một lựa chọn thay thế nuqs? Cả hai đều lưu state có kiểu trong query string; khác nhau ở lượng cấu hình cần thiết và giá trị có thể là gì.',
    colFeature: 'Tiêu chí',
    rows: {
      setup: {
        label: 'Cài đặt',
        siu: 'Next.js, React Router v6/v7, Remix, Astro, helper cho JS thuần',
        nuqs: 'Component adapter bọc quanh ứng dụng',
      },
      stateShape: {
        label: 'Hình dạng state',
        siu: 'Một object có kiểu, giống React.useState',
        nuqs: 'Giá trị theo từng khóa, mỗi khóa khai báo một parser',
      },
      reuse: {
        label: 'Tái sử dụng giữa các component',
        siu: 'Bọc hook một lần — mọi component chia sẻ state, không cần props',
        nuqs: 'Bạn tự tách hook quanh bộ parser',
      },
      nested: {
        label: 'Object và mảng lồng nhau',
        siu: 'Có sẵn — giữ nguyên cấu trúc và kiểu',
        nuqs: 'Parser JSON cộng thêm validator tự viết',
      },
      dates: {
        label: 'Ngày tháng',
        siu: 'Giữ nguyên tự động',
        nuqs: 'Parser có sẵn, khai báo theo từng khóa',
      },
      size: {
        label: 'Kích thước, import toàn bộ',
        siu: '~2.9 KB gzip',
        nuqs: '~6.7 KB gzip',
      },
      deps: {
        label: 'Phụ thuộc runtime',
        siu: 'Không',
        nuqs: 'Một',
      },
      routers: {
        label: 'Router',
        siu: 'Next.js, React Router v6/v7, Remix, helper cho JS thuần',
        nuqs: 'Next.js, React Router, Remix, TanStack Router, React thuần',
      },
    },
    sizeNote:
      'Kích thước: import cả thư viện, esbuild minify + gzip, đo tháng 8/2026 với nuqs 2.10.1.',
    outro:
      'nuqs là một thư viện tốt — hãy chọn nó khi bạn muốn mỗi giá trị là một query param dễ đọc, hoặc đang dùng TanStack Router. Chọn state-in-url khi bạn muốn cả một object có kiểu nằm trong URL mà không cần cấu hình.',
    fullLink:
      'Đọc bản so sánh đầy đủ — cùng một tính năng viết bằng cả hai, và cách di chuyển',
  },

  vsNuqs: {
    codeTitle: 'Cùng một tính năng, trong cả hai',
    codeIntro:
      'Một panel bộ lọc: chuỗi tìm kiếm, số trang, danh sách tag và một ngày. nuqs khai báo parser cho từng khóa và nối adapter ở gốc; state-in-url nhận object và bọc nó trong một hook tái sử dụng.',
    codeOutro:
      'Một custom hook đó là toàn bộ API của tính năng: mọi component gọi nó đều chia sẻ cùng một state có kiểu — danh sách tag vẫn là mảng, ngày trả về đúng là object Date. Không props, không context, không nối dây theo từng khóa.',
    setupTitle: 'Cài đặt và boilerplate',
    setupBody:
      'nuqs nối vào router qua một component adapter bọc quanh ứng dụng, và mỗi mảnh state khai báo parser riêng. state-in-url có sẵn hook cho từng router — import đúng cái, đưa vào object state mặc định, xong. Không gì phải bọc gì.',
    ssrTitle: 'Next.js, SSR và prerender',
    ssrLead: 'Trên App Router, state-in-url không bao giờ gọi',
    ssrMid: ', nên component dùng nó không cần ranh giới',
    ssrTail:
      'và trang vẫn prerender được — kể cả PPR. Server component đọc cùng state qua prop searchParams, được chuyển tiếp nguyên vẹn.',
    migrateTitle: 'Di chuyển từ nuqs',
    migrateBody:
      'Đa phần chỉ là thao tác máy móc: gom các khóa của một tính năng vào một object state mặc định, bỏ các khai báo parser — giá trị có kiểu mang cùng thông tin — và thay các setter theo khóa bằng một setter nhận partial. Mỗi trường cấp cao nhất vẫn ứng với query param riêng của nó.',
    faqTitle: 'Câu hỏi thường gặp',
    faq: [
      {
        q: 'state-in-url có phải lựa chọn thay thế nuqs tốt không?',
        a: 'Có, khi bạn muốn cả một object có kiểu nằm trong URL mà không cần cấu hình: không component adapter, không parser theo khóa, object lồng nhau và ngày tháng được giữ tự động. nuqs vẫn là lựa chọn tốt hơn khi bạn muốn mỗi giá trị là một query param dễ đọc, hoặc đang dùng TanStack Router.',
      },
      {
        q: 'state-in-url hay nuqs nhỏ hơn?',
        a: 'Đo bằng esbuild (minify + gzip, import cả thư viện) tháng 8/2026: state-in-url khoảng 2.9 KB, không phụ thuộc runtime; nuqs 2.10.1 khoảng 6.7 KB với một phụ thuộc. Import một phần thì cả hai đều nhỏ lại.',
      },
      {
        q: 'state-in-url có cần adapter hay provider không?',
        a: 'Không. Mỗi router có entry point riêng — import đúng hook, đưa vào object state mặc định là chạy. Không có component adapter bọc ứng dụng, không có context provider phải cấu hình.',
      },
      {
        q: 'Di chuyển từ nuqs sang state-in-url có khó không?',
        a: 'Thường là không: gom các khóa của một tính năng vào một object state mặc định, bỏ các khai báo parser, và thay setter theo khóa bằng một setter nhận partial. Mỗi trường cấp cao nhất vẫn ứng với query param riêng.',
      },
      {
        q: 'Còn search params của TanStack Router?',
        a: 'Nếu bạn dùng TanStack Router, hãy dùng thứ có sẵn: search params JSON-first, kiểm tra bằng validateSearch trên từng route. state-in-url và nuqs có ý nghĩa khi router của bạn là Next.js, React Router hoặc Remix — nơi không có search params có kiểu tích hợp.',
      },
    ],
    alternatives: {
      title: 'Các lựa chọn khác so ra sao',
      intro:
        'nuqs không phải lựa chọn thay thế duy nhất. Cùng một việc — state có kiểu trong query string — cũng được router tích hợp sẵn và các thư viện cũ hơn đảm nhận, mỗi cái một đánh đổi.',
      colLibrary: 'Thư viện',
      colSetup: 'Cài đặt',
      colNested: 'Object lồng nhau và ngày',
      colSize: 'Kích thước',
      colPick: 'Chọn khi',
      rows: {
        siu: {
          setup: 'Không cần — import hook',
          nested: 'Giữ tự động, kèm kiểu',
          size: '~2.9 KB gzip, không phụ thuộc',
          pick: 'Muốn một object có kiểu, không cấu hình, trên Next.js, React Router hoặc Remix',
        },
        nuqs: {
          setup: 'Component adapter, parser theo khóa',
          nested: 'Parser JSON cộng validator tự viết',
          size: '~6.7 KB gzip, một phụ thuộc',
          pick: 'Muốn mỗi giá trị là một query param dễ đọc',
        },
        tanstack: {
          setup: 'validateSearch trên từng route',
          nested: 'JSON-first cho object và mảng; ngày cần tự serialize',
          size: 'Tích hợp trong router',
          pick: 'Đang dùng TanStack Router — dùng thứ có sẵn',
        },
        useQueryParams: {
          setup: 'Provider cộng adapter router, cấu hình từng param',
          nested: 'Qua kiểu param JSON, kiểu lỏng',
          size: '~4.4 KB gzip cộng serialize-query-params',
          pick: 'Codebase đã xây trên nó',
        },
        useSearchParams: {
          setup: 'Không cần — router tích hợp sẵn',
          nested: 'Chỉ chuỗi — parse, kiểu và mặc định tự lo',
          size: '0 KB',
          pick: 'Chỉ một hai param chuỗi phẳng, không đáng thêm thư viện',
        },
      },
    },
  },

  description: {
    title: 'Tại sao là state-in-url?',
    whyLead:
      'Các thư viện state trong URL đã tồn tại, nhưng hầu hết hoặc rườm rà khi thiết lập, hoặc hạn chế về thứ có thể lưu.',
    whyMid: ' hướng tới việc đơn giản là hoạt động: một API phản chiếu',
    whyTail: ', với URL làm nơi lưu trữ.',
    storeLead:
      'Lưu state không cần boilerplate, xây deep link và chia sẻ dữ liệu giữa các client component không liên quan — không cần provider. Cấu trúc và kiểu được giữ nguyên từ đầu đến cuối: một',
    dateMid: ' vào, một',
    dateTail: ' ra.',
    tested:
      'Được xây dựng theo test-first, với bộ test đơn vị và e2e đa trình duyệt chạy trên mỗi commit.',
    suspenseTitle: 'Next.js: không cần ranh giới Suspense',
    suspenseLead: 'Hook không bao giờ gọi',
    suspenseAfterHook: ', nên component dùng nó không cần bọc trong',
    suspenseAfterBoundary:
      ' và không khiến trang bị loại khỏi prerendering — bao gồm PPR và',
    suspenseAfterFlag:
      '. Nó đọc URL trực tiếp và theo dõi mọi thay đổi sau đó, bao gồm cả',
    suspenseTail: ' từ code không biết gì về nó.',
    otherTitle: 'Không dùng Next.js hoặc react-router?',
    helpersLead: 'Các helper',
    helpersTail:
      ' hoạt động với bất kỳ framework hoặc JS thuần — các hook là sự tiện lợi bên trên.',
    ctaLead: 'Hãy xem',
    ctaLinkText: 'trang GitHub',
    ctaTail: ' — một star giúp ích rất nhiều.',
    uneedBadgeAlt: 'Uneed Embed Badge',
  },

  share: {
    title: 'Chia sẻ với các nhà phát triển khác',
    dialogTitle: 'thư viện state-in-url',
    buttons: {
      x: 'Nút chia sẻ X/Twitter',
      linkedin: 'Nút chia sẻ LinkedIn',
      reddit: 'Nút chia sẻ Reddit',
      vk: 'Nút chia sẻ VK',
      facebook: 'Nút chia sẻ Facebook',
    },
  },

  footer: {
    tagline: 'state có kiểu, sống trong URL',
    updated: 'Cập nhật',
    navLabel: 'Chân trang',
  },

  errors: {
    title: 'Đã xảy ra lỗi!',
    retry: 'Thử lại',
    notFoundTitle: 'Không tìm thấy',
    notFoundBody: 'Không thể tìm thấy tài nguyên được yêu cầu',
    boundaryTitle: 'Đã xảy ra lỗi:',
    boundaryFallback: 'Đã xảy ra lỗi',
  },

  chrome: {
    logoAlt: 'Logo',
    installCopyLabel: 'Sao chép lệnh cài đặt',
    copied: 'Đã sao chép',
    copiedAnnouncement: 'Lệnh đã được sao chép vào clipboard',
    opensInNewTab: '(mở trong tab mới)',
    npmLinkLabel: 'Liên kết NPM',
    urlBarLabel: 'URL hiện tại với state đã đồng bộ',
    sourceCode: 'Mã nguồn',
    reloadPage: 'Tải lại trang',
    languageLabel: 'Ngôn ngữ',
    home: 'Trang chủ',
    homeLink: 'state-in-url — về trang chủ',
    breadcrumbs: 'Đường dẫn điều hướng',
  },
};
