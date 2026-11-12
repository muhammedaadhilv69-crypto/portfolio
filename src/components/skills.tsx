"use client";

import { useLanguage } from "@/components/language-provider";
import { skills } from "@/content/site";

export function Skills() {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="bg-panel">
      <div className="wrap grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <div>
          <h2 className="t-section">{t.skills.title}</h2>
          <p className="mt-4 text-lg text-muted">{t.skills.body}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title.en} className="border-t-2 border-text pt-4">
              <h3 className="text-lg font-semibold">{group.title[lang]}</h3>
              <ul className="mt-3 space-y-1">
                {group.items.map((item) => (
                  <li key={item}>
                    <bdi>{item}</bdi>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
