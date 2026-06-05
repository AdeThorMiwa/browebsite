import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

const faqs = [
  {
    q: 'Is Bro available in my city?',
    a: "We're rolling out city by city. Message Bro on WhatsApp to check if we're in your area yet.",
  },
  {
    q: 'How do I pay?',
    a: 'Bank transfer or cash on delivery. Bro will send you account details once your order is confirmed.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Usually 30–60 minutes depending on your location and what you order.',
  },
  {
    q: 'Is there a delivery fee?',
    a: 'Yes, a small delivery fee applies. Bro will always tell you the total before you confirm.',
  },
  {
    q: 'Can I schedule an order in advance?',
    a: "Not yet — Bro handles same-day orders for now.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useFadeIn()

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-2xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#00e57a' }}>FAQ</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">Good questions.</h2>
      </div>

      <div className="flex flex-col gap-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
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
                <svg width="12" height="12" fill="none" stroke={open === i ? '#000' : '#fff'} strokeWidth="2.5" viewBox="0 0 24 24">
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
