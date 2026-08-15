function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-12"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link
          to="/"
          className="font-mono text-2xl font-bold text-white tracking-tighter"
        >
          bro.
        </Link>

        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/usebro_"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl transition-colors text-white/40 hover:text-white"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-sm text-white/30">
          <Link to="/riders" className="hover:text-white/60 transition-colors">Ride with Bro</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          <Link to="/vendor-policy" className="hover:text-white/60 transition-colors">Vendor Policy</Link>
          <span>© 2026 Y Labs Limited</span>
        </div>
      </div>
    </footer>
  );
}
