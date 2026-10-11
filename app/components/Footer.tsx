import Link from "next/link";
import { footerLinks } from "../content/home";
import Wordmark from "./Wordmark";

export default function Footer() {
  return (
    <>
      <footer id="about" className="vetria-footer">
        <div className="vetria-container vetria-footer__inner">
          <div className="vetria-footer__top">
            <div className="vetria-footer__brand">
              <Wordmark size={32} tone="light" />
              <p>Stories of the businesses building what&apos;s next.</p>
            </div>

            <div className="vetria-footer__cols">
              {footerLinks.map((col) => (
                <nav key={col.heading} aria-label={col.heading} className="vetria-footer__col">
                  <span className="vetria-kicker vetria-footer__heading">{col.heading}</span>
                  {col.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
              ))}
            </div>
          </div>

          <div className="vetria-footer__bottom">
            <span>© 2026 Vitrea</span>
            <span>Paid partnerships are always labelled Sponsored.</span>
          </div>
        </div>
      </footer>

      <style>{`
        .vetria-footer {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-footer__inner {
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding: 56px 0 32px;
        }

        .vetria-footer__top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 32px;
        }

        .vetria-footer__brand {
          max-width: 360px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vetria-footer__brand .vetria-wordmark {
          align-self: flex-start;
        }

        .vetria-footer__brand p {
          color: var(--muted-on-dark);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-footer__cols {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          font-size: 15px;
        }

        .vetria-footer__col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vetria-footer__heading {
          color: var(--gold-on-dark);
        }

        .vetria-footer__col a:hover {
          color: var(--gold-on-dark);
        }

        .vetria-footer__bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--rule-on-dark);
          color: var(--muted-on-dark);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
