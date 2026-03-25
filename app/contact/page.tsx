import Link from "next/link";
import { ContactActions } from "@/app/components/ContactActions";
import { ContactForm } from "@/app/components/ContactForm";
import {
  CONTACT_EMAIL,
  FORMSPREE_ENDPOINT,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "@/app/lib/contact";

export default function ContactPage() {
  return (
    <main className="contact-route">
      <section>
        <div className="container">
          <div className="contact-page-grid">
            <section className="contact-page-intro">
              <span className="eyebrow">Contact</span>
              <h1 className="page-title">Let&apos;s Connect</h1>
              <p className="page-copy">
                I&apos;m currently open to remote QA, application support, technical
                support, and IT support opportunities. This page keeps the existing
                Formspree contact flow intact while offering direct fallback options.
              </p>
              <div className="contact-links">
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link-card">
                  <span className="contact-link-card__icon">@</span>
                  <span>
                    <strong>Email</strong>
                    {CONTACT_EMAIL}
                  </span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                  <span className="contact-link-card__icon">in</span>
                  <span>
                    <strong>LinkedIn</strong>
                    Professional profile and networking
                  </span>
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                  <span className="contact-link-card__icon">GH</span>
                  <span>
                    <strong>GitHub</strong>
                    View projects and recent work
                  </span>
                </a>
                {RESUME_URL ? (
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="contact-link-card">
                    <span className="contact-link-card__icon">PDF</span>
                    <span>
                      <strong>Resume PDF</strong>
                      Download the latest resume
                    </span>
                  </a>
                ) : (
                  <div className="contact-link-card contact-link-card--static">
                    <span className="contact-link-card__icon">…</span>
                    <span>
                      <strong>Resume</strong>
                      Resume PDF is not wired yet and is available on request.
                    </span>
                  </div>
                )}
              </div>
              <ContactActions dark />
              <p>
                <Link href="/" className="text-link">
                  Back to Home
                </Link>
              </p>
            </section>

            <div>
              <ContactForm endpoint={FORMSPREE_ENDPOINT} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
