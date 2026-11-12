import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  ExternalLink,
  Github,
  GitPullRequest,
  Layers3,
  Terminal,
  Workflow,
} from "lucide-react";

const github = "https://github.com/muhammedaadhilv69-crypto";

const projects = [
  {
    number: "01",
    name: "Al Ramlah Cars",
    category: "Business website · Concept",
    description:
      "A website concept for an automotive business, focused on presenting vehicles and giving visitors a clear path to explore the offering.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Live demo",
    href: "https://alramlah-cars.netlify.app",
    linkLabel: "View live demo",
    visual: "cars",
  },
  {
    number: "02",
    name: "Budget App",
    category: "Personal project",
    description:
      "A budgeting application built to make tracking money and understanding everyday spending more straightforward.",
    stack: ["JavaScript", "Application logic"],
    status: "Completed",
    href: github,
    linkLabel: "Explore GitHub",
    visual: "budget",
  },
  {
    number: "03",
    name: "Task CLI",
    category: "Developer tool",
    description:
      "A command-line task manager with JSON-based persistence, built to explore practical CLI design and file handling.",
    stack: ["JavaScript", "Node.js", "JSON"],
    status: "Completed",
    href: github,
    linkLabel: "Explore GitHub",
    visual: "terminal",
  },
];

const skills = [
  {
    title: "Frontend",
    description: "Interfaces that are responsive, accessible, and maintainable.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    icon: Code2,
  },
  {
    title: "Backend & data",
    description: "Application logic, APIs, data modelling, and persistence.",
    items: ["Node.js", "Python", "Supabase", "PostgreSQL", "SQL"],
    icon: Layers3,
  },
  {
    title: "Tools & workflow",
    description: "The tools I use to build, collaborate, and ship software.",
    items: ["Git", "GitHub", "Vercel", "Linux", "Lua"],
    icon: Workflow,
  },
];

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "cars") {
    return (
      <div className="project-art">
        <div className="w-[78%] max-w-[390px] rounded-xl border border-white/10 bg-[#151d18] p-3 shadow-2xl shadow-black/50">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[9px] font-bold tracking-[.18em] text-[#b5e8c0]">AL RAMLAH CARS</span>
            <div className="flex gap-1"><i className="h-1 w-1 rounded-full bg-white/20" /><i className="h-1 w-1 rounded-full bg-white/20" /><i className="h-1 w-1 rounded-full bg-white/20" /></div>
          </div>
          <div className="grid grid-cols-[1.1fr_.9fr] gap-2">
            <div className="flex flex-col justify-center">
              <div className="mb-2 h-1.5 w-10 rounded bg-[#8fc99d]/70" />
              <div className="mb-1 h-3 w-full rounded bg-white/80" />
              <div className="mb-3 h-3 w-4/5 rounded bg-white/50" />
              <div className="h-5 w-16 rounded bg-[#a6e3b5]" />
            </div>
            <div className="flex items-center justify-center rounded-lg bg-gradient-to-br from-[#304538] to-[#111713]">
              <div className="h-8 w-24 rounded-[50%] border-t-2 border-[#b4d8bb] opacity-80" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "budget") {
    return (
      <div className="project-art">
        <div className="w-[76%] max-w-[350px] rounded-xl border border-white/10 bg-[#151b17] p-4 shadow-2xl shadow-black/50">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] text-[#b8c5ba]">Monthly overview</span>
            <span className="rounded bg-[#24372a] px-2 py-1 text-[8px] text-[#a6e3b5]">This month</span>
          </div>
          <div className="mb-4 text-2xl font-semibold tracking-tight text-white">$2,480<span className="ml-1 text-xs text-[#89958c]">.00</span></div>
          <div className="flex h-14 items-end gap-2">
            {[34, 58, 43, 78, 52, 91, 66, 48, 74, 60, 84, 55].map((height, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-[#80c992]/70" style={{ height: height + "%" }} />
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[8px] text-[#77847a]"><span>Income</span><span>Expenses</span><span>Balance</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-art">
      <div className="w-[78%] max-w-[370px] overflow-hidden rounded-xl border border-white/10 bg-[#101512] shadow-2xl shadow-black/50">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#e58d83]/70" /><span className="h-2 w-2 rounded-full bg-[#d9bb76]/70" /><span className="h-2 w-2 rounded-full bg-[#8acb98]/70" />
          <span className="ml-2 text-[9px] text-[#829087]">tasks — terminal</span>
        </div>
        <div className="space-y-2 p-4 font-mono text-[10px] leading-relaxed">
          <p className="text-[#a6e3b5]">$ task list</p>
          <p className="text-[#c1cbc3]">YOUR TASKS <span className="text-[#77847a]">────────────</span></p>
          <p className="text-[#a6e3b5]">✓ <span className="text-[#c1cbc3]">Build portfolio</span></p>
          <p className="text-[#a6e3b5]">✓ <span className="text-[#c1cbc3]">Ship CLI utility</span></p>
          <p className="text-[#d9bb76]">○ <span className="text-[#c1cbc3]">Plan next project</span></p>
          <p className="text-[#77847a]">3 tasks · 2 completed</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#0b0d0c]/85 backdrop-blur-xl">
        <nav className="container flex h-[72px] items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Aadhil home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#a6e3b5]/25 bg-[#a6e3b5]/10 font-mono text-sm font-bold text-[#a6e3b5]">A.</span>
            <span className="text-sm font-semibold tracking-tight text-[#edf2ed]">aadhil<span className="text-[#a6e3b5]">.</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
          <a href={github} target="_blank" rel="noreferrer" className="button-secondary !min-h-9 !px-3">
            <Github size={14} /> <span>GitHub</span><ArrowUpRight size={13} />
          </a>
        </nav>
      </header>

      <section id="home" className="relative flex min-h-[690px] items-center py-24 md:min-h-[760px]">
        <div className="grid-pattern pointer-events-none absolute inset-0 opacity-70" />
        <div className="container relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-[660px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#a6e3b5]/20 bg-[#a6e3b5]/[0.06] px-3 py-2 text-[11px] text-[#b8d9bf]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8ed69e] shadow-[0_0_10px_#8ed69e]" />
              Developer · Builder · Problem solver
            </div>
            <p className="mb-5 font-mono text-sm text-[#a6e3b5]">Hey, I'm Aadhil.</p>
            <h1 className="max-w-[700px] text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-[.98] tracking-[-.075em] text-[#edf2ed]">
              I build things<br />
              <span className="text-[#a6e3b5]">for the real world.</span>
            </h1>
            <p className="mt-8 max-w-[510px] text-[15px] leading-8 text-[#9ca79f] md:text-base">
              I'm a developer focused on full-stack web development and practical software. I enjoy turning ideas into useful products — from clean interfaces to the systems powering them.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="button-primary">Explore my work <ArrowDownRight size={16} /></a>
              <a href={github} target="_blank" rel="noreferrer" className="button-secondary"><Github size={15} /> GitHub profile <ArrowUpRight size={14} /></a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6 text-[11px] text-[#77847a]">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#a6e3b5]" /> Building with curiosity</span>
              <span className="font-mono">Based in Bahrain · Working worldwide</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-8 rounded-full bg-[#4d9c65]/10 blur-3xl" />
            <div className="panel relative overflow-hidden p-4 shadow-2xl shadow-black/30">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2 text-[11px] text-[#aab5ad]"><Terminal size={14} className="text-[#a6e3b5]" /> developer.ts</div>
                <div className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-white/15" /><i className="h-2 w-2 rounded-full bg-white/15" /><i className="h-2 w-2 rounded-full bg-white/15" /></div>
              </div>
              <div className="space-y-4 py-7 font-mono text-[12px] leading-relaxed sm:text-[13px]">
                <p className="text-[#758178]">// A little about what I do</p>
                <p><span className="text-[#c792ea]">const</span> <span className="text-[#dce8de]">developer</span> = {"{"}</p>
                <div className="space-y-3 pl-5">
                  <p><span className="text-[#a6e3b5]">focus</span>: <span className="text-[#e4c58a]">"full-stack development"</span>,</p>
                  <p><span className="text-[#a6e3b5]">frontend</span>: <span className="text-[#e4c58a]">["React", "Next.js"]</span>,</p>
                  <p><span className="text-[#a6e3b5]">backend</span>: <span className="text-[#e4c58a]">["Node.js", "Supabase"]</span>,</p>
                  <p><span className="text-[#a6e3b5]">language</span>: <span className="text-[#e4c58a]">"TypeScript"</span>,</p>
                  <p><span className="text-[#a6e3b5]">mindset</span>: <span className="text-[#e4c58a]">"keep building"</span></p>
                </div>
                <p>{"};"}</p>
                <div className="mt-7 rounded-lg border border-[#a6e3b5]/15 bg-[#a6e3b5]/[0.05] p-3 text-[11px]">
                  <div className="mb-2 flex items-center gap-2 text-[#a6e3b5]"><Check size={13} /> Currently building</div>
                  <p className="text-[#a4b0a7]">Projects, open-source contributions, and new ideas.</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.08] pt-3 text-[9px] text-[#667269]"><span>UTF-8</span><span>TypeScript</span><span>Spaces: 2</span></div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-[#151b17] px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-2 text-[11px] text-[#cbd5cd]"><Braces size={14} className="text-[#a6e3b5]" /> Turning ideas into software</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Selected work"
            title="A few things I've built."
            copy="A selection of projects that show how I approach software — from business-facing web experiences to practical developer tools."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="project-card">
                <ProjectVisual type={project.visual} />
                <div className="p-6 md:p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] tracking-wider text-[#7e8b81]">PROJECT {project.number}</span>
                    <span className="tag">{project.status}</span>
                  </div>
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[.12em] text-[#a6e3b5]">{project.category}</p>
                  <h3 className="text-xl font-semibold tracking-tight text-[#edf2ed]">{project.name}</h3>
                  <p className="mt-3 min-h-[72px] text-[13px] leading-6 text-[#929c94]">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold text-[#c5e9cd] transition-colors hover:text-white">
                    {project.linkLabel} <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
            <article className="project-card flex min-h-[360px] flex-col justify-between p-7 md:p-8">
              <div>
                <span className="eyebrow">Open source</span>
                <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#a6e3b5]/20 bg-[#a6e3b5]/[0.07] text-[#a6e3b5]"><GitPullRequest size={25} /></div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">Tacit OS</h3>
                <p className="mt-3 max-w-sm text-[13px] leading-6 text-[#929c94]">Contributed to an open-source desktop environment project. My pull request was merged — a practical experience in collaboration, code review, and working in an existing codebase.</p>
              </div>
              <a href="https://github.com/muhammedaadhilv69-crypto/tacit/pull/54" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold text-[#c5e9cd] hover:text-white">
                View merged pull request <ArrowUpRight size={14} />
              </a>
            </article>
          </div>
          <div className="mt-7 flex justify-center">
            <a href={github} target="_blank" rel="noreferrer" className="button-secondary">More on GitHub <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="My toolkit"
            title="Tools I use to bring ideas to life."
            copy="I care more about choosing the right tool for the problem than collecting technologies. This is the toolkit I reach for most often."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="panel p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#a6e3b5]/20 bg-[#a6e3b5]/[0.07] text-[#a6e3b5]"><Icon size={18} /></div>
                  <h3 className="mt-5 text-base font-semibold">{group.title}</h3>
                  <p className="mt-2 min-h-[48px] text-[12px] leading-6 text-[#89958c]">{group.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="section section-border">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionTitle eyebrow="A little about me" title="Curious by default. Building by choice." />
          </div>
          <div className="space-y-5 text-[14px] leading-8 text-[#9ca79f]">
            <p>
              I'm Aadhil, a developer from Bahrain interested in the engineering behind useful software. My main focus is full-stack web development, but I also enjoy exploring databases, automation, open source, and game development.
            </p>
            <p>
              I like understanding how things work under the hood — not just getting an interface on screen. I enjoy working through the architecture, application logic, data flow, and the details that make a project dependable.
            </p>
            <p>
              Outside web development, I'm exploring game development with both Godot and Defold, choosing the engine based on what a project needs.
            </p>
            <div className="panel mt-8 flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#e5ece6]">Always learning. Always building.</p>
                <p className="mt-1 text-xs text-[#87938a]">Follow along with my projects and experiments.</p>
              </div>
              <a href={github} target="_blank" rel="noreferrer" className="button-secondary !min-h-10 shrink-0">Visit GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-border">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border border-[#a6e3b5]/20 bg-[radial-gradient(ellipse_at_top_right,rgba(112,201,138,.13),transparent_55%),#111713] px-7 py-14 text-center sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-6 text-4xl font-semibold tracking-[-.06em] text-[#edf2ed] sm:text-5xl">Have an idea worth building?</h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#9ca79f]">I'm interested in connecting with developers, builders, and people working on interesting ideas. Find me on GitHub.</p>
              <a href={github} target="_blank" rel="noreferrer" className="button-primary mt-8">Connect on GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] py-7">
        <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <a href="#home" className="text-sm font-semibold tracking-tight">aadhil<span className="text-[#a6e3b5]">.</span></a>
          <p className="text-[11px] text-[#718077]">Designed & built with care. © {new Date().getFullYear()} Aadhil.</p>
          <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[11px] text-[#9ba79e] hover:text-[#a6e3b5]"><Github size={13} /> GitHub <ExternalLink size={11} /></a>
        </div>
      </footer>
    </main>
  );
}
