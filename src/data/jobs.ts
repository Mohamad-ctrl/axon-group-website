import type { Job } from "@/lib/jobs";

// Seed data used once to populate the `jobs` table. The app reads jobs from the DB.
export const seedJobs: Omit<Job, "active">[] = [
  {
    slug: "software-engineer",
    company: { en: "Axon Group", ar: "مجموعة أكسون" },
    department: { en: "Engineering & IT", ar: "الهندسة وتقنية المعلومات" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Software Engineer", ar: "مهندس برمجيات" },
    excerpt: {
      en: "Build and maintain the websites and internal tools for Axon Group and its companies.",
      ar: "بناء وصيانة المواقع الإلكترونية والأدوات الداخلية لمجموعة أكسون وشركاتها.",
    },
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
    responsibilities: {
      en: [
        "Develop and maintain responsive, SEO-friendly websites for the group's companies.",
        "Build internal tools and dashboards that streamline operations.",
        "Own performance, accessibility and security best practices.",
        "Collaborate with marketing and management on digital initiatives.",
      ],
      ar: [
        "تطوير وصيانة مواقع متجاوبة ومهيأة لمحركات البحث لشركات المجموعة.",
        "بناء أدوات داخلية ولوحات تحكم تبسّط العمليات.",
        "الالتزام بأفضل ممارسات الأداء وسهولة الوصول والأمان.",
        "التعاون مع فريقي التسويق والإدارة في المبادرات الرقمية.",
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
    department: { en: "Facility Management", ar: "إدارة المرافق" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Facility Maintenance Technician (MEP)", ar: "فني صيانة مرافق (ميكانيكا وكهرباء وسباكة)" },
    excerpt: {
      en: "Carry out preventive and reactive MEP maintenance across our managed facilities.",
      ar: "تنفيذ أعمال الصيانة الوقائية والطارئة للأنظمة الميكانيكية والكهربائية والصحية في المرافق التي نديرها.",
    },
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
    responsibilities: {
      en: [
        "Perform preventive and corrective maintenance on HVAC, electrical and plumbing systems.",
        "Diagnose faults and complete repairs to a high standard of safety.",
        "Keep accurate job records and report on completed work.",
        "Respond to call-outs and emergencies as part of a rota.",
      ],
      ar: [
        "تنفيذ الصيانة الوقائية والتصحيحية لأنظمة التكييف والكهرباء والسباكة.",
        "تشخيص الأعطال وإتمام الإصلاحات وفق معايير سلامة عالية.",
        "الاحتفاظ بسجلات دقيقة للأعمال وتقديم تقارير عن الأعمال المنجزة.",
        "الاستجابة للطلبات والحالات الطارئة ضمن نظام مناوبات.",
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
    department: { en: "Operations", ar: "العمليات" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Swimming Pool Maintenance Engineer", ar: "مهندس صيانة حمامات سباحة" },
    excerpt: {
      en: "Maintain water quality, equipment and safety for our residential and commercial pools.",
      ar: "الحفاظ على جودة المياه والمعدات والسلامة في حمامات السباحة السكنية والتجارية.",
    },
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
    responsibilities: {
      en: [
        "Test and balance water chemistry; manage dosing and filtration.",
        "Service pumps, filters, heaters and automated systems.",
        "Carry out leak detection and minor repairs.",
        "Advise clients on care and recommend upgrades.",
      ],
      ar: [
        "فحص وموازنة كيمياء المياه وإدارة الجرعات والترشيح.",
        "صيانة المضخات والمرشّحات والسخّانات والأنظمة الآلية.",
        "إجراء كشف التسربات والإصلاحات البسيطة.",
        "إرشاد العملاء بشأن العناية واقتراح التحسينات.",
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
    department: { en: "Operations", ar: "العمليات" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Landscape Supervisor", ar: "مشرف تنسيق حدائق" },
    excerpt: {
      en: "Lead landscaping and irrigation crews to deliver and maintain beautiful green spaces.",
      ar: "قيادة فرق تنسيق الحدائق والري لإنشاء وصيانة مساحات خضراء جميلة.",
    },
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
    responsibilities: {
      en: [
        "Supervise landscaping, planting and irrigation teams on site.",
        "Plan daily work, materials and schedules.",
        "Ensure quality, safety and client satisfaction.",
        "Maintain irrigation systems and troubleshoot issues.",
      ],
      ar: [
        "الإشراف على فرق تنسيق الحدائق والزراعة والري في الموقع.",
        "تخطيط العمل اليومي والمواد والجداول الزمنية.",
        "ضمان الجودة والسلامة ورضا العملاء.",
        "صيانة أنظمة الري ومعالجة الأعطال.",
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
    department: { en: "Construction", ar: "المقاولات" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Civil Site Engineer", ar: "مهندس موقع مدني" },
    excerpt: {
      en: "Supervise civil works on site and ensure projects are delivered safely, on time and to spec.",
      ar: "الإشراف على الأعمال المدنية في الموقع وضمان تنفيذ المشاريع بأمان وفي الوقت المحدد ووفق المواصفات.",
    },
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
    responsibilities: {
      en: [
        "Supervise site activities and ensure work follows drawings and specifications.",
        "Coordinate labour, subcontractors and materials.",
        "Monitor quality, progress and HSE compliance.",
        "Prepare site reports and support project planning.",
      ],
      ar: [
        "الإشراف على أنشطة الموقع وضمان مطابقة العمل للمخططات والمواصفات.",
        "تنسيق العمالة ومقاولي الباطن والمواد.",
        "مراقبة الجودة والتقدّم والالتزام بالصحة والسلامة.",
        "إعداد تقارير الموقع ودعم تخطيط المشروع.",
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
    department: { en: "Sales & Marketing", ar: "المبيعات والتسويق" },
    location: { en: "Abu Dhabi, UAE", ar: "أبوظبي، الإمارات" },
    type: { en: "Full-time", ar: "دوام كامل" },
    title: { en: "Business Development Executive", ar: "تنفيذي تطوير أعمال" },
    excerpt: {
      en: "Grow Axon Group's client base across facility management, construction and more.",
      ar: "تنمية قاعدة عملاء مجموعة أكسون عبر إدارة المرافق والمقاولات وغيرها.",
    },
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
    responsibilities: {
      en: [
        "Identify and pursue new business opportunities across the group's services.",
        "Build and maintain relationships with clients and partners.",
        "Prepare proposals and coordinate with operating companies.",
        "Meet sales targets and report on the pipeline.",
      ],
      ar: [
        "تحديد فرص الأعمال الجديدة عبر خدمات المجموعة ومتابعتها.",
        "بناء العلاقات مع العملاء والشركاء والحفاظ عليها.",
        "إعداد العروض والتنسيق مع الشركات التشغيلية.",
        "تحقيق أهداف المبيعات وتقديم تقارير عن مسار الصفقات.",
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
