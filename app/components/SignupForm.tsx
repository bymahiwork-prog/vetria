"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

type SignupFormProps = {
  id: string;
  buttonLabel: string;
  buttonTone: "espresso" | "gold";
  note: string;
  doneMessage: string;
  align?: "center" | "start";
  size?: "md" | "lg";
};

// Newsletter signup used on the homepage and the Newsletter page.
// Validates the address; sending it to a mailing service is still to do.
export default function SignupForm({
  id,
  buttonLabel,
  buttonTone,
  note,
  doneMessage,
  align = "center",
  size = "md",
}: SignupFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const inputId = `${id}-email`;
  const errorId = `${id}-error`;

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

  if (done) {
    return (
      <>
        <p role="status" className="vetria-signup__done">
          You&apos;re on the list<span>.</span>
          <small>{doneMessage}</small>
        </p>
        <style>{doneStyles}</style>
      </>
    );
  }

  return (
    <>
      <div className={`vetria-signup vetria-signup--${align} vetria-signup--${size}`}>
        <form className="vetria-signup__form" onSubmit={handleSubmit} noValidate>
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            type="email"
            autoComplete="email"
            placeholder="you@yourbusiness.com"
            value={email}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
          />
          <button type="submit" className={`vetria-btn vetria-signup__button--${buttonTone}`}>
            {buttonLabel}
          </button>
        </form>

        {error && (
          <p id={errorId} role="alert" className="vetria-signup__error">
            {error}
          </p>
        )}

        <p className="vetria-signup__note">{note}</p>
      </div>

      <style>{`
        .vetria-signup {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .vetria-signup--center {
          align-items: center;
          text-align: center;
        }

        .vetria-signup--start {
          align-items: flex-start;
        }

        .vetria-signup__form {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          width: 100%;
        }

        .vetria-signup--center .vetria-signup__form {
          justify-content: center;
        }

        .vetria-signup__form input {
          flex: 1 1 260px;
          height: 48px;
          padding: 0 16px;
          border: 1px solid var(--rule);
          border-radius: var(--radius-sm);
          background: var(--paper);
          font-size: 15px;
        }

        .vetria-signup--center .vetria-signup__form input {
          max-width: 400px;
        }

        .vetria-signup--lg .vetria-signup__form input,
        .vetria-signup--lg .vetria-signup__form button {
          height: 52px;
          font-size: 16px;
        }

        .vetria-signup__form input[aria-invalid="true"] {
          border-color: var(--burgundy);
        }

        .vetria-signup__button--espresso {
          background: var(--espresso);
          color: var(--cream);
        }

        .vetria-signup__button--espresso:hover {
          background: var(--gold-text);
        }

        .vetria-signup__button--gold {
          background: var(--gold);
          color: var(--espresso);
        }

        .vetria-signup__button--gold:hover {
          background: var(--gold-on-dark);
        }

        .vetria-signup__error {
          color: var(--burgundy);
          font-size: 14px;
          font-weight: 600;
        }

        .vetria-signup__note {
          color: var(--ink-muted);
          font-size: 13px;
        }
      `}</style>
    </>
  );
}

const doneStyles = `
  .vetria-signup__done {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 24px;
    border-radius: var(--radius-sm);
    background: var(--espresso);
    color: var(--cream);
    font-family: var(--font-display);
    font-size: 26px;
    line-height: 32px;
    text-align: left;
  }

  .vetria-signup__done span {
    color: var(--gold-on-dark);
  }

  .vetria-signup__done small {
    color: var(--muted-on-dark);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 24px;
  }
`;
