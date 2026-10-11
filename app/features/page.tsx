import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SimpleFooter from "../components/SimpleFooter";
import StoryImage from "../components/StoryImage";
import JsonLd from "../components/JsonLd";
import { absoluteUrl, pageMeta, site } from "../lib/site";
import { publishedStories } from "../content/stories";

export const metadata: Metadata = pageMeta({
  path: "/features",
  title: "Features: stories of independent businesses and founders",
  description:
    "Every Vitrea feature in one place: in-depth stories of independent cafés, restaurants, brands and the founders behind them.",
});

// Newest first. Drafts never appear here.
const features = publishedStories().sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""));

const listSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${site.name} Features`,
  url: absoluteUrl("/features"),
  isPartOf: { "@id": absoluteUrl("/#website") },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: features.map((story, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/features/${story.slug}`),
      name: story.title,
    })),
  },
};

export default function FeaturesPage() {
  return (
    <>
      <JsonLd data={listSchema} />
      <Navbar />

      <main id="main">
        <section className="vetria-container vetria-features__intro" aria-label="Introduction">
          <span className="vetria-kicker">Features</span>
          <h1 className="vetria-features__title">Stories of the businesses building what&apos;s next</h1>
          <p className="vetria-features__lead">
            In-depth stories of independent businesses and the people behind them: the decisions, the
            spaces and what other owners can learn from them.
          </p>
          <div className="vetria-rule" />
        </section>

        <section className="vetria-container vetria-features__list" aria-label="All features">
          {features.length > 0 ? (
            <div className="vetria-features__grid">
              {features.map((story) => (
                <article key={story.slug}>
                  <Link href={`/features/${story.slug}`} className="vetria-features__card">
                    <StoryImage
                      src={story.heroImage}
                      alt=""
                      aspectRatio="3 / 2"
                      position={story.heroPosition}
                      sizes="(max-width: 860px) 100vw, 400px"
                    />
                    <span className="vetria-kicker">{story.kicker}</span>
                    <h2 className="vetria-features__card-title">{story.title}</h2>
                    <p className="vetria-features__card-text">{story.standfirst}</p>
                    <span className="vetria-features__meta">
                      {story.date} · {story.readTime}
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="vetria-features__empty">The first stories are on their way.</p>
          )}
        </section>

        <section className="vetria-features__cta" aria-labelledby="features-cta-title">
          <div className="vetria-container vetria-features__cta-inner">
            <h2 id="features-cta-title" className="vetria-features__cta-title">
              Building something worth a story?
            </h2>
            <Link href="/get-featured" className="vetria-btn vetria-btn--primary">
              Tell us your story
            </Link>
          </div>
        </section>
      </main>

      <SimpleFooter />

      <style>{`
        .vetria-features__intro {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 72px 0 48px;
        }

        .vetria-features__title {
          max-width: 820px;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.06;
        }

        .vetria-features__lead {
          max-width: 680px;
          font-size: 19px;
          line-height: 30px;
        }

        .vetria-features__list {
          padding-bottom: var(--space-6);
        }

        .vetria-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 48px 32px;
        }

        .vetria-features__card {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vetria-features__card-title {
          font-size: 24px;
          font-weight: 600;
          line-height: 30px;
          transition: color var(--transition-fast);
        }

        .vetria-features__card:hover .vetria-features__card-title {
          color: var(--gold-text);
        }

        .vetria-features__card-text {
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-features__meta {
          color: var(--ink-muted);
          font-size: 13px;
        }

        .vetria-features__empty {
          color: var(--ink-muted);
        }

        .vetria-features__cta {
          background: var(--paper);
          border-top: 1px solid var(--rule);
        }

        .vetria-features__cta-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-block: 56px;
        }

        .vetria-features__cta-title {
          font-size: clamp(26px, 3vw, 34px);
          line-height: 1.2;
        }

        @media (max-width: 600px) {
          .vetria-features__intro {
            padding-block: var(--space-5) var(--space-4);
          }
        }
      `}</style>
    </>
  );
}
