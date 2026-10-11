import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Link from "next/link";
import Navbar from "../components/Navbar";
import SimpleFooter from "../components/SimpleFooter";

export const metadata: Metadata = pageMeta({
  path: "/editorial-policy",
  title: "Editorial policy: how we choose and label stories",
  description:
    "How Vitrea chooses which businesses to feature, keeps editorial independent, labels sponsored content, checks facts and handles corrections.",
});

const sections = [
  { id: "choose", label: "How we choose stories" },
  { id: "independence", label: "Independence" },
  { id: "sponsored", label: "Sponsored content" },
  { id: "interviews", label: "Interviews and approvals" },
  { id: "accuracy", label: "Accuracy and corrections" },
  { id: "ai", label: "How we use AI" },
  { id: "contact", label: "Contact the editor" },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="vetria-container vetria-ep__intro" aria-label="Introduction">
          <span className="vetria-kicker">Editorial policy</span>
          <h1 className="vetria-ep__title">How we choose, write and label what we publish</h1>
          <p className="vetria-ep__lead">
            Trust is the reason a Vitrea feature means something. These are the rules we hold
            ourselves to.
          </p>
          <p className="vetria-ep__updated">Last updated 12 October 2026</p>
        </section>

        <div className="vetria-container vetria-ep__layout">
          <nav aria-label="On this page" className="vetria-ep__toc">
            <span className="vetria-ep__toc-label">On this page</span>
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.label}
              </a>
            ))}
          </nav>

          <div className="vetria-ep__content">
            <section id="choose" aria-labelledby="choose-h">
              <h2 id="choose-h">How we choose stories</h2>
              <p>
                Our editors choose every feature. We look for real businesses with real customers, a
                story with a turning point, and a founder willing to speak honestly. Size, funding and
                follower counts are not criteria.
              </p>
              <p>
                Anyone can apply to be featured. Applying does not guarantee publication, and we
                don&apos;t always explain why a story wasn&apos;t selected.
              </p>
            </section>

            <section id="independence" aria-labelledby="independence-h">
              <h2 id="independence-h">Independence</h2>
              <p>
                <strong>Editorial features are never paid for.</strong> No business can buy a Vitrea
                Feature, a place in a series, or a better review. Advertisers and sponsors have no say
                over editorial stories.
              </p>
              <p>
                If we have a personal or business relationship with someone we feature, including as a
                client of a company connected to Vitrea, we say so at the top of the story.
              </p>
            </section>

            <section id="sponsored" aria-labelledby="sponsored-h">
              <h2 id="sponsored-h">Sponsored content</h2>
              <p>Businesses can pay for a sponsored spotlight. When they do, you&apos;ll always know:</p>
              <div className="vetria-ep__labels">
                <div className="vetria-ep__label-card">
                  <span className="vetria-badge">Vitrea Feature</span>
                  <span>Editorial. Chosen by our editors. Never paid for.</span>
                </div>
                <div className="vetria-ep__label-card">
                  <span className="vetria-ep__sponsored">Sponsored</span>
                  <span>Paid for by the business named. Produced by our team.</span>
                </div>
              </div>
              <p>
                The Sponsored label appears above the headline on the site and on every social post,
                where we also use the platform&apos;s paid-partnership tag. Sponsored pieces live in
                their own section, and links in them are marked as sponsored.
              </p>
            </section>

            <section id="interviews" aria-labelledby="interviews-h">
              <h2 id="interviews-h">Interviews and approvals</h2>
              <p>
                Features are based on interviews, written answers and photos provided by the business.
                We edit for length and clarity, and we never change the meaning of what someone said.
              </p>
              <p>
                Subjects can check facts and quotes before publication. Editorial decisions stay with
                Vitrea.
              </p>
            </section>

            <section id="accuracy" aria-labelledby="accuracy-h">
              <h2 id="accuracy-h">Accuracy and corrections</h2>
              <p>
                We check facts, figures and claims before publishing, and link to sources in The Future
                articles. When we get something wrong, we fix it and add a dated correction note at the
                end of the story.
              </p>
              <p>
                Spotted an error? Write to <a href="mailto:corrections@vitreaonline.in">corrections@vitreaonline.in</a>.
              </p>
            </section>

            <section id="ai" aria-labelledby="ai-h">
              <h2 id="ai-h">How we use AI</h2>
              <p>
                We use AI tools to help with transcription, research and drafts. Every story is shaped,
                checked and approved by a human editor. We never invent quotes, and any AI-generated
                imagery is labelled.
              </p>
            </section>

            <section id="contact" aria-labelledby="contact-h" className="vetria-ep__contact">
              <h2 id="contact-h">Contact the editor</h2>
              <p>
                Questions about this policy or a story: <a href="mailto:editor@vitreaonline.in">editor@vitreaonline.in</a>. Want to
                be featured? <Link href="/get-featured">Apply here</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <SimpleFooter />

      <style>{`
        .vetria-ep__intro {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 72px 0 48px;
        }

        .vetria-ep__title {
          max-width: 820px;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.06;
        }

        .vetria-ep__lead {
          max-width: 720px;
          font-size: 19px;
          line-height: 30px;
        }

        .vetria-ep__updated {
          color: var(--ink-muted);
          font-size: 13px;
        }

        .vetria-ep__layout {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 56px;
          padding-bottom: 80px;
        }

        .vetria-ep__toc {
          flex: 1 1 220px;
          max-width: 280px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-top: 16px;
          border-top: 1px solid var(--gold);
          font-size: 15px;
          font-weight: 600;
        }

        .vetria-ep__toc a {
          padding-block: 8px;
          color: var(--gold-text);
        }

        .vetria-ep__toc a:hover {
          color: var(--espresso);
        }

        .vetria-ep__toc-label {
          margin-bottom: 8px;
          color: var(--ink-muted);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .vetria-ep__content {
          flex: 999 1 560px;
          min-width: 0;
          max-width: 720px;
          display: flex;
          flex-direction: column;
          gap: 48px;
          line-height: 28px;
        }

        .vetria-ep__content section {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .vetria-ep__content h2 {
          font-size: 30px;
          font-weight: 600;
          line-height: 36px;
        }

        .vetria-ep__content a {
          overflow-wrap: anywhere;
          color: var(--gold-text);
        }

        .vetria-ep__content a:hover {
          color: var(--espresso);
        }

        .vetria-ep__labels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .vetria-ep__label-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
          padding: 20px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-ep__sponsored {
          padding: 5px 14px;
          border: 1px solid var(--espresso);
          border-radius: var(--radius-pill);
          color: var(--espresso);
          font-size: 12px;
          font-weight: 700;
          line-height: 1.2;
        }

        .vetria-ep__contact {
          padding-top: 24px;
          border-top: 1px solid var(--gold);
        }

        @media (max-width: 600px) {
          .vetria-ep__intro {
            padding-block: var(--space-5) var(--space-4);
          }

          .vetria-ep__toc {
            max-width: none;
          }
        }
      `}</style>
    </>
  );
}
