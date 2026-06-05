import { Link } from 'react-router-dom'

const WA_LINK = 'https://wa.me/2348030675682'

const sections = [
  {
    title: '1. Who we are',
    content: (
      <>
        <p>
          Bro is a personal assistant service operated in Ibadan, Nigeria, accessible via WhatsApp at{' '}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
            wa.me/2348030675682
          </a>{' '}
          and online at usebro.xyz. When this policy refers to "Bro", "we", "us", or "our", it means the operators of this service.
        </p>
        <p className="mt-3">
          For any privacy-related questions, contact us at:{' '}
          <a href="mailto:privacy@usebro.xyz" className="text-accent hover:underline">privacy@usebro.xyz</a>
        </p>
      </>
    ),
  },
  {
    title: '2. Information we collect',
    content: (
      <>
        <p>When you interact with Bro via WhatsApp, we may collect and store the following:</p>
        <ul className="mt-4 space-y-2">
          {[
            ['Your phone number', 'used as your unique identifier on our platform'],
            ['Your name', 'if you choose to share it during a conversation'],
            ['Message content', 'the text of your conversations with Bro, used to understand and fulfil your requests'],
            ['Delivery address', 'if you provide one for order delivery'],
            ['Order details', 'items requested, amounts, and delivery information'],
            ['Interaction history', 'a record of past orders and requests to provide better service'],
          ].map(([term, def]) => (
            <li key={term} className="flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">—</span>
              <span><span className="text-white font-medium">{term}</span> — {def}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We do not collect payment card details. Payments are made directly via bank transfer to account details we provide.
        </p>
      </>
    ),
  },
  {
    title: '3. How we use your information',
    content: (
      <>
        <p>We use the information we collect solely to operate the Bro service:</p>
        <ul className="mt-4 space-y-2">
          {[
            'To process and fulfil your orders for food, goods, and services',
            'To communicate with you about your order status and delivery',
            'To remember your preferences and delivery addresses for future convenience',
            'To resolve any issues or disputes relating to your orders',
            'To improve the quality and reliability of our service',
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We do not use your information for advertising, profiling, or any automated decision-making that affects you.
        </p>
      </>
    ),
  },
  {
    title: '4. WhatsApp and Meta',
    content: (
      <p>
        Bro communicates with you through WhatsApp, which is operated by Meta Platforms, Inc. When you message Bro on WhatsApp,
        your messages are transmitted through Meta's infrastructure. Meta's own privacy policy governs how they handle your data
        within their platform. You can review Meta's privacy policy at{' '}
        <a href="https://whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          whatsapp.com/legal/privacy-policy
        </a>.{' '}
        Bro uses the WhatsApp Business API, which means your messages are delivered to our secure internal systems for processing.
        We access only what you send to us directly.
      </p>
    ),
  },
  {
    title: '5. How we store your data',
    content: (
      <p>
        Your data is stored securely in a private database accessible only to authorised Bro staff. We use industry-standard
        security practices to protect your information from unauthorised access, disclosure, or loss.
        We retain your data for as long as you are an active Bro user, plus a reasonable period thereafter for record-keeping
        purposes. You may request deletion of your data at any time (see Section 7).
      </p>
    ),
  },
  {
    title: '6. Who we share your data with',
    content: (
      <>
        <p>We do not sell, rent, or trade your personal information to any third party.</p>
        <p className="mt-3">We may share limited information with the following parties only as necessary to fulfil your orders:</p>
        <ul className="mt-4 space-y-2">
          {[
            ['Vendors', 'food sellers and merchants who prepare or supply your order. They receive only the order details and delivery location.'],
            ['Dispatch riders', 'independent riders who deliver your order. They receive only the pickup location and your delivery address.'],
          ].map(([term, def]) => (
            <li key={term} className="flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">—</span>
              <span><span className="text-white font-medium">{term}</span> — {def}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Neither vendors nor riders receive your phone number or any other personal information beyond what is needed to complete your delivery.
        </p>
      </>
    ),
  },
  {
    title: '7. Your rights',
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="mt-4 space-y-2">
          {[
            ['Access', 'request a copy of the personal information we hold about you'],
            ['Correction', 'ask us to correct any inaccurate information'],
            ['Deletion', 'request that we delete your personal data from our systems'],
            ['Opt out', 'stop using the service at any time by simply not messaging us'],
          ].map(([term, def]) => (
            <li key={term} className="flex gap-2">
              <span className="text-accent mt-1 flex-shrink-0">—</span>
              <span><span className="text-white font-medium">{term}</span> — {def}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          To exercise any of these rights, message us on WhatsApp or send an email to{' '}
          <a href="mailto:privacy@usebro.xyz" className="text-accent hover:underline">privacy@usebro.xyz</a>.
          We will respond within 7 business days.
        </p>
      </>
    ),
  },
  {
    title: "8. Children's privacy",
    content: (
      <p>
        Bro is not intended for use by anyone under the age of 13. We do not knowingly collect personal information from children.
        If you believe a child has provided us with their information, please contact us and we will delete it promptly.
      </p>
    ),
  },
  {
    title: '9. Changes to this policy',
    content: (
      <p>
        We may update this privacy policy from time to time. When we do, we will update the "Last updated" date at the top of
        this page. If the changes are significant, we will notify active users via WhatsApp. Continued use of Bro after changes
        are posted constitutes acceptance of the updated policy.
      </p>
    ),
  },
  {
    title: '10. Contact',
    content: (
      <ul className="space-y-2">
        {[
          ['WhatsApp', WA_LINK, 'wa.me/2348030675682'],
          ['Email', 'mailto:privacy@usebro.xyz', 'privacy@usebro.xyz'],
          ['Website', 'https://usebro.xyz', 'usebro.xyz'],
        ].map(([label, href, display]) => (
          <li key={label} className="flex gap-2">
            <span className="text-accent mt-1 flex-shrink-0">—</span>
            <span>
              <span className="text-white font-medium">{label}:</span>{' '}
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{display}</a>
            </span>
          </li>
        ))}
      </ul>
    ),
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0e0e0f' }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(14,14,15,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-white">bro.</Link>
        <Link
          to="/"
          className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-1"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back
        </Link>
      </nav>

      <main className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-mono text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/40">
            <span>Effective date: June 2026</span>
            <span className="text-white/20">·</span>
            <span>Last updated: June 2026</span>
          </div>
        </div>

        {/* Plain English summary */}
        <div
          className="rounded-2xl p-6 mb-12"
          style={{ backgroundColor: 'rgba(0,229,122,0.07)', border: '1px solid rgba(0,229,122,0.2)' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#00e57a' }}>
            Plain English summary
          </p>
          <p className="text-white/80 leading-relaxed">
            Bro is a WhatsApp-based personal assistant service. We collect only the information needed to process your
            requests and deliver your orders. We do not sell your data to anyone.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-white mb-4">{section.title}</h2>
              <div className="text-white/55 leading-relaxed text-sm md:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8 mt-16"
        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/" className="font-mono font-bold text-white tracking-tighter">bro.</Link>
          <span>© 2026 Bro</span>
        </div>
      </footer>
    </div>
  )
}
