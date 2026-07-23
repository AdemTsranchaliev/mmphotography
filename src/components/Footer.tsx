import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 pb-10 pt-2 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-[family-name:var(--font-display)] text-lg text-ink">
          M&amp;M Photography
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link href="/galeria" className="nav-link">
            Галерия
          </Link>
          <a
            href="https://instagram.com/_mmartography_"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            @_mmartography_
          </a>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
