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

  const groupClass = compact ? "flex flex-wrap gap-2" : "flex flex-wrap gap-3";
  const buttonClass = dark
    ? "rounded-full border border-slate-500 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-slate-300 hover:bg-slate-800"
    : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900";
  const subtleClass = dark ? "text-xs text-slate-300" : "text-xs text-slate-500";

  return (
    <div className="space-y-2">
      <div className={groupClass}>
        <button type="button" onClick={onCopyEmail} className={buttonClass}>
          Copy Email
        </button>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          LinkedIn
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          GitHub
        </a>
      </div>
      <div className={subtleClass} aria-live="polite">
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
