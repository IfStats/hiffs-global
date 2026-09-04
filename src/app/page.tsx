import Image from "next/image";
const divisions = [
  {
    number: "01",
    name: "Hiffs Tech",
    title: "Engineering the digital infrastructure of tomorrow.",
    description:
      "Software engineering, AI, automation, enterprise applications, APIs, cloud systems and digital platforms.",
  },
  {
    number: "02",
    name: "Hiffs Analytics",
    title: "Turning data into decision intelligence.",
    description:
      "Analytics, business intelligence, data engineering, predictive systems, dashboards and machine learning.",
  },
  {
    number: "03",
    name: "Hiffs Media",
    title: "Technology, ideas and stories that move people.",
    description:
      "Digital publishing, technology content, media production, storytelling and brand communications.",
  },
  {
    number: "04",
    name: "Future Ventures",
    title: "Building what comes next.",
    description:
      "Technology products, venture concepts, emerging technologies, strategic partnerships and innovation.",
  },
];

const capabilities = [
  "Software Engineering",
  "Artificial Intelligence",
  "Data & Analytics",
  "Business Intelligence",
  "Automation",
  "Enterprise Systems",
  "Cloud Solutions",
  "Digital Transformation",
];

const industries = [
  "Financial Services",
  "Real Estate",
  "Retail & E-commerce",
  "Events & Entertainment",
  "Logistics",
  "Education",
  "Agriculture",
  "Professional Services",
];

