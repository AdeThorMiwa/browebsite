import { Link } from 'react-router-dom'
import { useFadeIn } from '../hooks/useFadeIn'

const WA_RIDER_LINK = 'https://wa.me/2348030675682?text=I%20want%20to%20ride%20with%20Bro'

// ─── Sub-components ──────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.737.98.997-3.643-.234-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  )
}

// ─── Section: Hero ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,229,122,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase"
          style={{ borderColor: 'rgba(0,229,122,0.3)', color: '#00e57a' }}
        >
          Join the team
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
          Earn on your <br />
          <span style={{ color: '#00e57a' }}>own terms.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
          Deliver for Bro and get paid for every order you complete. Flexible hours, local routes, daily payouts.
        </p>

        <a
          href={WA_RIDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-black transition-all hover:scale-105 active:scale-95"
          style={{
            backgroundColor: '#00e57a',
            boxShadow: '0 0 40px rgba(0,229,122,0.25)',
          }}
        >
          <WhatsAppIcon />
          Join as a Rider on WhatsApp
        </a>

        <p className="mt-6 text-sm text-white/30">No office visit. No paperwork. Just WhatsApp.</p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs animate-bounce">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

// ─── Section: Benefits ───────────────────────────────────────────────────────

const benefits = [
  {
    emoji: '💰',
    title: 'Daily payouts',
    desc: 'Get paid same day, straight to your bank account. No waiting, no delays.',
  },
  {
    emoji: '🕐',
    title: 'Flexible hours',
    desc: 'Work when you want. Morning, afternoon, evening — you set the schedule.',
  },
  {
    emoji: '📍',
    title: 'Local orders',
    desc: 'Deliveries stay in your area. Short routes, more trips, more earnings.',
  },
  {
    emoji: '🤝',
    title: 'Simple onboarding',
    desc: 'No office visits, no long forms. Just message us and get verified on WhatsApp.',
  },
]

function Benefits() {
  const ref = useFadeIn()
  return (
    <section
      id="benefits"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-5xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#00e57a' }}
        >
          Why ride with Bro
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">
          Built for riders, not middlemen.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl p-6 flex flex-col gap-3"
            style={{
              backgroundColor: '#18181b',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span className="text-3xl">{b.emoji}</span>
            <span className="font-bold text-white text-sm leading-snug">{b.title}</span>
            <span className="text-white/40 text-xs leading-relaxed">{b.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Section: Requirements ───────────────────────────────────────────────────

const requirements = [
  { emoji: '🏍️', label: 'A bike or car', sub: 'Okada, tricycle, or car — all welcome.' },
  { emoji: '📱', label: 'A smartphone', sub: 'You need WhatsApp to receive and manage orders.' },
  { emoji: '🪪', label: 'A valid ID', sub: "Government-issued ID — driver's licence, NIN, or passport." },
  { emoji: '📍', label: 'Based locally', sub: 'You should be operating in a city where Bro is active.' },
]

function Requirements() {
  const ref = useFadeIn()
  return (
    <section
      id="requirements"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-5xl mx-auto w-full"
    >
      <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="px-8 pt-12 pb-6 md:px-12">
          <span
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: '#00e57a' }}
          >
            What you need
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">
            If you have a bike and a phone,<br className="hidden md:block" /> you're almost there.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {requirements.map((r, i) => (
            <div
              key={r.label}
              className="flex items-start gap-4 px-8 py-7 md:px-12"
              style={{
                borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : undefined,
              }}
            >
              <span className="text-2xl mt-0.5">{r.emoji}</span>
              <div>
                <p className="font-bold text-white text-sm">{r.label}</p>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">{r.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: How it works ────────────────────────────────────────────────────

const steps = [
  {
    number: '01',
    title: 'Message Bro on WhatsApp',
    desc: 'Send us a message saying you want to ride with Bro. That\'s how it starts.',
  },
  {
    number: '02',
    title: 'Quick verification',
    desc: 'We\'ll ask for a few basic details — your ID, your vehicle, and your location.',
  },
  {
    number: '03',
    title: 'Start getting orders',
    desc: 'Once verified, you\'re on the network. Orders come in, you deliver, you earn.',
  },
]

function HowItWorks() {
  const ref = useFadeIn()
  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-5xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#00e57a' }}
        >
          How to join
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">
          Three steps to your first delivery.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="relative rounded-2xl p-8 flex flex-col gap-4"
            style={{
              backgroundColor: '#18181b',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex items-start justify-between">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: 'rgba(0,229,122,0.1)', color: '#00e57a' }}
              >
                {i + 1}
              </div>
              <span
                className="font-mono text-xs font-bold"
                style={{ color: 'rgba(0,229,122,0.35)' }}
              >
                {step.number}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                <svg width="20" height="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Section: Rider FAQ ───────────────────────────────────────────────────────

import { useState } from 'react'

const faqs = [
  {
    q: 'How does pay work?',
    a: 'You earn a set fee per delivery. The exact amount depends on the distance and order type. Bro will always confirm your earnings before you accept an order.',
  },
  {
    q: 'When do I get paid?',
    a: 'Daily. Once your deliveries for the day are completed, payment is sent directly to your bank account.',
  },
  {
    q: 'Do I choose my own hours?',
    a: 'Yes. There are no fixed shifts. You decide when you\'re available, and orders come to you based on your location and availability.',
  },
  {
    q: 'What areas do you cover?',
    a: "We're expanding city by city. Message us on WhatsApp to find out if we're active in your area.",
  },
  {
    q: 'Can I do this alongside another job?',
    a: 'Absolutely. Many of our riders work part-time. You set your own hours so it fits around your schedule.',
  },
]

function RiderFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useFadeIn()

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-2xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: '#00e57a' }}
        >
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">
          Things riders ask.
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: '#18181b',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-white text-sm md:text-base">{faq.q}</span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: open === i ? '#00e57a' : 'rgba(255,255,255,0.08)',
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke={open === i ? '#000' : '#fff'}
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div className={`accordion-body${open === i ? ' open' : ''}`}>
              <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Section: CTA Strip ───────────────────────────────────────────────────────

function CTAStrip() {
  const ref = useFadeIn()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 pb-24 md:pb-32 max-w-5xl mx-auto w-full"
    >
      <div
        className="rounded-3xl px-8 py-14 md:py-20 flex flex-col items-center text-center gap-6"
        style={{
          backgroundColor: '#00e57a',
          backgroundImage: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(0,0,0,0.15) 0%, transparent 70%)',
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
          Ready to ride?
        </h2>
        <p className="text-black/60 max-w-md text-base leading-relaxed">
          Message Bro on WhatsApp and we'll get you set up. Takes less than 5 minutes to apply.
        </p>
        <a
          href={WA_RIDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white transition-all hover:scale-105 active:scale-95"
          style={{ backgroundColor: '#000' }}
        >
          <WhatsAppIcon />
          Join as a Rider on WhatsApp
        </a>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Riders() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e0e0f' }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: 'rgba(14,14,15,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-white">
          bro.
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hidden md:block text-sm text-white/40 hover:text-white transition-colors"
          >
            For customers
          </Link>
          <a
            href={WA_RIDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#00e57a' }}
          >
            Join as a rider
          </a>
        </div>
      </nav>

      {/* Page sections */}
      <Hero />
      <Benefits />
      <Requirements />
      <HowItWorks />
      <RiderFAQ />
      <CTAStrip />

      {/* Footer */}
      <footer
        className="border-t px-6 py-10"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/" className="font-mono text-xl font-bold text-white tracking-tighter">
            bro.
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-white/60 transition-colors">
              For customers
            </Link>
            <Link to="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
          <span>© 2026 Bro</span>
        </div>
      </footer>

      {/* Mobile sticky bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4"
        style={{
          backgroundColor: 'rgba(14,14,15,0.95)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <a
          href={WA_RIDER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-base font-bold text-black active:opacity-80"
          style={{ backgroundColor: '#00e57a' }}
        >
          <WhatsAppIcon size={20} />
          Join as a Rider on WhatsApp
        </a>
      </div>
    </div>
  )
}
