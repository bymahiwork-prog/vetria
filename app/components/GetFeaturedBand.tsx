import Link from "next/link";
import { getFeatured } from "../content/home";
import Emblem from "./Emblem";

export default function GetFeaturedBand() {
  return (
    <>
      <section
        id="get-featured"
        className="vetria-getfeatured"
        aria-labelledby="vetria-getfeatured-title"
      >
        <div className="vetria-container vetria-getfeatured__inner">
          <Emblem size={160} />

          <div className="vetria-getfeatured__text">
            <h2 id="vetria-getfeatured-title" className="vetria-getfeatured__title">
              {getFeatured.title}
            </h2>
            <p className="vetria-getfeatured__body">{getFeatured.text}</p>
          </div>

          <Link href={getFeatured.cta.href} className="vetria-btn vetria-btn--gold vetria-getfeatured__cta">
            {getFeatured.cta.label}
          </Link>
        </div>
      </section>

      <style>{`
        .vetria-getfeatured {
          background: var(--paper);
          border-block: 1px solid var(--rule);
        }

        .vetria-getfeatured__inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 40px;
          padding-block: var(--space-6);
        }

        .vetria-getfeatured__text {
          flex: 1 1 360px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vetria-getfeatured__title {
          font-size: clamp(32px, 3.6vw, 44px);
          line-height: 1.14;
        }

        .vetria-getfeatured__body {
          max-width: 560px;
          color: var(--ink-muted);
          line-height: 28px;
        }

        .vetria-getfeatured__cta {
          min-height: 52px;
          padding-inline: 28px;
        }
      `}</style>
    </>
  );
}
