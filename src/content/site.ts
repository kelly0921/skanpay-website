export const CONTACT_EMAIL = "support@skanpay.us";
export const COLLABORATION_EMAIL = "support@skanpay.us";

const mailto = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const INTEREST_LIST_URL = mailto(
  "Join the BeamCash interest list",
  "Name:\nEmail:\nSeller type or organization:\nHow do you collect payments today?\n"
);

export const FEEDBACK_FORM_URL = mailto(
  "BeamCash product feedback",
  "Name:\nEmail:\nWhat kind of seller/user are you?\nWhat payment problem should BeamCash solve for you?\n"
);

export const CONTACT_URL = mailto(
  "SkanPay inquiry",
  "Name:\nEmail:\nCompany or organization:\nInquiry type:\n\nMessage:\n"
);

export const PRODUCT_STATUS = {
  label: "Prototype",
  detail:
    "BeamCash demonstrates the core QR payment flow while SkanPay develops the broader payment and redemption model."
};

export const navigationItems = [
  { href: "/#beamcash", label: "BeamCash" },
  { href: "/#skanpay", label: "SkanPay" },
  { href: "/beamcash-demo/", label: "Demo" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" }
];

export const productDirections = [
  {
    name: "SkanPay",
    label: "Payment and redemption layer",
    status: "Concept / product exploration",
    description:
      "A QR checkout model for coordinating payment approval, merchant confirmation, and coupon or stored-value redemption.",
    bestFor: [
      "Coupon redemption",
      "Voucher flows",
      "Gift cards",
      "Merchant checkout",
      "Payment + redemption experiences"
    ]
  },
  {
    name: "BeamCash",
    label: "QR payment demo",
    status: PRODUCT_STATUS.label,
    description:
      "A focused demo that shows how a seller QR code can lead to a clear buyer review and confirmation flow.",
    bestFor: [
      "Pop-up vendors",
      "Artists and creators",
      "Student fundraisers",
      "Garage sales",
      "Local events",
      "Small service providers"
    ]
  }
];

export const painSolutions = [
  {
    pain: "Customers do not always have cash.",
    response: "A QR request lets the buyer open a checkout flow from the phone already in hand."
  },
  {
    pain: "Small sellers do not need a full POS for every sale.",
    response: "BeamCash keeps the path narrow: show code, review amount, choose payment, confirm."
  },
  {
    pain: "Offers and payments often become separate steps.",
    response: "SkanPay explores payment and redemption as one coordinated checkout request."
  }
];

export const beamcashFlow = [
  "Seller displays QR",
  "Buyer reviews amount",
  "Payment option is selected",
  "Result is confirmed"
];

export const skanpayFlow = [
  "Create checkout request",
  "Apply offer or stored value",
  "Route payment approval",
  "Return merchant result"
];

export const beamcashHighlights = [
  {
    title: "QR request",
    copy: "A seller presents one code for the payment moment."
  },
  {
    title: "Buyer review",
    copy: "The buyer sees seller context and amount before continuing."
  },
  {
    title: "Clear result",
    copy: "The experience is shaped around completed, pending, failed, or cancelled outcomes."
  },
  {
    title: "Real-world selling",
    copy: "Built for pop-ups, fundraisers, artists, local events, and lightweight sales."
  }
];

export const roadmapItems = [
  { status: "Built", title: "BeamCash QR payment demo" },
  { status: "Refining", title: "Seller and buyer confirmation states" },
  { status: "Exploring", title: "Merchant, wallet, and redemption handoffs" },
  { status: "Next", title: "Feedback from sellers and payment partners" }
];

export const faqs = [
  {
    question: "What is the relationship between SkanPay and BeamCash?",
    answer:
      "SkanPay is the broader QR payment and redemption company. BeamCash is the demo product used to show the payment flow."
  },
  {
    question: "Who is BeamCash for?",
    answer:
      "BeamCash is designed around small sellers, artists, student fundraisers, pop-up vendors, local events, and casual in-person payments."
  },
  {
    question: "Is BeamCash live?",
    answer:
      "BeamCash is currently presented as a prototype demo and is being used for feedback from sellers, merchants, and partners."
  },
  {
    question: "Do buyers need to create an account?",
    answer:
      "The demo is designed around a lightweight buyer flow. Final account requirements depend on implementation decisions."
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Supported payment methods will depend on product implementation and availability. The site does not claim a specific processor or wallet integration yet."
  },
  {
    question: "How can I give feedback or collaborate?",
    answer:
      "Use the interest list, product feedback link, or contact email to share your seller workflow, merchant use case, or collaboration question."
  }
];
