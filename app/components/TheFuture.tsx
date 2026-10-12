import Link from "next/link";
import { future } from "../content/home";

export default function TheFuture() {
  return (
    <>
      <section id="future" className="vetria-future" aria-labelledby="vetria-future-title">
        <div className="vetria-container vetria-future__inner">
          <div className="vetria-future__intro">
            <span className="vetria-kicker vetria-future__kicker">{future.kicker}</span>
            <h2 id="vetria-future-title" className="vetria-future__title">
              {future.title}
            </h2>
            <p className="vetria-future__text">{future.intro}</p>
            <Link href={future.cta.href} className="vetria-btn vetria-btn--outline-dark">
              {future.cta.label}
            </Link>
          </div>

          <ol className="vetria-future__list">
            {future.articles.map((article, i) => (
              <li key={i}>
                {(() => {
                  const inner = (
                    <>
                      <span className="vetria-future__num" aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="vetria-future__copy">
                        <span className="vetria-future__item-title">{article.title}</span>
                        <span className="vetria-future__meta">{article.meta}</span>
                      </span>
                    </>
                  );
                  return article.href ? (
                    <Link href={article.href} className="vetria-future__item">
                      {inner}
                    </Link>
                  ) : (
                    <div className="vetria-future__item vetria-future__item--soon">{inner}</div>
                  );
                })()}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <style>{`
        .vetria-future {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-future__inner {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          padding-block: var(--space-6);
        }

        .vetria-future__intro {
          flex: 1 1 320px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .vetria-future__kicker {
          color: var(--gold-on-dark);
        }

        .vetria-future__title {
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.12;
        }

        .vetria-future__text {
          color: var(--muted-on-dark);
          line-height: 28px;
        }

        .vetria-future__list {
          flex: 2 1 480px;
          min-width: 0;
        }

        .vetria-future__list li + li {
          border-top: 1px solid var(--rule-on-dark);
        }

        .vetria-future__item {
          display: flex;
          align-items: baseline;
          gap: 24px;
          padding-block: 24px;
        }

        .vetria-future__num {
          min-width: 40px;
          color: var(--gold-on-dark);
          font-family: var(--font-display);
          font-size: 32px;
          font-style: italic;
        }

        .vetria-future__copy {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vetria-future__item-title {
          font-family: var(--font-display);
          font-size: 24px;
          line-height: 30px;
          transition: color var(--transition-fast);
        }

        .vetria-future__item:hover .vetria-future__item-title {
          color: var(--gold-on-dark);
        }

        .vetria-future__item--soon:hover .vetria-future__item-title {
          color: inherit;
        }

        .vetria-future__meta {
          color: var(--muted-on-dark);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
