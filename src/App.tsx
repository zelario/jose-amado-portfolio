import { useState, type ReactNode } from "react";
import portrait from "./portrait";

const projects = [
  {
    id: "01",
    title: "CV MAXING",
    url: "https://github.com/zelario/cv-maxing",
    category: "AI / SOFTWARE ENGINEERING",
    description:
      "AI-powered CV analysis and optimization. Structured improvements. Evidence, not invention.",
    label: "Structured CV generation",
  },
  {
    id: "02",
    title: "FORMULA 1 ANALYSIS",
    url: "https://github.com/zelario/f1-teammate-analysis",
    category: "DATA SCIENCE / DATA ANALYSIS",
    description:
      "Two drivers. One circuit. A closer look at performance through real racing data.",
    label: "Telemetry / common distance grid",
  },
  {
    id: "03",
    title: "HUMAN ACTIVITY RECOGNITION",
    url: "https://github.com/zelario/basic-activity-recognition",
    category: "MACHINE LEARNING / DATA SCIENCE",
    description:
      "From sensor data to human activity. Finding structure in movement.",
    label: "Sensor data / PCA / KNN",
  },
  {
    id: "04",
    title: "GOOGOL",
    url: "https://github.com/zelario/googol-search-engine",
    category: "SOFTWARE ENGINEERING / DISTRIBUTED SYSTEMS",
    description:
      "A distributed search engine. Connected components. A shared index.",
    label: "Java / RMI / PostgreSQL",
  },
];

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 19 19 5M5 5h14v14"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function AboutDisclosure({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`about-disclosure${open ? " is-open" : ""}`}>
      <button
        className="micro"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {title}
        <span aria-hidden="true">+</span>
      </button>
      <div className="about-panel" aria-hidden={!open}>
        <div className="about-panel-inner">{children}</div>
      </div>
    </div>
  );
}

