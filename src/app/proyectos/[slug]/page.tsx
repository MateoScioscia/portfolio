import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ReportEmbed from "@/components/ReportEmbed";
import { projects } from "@/content/site";
import { getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({
  params,
}: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <Nav />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 pt-32 pb-20">
        <Reveal>
          <Link href="/#proyectos" className="nav-link text-sm text-ink-soft">
            ← Volver a proyectos
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-accent">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {project.summary}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-accent-soft px-3 py-1 text-sm text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        {(project.live || project.repo) && (
          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable rounded-full bg-ink px-6 py-3 text-sm text-paper"
                >
                  {project.category === "Desarrollo web"
                    ? "Ver el sitio"
                    : "Abrir el tablero"}
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="pressable rounded-full border border-line px-6 py-3 text-sm"
                >
                  Ver el código
                </a>
              )}
            </div>
          </Reveal>
        )}

        {/* ---------- Tablero embebido / captura ---------- */}
        <div className="mt-12">
          {project.embed ? (
            <Reveal>
              <ReportEmbed
                src={project.embed}
                title={project.title}
                ratio={project.embedRatio}
                maxWidth={project.embedMaxWidth}
              />
            </Reveal>
          ) : project.image ? (
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-2xl border border-line"
              />
            </Reveal>
          ) : (
            <Reveal>
              <div className="rounded-2xl border border-dashed border-line bg-paper-raised px-6 py-12 text-center">
                <p className="font-display text-2xl">Vista previa pendiente</p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
                  {project.category === "Power BI" &&
                    "Publicá el reporte desde Power BI Service (Archivo → Insertar informe → Publicar en la web) y pegá la URL en el campo embed de src/content/site.ts para que quede interactivo acá."}
                  {project.category === "Looker Studio" &&
                    "En Looker Studio: Compartir → Insertar informe → activá “Habilitar la inserción”, y pegá la URL de /embed/reporting/<id> en el campo embed de src/content/site.ts."}
                  {project.category === "Desarrollo web" &&
                    `Agregá una captura en public${project.image ?? "/projects/..."} para mostrarla en esta página.`}
                </p>
              </div>
            </Reveal>
          )}
        </div>

        {/* ---------- Descripción ---------- */}
        <div className="mt-14 grid gap-12 sm:grid-cols-[1.3fr_1fr]">
          <div className="space-y-5">
            {project.description.map((paragraph, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="text-base leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <Reveal delay={120}>
              <div>
                <h2 className="text-xs uppercase tracking-[0.2em] text-ink-muted">
                  Qué incluye
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm leading-relaxed text-ink-soft before:mr-2 before:text-accent before:content-['—']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
