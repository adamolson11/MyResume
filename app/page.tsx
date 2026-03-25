import { ContactActions } from "@/app/components/ContactActions";
import { HomeEnhancements } from "@/app/components/HomeEnhancements";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "@/app/lib/contact";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hi, my name is</p>
          <h1 className="hero-name">Adam Olson</h1>
          <h2 className="hero-title">QA / Application Support Professional</h2>
          <p className="hero-description">
            I help teams find problems before users do. With a background in product
            support, onboarding, and technical troubleshooting, I&apos;m actively
            growing into QA and application support while building dependable
            support-minded workflows through EchoHelp.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            {RESUME_URL ? (
              <a href={RESUME_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            ) : (
              <span className="btn btn-outline btn-disabled">Resume available on request</span>
            )}
            <a href="/contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
          <div className="hero-social">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <a href="#about" aria-label="Scroll down">
            ↓
          </a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid reveal-target">
            <div className="about-text">
              <p>
                I have a background in product support, onboarding, and technical
                troubleshooting. Over the years I&apos;ve helped users understand
                software, investigated and escalated issues, and worked to bridge the
                gap between technical teams and the people relying on their products
                at companies including HindSite Software, Thomson Reuters, and FIS.
              </p>
              <p>
                I completed a full-stack development program and have been applying
                that training toward QA, application support, and technical support
                roles. Right now I&apos;m building <strong>EchoHelp</strong>, a personal
                project where I can practice support workflows, acceptance criteria,
                testing fundamentals, and documentation habits in a realistic way.
              </p>
              <p>
                I&apos;m looking for a team where I can contribute as a detail-oriented,
                technically curious support or QA professional and keep growing from
                there.
              </p>
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
            </div>
            <div className="about-image">
              <div className="about-image-wrapper">
                <div className="about-initials">AO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category reveal-target">
              <h3>QA &amp; Support</h3>
              <ul>
                <li>Manual testing and regression checks</li>
                <li>Bug documentation and escalation</li>
                <li>Acceptance criteria validation</li>
                <li>Customer issue troubleshooting</li>
                <li>Product support and case handling</li>
                <li>User onboarding and training</li>
              </ul>
            </div>
            <div className="skill-category reveal-target">
              <h3>Web &amp; Technical</h3>
              <ul>
                <li>HTML, CSS, JavaScript, and React fundamentals</li>
                <li>Supporting web-based applications</li>
                <li>REST API basics</li>
                <li>Git and GitHub workflows</li>
                <li>SQL basics for troubleshooting</li>
              </ul>
            </div>
            <div className="skill-category reveal-target">
              <h3>Tools &amp; Workflow</h3>
              <ul>
                <li>Playwright foundations</li>
                <li>VS Code and terminal workflows</li>
                <li>Jira and ticket-based support practices</li>
                <li>Technical documentation</li>
                <li>Knowledge base updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item reveal-target">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">2022 – Present</span>
                <h3>Application Support Specialist</h3>
                <h4>FIS</h4>
                <ul>
                  <li>
                    Provide technical support for financial software applications
                    across multiple client environments.
                  </li>
                  <li>
                    Investigate and document software defects, then communicate
                    findings and next steps with internal teams.
                  </li>
                  <li>
                    Help onboard new clients by explaining product functionality and
                    common support workflows.
                  </li>
                  <li>
                    Maintain support documentation and contribute to knowledge base
                    improvements.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal-target">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">2020 – 2022</span>
                <h3>Technical Support Analyst</h3>
                <h4>Thomson Reuters</h4>
                <ul>
                  <li>
                    Supported legal and compliance software users through tickets,
                    chat, and phone troubleshooting.
                  </li>
                  <li>
                    Escalated recurring defects with reproducible details and clear
                    customer impact notes.
                  </li>
                  <li>
                    Contributed to user-facing support articles and internal
                    troubleshooting guides.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal-target">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">2018 – 2020</span>
                <h3>Product Support &amp; Onboarding Specialist</h3>
                <h4>HindSite Software</h4>
                <ul>
                  <li>
                    Onboarded and trained new customers on field service management
                    software and core workflows.
                  </li>
                  <li>
                    Diagnosed configuration issues and user-reported product bugs as
                    part of day-to-day support.
                  </li>
                  <li>
                    Acted as a liaison between customers and development teams for
                    prioritization and follow-up.
                  </li>
                </ul>
              </div>
            </div>
            <div className="timeline-item reveal-target">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-date">Completed 2022</span>
                <h3>Full Stack Development Program</h3>
                <h4>Bootcamp / Training Program</h4>
                <ul>
                  <li>
                    Completed intensive training covering HTML, CSS, JavaScript,
                    React, Node.js, and SQL fundamentals.
                  </li>
                  <li>
                    Applied that training to personal projects including EchoHelp
                    and this portfolio site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <article className="project-card project-card--featured reveal-target">
              <div className="project-header">
                <span className="project-icon">EH</span>
                <div className="project-links">
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <h3>
                EchoHelp <span className="project-badge">Active</span>
              </h3>
              <p>
                A personal software project built to sharpen product thinking and QA
                fundamentals hands-on. EchoHelp gives me a place to practice support
                workflows, acceptance criteria, testing patterns, and documentation
                outside of a classroom.
              </p>
              <div className="project-tags">
                <span>JavaScript</span>
                <span>QA Mindset</span>
                <span>Support Workflows</span>
                <span>Playwright</span>
              </div>
            </article>

            <article className="project-card reveal-target">
              <div className="project-header">
                <span className="project-icon">MR</span>
                <div className="project-links">
                  <a
                    href="https://github.com/adamolson11/MyResume"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <h3>MyResume</h3>
              <p>
                The resume site you&apos;re viewing now, updated in Next.js to keep the
                current contact architecture while preserving the visual structure of
                the original static design.
              </p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>Responsive UI</span>
                <span>Formspree</span>
              </div>
            </article>
          </div>
          <div className="projects-more">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View More on GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I&apos;m actively looking for QA, application support, and technical support
            roles. The secure contact form remains available on the dedicated contact
            page, and you can also use the fallback options below.
          </p>
          <div className="contact-links reveal-target">
            <a href="/contact" className="contact-link-card">
              <span className="contact-link-card__icon">→</span>
              <span>
                <strong>Secure Contact Form</strong>
                Send a message through the live Formspree-backed contact page.
              </span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link-card">
              <span className="contact-link-card__icon">@</span>
              <span>
                <strong>Email Fallback</strong>
                {CONTACT_EMAIL}
              </span>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-link-card">
              <span className="contact-link-card__icon">GH</span>
              <span>
                <strong>GitHub</strong>
                github.com/adamolson11
              </span>
            </a>
            {RESUME_URL ? (
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                <span className="contact-link-card__icon">PDF</span>
                <span>
                  <strong>Resume PDF</strong>
                  Download the current resume.
                </span>
              </a>
            ) : (
              <div className="contact-link-card contact-link-card--static">
                <span className="contact-link-card__icon">…</span>
                <span>
                  <strong>Resume</strong>
                  Resume PDF is not linked yet and is available on request.
                </span>
              </div>
            )}
          </div>
          <ContactActions compact dark />
        </div>
      </section>
      <HomeEnhancements />
    </main>
  );
}
