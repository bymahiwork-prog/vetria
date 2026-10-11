"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

// Only the agreed pages. The logo links to the homepage; Get featured is the gold button.
// "Features" opens the feature article page: point it at the latest story as you publish.
const links = [
  { label: "Features", href: "/features/sample-story" },
  { label: "About", href: "/about" },
  { label: "Editorial policy", href: "/editorial-policy" },
  { label: "Newsletter", href: "/newsletter" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="vetria-nav">
        <div className="vetria-container vetria-nav__inner">
          <Link href="/" className="vetria-nav__brand" aria-label="Vetria home">
            <Wordmark size={40} />
          </Link>

          <button
            className="vetria-nav__toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="vetria-main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <nav
            id="vetria-main-nav"
            className={`vetria-nav__links ${menuOpen ? "is-open" : ""}`}
            aria-label="Main"
          >
            {links.map((link) => {
              const current = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className={current ? "is-current" : undefined}
                  aria-current={current ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/get-featured"
              className="vetria-btn vetria-btn--gold vetria-nav__cta"
              onClick={close}
            >
              Get featured
            </Link>
          </nav>
        </div>
      </header>

      <style>{`
        .vetria-nav {
          position: relative;
          z-index: 20;
          background: var(--cream);
          border-bottom: 1px solid var(--rule);
        }

        .vetria-nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-block: 20px;
        }

        .vetria-nav__links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 15px;
          font-weight: 600;
        }

        .vetria-nav__links > a:not(.vetria-nav__cta):hover,
        .vetria-nav__links > a.is-current {
          color: var(--gold-text);
        }

        .vetria-nav__toggle {
          display: none;
          width: 44px;
          height: 44px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          background: transparent;
        }

        .vetria-nav__toggle span {
          width: 18px;
          height: 1px;
          background: var(--espresso);
        }

        @media (max-width: 860px) {
          .vetria-nav__toggle {
            display: flex;
          }

          .vetria-nav__links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 8px var(--page-gutter) 24px;
            background: var(--cream);
            border-bottom: 1px solid var(--rule);
          }

          .vetria-nav__links.is-open {
            display: flex;
          }

          .vetria-nav__links > a:not(.vetria-nav__cta) {
            padding: 16px 0;
            border-bottom: 1px solid var(--rule);
          }

          .vetria-nav__cta {
            margin-top: 16px;
          }
        }
      `}</style>
    </>
  );
}
