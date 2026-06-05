/**
 * Projects extracted from the group's live site (axongroup.ae), grouped by the
 * company that delivered them. Shown on each company's detail page and (the
 * `featuredProjects` subset) on the homepage. Images were downloaded and
 * optimized into /public/images/projects/<id>.jpg.
 *
 * Companies not present here (Axon Amenities, Axon Garments, LSF Contracting)
 * have no projects on the group site yet — their detail pages omit the section.
 */
export type ProjectKind = "landscape" | "pools" | "fm" | "fire" | "waste";

export const PROJECT_CAT: Record<ProjectKind, { en: string; ar: string }> = {
  landscape: { en: "Landscaping", ar: "تنسيق الحدائق" },
  pools: { en: "Swimming Pools", ar: "حمامات السباحة" },
  fm: { en: "Facility Management", ar: "إدارة المرافق" },
  fire: { en: "Fire & Safety", ar: "الحماية من الحريق" },
  waste: { en: "Waste Management", ar: "إدارة النفايات" },
};

export type Project = { kind: ProjectKind; en: string; ar: string; img: string };

const img = (id: string) => `/images/projects/${id}.jpg`;

export const companyProjects: Record<string, Project[]> = {
  "green-dream": [
    { kind: "landscape", en: "Umm Al Emarat Park", ar: "حديقة أم الإمارات", img: img("i923833") },
    { kind: "landscape", en: "Sheikh Shakhbout Medical City", ar: "مدينة الشيخ شخبوط الطبية", img: img("i681115") },
    { kind: "landscape", en: "Qasr Al Hosn", ar: "قصر الحصن", img: img("i969736") },
    { kind: "landscape", en: "Repton Schools, Dubai & Abu Dhabi", ar: "مدارس ريبتون في دبي وأبوظبي", img: img("i891711") },
    { kind: "landscape", en: "Ruwais Housing Project — S1 Colony", ar: "مشروع الرويس السكني — الوحدة S1", img: img("i773473") },
  ],
  "axon-pools": [
    { kind: "pools", en: "Saadiyat Beach Villa 506", ar: "فيلا شاطئ السعديات 506", img: img("i818766") },
    { kind: "pools", en: "Abu Dhabi Maritime Academy", ar: "أكاديمية أبوظبي البحرية", img: img("i723670") },
    { kind: "pools", en: "Life Support System — Al Ain Zoo", ar: "نظام دعم الحياة — حديقة الحيوانات بالعين", img: img("i895124") },
    { kind: "pools", en: "C06 Al Reem Tower, Abu Dhabi", ar: "برج الريم C06، أبوظبي", img: img("i57604") },
    { kind: "pools", en: "Reptile House — Al Ain Zoo", ar: "بيت الزواحف — حديقة الحيوانات بالعين", img: img("i158727") },
  ],
  "axon-facility-management": [
    { kind: "fm", en: "Qasr Al Sarab Desert Resort by Anantara", ar: "قصر السراب منتجع الصحراء بإدارة أنانتارا", img: img("i716636") },
    { kind: "fm", en: "Mina Public Slaughterhouse & Livestock Market", ar: "مسلخ الجمهور وسوق المواشي — الميناء، أبوظبي", img: img("i671706") },
    { kind: "fm", en: "Banyas & Al Wathba Slaughterhouse", ar: "صيانة مسلخ بني ياس والوثبة", img: img("i12947") },
    { kind: "fm", en: "Al Wathba Slaughterhouse", ar: "صيانة مسلخ الوثبة", img: img("i205402") },
    { kind: "fm", en: "Etihad Park — FM AMC", ar: "عقد صيانة عامة لحديقة الاتحاد", img: img("i818547") },
    { kind: "fire", en: "Ingenia Polymers", ar: "إنجينيا بوليمرز", img: img("i18517") },
    { kind: "fire", en: "Khalifa University", ar: "جامعة خليفة", img: img("i532734") },
    { kind: "fire", en: "ADNOC Hub Stations", ar: "مراكز محطات أدنوك", img: img("i322973") },
    { kind: "fire", en: "CERT — Centre of Excellence for Applied Research & Training", ar: "مركز التميز للبحوث التطبيقية والتدريب", img: img("i818380") },
    { kind: "fire", en: "Bin Farih Camp, Abu Dhabi", ar: "مخيم بن فريح، أبوظبي", img: img("i981869") },
  ],
  "axon-waste-management": [
    { kind: "waste", en: "Etimad Industrial Company", ar: "شركة اعتماد الصناعية", img: img("i684221") },
    { kind: "waste", en: "Qasr Al Hosn", ar: "قصر الحصن", img: img("i248142") },
    { kind: "waste", en: "Golden Garden Flowers LLC", ar: "زهور الحديقة الذهبية ذ.م.م.", img: img("i133595") },
    { kind: "waste", en: "Mineral Expertise", ar: "مينيرال إكسبرتيز", img: img("i645945") },
    { kind: "waste", en: "Al Hikmah Building & Contracting", ar: "شركة الحكمة للبناء والمقاولات", img: img("i382974") },
  ],
};

/** Three featured projects for the homepage (diverse + recognizable). */
export const featuredProjects: Project[] = [
  companyProjects["green-dream"][0], // Umm Al Emarat Park
  companyProjects["axon-facility-management"][0], // Qasr Al Sarab Desert Resort
  companyProjects["axon-pools"][0], // Saadiyat Beach Villa 506
];
