export type Lang = "en" | "ar";

export const site = {
  name: "Aadhil",
  url: "https://the-duck-portfolio.vercel.app",
  github: "https://github.com/muhammedaadhilv69-crypto",
  /** Add a public contact email here and an Email button appears in the contact section. */
  email: "" as string,
} as const;

type Text = Record<Lang, string>;

export type Project = {
  name: string;
  kind: Text;
  description: Text;
  stack: string[];
  /** Where the row links to. Omit if there is no public link yet. */
  href?: string;
  linkLabel?: Text;
  featured?: boolean;
};

export type ProjectGroup = {
  title: Text;
  projects: Project[];
};

const source: Text = { en: "Source code", ar: "الشيفرة المصدرية" };

export const projectGroups: ProjectGroup[] = [
  {
    title: { en: "Business websites", ar: "مواقع الأعمال" },
    projects: [
      {
        name: "Al Ramlah Cars",
        kind: { en: "Concept site", ar: "موقع تجريبي" },
        description: {
          en: "A concept site for a car dealership, built to show the vehicles and give visitors one clear next step.",
          ar: "موقع تجريبي لمعرض سيارات، يعرض المركبات ويمنح الزائر خطوة تالية واضحة.",
        },
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://alramlah-cars.netlify.app",
        linkLabel: { en: "Live demo", ar: "عرض مباشر" },
        featured: true,
      },
      {
        name: "Gayle Electrical Ltd",
        kind: { en: "English + Arabic", ar: "عربي + إنجليزي" },
        description: {
          en: "A business site in English and Arabic, built on a reusable config with right-to-left layout and localized content.",
          ar: "موقع شركة بالعربية والإنجليزية، قائم على إعدادات قابلة لإعادة الاستخدام مع تخطيط من اليمين إلى اليسار ومحتوى مترجم.",
        },
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/muhammedaadhilv69-crypto/gayle-electrical-ltd-site",
        linkLabel: source,
      },
      {
        name: "Abu Shanab",
        kind: { en: "English + Arabic", ar: "عربي + إنجليزي" },
        description: {
          en: "A bilingual local-business site on a configurable Next.js template, with RTL support.",
          ar: "موقع نشاط تجاري محلي بلغتين، مبني على قالب Next.js قابل للتخصيص مع دعم الكتابة من اليمين إلى اليسار.",
        },
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/muhammedaadhilv69-crypto/abu-shanab",
        linkLabel: source,
      },
      {
        name: "ProxDevs Website 2.0",
        kind: { en: "Multi-page site", ar: "موقع متعدد الصفحات" },
        description: {
          en: "A rebuild of the ProxDevs website, with separate pages for projects, team, about, contact and joining the community.",
          ar: "إعادة بناء لموقع ProxDevs، بصفحات مستقلة للمشاريع والفريق والتعريف والتواصل والانضمام إلى المجتمع.",
        },
        stack: ["Web development", "Routing"],
        href: "https://github.com/muhammedaadhilv69-crypto/proxdevs-site-2.0",
        linkLabel: source,
      },
    ],
  },
  {
    title: { en: "Apps and tools", ar: "تطبيقات وأدوات" },
    projects: [
      {
        name: "LinkVault",
        kind: { en: "Web app", ar: "تطبيق ويب" },
        description: {
          en: "A React and TypeScript web app built with Vite.",
          ar: "تطبيق ويب بـ React وTypeScript مبني باستخدام Vite.",
        },
        stack: ["React", "TypeScript", "Vite"],
        href: "https://github.com/muhammedaadhilv69-crypto/linkvault",
        linkLabel: source,
      },
      {
        name: "Next.js Dashboard",
        kind: { en: "Learning project", ar: "مشروع تعلّم" },
        description: {
          en: "Built while working through the Next.js App Router course, to learn routing and app structure.",
          ar: "بُني أثناء دراسة دورة Next.js App Router لفهم التوجيه وبنية التطبيق.",
        },
        stack: ["Next.js", "React", "TypeScript"],
        href: "https://github.com/muhammedaadhilv69-crypto/nextjs-dashboard",
        linkLabel: source,
      },
      {
        name: "Budget App",
        kind: { en: "Personal project", ar: "مشروع شخصي" },
        description: {
          en: "A budgeting app that makes it easier to track money and see where it goes.",
          ar: "تطبيق ميزانية يسهّل تتبّع المال ومعرفة أين يذهب.",
        },
        stack: ["JavaScript"],
      },
      {
        name: "Task CLI",
        kind: { en: "Command-line tool", ar: "أداة سطر أوامر" },
        description: {
          en: "A command-line task manager that saves to JSON, built to practice CLI design and file handling.",
          ar: "مدير مهام بسطر الأوامر يحفظ بياناته في JSON، بُني لتعلّم تصميم واجهات الأوامر والتعامل مع الملفات.",
        },
        stack: ["Node.js", "JSON"],
      },
    ],
  },
  {
    title: { en: "Games and open source", ar: "ألعاب ومصادر مفتوحة" },
    projects: [
      {
        name: "SpaceShooter2D",
        kind: { en: "Game", ar: "لعبة" },
        description: {
          en: "A 2D shooter, made to learn gameplay programming and the basics of game development.",
          ar: "لعبة إطلاق نار ثنائية الأبعاد لتعلّم برمجة اللعب وأساسيات تطوير الألعاب.",
        },
        stack: ["2D", "Game development"],
        href: "https://github.com/muhammedaadhilv69-crypto/SpaceShooter2D",
        linkLabel: source,
      },
      {
        name: "Tacit OS",
        kind: { en: "Open source", ar: "مصدر مفتوح" },
        description: {
          en: "My pull request to this open-source desktop environment was merged. A real lesson in code review and working inside someone else's codebase.",
          ar: "تم دمج طلب السحب الذي قدّمته إلى بيئة سطح المكتب مفتوحة المصدر هذه، وكانت تجربة حقيقية في مراجعة الشيفرة والعمل داخل مشروع شخص آخر.",
        },
        stack: ["Pull request"],
        href: "https://github.com/tacit-os/tacit/pull/54",
        linkLabel: { en: "Merged pull request", ar: "طلب السحب المدموج" },
      },
    ],
  },
];

