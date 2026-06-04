import type { Job } from "@/lib/jobs";

// Seed data used once to populate the `jobs` table. The app reads jobs from the DB.
export const seedJobs: Omit<Job, "active">[] = [
  {
    slug: "software-engineer",
    company: { en: "Axon Group", ar: "مجموعة أكسون" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Software Engineer", ar: "مهندس برمجيات" },
    description: {
      en: [
        "Axon Group is investing in its digital presence, and we're looking for a software engineer to help lead that effort across the group's companies.",
        "You'll work on modern, fast websites and the internal tools that support our operations — owning projects end to end, from design through deployment.",
      ],
      ar: [
        "تستثمر مجموعة أكسون في حضورها الرقمي، ونبحث عن مهندس برمجيات للمساعدة في قيادة هذا الجهد عبر شركات المجموعة.",
        "ستعمل على مواقع حديثة وسريعة وعلى الأدوات الداخلية التي تدعم عملياتنا — مع تولّي المشاريع من البداية إلى النهاية، من التصميم حتى النشر.",
      ],
    },
    requirements: {
      en: [
        "2+ years building web applications with modern JavaScript/TypeScript.",
        "Experience with React and a framework such as Next.js.",
        "Solid understanding of HTML, CSS and web performance.",
        "Good communication skills in English; Arabic is a plus.",
      ],
      ar: [
        "خبرة سنتين فأكثر في بناء تطبيقات الويب باستخدام JavaScript/TypeScript الحديثة.",
        "خبرة في React وإطار عمل مثل Next.js.",
        "فهم متين لـ HTML وCSS وأداء الويب.",
        "مهارات تواصل جيدة بالإنجليزية، والعربية ميزة إضافية.",
      ],
    },
    posted: "2026-05-20",
  },
  {
    slug: "facility-maintenance-technician",
    company: { en: "Axon Facility Management", ar: "أكسون لإدارة المرافق" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Facility Maintenance Technician (MEP)", ar: "فني صيانة مرافق (ميكانيكا وكهرباء وسباكة)" },
    description: {
      en: [
        "Join Axon Facility Management's technical team servicing commercial and residential properties across Abu Dhabi.",
        "You'll handle day-to-day mechanical, electrical and plumbing maintenance to keep our clients' facilities running safely and reliably.",
      ],
      ar: [
        "انضم إلى الفريق الفني في أكسون لإدارة المرافق الذي يخدم العقارات التجارية والسكنية في أنحاء أبوظبي.",
        "ستتولى أعمال الصيانة الميكانيكية والكهربائية والصحية اليومية للحفاظ على تشغيل مرافق عملائنا بأمان وموثوقية.",
      ],
    },
    requirements: {
      en: [
        "Diploma or trade certificate in a relevant technical field.",
        "3+ years of hands-on MEP maintenance experience, ideally in the UAE.",
        "Knowledge of HSE standards and safe working practices.",
        "Valid UAE driving licence is an advantage.",
      ],
      ar: [
        "دبلوم أو شهادة مهنية في مجال تقني ذي صلة.",
        "خبرة عملية 3 سنوات فأكثر في صيانة الأنظمة الميكانيكية والكهربائية والصحية، ويفضّل داخل الإمارات.",
        "معرفة بمعايير الصحة والسلامة وممارسات العمل الآمن.",
        "رخصة قيادة إماراتية سارية ميزة إضافية.",
      ],
    },
    posted: "2026-05-18",
  },
  {
    slug: "pool-maintenance-engineer",
    company: { en: "Axon Pools", ar: "أكسون لحمامات السباحة" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Swimming Pool Maintenance Engineer", ar: "مهندس صيانة حمامات سباحة" },
    description: {
      en: [
        "Axon Pools designs, builds and maintains premium swimming pools across the UAE.",
        "We're hiring an engineer to manage the maintenance of a portfolio of pools — ensuring perfect water balance, healthy equipment and happy clients.",
      ],
      ar: [
        "تصمم أكسون حمامات السباحة الفاخرة وتبنيها وتصونها في أنحاء الإمارات.",
        "نوظّف مهندسًا لإدارة صيانة مجموعة من حمامات السباحة — لضمان توازن مثالي للمياه ومعدات سليمة وعملاء راضين.",
      ],
    },
    requirements: {
      en: [
        "Experience in pool maintenance or water-treatment systems.",
        "Understanding of pool chemistry and circulation equipment.",
        "Attention to detail and a strong service mindset.",
        "Valid UAE driving licence preferred.",
      ],
      ar: [
        "خبرة في صيانة حمامات السباحة أو أنظمة معالجة المياه.",
        "فهم كيمياء حمامات السباحة ومعدات تدوير المياه.",
        "دقة في التفاصيل وروح خدمة عالية.",
        "يفضّل امتلاك رخصة قيادة إماراتية سارية.",
      ],
    },
    posted: "2026-05-12",
  },
  {
    slug: "landscape-supervisor",
    company: { en: "Green Dream", ar: "الحلم الأخضر" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Landscape Supervisor", ar: "مشرف تنسيق حدائق" },
    description: {
      en: [
        "Green Dream creates and maintains gardens, green spaces and irrigation systems across the UAE.",
        "We're looking for a hands-on supervisor to lead site crews and ensure every project is delivered to a high standard.",
      ],
      ar: [
        "ينشئ الحلم الأخضر الحدائق والمساحات الخضراء وأنظمة الري ويصونها في أنحاء الإمارات.",
        "نبحث عن مشرف ميداني لقيادة فرق المواقع وضمان تنفيذ كل مشروع وفق معايير عالية.",
      ],
    },
    requirements: {
      en: [
        "Experience supervising landscaping or horticulture teams.",
        "Knowledge of plants suited to the UAE climate and irrigation systems.",
        "Leadership and organisational skills.",
        "Valid UAE driving licence preferred.",
      ],
      ar: [
        "خبرة في الإشراف على فرق تنسيق الحدائق أو البستنة.",
        "معرفة بالنباتات الملائمة لمناخ الإمارات وبأنظمة الري.",
        "مهارات قيادية وتنظيمية.",
        "يفضّل امتلاك رخصة قيادة إماراتية سارية.",
      ],
    },
    posted: "2026-05-10",
  },
  {
    slug: "civil-site-engineer",
    company: { en: "LSF Contracting", ar: "إل إس إف للمقاولات" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Civil Site Engineer", ar: "مهندس موقع مدني" },
    description: {
      en: [
        "LSF Contracting delivers civil construction, steel structures and turnkey projects across the UAE.",
        "We're hiring a site engineer to oversee day-to-day construction activities and coordinate teams, subcontractors and quality control.",
      ],
      ar: [
        "تنفّذ إل إس إف للمقاولات أعمال الإنشاءات المدنية والهياكل الحديدية والمشاريع المتكاملة في أنحاء الإمارات.",
        "نوظّف مهندس موقع للإشراف على أنشطة البناء اليومية وتنسيق الفرق ومقاولي الباطن وضبط الجودة.",
      ],
    },
    requirements: {
      en: [
        "Bachelor's degree in Civil Engineering.",
        "3+ years of site experience, ideally in the UAE.",
        "Familiarity with local codes and construction standards.",
        "Strong coordination and problem-solving skills.",
      ],
      ar: [
        "درجة بكالوريوس في الهندسة المدنية.",
        "خبرة ميدانية 3 سنوات فأكثر، ويفضّل داخل الإمارات.",
        "إلمام بالأكواد المحلية ومعايير البناء.",
        "مهارات قوية في التنسيق وحل المشكلات.",
      ],
    },
    posted: "2026-05-08",
  },
  {
    slug: "business-development-executive",
    company: { en: "Axon Group", ar: "مجموعة أكسون" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Business Development Executive", ar: "تنفيذي تطوير أعمال" },
    description: {
      en: [
        "As a group of specialized companies, Axon Group offers clients a single partner for many services.",
        "We're looking for a business development executive to build relationships, generate leads and win new contracts across our companies.",
      ],
      ar: [
        "بوصفها مجموعة من الشركات المتخصصة، تقدّم مجموعة أكسون لعملائها شريكًا واحدًا لخدمات متعددة.",
        "نبحث عن تنفيذي تطوير أعمال لبناء العلاقات وتوليد العملاء المحتملين والفوز بعقود جديدة عبر شركاتنا.",
      ],
    },
    requirements: {
      en: [
        "Proven B2B sales or business-development experience, ideally in the UAE.",
        "Strong communication and negotiation skills.",
        "Knowledge of facility management or construction is a plus.",
        "Valid UAE driving licence.",
      ],
      ar: [
        "خبرة مثبتة في مبيعات الشركات أو تطوير الأعمال، ويفضّل داخل الإمارات.",
        "مهارات قوية في التواصل والتفاوض.",
        "معرفة بإدارة المرافق أو المقاولات ميزة إضافية.",
        "رخصة قيادة إماراتية سارية.",
      ],
    },
    posted: "2026-05-22",
  },
];
