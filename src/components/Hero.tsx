const WA_LINK = 'https://wa.me/2348030675682?text=Hey%20Bro%2C%20I%20need%20something'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center pt-20"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(0,229,122,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase" style={{ borderColor: 'rgba(0,229,122,0.3)', color: '#00e57a' }}>
          WhatsApp-powered
        </div>

        <h1 className="font-mono text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4 leading-none">
          bro.
        </h1>

        <p className="text-3xl md:text-5xl font-semibold text-white/90 mb-6 leading-tight">
          Just say the word.
        </p>

        <p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10">
          Bro is your personal WhatsApp assistant — food, services, errands, and more. Wherever you are.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-lg"
          style={{ backgroundColor: '#00e57a', boxShadow: '0 0 40px rgba(0,229,122,0.25)' }}
        >
          <WhatsAppIcon />
          Chat with Bro on WhatsApp
        </a>

        <p className="mt-6 text-sm text-white/30">No app to download. Just WhatsApp.</p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 text-xs animate-bounce">
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.528 5.855L.057 23.999l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.373l-.36-.213-3.737.98.997-3.643-.234-.374A9.818 9.818 0 1112 21.818z" />
    </svg>
  )
}
