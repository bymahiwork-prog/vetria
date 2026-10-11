import Link from "next/link";
import Wordmark from "./Wordmark";

// Compact espresso footer used on Get featured and Editorial policy.
export default function SimpleFooter() {
  return (
    <>
      <footer className="vetria-simple-footer">
        <div className="vetria-container vetria-simple-footer__inner">
          <Link href="/" aria-label="Vitrea home">
            <Wordmark size={28} tone="light" />
          </Link>
          <span>Paid partnerships are always labelled Sponsored. © 2026 Vitrea</span>
        </div>
      </footer>

      <style>{`
        .vetria-simple-footer {
          background: var(--espresso);
          color: var(--muted-on-dark);
        }

        .vetria-simple-footer__inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-block: 32px;
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
