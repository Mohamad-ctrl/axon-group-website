/**
 * Real certificates shown on each company's detail page. Source files (PDF +
 * JPG) were converted/optimized into /public/images/certificates/<slug>/<kind>.jpg.
 * Companies missing from this map fall back to placeholder frames on the page.
 */
export type CertKind =
  | "trade-licence"
  | "iso-9001"
  | "iso-14001"
  | "iso-45001"
  | "iso-41001"
  | "iso-22301"
  | "icv-2026";

export const CERT_META: Record<CertKind, { en: string; ar: string; noteEn: string; noteAr: string }> = {
  "trade-licence": { en: "Trade Licence", ar: "الرخصة التجارية", noteEn: "Commercial registration", noteAr: "السجل التجاري" },
  "iso-9001": { en: "ISO 9001", ar: "ISO 9001", noteEn: "Quality Management", noteAr: "إدارة الجودة" },
  "iso-14001": { en: "ISO 14001", ar: "ISO 14001", noteEn: "Environmental Management", noteAr: "الإدارة البيئية" },
  "iso-45001": { en: "ISO 45001", ar: "ISO 45001", noteEn: "Occupational Health & Safety", noteAr: "الصحة والسلامة المهنية" },
  "iso-41001": { en: "ISO 41001", ar: "ISO 41001", noteEn: "Facility Management", noteAr: "إدارة المرافق" },
  "iso-22301": { en: "ISO 22301", ar: "ISO 22301", noteEn: "Business Continuity", noteAr: "استمرارية الأعمال" },
  "icv-2026": { en: "ICV Certificate", ar: "شهادة القيمة المحلية المضافة", noteEn: "In-Country Value", noteAr: "القيمة المحلية المضافة" },
};

export type CompanyCert = { kind: CertKind; src: string };

const build = (slug: string, kinds: CertKind[]): CompanyCert[] =>
  kinds.map((kind) => ({ kind, src: `/images/certificates/${slug}/${kind}.jpg` }));

export const companyCertificates: Record<string, CompanyCert[]> = {
  "green-dream": build("green-dream", ["trade-licence", "iso-9001", "iso-14001", "iso-45001", "iso-22301"]),
  "axon-waste-management": build("axon-waste-management", ["trade-licence", "iso-9001", "iso-14001", "iso-45001", "iso-22301"]),
  "axon-garments": build("axon-garments", ["trade-licence", "iso-9001"]),
  "axon-pools": build("axon-pools", ["trade-licence", "iso-9001", "iso-14001", "iso-45001", "iso-22301"]),
  "axon-facility-management": build("axon-facility-management", [
    "trade-licence", "iso-9001", "iso-14001", "iso-45001", "iso-41001", "iso-22301", "icv-2026",
  ]),
  "lsf-contracting": build("lsf-contracting", ["trade-licence", "iso-9001", "iso-14001", "iso-45001", "iso-22301"]),
  // axon-amenities: no certificates yet — the page shows placeholder frames.
};
