import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/2348030675682?text=Hey%20Bro%2C%20I%20need%20something'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const [navHeight, setNavHeight] = useState(73)

  // Measure actual nav height so the drawer starts exactly below it
  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: 'rgba(14,14,15,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        {/* Wordmark — always goes home */}
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-white">bro.</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#what-bro-gets" className="hover:text-white transition-colors">What Bro gets</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <Link to="/riders" className="hover:text-white transition-colors">Ride with Bro</Link>
        </div>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#00e57a' }}
        >
          Chat with Bro
        </a>

        {/* Mobile hamburger — swap between ☰ and ✕ icons */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-xl"
          style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? (
            // ✕ close icon
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="2" x2="14" y2="14" />
              <line x1="14" y1="2" x2="2" y2="14" />
            </svg>
          ) : (
            // ☰ hamburger icon
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round">
              <line x1="0" y1="1" x2="16" y2="1" />
              <line x1="0" y1="6" x2="16" y2="6" />
              <line x1="0" y1="11" x2="16" y2="11" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer — starts exactly below the nav */}
      <div
        className="md:hidden fixed left-0 right-0 bottom-0 z-40 flex flex-col transition-all duration-300"
        style={{
          top: navHeight,
          backgroundColor: '#0e0e0f',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transform: open ? 'translateY(0)' : 'translateY(-8px)',
        }}
      >
        <div className="flex flex-col px-6 pt-8 gap-1">
          <MobileLink href="/#how-it-works" onClick={() => setOpen(false)}>How it works</MobileLink>
          <MobileLink href="/#what-bro-gets" onClick={() => setOpen(false)}>What Bro gets</MobileLink>
          <MobileLink href="/#faq" onClick={() => setOpen(false)}>FAQ</MobileLink>

          <div className="my-4 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />

          <Link
            to="/riders"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-semibold text-white"
            style={{ backgroundColor: '#18181b' }}
          >
            <span>Ride with Bro</span>
            <span style={{ color: '#00e57a' }}>→</span>
          </Link>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-bold text-black"
            style={{ backgroundColor: '#00e57a' }}
          >
            Chat with Bro on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-4 text-lg font-semibold text-white/70 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}
