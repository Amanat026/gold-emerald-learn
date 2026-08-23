import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import { useLanguage, type Lang } from "@/lib/i18n";

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.lang.label}
      className={`flex items-center gap-1 rounded-full border border-border bg-background p-1 ${className}`}
    >
      <Languages className="ml-1.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      {(["en", "bn"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === l
              ? "bg-secondary text-primary"
              : "text-foreground/60 hover:text-foreground"
          }`}
        >
          {l === "en" ? t.lang.en : t.lang.bn}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.programs, href: "#programs" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-5 lg:flex lg:justify-between lg:gap-6">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-secondary/40 transition-colors group-hover:border-primary/70">
            <img
              src={logoAsset.url}
              alt="English Core AI Lab emblem"
              width={512}
              height={512}
              className="h-full w-full object-contain p-0.5"
            />
          </span>
          <span className="min-w-0 truncate font-display text-base font-semibold tracking-tight text-primary sm:text-xl">
            English Core <span className="text-foreground">AI Lab</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a href="#contact" className="btn-cta text-sm">
            {t.nav.join}
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-md border border-border p-2 text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground/85 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 px-2">
              <LanguageSwitcher />
            </div>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-cta mt-3 text-sm">
              {t.nav.join}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
