import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Olson | Support and QA",
  description:
    "Portfolio and contact page for Adam Olson, open to QA, application support, technical support, and IT support roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-100 text-slate-900">
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.18em] text-slate-700 uppercase"
            >
              Adam Olson
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
              <Link href="/" className="transition-colors hover:text-slate-900">
                Home
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-slate-700"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
