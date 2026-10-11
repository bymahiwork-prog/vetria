import Link from "next/link";
import { coverStory } from "../content/home";
import StoryImage from "./StoryImage";

export default function CoverStory() {
  return (
    <>
      <section className="vetria-cover" aria-labelledby="vetria-cover-title">
        <div className="vetria-container vetria-cover__inner">
          <div className="vetria-cover__text">
            <div className="vetria-cover__labels">
              <span className="vetria-badge">Vitrea Feature</span>
              <span className="vetria-kicker">{coverStory.kicker}</span>
            </div>

            <h2 id="vetria-cover-title" className="vetria-cover__title">
              {coverStory.title}
            </h2>

            <p className="vetria-cover__standfirst">{coverStory.standfirst}</p>
            <p className="vetria-cover__byline">{coverStory.byline}</p>

            <div className="vetria-rule" />

            <Link href={coverStory.href} className="vetria-text-link">
              Read the story <span aria-hidden="true">→</span>
            </Link>
          </div>

          <StoryImage
            src={coverStory.image}
            alt={coverStory.imageAlt}
            height={520}
            position={coverStory.imagePosition}
            sizes="(max-width: 860px) 100vw, 600px"
            priority
            className="vetria-cover__image"
          />
        </div>
      </section>

      <style>{`
        .vetria-cover__inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 48px;
          padding-block: var(--space-6);
        }

        .vetria-cover__text {
          flex: 1 1 420px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .vetria-cover__labels {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .vetria-cover__title {
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.5px;
        }

        .vetria-cover__standfirst {
          max-width: 560px;
          font-size: 19px;
          font-weight: 500;
          line-height: 28px;
        }

        .vetria-cover__byline {
          color: var(--ink-muted);
          font-size: 13px;
          line-height: 18px;
        }

        .vetria-cover__image {
          flex: 1 1 420px;
          min-width: 0;
        }

        @media (max-width: 600px) {
          .vetria-cover__inner {
            padding-block: var(--space-5);
            gap: 32px;
          }

          .vetria-cover__image {
            height: 360px !important;
          }
        }
      `}</style>
    </>
  );
}
