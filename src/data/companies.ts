/**
 * Stable, non-translatable metadata for the company cards.
 * Display text (tag / name / desc / alt) lives in the dictionaries
 * (`dict.companies.cards`), in the SAME order as this array.
 *
 * - `slug` powers the per-company detail page at /[lang]/companies/[slug].
 * - `website` (optional) is the company's own external site; when present it
 *   renders a "Visit website" link on both the card and the detail page.
 *
 * NOTE: company-management.jpg (Axon Waste Management) and company-garments.jpg
 * (Axon Amenities) are placeholder photos reused from the previous lineup —
 * replace them with real imagery for those companies when available.
 */
export type CompanyMeta = { slug: string; img: string; website?: string };

export const companyMeta: CompanyMeta[] = [
  { slug: "green-dream", img: "/images/company-greendream.jpg", website: "https://greendreamco.com/" },
  { slug: "axon-waste-management", img: "/images/company-management.jpg" },
  { slug: "axon-amenities", img: "/images/company-garments.jpg" },
  { slug: "axon-pools", img: "/images/company-pools.jpg", website: "https://axonpools.com/" },
  { slug: "axon-facility-management", img: "/images/company-fm.jpg", website: "https://axonfm.com/" },
  { slug: "lsf-contracting", img: "/images/company-lsf.jpg", website: "https://lsf.ae/" },
];
