"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { dict, LOCALES, type Locale, type Dict } from "./i18n";

const NAME = "Iosif Placinta";
const EMAIL = "placintaiosif14@gmail.com";
const PHONE = "+32 490 56 58 32";
const ADDRESS = "Rue du Busselenberg 91, 1070 Anderlecht";
const DOB = "12 / 02 / 2009";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const CV_HREF = `${BASE_PATH}/cv-iosif-placinta.pdf`;
const SHEET_NO = "A-001";
const SCALE = "1:50";
const REV = "Rev. A";
const DATE = "2026 · 05";

const STORAGE_KEY = "iosif.locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && (LOCALES as string[]).includes(stored)) return stored;
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  if (nav === "nl") return "nl";
  if (nav === "en") return "en";
  return "fr";
}

export default function Page() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocale(detectInitialLocale());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = dict[locale].htmlLang;
  }, [locale, mounted]);

  const t = dict[locale];

  return (
    <main className="min-h-screen bg-ink text-paper">
      <TopBar t={t} locale={locale} setLocale={setLocale} />
      <Hero t={t} />
      <About t={t} />
      <Skills t={t} />
      <Education t={t} />
      <Experience t={t} />
      <Languages t={t} />
      <Looking t={t} />
      <Contact t={t} />
      <Cartouche t={t} />
    </main>
  );
}

function TopBar({ t, locale, setLocale }: { t: Dict; locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-rule)] bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden sm:block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.22em] text-paper/60">
            {t.portfolio} · {SHEET_NO}
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-7 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-paper/70">
          <a href="#about" className="hover:text-[var(--color-accent)] transition">{t.nav.about}</a>
          <a href="#skills" className="hover:text-[var(--color-accent)] transition">{t.nav.skills}</a>
          <a href="#formation" className="hover:text-[var(--color-accent)] transition">{t.nav.formation}</a>
          <a href="#experience" className="hover:text-[var(--color-accent)] transition">{t.nav.experience}</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition">{t.nav.contact}</a>
        </nav>
        <div className="flex items-center gap-3">
          <LangSwitcher locale={locale} setLocale={setLocale} />
          <a
            href={`mailto:${EMAIL}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/60 bg-[var(--color-accent)]/10 px-4 py-1.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-ink transition"
          >
            <span className="size-1.5 rounded-full bg-[var(--color-accent)]" />
            {t.available}
          </a>
        </div>
      </div>
    </header>
  );
}

function LangSwitcher({ locale, setLocale }: { locale: Locale; setLocale: (l: Locale) => void }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-[var(--color-rule)] p-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
    >
      {LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`px-2.5 py-1 rounded-full transition ${
              active ? "bg-[var(--color-accent)] text-ink" : "text-paper/60 hover:text-paper"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 32 32" className="text-[var(--color-accent)]">
        <rect x="2" y="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 22 L16 8 L30 22" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="2" y1="22" x2="30" y2="22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className="font-semibold tracking-tight">IP</span>
    </div>
  );
}

