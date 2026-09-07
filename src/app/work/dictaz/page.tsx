"use client";

import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Digital Publishing",
    description:
      "A structured publishing environment for technology, AI, data, business, research, innovation and emerging ideas.",
  },
  {
    number: "02",
    title: "Knowledge Architecture",
    description:
      "Organizes content through topics, categories, relationships and information structures designed for deeper discovery.",
  },
  {
    number: "03",
    title: "Search & Discovery",
    description:
      "Helps users navigate information through search, contextual relationships and intelligent content discovery.",
  },
  {
    number: "04",
    title: "AI-Assisted Intelligence",
    description:
      "Developing capabilities for summarization, contextual retrieval, recommendations and conversational knowledge interaction.",
  },
  {
    number: "05",
    title: "Content Intelligence",
    description:
      "Uses structured information and emerging AI capabilities to make published knowledge more useful and accessible.",
  },
  {
    number: "06",
    title: "Advanced Intelligence",
    description:
      "Longer-term development directions include agents, knowledge workflows, automation and enterprise-oriented intelligence.",
  },
];

const ecosystem = [
  {
    number: "01",
    name: "Dictaz AI",
    description:
      "The developing intelligence layer for AI-assisted knowledge interaction and discovery.",
  },
  {
    number: "02",
    name: "DictazIQ",
    description:
      "Intelligence, analytics and decision-support capabilities within the wider Dictaz ecosystem.",
  },
  {
    number: "03",
    name: "iDictaz",
    description:
      "An intelligent interaction and assistant direction within the evolving platform.",
  },
  {
    number: "04",
    name: "Dictaz Agents",
    description:
      "A longer-term direction for specialized agents, research assistance and intelligent workflows.",
  },
  {
    number: "05",
    name: "Dictaz Enterprise",
    description:
      "A future enterprise-oriented layer for knowledge, integration and intelligent automation.",
  },
];

const useCases = [
  "Knowledge Management",
  "Intelligent Search",
  "Document Intelligence",
  "Data Analysis",
  "Decision Support",
  "Workflow Automation",
  "Enterprise Assistants",
  "AI Agents",
];

const industries = [
  "Financial Services",
  "Real Estate",
  "Education",
  "Retail & E-commerce",
  "Events & Entertainment",
  "Logistics",
  "Professional Services",
  "Research & Knowledge",
];

