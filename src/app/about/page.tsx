import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Learn about Hiffs Global Enterprises, a technology and innovation group building intelligent systems, digital platforms and future ventures.",
};

const ecosystem = [
  {
    number: "01",
    name: "Hiffs Tech",
    description:
      "Software engineering, artificial intelligence, automation and enterprise technology systems.",
    accent: "about-accent-blue",
  },
  {
    number: "02",
    name: "Hiffs Analytics",
    description:
      "Data intelligence, business intelligence, analytics and decision-support systems.",
    accent: "about-accent-cyan",
  },
  {
    number: "03",
    name: "Hiffs Media",
    description:
      "Digital publishing, technology content, communications and creative media.",
    accent: "about-accent-violet",
  },
  {
    number: "04",
    name: "Future Ventures",
    description:
      "Emerging technologies, products, strategic opportunities and venture development.",
    accent: "about-accent-lime",
  },
];

const principles = [
  {
    number: "01",
    title: "Excellence",
    text: "We pursue high standards in thinking, design, engineering, execution and service.",
  },
  {
    number: "02",
    title: "Intelligence",
    text: "We value knowledge, evidence, structured thinking and informed decision-making.",
  },
  {
    number: "03",
    title: "Integrity",
    text: "We communicate capabilities responsibly and build relationships around trust and transparency.",
  },
  {
    number: "04",
    title: "Innovation",
    text: "We explore new technologies and better ways to solve meaningful problems.",
  },
  {
    number: "05",
    title: "Execution",
    text: "Ideas create value when they are translated into working systems and meaningful outcomes.",
  },
  {
    number: "06",
    title: "Impact",
    text: "Technology should create practical value for businesses, institutions, communities and people.",
  },
];

