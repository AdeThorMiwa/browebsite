import { useFadeIn } from '../hooks/useFadeIn'

const categories = [
  { emoji: '🍔', label: 'Food & Drinks', desc: 'Restaurants, fast food, local spots.' },
  { emoji: '🛒', label: 'Groceries', desc: 'Supermarkets, markets, household items.' },
  { emoji: '💊', label: 'Pharmacy Runs', desc: 'Meds, personal care, health essentials.' },
  { emoji: '✨', label: 'More coming soon', desc: 'Laundry, cleaning, gifting & more.', soon: true },
]

export default function WhatBroGets() {
  const ref = useFadeIn()
  return (
    <section
      id="what-bro-gets"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-in-section px-6 py-24 md:py-32 max-w-5xl mx-auto w-full"
    >
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#00e57a' }}>What Bro gets you</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 tracking-tight">Anything you need, handled.</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 flex flex-col gap-3 transition-all ${cat.soon ? 'opacity-50' : 'hover:border-opacity-30'}`}
            style={{
              backgroundColor: '#18181b',
              border: cat.soon ? '1px dashed rgba(255,255,255,0.1)' : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span className="text-3xl">{cat.emoji}</span>
            <span className="font-bold text-white text-sm leading-snug">{cat.label}</span>
            <span className="text-white/40 text-xs leading-relaxed">{cat.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
