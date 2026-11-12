"use client";

import { useLanguage } from "@/components/language-provider";
import { site } from "@/content/site";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-3 py-8 text-[0.9375rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <bdi>
            © {new Date().getFullYear()} {site.name}
          </bdi>
          . {t.footer.rights}
        </p>
        <a href="#top" className="font-medium text-text hover:text-accent">
          {t.footer.top}
        </a>
      </div>
    </footer>
  );
}