const approach = [
  [
    "01",
    "Discover",
    "Understand the organization, problem, users, operating environment and opportunity.",
  ],
  [
    "02",
    "Define",
    "Translate the challenge into clear product, operational and technology requirements.",
  ],
  [
    "03",
    "Architect",
    "Design the system architecture, data model, workflows, integrations and technology foundation.",
  ],
  [
    "04",
    "Build",
    "Engineer the product through controlled iterations with quality and maintainability in mind.",
  ],
  [
    "05",
    "Integrate",
    "Connect applications, APIs, data sources and business systems into a coherent technology environment.",
  ],
  [
    "06",
    "Validate",
    "Test functionality, usability, responsiveness, integrations and production readiness.",
  ],
  [
    "07",
    "Deploy",
    "Move the solution into an appropriate production environment and verify operational readiness.",
  ],
  [
    "08",
    "Evolve",
    "Use feedback, data and changing requirements to continuously improve the system.",
  ],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-header">
        <div className="about-container about-nav">
          <Link href="/" className="about-brand">
            <span className="about-brand-mark">
              <Image
                src="/hiffs-global-icon.png"
                alt="Hiffs Global"
                width={38}
                height={38}
                priority
              />
            </span>

            <span className="about-brand-text">
              HIFFS <strong>GLOBAL</strong>
            </span>
          </Link>

          <nav className="about-nav-links">
            <Link href="/">Home</Link>
            <Link href="/about" className="active">
              About
            </Link>
            <Link href="/#capabilities">Capabilities</Link>
            <Link href="/#work">Work</Link>
            <Link href="/#industries">Industries</Link>
            <Link href="/#ventures">Ventures</Link>
          </nav>

          <Link href="/#contact" className="about-header-cta">
            Start a Project <span>↗</span>
          </Link>
        </div>
      </header>

      <section className="about-hero">
        <div className="about-container">
          <p className="about-label">01 / ABOUT HIFFS GLOBAL</p>

          <div className="about-hero-grid">
            <h1>
              Building technology.
              <br />
              <span>Creating possibility.</span>
            </h1>

            <div className="about-hero-copy">
              <p>
                Hiffs Global Enterprises is a technology and innovation group
                focused on building intelligent systems, digital platforms,
                data-driven solutions and emerging ventures.
              </p>

              <p>
                We bring engineering, intelligence, creativity and
                entrepreneurial thinking together to turn meaningful
                opportunities into technology-led outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <div className="about-story-grid">
            <div>
              <p className="about-label">02 / WHO WE ARE</p>
              <h2>
                Technology should create
                <span> possibility.</span>
              </h2>
            </div>

            <div className="about-story-text">
              <p>
                Hiffs Global operates at the intersection of technology,
                intelligence, media and venture development.
              </p>

              <p>
                Our work spans software engineering, artificial intelligence,
                data intelligence, automation, digital platforms and emerging
                technology. The objective is simple: build useful systems that
                solve real problems and create lasting value.
              </p>

              <p>
                From Africa to global markets, we are building an ecosystem
                capable of developing products, partnering with organizations
                and pursuing opportunities at the frontier of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-leadership">
  <div className="about-container">
    <div className="about-leadership-grid">
      <div className="about-leadership-image">
        <Image
          src="/ifeanyi-akunna-cto.jpg"
          alt="Ifeanyi Joshua Akunna, Chief Technology Officer at Hiffs Global Enterprises"
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          className="about-leadership-photo"
        />

        <div className="about-leadership-image-label">
          <span>TECHNOLOGY LEADERSHIP</span>
          <span>HIFFS GLOBAL</span>
        </div>
      </div>

      <div className="about-leadership-content">
        <p className="about-label">03 / LEADERSHIP</p>

        <h2>
          Technology with a vision.
          <br />
          <span>Built for what comes next.</span>
        </h2>

        <div className="about-leader-identity">
          <h3>Ifeanyi Joshua Akunna</h3>
          <p>Chief Technology Officer</p>
          <span>Hiffs Global Enterprises</span>
        </div>

        <div className="about-leadership-copy">
          <p>
            Ifeanyi Joshua Akunna provides technology leadership across Hiffs
            Global&apos;s software, artificial intelligence, data, automation
            and digital-product initiatives.
          </p>

          <p>
            His work focuses on connecting technology strategy with practical
            system development — translating ideas and complex operational
            requirements into structured digital products and intelligent
            systems.
          </p>

          <p>
            As Chief Technology Officer, he helps define the technical
            direction of Hiffs Global and the engineering philosophy behind
            the group&apos;s growing technology portfolio.
          </p>
        </div>

        <blockquote className="about-leadership-quote">
          <p>
            Technology should not exist simply because it can be built. It
            should solve meaningful problems, improve how people and
            organizations operate, and create possibilities that were
            previously difficult to achieve.
          </p>

          <footer>
            <strong>Ifeanyi Joshua Akunna</strong>
            <span>Chief Technology Officer</span>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>

      <section className="about-ecosystem">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <p className="about-label">04 / OUR ECOSYSTEM</p>
              <h2>
                Four engines.
                <br />
                <span>One group.</span>
              </h2>
            </div>

            <p>
              Different capabilities. One connected technology ecosystem
              designed to move ideas from insight to execution.
            </p>
          </div>

          <div className="about-ecosystem-grid">
            {ecosystem.map((item) => (
              <article className="about-ecosystem-card" key={item.name}>
                <div className={`about-accent ${item.accent}`} />

                <span className="about-card-number">{item.number}</span>

                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="about-card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="about-container">
          <div className="about-section-heading">
            <div>
              <p className="about-label">05 / OUR APPROACH</p>
              <h2>
                From idea
                <br />
                <span>to impact.</span>
              </h2>
            </div>

            <p>
              We combine strategic thinking, product discipline and engineering
              execution to move from a clearly understood problem to technology
              that can operate, scale and evolve.
</p>
          </div>

          <div className="about-approach-list">
            {approach.map(([number, title, text]) => (
              <article className="about-approach-row" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-container">
          <p className="about-label">06 / WHAT WE BELIEVE</p>

          <div className="about-belief">
            <h2>
              The future is built by
              <span> people who imagine it.</span>
            </h2>
          </div>

          <div className="about-principles-grid">
            {principles.map((principle) => (
              <article className="about-principle" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-global">
        <div className="about-container">
          <div className="about-global-panel">
            <div className="about-global-glow" />

            <div className="about-global-copy">
              <p className="about-label">07 / GLOBAL OUTLOOK</p>

              <h2>
                Africa
                <br />
                <span>to the world.</span>
              </h2>

              <p>
                Hiffs Global is building from an African context with a global
                technology outlook. We believe locally relevant solutions can be
                engineered to international standards and developed with the
                ambition to compete beyond geography.
</p>

              <div className="about-location-row">
                <span>AFRICA</span>
                <span>GLOBAL MARKETS</span>
                <span>EMERGING TECHNOLOGY</span>
              </div>
            </div>

            <div className="about-global-orbit">
              <div className="about-globe">
                <span>HG</span>
              </div>
              <div className="about-orbit about-orbit-one" />
              <div className="about-orbit about-orbit-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-future">
        <div className="about-container">
          <p className="about-label">08 / THE FUTURE</p>

          <h2>
            We are not waiting
            <br />
            for the future.
            <br />
            <span>We are building toward it.</span>
          </h2>

          <Link href="/#contact" className="about-future-cta">
            Start a Conversation <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-container about-footer-inner">
          <span>© Hiffs Global Enterprises</span>
          <span>TECHNOLOGY · DATA · AI · VENTURES</span>
          <Link href="/">Back to Hiffs Global ↗</Link>
        </div>
      </footer>
    </main>
  );
}