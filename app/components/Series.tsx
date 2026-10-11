import { series } from "../content/home";

export default function Series() {
  return (
    <>
      <section
        id="series"
        className="vetria-container vetria-series"
        aria-labelledby="vetria-series-title"
      >
        <div className="vetria-section-head">
          <h2 id="vetria-series-title">Series</h2>
        </div>

        <div className="vetria-series__grid">
          {series.map((item) => (
            <a key={item.title} href={item.href} className="vetria-series__card">
              <span className="vetria-series__name">{item.title}</span>
              <span className="vetria-series__text">{item.text}</span>
            </a>
          ))}
        </div>
      </section>

      <style>{`
        .vetria-series {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-block: var(--space-6);
        }

        .vetria-series__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .vetria-series__card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 32px 24px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
        }

        .vetria-series__card:hover {
          border-color: var(--gold);
        }

        .vetria-series__name {
          font-family: var(--font-display);
          font-size: 30px;
          font-style: italic;
          line-height: 36px;
        }

        .vetria-series__text {
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }
      `}</style>
    </>
  );
}
