"use client";

import { useRef, useState } from "react";
import {
  FIELD_ORDER,
  SERVICE_OPTIONS,
  normaliseContact,
  validateContact,
  type ContactErrors,
  type ContactFields,
} from "@/lib/contact";

const emptyFields: ContactFields = {
  name: "",
  email: "",
  country: "",
  propertyLocation: "",
  service: "",
  message: "",
};

const labels: Record<keyof ContactFields, string> = {
  name: "Full name",
  email: "Email",
  country: "Country you live in",
  propertyLocation: "Property location in Kenya",
  service: "Service needed",
  message: "Message",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "mt-2 block w-full rounded-xl border bg-paper px-4 py-3.5 text-base text-ink placeholder:text-muted/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function update(name: keyof ContactFields, value: string) {
    const next = { ...fields, [name]: value };
    setFields(next);
    // Once the visitor has tried to submit, re-check as they correct things.
    if (attempted) setErrors(validateContact(normaliseContact(next)));
  }

  function focusFirstError(found: ContactErrors) {
    const first = FIELD_ORDER.find((key) => found[key]);
    if (first) document.getElementById(`contact-${first}`)?.focus();
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    setServerMessage("");

    const clean = normaliseContact(fields);
    const found = validateContact(clean);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      // The summary renders on this update, so focus it on the next frame.
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    // Honeypot: real visitors never see or fill this field.
    const honeypot = new FormData(event.currentTarget).get("company");

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...clean, company: honeypot }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors);
        }
        setServerMessage(data.message ?? "Something went wrong. Please try again, or message us on WhatsApp.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFields(emptyFields);
      setAttempted(false);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setServerMessage("We could not reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="rounded-3xl bg-paper p-8 shadow-card sm:p-10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink" aria-hidden="true">
          <svg viewBox="0 0 20 20" className="h-6 w-6">
            <path d="M5 10.5l3 3L15 7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h2 className="mt-6 font-display text-3xl font-semibold text-ink">Thank you. Your message is with us.</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted">
          We will reply soon to arrange your free 30 minute call.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Send another message
        </button>
      </div>
    );
  }

  const errorKeys = FIELD_ORDER.filter((key) => errors[key]);

  const fieldProps = (name: keyof ContactFields) => ({
    id: `contact-${name}`,
    name,
    value: fields[name],
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? "border-accent" : "border-line hover:border-muted"}`,
  });

  const errorText = (name: keyof ContactFields) =>
    errors[name] ? (
      <p id={`contact-${name}-error`} className="mt-2 text-sm font-medium text-accent">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="contact-form-heading"
      className="rounded-3xl bg-paper p-6 shadow-card sm:p-10"
    >
      <h2 id="contact-form-heading" className="font-display text-3xl font-semibold text-ink">
        Tell us about your property
      </h2>
      <p className="mt-2 text-muted">All fields are required.</p>

      {attempted && errorKeys.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-2xl border border-accent/40 bg-accent/5 p-5"
        >
          <p className="font-semibold text-ink">
            Please check {errorKeys.length === 1 ? "one field" : `${errorKeys.length} fields`} below.
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
            {errorKeys.map((key) => (
              <li key={key}>
                <a href={`#contact-${key}`} className="text-accent underline underline-offset-2">
                  {labels[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-semibold text-ink">
            {labels.name}
          </label>
          <input type="text" autoComplete="name" {...fieldProps("name")} onChange={(e) => update("name", e.target.value)} />
          {errorText("name")}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-semibold text-ink">
            {labels.email}
          </label>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="name@example.com"
            {...fieldProps("email")}
            onChange={(e) => update("email", e.target.value)}
          />
          {errorText("email")}
        </div>

        <div>
          <label htmlFor="contact-country" className="text-sm font-semibold text-ink">
            {labels.country}
          </label>
          <input
            type="text"
            autoComplete="country-name"
            placeholder="For example, United Kingdom"
            {...fieldProps("country")}
            onChange={(e) => update("country", e.target.value)}
          />
          {errorText("country")}
        </div>

        <div>
          <label htmlFor="contact-propertyLocation" className="text-sm font-semibold text-ink">
            {labels.propertyLocation}
          </label>
          <input
            type="text"
            placeholder="For example, Kiambu, Ruiru"
            {...fieldProps("propertyLocation")}
            onChange={(e) => update("propertyLocation", e.target.value)}
          />
          {errorText("propertyLocation")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-service" className="text-sm font-semibold text-ink">
            {labels.service}
          </label>
          <div className="relative">
            <select {...fieldProps("service")} onChange={(e) => update("service", e.target.value)}>
              <option value="" disabled>
                Choose a service
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {errorText("service")}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-sm font-semibold text-ink">
            {labels.message}
          </label>
          <textarea
            rows={5}
            placeholder="What do you own, or hope to buy or build? What would you like us to check?"
            {...fieldProps("message")}
            onChange={(e) => update("message", e.target.value)}
          />
          {errorText("message")}
        </div>

        {/* Honeypot field for bots, hidden from people and assistive tech. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {status === "error" && serverMessage && (
        <p role="alert" className="mt-6 rounded-2xl bg-surface p-4 text-sm font-medium text-ink">
          {serverMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-paper shadow-card transition-colors hover:bg-accent-hover disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
      <p className="mt-4 text-sm text-muted">We only use your details to reply to you.</p>
    </form>
  );
}
