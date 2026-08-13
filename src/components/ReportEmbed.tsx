"use client";

import { useRef, useState } from "react";

/**
 * Embeds a published BI report (Power BI "Publish to web" or Looker Studio).
 * The iframe stays fully interactive (slicers, filters, drill-through) — we
 * only add a loading placeholder and a fullscreen toggle around it.
 */
export default function ReportEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const goFullscreen = () => {
    wrapper.current?.requestFullscreen?.();
  };

  return (
    <div>
      <div
        ref={wrapper}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-line bg-paper-raised"
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-ink-muted">
            Cargando el tablero…
          </div>
        )}

        <iframe
          src={src}
          title={title}
          allowFullScreen
          onLoad={() => setLoaded(true)}
          className="size-full transition-opacity duration-300"
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-muted">
        <p>Es interactivo: podés filtrar, hacer clic en los gráficos y navegar entre páginas.</p>
        <button
          type="button"
          onClick={goFullscreen}
          className="pressable rounded-full border border-line px-4 py-2 text-ink-soft"
        >
          Pantalla completa
        </button>
      </div>
    </div>
  );
}
