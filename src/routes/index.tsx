import { createFileRoute } from "@tanstack/react-router";
import {
  Baby,
  BookOpen,
  Briefcase,
  Mail,
  MessageCircle,
  Quote,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/lib/i18n";
import logoAsset from "@/assets/logo.png.asset.json";
import founderAsset from "@/assets/founder.jpg.asset.json";
import heroCoverAsset from "@/assets/hero-cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "English Core AI Lab — AI-Powered English Mastery" },
      {
        name: "description",
        content:
          "English Core AI Lab offers Kids English, Academic Grammar (Class 6-10) and Professional English, led by Amanat Ullah.",
      },
      { property: "og:title", content: "English Core AI Lab — AI-Powered English Mastery" },
      {
        property: "og:description",
        content:
          "Kids English, Academic Grammar for Class 6-10, and Professional English — where teaching expertise meets Agentic AI.",
      },
    ],
  }),
  component: Index,
});

const programIcons = [Baby, BookOpen, Briefcase];

function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden">
          <img
            src={heroCoverAsset.url}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
          {/* Watermark veil keeps the headline legible over any cover image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-background/85 backdrop-blur-[2px] sm:bg-background/80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-background"
          />
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-5 sm:py-28">
            <p className="text-[10px] tracking-[0.3em] text-primary uppercase sm:text-xs sm:tracking-[0.35em]">
              {t.hero.eyebrow}
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-3xl leading-tight font-semibold [text-shadow:0_2px_18px_var(--background)] sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-foreground/85 sm:text-lg">
              {t.hero.subLead} <span className="font-semibold text-primary">{t.hero.subName}</span>
              {t.hero.subRest}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a href="#programs" className="btn-cta">
                {t.hero.ctaPrimary}
              </a>
              <a href="#about" className="btn-ghost-gold">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-10 text-xs text-foreground/65 italic sm:text-sm">{t.hero.quote}</p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          <div className="gold-rule" />
        </div>

        {/* Programs */}
        <section id="programs" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">{t.programs.heading}</h2>
            <p className="mt-3 text-foreground/75">{t.programs.sub}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.programs.items.map((p, i) => {
              const Icon = programIcons[i] ?? Baby;
              return (
                <article
                  key={p.title}
                  className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/75">{p.desc}</p>
                  <ul className="mt-5 space-y-2 text-sm text-foreground/70">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* About the Author */}
        <section id="about" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 sm:py-24">
            <div className="relative">
              <img
                src={founderAsset.url}
                alt="Amanat Ullah, founder of English Core AI Lab"
                loading="lazy"
                width={900}
                height={1100}
                className="w-full rounded-xl border border-border object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs tracking-[0.3em] text-primary uppercase">{t.about.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{t.about.name}</h2>
              <p className="mt-1 text-sm text-foreground/70">{t.about.role}</p>
              <p className="mt-6 leading-relaxed text-foreground/80">{t.about.p1}</p>
              <p className="mt-4 leading-relaxed text-foreground/80">{t.about.p2}</p>

              <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                  <a href="https://wa.me/8801608010181" className="hover:text-primary transition-colors">
                    {t.about.whatsapp}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:englishcore26@gmail.com" className="hover:text-primary transition-colors">
                    englishcore26@gmail.com
                  </a>
                </li>
              </ul>
              <a href="#contact" className="btn-cta mt-8">
                {t.about.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="text-3xl font-semibold sm:text-4xl">{t.testimonials.heading}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.testimonials.items.map((item) => (
              <figure key={item.name} className="rounded-xl border border-border bg-card p-7">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-primary">{item.name}</p>
                  <p className="text-xs text-foreground/60">{item.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="veil border-t border-border/60">
          <div className="mx-auto max-w-3xl px-5 py-20 sm:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">{t.contact.heading}</h2>
              <p className="mt-4 text-foreground/80">{t.contact.sub}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="mailto:englishcore26@gmail.com" className="btn-ghost-gold">
                  englishcore26@gmail.com
                </a>
                <a href="https://wa.me/8801608010181" className="btn-ghost-gold">
                  {t.contact.whatsapp}
                </a>
              </div>
            </div>
            <div className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-5">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="English Core AI Lab emblem"
              loading="lazy"
              width={512}
              height={512}
              className="h-8 w-8"
            />
            <span className="font-display text-base font-semibold text-primary sm:text-lg">
              English Core AI Lab
            </span>
          </div>
          <div className="flex gap-3">
            {[Facebook, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label={t.footer.social}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-foreground/55">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
