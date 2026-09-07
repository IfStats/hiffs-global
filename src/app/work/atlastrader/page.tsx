import Image from "next/image";
import Link from "next/link";
import "./atlastrader.css";

export const metadata = {
  title: "AtlasTrader",
  description:
    "AtlasTrader is a financial technology research and engineering initiative focused on systematic market analysis, risk management and controlled execution infrastructure.",
};

const systems = [
  {
    number: "01",
    title: "Market Data Engine",
    description:
      "Ingests and normalizes market information into a consistent foundation for downstream analysis and decision-making.",
  },
  {
    number: "02",
    title: "Market Analyzer",
    description:
      "Transforms market data into structured market state, conditions, patterns and contextual intelligence.",
  },
  {
    number: "03",
    title: "Signal Engine",
    description:
      "Evaluates market conditions and produces structured trading signals from defined strategies and analytical inputs.",
  },
  {
    number: "04",
    title: "Decision Engine",
    description:
      "Combines signals, market context and system rules to determine whether an actionable opportunity exists.",
  },
  {
    number: "05",
    title: "Risk Engine",
    description:
      "Applies position sizing, exposure limits, validation rules and risk controls before execution.",
  },
  {
    number: "06",
    title: "Execution Engine",
    description:
      "Provides the execution layer through broker and trading-platform adapters while maintaining controlled execution workflows.",
  },
];

const capabilities = [
  "Real-time market-data ingestion",
  "Market-state analysis",
  "Systematic signal generation",
  "Multi-market architecture",
  "Risk-aware decision making",
  "Position and exposure management",
  "Broker and execution adapters",
  "Fast state management",
  "Persistent trading data",
  "Monitoring and observability",
];

const markets = [
  "Foreign Exchange",
  "Spot Metals",
  "Indices",
  "Commodities",
  "Other Supported Instruments",
];

const technologies = [
  "Python",
  "Event-Driven Architecture",
  "MetaTrader 5",
  "Redis",
  "PostgreSQL",
  "Automated Testing",
];

