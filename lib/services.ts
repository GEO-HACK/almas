// Single source for service content, used by the home page and /services
// so the two always stay in sync.

export type Service = {
  id: "verify" | "build" | "keep";
  name: string;
  promise: string;
  summary: string;
  intro: string;
  price: string;
  billing: string;
  items: { title: string; body: string }[];
};

export const services: Service[] = [
  {
    id: "verify",
    name: "Verify",
    promise: "Know the land is real before you pay.",
    summary: "We confirm the title, owner and boundaries are real before any money changes hands.",
    intro:
      "Before you send a deposit, we find out whether the land is what the seller says it is, and whether anyone else has a claim on it.",
    price: "From KES XX,XXX per property",
    billing: "One time fee, paid up front",
    items: [
      {
        title: "Title and ownership search",
        body: "We search the title at the lands registry and confirm the seller is the registered owner.",
      },
      {
        title: "Encumbrance and dispute check",
        body: "We look for charges, cautions, court cases and competing claims on the land.",
      },
      {
        title: "Site and beacon visit",
        body: "A surveyor walks the plot, finds the beacons and confirms the size and location match the title.",
      },
      {
        title: "Written report with photos",
        body: "A plain language report with photos, documents and our honest recommendation.",
      },
    ],
  },
  {
    id: "build",
    name: "Build",
    promise: "Watch your house go up from wherever you are.",
    summary: "Monthly dated photos and payments released only when the work is really done.",
    intro:
      "We watch your construction as if it were our own, so you always know what has been built and what your money has paid for.",
    price: "From KES XX,XXX per month",
    billing: "Agreed per project",
    items: [
      {
        title: "Monthly photo and drone updates",
        body: "Dated photos and drone footage every month, so you see real progress for yourself.",
      },
      {
        title: "Contractor payments by milestone",
        body: "Money goes to the contractor only after we confirm each stage is complete.",
      },
      {
        title: "Cost and materials checks",
        body: "We check quotes, quantities and materials on site against what you are paying for.",
      },
      {
        title: "Progress reports",
        body: "A clear written update on what was done, what was spent and what comes next.",
      },
    ],
  },
  {
    id: "keep",
    name: "Keep",
    promise: "A home that earns for you and stays cared for.",
    summary: "Tenants found and vetted, rent sent to you abroad, repairs taken care of.",
    intro:
      "Your finished property should earn for you and stay in good shape. We handle the day to day so you do not have to.",
    price: "From X% of monthly rent",
    billing: "Billed monthly",
    items: [
      {
        title: "Tenant sourcing and vetting",
        body: "We advertise, show the property, check references and agree a fair lease.",
      },
      {
        title: "Rent collection sent abroad",
        body: "Rent is collected on time and sent to your account wherever you live.",
      },
      {
        title: "Repairs and caretaking",
        body: "Trusted fundis and a caretaker keep the property safe and in good repair.",
      },
      {
        title: "Monthly statement",
        body: "One clear statement showing rent in, costs out and the work that was done.",
      },
    ],
  },
];
