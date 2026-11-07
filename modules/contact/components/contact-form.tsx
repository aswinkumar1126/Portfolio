"use client";

import { CheckCircle2, Send } from "lucide-react";
import Modal from "@/modules/shared/components/modal";
import { MESSAGE_MAX_LENGTH } from "../constants";
import { useContactForm } from "../hooks/use-contact-form";

const inputClass =
  "w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none focus:border-foreground";
const fieldClass = "flex flex-col gap-2";

export default function ContactForm() {
  const { values, errors, status, onChange, onSubmit, closeModal } = useContactForm();

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className={fieldClass}>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" value={values.name} onChange={(e) => onChange("name", e.target.value)} className={inputClass} />
        {errors.name && <p role="alert" className="text-sm text-muted">{errors.name}</p>}
      </div>

      <div className={fieldClass}>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" type="email" value={values.email} onChange={(e) => onChange("email", e.target.value)} className={inputClass} />
        {errors.email && <p role="alert" className="text-sm text-muted">{errors.email}</p>}
      </div>

      <div className={fieldClass}>
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          rows={5}
          maxLength={MESSAGE_MAX_LENGTH}
          value={values.message}
          onChange={(e) => onChange("message", e.target.value)}
          className={inputClass}
        />
        {errors.message && <p role="alert" className="text-sm text-muted">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80 disabled:opacity-50 sm:py-3"
      >
        {status === "sending" ? "Sending..." : "Send message"} <Send size={16} />
      </button>

      <Modal open={status === "sent"} onClose={closeModal} title="Message sent">
        <p role="status" className="flex items-start gap-2">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-foreground" />
          Thanks, your message has been sent. I&apos;ll get back to you soon.
        </p>
        <button
          type="button"
          onClick={closeModal}
          className="mt-5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Done
        </button>
      </Modal>
      {status === "error" && <p role="alert" className="text-sm">Something went wrong. Please try again or email me directly.</p>}
    </form>
  );
}