export default function AtlasTraderPage() {
  return (
    <main className="product-page atlas-page">
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

    <nav aria-label="Product navigation">
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

      <section className="product-hero atlas-hero">
        <div className="product-hero-grid" />

        <div className="product-hero-orbit">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-core">
            <span>AT</span>
          </div>
          <span className="orbit-node orbit-node-one" />
          <span className="orbit-node orbit-node-two" />
          <span className="orbit-node orbit-node-three" />
        </div>

        <div className="product-container product-hero-content">
          <p className="product-eyebrow">
            HIFFS TECH / FINTECH R&D
          </p>

          <h1>
            Intelligent Market
            <br />
            <span>Infrastructure.</span>
          </h1>

          <p className="product-hero-copy">
            AtlasTrader is an intelligent trading infrastructure initiative
            designed to ingest market information, analyze conditions,
            generate systematic signals, apply risk controls and execute
            through supported trading interfaces.
          </p>

          <div className="product-actions">
            <a href="#architecture" className="product-button product-button-primary">
              Explore the Architecture <span>↗</span>
            </a>

            <Link href="/#contact" className="product-button product-button-secondary">
              Start a Conversation <span>↗</span>
            </Link>
          </div>

          <div className="product-status">
            <span className="status-dot" />
            <span>ACTIVE DEVELOPMENT / RESEARCH</span>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container product-two-column">
          <div>
            <p className="product-section-number">01 / THE VISION</p>
            <h2>
              Engineering a system for
              <span> intelligent markets.</span>
            </h2>
          </div>

          <div className="product-copy">
            <p>
              AtlasTrader is being developed as a modular financial technology
              platform for systematic trading operations across multiple
              market instruments.
            </p>

            <p>
              Rather than relying on a single trading strategy, the architecture
              separates data ingestion, market intelligence, signal generation,
              decision-making, risk management and execution into dedicated
              system components.
            </p>

            <p>
              This creates a foundation that can evolve as new strategies,
              instruments, data sources and execution environments are
              introduced.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section product-dark-section" id="architecture">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">02 / INTELLIGENCE PIPELINE</p>
            <h2>
              From market data
              <br />
              <span>to controlled execution.</span>
            </h2>
          </div>

          <div className="pipeline">
            {[
              "MARKET DATA",
              "DATA ENGINE",
              "MARKET ANALYZER",
              "SIGNAL ENGINE",
              "DECISION ENGINE",
              "RISK ENGINE",
              "EXECUTION ENGINE",
              "BROKER / EXCHANGE",
            ].map((item, index) => (
              <div className="pipeline-step" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item}</strong>
                {index < 7 && <i>↓</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">03 / CORE SYSTEMS</p>
            <h2>
              Six engines.
              <br />
              <span>One coordinated system.</span>
            </h2>
          </div>

          <div className="system-grid">
            {systems.map((system) => (
              <article className="system-card" key={system.number}>
                <span className="system-number">{system.number}</span>
                <h3>{system.title}</h3>
                <p>{system.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section product-accent-section">
        <div className="product-container product-two-column">
          <div>
            <p className="product-section-number">04 / MULTI-MARKET INTELLIGENCE</p>
            <h2>
              Designed beyond
              <span> a single instrument.</span>
            </h2>
          </div>

          <div className="market-panel">
            {markets.map((market, index) => (
              <div className="market-row" key={market}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{market}</strong>
                <span>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">05 / SYSTEM CAPABILITIES</p>
            <h2>
              Built around
              <br />
              <span>systematic intelligence.</span>
            </h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability, index) => (
              <div className="capability-item" key={capability}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{capability}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section product-dark-section">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">06 / RISK ARCHITECTURE</p>
            <h2>
              Intelligence without
              <br />
              <span>risk discipline is incomplete.</span>
            </h2>
          </div>

          <div className="risk-layout">
            <div className="risk-intro">
              <p>
                Risk management is treated as a core system rather than an
                afterthought. Decisions pass through defined controls before
                reaching the execution layer.
              </p>
            </div>

            <div className="risk-list">
              <div>
                <span>01</span>
                <strong>Position Sizing</strong>
              </div>
              <div>
                <span>02</span>
                <strong>Exposure Management</strong>
              </div>
              <div>
                <span>03</span>
                <strong>Risk Limits</strong>
              </div>
              <div>
                <span>04</span>
                <strong>Trade Validation</strong>
              </div>
              <div>
                <span>05</span>
                <strong>Execution Controls</strong>
              </div>
              <div>
                <span>06</span>
                <strong>Failure Handling</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container product-two-column">
          <div>
            <p className="product-section-number">07 / TECHNOLOGY FOUNDATION</p>
            <h2>
              Modular technology for
              <span> an evolving system.</span>
            </h2>
          </div>

          <div className="technology-list">
            {technologies.map((technology, index) => (
              <div key={technology}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{technology}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section architecture-section">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">08 / SYSTEM ARCHITECTURE</p>
            <h2>
              Data.
              <span> Intelligence. Risk. Execution.</span>
            </h2>
          </div>

          <div className="architecture-map">
            <div className="architecture-column">
              <span>01</span>
              <strong>DATA</strong>
              <small>
                Real-time feeds
                <br />
                Historical data
                <br />
                Market state
              </small>
            </div>

            <div className="architecture-arrow">→</div>

            <div className="architecture-column architecture-highlight">
              <span>02</span>
              <strong>INTELLIGENCE</strong>
              <small>
                Analysis
                <br />
                Signals
                <br />
                Decisions
              </small>
            </div>

            <div className="architecture-arrow">→</div>

            <div className="architecture-column">
              <span>03</span>
              <strong>RISK</strong>
              <small>
                Validation
                <br />
                Exposure
                <br />
                Controls
              </small>
            </div>

            <div className="architecture-arrow">→</div>

            <div className="architecture-column">
              <span>04</span>
              <strong>EXECUTION</strong>
              <small>
                Broker adapters
                <br />
                Order workflows
                <br />
                Observability
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section product-dark-section">
        <div className="product-container product-two-column">
          <div>
            <p className="product-section-number">09 / HUMAN + MACHINE</p>
            <h2>
              Automation with
              <span> control at the center.</span>
            </h2>
          </div>

          <div className="product-copy">
            <p>
              AtlasTrader is designed for systematic operation and minimal
              supervision while maintaining explicit risk controls,
              observability and human oversight.
            </p>

            <p>
              The objective is not simply to automate trades. It is to build
              reliable infrastructure in which data, intelligence, risk and
              execution operate as coordinated components.
            </p>
          </div>
        </div>
      </section>

      <section className="product-section">
        <div className="product-container">
          <div className="product-section-heading">
            <p className="product-section-number">10 / DEVELOPMENT ROADMAP</p>
            <h2>
              Building toward
              <br />
              <span>intelligent autonomy.</span>
            </h2>
          </div>

          <div className="roadmap">
            {[
              ["01", "Foundation"],
              ["02", "Market Data"],
              ["03", "Analysis & Signals"],
              ["04", "Risk & Execution"],
              ["05", "Multi-Market"],
              ["06", "Intelligent Autonomy"],
            ].map(([number, title], index) => (
              <div className="roadmap-item" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                {index < 5 && <i>→</i>}
              </div>
            ))}
          </div>

          <p className="roadmap-note">
            Development direction — capabilities shown here represent the
            evolving AtlasTrader architecture and roadmap, not a claim that
            every component is currently production-ready.
          </p>
        </div>
      </section>

      <section className="product-section relationship-section">
        <div className="product-container">
          <p className="product-section-number">11 / THE HIFFS CONNECTION</p>

          <div className="relationship">
            <div className="relationship-node">
              <span>01</span>
              <strong>HIFFS GLOBAL</strong>
              <small>Technology & Innovation Group</small>
            </div>

            <div className="relationship-line" />

            <div className="relationship-node">
              <span>02</span>
              <strong>HIFFS TECH</strong>
              <small>Software, AI & Automation</small>
            </div>

            <div className="relationship-line" />

            <div className="relationship-node relationship-node-active">
              <span>03</span>
              <strong>AtlasTrader</strong>
              <small>Financial Intelligence & Systematic Execution</small>
            </div>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="product-container">
          <p className="product-eyebrow">
  HIFFS TECH / ACTIVE DEVELOPMENT / RESEARCH
</p>

          <h2>
            Engineering the future of
            <br />
            <span>intelligent markets.</span>
          </h2>

          <p>
            AtlasTrader is part of Hiffs Global&apos;s broader technology and
            innovation portfolio.
          </p>

          <div className="product-actions">
            <Link href="/#work" className="product-button product-button-primary">
              Explore Our Work <span>↗</span>
            </Link>

            <Link href="/#contact" className="product-button product-button-secondary">
              Start a Conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="product-footer">
  <div className="product-container product-footer-inner">
    <Link href="/" className="product-brand">
      <Image
        src="/hiffs-global-icon.png"
        alt="Hiffs Global"
        width={34}
        height={34}
      />

      <span>
        HIFFS <strong>GLOBAL</strong>
      </span>
    </Link>

    <p>Technology & Innovation Group</p>

    <Link href="/">← Back to Hiffs Global</Link>
  </div>
  </footer> 
    </main>
  );
}