export const skills: { title: Text; items: string[] }[] = [
  {
    title: { en: "Frontend", ar: "الواجهات" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: { en: "Backend and data", ar: "الخلفية والبيانات" },
    items: ["Node.js", "Python", "Supabase", "PostgreSQL", "SQL"],
  },
  {
    title: { en: "Tools", ar: "الأدوات" },
    items: ["Git", "GitHub", "Vercel", "Linux", "Lua"],
  },
];

export const copy = {
  en: {
    nav: { work: "Work", skills: "Skills", about: "About", contact: "Contact" },
    menu: { open: "Menu", close: "Close" },
    skip: "Skip to content",
    switchTo: "العربية",
    switchLabel: "Read this page in Arabic",
    hero: {
      title: "Websites that work in English and Arabic.",
      body: "I'm Aadhil, a full-stack developer based in Bahrain. I build Next.js sites for local businesses with right-to-left layouts done properly, and I make tools and games when an idea won't leave me alone.",
      primary: "See my work",
      secondary: "GitHub profile",
    },
    work: {
      title: "Work",
      body: "A live demo where there is one, source code where there isn't.",
      noLink: "Not public yet",
    },
    skills: { title: "Skills", body: "The tools I reach for most." },
    about: {
      title: "About",
      paragraphs: [
        "I'm Aadhil, a developer based in Bahrain who cares about the engineering behind useful software. My main focus is full-stack web development, but I also explore databases, automation, open source and game development.",
        "I like knowing how things work under the hood: the architecture, the application logic, the data flow, and the small details that make a project dependable.",
        "Outside web development I'm exploring game development with Godot and Defold, choosing the engine by what the project needs.",
      ],
    },
    contact: {
      title: "Have a site or an idea to build?",
      body: "Tell me what you're building. I work with businesses, teams and other developers.",
      bodyNoEmail: "GitHub is the best place to reach me for now.",
      email: "Email me",
      github: "Find me on GitHub",
    },
    footer: { rights: "All rights reserved.", top: "Back to top" },
  },
  ar: {
    nav: { work: "أعمالي", skills: "مهاراتي", about: "نبذة", contact: "تواصل" },
    menu: { open: "القائمة", close: "إغلاق" },
    skip: "تخطَّ إلى المحتوى",
    switchTo: "English",
    switchLabel: "Read this page in English",
    hero: {
      title: "مواقع إلكترونية تعمل بالعربية والإنجليزية.",
      body: "أنا عادل، مطوّر ويب متكامل مقيم في البحرين. أبني مواقع بـ Next.js للأعمال المحلية مع دعم دقيق لاتجاه الكتابة من اليمين إلى اليسار، وأصنع أدوات وألعابًا عندما تلحّ عليّ فكرة.",
      primary: "شاهد أعمالي",
      secondary: "حسابي على GitHub",
    },
    work: {
      title: "أعمالي",
      body: "عرض مباشر حيثما وُجد، والشيفرة المصدرية حيث لا يوجد.",
      noLink: "غير منشور بعد",
    },
    skills: { title: "مهاراتي", body: "الأدوات التي أعود إليها أكثر." },
    about: {
      title: "نبذة",
      paragraphs: [
        "أنا عادل، مطوّر مقيم في البحرين يهتم بالهندسة وراء البرمجيات المفيدة. تركيزي الأساسي على تطوير الويب المتكامل، لكنني أستكشف أيضًا قواعد البيانات والأتمتة والمصادر المفتوحة وتطوير الألعاب.",
        "أحب أن أفهم كيف تعمل الأشياء من الداخل: البنية ومنطق التطبيق وتدفق البيانات والتفاصيل الصغيرة التي تجعل المشروع موثوقًا.",
        "خارج تطوير الويب أستكشف تطوير الألعاب مع Godot وDefold، وأختار المحرك بحسب حاجة المشروع.",
      ],
    },
    contact: {
      title: "لديك موقع أو فكرة تريد بناءها؟",
      body: "أخبرني بما تبنيه. أعمل مع الشركات والفرق والمطورين الآخرين.",
      bodyNoEmail: "أفضل مكان للتواصل معي حاليًا هو GitHub.",
      email: "راسلني",
      github: "تجدني على GitHub",
    },
    footer: { rights: "جميع الحقوق محفوظة.", top: "العودة إلى الأعلى" },
  },
};

export type Copy = (typeof copy)["en"];
