import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hiffs Connect",
  description:
    "Hiffs Connect is Hiffs Global's business messaging infrastructure for SMS, WhatsApp, transactional messaging, sender management, routing, billing and API access.",
};

const capabilities = [
  [
    "01",
    "Business Messaging",
    "Send transactional and bulk business communications through connected messaging channels.",
  ],
  [
    "02",
    "SMS Infrastructure",
    "Provider-backed SMS delivery with sender identity, routing and delivery reporting.",
  ],
  [
    "03",
    "WhatsApp Messaging",
    "A foundation for WhatsApp Business messaging, templates and customer communication workflows.",
  ],
  [
    "04",
    "Messaging API",
    "Business-scoped API access for integrating messaging directly into applications and operational systems.",
  ],
  [
    "05",
    "Provider Routing",
    "Multi-provider architecture designed for approved sender routing, fallback and future regional expansion.",
  ],
  [
    "06",
    "Wallet & Billing",
    "Business wallets, message debits, refunds and pricing infrastructure for messaging operations.",
  ],
];

const architecture = [
  "Business Dashboard",
  "Messaging API",
  "Sender Identity",
  "Provider Routing",
  "Infobip / Route Mobile",
  "Delivery Reports",
  "Wallet & Billing",
  "Operational Data",
];

export default function HiffsConnectPage() {
  return (
    <main className="product-page hiffs-connect-page">
      <header className="product-header">
        <div className="product-container product-nav">
          <Link href="/" className="product-brand">
            <Image
              src="/hiffs-global-icon.png"
              alt="Hiffs Global"
              width={36}
              height={36}
              priority
            />

            <span>
              HIFFS <strong>GLOBAL</strong>
            </span>
          </Link>

          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <a
            href="https://connect.hiffsglobal.com"
            className="product-header-cta"
          >
            Open Hiffs Connect ↗
          </a>
        </div>
      </header>

      <section className="product-hero">
        <div className="product-container">
          <p className="product-label">
            HIFFS TECH / LIVE PLATFORM / BUSINESS COMMUNICATIONS
          </p>

          <div className="product-hero-grid">
            <div>
              <p className="product-category">
                BUSINESS MESSAGING INFRASTRUCTURE
              </p>

              <h1>
                Hiffs
                <br />
                <span>Connect.</span>
              </h1>

              <p className="product-intro">
                An omnichannel business messaging platform designed to connect
                organizations with customers through messaging infrastructure,
                APIs, provider routing and operational intelligence.
              </p>

              <div className="product-links">
                <a href="https://connect.hiffsglobal.com">
                  Launch Platform <span>↗</span>
                </a>

                <Link href="/#contact">
                  Discuss Integration <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="product-hero-visual">
              <div className="product-visual-grid" />
              <div className="product-visual-orbit product-orbit-one" />
              <div className="product-visual-orbit product-orbit-two" />

              <div className="product-visual-core">
                <span>HC</span>
              </div>

              <span className="product-visual-node node-a">SMS</span>
              <span className="product-visual-node node-b">API</span>
              <span className="product-visual-node node-c">ROUTING</span>
              <span className="product-visual-node node-d">DATA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="product-overview">
        <div className="product-container">
          <div className="product-two-column">
            <div>
              <p className="product-label">01 / THE PLATFORM</p>

              <h2>
                Communication
                <br />
                <span>as infrastructure.</span>
              </h2>
            </div>

            <div className="product-copy">
              <p>
                Hiffs Connect is being developed as a communications
                infrastructure layer for businesses that need dependable,
                programmable and scalable customer messaging.
              </p>

              <p>
                The platform brings business authentication, sender identity,
                provider routing, messaging APIs, wallet billing and delivery
                operations into one connected system.
              </p>

              <p>
                It is designed around a multi-provider architecture, allowing
                Hiffs Connect to evolve across markets, providers and messaging
                channels without binding customers to a single underlying
                network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-capabilities">
        <div className="product-container">
          <div className="product-section-heading">
            <div>
              <p className="product-label">02 / CORE CAPABILITIES</p>

              <h2>
                Built for
                <br />
                <span>business communication.</span>
              </h2>
            </div>

            <p>
              A modular messaging platform spanning delivery, routing,
              identity, billing and developer integration.
            </p>
          </div>

          <div className="product-capability-grid">
            {capabilities.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-architecture">
        <div className="product-container">
          <div className="product-two-column">
            <div>
              <p className="product-label">03 / PLATFORM ARCHITECTURE</p>

              <h2>
                One platform.
                <br />
                <span>Multiple providers.</span>
              </h2>
            </div>

            <div className="architecture-stack">
              {architecture.map((item, index) => (
                <div className="architecture-row" key={item}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item}</strong>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-status">
        <div className="product-container">
          <div className="product-status-panel">
            <div>
              <p className="product-label">04 / PRODUCT STATUS</p>

              <h2>
                Live infrastructure.
                <br />
                <span>Built to expand.</span>
              </h2>
            </div>

            <div>
              <div className="status-indicator">
                <span />
                LIVE / PRODUCTION
              </div>

              <p>
                Hiffs Connect is deployed as a live Hiffs Global platform with
                production authentication, business workspaces, messaging API
                access, provider routing, sender controls and wallet
                infrastructure.
              </p>

              <p>
                Additional channels, provider integrations and commercial
                capabilities will continue to expand the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="product-container">
          <p className="product-label">05 / CONNECT</p>

          <h2>
            Build communication
            <br />
            into your business.
          </h2>

          <a href="https://connect.hiffsglobal.com">
            Open Hiffs Connect <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="product-footer">
        <div className="product-container">
          <span>© Hiffs Global Enterprises</span>
          <Link href="/work/hiffs-connect">Hiffs Connect</Link>
          <Link href="/">Hiffs Global ↗</Link>
        </div>
      </footer>
    </main>
  );
}