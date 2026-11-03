import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Bell, RefreshCw, TrendingUp, ChevronDown, Coffee } from 'lucide-react';
import { useState } from 'react';
import home from '../content/home.json';

// ─── Geometric house SVG accent ───────────────────────────────────────────────
function HouseAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M100 10 L190 80 L190 170 L10 170 L10 80 Z"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        strokeLinejoin="round"
        fill="hsl(var(--primary) / 0.06)"
      />
      <rect x="75" y="110" width="50" height="60" rx="2" stroke="hsl(var(--primary))" strokeWidth="2.5" fill="hsl(var(--primary) / 0.08)" />
      <rect x="30" y="100" width="35" height="30" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary) / 0.06)" />
      <rect x="135" y="100" width="35" height="30" rx="2" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary) / 0.06)" />
      {/* window grid lines */}
      <line x1="47.5" y1="100" x2="47.5" y2="130" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="30" y1="115" x2="65" y2="115" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="152.5" y1="100" x2="152.5" y2="130" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <line x1="135" y1="115" x2="170" y2="115" stroke="hsl(var(--primary))" strokeWidth="1.5" />
    </svg>
  );
}

// ─── Feature icons ─────────────────────────────────────────────────────────────
const featureIcons = [Bell, RefreshCw, TrendingUp];

// ─── Mock app UI ───────────────────────────────────────────────────────────────
function MockAppUI() {
  const bills = [
    { name: 'Electricity', amount: '€ 68', due: 'Due in 3 days', urgent: true },
    { name: 'Internet', amount: '€ 35', due: 'Due in 8 days', urgent: false },
    { name: 'Rent', amount: '€ 850', due: 'Due in 12 days', urgent: false },
    { name: 'Netflix', amount: '€ 13', due: 'Due in 18 days', urgent: false },
  ];

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto" style={{ background: 'hsl(var(--primary) / 0.12)', border: '1px solid hsl(var(--primary-foreground) / 0.15)' }}>
      {/* App header bar */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: 'hsl(var(--primary-foreground) / 0.08)' }}>
        <div>
          <p className="text-xs font-medium" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>October 2026</p>
          <p className="text-lg font-bold" style={{ color: 'hsl(var(--primary-foreground))' }}>€ 966 <span className="text-sm font-normal" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>upcoming</span></p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>Monthly income</p>
          <p className="text-base font-semibold" style={{ color: 'hsl(var(--accent))' }}>€ 2,400</p>
        </div>
      </div>
      {/* Bill list */}
      <div className="px-5 py-3 flex flex-col gap-2">
        {bills.map((bill) => (
          <div key={bill.name} className="flex items-center justify-between py-2.5 px-3 rounded-xl" style={{ background: 'hsl(var(--primary-foreground) / 0.07)' }}>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'hsl(var(--primary-foreground))' }}>{bill.name}</p>
              <p className="text-xs" style={{ color: bill.urgent ? 'hsl(var(--accent))' : 'hsl(var(--primary-foreground) / 0.55)' }}>{bill.due}</p>
            </div>
            <span className="text-sm font-bold" style={{ color: 'hsl(var(--primary-foreground))' }}>{bill.amount}</span>
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: 'hsl(var(--primary-foreground) / 0.05)' }}>
        <p className="text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.5)' }}>4 bills this month</p>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--accent))' }} />
          <p className="text-xs font-medium" style={{ color: 'hsl(var(--primary-foreground) / 0.7)' }}>1 due soon</p>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ list with inline content rendering ──────────────────────────────────
