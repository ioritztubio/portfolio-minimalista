import React, { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { siteStrings } from "../i18n/site";
import { routeHref } from "../lib/router";
import { trackEvent } from "../lib/analytics";
import { OWNER } from "../legal/content";

// Messages are delivered by Web3Forms (free key at https://web3forms.com).
// Without VITE_WEB3FORMS_KEY the form falls back to opening the visitor's mail app.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

type Field = "name" | "email" | "message" | "consent";
type Status = "idle" | "sending" | "success" | "error";

interface Values {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

const EMPTY: Values = { name: "", email: "", message: "", consent: false };
const ORDER: Field[] = ["name", "email", "message", "consent"];

function validate(v: Values): Partial<Record<Field, true>> {
  const errors: Partial<Record<Field, true>> = {};
  if (!v.name.trim()) errors.name = true;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) errors.email = true;
  if (v.message.trim().length < 10) errors.message = true;
  if (!v.consent) errors.consent = true;
  return errors;
}

const inputClass =
  "w-full rounded-2xl px-4 py-3 text-base bg-[var(--glass-strong)] text-[var(--ink)] border transition-[border-color,background-color] duration-200 " +
  "placeholder:text-[var(--ink-3)] focus:bg-[var(--glass-strong)] focus-visible:outline-2 focus-visible:outline-[var(--ink)] focus-visible:outline-offset-2";

export const ContactForm: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang } = useLanguage();
  const s = siteStrings(lang).contact;
  const uid = useId();
  const id = (f: string) => `${uid}-${f}`;

  const [values, setValues] = useState<Values>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const refs = useRef<Partial<Record<Field, HTMLInputElement | HTMLTextAreaElement | null>>>({});

  // Errors only appear after the first submit attempt, then update live as the user fixes them.
  const errors = submitted ? validate(values) : {};
  const hasErrors = Object.keys(errors).length > 0;

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    const found = validate(values);
    const firstInvalid = ORDER.find((f) => found[f]);
    if (firstInvalid) {
      refs.current[firstInvalid]?.focus();
      return;
    }

    const honeypot = (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement).checked;
    if (honeypot) return;

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio: ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\n${values.name} <${values.email}>`);
      window.location.href = `mailto:${OWNER.email}?subject=${subject}&body=${body}`;
      trackEvent("contact_mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio: ${values.name}`,
          from_name: "ioritztubio.dev",
          name: values.name,
          email: values.email,
          message: values.message,
          privacy_consent: `Accepted on ${new Date().toISOString()}`,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("success");
      setValues(EMPTY);
      setSubmitted(false);
      trackEvent("contact_sent");
    } catch {
      setStatus("error");
    }
  };

  const describedBy = (f: Field, extra?: string) =>
    [errors[f] ? id(`${f}-error`) : null, extra].filter(Boolean).join(" ") || undefined;

  const borderFor = (f: Field) => (errors[f] ? "var(--danger)" : "var(--line-2)");

  const ErrorText: React.FC<{ field: Field }> = ({ field }) =>
    errors[field] ? (
      <p id={id(`${field}-error`)} className="text-sm mt-1.5" style={{ color: "var(--danger)" }}>
        {s.errors[field]}
      </p>
    ) : null;

  const Label: React.FC<{ field: Field; children: React.ReactNode }> = ({ field, children }) => (
    <label htmlFor={id(field)} className="block text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
      {children}{" "}
      <span className="font-normal" style={{ color: "var(--ink-3)" }}>({s.required})</span>
    </label>
  );

  return (
    <div className={`glass rounded-[28px] p-6 md:p-8 ${className}`} role="group" aria-labelledby={id("title")}>
      <div className="grid gap-6">
        <div>
          <h3 id={id("title")} className="text-2xl md:text-3xl font-semibold mb-3" style={{ color: "var(--ink)", letterSpacing: "-0.025em" }}>
            {s.title}
          </h3>
          <p className="text-[15px] leading-relaxed max-w-md" style={{ color: "var(--ink-2)" }}>
            {s.subtitle}
          </p>
        </div>

        <div>
          <AnimatePresence mode="wait" initial={false}>
            {status === "success" ? (
              <motion.div
                key="success"
                role="status"
                initial={{ opacity: 0, transform: "scale(0.97)", filter: "blur(4px)" }}
                animate={{ opacity: 1, transform: "scale(1)", filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="rounded-2xl p-6 flex items-start gap-3"
                style={{ backgroundColor: "var(--glass-strong)", boxShadow: "inset 0 0 0 1px var(--line)" }}
              >
                <span className="mt-0.5 rounded-full p-1" style={{ backgroundColor: "var(--solid)", color: "var(--on-solid)" }}>
                  <Check className="w-4 h-4" aria-hidden="true" />
                </span>
                <p style={{ color: "var(--ink)" }}>{s.success}</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                initial={false}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.2 }}
                className="grid gap-5"
              >
                {hasErrors && (
                  <p role="alert" className="text-sm" style={{ color: "var(--danger)" }}>
                    {s.errors.summary}
                  </p>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label field="name">{s.name}</Label>
                    <input
                      ref={(el) => { refs.current.name = el; }}
                      id={id("name")}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={describedBy("name")}
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputClass}
                      style={{ borderColor: borderFor("name") }}
                    />
                    <ErrorText field="name" />
                  </div>
                  <div>
                    <Label field="email">{s.email}</Label>
                    <input
                      ref={(el) => { refs.current.email = el; }}
                      id={id("email")}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={describedBy("email")}
                      value={values.email}
                      onChange={(e) => set("email", e.target.value)}
                      className={inputClass}
                      style={{ borderColor: borderFor("email") }}
                    />
                    <ErrorText field="email" />
                  </div>
                </div>

                <div>
                  <Label field="message">{s.message}</Label>
                  <textarea
                    ref={(el) => { refs.current.message = el; }}
                    id={id("message")}
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={describedBy("message")}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    className={`${inputClass} resize-y min-h-32`}
                    style={{ borderColor: borderFor("message") }}
                  />
                  <ErrorText field="message" />
                </div>

                {/* Honeypot for bots: hidden from people and assistive tech */}
                <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" className="hidden" autoComplete="off" />

                <div>
                  <div className="flex items-start gap-3">
                    <input
                      ref={(el) => { refs.current.consent = el; }}
                      id={id("consent")}
                      name="consent"
                      type="checkbox"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.consent}
                      aria-describedby={describedBy("consent")}
                      checked={values.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      className="mt-1 w-5 h-5 shrink-0 accent-[var(--ink)]"
                    />
                    <label htmlFor={id("consent")} className="text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                      {s.consentPre}
                      <a href={routeHref("privacy")} className="link-quiet">
                        {s.consentLink}
                      </a>
                      {s.consentPost}
                    </label>
                  </div>
                  <ErrorText field="consent" />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm" style={{ color: "var(--danger)" }}>
                    {s.failure}{" "}
                    <a href={`mailto:${OWNER.email}`} className="underline underline-offset-2">{OWNER.email}</a>
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-solid group disabled:opacity-60"
                  >
                    {status === "sending" ? s.sending : s.submit}
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                  {!WEB3FORMS_KEY && (
                    <p className="text-xs" style={{ color: "var(--ink-3)" }}>{s.mailtoNote}</p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
