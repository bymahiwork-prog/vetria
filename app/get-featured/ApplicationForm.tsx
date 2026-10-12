"use client";

import { useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Web3Forms delivers each application to Vitrea's inbox. This access key is designed to be
// public (it only allows sending to the inbox it was created for), so it can live in the page.
const WEB3FORMS_ACCESS_KEY = "84d9f37b-6ef6-41e1-acf3-3051c3644775";

const categories = [
  "Food and drink",
  "Hospitality and travel",
  "Fashion and lifestyle",
  "Beauty and wellness",
  "Tech and services",
  "Other",
];

type Fields = {
  name: string;
  email: string;
  business: string;
  city: string;
  link: string;
  category: string;
  story: string;
  agree: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  business: "",
  city: "",
  link: "",
  category: categories[0],
  story: "",
  agree: false,
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (!f.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_PATTERN.test(f.email.trim())) e.email = "That email address looks incomplete.";
  if (!f.business.trim()) e.business = "Enter your business name.";
  if (!f.city.trim()) e.city = "Enter your city and country.";
  if (!f.story.trim()) e.story = "Tell us the story in a few sentences.";
  if (!f.agree) e.agree = "Tick this box to confirm.";
  return e;
}

export default function ApplicationForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [honeypot, setHoneypot] = useState(false);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`gf-${firstError}`)?.focus();
      return;
    }
    setSending(true);
    setSendError("");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Vitrea feature application: ${fields.business.trim()}`,
          from_name: "Vitrea website",
          replyto: fields.email.trim(),
          botcheck: honeypot,
          "Name": fields.name.trim(),
          "Email": fields.email.trim(),
          "Business": fields.business.trim(),
          "City and country": fields.city.trim(),
          "Website or Instagram": fields.link.trim() || "Not given",
          "Category": fields.category,
          "Story": fields.story.trim(),
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error(result.message || "Send failed");
      setSent(true);
    } catch {
      setSendError(
        "Sorry, your application didn't go through. Please try again in a minute, or email editor@vitreaonline.in.",
      );
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="vetria-apply vetria-apply--sent">
        <span className="vetria-apply__sent-title">
          Thank you<span>.</span>
        </span>
        <p>Your application is with our editors. We read every one, and we&apos;ll be in touch if your story is a fit.</p>
      </div>
    );
  }

  const field = (key: keyof Fields) => ({
    id: `gf-${key}`,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `gf-${key}-error` : undefined,
  });

  const error = (key: keyof Fields) =>
    errors[key] ? (
      <span id={`gf-${key}-error`} className="vetria-apply__error">
        {errors[key]}
      </span>
    ) : null;

  return (
    <form className="vetria-apply" aria-label="Feature application" onSubmit={handleSubmit} noValidate>
      <div className="vetria-apply__field">
        <label htmlFor="gf-name">Your name</label>
        <input {...field("name")} type="text" autoComplete="name" placeholder="Riya Mehta"
          value={fields.name} onChange={(e) => set("name", e.target.value)} />
        {error("name")}
      </div>

      <div className="vetria-apply__field">
        <label htmlFor="gf-email">Email</label>
        <input {...field("email")} type="email" autoComplete="email" placeholder="riya@yourbusiness.com"
          value={fields.email} onChange={(e) => set("email", e.target.value)} />
        {error("email")}
      </div>

      <div className="vetria-apply__field">
        <label htmlFor="gf-business">Business name</label>
        <input {...field("business")} type="text" autoComplete="organization" placeholder="Corner Table Café"
          value={fields.business} onChange={(e) => set("business", e.target.value)} />
        {error("business")}
      </div>

      <div className="vetria-apply__field">
        <label htmlFor="gf-city">City and country</label>
        <input {...field("city")} type="text" placeholder="Delhi, India"
          value={fields.city} onChange={(e) => set("city", e.target.value)} />
        {error("city")}
      </div>

      <div className="vetria-apply__field">
        <label htmlFor="gf-link">Website or Instagram</label>
        <input {...field("link")} type="text" placeholder="@cornertablecafe"
          value={fields.link} onChange={(e) => set("link", e.target.value)} />
      </div>

      <div className="vetria-apply__field">
        <label htmlFor="gf-category">Category</label>
        <select {...field("category")} value={fields.category} onChange={(e) => set("category", e.target.value)}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="vetria-apply__field vetria-apply__full">
        <label htmlFor="gf-story">What&apos;s the story?</label>
        <textarea {...field("story")} rows={5}
          placeholder="The moment that changed things for your business, in a few sentences."
          value={fields.story} onChange={(e) => set("story", e.target.value)} />
        {error("story")}
      </div>

      <div className="vetria-apply__full">
        <div className="vetria-apply__check">
          <input {...field("agree")} type="checkbox" checked={fields.agree}
            onChange={(e) => set("agree", e.target.checked)} />
          <label htmlFor="gf-agree">
            I understand editorial features are chosen by Vitrea&apos;s editors and are never paid for.
          </label>
        </div>
        {error("agree")}
      </div>

      {/* Hidden from people; bots that tick it are rejected by Web3Forms. */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
        checked={honeypot}
        onChange={(e) => setHoneypot(e.target.checked)}
      />

      <div className="vetria-apply__full">
        <button type="submit" className="vetria-btn vetria-apply__submit" disabled={sending} aria-busy={sending}>
          {sending ? "Sending…" : "Send application"}
        </button>
        {sendError && (
          <p role="alert" className="vetria-apply__error" style={{ marginTop: 12 }}>
            {sendError}
          </p>
        )}
      </div>
    </form>
  );
}
