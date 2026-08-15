import { Link } from "react-router-dom";

const WA_LINK = "https://wa.me/2348030675682";

const sections = [
  {
    title: "1. About Bro",
    content: (
      <p>
        Bro is a personal assistant and coordination service operated by{" "}
        <span className="text-white font-medium">Y Labs Limited</span>,
        incorporated in Nigeria. We help customers order goods and coordinate
        service requests via WhatsApp. Bro acts as the merchant of record — we
        take your request, identify the right vendor or service provider, and
        arrange fulfilment and delivery through independent partners. When this
        policy refers to "Bro", "we", "us", or "our", it means Y Labs Limited.
      </p>
    ),
  },
  {
    title: "2. How the service works",
    content: (
      <>
        <p>When you place an order with Bro:</p>
        <ul className="mt-4 space-y-2">
          {[
            "You send your request to Bro via WhatsApp in plain language.",
            "Bro identifies the best available vendor or service provider for your request and confirms the total cost before you commit.",
            "You confirm and make payment to Bro via a supported payment method.",
            "Bro coordinates with the vendor or service provider to fulfil your request, and dispatches a rider for delivery where applicable.",
            "Once fulfilment is confirmed, Bro settles payment to the vendor and rider on a per-order basis, subject to a 3-hour dispute window.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Bro is not a fulfilment centre. Products are prepared and supplied by
          independent vendors and delivered by independent riders. Bro's role is
          to coordinate the transaction and act as the central point of contact
          for customers.
        </p>
      </>
    ),
  },
  {
    title: "3. Payment",
    content: (
      <>
        <p>
          All orders and service requests must be paid for in full before they
          are confirmed. Payment is made via supported payment options — we
          currently support bank transfer; Bro will provide the account details
          on WhatsApp when you are ready to confirm.
        </p>
        <p className="mt-3">
          Bro settles payment to the relevant vendor and dispatch rider once
          fulfilment is confirmed, subject to a 3-hour dispute window. If a
          valid dispute is raised within that window, settlement may be held
          pending resolution.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "4. Acceptable Use Policy",
    content: (
      <>
        <p>
          By using Bro, you agree to use the service lawfully and in good faith.
          You must not use Bro to order, purchase, or facilitate the supply of:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Illegal goods or substances of any kind",
            "Alcohol or tobacco for delivery to anyone under the legal age",
            "Counterfeit, stolen, or prohibited goods",
            "Weapons, ammunition, or explosive materials",
            "Any item or service that violates Nigerian law or applicable regulations",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 flex-shrink-0" style={{ color: "#00e57a" }}>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Bro reserves the right to refuse, cancel, or report any order we
          reasonably believe violates this policy, without refund and without
          prior notice.
        </p>
        <p className="mt-3">
          You must also not misuse the WhatsApp channel — including sending
          abusive messages, attempting to defraud Bro or its vendors, or
          providing false delivery information.
        </p>
      </>
    ),
  },
  {
    title: "5. Refund Policy",
    content: (
      <>
        <p>
          We want every order to go smoothly. If something goes wrong, here is
          how we handle it. All refund claims must be raised via WhatsApp or by
          emailing{" "}
          <a href="mailto:dispute@usebro.xyz" style={{ color: "#00e57a" }} className="hover:underline">
            dispute@usebro.xyz
          </a>{" "}
          with a description and, where relevant, a photo.
        </p>

        <div className="mt-6 space-y-5">
          {[
            {
              scenario: "Missing items",
              detail:
                "Report within 3 hours of delivery with a photo of what arrived. We will attempt redelivery. If redelivery is not possible, we will refund the cost of the missing item(s).",
            },
            {
              scenario: "Wrong order",
              detail:
                "Report within 1 hour of delivery with a photo. We will attempt to arrange pickup and redelivery. If pickup is not possible due to our error, you will receive a full refund.",
            },
            {
              scenario: "Spoiled or unsafe items",
              detail:
                "Report within 1 hour of delivery with a photo. Eligible for a full refund or replacement at our discretion.",
            },
            {
              scenario: "Spilled or damaged items",
              detail:
                "Report immediately with a photo. A partial refund may be issued depending on the extent of the damage.",
            },
            {
              scenario: "Customisation errors",
              detail:
                "Report within 3 hours with a photo. We will attempt redelivery. If unsuccessful, a partial refund will be issued based on the severity of the error.",
            },
            {
              scenario: "Order cancellation",
              detail:
                "You may cancel your order before the vendor has begun processing or fulfilling it. Once fulfilment has started, cancellations and refunds are not available.",
            },
            {
              scenario: "Failed delivery",
              detail:
                "If our rider is unable to reach you and waits at least 10 minutes, the order may be marked as failed. You may request redelivery within 90 minutes.",
            },
            {
              scenario: "Vendor cancellation",
              detail:
                "If a vendor is unable to fulfil your order after payment has been made, you will receive a full refund.",
            },
            {
              scenario: "Taste or quality preferences",
              detail:
                "We do not offer refunds for subjective preferences about quality, style, or quantity where the order was fulfilled as described. We will pass your feedback to the vendor.",
            },
          ].map((item) => (
            <div key={item.scenario}>
              <p className="font-semibold text-white text-sm">{item.scenario}</p>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6">
          Approved refunds are returned via bank transfer to the account used
          for payment, typically within 2–3 business days.
        </p>
      </>
    ),
  },
  {
    title: "6. Dispute Resolution",
    content: (
      <>
        <p>
          If you have a complaint or dispute about an order, you can raise it in
          two ways:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            [
              "WhatsApp",
              "Message Bro directly and ask to speak with a human agent. Our AI will escalate your issue to a member of the team.",
            ],
            [
              "Email",
              "Send a description of your dispute to dispute@usebro.xyz. Include your order details and any supporting photos.",
            ],
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
          We aim to respond to all disputes within 2 business days. Complex
          cases may take longer. Bro's decision on disputes is final, but we
          are committed to being fair to all parties.
        </p>
      </>
    ),
  },
  {
    title: "7. Limitation of Liability",
    content: (
      <p>
        Bro acts as a coordinator and intermediary. We are not the manufacturer,
        preparer, or seller of the goods you order. While we take care to work
        with reliable vendors and riders, we cannot guarantee the quality,
        safety, or fitness of any product supplied by a third-party vendor
        beyond what is described in our refund policy. To the extent permitted
        by law, Y Labs Limited's liability for any claim arising from use of the
        Bro service is limited to the value of the order in dispute.
      </p>
    ),
  },
  {
    title: "8. Changes to these terms",
    content: (
      <p>
        We may update these terms from time to time. When we do, we will update
        the "Last updated" date at the top of this page. Continued use of the
        Bro service after changes are posted constitutes acceptance of the
        updated terms.
      </p>
    ),
  },
  {
    title: "9. Contact",
    content: (
      <ul className="space-y-2">
        {[
          ["WhatsApp", WA_LINK, "wa.me/2348030675682"],
          ["Disputes", "mailto:dispute@usebro.xyz", "dispute@usebro.xyz"],
          ["General", "mailto:hello@usebro.xyz", "hello@usebro.xyz"],
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

export default function Terms() {
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
            Terms of Service
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
            Bro is a WhatsApp-based personal assistant run by Y Labs Limited.
            You pay us, we coordinate with vendors and partners to fulfil your
            request — goods, services, or errands. Funds are settled per order
            once fulfilment is confirmed, subject to a 3-hour dispute window.
            If something goes wrong, we have a clear refund and dispute process.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title} id={(section as any).id}>
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
            <Link to="/vendor-policy" className="hover:text-white/60 transition-colors">Vendor Policy</Link>
          </div>
          <span>© 2026 Y Labs Limited</span>
        </div>
      </footer>
    </div>
  );
}
