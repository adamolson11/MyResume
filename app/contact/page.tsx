import Link from "next/link";
import { ContactActions } from "@/app/components/ContactActions";
import { ContactForm } from "@/app/components/ContactForm";
import { FORMSPREE_ENDPOINT } from "@/app/lib/contact";

export default function ContactPage() {
  return (
    <main className="flex flex-1">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 lg:grid-cols-5">
        <section className="space-y-5 rounded-3xl bg-slate-900 p-8 text-slate-100 lg:col-span-2">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase">
            Contact
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">Let&apos;s Connect</h1>
          <p className="text-sm leading-7 text-slate-200">
            I&apos;m currently open to remote QA, application support, technical
            support, and IT support opportunities. The best way to reach me is
            through the contact form below.
          </p>
          <ContactActions dark />
          <Link
            href="/"
            className="inline-block text-sm text-slate-300 underline underline-offset-4 transition-colors hover:text-white"
          >
            Back to Home
          </Link>
        </section>

        <div className="space-y-4 lg:col-span-3">
          <ContactForm endpoint={FORMSPREE_ENDPOINT} />
        </div>
      </div>
    </main>
  );
}
