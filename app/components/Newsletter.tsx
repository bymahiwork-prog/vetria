"use client";

import { useState, type FormEvent } from "react";
import { newsletter } from "../content/home";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();

    if (!value) {
      setError("Enter your email address first.");
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError("That email address looks incomplete.");
      return;
    }

    // TODO: send `value` to the newsletter provider (beehiiv, Mailchimp, ConvertKit…)
    // before showing the confirmation. Nothing is stored yet.
    setDone(true);
  }

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

        {done ? (
          <p role="status" className="vetria-newsletter__done">
            You&apos;re on the list<span>.</span> Check your inbox to confirm.
          </p>
        ) : (
          <form className="vetria-newsletter__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="vetria-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="vetria-newsletter-email"
              type="email"
              autoComplete="email"
              placeholder="you@yourbusiness.com"
              value={email}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "vetria-newsletter-error" : undefined}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
            />
            <button type="submit" className="vetria-btn vetria-newsletter__button">
              Subscribe
            </button>
          </form>
        )}

        {error && !done && (
          <p id="vetria-newsletter-error" role="alert" className="vetria-newsletter__error">
            {error}
          </p>
        )}

        {!done && <p className="vetria-newsletter__note">{newsletter.note}</p>}
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
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          width: 100%;
          margin-top: 8px;
        }

        .vetria-newsletter__form input {
          flex: 1 1 280px;
          max-width: 400px;
          height: 48px;
          padding: 0 16px;
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          background: var(--paper);
          font-size: 15px;
        }

        .vetria-newsletter__form input[aria-invalid="true"] {
          border-color: var(--burgundy);
        }

        .vetria-newsletter__button {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-newsletter__button:hover {
          background: var(--gold-text);
        }

        .vetria-newsletter__error {
          color: var(--burgundy);
          font-size: 14px;
          font-weight: 600;
        }

        .vetria-newsletter__note {
          color: var(--ink-muted);
          font-size: 13px;
        }

        .vetria-newsletter__done {
          padding: 20px 24px;
          border-radius: var(--radius-sm);
          background: var(--espresso);
          color: var(--cream);
          font-family: var(--font-display);
          font-size: 22px;
        }

        .vetria-newsletter__done span {
          color: var(--gold-on-dark);
        }
      `}</style>
    </>
  );
}
