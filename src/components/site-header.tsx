import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const languageModes = [
  { value: "en-bn", label: "English → Bengali" },
  { value: "bn-en", label: "Bengali → English" },
];

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [mode, setMode] = useState("en-bn");

  return (
    <label className={`flex items-center gap-2 ${className}`}>
      <Languages className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <span className="sr-only">Language mode</span>
      <select
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        className="min-w-0 rounded-md border border-border bg-background px-2.5 py-1.5 text-xs text-foreground outline-none transition-colors focus:border-primary"
      >
        {languageModes.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
              key={l.label}
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
            Join Now
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
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-foreground/85 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitcher className="mt-3 px-2" />
            <a href="#contact" onClick={() => setOpen(false)} className="btn-cta mt-3 text-sm">
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
