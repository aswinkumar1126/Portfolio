"use client";

import { useState } from "react";
import { sendMessage } from "../api/send-message";
import { validateContact } from "../api/validate";
import type { ContactErrors, ContactPayload, ContactStatus } from "../types";

const EMPTY: ContactPayload = { name: "", email: "", message: "" };

export function useContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");

  function onChange(field: keyof ContactPayload, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      await sendMessage(values);
      setValues(EMPTY);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function closeModal() {
    setStatus("idle");
  }

  return { values, errors, status, onChange, onSubmit, closeModal };
}
