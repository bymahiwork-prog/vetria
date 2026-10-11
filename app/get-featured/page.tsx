import type { Metadata } from "next";
import { absoluteUrl, pageMeta } from "../lib/site";
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Emblem from "../components/Emblem";
import SimpleFooter from "../components/SimpleFooter";
import ApplicationForm from "./ApplicationForm";

export const metadata: Metadata = pageMeta({
  path: "/get-featured",
  absoluteTitle: true,
  title: "Get your business featured in Vetria | Free founder features",
  description:
    "Apply to have your business featured in Vetria. Editorial features are free and chosen by our editors. Tell us your founder story in about ten minutes.",
});

const steps = [
  { title: "Apply", text: "Answer a few questions about you and your business. About ten minutes." },
  { title: "We review", text: "Our editors read every application and reply within [X] working days." },
  { title: "Interview", text: "A written Q&A or a short call, plus photos or a short reel of your space." },
  {
    title: "Published",
    text: "Your feature goes live on the site and Instagram, with a Featured in Vetria badge to share.",
  },
];

const lookFor = [
  "A real business with real customers",
  "A turning point, a hard decision or a fresh idea",
  "A founder willing to talk honestly about it",
];

const faqs = [
  {
    q: "Do I have to pay to be featured?",
    a: "No. Editorial features are always free. Sponsored spotlights are a separate, clearly labelled option.",
  },
  {
    q: "Can I see the feature before it goes live?",
    a: "[Your policy: e.g. you can check facts and quotes; editorial decisions stay with Vetria.]",
  },
  { q: "Which countries do you cover?", a: "Anywhere. Vetria is published in English for a global audience." },
];

// FAQ structured data: only answers that are final (placeholders in [brackets] are left out).
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: absoluteUrl("/get-featured"),
  mainEntity: faqs
    .filter((faq) => !faq.a.startsWith("["))
    .map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
};

