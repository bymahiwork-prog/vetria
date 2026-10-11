import type { Metadata } from "next";
import { pageMeta } from "../lib/site";
import Link from "next/link";
import Navbar from "../components/Navbar";
import StoryImage from "../components/StoryImage";

export const metadata: Metadata = pageMeta({
  path: "/about",
  absoluteTitle: true,
  title: "About Vitrea | Founder stories and the future of business",
  description:
    "Vitrea is an independent media brand telling the stories of founders and independent businesses, and explaining where small-business marketing is heading.",
});

const pillars = [
  {
    label: "01 · Features",
    title: "Founder stories",
    text: "In-depth stories of the decisions, risks and turning points behind independent businesses, in their own words.",
    href: "/features",
  },
  {
    label: "02 · The Future",
    title: "Where business is heading",
    text: "Clear, sourced explainers on AI, search, social commerce and marketing, written for owners rather than analysts.",
    href: "/#future",
  },
  {
    label: "03 · Series",
    title: "Many voices, one question",
    text: "Recurring series that put the same question to founders across industries and countries.",
    href: "/#series",
  },
];

const beliefs = [
  { title: "People first.", text: "Every business is a person's decision. We write about them." },
  { title: "Specific over loud.", text: "Places, numbers and choices, not superlatives." },
  { title: "Earned, never bought.", text: "Editorial features are free. Anything paid is labelled Sponsored." },
  { title: "Global by default.", text: "Good businesses are everywhere. So are our stories." },
];

