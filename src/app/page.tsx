import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}
