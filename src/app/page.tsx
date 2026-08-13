import fs from "node:fs";
import path from "node:path";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Projects from "@/components/Projects";
import { resolvedProjects } from "@/lib/projects";
import {
  about,
  contact,
  education,
  experience,
  profile,
  socials,
  stats,
  skillGroups,
} from "@/content/site";

/** True once the user drops their photo into public/. Avoids a broken image. */
function hasPhoto() {
  return fs.existsSync(path.join(process.cwd(), "public", profile.photo));
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}

export default function Home() {
  const photo = hasPhoto();
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      <Nav />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        {/* ---------------- Hero ---------------- */}
        <section id="inicio" className="scroll-mt-24 pt-32 pb-20 sm:pt-40">
          <div className="grid items-center gap-12 sm:grid-cols-[1.4fr_1fr]">
            <div>
              {profile.available && (
                <Reveal>
                  <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised px-3 py-1.5 text-xs text-ink-soft">
                    <span className="size-1.5 rounded-full bg-accent" />
                    Disponible para nuevos proyectos
                  </span>
                </Reveal>
              )}

              <Reveal delay={60}>
                <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
                  {profile.name}
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-4 text-lg text-accent">{profile.role}</p>
              </Reveal>

              <Reveal delay={180}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                  {profile.tagline}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#proyectos"
                    className="pressable rounded-full bg-ink px-6 py-3 text-sm text-paper"
                  >
                    Ver proyectos
                  </a>
                  <a
                    href={profile.cv}
                    download
                    className="pressable rounded-full border border-line px-6 py-3 text-sm"
                  >
                    Descargar CV
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="pressable rounded-full px-4 py-3 text-sm text-ink-soft underline-offset-4 hover:underline"
                  >
                    Escribirme
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-64 overflow-hidden rounded-2xl border border-line bg-accent-soft">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-2 text-center">
                    <span className="font-display text-5xl text-accent">
                      {initials}
                    </span>
                    <span className="px-4 text-[11px] leading-snug text-ink-muted">
                      Guardá tu foto en public/profile.jpg
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

          {/* ---------------- Stats ---------------- */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 70} className="bg-paper-raised">
                <div className="px-5 py-7 text-center">
                  <p className="font-display text-4xl text-ink">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs leading-snug text-ink-muted">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Sobre mi ---------------- */}
        <section id="sobre-mi" className="scroll-mt-24 border-t border-line py-20">
          <SectionHeading eyebrow={about.eyebrow}>{about.heading}</SectionHeading>

          <div className="mt-10 grid gap-12 sm:grid-cols-[1.2fr_1fr]">
            <div className="space-y-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 70}>
                  <p className="text-base leading-relaxed text-ink-soft">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Formación
                </h3>
                <ul className="mt-4 space-y-4">
                  {education.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm leading-snug">{item.title}</p>
                      <p className="text-sm text-ink-muted">
                        {item.org} · {item.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {experience.length > 0 && (
            <div className="mt-16">
              <Reveal>
                <h3 className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Trayectoria
                </h3>
              </Reveal>

              <ol className="mt-6 space-y-8 border-l border-line pl-6">
                {experience.map((job, i) => (
                  <Reveal key={job.role} delay={i * 70}>
                    <li className="relative">
                      <span className="absolute -left-[31px] top-2 size-2 rounded-full bg-accent" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <h4 className="text-base font-medium">{job.role}</h4>
                        <span className="text-sm text-ink-muted">{job.period}</span>
                      </div>
                      <p className="text-sm text-accent">{job.company}</p>
                      <ul className="mt-2 space-y-1.5">
                        {job.bullets.map((b) => (
                          <li
                            key={b}
                            className="text-sm leading-relaxed text-ink-soft before:mr-2 before:text-ink-muted before:content-['—']"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          )}
        </section>

        {/* ---------------- Skills ---------------- */}
        <section id="skills" className="scroll-mt-24 border-t border-line py-20">
          <SectionHeading eyebrow="Skills">Con qué trabajo</SectionHeading>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 70}>
                <div className="card-lift h-full rounded-2xl border border-line bg-paper-raised p-6">
                  <h3 className="font-display text-2xl">{group.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- Proyectos ---------------- */}
        <section id="proyectos" className="scroll-mt-24 border-t border-line py-20">
          <SectionHeading eyebrow="Portfolio">Proyectos</SectionHeading>
          <div className="mt-10">
            <Projects projects={resolvedProjects()} />
          </div>
        </section>

        {/* ---------------- Contacto ---------------- */}
        <section id="contacto" className="scroll-mt-24 border-t border-line py-20">
          <SectionHeading eyebrow={contact.eyebrow}>{contact.heading}</SectionHeading>

          <Reveal delay={80}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {contact.blurb}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={120}>
              <a
                href={`mailto:${profile.email}`}
                className="card-lift block h-full rounded-2xl border border-line bg-paper-raised p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Email
                </p>
                <p className="mt-2 break-all text-lg">{profile.email}</p>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="card-lift block h-full rounded-2xl border border-line bg-paper-raised p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                  WhatsApp
                </p>
                <p className="mt-2 text-lg">{profile.phone}</p>
              </a>
            </Reveal>
          </div>

          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-ink-soft">
              <span>{profile.location}</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