export default function DictazPage() {
  return (
    <main className="dictaz-page">
      <header className="dictaz-header">
        <Link href="/" className="dictaz-brand">
          <span className="dictaz-brand-mark">H</span>
          <span>HIFFS GLOBAL</span>
        </Link>

        <nav className="dictaz-nav" aria-label="Product navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/#ecosystem">Ecosystem</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="dictaz-hero">
        <div className="dictaz-hero-grid" />

        <div className="dictaz-intelligence-visual">
          <div className="dictaz-orbit dictaz-orbit-one" />
          <div className="dictaz-orbit dictaz-orbit-two" />
          <div className="dictaz-orbit dictaz-orbit-three" />

          <div className="dictaz-core">
            <span>D</span>
          </div>

          <div className="dictaz-data-node dictaz-node-one">
            <span>AI</span>
          </div>

          <div className="dictaz-data-node dictaz-node-two">
            <span>IQ</span>
          </div>

          <div className="dictaz-data-node dictaz-node-three">
            <span>AG</span>
          </div>

          <div className="dictaz-data-node dictaz-node-four">
            <span>KN</span>
          </div>
        </div>

        <div className="dictaz-container dictaz-hero-content">
          <p className="dictaz-eyebrow">
            HIFFS MEDIA × HIFFS TECH / KNOWLEDGE & INTELLIGENCE
          </p>

          <h1>
            Where knowledge
            <br />
            <span>meets intelligence.</span>
          </h1>

          <p className="dictaz-hero-copy">
            Dictaz is an evolving publishing, knowledge and intelligence platform
            combining technology media, structured information, discovery and
            emerging artificial intelligence capabilities within one connected
            ecosystem.
          </p>

          <div className="dictaz-actions">
            <a
              href="#intelligence"
              className="dictaz-button dictaz-button-primary"
            >
              Explore Dictaz <span>↗</span>
            </a>

            <Link
              href="/#contact"
              className="dictaz-button dictaz-button-secondary"
            >
              Start a Conversation <span>↗</span>
            </Link>
          </div>

          <div className="dictaz-status">
            <span className="dictaz-status-dot" />
            <span>ACTIVE DEVELOPMENT</span>
          </div>
        </div>
      </section>

      <section className="dictaz-section" id="intelligence">
        <div className="dictaz-container dictaz-two-column">
          <div>
            <p className="dictaz-section-number">01 / THE PLATFORM</p>

            <h2>
              Publishing knowledge.
              <span> Building intelligence.</span>
            </h2>
          </div>

        
          <div className="dictaz-copy">
           <p>
             Dictaz brings digital publishing, knowledge organization and
             intelligent discovery together within a single evolving platform.
           </p>

           <p>
             Its publishing foundation is being developed around technology,
             artificial intelligence, data, business, innovation, research and
             emerging ideas — with structured content architecture designed to
             make knowledge easier to discover and understand.
           </p>

           <p>
             Alongside publishing, Dictaz is developing an intelligence layer
             that can progressively support AI-assisted discovery,
             summarization, contextual retrieval, recommendations,
             conversational interaction and advanced knowledge workflows.
           </p>
          </div>
        </div>
      </section>

      <section className="dictaz-section dictaz-dark-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">02 / THE DICTAZ ARCHITECTURE</p>

            <h2>
              Publish.
              <br />
              Discover.
              <br />
              <span>Understand.</span>
            </h2>
          </div>

          <div className="dictaz-architecture">
            <div className="dictaz-architecture-layer">
              <span>01</span>
              <strong>INTERACTION</strong>
              <small>
                Natural language
                <br />
                Conversational interfaces
                <br />
                Multimodal interaction
              </small>
            </div>

            <div className="dictaz-architecture-connector">↓</div>

            <div className="dictaz-architecture-layer">
              <span>02</span>
              <strong>UNDERSTANDING</strong>
              <small>
                Context
                <br />
                Intent
                <br />
                Information extraction
              </small>
            </div>

            <div className="dictaz-architecture-connector">↓</div>

            <div className="dictaz-architecture-layer dictaz-layer-highlight">
              <span>03</span>
              <strong>INTELLIGENCE</strong>
              <small>
                Knowledge
                <br />
                Retrieval
                <br />
                Reasoning
              </small>
            </div>

            <div className="dictaz-architecture-connector">↓</div>

            <div className="dictaz-architecture-layer">
              <span>04</span>
              <strong>ORCHESTRATION</strong>
              <small>
                Agents
                <br />
                Tools
                <br />
                Workflows
              </small>
            </div>

            <div className="dictaz-architecture-connector">↓</div>

            <div className="dictaz-architecture-layer">
              <span>05</span>
              <strong>ACTION</strong>
              <small>
                Decisions
                <br />
                Automation
                <br />
                System integration
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="dictaz-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">03 / THE DICTAZ ECOSYSTEM</p>

            <h2>
              One intelligence platform.
              <br />
              <span>Multiple product tracks.</span>
            </h2>

            <p className="dictaz-heading-copy">
              Dictaz is being developed as one connected platform spanning
              publishing, knowledge discovery and increasingly intelligent
              capabilities. The product tracks below represent parts of that
              evolving ecosystem rather than unrelated standalone products.
            </p>
          </div>

          <div className="dictaz-ecosystem">
            {ecosystem.map((item) => (
              <article className="dictaz-ecosystem-card" key={item.number}>
                <span>{item.number}</span>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="dictaz-card-line" />
              </article>
            ))}
          </div>

          <p className="dictaz-disclaimer">
            Product tracks shown here represent the evolving Dictaz platform
            vision. They should not be interpreted as separate commercially
            released products unless explicitly identified as such.
          </p>
        </div>
      </section>

      <section className="dictaz-section dictaz-blue-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">04 / CORE CAPABILITIES</p>

            <h2>
              Intelligence that
              <br />
              <span>works across layers.</span>
            </h2>
          </div>

          <div className="dictaz-capability-grid">
            {capabilities.map((capability) => (
              <article
                className="dictaz-capability-card"
                key={capability.number}
              >
                <span>{capability.number}</span>

                <h3>{capability.title}</h3>

                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dictaz-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">05 / THE INTELLIGENT WORKFLOW</p>

            <h2>
              From a question
              <br />
              <span>to meaningful action.</span>
            </h2>
          </div>

          <div className="dictaz-workflow">
            {[
              ["01", "ASK"],
              ["02", "UNDERSTAND"],
              ["03", "RETRIEVE"],
              ["04", "REASON"],
              ["05", "DECIDE"],
              ["06", "ACT"],
              ["07", "LEARN"],
            ].map(([number, label], index) => (
              <div className="dictaz-workflow-step" key={number}>
                <span>{number}</span>
                <strong>{label}</strong>

                {index < 6 && <i>→</i>}
              </div>
            ))}
          </div>

          <div className="dictaz-workflow-description">
            <p>
              The intended Dictaz workflow combines language understanding,
              relevant knowledge retrieval, reasoning, decision support and
              action orchestration into a connected intelligence cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="dictaz-section dictaz-dark-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">06 / WHAT DICTAZ CAN ENABLE</p>

            <h2>
              Practical intelligence,
              <br />
              <span>not just conversation.</span>
            </h2>
          </div>

          <div className="dictaz-use-case-grid">
            {useCases.map((useCase, index) => (
              <div className="dictaz-use-case" key={useCase}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{useCase}</strong>
                <i>↗</i>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dictaz-section">
        <div className="dictaz-container dictaz-two-column">
          <div>
            <p className="dictaz-section-number">07 / ENTERPRISE INTELLIGENCE</p>

            <h2>
              Between people,
              <br />
              <span>knowledge and systems.</span>
            </h2>
          </div>

          <div className="dictaz-enterprise">
            <p>
              Dictaz is designed to eventually operate as an intelligence
              layer between human users, organizational information and
              business systems.
            </p>

            <div className="dictaz-integration-map">
              <div className="dictaz-integration-core">
                <span>DICTAZ</span>
                <small>INTELLIGENCE</small>
              </div>

              <div className="dictaz-integration-item">
                <span>01</span>
                <strong>APIs</strong>
              </div>

              <div className="dictaz-integration-item">
                <span>02</span>
                <strong>DATA</strong>
              </div>

              <div className="dictaz-integration-item">
                <span>03</span>
                <strong>DOCUMENTS</strong>
              </div>

              <div className="dictaz-integration-item">
                <span>04</span>
                <strong>BUSINESS SYSTEMS</strong>
              </div>

              <div className="dictaz-integration-item">
                <span>05</span>
                <strong>KNOWLEDGE BASES</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dictaz-section dictaz-accent-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">08 / TECHNOLOGY FOUNDATION</p>

            <h2>
              A foundation for
              <br />
              <span>evolving intelligence.</span>
            </h2>
          </div>

          <div className="dictaz-tech-stack">
            <div>
              <span>01</span>
              <strong>AI MODELS</strong>
              <small>
                Intelligence and generative capabilities
              </small>
            </div>

            <div>
              <span>02</span>
              <strong>ORCHESTRATION</strong>
              <small>
                Agents, tools and workflow coordination
              </small>
            </div>

            <div>
              <span>03</span>
              <strong>KNOWLEDGE</strong>
              <small>
                Retrieval, context and information systems
              </small>
            </div>

            <div>
              <span>04</span>
              <strong>DATA</strong>
              <small>
                Structured and unstructured information
              </small>
            </div>

            <div>
              <span>05</span>
              <strong>APIs</strong>
              <small>
                External services and enterprise integrations
              </small>
            </div>

            <div>
              <span>06</span>
              <strong>APPLICATIONS</strong>
              <small>
                Interfaces and intelligent user experiences
              </small>
            </div>
          </div>
        </div>
      </section>

      <section className="dictaz-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">09 / INDUSTRIES</p>

            <h2>
              Intelligence across
              <br />
              <span>different operating environments.</span>
            </h2>
          </div>

          <div className="dictaz-industry-grid">
            {industries.map((industry, index) => (
              <div className="dictaz-industry" key={industry}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{industry}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dictaz-section dictaz-dark-section">
        <div className="dictaz-container">
          <div className="dictaz-section-heading">
            <p className="dictaz-section-number">10 / DEVELOPMENT ROADMAP</p>

            <h2>
              From assistant
              <br />
              <span>to intelligent infrastructure.</span>
            </h2>
          </div>

          <div className="dictaz-roadmap">
            {[
              ["01", "Foundation"],
              ["02", "AI Assistant"],
              ["03", "Knowledge Intelligence"],
              ["04", "AI Agents"],
              ["05", "Enterprise Automation"],
              ["06", "Autonomous Intelligence"],
            ].map(([number, title], index) => (
              <div className="dictaz-roadmap-item" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>

                {index < 5 && <i>→</i>}
              </div>
            ))}
          </div>

          <p className="dictaz-roadmap-note">
            Development direction — the roadmap represents the evolving Dictaz
            vision and should not be interpreted as a statement that every
            capability shown is currently production-ready.
          </p>
        </div>
      </section>

      <section className="dictaz-section dictaz-relationship-section">
        <div className="dictaz-container">
          <p className="dictaz-section-number">11 / THE HIFFS CONNECTION</p>

          <div className="dictaz-relationship">
            <div className="dictaz-relationship-node">
              <span>01</span>
              <strong>HIFFS GLOBAL</strong>
              <small>Technology & Innovation Group</small>
            </div>

            <div className="dictaz-relationship-line" />

            <div className="dictaz-relationship-node">
              <span>02</span>
              <strong>HIFFS TECH</strong>
              <small>Software, AI & Automation</small>
            </div>

            <div className="dictaz-relationship-line" />

            <div className="dictaz-relationship-node dictaz-relationship-active">
              <span>03</span>
              <strong>DICTAZ</strong>
              <small>Knowledge, Publishing & Intelligent Systems</small>
            </div>
          </div>
        </div>
      </section>

      <section className="dictaz-cta">
        <div className="dictaz-container">
          <p className="dictaz-eyebrow">HIFFS TECH / ACTIVE DEVELOPMENT</p>

          <h2>
            Publishing knowledge.
            <br />
            <span>Building intelligence.</span>
          </h2>

          <p>
            Dictaz is part of Hiffs Global&apos;s long-term technology and
            innovation portfolio.
          </p>

          <div className="dictaz-actions">
            <Link
              href="/#work"
              className="dictaz-button dictaz-button-primary"
            >
              Explore Our Work <span>↗</span>
            </Link>

            <Link
              href="/#contact"
              className="dictaz-button dictaz-button-secondary"
            >
              Start a Conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="dictaz-footer">
        <div className="dictaz-container dictaz-footer-inner">
          <Link href="/" className="dictaz-brand">
            <span className="dictaz-brand-mark">H</span>
            <span>HIFFS GLOBAL</span>
          </Link>

          <p>Technology & Innovation Group</p>

          <Link href="/">← Back to Hiffs Global</Link>
        </div>
      </footer>

      <style jsx global>{`
        .dictaz-page {
          --dictaz-bg: #05070a;
          --dictaz-panel: #0a0d14;
          --dictaz-text: #f7f9fc;
          --dictaz-muted: #9aa5b5;
          --dictaz-line: rgba(255, 255, 255, 0.1);
          --dictaz-blue: #4da3ff;
          --dictaz-cyan: #31e7ff;
          --dictaz-violet: #8b5cf6;
          --dictaz-magenta: #ec4899;

          min-height: 100vh;
          background: #f7f9fc;
          color: #10141c;
        }

        .dictaz-page * {
          box-sizing: border-box;
        }

        .dictaz-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .dictaz-header {
          position: absolute;
          inset: 0 0 auto;
          z-index: 30;
          height: 88px;
          padding: 0 6vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          background: rgba(5, 7, 10, 0.52);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(18px);
        }

        .dictaz-brand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: inherit;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }

        .dictaz-brand-mark {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(49, 231, 255, 0.7);
          border-radius: 50%;
          color: var(--dictaz-cyan);
          box-shadow: 0 0 24px rgba(49, 231, 255, 0.18);
        }

        .dictaz-nav {
          display: flex;
          gap: 28px;
        }

        .dictaz-nav a,
        .dictaz-footer a {
          color: inherit;
          text-decoration: none;
          font-size: 12px;
          opacity: 0.78;
          transition: opacity 0.2s ease;
        }

        .dictaz-nav a:hover,
        .dictaz-footer a:hover {
          opacity: 1;
        }

        .dictaz-hero {
          position: relative;
          min-height: 800px;
          overflow: hidden;
          display: flex;
          align-items: center;
          color: var(--dictaz-text);
          background:
            radial-gradient(
              circle at 78% 42%,
              rgba(49, 231, 255, 0.14),
              transparent 25%
            ),
            radial-gradient(
              circle at 70% 72%,
              rgba(139, 92, 246, 0.14),
              transparent 28%
            ),
            var(--dictaz-bg);
        }

        .dictaz-hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.22;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          background-size: 80px 80px;
          mask-image: linear-gradient(
            to right,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .dictaz-hero-content {
          position: relative;
          z-index: 5;
          padding-top: 80px;
        }

        .dictaz-eyebrow,
        .dictaz-section-number {
          margin: 0 0 22px;
          color: var(--dictaz-cyan);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .dictaz-hero h1 {
          max-width: 830px;
          margin: 0;
          font-size: clamp(50px, 7vw, 94px);
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .dictaz-hero h1 span,
        .dictaz-section h2 span,
        .dictaz-cta h2 span {
          color: var(--dictaz-blue);
        }

        .dictaz-hero-copy {
          max-width: 620px;
          margin: 34px 0 0;
          color: var(--dictaz-muted);
          font-size: 18px;
          line-height: 1.75;
        }

        .dictaz-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 36px;
        }

        .dictaz-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          min-height: 52px;
          padding: 0 20px;
          border: 1px solid var(--dictaz-line);
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .dictaz-button:hover {
          transform: translateY(-2px);
          border-color: rgba(49, 231, 255, 0.55);
        }

        .dictaz-button-primary {
          background: var(--dictaz-blue);
          border-color: var(--dictaz-blue);
          color: #04101d;
        }

        .dictaz-button-secondary {
          background: rgba(255, 255, 255, 0.03);
          color: white;
        }

        .dictaz-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 34px;
          color: #8f9aaa;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .dictaz-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--dictaz-cyan);
          box-shadow: 0 0 15px var(--dictaz-cyan);
        }

        .dictaz-intelligence-visual {
          position: absolute;
          width: 620px;
          height: 620px;
          right: 1%;
          top: 50%;
          transform: translateY(-43%);
        }

        .dictaz-orbit {
          position: absolute;
          inset: 10%;
          border: 1px solid rgba(49, 231, 255, 0.18);
          border-radius: 50%;
        }

        .dictaz-orbit-one {
          transform: rotate(22deg) scaleX(1.45);
        }

        .dictaz-orbit-two {
          transform: rotate(-34deg) scaleY(0.56);
          border-color: rgba(139, 92, 246, 0.24);
        }

        .dictaz-orbit-three {
          inset: 23%;
          border-color: rgba(236, 72, 153, 0.2);
          transform: rotate(68deg) scaleX(1.35);
        }

        .dictaz-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 165px;
          height: 165px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          border: 1px solid rgba(49, 231, 255, 0.7);
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(49, 231, 255, 0.2),
            rgba(5, 7, 10, 0.96) 70%
          );
          box-shadow:
            0 0 90px rgba(49, 231, 255, 0.13),
            inset 0 0 55px rgba(49, 231, 255, 0.1);
          color: white;
          font-size: 46px;
          font-weight: 900;
          letter-spacing: -0.08em;
        }

        .dictaz-data-node {
          position: absolute;
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 50%;
          background: rgba(5, 7, 10, 0.85);
          color: white;
          font-size: 10px;
          font-weight: 800;
          box-shadow: 0 0 25px rgba(49, 231, 255, 0.08);
        }

        .dictaz-node-one {
          left: 8%;
          top: 38%;
          color: var(--dictaz-cyan);
        }

        .dictaz-node-two {
          right: 9%;
          top: 24%;
          color: var(--dictaz-violet);
        }

        .dictaz-node-three {
          right: 15%;
          bottom: 20%;
          color: var(--dictaz-magenta);
        }

        .dictaz-node-four {
          left: 19%;
          bottom: 14%;
          color: var(--dictaz-blue);
        }

        .dictaz-section {
          padding: 120px 0;
          background: #f7f9fc;
        }

        .dictaz-dark-section {
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(49, 231, 255, 0.07),
              transparent 25%
            ),
            var(--dictaz-bg);
          color: var(--dictaz-text);
        }

        .dictaz-blue-section {
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(77, 163, 255, 0.1),
              transparent 25%
            ),
            #edf5fc;
        }

        .dictaz-accent-section {
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(139, 92, 246, 0.09),
              transparent 25%
            ),
            #eef4fa;
        }

        .dictaz-two-column {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: start;
        }

        .dictaz-section-heading {
          margin-bottom: 58px;
        }

        .dictaz-section h2 {
          max-width: 800px;
          margin: 0;
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1;
          letter-spacing: -0.045em;
        }

        .dictaz-copy {
          color: #606b7a;
          font-size: 17px;
          line-height: 1.85;
        }

        .dictaz-dark-section .dictaz-copy {
          color: var(--dictaz-muted);
        }

        .dictaz-copy p {
          margin: 0 0 24px;
        }

        .dictaz-heading-copy {
          max-width: 620px;
          margin: 26px 0 0;
          color: #687484;
          line-height: 1.75;
        }

        .dictaz-architecture {
          max-width: 800px;
          margin: 0 auto;
        }

        .dictaz-architecture-layer {
          min-height: 115px;
          padding: 25px 28px;
          display: grid;
          grid-template-columns: 55px 180px 1fr;
          align-items: center;
          border: 1px solid var(--dictaz-line);
          background: rgba(255, 255, 255, 0.025);
        }

        .dictaz-architecture-layer > span {
          color: var(--dictaz-cyan);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-architecture-layer strong {
          font-size: 13px;
          letter-spacing: 0.12em;
        }

        .dictaz-architecture-layer small {
          color: var(--dictaz-muted);
          line-height: 1.65;
        }

        .dictaz-layer-highlight {
          border-color: rgba(49, 231, 255, 0.5);
          background: rgba(49, 231, 255, 0.035);
          box-shadow: 0 0 60px rgba(49, 231, 255, 0.04);
        }

        .dictaz-architecture-connector {
          height: 30px;
          display: grid;
          place-items: center;
          color: var(--dictaz-cyan);
        }

        .dictaz-ecosystem {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: #d9e0e8;
          border: 1px solid #d9e0e8;
        }

        .dictaz-ecosystem-card {
          min-height: 290px;
          padding: 30px;
          background: #f7f9fc;
        }

        .dictaz-ecosystem-card > span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-ecosystem-card h3 {
          margin: 70px 0 15px;
          font-size: 19px;
          letter-spacing: -0.02em;
        }

        .dictaz-ecosystem-card p {
          min-height: 72px;
          margin: 0;
          color: #6b7685;
          font-size: 13px;
          line-height: 1.7;
        }

        .dictaz-card-line {
          width: 34px;
          height: 1px;
          margin-top: 30px;
          background: var(--dictaz-blue);
        }

        .dictaz-disclaimer,
        .dictaz-roadmap-note {
          max-width: 760px;
          margin: 24px 0 0;
          color: #7b8593;
          font-size: 12px;
          line-height: 1.7;
        }

        .dictaz-capability-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #cfdbe6;
          border: 1px solid #cfdbe6;
        }

        .dictaz-capability-card {
          min-height: 260px;
          padding: 30px;
          background: #f7f9fc;
        }

        .dictaz-capability-card > span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-capability-card h3 {
          margin: 60px 0 14px;
          font-size: 20px;
        }

        .dictaz-capability-card p {
          margin: 0;
          color: #697484;
          font-size: 14px;
          line-height: 1.7;
        }

        .dictaz-workflow {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          border-top: 1px solid #dce2e9;
          border-bottom: 1px solid #dce2e9;
        }

        .dictaz-workflow-step {
          position: relative;
          min-height: 145px;
          padding: 24px 15px;
          border-right: 1px solid #dce2e9;
        }

        .dictaz-workflow-step:last-child {
          border-right: 0;
        }

        .dictaz-workflow-step span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-workflow-step strong {
          display: block;
          margin-top: 55px;
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .dictaz-workflow-step i {
          position: absolute;
          top: 50%;
          right: 6px;
          color: #9aa5b5;
          font-style: normal;
        }

        .dictaz-workflow-description {
          max-width: 700px;
          margin-top: 28px;
          color: #697484;
          line-height: 1.8;
        }

        .dictaz-use-case-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--dictaz-line);
        }

        .dictaz-use-case {
          min-height: 85px;
          display: grid;
          grid-template-columns: 50px 1fr 30px;
          align-items: center;
          border-bottom: 1px solid var(--dictaz-line);
        }

        .dictaz-use-case span {
          color: var(--dictaz-cyan);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-use-case strong {
          font-size: 14px;
        }

        .dictaz-use-case i {
          color: var(--dictaz-cyan);
          font-style: normal;
        }

        .dictaz-enterprise {
          color: #697484;
          font-size: 16px;
          line-height: 1.8;
        }

        .dictaz-enterprise > p {
          margin: 0 0 38px;
        }

        .dictaz-integration-map {
          position: relative;
          min-height: 390px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          align-items: center;
        }

        .dictaz-integration-core {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 2;
          width: 145px;
          height: 145px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          align-content: center;
          border: 1px solid rgba(77, 163, 255, 0.65);
          border-radius: 50%;
          background: #f7f9fc;
          box-shadow: 0 20px 50px rgba(77, 163, 255, 0.1);
        }

        .dictaz-integration-core span {
          color: #10141c;
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 0.1em;
        }

        .dictaz-integration-core small {
          margin-top: 5px;
          color: var(--dictaz-blue);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.14em;
        }

        .dictaz-integration-item {
          min-height: 105px;
          padding: 22px;
          border: 1px solid #d3dce6;
          background: rgba(255, 255, 255, 0.75);
        }

        .dictaz-integration-item span {
          color: var(--dictaz-blue);
          font-size: 9px;
          font-weight: 800;
        }

        .dictaz-integration-item strong {
          display: block;
          margin-top: 22px;
          font-size: 11px;
          letter-spacing: 0.08em;
        }

        .dictaz-tech-stack {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #d2dce6;
          border: 1px solid #d2dce6;
        }

        .dictaz-tech-stack > div {
          min-height: 180px;
          padding: 28px;
          background: rgba(255, 255, 255, 0.7);
        }

        .dictaz-tech-stack span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-tech-stack strong {
          display: block;
          margin-top: 42px;
          font-size: 12px;
          letter-spacing: 0.1em;
        }

        .dictaz-tech-stack small {
          display: block;
          margin-top: 10px;
          color: #737f8e;
          line-height: 1.6;
        }

        .dictaz-industry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #dce2e9;
        }

        .dictaz-industry {
          min-height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
          border-right: 1px solid #dce2e9;
          border-bottom: 1px solid #dce2e9;
        }

        .dictaz-industry:nth-child(4n) {
          border-right: 0;
        }

        .dictaz-industry span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-industry strong {
          font-size: 13px;
        }

        .dictaz-roadmap {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          border-top: 1px solid var(--dictaz-line);
          border-bottom: 1px solid var(--dictaz-line);
        }

        .dictaz-roadmap-item {
          position: relative;
          min-height: 155px;
          padding: 25px 18px;
          border-right: 1px solid var(--dictaz-line);
        }

        .dictaz-roadmap-item:last-child {
          border-right: 0;
        }

        .dictaz-roadmap-item span {
          color: var(--dictaz-cyan);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-roadmap-item strong {
          display: block;
          margin-top: 52px;
          font-size: 12px;
        }

        .dictaz-roadmap-item i {
          position: absolute;
          top: 50%;
          right: 8px;
          color: #707b89;
          font-style: normal;
        }

        .dictaz-relationship-section {
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(77, 163, 255, 0.08),
              transparent 38%
            ),
            #edf4fb;
        }

        .dictaz-relationship {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-top: 55px;
        }

        .dictaz-relationship-node {
          width: 280px;
          min-height: 155px;
          padding: 24px;
          border: 1px solid #cbd6e2;
          background: rgba(255, 255, 255, 0.75);
        }

        .dictaz-relationship-node > span {
          color: var(--dictaz-blue);
          font-size: 10px;
          font-weight: 800;
        }

        .dictaz-relationship-node strong {
          display: block;
          margin-top: 36px;
          font-size: 13px;
          letter-spacing: 0.1em;
        }

        .dictaz-relationship-node small {
          display: block;
          margin-top: 8px;
          color: #6f7b8a;
          line-height: 1.5;
        }

        .dictaz-relationship-active {
          border-color: rgba(77, 163, 255, 0.65);
          box-shadow: 0 20px 50px rgba(77, 163, 255, 0.1);
        }

        .dictaz-relationship-line {
          width: 60px;
          height: 1px;
          background: #b8c4d1;
        }

        .dictaz-cta {
          padding: 145px 0;
          text-align: center;
          color: white;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(49, 231, 255, 0.13),
              transparent 35%
            ),
            var(--dictaz-bg);
        }

        .dictaz-cta h2 {
          max-width: 900px;
          margin: 0 auto;
          font-size: clamp(46px, 6vw, 80px);
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .dictaz-cta > .dictaz-container > p:not(.dictaz-eyebrow) {
          max-width: 580px;
          margin: 28px auto 0;
          color: var(--dictaz-muted);
          line-height: 1.7;
        }

        .dictaz-cta .dictaz-actions {
          justify-content: center;
        }

        .dictaz-footer {
          padding: 34px 0;
          color: white;
          background: #030507;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dictaz-footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .dictaz-footer p {
          margin: 0;
          color: #7d8795;
          font-size: 11px;
        }

        @media (max-width: 1050px) {
          .dictaz-intelligence-visual {
            right: -170px;
            opacity: 0.48;
          }

          .dictaz-ecosystem {
            grid-template-columns: repeat(3, 1fr);
          }

          .dictaz-capability-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dictaz-workflow {
            grid-template-columns: repeat(4, 1fr);
          }

          .dictaz-workflow-step:nth-child(4) {
            border-right: 0;
          }

          .dictaz-workflow-step:nth-child(-n + 4) {
            border-bottom: 1px solid #dce2e9;
          }

          .dictaz-roadmap {
            grid-template-columns: repeat(3, 1fr);
          }

          .dictaz-roadmap-item:nth-child(3) {
            border-right: 0;
          }

          .dictaz-roadmap-item:nth-child(-n + 3) {
            border-bottom: 1px solid var(--dictaz-line);
          }
        }

        @media (max-width: 760px) {
          .dictaz-header {
            height: 72px;
            padding: 0 24px;
          }

          .dictaz-nav {
            display: none;
          }

          .dictaz-container {
            width: min(100% - 32px, 620px);
          }

          .dictaz-hero {
            min-height: 730px;
          }

          .dictaz-hero-content {
            padding-top: 55px;
          }

          .dictaz-intelligence-visual {
            width: 430px;
            height: 430px;
            right: -140px;
            top: 70%;
            opacity: 0.32;
          }

          .dictaz-two-column {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .dictaz-section {
            padding: 82px 0;
          }

          .dictaz-architecture-layer {
            grid-template-columns: 45px 1fr;
            gap: 14px;
          }

          .dictaz-architecture-layer small {
            grid-column: 2;
          }

          .dictaz-ecosystem {
            grid-template-columns: 1fr;
          }

          .dictaz-capability-grid {
            grid-template-columns: 1fr;
          }

          .dictaz-workflow {
            grid-template-columns: 1fr 1fr;
          }

          .dictaz-workflow-step:nth-child(4) {
            border-right: 1px solid #dce2e9;
          }

          .dictaz-workflow-step:nth-child(2n) {
            border-right: 0;
          }

          .dictaz-workflow-step:nth-child(-n + 6) {
            border-bottom: 1px solid #dce2e9;
          }

          .dictaz-use-case-grid {
            grid-template-columns: 1fr;
          }

          .dictaz-integration-map {
            grid-template-columns: 1fr;
          }

          .dictaz-integration-core {
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin: 0 auto 20px;
          }

          .dictaz-tech-stack {
            grid-template-columns: 1fr;
          }

          .dictaz-industry-grid {
            grid-template-columns: 1fr 1fr;
          }

          .dictaz-industry:nth-child(4n) {
            border-right: 1px solid #dce2e9;
          }

          .dictaz-industry:nth-child(2n) {
            border-right: 0;
          }

          .dictaz-roadmap {
            grid-template-columns: 1fr 1fr;
          }

          .dictaz-roadmap-item:nth-child(3) {
            border-right: 1px solid var(--dictaz-line);
          }

          .dictaz-roadmap-item:nth-child(2n) {
            border-right: 0;
          }

          .dictaz-relationship {
            flex-direction: column;
          }

          .dictaz-relationship-line {
            width: 1px;
            height: 35px;
          }

          .dictaz-relationship-node {
            width: min(100%, 340px);
          }

          .dictaz-footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          .dictaz-hero h1 {
            font-size: 47px;
          }

          .dictaz-hero-copy {
            font-size: 16px;
          }

          .dictaz-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .dictaz-button {
            width: 100%;
          }

          .dictaz-workflow {
            grid-template-columns: 1fr;
          }

          .dictaz-workflow-step {
            border-right: 0 !important;
            border-bottom: 1px solid #dce2e9;
          }

          .dictaz-workflow-step:last-child {
            border-bottom: 0;
          }

          .dictaz-industry-grid {
            grid-template-columns: 1fr;
          }

          .dictaz-industry {
            border-right: 0 !important;
          }

          .dictaz-roadmap {
            grid-template-columns: 1fr;
          }

          .dictaz-roadmap-item {
            border-right: 0 !important;
            border-bottom: 1px solid var(--dictaz-line);
          }

          .dictaz-roadmap-item:last-child {
            border-bottom: 0;
          }
        }
      `}</style>
    </main>
  );
}