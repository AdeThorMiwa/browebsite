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

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
          <a
            href="https://x.com/usebro"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl transition-colors text-white/40 hover:text-white"
            aria-label="X (Twitter)"
          >
            <XIcon />
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-white/30">
          <Link
            to="/privacy"
            className="hover:text-white/60 transition-colors"
          >
            Privacy Policy
          </Link>
          <span>© 2026 Bro</span>
        </div>
      </div>
    </footer>
  );
}
