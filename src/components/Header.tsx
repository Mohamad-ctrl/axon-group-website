"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, Close } from "@/components/icons";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export default function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary["nav"];
}) {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const swap = (target: Locale) => {
    const parts = pathname.split("/");
    if (parts[1] === "en" || parts[1] === "ar") {
      parts[1] = target;
      return parts.join("/") || `/${target}`;
    }
    return `/${target}`;
  };

  const navLinks = [
    { href: `/${lang}#about`, label: dict.about },
    { href: `/${lang}#companies`, label: dict.companies },
    { href: `/${lang}#why`, label: dict.why },
    { href: `/${lang}/careers`, label: dict.careers },
    { href: `/${lang}#contact`, label: dict.contact },
  ];

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href="tel:+971529987406"><Phone /> +971 52 998 7406</a>
            <a href="mailto:info@axongroup.ae"><Mail /> info@axongroup.ae</a>
          </div>
          <nav className="lang-switch" aria-label={dict.language}>
            <Link href={swap("en")} aria-current={lang === "en" ? "true" : undefined}>EN</Link>
            <span aria-hidden="true">/</span>
            <Link href={swap("ar")} aria-current={lang === "ar" ? "true" : undefined}>ع</Link>
          </nav>
        </div>
      </div>

      <header className={`site-header${stuck ? " is-stuck" : ""}`}>
        <div className="container nav">
          <Link className="nav__logo" href={`/${lang}`} aria-label="Axon Group">
            <Image
              src="/images/logo/logo_black.png"
              alt="Axon Group"
              width={99}
              height={46}
              priority
            />
          </Link>

          <div
            className={`nav__backdrop${open ? " is-open" : ""}`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <nav className={`nav__menu${open ? " is-open" : ""}`} aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.href} className="nav__link" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav__actions">
            <Link className="btn btn--primary" href={`/${lang}#contact`}>{dict.getInTouch}</Link>
            <button
              className="nav__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? dict.closeMenu : dict.openMenu}
              aria-expanded={open}
            >
              {open ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
