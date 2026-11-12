"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const links = ["work", "skills", "about", "contact"] as const;

export function SiteHeader() {
  const { lang, t, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only rounded bg-text px-4 py-2 text-on-inverse focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50"
      >
        {t.skip}
      </a>

      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#top" className="text-lg font-semibold tracking-tight" dir="ltr">
          aadhil
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((id) => (
            <a key={id} href={`#${id}`} className="py-2 hover:text-accent">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            lang={lang === "en" ? "ar" : "en"}
            className="btn btn-line !min-h-10 !px-4"
          >
            {t.switchTo}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="btn btn-line !min-h-10 !px-3 md:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span className="sr-only">{open ? t.menu.close : t.menu.open}</span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line md:hidden">
          <ul className="wrap py-2">
            {links.map((id) => (
              <li key={id} className="border-b border-line last:border-b-0">
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-xl font-medium"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
