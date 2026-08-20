import { createFileRoute } from "@tanstack/react-router";
import {
  Baby,
  BookOpen,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Quote,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import logo from "@/assets/logo.png";
import founderAsset from "@/assets/founder.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "English Core AI Lab — Learn English with AI Precision" },
      {
        name: "description",
        content:
          "English Core AI Lab offers Kids English, Academic Grammar (Class 6-10) and Professional English, founded and led by Amanat Ullah.",
      },
      { property: "og:title", content: "English Core AI Lab — Learn English with AI Precision" },
      {
        property: "og:description",
        content:
          "Kids English, Academic Grammar for Class 6-10, and Professional English — guided by founder Amanat Ullah.",
      },
    ],
  }),
  component: Index,
});

const programs = [
  {
    icon: Baby,
    title: "Kids English",
    desc: "Fun, interactive and story-driven modules that build vocabulary, phonics and confidence in young learners.",
    points: ["Playful phonics & vocabulary", "Interactive speaking games", "Parent progress reports"],
  },
  {
    icon: BookOpen,
    title: "Academic English Grammar",
    desc: "Class Six to Ten structural grammar with full textbook support and focused board exam preparation.",
    points: ["NCTB textbook aligned", "Structural grammar mastery", "Model tests & exam drills"],
  },
  {
    icon: Briefcase,
    title: "Professional English",
    desc: "Business communication, spoken fluency and workplace language skills for every career stage.",
    points: ["Emails, reports & meetings", "Spoken fluency coaching", "Interview & presentation skills"],
  },
];

const testimonials = [
  {
    quote:
      "My daughter went from shy to speaking full sentences in three months. The kids' modules are genuinely joyful.",
    name: "Nusrat Jahan",
    role: "Parent, Dhaka",
  },
  {
    quote:
      "The grammar classes matched my textbook exactly. I scored the highest English marks of my life in Class Nine.",
    name: "Rifat Hossain",
    role: "Student, Class Nine",
  },
  {
    quote:
      "The professional track fixed my email tone and meeting confidence. It changed how my team sees me.",
    name: "Tanvir Ahmed",
    role: "Operations Lead",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section id="home" className="veil relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:py-28">
            <img
              src={logo}
              alt="English Core AI Lab logo"
              width={512}
              height={512}
              className="mx-auto h-24 w-24 sm:h-32 sm:w-32"
            />
            <p className="mt-6 text-xs tracking-[0.35em] text-primary uppercase">
              English Core AI Lab
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight font-semibold sm:text-6xl">
              Master English with AI precision and human warmth
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-foreground/80 sm:text-lg">
              Founded and led by{" "}
              <span className="font-semibold text-primary">Amanat Ullah, CEO &amp; Founder</span> —
              guiding children, students and professionals to fluent, confident English.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href="#programs" className="btn-cta">
                Get Started
              </a>
              <a href="#about" className="btn-ghost-gold">
                Meet the Founder
              </a>
            </div>
            <p className="mt-10 text-sm text-foreground/60 italic">
              “Technological intelligence drives the world; religious values hold our spine.”
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          <div className="gold-rule" />
        </div>

        {/* Programs */}
        <section id="programs" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Three core pillars</h2>
            <p className="mt-3 text-foreground/75">
              Every learner meets English at a different stage. Our curriculum is built around three
              focused paths.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
                  <p.icon className="h-6 w-6" />
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
            ))}
          </div>
        </section>

        {/* About founder */}
        <section id="about" className="border-y border-border/60 bg-card/40">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 sm:py-24">
            <div className="relative">
              <img
                src={founderAsset.url}
                alt="Amanat Ullah, Founder and CEO of English Core AI Lab"
                loading="lazy"
                width={900}
                height={1100}
                className="w-full rounded-xl border border-border object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs tracking-[0.3em] text-primary uppercase">About the Founder</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Amanat Ullah</h2>
              <p className="mt-1 text-sm text-foreground/70">CEO &amp; Founder</p>
              <p className="mt-6 leading-relaxed text-foreground/80">
                Amanat Ullah founded English Core AI Lab with a single conviction: language learning
                should be as precise as technology and as patient as a good teacher. After years in
                classrooms watching learners memorise rules they never used, he built a lab where AI
                handles practice and feedback, while mentors handle meaning and motivation.
              </p>
              <p className="mt-4 leading-relaxed text-foreground/80">
                His vision is a platform where a six-year-old, a Class Ten examinee and a working
                professional each find a path that fits — grounded in values, driven by intelligence.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/75">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+8801608010181" className="hover:text-primary transition-colors">01608-010181</a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:amanatullah263@gmail.com" className="hover:text-primary transition-colors">amanatullah263@gmail.com</a>
                </li>
              </ul>
              <a href="#contact" className="btn-cta mt-8">
                Talk to our team
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <h2 className="text-3xl font-semibold sm:text-4xl">What our learners say</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-7">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-primary">{t.name}</p>
                  <p className="text-xs text-foreground/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="veil border-t border-border/60">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-24">
            <h2 className="text-3xl font-semibold sm:text-4xl">Start your English journey today</h2>
            <p className="mt-4 text-foreground/80">
              Tell us your goal and we will place you in the right program within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:hello@englishcoreailab.com" className="btn-cta">
                Join Now
              </a>
              <a href="tel:+8801000000000" className="btn-ghost-gold">
                Call us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="English Core AI Lab emblem"
                loading="lazy"
                width={512}
                height={512}
                className="h-9 w-9"
              />
              <span className="font-display text-lg font-semibold text-primary">
                English Core AI Lab
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/70">
              Technological intelligence drives the world; religious values hold our spine.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              {["Home", "About", "Programs", "Testimonials", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-foreground/70">
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:englishcore26@gmail.com" className="hover:text-primary transition-colors">englishcore26@gmail.com</a>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+8801608010181" className="hover:text-primary transition-colors">+880 1608-010181</a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase">Follow</h3>
            <div className="mt-4 flex gap-3">
              {[Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-primary hover:text-background"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/60">
          <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-foreground/55">
            © {new Date().getFullYear()} English Core AI Lab. Founded by Amanat Ullah.
          </p>
        </div>
      </footer>
    </div>
  );
}
