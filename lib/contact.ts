// Shared by the contact form (client) and the /api/contact route (server)
// so both sides apply exactly the same rules.

export const SERVICE_OPTIONS = ["Verify", "Build", "Keep", "Not sure"] as const;
export type ServiceOption = (typeof SERVICE_OPTIONS)[number];

export type ContactFields = {
  name: string;
  email: string;
  country: string;
  propertyLocation: string;
  service: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;

export const FIELD_ORDER: (keyof ContactFields)[] = [
  "name",
  "email",
  "country",
  "propertyLocation",
  "service",
  "message",
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function normaliseContact(input: Record<string, unknown>): ContactFields {
  return {
    name: text(input.name),
    email: text(input.email),
    country: text(input.country),
    propertyLocation: text(input.propertyLocation),
    service: text(input.service),
    message: text(input.message),
  };
}

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};

  if (fields.name.length < 2) {
    errors.name = "Please enter your full name.";
  } else if (fields.name.length > 120) {
    errors.name = "Please keep your name under 120 characters.";
  }

  if (!fields.email) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(fields.email) || fields.email.length > 200) {
    errors.email = "Please enter a valid email address, like name@example.com.";
  }

  if (!fields.country) {
    errors.country = "Please tell us which country you live in.";
  } else if (fields.country.length > 80) {
    errors.country = "Please keep this under 80 characters.";
  }

  if (!fields.propertyLocation) {
    errors.propertyLocation = "Please tell us where the property is, or where you hope to buy.";
  } else if (fields.propertyLocation.length > 120) {
    errors.propertyLocation = "Please keep this under 120 characters.";
  }

  if (!SERVICE_OPTIONS.includes(fields.service as ServiceOption)) {
    errors.service = "Please choose the service you need.";
  }

  if (fields.message.length < 10) {
    errors.message = "Please write a short message so we can prepare for the call.";
  } else if (fields.message.length > 2000) {
    errors.message = "Please keep your message under 2000 characters.";
  }

  return errors;
}
