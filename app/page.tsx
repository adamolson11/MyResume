import Link from "next/link";
import { ContactActions } from "@/app/components/ContactActions";

export default function Home() {
  return (
    <main className="flex flex-1">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 md:grid-cols-5">
        <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
            Professional Profile
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Adam Olson
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Remote-ready support professional focused on QA, application
            support, technical support, and IT support. I build dependable
            workflows, document clearly, and help teams resolve issues quickly.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-5 py-2.5 font-medium text-white transition-colors hover:bg-slate-700"
            >
              Contact
            </Link>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-5 py-2.5 font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900"
            >
              Jump to Contact Section
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="space-y-6 rounded-3xl bg-slate-900 p-8 text-slate-100 shadow-sm md:col-span-2"
        >
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="text-sm leading-7 text-slate-200">
            I&apos;m currently open to remote QA, application support, technical
            support, and IT support opportunities. The best way to reach me is
            through the contact form below.
          </p>
          <div className="space-y-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-300"
            >
              Send Message
            </Link>
            <ContactActions compact dark />
          </div>
        </section>
      </div>
    </main>
  );
}
