"use client";

import { useState } from "react";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/app/lib/contact";

type ContactActionsProps = {
  compact?: boolean;
  dark?: boolean;
};

export function ContactActions({ compact = false, dark = false }: ContactActionsProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  async function onCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }

    setTimeout(() => {
      setCopyState("idle");
    }, 1800);
  }

  return (
    <div
      className={`contact-actions${compact ? " contact-actions--compact" : ""}${
        dark ? " contact-actions--dark" : ""
      }`}
    >
      <div className="contact-actions__group">
        <button type="button" onClick={onCopyEmail} className="contact-action-button">
          Copy Email
        </button>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action-button"
        >
          LinkedIn
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-action-button"
        >
          GitHub
        </a>
      </div>
      <div className="contact-actions__meta" aria-live="polite">
        {copyState === "copied" && "Email copied to clipboard."}
        {copyState === "failed" && "Could not copy email automatically. Use Email Fallback."}
        {copyState === "idle" && (
          <>
            Prefer your mail app?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
              Email Fallback
            </a>
          </>
        )}
      </div>
    </div>
  );
}
