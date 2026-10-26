// Central place for business details. Values marked TODO must be
// replaced with real details before launch.

export const site = {
  name: "Al-Mas Advisory",
  tagline: "Advice as precious as a diamond",
  parentCompany: "Sharq Afriqiya General Traders Limited",
  location: "Nairobi, Kenya. Serving clients worldwide.",

  // TODO: replace with the real inbox.
  email: "hello@example.com",

  // TODO: replace with the real WhatsApp number (digits only for the link).
  whatsappDisplay: "+254 700 000 000",
  whatsappNumber: "254700000000",

  copyrightYear: 2026,
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}`;
export const emailHref = `mailto:${site.email}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;