export default function GetFeaturedPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />

      <main id="main">
        <section className="vetria-container vetria-gf__intro" aria-label="Introduction">
          <div className="vetria-gf__intro-text">
            <span className="vetria-kicker">Get featured</span>
            <h1 className="vetria-gf__title">Your story, told properly.</h1>
            <p className="vetria-gf__lead">
              Vetria features founders and independent businesses building something worth knowing
              about. Editorial features are free and chosen by our editors.
            </p>
            <a href="#apply" className="vetria-btn vetria-btn--primary vetria-gf__start">
              Start your application
            </a>
          </div>
          <div className="vetria-gf__emblem">
            <Emblem size={260} decorative={false} />
          </div>
        </section>

        <section className="vetria-gf__how" aria-labelledby="how-title">
          <div className="vetria-container vetria-gf__how-inner">
            <h2 id="how-title" className="vetria-gf__h2">How it works</h2>
            <ol className="vetria-gf__steps">
              {steps.map((step, i) => (
                <li key={step.title} className="vetria-gf__step">
                  <span className="vetria-gf__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="vetria-gf__step-title">{step.title}</span>
                  <span className="vetria-gf__step-text">{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="apply" className="vetria-container vetria-gf__apply" aria-labelledby="apply-title">
          <div className="vetria-gf__apply-side">
            <h2 id="apply-title" className="vetria-gf__apply-title">Tell us your story</h2>
            <p className="vetria-gf__muted">What we look for:</p>
            <ul className="vetria-gf__lookfor">
              {lookFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="vetria-gf__apply-form">
            <ApplicationForm />
          </div>
        </section>

        <section id="partner" className="vetria-gf__ways" aria-labelledby="ways-title">
          <div className="vetria-container vetria-gf__ways-inner">
            <div className="vetria-gf__ways-head">
              <span className="vetria-kicker vetria-gf__on-dark-kicker">Two ways to appear</span>
              <h2 id="ways-title" className="vetria-gf__ways-title">
                Editorial is earned. Sponsored is labelled.
              </h2>
            </div>
            <div className="vetria-gf__ways-grid">
              <div className="vetria-gf__way">
                <span className="vetria-badge">Vetria Feature</span>
                <span className="vetria-gf__way-price">Free</span>
                <p>
                  Chosen by our editors. Written in your words, published on the site and Instagram,
                  with a Featured in Vetria badge.
                </p>
                <a href="#apply" className="vetria-btn vetria-btn--inverse">Apply</a>
              </div>
              <div className="vetria-gf__way">
                <span className="vetria-gf__sponsored">Sponsored</span>
                <span className="vetria-gf__way-price">From [YOUR PRICE]</span>
                <p>
                  A guaranteed spotlight on a date you choose, produced by our team, clearly labelled
                  Sponsored everywhere it appears.
                </p>
                {/* TODO: point this at a partnerships email or contact form */}
                <a href="#partner" className="vetria-btn vetria-btn--outline-dark">Partner with us</a>
              </div>
            </div>
          </div>
        </section>

        <section className="vetria-gf__faq" aria-labelledby="faq-title">
          <h2 id="faq-title" className="vetria-gf__h2">Questions</h2>
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>
      </main>

      <SimpleFooter />

      <style>{`
        .vetria-gf__intro {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 48px;
          padding: 72px 0 56px;
        }

        .vetria-gf__intro-text {
          flex: 2 1 480px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
        }

        .vetria-gf__title {
          font-size: clamp(40px, 5vw, 68px);
          line-height: 1.05;
        }

        .vetria-gf__lead {
          max-width: 600px;
          font-size: 19px;
          line-height: 30px;
        }

        .vetria-gf__start {
          min-height: 52px;
          padding-inline: 28px;
        }

        .vetria-gf__emblem {
          flex: 1 1 260px;
          display: flex;
          justify-content: center;
        }

        .vetria-gf__h2 {
          font-size: 28px;
          font-weight: 600;
          line-height: 34px;
        }

        .vetria-gf__how {
          background: var(--paper);
          border-block: 1px solid var(--rule);
        }

        .vetria-gf__how-inner {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-block: 56px;
        }

        .vetria-gf__steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 32px;
        }

        .vetria-gf__step {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--gold);
        }

        .vetria-gf__num {
          color: var(--gold-text);
          font-family: var(--font-display);
          font-size: 36px;
          font-style: italic;
          line-height: 1;
        }

        .vetria-gf__step-title {
          font-size: 17px;
          font-weight: 600;
        }

        .vetria-gf__step-text,
        .vetria-gf__muted {
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-gf__apply {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          padding-block: var(--space-6);
        }

        .vetria-gf__apply-side {
          flex: 1 1 300px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .vetria-gf__apply-title {
          font-size: 44px;
          line-height: 50px;
        }

        .vetria-gf__lookfor li {
          padding-block: 10px;
          border-bottom: 1px solid var(--rule);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-gf__apply-form {
          flex: 2 1 520px;
          min-width: 0;
        }

        .vetria-apply {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          padding: 32px;
          background: var(--paper);
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
        }

        .vetria-apply__full {
          grid-column: 1 / -1;
        }

        .vetria-apply__field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vetria-apply__field label {
          font-size: 14px;
          font-weight: 600;
        }

        .vetria-apply input[type="text"],
        .vetria-apply input[type="email"],
        .vetria-apply select,
        .vetria-apply textarea {
          width: 100%;
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          background: #ffffff;
          font-size: 15px;
        }

        .vetria-apply input[type="text"],
        .vetria-apply input[type="email"],
        .vetria-apply select {
          height: 48px;
          padding: 0 14px;
        }

        .vetria-apply textarea {
          padding: 12px 14px;
          line-height: 24px;
          resize: vertical;
        }

        .vetria-apply [aria-invalid="true"] {
          border-color: var(--burgundy);
        }

        .vetria-apply__error {
          display: block;
          margin-top: 2px;
          color: var(--burgundy);
          font-size: 13px;
          font-weight: 600;
        }

        .vetria-apply__check {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .vetria-apply__check input {
          width: 20px;
          height: 20px;
          margin-top: 2px;
          flex-shrink: 0;
          accent-color: var(--espresso);
        }

        .vetria-apply__check label {
          color: var(--ink-muted);
          font-size: 14px;
          line-height: 22px;
        }

        .vetria-apply__submit {
          min-height: 52px;
          padding-inline: 32px;
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-apply__submit:hover {
          background: var(--gold-text);
        }

        .vetria-apply--sent {
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: var(--espresso);
          color: var(--cream);
          border-color: var(--espresso);
        }

        .vetria-apply__sent-title {
          font-family: var(--font-display);
          font-size: 30px;
        }

        .vetria-apply__sent-title span {
          color: var(--gold-on-dark);
        }

        .vetria-apply--sent p {
          color: var(--muted-on-dark);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-gf__ways {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-gf__ways-inner {
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding-block: var(--space-6);
        }

        .vetria-gf__ways-head {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .vetria-gf__on-dark-kicker {
          color: var(--gold-on-dark);
        }

        .vetria-gf__ways-title {
          font-size: clamp(34px, 3.8vw, 44px);
          line-height: 1.14;
        }

        .vetria-gf__ways-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .vetria-gf__way {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 14px;
          padding: 32px;
          border: 1px solid var(--rule-on-dark);
          border-radius: var(--radius-sm);
        }

        .vetria-gf__way p {
          color: var(--muted-on-dark);
          font-size: 15px;
          line-height: 24px;
        }

        .vetria-gf__way .vetria-btn {
          margin-top: 8px;
        }

        .vetria-gf__way-price {
          font-family: var(--font-display);
          font-size: 30px;
          line-height: 36px;
        }

        .vetria-gf__sponsored {
          padding: 5px 14px;
          border: 1px solid var(--cream);
          border-radius: var(--radius-pill);
          font-size: 12px;
          font-weight: 700;
        }

        .vetria-gf__faq {
          width: min(100% - 2 * var(--page-gutter), 772px);
          margin-inline: auto;
          display: flex;
          flex-direction: column;
          padding-block: var(--space-6);
        }

        .vetria-gf__faq .vetria-gf__h2 {
          margin-bottom: 16px;
        }

        .vetria-gf__faq details {
          padding-block: 18px;
          border-top: 1px solid var(--rule);
        }

        .vetria-gf__faq details:last-of-type {
          border-bottom: 1px solid var(--rule);
        }

        .vetria-gf__faq summary {
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
        }

        .vetria-gf__faq details p {
          margin-top: 12px;
          color: var(--ink-muted);
          font-size: 15px;
          line-height: 24px;
        }

        @media (max-width: 600px) {
          .vetria-gf__intro {
            padding-block: var(--space-5);
          }

          .vetria-apply {
            padding: 20px;
          }

          .vetria-gf__way {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
