import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "EventBytes",
  description:
    "EventBytes is a digital event technology platform for ticketing, attendee management, event operations and real-time event intelligence.",
};

const capabilities = [
  ["01", "Digital Ticketing", "Create, manage and validate digital event tickets."],
  ["02", "QR Verification", "Fast digital verification for controlled event access."],
  ["03", "Event Management", "Centralized tools for organizers and event operations."],
  ["04", "Real-Time Intelligence", "Operational visibility into event activity and attendance."],
];

const architecture = [
  "Web Platform",
  "API Services",
  "Event Management",
  "Ticketing",
  "QR Verification",
  "Data & Analytics",
];

export default function EventBytesPage() {
  return (
    <main className="product-page eventbytes-page">
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

          <Link href="/#contact" className="product-header-cta">
            Start a Project ↗
          </Link>
        </div>
      </header>

      <section className="product-hero">
        <div className="product-container">
          <p className="product-label">HIFFS GLOBAL / SELECTED WORK / 01</p>

          <div className="product-hero-grid">
            <div>
              <p className="product-category">EVENT TECHNOLOGY PLATFORM</p>

              <h1>
                Event
                <br />
                <span>Bytes.</span>
              </h1>

              <p className="product-intro">
                A digital platform designed to bring event discovery,
                ticketing, access management and event intelligence into one
                connected experience.
              </p>

              <div className="product-links">
                <Link href="/#contact">
                  Discuss the Platform <span>↗</span>
                </Link>
                <Link href="/#work">
                  Back to Selected Work <span>↗</span>
                </Link>
              </div>
            </div>

            <div className="product-hero-visual">
              <div className="product-visual-grid" />
              <div className="product-visual-orbit product-orbit-one" />
              <div className="product-visual-orbit product-orbit-two" />

              <div className="product-visual-core">
                <span>EB</span>
              </div>

              <span className="product-visual-node node-a">TICKETS</span>
              <span className="product-visual-node node-b">EVENTS</span>
              <span className="product-visual-node node-c">DATA</span>
              <span className="product-visual-node node-d">ACCESS</span>
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
                One connected
                <br />
                <span>event experience.</span>
              </h2>
            </div>

            <div className="product-copy">
              <p>
                EventBytes is being developed as an event technology platform
                that connects organizers, attendees and event operations
                through a unified digital experience.
              </p>

              <p>
                The platform brings together the core systems required to
                discover events, manage tickets, verify access and understand
                what is happening around an event.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-capabilities">
        <div className="product-container">
          <div className="product-section-heading">
            <div>
              <p className="product-label">02 / PLATFORM CAPABILITIES</p>
              <h2>
                Built around
                <br />
                <span>the event.</span>
              </h2>
            </div>

            <p>
              A modular foundation for the operational and digital needs of
              modern events.
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
              <p className="product-label">03 / SYSTEM ARCHITECTURE</p>
              <h2>
                Designed as
                <br />
                <span>a system.</span>
              </h2>
            </div>

            <div className="architecture-stack">
              {architecture.map((item, index) => (
                <div className="architecture-row" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
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
                Building the
                <br />
                <span>next generation.</span>
              </h2>
            </div>

            <div>
              <div className="status-indicator">
                <span />
                ACTIVE DEVELOPMENT
              </div>

              <p>
                EventBytes is part of the Hiffs Global technology portfolio
                and continues to evolve through product development,
                engineering and refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="product-container">
          <p className="product-label">05 / NEXT</p>

          <h2>
            Have an event
            <br />
            technology challenge?
          </h2>

          <Link href="/#contact">
            Talk to Hiffs Global <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="product-footer">
        <div className="product-container">
          <span>© Hiffs Global Enterprises</span>
          <Link href="/work/eventbytes">EventBytes</Link>
          <Link href="/">Hiffs Global ↗</Link>
        </div>
      </footer>
    </main>
  );
}