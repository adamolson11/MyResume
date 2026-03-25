"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { RESUME_URL } from "@/app/lib/contact";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(isHome ? "" : "contact");

  const links = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        href:
          item.id === "contact" && !isHome ? "/contact" : isHome ? `#${item.id}` : `/#${item.id}`,
      })),
    [isHome]
  );

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  function closeMenu() {
    setMenuOpen(false);
  }

  const highlightedSection = isHome ? activeSection : "contact";

  return (
    <nav id="navbar" className={scrolled ? "scrolled" : undefined}>
      <div className="nav-container">
        <a href={isHome ? "#hero" : "/"} className="nav-logo" onClick={closeMenu}>
          Adam Olson
        </a>
        <button
          type="button"
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          {links.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={highlightedSection === item.id ? "active" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          {RESUME_URL ? (
            <a
              href={RESUME_URL}
              className="nav-resume"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          ) : (
            <span className="nav-resume nav-resume--disabled">Resume on request</span>
          )}
        </div>
      </div>
    </nav>
  );
}
