// Vietnamese (vi) copy for the demo site.
//
// Values only: every key, its order and its type come from en.ts, and a
// missing or renamed one is a type error rather than a silently English
// page. Do not add keys here that en.ts does not have.
// i18n:meta locale=vi source=en.ts source-blob=f101ed742cbc514a958e52f1dedadef9e2d7868c status=translated
import type { SiteCopy } from './types';

export const copy: SiteCopy = {
  meta: {
    home: {
      title: 'state-in-url - lưu state trong URL như trong JSON, an toàn kiểu',
      description:
        'Lưu bất kỳ state người dùng nào trong tham số truy vấn; hãy tưởng tượng JSON trong URL trình duyệt, trong khi giữ nguyên kiểu và cấu trúc dữ liệu. Cho Next.js, React-router và JS thuần.',
    },
    reactRouter: {
      title: 'state-in-url cho React Router — state có kiểu trong URL, v6 và v7',
      description:
        'Lưu state lồng nhau, có kiểu trong chuỗi truy vấn với React Router v6 và v7. Demo trực tiếp và hướng dẫn cho hook useUrlState của state-in-url.',
    },
    remix: {
      title: 'state-in-url cho Remix — state có kiểu trong URL với Remix v2',
      description:
        'Lưu state lồng nhau, có kiểu trong chuỗi truy vấn với Remix v2. Demo trực tiếp và hướng dẫn cho hook useUrlState của state-in-url.',
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
      'Next.js / react-router / Remix',
      'MIT',
    ],
  },

  tabs: {
    heading: 'Cùng một API, ba router',
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
    componentsStep: '2. Dùng trong bất kỳ component nào',
    hookStep: '3. Tạo hook tái sử dụng cho một phần state',
  },

  aiSkills: {
    title: 'Đang dùng AI coding agent?',
    pitfallsLead:
      'Các agent mắc cùng hai lỗi ở đây, mọi lúc. Chúng định nghĩa hình dạng state bằng',
    pitfallsMid: ', mà ràng buộc',
    pitfallsTail:
      ' từ chối ngay lập tức. Và chúng xây dựng object state mặc định bên trong component, điều này ngầm phá vỡ việc chia sẻ — nó được khóa theo định danh object, nên không có lỗi, hai component chỉ đơn giản ngừng nhìn thấy nhau.',
    shipsLead: 'Vậy nên package kèm theo sáu',
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
      inputHandling: 'Ô nhập văn bản, thanh trượt, bất cứ thứ gì thay đổi nhanh',
      nextjsSsr: 'App Router: chuyển tiếp searchParams, Proxy cho layout',
      reactRouterRemixSetup: 'Thiết lập React Router v6/v7 hoặc Remix v2',
      formLibraryIntegration: 'Kết hợp với react-hook-form (hoặc formik)',
      sharedStateNoUrl: 'useSharedState — chia sẻ mà không chạm vào URL',
    },
    sourcesLead: 'Nguồn ở',
    sourcesLinkText: 'trên GitHub',
    sourcesMid: 'Agent không thể tải các skill Intent nên đọc',
    sourcesTail: ' thay thế — cùng các quy tắc, cô đọng trong một file.',
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
  },
};
