import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Link from "next/link";
import Wordmark from "../components/Wordmark";
import StoryImage from "../components/StoryImage";
import SignupForm from "../components/SignupForm";

export const metadata: Metadata = pageMeta({
  path: "/newsletter",
  absoluteTitle: true,
  title: "The Vitrea Letter | A weekly newsletter for founders",
  description:
    "One founder story and one look ahead at small-business marketing, every week. A short, free newsletter for people who run a business worth talking about.",
});

const benefits = [
  "The week's best Vitrea feature, condensed to a five-minute read",
  "One shift in marketing or AI, and what it means for a small business",
  "A first look at businesses we're about to feature",
];

// A focused landing page (link it from the Instagram bio): no main navigation, by design.
export default function NewsletterPage() {
  return (
    <div className="vetria-nl">
      <header className="vetria-nl__header">
        <div className="vetria-container vetria-nl__header-inner">
          <Link href="/" aria-label="Vitrea home">
            <Wordmark size={30} />
          </Link>
          <Link href="/" className="vetria-text-link">
            Read the site <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <main id="main" className="vetria-container vetria-nl__main">
        <div className="vetria-nl__text">
          <span className="vetria-kicker">The Vitrea letter · Weekly</span>
          <h1 className="vetria-nl__title">
            <span>One founder story.</span>
            <em>One look ahead.</em>
            <span>Every Tuesday.</span>
          </h1>
          <p className="vetria-nl__lead">
            A short weekly letter for people who run, or want to run, a business worth talking about.
          </p>

          <ol className="vetria-nl__benefits">
            {benefits.map((b, i) => (
              <li key={b}>
                <span className="vetria-nl__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ol>

          <SignupForm
            id="newsletter-page"
            buttonLabel="Subscribe free"
            buttonTone="espresso"
            note="Free. No spam. Unsubscribe in one click."
            doneMessage="Check your inbox to confirm. Your first letter arrives on Tuesday."
            align="start"
            size="lg"
          />
        </div>

        <div className="vetria-nl__preview-wrap">
          <div className="vetria-nl__preview" aria-label="Sample issue" role="group">
            <div className="vetria-nl__preview-head">
              <Wordmark size={24} tone="light" />
              <span>Issue 01</span>
            </div>
            <div className="vetria-nl__preview-body">
              <span className="vetria-kicker">This week&apos;s story</span>
              <StoryImage
                src="/images/features/seezen/lit-arch-room.jpg"
                alt="The bar room at Seezen Coffee House & Kitchen, Kanpur"
                height={160}
                sizes="440px"
              />
              <span className="vetria-nl__preview-headline">
                Seezen Coffee House, Kanpur: the café built for staying
              </span>
              <span className="vetria-nl__preview-text">
                Sculpted arches, a rope-woven ceiling and doors open 10am to midnight.
              </span>
              <div className="vetria-nl__preview-rule" />
              <span className="vetria-kicker">The look ahead</span>
              <span className="vetria-nl__preview-trend">
                How customers now find a business through AI answers
              </span>
              <span className="vetria-nl__preview-text">
                What to fix on your Google profile and website so AI search recommends you.
              </span>
            </div>
          </div>
        </div>
      </main>

      <footer className="vetria-nl__footer">
        <div className="vetria-container vetria-nl__footer-inner">
          <span>© 2026 Vitrea</span>
          <span>
            <Link href="/editorial-policy">Editorial policy</Link>
          </span>
        </div>
      </footer>

      <style>{`
        .vetria-nl {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .vetria-nl__header {
          border-bottom: 1px solid var(--rule);
        }

        .vetria-nl__header-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-block: 20px;
        }

        .vetria-nl__main {
          flex: 1 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 56px;
          padding-block: 72px;
        }

        .vetria-nl__text {
          flex: 1 1 440px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .vetria-nl__title {
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.06;
        }

        .vetria-nl__title span,
        .vetria-nl__title em {
          display: block;
        }

        .vetria-nl__lead {
          max-width: 560px;
          font-size: 19px;
          line-height: 30px;
        }

        .vetria-nl__benefits {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 24px;
        }

        .vetria-nl__benefits li {
          display: flex;
          align-items: baseline;
          gap: 14px;
          padding-block: 12px;
          border-top: 1px solid var(--rule);
        }

        .vetria-nl__benefits li:last-child {
          border-bottom: 1px solid var(--rule);
        }

        .vetria-nl__num {
          color: var(--gold-text);
          font-family: var(--font-display);
          font-size: 22px;
          font-style: italic;
        }

        .vetria-nl__preview-wrap {
          flex: 1 1 380px;
          min-width: 0;
          display: flex;
          justify-content: center;
        }

        .vetria-nl__preview {
          width: 100%;
          max-width: 440px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
        }

        .vetria-nl__preview-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 20px 24px;
          background: var(--espresso);
          color: var(--muted-on-dark);
          font-size: 12px;
        }

        .vetria-nl__preview-body {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 24px;
        }

        .vetria-nl__preview-headline {
          font-family: var(--font-display);
          font-size: 22px;
          line-height: 28px;
        }

        .vetria-nl__preview-trend {
          font-family: var(--font-display);
          font-size: 20px;
          line-height: 26px;
        }

        .vetria-nl__preview-text {
          color: var(--ink-muted);
          font-size: 14px;
          line-height: 22px;
        }

        .vetria-nl__preview-rule {
          height: 1px;
          margin-block: 6px;
          background: var(--gold);
        }

        .vetria-nl__footer {
          border-top: 1px solid var(--rule);
        }

        .vetria-nl__footer-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding-block: 24px;
          color: var(--ink-muted);
          font-size: 13px;
        }

        .vetria-nl__footer-inner a:hover {
          color: var(--espresso);
        }

        @media (max-width: 600px) {
          .vetria-nl__main {
            padding-block: var(--space-5);
            gap: 40px;
          }
        }
      `}</style>
    </div>
  );
}