const projects = [
  {
    name: "EventBytes",
    category: "Event Technology",
    description:
      "A digital event management and ticketing platform designed around organizers, attendees and real-time event operations.",
  },
  {
    name: "Dictaz",
    category: "AI / Intelligent Systems",
    description:
      "An intelligent language technology initiative exploring AI-powered communication and digital intelligence.",
  },
  {
    name: "AtlasTrader",
    category: "Financial Technology",
    description:
      "An algorithmic trading technology platform built around market intelligence, decision systems and automated execution.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav">
          <a href="#" className="brand">
  <span className="brand-mark">
    <Image
      src="/hiffs-global-icon.png"
      alt="Hiffs Global"
      width={34}
      height={34}
      priority
    />
  </span>

  <span>
    HIFFS<span className="brand-accent">GLOBAL</span>
  </span>
</a>

          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#work">Work</a>
            <a href="#industries">Industries</a>
            <a href="#ventures">Ventures</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Start a Project <span>↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            TECHNOLOGY & INNOVATION GROUP
          </div>

          <h1>
            Building intelligent
            <br />
            <span>systems</span> for a
            <br />
            digital future.
          </h1>

          <p className="hero-copy">
            Hiffs Global Enterprises builds software, AI, data intelligence,
            digital platforms and emerging technology for organizations
            navigating what comes next.
          </p>

          <div className="hero-actions">
            <a href="#capabilities" className="button button-primary">
              Explore Capabilities <span>→</span>
            </a>
            <a href="#work" className="button button-secondary">
              View Selected Work
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
  <div className="hero-core">
    <div className="core-ring ring-a" />
    <div className="core-ring ring-b" />
    <div className="core-ring ring-c" />
    <div className="core-center">
  <Image
    src="/hiffs-global-icon.png"
    alt=""
    width={62}
    height={62}
  />
</div>
  </div>

  <div className="system-node node-a">
    <span />
    AI SYSTEMS
  </div>

  <div className="system-node node-b">
    <span />
    DATA INTELLIGENCE
  </div>

  <div className="system-node node-c">
    <span />
    DIGITAL SYSTEMS
  </div>

  <div className="hero-orbit orbit-one" />
  <div className="hero-orbit orbit-two" />
  <div className="hero-orbit orbit-three" />
</div>

        <div className="hero-footer">
          <div>ABUJA · NIGERIA</div>
          <div>BUILDING FOR THE WORLD</div>
          <div>EST. 2012</div>
        </div>
      </section>

      {/* Intro */}
      <section id="about" className="section intro-section">
        <div className="container intro-grid">
          <div>
            <p className="section-label">01 / THE GROUP</p>
          </div>

          <div>
            <h2>
              More than a technology company.
              <br />
              <span>An ecosystem for innovation.</span>
            </h2>

            <p className="large-copy">
              Hiffs Global brings technology, intelligence, media and venture
              development together under one group. We move from business
              problems to architecture, from data to decisions, and from ideas
              to working digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section divisions-section">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="section-label">02 / THE HIFFS ECOSYSTEM</p>
        <h2>
          One group.
          <br />
          <span>Four engines.</span>
        </h2>
      </div>

      <p>
        Hiffs Global brings engineering, intelligence, media and venture
        development together under one technology ecosystem.
      </p>
    </div>

    <div className="ecosystem">
      {divisions.map((division) => (
        <article className="ecosystem-card" key={division.number}>
          <div className="ecosystem-top">
            <span>{division.number}</span>
            <span className="ecosystem-line" />
            <span>HIFFS GLOBAL</span>
          </div>

          <div className="ecosystem-body">
            <p>{division.name}</p>
            <h3>{division.title}</h3>
            <span>{division.description}</span>
          </div>

          <div className="ecosystem-bottom">
            <span>EXPLORE DIVISION</span>
            <span className="ecosystem-arrow">↗</span>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Capabilities */}
      <section id="capabilities" className="section capabilities-section">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="section-label">03 / CAPABILITIES</p>
        <h2>
          What we
          <br />
          <span>build.</span>
        </h2>
      </div>

      <p>
        From intelligent digital products to complex enterprise technology
        ecosystems, we design and engineer systems built for scale,
        performance and long-term value.
      </p>
    </div>

    <div className="capability-list">
      {capabilities.map((capability, index) => (
        <div className="capability-row" key={capability}>
          <div className="capability-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="capability-content">
            <strong>{capability}</strong>
            <span>
              {[
                "Product engineering, web applications and scalable software systems.",
                "Machine intelligence, intelligent automation and AI-powered products.",
                "Data engineering, analytics pipelines and decision intelligence.",
                "Dashboards, reporting systems and executive intelligence platforms.",
                "Workflow automation, integrations and operational optimization.",
                "Enterprise applications, APIs and connected business systems.",
                "Cloud architecture, infrastructure and production-ready platforms.",
                "Technology strategy, modernization and digital operating models.",
              ][index]}
            </span>
          </div>

          <div className="capability-arrow">↗</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Work */}
      <section id="work" className="section work-section">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="section-label">04 / SELECTED WORK</p>
        <h2>
          Systems built
          <br />
          <span>to matter.</span>
        </h2>
      </div>

      <p>
        A selection of technology platforms and intelligent systems developed
        across events, artificial intelligence and financial technology.
      </p>
    </div>

    <div className="work-grid">
      {projects.map((project, index) => (
        <article className="work-card" key={project.name}>
          <div className="work-card-visual">
            <div className="work-grid-lines" />

            <div className="work-orbit work-orbit-one" />
            <div className="work-orbit work-orbit-two" />

            <div className="work-card-index">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="work-card-symbol">
              {project.name.charAt(0)}
            </div>

            <span className="work-status">SYSTEM / ACTIVE</span>
          </div>

          <div className="work-card-content">
            <div className="work-card-meta">
              <span>{project.category}</span>
              <span>HIFFS GLOBAL</span>
            </div>

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="work-card-footer">
              <span>EXPLORE PROJECT</span>
              <span className="work-card-arrow">↗</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Industries */}
      <section id="industries" className="section industries-section">
  <div className="container">
    <div className="section-heading">
      <div>
        <p className="section-label">05 / INDUSTRIES</p>
        <h2>
          Technology
          <br />
          <span>without borders.</span>
        </h2>
      </div>

      <p>
        Our systems are designed to adapt to the operational realities of
        different industries, from emerging ventures to established
        organizations.
      </p>
    </div>

    <div className="industries-grid">
      {industries.map((industry, index) => (
        <article className="industry-card" key={industry}>
          <span className="industry-number">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="industry-card-content">
            <span className="industry-kicker">SECTOR</span>
            <h3>{industry}</h3>
          </div>

          <span className="industry-arrow">↗</span>
        </article>
      ))}
    </div>
  </div>
</section>

      {/* Ventures */}
      <section id="ventures" className="section ventures-section">
  <div className="container">
    <div className="ventures-layout">
      <div className="ventures-intro">
        <p className="section-label">06 / FUTURE VENTURES</p>

        <h2>
          Building
          <br />
          <span>what comes next.</span>
        </h2>

        <p className="ventures-lead">
          Hiffs Global is not only building for today's digital economy.
          We explore emerging technologies, develop new products and pursue
          opportunities that can define tomorrow's markets.
        </p>

        <div className="ventures-marker">
          <span className="ventures-marker-dot" />
          <span>EXPLORATION / IN PROGRESS</span>
        </div>
      </div>

      <div className="ventures-panel">
        <div className="ventures-panel-grid" />

        <div className="ventures-orbit ventures-orbit-one" />
        <div className="ventures-orbit ventures-orbit-two" />
        <div className="ventures-orbit ventures-orbit-three" />

        <div className="ventures-core">
          <span>HG</span>
        </div>

        <div className="ventures-node ventures-node-one">
          <span>AI</span>
        </div>

        <div className="ventures-node ventures-node-two">
          <span>DATA</span>
        </div>

        <div className="ventures-node ventures-node-three">
          <span>TECH</span>
        </div>

        <div className="ventures-panel-label">
          <span>FUTURE SYSTEMS</span>
          <span>01—∞</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section id="contact" className="section cta-section">
  <div className="container">
    <div className="cta-panel">
      <div className="cta-grid" />

      <div className="cta-content">
        <p className="section-label">07 / START A CONVERSATION</p>

        <h2>
          Have a problem
          <br />
          worth <span>solving?</span>
        </h2>

        <p>
          Tell us what you are building, what needs to change, or where
          technology could create a better outcome. Let's explore what is
          possible.
        </p>

        <a className="cta-button" href="mailto:hello@hiffsglobal.com">
          <span>CONTACT HIFFS GLOBAL</span>
          <span>↗</span>
        </a>
      </div>

      <div className="cta-side">
        <div className="cta-side-item">
          <span>01</span>
          <strong>DISCOVER</strong>
          <p>Understand the challenge and define the opportunity.</p>
        </div>

        <div className="cta-side-item">
          <span>02</span>
          <strong>DESIGN</strong>
          <p>Shape the technology, product or system required.</p>
        </div>

        <div className="cta-side-item">
          <span>03</span>
          <strong>BUILD</strong>
          <p>Engineer, launch and continuously improve the solution.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-top">
          <div>
            <a href="#" className="brand footer-brand">
  <span className="brand-mark">
    <Image
      src="/hiffs-global-icon.png"
      alt="Hiffs Global"
      width={34}
      height={34}
    />
  </span>

  <span>
    HIFFS<span className="brand-accent">GLOBAL</span>
  </span>
</a>

            <p>Technology & innovation for a digital future.</p>
          </div>

          <div className="footer-links">
            <div>
              <p>GROUP</p>
              <a href="#about">About</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#work">Selected Work</a>
            </div>

            <div>
              <p>DIVISIONS</p>
              <a href="#">Hiffs Tech</a>
              <a href="#">Hiffs Analytics</a>
              <a href="#">Hiffs Media</a>
              <a href="#ventures">Future Ventures</a>
            </div>

            <div>
              <p>CONNECT</p>
              <a href="#contact">Contact</a>
              <a href="mailto:hello@hiffsglobal.com">Email</a>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Hiffs Global Enterprises</span>
          <span>Total Excellence.</span>
        </div>
      </footer>
    </main>
  );
}