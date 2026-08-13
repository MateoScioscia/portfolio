import { profile } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 text-sm text-ink-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="/#inicio" className="nav-link">
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
