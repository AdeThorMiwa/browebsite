import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/2348030675682?text=Hey%20Bro%2C%20I%20need%20something'

export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ backgroundColor: 'rgba(14,14,15,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <a href="#hero" className="font-mono text-xl font-bold tracking-tight text-white">bro.</a>

      <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
        <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
        <a href="#what-bro-gets" className="hover:text-white transition-colors">What Bro gets</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        <Link
          to="/riders"
          className="hover:text-white transition-colors"
        >
          Ride with Bro
        </Link>
      </div>

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#00e57a' }}
      >
        Chat with Bro
      </a>
    </nav>
  )
}
