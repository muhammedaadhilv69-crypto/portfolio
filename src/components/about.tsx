"use client";

import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
      <h2 className="t-section">{t.about.title}</h2>
      <div className="measure space-y-6 text-lg">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
