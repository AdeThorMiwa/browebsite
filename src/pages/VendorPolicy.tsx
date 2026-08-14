import { Link } from "react-router-dom";

const WA_LINK = "https://wa.me/2348030675682";

const sections = [
  {
    title: "1. Who this applies to",
    content: (
      <p>
        This Vendor Policy applies to all businesses, individuals, and sole
        traders ("vendors") who supply goods or services fulfilled through the
        Bro platform, operated by{" "}
        <span className="text-white font-medium">Y Labs Limited</span>. By
        agreeing to be listed on Bro, vendors accept the terms set out in this
        policy.
      </p>
    ),
  },
  {
    title: "2. How vendor onboarding works",
    content: (
      <>
        <p>
          Bro currently operates a controlled pilot with a select number of
          vendors. Vendors are identified and onboarded directly by the Bro
          team — there is no self-serve signup at this stage.
        </p>
        <p className="mt-3">
          Onboarding happens via WhatsApp. A member of the Bro team will contact
          you, collect the necessary information, verify your details, and add
          you to the vendor directory. You will be notified before you go live.
        </p>
        <p className="mt-3">
          Bro reserves the right to decline any vendor application at its
          discretion, without obligation to provide a reason.
        </p>
      </>
    ),
  },
  {
    title: "3. Information we collect from vendors",
    content: (
      <>
        <p>When onboarding a vendor, Bro collects the following information:</p>
        <ul className="mt-4 space-y-2">
          {[
            ["Business name", "the trading name of your business"],
            ["Owner name", "the full name of the business owner or primary contact"],
            ["Phone number", "your primary contact number"],
            ["WhatsApp number", "the number used to receive and manage orders"],
            ["Location", "your latitude, longitude, area, and full address"],
            ["Vendor type", "the category of goods or services you offer (e.g. food, groceries, pharmacy, electronics)"],
            ["Goods", "a description of the products you sell"],
            ["Services", "any services you offer alongside or instead of physical goods"],
            ["Operating hours", "your opening and closing times and operating days"],
          ].map(([label, detail]) => (
            <li key={label} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>
                <span className="text-white font-medium">{label}:</span>{" "}
                {detail}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Bank account details are collected separately at the point of first
          settlement. Bro uses these solely to process per-order payouts.
        </p>
        <p className="mt-3">
          As the platform scales, Bro will introduce formal identity and
          business verification (KYC) requirements — including government-issued
          ID and CAC registration documents — before public vendor onboarding is
          opened. Existing vendors will be notified and asked to complete this
          process at that time.
        </p>
      </>
    ),
  },
  {
    title: "4. Due diligence",
    content: (
      <>
        <p>
          During the current pilot phase, all vendors are manually reviewed by
          the Bro team before being listed. This includes:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Verifying that the business operates at the stated location",
            "Confirming the vendor's WhatsApp contact is active and responsive",
            "Reviewing the goods and services offered to ensure they comply with our Acceptable Use Policy",
            "Assessing whether the vendor can reliably fulfil orders within a reasonable timeframe",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Bro does not currently conduct enhanced financial due diligence on
          vendors. This will be implemented as part of our formal KYC process
          ahead of public onboarding.
        </p>
      </>
    ),
  },
  {
    title: "5. Payment and settlement",
    content: (
      <>
        <p>
          Bro settles payment to vendors on a per-order basis once delivery has
          been confirmed. Payment is made via bank transfer to the account
          details provided during onboarding.
        </p>
        <p className="mt-3">
          The amount settled to the vendor is the agreed order value, net of
          Bro's service fee. Bro will communicate the fee structure to each
          vendor at onboarding.
        </p>
        <p className="mt-3">
          Settlements may be withheld or reversed in the event of a valid
          customer refund claim, vendor cancellation, or confirmed breach of
          this policy.
        </p>
      </>
    ),
  },
  {
    title: "6. Vendor obligations",
    content: (
      <>
        <p>By being listed on Bro, vendors agree to:</p>
        <ul className="mt-4 space-y-2">
          {[
            "Provide accurate and up-to-date information about their goods, services, pricing, and availability",
            "Fulfil orders in a timely manner consistent with the estimated times communicated to customers",
            "Maintain appropriate food safety and hygiene standards where food is involved",
            "Respond promptly to messages from the Bro team on WhatsApp",
            "Notify Bro immediately of any changes to operating hours, menu, or availability",
            "Treat Bro riders courteously and ensure orders are packaged appropriately for delivery",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "7. Prohibited goods and services",
    content: (
      <>
        <p>Vendors must not use the Bro platform to supply:</p>
        <ul className="mt-4 space-y-2">
          {[
            "Illegal goods, controlled substances, or prohibited items under Nigerian law",
            "Counterfeit, stolen, or misrepresented products",
            "Alcohol or tobacco for delivery to minors",
            "Weapons, ammunition, or hazardous materials",
            "Any goods or services that violate Bro's Acceptable Use Policy",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Violations may result in immediate removal from the platform and
          reporting to relevant authorities where required.
        </p>
      </>
    ),
  },
  {
    title: "8. Suspension and removal",
    content: (
      <p>
        Bro may suspend or permanently remove a vendor from the platform for
        repeated order failures, customer complaints, breach of this policy, or
        any conduct that damages the reputation or operation of the Bro service.
        Where possible, Bro will notify the vendor before suspension and give an
        opportunity to respond. In cases of serious breach, removal may be
        immediate.
      </p>
    ),
  },
  {
    title: "9. Changes to this policy",
    content: (
      <p>
        Bro may update this Vendor Policy as the platform grows. Active vendors
        will be notified via WhatsApp of any material changes. Continued
        participation on the platform constitutes acceptance of the updated
        policy.
      </p>
    ),
  },
  {
    title: "10. Contact",
    content: (
      <ul className="space-y-2">
        {[
          ["WhatsApp", WA_LINK, "wa.me/2348030675682"],
          ["Email", "mailto:hello@usebro.xyz", "hello@usebro.xyz"],
        ].map(([label, href, display]) => (
          <li key={label} className="flex gap-2">
            <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
            <span>
              <span className="text-white font-medium">{label}:</span>{" "}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00e57a" }}
                className="hover:underline"
              >
                {display}
              </a>
            </span>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function VendorPolicy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0e0e0f" }}>
      {/* Nav */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: "rgba(14,14,15,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <Link to="/" className="font-mono text-xl font-bold tracking-tight text-white">
          bro.
        </Link>
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
            Vendor Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/40">
            <span>Effective date: June 2026</span>
            <span className="text-white/20">·</span>
            <span>Last updated: June 2026</span>
          </div>
        </div>

        {/* Summary callout */}
        <div
          className="rounded-2xl p-6 mb-12"
          style={{
            backgroundColor: "rgba(0,229,122,0.07)",
            border: "1px solid rgba(0,229,122,0.2)",
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#00e57a" }}>
            Plain English summary
          </p>
          <p className="text-white/80 leading-relaxed">
            Bro is currently in a controlled pilot. All vendors are manually
            reviewed and onboarded by our team. We collect your business details
            and bank account for settlement. We pay you per order, once delivery
            is confirmed.
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
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <Link to="/" className="font-mono font-bold text-white tracking-tighter">bro.</Link>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
          <span>© 2026 Y Labs Limited</span>
        </div>
      </footer>
    </div>
  );
}
