import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DictazIQ",
  description:
    "DictazIQ is a sports intelligence and football prediction platform combining rating models, fixture data, research fusion and transparent prediction workflows.",
};

const capabilities = [
  [
    "01",
    "Rating-Based Analysis",
    "Uses structured team rating differences as a mathematical foundation for match assessment.",
  ],
  [
    "02",
    "Research Fusion",
    "Combines model output with independent research signals to strengthen or suppress selections.",
  ],
  [
    "03",
    "Fixture Intelligence",
    "Ingests fixture, team, competition and historical data into a structured prediction workflow.",
  ],
  [
    "04",
    "Prediction Transparency",
    "Designed to expose model versions, confidence, probabilities and publication context.",
  ],
  [
    "05",
    "Provider Integration",
    "Built to connect multiple football data sources for fixtures, lineups and match intelligence.",
  ],
  [
    "06",
    "Multi-Sport Expansion",
    "Football is the first focus, with architecture intended to support additional sports over time.",
  ],
];

const architecture = [
  "Fixture Data",
  "Team Ratings",
  "Historical Evidence",
  "Mathematical Model",
  "Research Fusion",
  "Prediction Guards",
  "Publication Layer",
  "User Interface",
];

export default function DictazIQPage() {
  return (
    <main className="product-page dictaziq-page">
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
          <p className="product-label">
            HIFFS ANALYTICS / SPORTS INTELLIGENCE
          </p>

          <div className="product-hero-grid">
            <div>
              <p className="product-category">
                FOOTBALL PREDICTION & SPORTS INTELLIGENCE
              </p>

              <h1>
                Dictaz
                <br />
                <span>IQ.</span>
              </h1>

              <p className="product-intro">
                A football prediction and sports intelligence platform designed
                to combine structured mathematical analysis, football data,
                research signals and transparent prediction workflows.
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
                <span>IQ</span>
              </div>

              <span className="product-visual-node node-a">DATA</span>
              <span className="product-visual-node node-b">MODEL</span>
              <span className="product-visual-node node-c">RATING</span>
              <span className="product-visual-node node-d">RESEARCH</span>
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
                Football intelligence
                <br />
                <span>with structure.</span>
              </h2>
            </div>

            <div className="product-copy">
              <p>
                DictazIQ is being developed as a professional football
                prediction and sports intelligence platform with an emphasis on
                transparent reasoning, reproducible models and disciplined
                publication.
              </p>

              <p>
                The system combines team ratings, match data, mathematical
                models and independent research inputs rather than relying on a
                single prediction source.
              </p>

              <p>
                Football is the first deployment focus, while the underlying
                architecture is being designed for future expansion into other
                sports.
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
                <span>prediction intelligence.</span>
              </h2>
            </div>

            <p>
              A structured system for combining quantitative models, football
              data and research evidence.
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
              <p className="product-label">03 / INTELLIGENCE PIPELINE</p>

              <h2>
                From evidence
                <br />
                <span>to prediction.</span>
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
                Models first.
                <br />
                <span>Platform evolving.</span>
              </h2>
            </div>

            <div>
              <div className="status-indicator">
                <span />
                ACTIVE DEVELOPMENT
              </div>

              <p>
                DictazIQ currently has an active data and prediction foundation,
                including database-backed fixtures, model versions, prediction
                records, mathematical rating logic, publication guards and
                research-fusion workflows.
              </p>

              <p>
                Development continues across data ingestion, coverage,
                prediction quality, provider integration and the public-facing
                product experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="product-container">
          <p className="product-label">05 / NEXT</p>

          <h2>
            Building transparent
            <br />
            sports intelligence.
          </h2>

          <Link href="/#contact">
            Talk to Hiffs Global <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="product-footer">
        <div className="product-container">
          <span>© Hiffs Global Enterprises</span>
          <Link href="/work/dictaziq">DictazIQ</Link>
          <Link href="/">Hiffs Global ↗</Link>
        </div>
      </footer>
    </main>
  );
}