function Hero({ t }: { t: Dict }) {
  const [first, last] = NAME.split(" ");
  return (
    <section className="relative overflow-hidden border-b rule">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-7 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-paper/60">
              <span className="size-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span>{t.hero.kicker}</span>
            </div>
            <h1 className="font-display text-[clamp(2.6rem,7vw,5.8rem)] leading-[0.95] tracking-[-0.03em] font-medium">
              {first}
              <br />
              <span className="text-[var(--color-accent)]">{last}.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg md:text-xl text-paper/80 leading-relaxed">
              {t.hero.role}. {t.hero.intro1}{" "}
              <span className="text-paper underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                {t.hero.stage}
              </span>{" "}
              {t.hero.or}{" "}
              <span className="text-paper underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">
                {t.hero.job}
              </span>{" "}
              {t.hero.brussels} {t.hero.tail}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-ink hover:bg-paper transition"
              >
                {t.hero.cta1}
                <Arrow />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium hover:border-paper/60 transition"
              >
                {t.hero.cta2}
              </a>
              <a
                href={CV_HREF}
                download
                className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-6 py-3 text-sm font-medium hover:border-paper/60 transition"
              >
                <DownloadIcon />
                {t.hero.cta3}
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl font-[family-name:var(--font-mono)] text-xs">
              <Stat k={t.stats.location} v={t.stats.locVal} />
              <Stat k={t.stats.dob} v={DOB} />
              <Stat k={t.stats.langs} v="FR · RO · EN · NL" />
              <Stat k={t.stats.status} v={t.stats.statusVal} highlight />
            </dl>
          </div>
          <div className="lg:col-span-5">
            <Blueprint t={t} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, highlight }: { k: string; v: string; highlight?: boolean }) {
  return (
    <div className="border-l border-[var(--color-rule)] pl-4">
      <dt className="uppercase tracking-[0.18em] text-paper/45">{k}</dt>
      <dd className={`mt-1.5 text-sm ${highlight ? "text-[var(--color-accent)]" : "text-paper"}`}>{v}</dd>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5v8m0 0l-3-3m3 3l3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cropmark({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const map = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 rotate-90",
    bl: "bottom-0 left-0 -rotate-90",
    br: "bottom-0 right-0 rotate-180",
  };
  return (
    <svg
      className={`absolute ${map[pos]} size-4 text-[var(--color-accent)]`}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M0 0h7M0 0v7" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Blueprint({ t }: { t: Dict }) {
  return (
    <div className="relative aspect-[5/4] rounded-2xl border border-[var(--color-rule)] bg-[var(--color-ink-soft)] p-5 overflow-hidden">
      <div className="blueprint-bg absolute inset-0 opacity-70" />
      <div className="absolute inset-5 flex flex-col">
        <div className="flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-paper/55">
          <span>{t.blueprint.title}</span>
          <span>{t.blueprint.scale} {SCALE}</span>
        </div>
        <svg viewBox="0 0 400 280" className="mt-2 flex-1 w-full h-full">
          <defs>
            <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            </pattern>
          </defs>
          <line x1="20" y1="240" x2="380" y2="240" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          {[40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
            <line key={x} x1={x} y1="238" x2={x} y2="246" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          ))}
          <rect x="80" y="120" width="240" height="120" fill="url(#hatch)" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" />
          <polyline
            points="60,120 200,40 340,120"
            fill="none"
            stroke="#ff7a1a"
            strokeWidth="2"
            className="draw-line"
          />
          <rect x="110" y="150" width="50" height="50" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
          <line x1="135" y1="150" x2="135" y2="200" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <line x1="110" y1="175" x2="160" y2="175" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <rect x="240" y="150" width="50" height="50" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
          <line x1="265" y1="150" x2="265" y2="200" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <line x1="240" y1="175" x2="290" y2="175" stroke="rgba(255,255,255,0.55)" strokeWidth="1" />
          <rect x="185" y="170" width="30" height="70" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" />
          <circle cx="208" cy="208" r="1.5" fill="rgba(255,255,255,0.85)" />
          <g fontFamily="ui-monospace" fontSize="9" fill="rgba(255,255,255,0.55)">
            <line x1="80" y1="260" x2="320" y2="260" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="80" y1="256" x2="80" y2="264" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="320" y1="256" x2="320" y2="264" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <text x="195" y="273" textAnchor="middle">12,00 m</text>
            <line x1="350" y1="120" x2="350" y2="240" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="346" y1="120" x2="354" y2="120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="346" y1="240" x2="354" y2="240" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <text x="362" y="183">6,00 m</text>
            <line x1="20" y1="40" x2="20" y2="120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="16" y1="40" x2="24" y2="40" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <line x1="16" y1="120" x2="24" y2="120" stroke="rgba(255,255,255,0.45)" strokeWidth="0.8" />
            <text x="14" y="83" textAnchor="end">4,00 m</text>
          </g>
          <g transform="translate(370,40)">
            <circle r="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
            <polygon points="0,-12 5,4 0,0 -5,4" fill="#ff7a1a" />
            <text x="0" y="22" textAnchor="middle" fontFamily="ui-monospace" fontSize="9" fill="rgba(255,255,255,0.7)">N</text>
          </g>
        </svg>
        <div className="mt-2 flex items-center justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-paper/55">
          <span>{t.blueprint.done}</span>
          <span>{REV} · {DATE}</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, kicker }: { tag: string; title: string; kicker?: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
      <div>
        <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[var(--color-accent)] mb-3">
          / {tag}
        </div>
        <h2 className="font-display text-4xl md:text-5xl tracking-[-0.02em] font-medium max-w-2xl">
          {title}
        </h2>
      </div>
      {kicker && (
        <p className="text-paper/55 max-w-sm font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em]">
          {kicker}
        </p>
      )}
    </div>
  );
}

function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`border-b rule ${className}`}>
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">{children}</div>
    </section>
  );
}

