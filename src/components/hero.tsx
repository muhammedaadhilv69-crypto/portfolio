"use client";

import type { CSSProperties } from "react";
import { ArrowDown, Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/content/site";

const step = (i: number): CSSProperties => ({ ["--i" as string]: i });

export function Hero() {
  const { lang, t, toggle } = useLanguage();

  return (
    <section id="top" className="wrap pb-20 pt-14 sm:pb-28 sm:pt-24">
      {/* key restarts the entrance when the language switches, so the flip reads as a response */}
      <div key={lang}>
        <h1 className="t-display rise max-w-4xl" style={step(0)}>
          {t.hero.title}
        </h1>
        <p className="t-lead rise measure mt-8 text-muted" style={step(1)}>
          {t.hero.body}
        </p>
        <div className="rise mt-10 flex flex-wrap gap-3" style={step(2)}>
          <a href="#work" className="btn btn-solid">
            {t.hero.primary}
            <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-line">
            {t.hero.secondary}
          </a>
        </div>
      </div>

      <div className="mt-16 border-t-2 border-text pt-5">
        <button
          type="button"
          onClick={toggle}
          lang="en"
          className="inline-flex items-center gap-3 py-2 text-lg font-medium underline decoration-2 underline-offset-8 hover:text-accent"
        >
          <Languages size={22} aria-hidden="true" />
          {t.switchLabel}
        </button>
      </div>
    </section>
  );
}
