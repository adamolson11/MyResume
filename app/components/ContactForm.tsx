"use client";

import { FormEvent, useMemo, useState } from "react";

type ContactFormProps = {
  endpoint: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ endpoint }: ContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const endpointReady = useMemo(() => endpoint.length > 0, [endpoint]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    if (!endpointReady) {
      event.preventDefault();
      setSubmitState("error");
      setErrorMessage("Contact form is not active yet. Please use Copy Email for now.");
      return;
    }

    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Trim incoming values before submission without changing field names.
    for (const key of ["name", "email", "message"]) {
      const value = formData.get(key);
      if (typeof value === "string") {
        formData.set(key, value.trim());
      }
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (
      typeof name !== "string" ||
      !name ||
      typeof email !== "string" ||
      !email ||
      typeof message !== "string" ||
      !message
    ) {
      setSubmitState("error");
      setErrorMessage("Please complete name, email, and message before sending.");
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        let detail = "Submission failed. Please try again in a moment.";
        const payload = (await response.json().catch(() => null)) as
          | { errors?: Array<{ message?: string }> }
          | null;
        const firstError = payload?.errors?.[0]?.message;
        if (firstError) {
          detail = firstError;
        }
        setSubmitState("error");
        setErrorMessage(detail);
        return;
      }

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
      setErrorMessage(
        "Network error prevented sending your message. Please retry or use Copy Email."
      );
    }
  }

  if (!endpointReady) {
    return (
      <section className="contact-form-card">
        <h2>Send Message</h2>
        <p className="contact-form-card__intro">
          Contact form activation is pending Formspree setup. For now, use the
          Copy Email action below.
        </p>
        <div className="contact-placeholder">
          <p className="status-message status-message--warning">
            Formspree endpoint not configured yet. Copy Email remains available.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form-card">
      <h2>Send Message</h2>
      <p className="contact-form-card__intro">
        Use the secure contact form below. Messages continue to submit through
        the existing Formspree flow.
      </p>
      <form onSubmit={onSubmit} action={endpoint} method="POST" className="contact-form">
        <div className="contact-form-row">
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="contact-input"
          />
        </div>

        <div className="contact-form-row">
          <label htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="contact-input"
          />
        </div>

        <div className="contact-form-row">
          <label htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="contact-input"
          />
        </div>

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="btn btn-primary"
        >
          {submitState === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div aria-live="polite" className="contact-status">
        {submitState === "success" && (
          <p className="status-message status-message--success">
            Message sent successfully.
          </p>
        )}
        {submitState === "error" && (
          <p className="status-message status-message--error">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}
