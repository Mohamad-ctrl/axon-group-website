import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  XTwitter,
} from "@/components/icons";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

const companyLinks = [
  { href: "https://axonfm.com/", label: "Axon Facility Mgmt" },
  { href: "https://axonpools.com/", label: "Axon Pools" },
  { href: "https://axongarments.com/", label: "Axon Garments" },
  { href: "https://lsf.ae/", label: "LSF Contracting" },
  { href: "https://greendreamco.com/", label: "Green Dream" },
];

export default function Footer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["footer"];
}) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image src="/images/logo/logo_en_764807.png" alt="Axon Group" width={107} height={50} />
            <p>{dict.tagline}</p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="X"><XTwitter /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4>{dict.companiesTitle}</h4>
            <ul>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{dict.companyTitle}</h4>
            <ul>
              <li><Link href={`/${lang}#about`}>{dict.about}</Link></li>
              <li><Link href={`/${lang}#why`}>{dict.why}</Link></li>
              <li><Link href={`/${lang}/careers`}>{dict.careers}</Link></li>
              <li><Link href={`/${lang}#contact`}>{dict.contact}</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>{dict.getInTouch}</h4>
            <ul className="footer__contact">
              <li>
                <MapPin />
                <span>Kamala Tower, Office 1602,<br />Al Khalidiyah West, Abu Dhabi, UAE</span>
              </li>
              <li>
                <Phone />
                <a href="tel:+971529987406">+971 52 998 7406</a>
              </li>
              <li>
                <Mail />
                <a href="mailto:info@axongroup.ae">info@axongroup.ae</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Axon Group. {dict.rights}</span>
          <span>{dict.location}</span>
        </div>
      </div>
    </footer>
  );
}