function About({ t }: { t: Dict }) {
  const facts = [
    { k: t.about.rows.name, v: "Placinta, Iosif" },
    { k: t.about.rows.school, v: "Lycée la Retraite" },
    { k: t.about.rows.option, v: t.about.rows.optionVal },
    { k: t.about.rows.dob, v: DOB },
  ];
  return (
    <Section id="about">
      <SectionHeader tag={t.about.tag} title={t.about.title} kicker={t.about.kicker} />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        <div className="md:col-span-5">
          <div className="relative rounded-2xl border border-[var(--color-rule)] bg-[var(--color-ink-soft)] p-3 h-full">
            <Cropmark pos="tl" />
            <Cropmark pos="tr" />
            <Cropmark pos="bl" />
            <Cropmark pos="br" />
            <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden rounded-xl">
              <Image
                src="/iosif.jpg"
                alt="Iosif Placinta"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-[50%_22%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-paper/85">
                <span>Iosif · {DOB.replace(/ \/ /g, "/")}</span>
                <span className="text-[var(--color-accent)]">● REC</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-7">
          <div className="space-y-5 text-base lg:text-lg leading-relaxed text-paper/80">
            <p>
              {t.about.p1a} <span className="text-paper">Iosif</span>
              {t.about.p1b} <span className="text-paper">{t.about.p1c}</span> {t.about.p1d}
            </p>
            <p>{t.about.p2}</p>
            <p>
              {t.about.p3a} <span className="text-[var(--color-accent)]">{t.about.p3b}</span> {t.about.p3c}{" "}
              <span className="text-[var(--color-accent)]">{t.about.p3d}</span> {t.about.p3e}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--color-rule)] pt-6">
            {facts.map((f) => (
              <div key={f.k} className="space-y-1">
                <dt className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-paper/45">
                  {f.k}
                </dt>
                <dd className="text-sm md:text-base text-paper/95">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={CV_HREF}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-ink hover:bg-paper transition"
            >
              <DownloadIcon />
              {t.hero.cta3}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-medium hover:border-paper/60 transition"
            >
              {t.hero.cta1}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v, mono }: { k: string; v: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--color-rule)] pb-2.5 last:border-0 last:pb-0">
      <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-paper/50">{k}</dt>
      <dd className={`text-right ${mono ? "font-[family-name:var(--font-mono)] text-[12px]" : ""} text-paper/90`}>{v}</dd>
    </div>
  );
}

