import { latestFeatures } from "../content/home";
import StoryImage from "./StoryImage";

export default function LatestFeatures() {
  return (
    <>
      <section
        id="latest"
        className="vetria-container vetria-latest"
        aria-labelledby="vetria-latest-title"
      >
        <div className="vetria-section-head">
          <h2 id="vetria-latest-title">Latest features</h2>
          <a href="#latest" className="vetria-text-link">
            All features <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="vetria-latest__grid">
          {latestFeatures.map((story, i) => (
            <article key={i}>
              <a href={story.href} className="vetria-latest__card">
                <StoryImage src={story.image} alt={story.imageAlt} height={240} />
                <span className="vetria-kicker">{story.kicker}</span>
                <h3 className="vetria-latest__title">{story.title}</h3>
                <span className="vetria-latest__meta">{story.meta}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .vetria-latest {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: var(--space-6);
        }

        .vetria-latest__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .vetria-latest__card {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vetria-latest__title {
          font-size: 24px;
          font-weight: 600;
          line-height: 30px;
          transition: color var(--transition-fast);
        }

        .vetria-latest__card:hover .vetria-latest__title {
          color: var(--gold-text);
        }

        .vetria-latest__meta {
          color: var(--ink-muted);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
