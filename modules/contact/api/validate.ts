import { EMAIL_PATTERN, MESSAGE_MAX_LENGTH } from "../constants";
import type { ContactErrors, ContactPayload } from "../types";

// shared by the form (client) and the route handler (server)
export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  if (!data.name.trim()) errors.name = "Please enter your name";
  if (!EMAIL_PATTERN.test(data.email)) errors.email = "Please enter a valid email";
  if (!data.message.trim()) errors.message = "Please write a message";
  else if (data.message.length > MESSAGE_MAX_LENGTH) errors.message = `Keep it under ${MESSAGE_MAX_LENGTH} characters`;
  return errors;
}
