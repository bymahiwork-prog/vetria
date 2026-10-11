import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import StoryImage from "../../components/StoryImage";
import { getStory, stories, type StoryBlock } from "../../content/stories";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return { title: `${story.title} — Vetria`, description: story.standfirst };
}

function Block({ block, first }: { block: StoryBlock; first: boolean }) {
  switch (block.type) {
    case "paragraph":
      return <p className={first ? "vetria-article__dropcap" : undefined}>{block.text}</p>;
    case "heading":
      return <h2 className="vetria-article__h2">{block.text}</h2>;
    case "quote":
      return (
        <blockquote className="vetria-article__quote">
          <p>“{block.text}”</p>
          <cite>{block.attribution}</cite>
        </blockquote>
      );
    case "image":
      return <StoryImage src={block.src} alt={block.alt} height={380} />;
  }
}

export default async function FeatureArticlePage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const firstParagraph = story.body.findIndex((b) => b.type === "paragraph");

  return (
    <>
      <Navbar />

      <main id="main">
        <article>
          <header className="vetria-article__head">
            <div className="vetria-article__labels">
              <span className="vetria-badge">Vetria Feature</span>
              <span className="vetria-kicker">{story.kicker}</span>
            </div>
            <h1 className="vetria-article__title">{story.title}</h1>
            <p className="vetria-article__standfirst">{story.standfirst}</p>
            <div className="vetria-article__byline">
              <span className="vetria-article__avatar" aria-hidden="true" />
              <span>
                By {story.writer} · {story.date} · {story.readTime}
              </span>
            </div>
            <div className="vetria-rule" />
          </header>

          <figure className="vetria-container vetria-article__hero">
            <StoryImage src={story.heroImage} alt={story.heroAlt} height={560} />
            <figcaption>{story.heroCaption}</figcaption>
          </figure>

          <div className="vetria-article__body">
            {story.body.map((block, i) => (
              <Block key={i} block={block} first={i === firstParagraph} />
            ))}

            <aside className="vetria-article__business" aria-label="About the business">
              <StoryImage src={story.business.logo} alt="" height={72} className="vetria-article__logo" />
              <div className="vetria-article__business-text">
                <span className="vetria-kicker">About the business</span>
                <span className="vetria-article__business-name">{story.business.name}</span>
                <span className="vetria-article__business-details">{story.business.details}</span>
              </div>
              <div className="vetria-article__business-links">
                <a href={story.business.website} className="vetria-text-link">
                  Website <span aria-hidden="true">→</span>
                </a>
                <a href={story.business.instagram} className="vetria-text-link">
                  Instagram <span aria-hidden="true">→</span>
                </a>
              </div>
            </aside>
          </div>
        </article>

        <section className="vetria-article__next" aria-labelledby="read-next-title">
          <div className="vetria-container vetria-article__next-inner">
            <h2 id="read-next-title" className="vetria-article__next-title">
              Read next
            </h2>
            <div className="vetria-article__next-grid">
              {story.readNext.map((item, i) => (
                <Link key={i} href={item.href} className="vetria-article__next-card">
                  <StoryImage src={item.image} alt="" height={200} />
                  <span className="vetria-kicker">{item.kicker}</span>
                  <span className="vetria-article__next-headline">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="vetria-article__footer">
        <div className="vetria-container vetria-article__cta">
          <span className="vetria-article__cta-text">Your business could be next.</span>
          <Link href="/get-featured" className="vetria-btn vetria-btn--inverse">
            Tell us your story
          </Link>
        </div>
        <div className="vetria-article__footer-bottom">
          <div className="vetria-container vetria-article__footer-row">
            <span>© 2026 Vetria</span>
            <span>Paid partnerships are always labelled Sponsored.</span>
          </div>
        </div>
      </footer>

      <style>{`
        .vetria-article__head {
          width: min(100% - 2 * var(--page-gutter), 772px);
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: var(--space-6) 0 var(--space-5);
        }

        .vetria-article__labels {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }

        .vetria-article__title {
          font-size: clamp(36px, 4.4vw, 56px);
          line-height: 1.08;
        }

        .vetria-article__standfirst {
          font-size: 19px;
          line-height: 28px;
        }

        .vetria-article__byline {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          color: var(--ink-muted);
          font-size: 13px;
          line-height: 18px;
        }

        .vetria-article__avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-pill);
          background: var(--placeholder);
        }

        .vetria-article__hero figcaption {
          margin-top: 10px;
          color: var(--ink-muted);
          font-size: 13px;
        }

        .vetria-article__body {
          width: min(100% - 2 * var(--page-gutter), 632px);
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding: var(--space-5) 0 var(--space-6);
          line-height: 28px;
        }

        .vetria-article__dropcap::first-letter {
          float: left;
          padding: 6px 10px 0 0;
          font-family: var(--font-display);
          font-size: 72px;
          line-height: 56px;
        }

        .vetria-article__h2 {
          margin-top: 16px;
          font-size: 28px;
          font-weight: 600;
          line-height: 34px;
        }

        .vetria-article__quote {
          margin-block: 24px;
          padding-block: 24px;
          border-block: 1px solid var(--gold);
        }

        .vetria-article__quote p {
          font-family: var(--font-display);
          font-size: 30px;
          font-style: italic;
          line-height: 40px;
        }

        .vetria-article__quote cite {
          display: block;
          margin-top: 12px;
          color: var(--ink-muted);
          font-size: 13px;
          font-style: normal;
          line-height: 18px;
        }

        .vetria-article__business {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 20px;
          margin-top: 8px;
          padding: 24px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
        }

        .vetria-article__logo {
          width: 72px;
          flex-shrink: 0;
        }

        .vetria-article__business-text {
          flex: 1 1 240px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vetria-article__business-name {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          line-height: 28px;
        }

        .vetria-article__business-details {
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 22px;
        }

        .vetria-article__business-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vetria-article__next {
          background: var(--paper);
          border-top: 1px solid var(--rule);
        }

        .vetria-article__next-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 56px 0 var(--space-6);
        }

        .vetria-article__next-title {
          font-size: 28px;
          font-weight: 600;
          line-height: 34px;
        }

        .vetria-article__next-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
        }

        .vetria-article__next-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vetria-article__next-headline {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          line-height: 28px;
          transition: color var(--transition-fast);
        }

        .vetria-article__next-card:hover .vetria-article__next-headline {
          color: var(--gold-text);
        }

        .vetria-article__footer {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-article__cta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-block: 48px;
        }

        .vetria-article__cta-text {
          font-family: var(--font-display);
          font-size: 32px;
          line-height: 40px;
        }

        .vetria-article__cta .vetria-btn {
          min-height: 52px;
        }

        .vetria-article__footer-bottom {
          border-top: 1px solid var(--rule-on-dark);
        }

        .vetria-article__footer-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding-block: 24px;
          color: var(--muted-on-dark);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}
