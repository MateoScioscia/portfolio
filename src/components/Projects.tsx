"use client";

import Link from "next/link";
import { useState } from "react";
import { projectCategories, type Project } from "@/content/site";
import Reveal from "./Reveal";

function Thumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      // Plain <img>: the files are user-supplied screenshots of unknown size.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-44 w-full items-center justify-center bg-accent-soft">
      <span className="font-display text-5xl text-accent">
        {project.title.charAt(0).toUpperCase()}
      </span>
    </div>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(projectCategories[0]);

  return (
    <>
      <Reveal>
        <div className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`pressable rounded-full border px-4 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          const hidden =
            active !== projectCategories[0] && project.category !== active;

          return (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                href={`/proyectos/${project.slug}`}
                className="filter-item card-lift block h-full overflow-hidden rounded-2xl border border-line bg-paper-raised"
                data-hidden={hidden}
              >
                <Thumb project={project} />

                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight">
                      {project.title}
                    </h3>
                    {project.year && (
                      <span className="shrink-0 text-xs text-ink-muted">
                        {project.year}
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-ink-soft">
                    {project.summary}
                  </p>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-accent-soft px-3 py-1 text-xs text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <p className="pt-2 text-sm text-accent">
                    {project.embed ? "Abrir el tablero →" : "Ver el proyecto →"}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
