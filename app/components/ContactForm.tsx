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
      <section className="space-y-4 rounded-2xl border border-amber-300 bg-amber-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Send Message</h2>
        <p className="text-sm leading-6 text-slate-700">
          Contact form activation is pending Formspree setup. For now, use the
          Copy Email action below.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900">Send Message</h2>
      <form onSubmit={onSubmit} action={endpoint} method="POST" className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-500"
          />
        </div>

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500"
        >
          {submitState === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div aria-live="polite" className="text-sm">
        {submitState === "success" && (
          <p className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-800">
            Message sent successfully.
          </p>
        )}
        {submitState === "error" && (
          <p className="rounded-lg border border-rose-300 bg-rose-50 px-3 py-2 text-rose-800">
            {errorMessage}
          </p>
        )}
      </div>
    </section>
  );
}
