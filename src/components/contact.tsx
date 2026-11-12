"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/content/site";

export function Contact() {
  const { t } = useLanguage();
  const hasEmail = site.email.length > 0;

  return (
    <section id="contact" className="on-inverse bg-inverse text-on-inverse">
      <div className="wrap py-20 sm:py-28">
        <h2 className="t-display max-w-4xl">{t.contact.title}</h2>
        <p className="t-lead measure mt-8 opacity-85">
          {hasEmail ? t.contact.body : t.contact.bodyNoEmail}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {hasEmail ? (
            <a href={`mailto:${site.email}`} className="btn btn-solid">
              <Mail size={18} aria-hidden="true" />
              {t.contact.email}
            </a>
          ) : null}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className={hasEmail ? "btn btn-line" : "btn btn-solid"}
          >
            {t.contact.github}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