const involved = [
  { title: "Get featured", text: "Tell us your story. Editorial features are free.", cta: "Apply", href: "/get-featured" },
  { title: "Read the letter", text: "One founder story and one look ahead, every week.", cta: "Subscribe", href: "/newsletter" },
  { title: "Write or partner", text: "Contributors and brand partners: partners@vitreaonline.in", cta: "Email us", href: "mailto:partners@vitreaonline.in" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main id="main">
        <section className="vetria-about__intro" aria-label="Introduction">
          <span className="vetria-kicker">About Vitrea</span>
          <h1 className="vetria-about__title">
            Stories of the businesses <em>building what&apos;s next.</em>
          </h1>
          <p className="vetria-about__lead">
            Vitrea is an independent media brand for founders, owners and the people who back them. We
            tell the stories of small businesses with the care big companies get, and explain where
            business is heading.
          </p>
          <div className="vetria-rule" />
        </section>

        <section className="vetria-about__why" aria-labelledby="why-title">
          <div className="vetria-container vetria-about__why-inner">
            <div className="vetria-about__why-head">
              <span className="vetria-kicker vetria-about__on-dark-kicker">Why we exist</span>
              <h2 id="why-title" className="vetria-about__why-title">
                The most interesting businesses are rarely on the front page.
              </h2>
            </div>
            <div className="vetria-about__why-body">
              <p>
                Most business media covers the biggest companies. Meanwhile the café that rewrote its
                menu around regulars, the studio that grew by saying no, and the brand built from a
                kitchen table go untold.
              </p>
              <p>
                Those owners are now marketers, creators and strategists all at once. They deserve
                stories told properly, and honest guidance on what&apos;s changing, without the hype.
              </p>
            </div>
          </div>
        </section>

        <section className="vetria-container vetria-about__publish" aria-labelledby="publish-title">
          <div className="vetria-section-head">
            <h2 id="publish-title">What we publish</h2>
          </div>
          <div className="vetria-about__cards">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href} className="vetria-about__card">
                <span className="vetria-kicker">{p.label}</span>
                <span className="vetria-about__card-title">{p.title}</span>
                <span className="vetria-about__card-text">{p.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="vetria-about__believe" aria-labelledby="believe-title">
          <div className="vetria-container vetria-about__believe-inner">
            <h2 id="believe-title" className="vetria-about__h2">What we believe</h2>
            <div className="vetria-about__beliefs">
              {beliefs.map((b) => (
                <div key={b.title} className="vetria-about__belief">
                  <span className="vetria-about__belief-title">{b.title}</span>
                  <span className="vetria-about__card-text">{b.text}</span>
                </div>
              ))}
            </div>
            <Link href="/editorial-policy" className="vetria-text-link">
              Read our editorial policy <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="vetria-container vetria-about__founder" aria-labelledby="founder-title">
          <StoryImage
            src="/images/about/mayank-jena.jpg"
            alt="Mayank Jena, founder and editor of Vitrea, seated in a leather armchair with a tablet"
            height={420}
            position="50% 22%"
            sizes="(max-width: 860px) 100vw, 560px"
            className="vetria-about__portrait"
          />
          <div className="vetria-about__founder-text">
            <span className="vetria-kicker">Who&apos;s behind Vitrea</span>
            <h2 id="founder-title" className="vetria-about__founder-title">
              Mayank Jena, founder and editor
            </h2>
            <p>
              I started Vitrea because the businesses I admire most are rarely the ones being written
              about. The café with a waitlist, the label run from a spare room, the bar that knows every
              regular by name: each one is a founder&apos;s bet, and those bets deserve to be told
              properly.
            </p>
            <p>
              Vitrea is where those stories live, alongside plain-English thinking on where marketing is
              heading, so every owner who reads it leaves with something they can use.
            </p>
            <p className="vetria-about__muted">
              Know a business we should feature? <Link href="/get-featured">Tell us about it</Link>.
            </p>
          </div>
        </section>
      </main>

      <footer className="vetria-about__footer">
        <div className="vetria-container vetria-about__involved">
          {involved.map((item) => {
            const inner = (
              <>
                <span className="vetria-about__involved-title">{item.title}</span>
                <span className="vetria-about__involved-text">{item.text}</span>
                <span className="vetria-about__involved-cta">
                  {item.cta} <span aria-hidden="true">→</span>
                </span>
              </>
            );
            return item.href.startsWith("mailto:") ? (
              <a key={item.title} href={item.href} className="vetria-about__involved-card">
                {inner}
              </a>
            ) : (
              <Link key={item.title} href={item.href} className="vetria-about__involved-card">
                {inner}
              </Link>
            );
          })}
        </div>
        <div className="vetria-about__footer-bottom">
          <div className="vetria-container vetria-about__footer-row">
            <span>© 2026 Vitrea</span>
            <span>Paid partnerships are always labelled Sponsored.</span>
          </div>
        </div>
      </footer>

      <style>{`
        .vetria-about__intro {
          width: min(100% - 2 * var(--page-gutter), 980px);
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          padding: 88px 0 72px;
          text-align: center;
        }

        .vetria-about__title {
          font-size: clamp(40px, 5.4vw, 76px);
          line-height: 1.04;
        }

        .vetria-about__title em {
          display: block;
        }

        .vetria-about__lead {
          max-width: 680px;
          font-size: 19px;
          line-height: 30px;
        }

        .vetria-about__intro .vetria-rule {
          margin-top: 8px;
        }

        .vetria-about__why {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-about__why-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          padding-block: 72px;
        }

        .vetria-about__why-head {
          flex: 1 1 340px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .vetria-about__on-dark-kicker {
          color: var(--gold-on-dark);
        }

        .vetria-about__why-title {
          font-size: clamp(34px, 3.8vw, 44px);
          line-height: 1.14;
        }

        .vetria-about__why-body {
          flex: 1 1 440px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
          color: var(--rule);
          line-height: 28px;
        }

        .vetria-about__publish {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-block: 72px;
        }

        .vetria-about__cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .vetria-about__card {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 32px 28px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
        }

        .vetria-about__card:hover {
          border-color: var(--gold);
        }

        .vetria-about__card-title {
          font-family: var(--font-display);
          font-size: 28px;
          line-height: 34px;
        }

        .vetria-about__card-text,
        .vetria-about__muted {
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-about__believe {
          background: var(--paper);
          border-block: 1px solid var(--rule);
        }

        .vetria-about__believe-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          padding-block: 72px;
        }

        .vetria-about__h2 {
          font-size: 28px;
          font-weight: 600;
          line-height: 34px;
        }

        .vetria-about__beliefs {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
        }

        .vetria-about__belief {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vetria-about__belief-title {
          font-family: var(--font-display);
          font-size: 26px;
          font-style: italic;
          line-height: 32px;
        }

        .vetria-about__founder {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 48px;
          padding-block: 72px;
        }

        .vetria-about__portrait {
          flex: 1 1 360px;
          min-width: 0;
        }

        .vetria-about__founder-text {
          flex: 1 1 420px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          line-height: 28px;
        }

        .vetria-about__founder-title {
          font-size: 40px;
          line-height: 46px;
        }

        .vetria-about__founder-text .vetria-about__muted a {
          color: var(--gold-text);
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .vetria-about__founder-text .vetria-about__muted {
          font-size: 17px;
          line-height: 28px;
        }

        .vetria-about__footer {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-about__involved {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          padding-block: var(--space-6);
        }

        .vetria-about__involved-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 28px;
          border: 1px solid var(--rule-on-dark);
          border-radius: var(--radius-sm);
          transition: border-color var(--transition-fast);
        }

        .vetria-about__involved-card:hover {
          border-color: var(--gold-on-dark);
        }

        .vetria-about__involved-title {
          font-family: var(--font-display);
          font-size: 26px;
          line-height: 32px;
        }

        .vetria-about__involved-text {
          overflow-wrap: anywhere;
          color: var(--muted-on-dark);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-about__involved-cta {
          color: var(--gold-on-dark);
          font-size: 15px;
          font-weight: 600;
        }

        .vetria-about__footer-bottom {
          border-top: 1px solid var(--rule-on-dark);
        }

        .vetria-about__footer-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          padding-block: 24px;
          color: var(--muted-on-dark);
          font-size: 13px;
        }

        @media (max-width: 600px) {
          .vetria-about__intro,
          .vetria-about__why-inner,
          .vetria-about__publish,
          .vetria-about__believe-inner,
          .vetria-about__founder {
            padding-block: var(--space-5);
          }

          .vetria-about__portrait {
            height: 320px !important;
          }

          .vetria-about__founder-title {
            font-size: 32px;
            line-height: 38px;
          }
        }
      `}</style>
    </>
  );
}
