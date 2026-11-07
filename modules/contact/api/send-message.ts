import emailjs from "@emailjs/browser";
import type { ContactPayload } from "../types";

// set these in .env (see README), they are public keys by design in EmailJS
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function sendMessage(payload: ContactPayload) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured");
  }

  // every variable is sent to both templates, so use whichever names you like there:
  // {{name}}, {{email}}, {{message}}, {{reply_to}}, {{to_email}}, {{to_name}}
  const params = {
    name: payload.name,
    email: payload.email,
    reply_to: payload.email,
    to_name: payload.name,
    to_email: payload.email,
    message: payload.message,
  };
  const options = { publicKey: PUBLIC_KEY };

  // the message to me must go through, otherwise the form reports an error
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, options);

  // the auto reply to the visitor is best effort: I already have their message,
  // so a failure here should not show them an error
  if (AUTOREPLY_TEMPLATE_ID) {
    try {
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, params, options);
    } catch (err) {
      console.warn("Auto reply could not be sent", err);
    }
  }
}
