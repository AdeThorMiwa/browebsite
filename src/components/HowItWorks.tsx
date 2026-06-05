import { useFadeIn } from '../hooks/useFadeIn'

const steps = [
  {
    number: '01',
    title: 'Message Bro on WhatsApp',
    description: 'Tell Bro what you need in plain language — no forms, no apps, just a message.',
    emoji: '💬',
  },
  {
    number: '02',
    title: 'Bro sorts it out',
    description: 'We find the best option and confirm with you before doing anything.',
    emoji: '⚡',
  },
  {
    number: '03',
    title: 'Delivered to you',
    description: 'Your order arrives. Pay on delivery or via bank transfer — your call.',
    emoji: '📦',
  },
]

export default function HowItWorks() {
  const ref = useFadeIn()
  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-5xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#00e57a' }}>How it works</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">Three steps. That's it.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative rounded-2xl p-8 flex flex-col gap-4"
            style={{ backgroundColor: '#18181b', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex items-start justify-between">
              <span className="text-4xl">{step.emoji}</span>
              <span className="font-mono text-xs font-bold" style={{ color: 'rgba(0,229,122,0.5)' }}>{step.number}</span>
            </div>
            <h3 className="text-xl font-bold text-white leading-snug">{step.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
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
