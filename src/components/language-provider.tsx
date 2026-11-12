"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { copy, type Copy, type Lang } from "@/content/site";

type LanguageContext = {
  lang: Lang;
  t: Copy;
  toggle: () => void;
};

const Context = createContext<LanguageContext | null>(null);

export function useLanguage(): LanguageContext {
  const value = useContext(Context);
  if (!value) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return value;
}

/**
 * Holds the page language and applies `lang` + `dir` to the whole page,
 * so every logical CSS property (ms-, pe-, text-start ...) flips with it.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);
  const value = useMemo(() => ({ lang, t: copy[lang], toggle }), [lang, toggle]);

  return (
    <Context.Provider value={value}>
      <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </Context.Provider>
  );
}
