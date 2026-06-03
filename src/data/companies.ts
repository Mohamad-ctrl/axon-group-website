/**
 * Stable, non-translatable metadata for the homepage company cards.
 * Display text (tag / name / desc / alt) lives in the dictionaries
 * (`dict.companies.cards`), in the SAME order as this array.
 */
export type CompanyMeta = { img: string; href: string; external: boolean };

export const companyMeta: CompanyMeta[] = [
  { img: "/images/company-fm.jpg", href: "https://axonfm.com/", external: true },
  { img: "/images/company-pools.jpg", href: "https://axonpools.com/", external: true },
  { img: "/images/company-garments.jpg", href: "https://axongarments.com/", external: true },
  { img: "/images/company-lsf.jpg", href: "https://lsf.ae/", external: true },
  { img: "/images/company-greendream.jpg", href: "https://greendreamco.com/", external: true },
  { img: "/images/company-management.jpg", href: "#contact", external: false },
];
