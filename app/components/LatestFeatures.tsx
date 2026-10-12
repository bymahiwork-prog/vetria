import Link from "next/link";
import { coverStory } from "../content/home";
import { latestStories } from "../content/stories";
import StoryImage from "./StoryImage";

// The three newest published stories, leaving out the one already shown as the cover story.
// The section hides itself until there is at least one.
export default function LatestFeatures() {
  const latest = latestStories()
    .filter((story) => `/features/${story.slug}` !== coverStory.href)
    .slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <>
      <section
        id="latest"
        className="vetria-container vetria-latest"
        aria-labelledby="vetria-latest-title"
      >
        <div className="vetria-section-head">
          <h2 id="vetria-latest-title">Latest features</h2>
          <Link href="/features" className="vetria-text-link">
            All features <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="vetria-latest__grid">
          {latest.map((story) => (
            <article key={story.slug}>
              <Link href={`/features/${story.slug}`} className="vetria-latest__card">
                <StoryImage
                  src={story.heroImage}
                  alt=""
                  height={240}
                  position={story.heroPosition}
                  sizes="(max-width: 860px) 100vw, 400px"
                  tileTitle={story.business.name}
                  tileLabel={story.kicker.split(" · ").slice(-1)[0]}
                />
                <span className="vetria-kicker">{story.kicker}</span>
                <h3 className="vetria-latest__title">{story.title}</h3>
                <span className="vetria-latest__meta">
                  {story.date} · {story.readTime}
                </span>
              </Link>
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
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
