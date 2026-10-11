import { newsletter } from "../content/home";
import SignupForm from "./SignupForm";

export default function Newsletter() {
  return (
    <>
      <section
        id="newsletter"
        className="vetria-container vetria-newsletter"
        aria-labelledby="vetria-newsletter-title"
      >
        <span className="vetria-kicker">{newsletter.kicker}</span>
        <h2 id="vetria-newsletter-title" className="vetria-newsletter__title">
          {newsletter.title}
        </h2>
        <div className="vetria-newsletter__form">
          <SignupForm
            id="home-newsletter"
            buttonLabel="Subscribe"
            buttonTone="espresso"
            note={newsletter.note}
            doneMessage="Check your inbox to confirm."
          />
        </div>
      </section>

      <style>{`
        .vetria-newsletter {
          max-width: 760px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding-block: var(--space-6);
          text-align: center;
        }

        .vetria-newsletter__title {
          font-size: clamp(30px, 3.4vw, 40px);
          line-height: 1.15;
        }

        .vetria-newsletter__form {
          width: 100%;
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}
