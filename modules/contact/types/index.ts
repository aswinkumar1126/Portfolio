export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export type ContactStatus = "idle" | "sending" | "sent" | "error";

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;