function Skills({ t }: { t: Dict }) {
  return (
    <Section id="skills">
      <SectionHeader tag={t.skills.tag} title={t.skills.title} kicker={t.skills.kicker} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-rule)] border rule">
            {t.skills.soft.map((s, i) => (
              <div key={s.t} className="bg-ink p-7 hover:bg-[var(--color-ink-soft)] transition group">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <span className="size-1.5 rounded-full bg-paper/20 group-hover:bg-[var(--color-accent)] transition" />
                </div>
                <h3 className="text-lg font-medium mb-2">{s.t}</h3>
                <p className="text-sm text-paper/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border rule bg-[var(--color-ink-soft)] p-7 h-full">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-5">
              {t.skills.tools}
            </div>
            <ul className="space-y-3">
              {t.skills.toolList.map((tool) => (
                <li key={tool} className="flex items-center gap-3 text-sm">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="text-[var(--color-accent)] shrink-0">
                    <path d="M2 7l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-paper/90">{tool}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 pt-6 border-t border-[var(--color-rule)] font-[family-name:var(--font-mono)] text-xs text-paper/55 leading-relaxed">
              {t.skills.note}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Education({ t }: { t: Dict }) {
  return (
    <Section id="formation">
      <SectionHeader tag={t.edu.tag} title={t.edu.title} kicker={t.edu.kicker} />
      <ol className="relative space-y-px">
        {t.edu.items.map((it, i) => (
          <li key={i} className="grid grid-cols-12 gap-6 border-t rule py-7 first:border-t-0">
            <div className="col-span-12 md:col-span-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-paper/55">
              {it.year}
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight">{it.school}</h3>
                <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-paper/45">
                  · {it.city}
                </span>
              </div>
              <p className="mt-2 text-paper/70">{it.detail}</p>
            </div>
            <div className="col-span-12 md:col-span-2 md:text-right">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-paper/70">
                <span className={`size-1.5 rounded-full ${i === 0 ? "bg-[var(--color-accent)] animate-pulse" : "bg-paper/40"}`} />
                {it.tag}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Experience({ t }: { t: Dict }) {
  return (
    <Section id="experience">
      <SectionHeader tag={t.exp.tag} title={t.exp.title} kicker={t.exp.kicker} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-rule)] border rule">
        {t.exp.items.map((it) => (
          <article key={it.role} className="bg-ink p-10">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
              {it.ctx}
            </div>
            <h3 className="text-2xl font-medium tracking-tight mb-5">{it.role}</h3>
            <ul className="space-y-3">
              {it.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-paper/80">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Languages({ t }: { t: Dict }) {
  return (
    <Section id="langues">
      <SectionHeader tag={t.langs.tag} title={t.langs.title} kicker={t.langs.kicker} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
        {t.langs.items.map((lng) => (
          <div key={lng.l}>
            <div className="flex items-baseline justify-between mb-2">
              <div>
                <span className="text-xl font-medium">{lng.l}</span>
                <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-paper/55">
                  {lng.level}
                </span>
              </div>
              <span className="font-[family-name:var(--font-mono)] text-xs text-paper/50">{lng.pct}%</span>
            </div>
            <div className="h-px w-full bg-[var(--color-rule)] relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-[var(--color-accent)]"
                style={{ width: `${lng.pct}%`, height: "2px", top: "-0.5px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Looking({ t }: { t: Dict }) {
  return (
    <Section id="recherche" className="relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="relative">
        <SectionHeader tag={t.look.tag} title={t.look.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <ul className="space-y-3">
            {t.look.list.map((l, i) => (
              <li key={l} className="flex gap-4 border-b rule py-4">
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-accent)] mt-1">
                  0{i + 1}
                </span>
                <span className="text-lg text-paper/85">{l}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border rule bg-[var(--color-ink-soft)] p-8 md:p-10">
            <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)] mb-3">
              {t.look.availTag}
            </div>
            <h3 className="font-display text-3xl tracking-[-0.02em] font-medium mb-5">
              {t.look.availTitle}
            </h3>
            <p className="text-paper/70 leading-relaxed">{t.look.availBody}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-ink hover:bg-paper transition"
            >
              {t.look.availCta}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact({ t }: { t: Dict }) {
  return (
    <section id="contact" className="border-b rule">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:py-36">
        <div className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.28em] text-[var(--color-accent)] mb-6">
          / {t.contact.tag}
        </div>
        <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] font-medium max-w-5xl">
          {t.contact.titleA}{" "}
          <a href={`mailto:${EMAIL}`} className="text-[var(--color-accent)] underline decoration-2 underline-offset-[10px]">
            {t.contact.titleB}
          </a>
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-rule)] border rule">
          <ContactCard k={t.contact.email} v={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactCard k={t.contact.phone} v={PHONE} href={`tel:${PHONE.replace(/\s/g, "")}`} />
          <ContactCard k={t.contact.address} v={ADDRESS} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ k, v, href }: { k: string; v: string; href?: string }) {
  const inner = (
    <div className="bg-ink p-8 md:p-10 h-full hover:bg-[var(--color-ink-soft)] transition group">
      <div className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-paper/50 mb-3">
        {k}
      </div>
      <div className="text-lg md:text-xl text-paper group-hover:text-[var(--color-accent)] transition break-all">
        {v}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Cartouche({ t }: { t: Dict }) {
  return (
    <footer className="bg-[var(--color-ink-soft)]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 grid grid-cols-12 gap-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] text-paper/55 items-center">
        <div className="col-span-12 md:col-span-3 flex items-center gap-3">
          <Logo />
          <span>{NAME}</span>
        </div>
        <div className="col-span-6 md:col-span-2">Sheet · {SHEET_NO}</div>
        <div className="col-span-6 md:col-span-2">{t.blueprint.scale} · {SCALE}</div>
        <div className="col-span-6 md:col-span-2">{REV}</div>
        <div className="col-span-6 md:col-span-3 md:text-right">© {DATE} · Bruxelles, BE</div>
      </div>
    </footer>
  );
}
