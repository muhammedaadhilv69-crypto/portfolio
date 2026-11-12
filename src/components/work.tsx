"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { projectGroups, type Project } from "@/content/site";

function Stack({ items }: { items: string[] }) {
  return (
    <p className="mt-2 text-[0.9375rem] text-muted">
      <bdi>{items.join(", ")}</bdi>
    </p>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const { lang } = useLanguage();

  return (
    <article className="mt-8 grid gap-6 rounded-xl bg-panel p-6 sm:p-10 md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="font-medium text-accent">{project.kind[lang]}</p>
        <h4 className="t-section mt-2">
          <bdi>{project.name}</bdi>
        </h4>
        <p className="measure mt-4 text-lg text-muted">{project.description[lang]}</p>
        <Stack items={project.stack} />
      </div>
      {project.href && project.linkLabel ? (
        <a href={project.href} target="_blank" rel="noreferrer" className="btn btn-solid">
          {project.linkLabel[lang]}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const { lang, t } = useLanguage();

  return (
    <li className="group relative grid gap-x-8 gap-y-2 border-b border-line px-2 py-6 transition-colors hover:bg-panel md:grid-cols-[15rem_1fr_9.5rem] md:px-4">
      <div>
        <h4 className="text-xl font-semibold">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="after:absolute after:inset-0"
            >
              <bdi>{project.name}</bdi>
              {project.linkLabel ? (
                <span className="sr-only">, {project.linkLabel[lang]}</span>
              ) : null}
            </a>
          ) : (
            <bdi>{project.name}</bdi>
          )}
        </h4>
        <p className="text-[0.9375rem] text-muted">{project.kind[lang]}</p>
      </div>

      <div>
        <p className="measure">{project.description[lang]}</p>
        <Stack items={project.stack} />
      </div>

      <p className="text-[0.9375rem] font-medium md:justify-self-end md:text-end">
        {project.href && project.linkLabel ? (
          <span className="inline-flex items-center gap-1.5 text-accent group-hover:underline" aria-hidden="true">
            {project.linkLabel[lang]}
            <ArrowUpRight size={16} />
          </span>
        ) : (
          <span className="text-muted">{t.work.noLink}</span>
        )}
      </p>
    </li>
  );
}

export function Work() {
  const { lang, t } = useLanguage();

  return (
    <section id="work" className="wrap border-t border-line py-20 sm:py-28">
      <h2 className="t-section">{t.work.title}</h2>
      <p className="measure mt-4 text-lg text-muted">{t.work.body}</p>

      {projectGroups.map((group) => {
        const featured = group.projects.find((p) => p.featured);
        const rows = group.projects.filter((p) => !p.featured);

        return (
          <div key={group.title.en} className="mt-16">
            <h3 className="border-b-2 border-text pb-3 text-lg font-semibold">
              {group.title[lang]}
            </h3>
            {featured ? <FeaturedProject project={featured} /> : null}
            <ul className={featured ? "mt-6" : undefined}>
              {rows.map((project) => (
                <ProjectRow key={project.name} project={project} />
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