function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="rounded-2xl border border-border overflow-hidden bg-card px-6">
      {home.faq.items.map((item, idx) => (
        <div key={item.id} className="border-b border-border last:border-0">
          <button
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{item.question}</span>
            <ChevronDown
              size={18}
              className="shrink-0 transition-transform duration-300 text-primary"
              style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          </button>
          {openIndex === idx && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25, ease: 'easeOut' as const }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const siteUrl = 'https://homebill.eu';
  const title = 'HomeBill — Bills under control. Home feels easier.';
  const description = 'Track recurring bills, payment dates, reminders, income, and expenses in one calm, simple place. No bank connections. No automatic payments.';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'HomeBill',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Geometric accent — top right */}
          <div className="absolute -top-16 -right-16 w-80 h-80 opacity-40 pointer-events-none" aria-hidden="true">
            <HouseAccent className="w-full h-full" />
          </div>
          {/* Small accent — bottom left */}
          <div className="absolute bottom-0 -left-10 w-48 h-48 opacity-20 pointer-events-none" aria-hidden="true">
            <HouseAccent className="w-full h-full" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
                {home.hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                {home.hero.subtext}
              </p>
              <a
                href="#availability"
                className="button-primary px-8 py-4 text-base"
              >
                {home.hero.cta}
              </a>
            </motion.div>

            {/* Reassurance strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' as const }}
              className="mt-14 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border"
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: 'hsl(var(--primary))' }} />
              <p className="text-sm text-muted-foreground">{home.hero.reassurance}</p>
            </motion.div>
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────────────── */}
        <section id="features" className="py-24 md:py-32" style={{ background: 'hsl(var(--muted) / 0.18)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
            >
              {home.features.heading}
            </motion.h2>

            {/* Bento grid: large card left + two stacked right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' as const }}
                whileHover={{ y: -4, boxShadow: '0 20px 40px hsl(var(--primary) / 0.15)' }}
                className="rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-64 transition-shadow duration-300"
                style={{ background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'hsl(var(--primary-foreground) / 0.12)' }}>
                  <Bell size={22} style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'hsl(var(--primary-foreground))' }}>
                    {home.features.items[0].title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--primary-foreground) / 0.75)' }}>
                    {home.features.items[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Two smaller cards stacked */}
              <div className="flex flex-col gap-6">
                {home.features.items.slice(1).map((item, i) => {
                  const Icon = featureIcons[i + 1];
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i + 1) * 0.1, ease: 'easeOut' as const }}
                      whileHover={{ y: -3, boxShadow: '0 12px 30px hsl(var(--primary) / 0.1)' }}
                      className="rounded-2xl p-7 flex flex-col gap-4 transition-shadow duration-300 border border-border"
                      style={{ background: 'hsl(var(--card))' }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                        <Icon size={18} style={{ color: 'hsl(var(--primary))' }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── APP PREVIEW STRIP ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32" style={{ background: 'hsl(var(--primary))' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' as const }}
              >
                <p className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: 'hsl(var(--accent))' }}>
                  See what's coming up
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'hsl(var(--primary-foreground))' }}>
                  Your bills, at a glance
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'hsl(var(--primary-foreground) / 0.72)' }}>
                  Keep upcoming bills and payment status together, then compare recorded transactions with expected bills in your monthly and yearly cash-flow view.
                </p>
                <a href="#availability" className="button-primary px-6 py-3 text-sm">
                  See release plans
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              >
                <MockAppUI />
                <p className="mt-3 text-center text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}>
                  Illustrative preview. Example amounts and bills are not actual user data.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            >
              {/* Small house icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.1)' }}>
                  <HouseAccent className="w-10 h-10" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{home.about.heading}</h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-5">{home.about.body[0].text}</p>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">{home.about.body[1].text}</p>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="py-24 md:py-32" style={{ background: 'hsl(var(--muted) / 0.18)' }}>
          <div className="max-w-2xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              {home.faq.heading}
            </motion.h2>
            <FaqList />
            {/* FaqList renders home.faq.items inline — content fields remain editable */}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section id="availability" className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut' as const }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary mb-6">
                <span className="h-2 w-2 rounded-full" style={{ background: 'hsl(var(--accent))' }} />
                Free on Windows
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">{home.cta.heading}</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-10">{home.cta.subtext}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://buymeacoffee.com/tomadalexau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary px-8 py-4 text-base"
                >
                  <Coffee size={18} aria-hidden="true" />
                  {home.cta.button}
                </a>
                <a
                  href="mailto:support@homebill.eu"
                  className="button-primary px-8 py-4 text-base"
                >
                  {home.cta.contactButton}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