function ProjectVisual({
  index,
}: {
  index: number;
}) {
  if (index === 0) {
    return (
      <div
        className="visual visual-1 visual-cv"
        role="img"
        aria-label="Conceptual board showing structured CV documents and evidence-based analysis"
      >
        <svg viewBox="0 0 1200 680" aria-hidden="true">
          <g transform="translate(610 125) rotate(9)">
            <rect width="290" height="410" fill="#bdbdbd" />
            <path
              d="M30 45h130M30 78h220M30 93h200M30 130h70M30 155h220M30 171h220M30 187h170M30 230h70M30 255h220M30 271h195M30 287h210M30 330h70M30 355h220M30 371h150"
              stroke="#888"
              strokeWidth="5"
            />
          </g>
          <g transform="translate(355 74) rotate(-7 180 260)">
            <rect width="355" height="505" fill="#f8f8f8" />
            <text x="36" y="95" fill="#242424" fontSize="66" fontWeight="600">
              CV.
            </text>
            <text
              x="38"
              y="121"
              fill="#777"
              fontFamily="monospace"
              fontSize="8"
              letterSpacing="1.5"
            >
              STRUCTURED / EVIDENCE-BASED
            </text>
            <path d="M38 146h279" stroke="#ccc" />
            <text x="38" y="184" fill="#222" fontFamily="monospace" fontSize="9">
              PROFILE
            </text>
            <path
              d="M38 202h265M38 215h241M38 228h260"
              stroke="#b1b1b1"
              strokeWidth="4"
            />
            <text x="38" y="267" fill="#222" fontFamily="monospace" fontSize="9">
              EXPERIENCE
            </text>
            <path
              d="M38 287h160M38 305h266M38 318h230M38 331h250M38 359h147M38 377h263M38 390h218"
              stroke="#b1b1b1"
              strokeWidth="4"
            />
            <text x="38" y="430" fill="#222" fontFamily="monospace" fontSize="9">
              EDUCATION
            </text>
            <path d="M38 450h220M38 463h167" stroke="#b1b1b1" strokeWidth="4" />
          </g>
          <g fill="none" stroke="#686868">
            <path d="M152 268h147l49-37" />
            <circle cx="348" cy="231" r="4" />
            <path d="M712 463l60 47h150" />
            <circle cx="712" cy="463" r="4" />
          </g>
          <g fill="#666" fontFamily="monospace" fontSize="10" letterSpacing="1">
            <text x="153" y="249">01 / ANALYSE</text>
            <text x="784" y="535">02 / STRUCTURE</text>
          </g>
        </svg>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div
        className="visual visual-2 visual-f1"
        role="img"
        aria-label="Conceptual Formula 1 circuit and comparative telemetry curves"
      >
        <svg viewBox="0 0 900 780" aria-hidden="true">
          <g fill="#858585" fontFamily="monospace" fontSize="11" letterSpacing="1">
            <text x="55" y="64">JAPAN / QUALIFYING / 2024</text>
            <text x="55" y="91">ALONSO — STROLL</text>
          </g>
          <path
            d="M259 169c-65 8-128 58-125 102 4 37 85 29 106 68 18 35-36 65-12 89 26 27 73-40 104-35 34 5 39 77 80 89 52 15 102-59 154-62 62-4 76 82 124 42 32-27-16-59-19-102-2-32 48-86 17-105-27-16-47 43-74 42-28-1-20-44-56-50-41-7-51 25-84 8-23-12-8-41-37-43-44-2-58 45-91 25-23-14-29-77-87-69Z"
            fill="none"
            stroke="#efefef"
            strokeWidth="3"
          />
          <path
            d="M256 182c-55 8-116 56-109 87 6 27 80 20 105 65 21 38-34 67-15 84 17 15 64-42 94-40 46 3 40 72 85 89 35 14 97-55 148-61 67-9 84 85 115 47 20-25-19-49-21-91-2-46 47-90 25-92-25-2-43 49-73 37-33-13-22-51-56-46-27 4-40 24-71 1-28-20-9-40-30-35-35 8-50 46-88 19-32-23-32-66-109-64Z"
            fill="none"
            stroke="#6c6c6c"
            strokeWidth="2"
          />
          <circle cx="147" cy="269" r="7" fill="#f1f1f1" />
          <g stroke="#393939">
            <path d="M55 573h790M55 625h790M55 677h790M55 729h790" />
            {Array.from({ length: 9 }, (_, i) => (
              <path key={i} d={`M${55 + i * 98.75} 573v156`} />
            ))}
          </g>
          <path
            d="M55 700 84 693 117 607 155 591 190 620 231 659 256 651 289 602 337 618 376 699 410 695 444 621 486 601 529 656 566 680 606 609 649 628 689 679 726 668 756 614 804 604 845 650"
            stroke="#e7e7e7"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M55 708 85 696 120 625 158 599 196 630 232 669 263 656 294 613 339 633 379 703 420 690 452 633 492 611 535 663 575 671 612 625 659 638 694 692 735 664 768 624 811 619 845 662"
            stroke="#858585"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 4"
          />
          <g fill="#858585" fontFamily="monospace" fontSize="9" letterSpacing="1">
            <text x="55" y="556">COMMON DISTANCE GRID</text>
            <text x="55" y="756">CONCEPTUAL TELEMETRY — NOT MEASURED DATA</text>
          </g>
        </svg>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div
        className="visual visual-3 visual-activity"
        role="img"
        aria-label="Conceptual human movement sequence and sensor feature grid"
      >
        <svg viewBox="0 0 900 780" aria-hidden="true">
          <g stroke="#bbb" opacity=".55">
            {Array.from({ length: 13 }, (_, i) => (
              <path key={`h${i}`} d={`M60 ${100 + i * 44}h780`} />
            ))}
            {Array.from({ length: 17 }, (_, i) => (
              <path key={`v${i}`} d={`M${60 + i * 49} 100v528`} />
            ))}
          </g>
          <g fill="#626262" fontFamily="monospace" fontSize="10" letterSpacing="1">
            <text x="55" y="62">HUMAN ACTIVITY / SENSOR DATA</text>
            <text x="55" y="726">FEATURES → PCA → KNN → ACTIVITY</text>
            <text x="55" y="748">CONCEPTUAL MOVEMENT STUDY</text>
          </g>
          {[
            { x: 225, opacity: 0.3, shift: -18 },
            { x: 450, opacity: 0.6, shift: 12 },
            { x: 675, opacity: 1, shift: 30 },
          ].map(({ x, opacity, shift }) => (
            <g
              key={x}
              transform={`translate(${x} 0)`}
              opacity={opacity}
              fill="none"
              stroke="#262626"
              strokeWidth="3"
            >
              <circle cx="0" cy="240" r="24" strokeWidth="2" />
              <path
                d={`M0 264V330L${shift} 413M0 290-45 343-74 377M0 290 45 327 72 297M${shift} 413 ${-42 + shift} 483 ${-72 + shift} 567M${shift} 413 ${40 + shift} 479 ${70 + shift} 567`}
              />
              <circle cx="0" cy="290" r="5" fill="#e5e5e5" />
              <circle cx="0" cy="330" r="5" fill="#e5e5e5" />
              <circle cx={shift} cy="413" r="5" fill="#e5e5e5" />
              <circle cx="-45" cy="343" r="5" fill="#e5e5e5" />
              <circle cx="45" cy="327" r="5" fill="#e5e5e5" />
            </g>
          ))}
          <g fill="#666" fontFamily="monospace" fontSize="9">
            <text x="192" y="653">FRAME / A</text>
            <text x="417" y="653">FRAME / B</text>
            <text x="642" y="653">FRAME / C</text>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div
      className="visual visual-4 visual-search"
      role="img"
      aria-label="Conceptual distributed search architecture linking Java RMI and PostgreSQL"
    >
      <svg viewBox="0 0 1200 680" aria-hidden="true">
        <g fill="none" stroke="#525252">
          <path d="M600 320 300 200M600 320 900 200M600 320 300 490M600 320 900 490M300 200V490M900 200V490M300 200H900M300 490H900" />
          <circle cx="600" cy="320" r="88" stroke="#ddd" />
          <circle cx="300" cy="200" r="48" />
          <circle cx="900" cy="200" r="48" />
          <circle cx="300" cy="490" r="48" />
          <circle cx="900" cy="490" r="48" />
        </g>
        <g fill="#d5d5d5" fontFamily="monospace" textAnchor="middle">
          <text x="600" y="316" fontSize="23" letterSpacing="3">GOOGOL</text>
          <text x="600" y="342" fontSize="9" letterSpacing="2">
            DISTRIBUTED SEARCH
          </text>
          <text x="300" y="203" fontSize="10">SEARCH</text>
          <text x="900" y="203" fontSize="10">INDEX</text>
          <text x="300" y="493" fontSize="10">JAVA RMI</text>
          <text x="900" y="493" fontSize="9">POSTGRESQL</text>
        </g>
        <g fill="#f1f1f1">
          {[
            [440, 256],
            [760, 256],
            [434, 414],
            [766, 414],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" />
          ))}
        </g>
        <g fill="#888" fontFamily="monospace" fontSize="10" letterSpacing="1">
          <text x="55" y="62">JAVA / RMI / POSTGRESQL</text>
          <text x="55" y="625">CONNECTED SYSTEMS. DISTRIBUTED INFORMATION.</text>
          <text x="845" y="625">CONCEPTUAL ARCHITECTURE</text>
        </g>
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <header id="top">
        <nav aria-label="Main navigation">
          <a href="#work">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-top micro">
            <span>SOFTWARE / AI & DATA</span>
            <span>
              COIMBRA, PORTUGAL
              <br />
              PORTFOLIO
            </span>
          </div>

          <div className="hero-name-row">
            <h1 id="hero-title">
              JOSÉ
              <br />
              AMADO
            </h1>
            <figure className="hero-portrait">
              <div className="portrait-frame">
                <img
                  src={portrait}
                  alt="Retrato editorial temporário para a apresentação de José Amado"
                />
                <span className="portrait-number micro"></span>
              </div>
              <figcaption className="micro">
              </figcaption>
            </figure>
          </div>

          <div className="hero-bottom">
            <p>
              Building software, intelligent systems
              <br />
              and data-driven solutions.
            </p>
            <a href="#work" className="micro">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="section-label micro">
            <h2 id="work-title">SELECTED WORK</h2>
            <span>FOUR PROJECTS. DIFFERENT QUESTIONS.</span>
            <span>(01—04)</span>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project" key={project.id}>
                <a
                  className="project-visual"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Explore ${project.title} on GitHub`}
                >
                  <ProjectVisual index={index} />
                  <span className="visual-footer micro">
                    {project.label}
                    <Arrow />
                  </span>
                </a>
                <div className="project-copy">
                  <span className="micro project-index">
                    PROJECT / {project.id}
                  </span>
                  <h3>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.title}
                      <Arrow />
                    </a>
                  </h3>
                  <p className="micro category">{project.category}</p>
                  <p className="project-description">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-label micro">
            <span>BEHIND THE WORK</span>
            <span>(05)</span>
          </div>
          <div className="about-layout">
            <h2 id="about-title">ABOUT</h2>
            <div className="about-copy">
              <p className="about-intro">
                I’m an Informatics Engineer and Data Scientist{" "}
                <span>
                  interested in building things, working with data, and
                  exploring AI.
                </span>
              </p>
              <p className="about-text">
                I enjoy building systems that combine technical depth with
                practical applications, from machine learning and data analysis
                to software systems and AI-powered tools.
              </p>
              <div className="about-details">
                <AboutDisclosure title="EXPERIENCE">
                  <dl>
                    <dt>NEXUS TEAM</dt>
                    <dd>
                      Tech Lead of a software engineering team project. Technical leadership,
                      teamwork, and project development.
                    </dd>
                    <dt>HACKATHONS</dt>
                    <dd>
                      RESET — 2024
                      <br />
                      RESET — 2025
                      <br />
                      ShiftHappens — 2025
                    </dd>
                  </dl>
                </AboutDisclosure>
                <AboutDisclosure title="EDUCATION">
                  <div className="education-list">
                    <p>
                      <strong>AI AND DATA SCIENCE MASTER&apos;S DEGREE</strong>
                      <span>University of Coimbra</span>
                      <span>Coimbra, Portugal</span>
                    </p>
                    <p>
                      <strong>
                        INFORMATICS ENGINEERING BACHELOR&apos;S DEGREE
                      </strong>
                      <span>University of Coimbra</span>
                      <span>Coimbra, Portugal</span>
                    </p>
                  </div>
                </AboutDisclosure>
                <AboutDisclosure title="FOCUS">
                  <ul className="focus-list">
                    <li>ARTIFICIAL INTELLIGENCE</li>
                    <li>MACHINE LEARNING</li>
                    <li>DATA SCIENCE</li>
                    <li>DATA ANALYSIS</li>
                    <li>SOFTWARE ENGINEERING</li>
                  </ul>
                </AboutDisclosure>
                <AboutDisclosure title="TECHNOLOGIES">
                  <dl>
                    <dt>PROGRAMMING LANGUAGES</dt>
                    <dd>Python · Java · C · C# · SQL</dd>
                    <dt>AI &amp; DATA</dt>
                    <dd>
                      PostgreSQL · Pandas · NumPy · Matplotlib · Seaborn ·
                      Scikit-learn · PyTorch · LLMs · AI Agents
                    </dd>
                    <dt>SOFTWARE</dt>
                    <dd>Git · Docker · GitHub CI/CD · Postman</dd>
                  </dl>
                </AboutDisclosure>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-label micro">
            <span>OPEN TO CONVERSATIONS</span>
            <span>(06)</span>
          </div>
          <h2 id="contact-title">
            GET IN
            <br />
            TOUCH.
          </h2>
          <div className="contact-links">
            <a href="mailto:josegaspamado@gmail.com">
              EMAIL <Arrow />
            </a>
            <a href="https://github.com/zelario" target="_blank" rel="noreferrer">
              GITHUB <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/jose-gaspar-amado/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="micro">
        <a href="#top">JOSÉ AMADO</a>
        <span>COIMBRA, PT</span>
        <span>2026</span>
      </footer>
    </>
  );
}
