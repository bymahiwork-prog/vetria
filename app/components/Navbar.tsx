"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "THE EDIT", href: "#latest" },
    { label: "BUSINESS", href: "#future" },
    { label: "CULTURE", href: "#series" },
    { label: "OUR STORY", href: "#about" },
  ];

  return (
    <>
      <header className="vetria-nav">
        <a
          href="/"
          className="vetria-nav__brand"
          aria-label="Vetria home"
        >
          vetria<span>.</span>
          <small>THE ART OF WHAT'S NEXT</small>
        </a>

        <nav
          className={`vetria-nav__links ${
            menuOpen ? "is-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#newsletter"
            className="vetria-nav__subscribe"
            onClick={() => setMenuOpen(false)}
          >
            SUBSCRIBE <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="vetria-nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <style>{`
        .vetria-nav {
          position: relative;
          z-index: 20;
          width: 100%;
          min-height: 100px;
          padding: 22px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          background: #f3ecd9;
          color: #291b14;
          border-bottom: 1px solid #dfd2b6;
        }

        .vetria-nav__brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          color: #291b14;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 43px;
          line-height: 0.95;
          letter-spacing: -2px;
          text-decoration: none;
          white-space: nowrap;
        }

        .vetria-nav__brand > span {
          display: inline;
          color: #c4a04d;
        }

        .vetria-nav__brand small {
          margin-top: 9px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 8px;
          line-height: 1.5;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .vetria-nav__links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: clamp(18px, 2.5vw, 38px);
        }

        .vetria-nav__links > a {
          color: #45382d;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 1.2px;
          text-decoration: none;
          white-space: nowrap;
          transition: color 180ms ease;
        }

        .vetria-nav__links > a:hover {
          color: #a17c2e;
        }

        .vetria-nav__links > .vetria-nav__subscribe {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #291b14;
          color: #f3ecd9;
          border: 1px solid #291b14;
        }

        .vetria-nav__links > .vetria-nav__subscribe:hover {
          background: #45382d;
          color: #ffffff;
        }

        .vetria-nav__toggle {
          display: none;
          width: 42px;
          height: 42px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: transparent;
          border: 1px solid #dfd2b6;
          color: #291b14;
        }

        .vetria-nav__toggle span {
          display: block;
          width: 18px;
          height: 1px;
          background: currentColor;
        }

        @media (max-width: 900px) {
          .vetria-nav {
            min-height: 88px;
            padding: 20px 24px;
          }

          .vetria-nav__brand {
            font-size: 38px;
          }

          .vetria-nav__toggle {
            display: flex;
            flex-shrink: 0;
          }

          .vetria-nav__links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: none;
            align-items: stretch;
            flex-direction: column;
            gap: 0;
            padding: 12px 24px 24px;
            background: #f3ecd9;
            border-bottom: 1px solid #dfd2b6;
          }

          .vetria-nav__links.is-open {
            display: flex;
          }

          .vetria-nav__links > a {
            padding: 16px 0;
            border-bottom: 1px solid #dfd2b6;
          }

          .vetria-nav__links > .vetria-nav__subscribe {
            justify-content: space-between;
            margin-top: 16px;
            padding: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vetria-nav__links > a {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
