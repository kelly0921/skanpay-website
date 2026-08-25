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
  label: "Current stage",
  detail:
    "BeamCash is ready for product feedback. SkanPay is being shaped for merchant, wallet, and redemption conversations."
};

export const navigationItems = [
  { href: "/beamcash-demo/", label: "BeamCash" },
  { href: "/qr-payments/", label: "Technology" },
  { href: "/partners/", label: "Partners" },
  { href: "/contact/", label: "Contact" }
];

export const productDirections = [
  {
    name: "SkanPay",
    label: "Infrastructure model",
    status: "Concept / product exploration",
    description:
      "A partner-facing model for QR checkout requests, payment states, merchant results, and redemption coordination.",
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
    label: "Product proof",
    status: PRODUCT_STATUS.label,
    description:
      "A working demo that turns the seller QR and buyer approval handoff into screens people can review.",
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
    pain: "Cash is no longer the default.",
    response: "A seller can present a QR request and let the buyer continue from the phone already in hand."
  },
  {
    pain: "QR codes need payment context.",
    response: "The buyer should see who they are paying, the amount, and the action before continuing."
  },
  {
    pain: "Partners need defined states.",
    response: "Created, scanned, approved, failed, cancelled, and confirmed states make the handoff supportable."
  }
];

export const beamcashFlow = [
  "Seller presents code",
  "Buyer reviews merchant and amount",
  "Payment choice opens",
  "Checkout status returns"
];

export const skanpayFlow = [
  "Create checkout request",
  "Attach amount and merchant reference",
  "Coordinate payment or redemption path",
  "Return seller-readable status"
];

export const beamcashHighlights = [
  {
    title: "Seller surface",
    copy: "Dashboard, QR code, and payout context stay in one lightweight view."
  },
  {
    title: "Buyer confidence",
    copy: "Merchant details and amount are visible before the buyer continues."
  },
  {
    title: "Payment states",
    copy: "The product is designed around readable pending, complete, failed, and cancelled outcomes."
  },
  {
    title: "Reviewable proof",
    copy: "Merchants and partners can evaluate the handoff through real screens."
  }
];

export const roadmapItems = [
  { status: "Built", title: "BeamCash seller and buyer screens" },
  { status: "Refining", title: "Confirmation and exception states" },
  { status: "Exploring", title: "Wallet, merchant, and redemption boundaries" },
  { status: "Next", title: "Feedback from payment partners" }
];

export const faqs = [
  {
    question: "What is the relationship between SkanPay and BeamCash?",
    answer:
      "SkanPay is the broader payment and redemption company. BeamCash is the demo product that proves the QR checkout handoff."
  },
  {
    question: "Who is BeamCash for?",
    answer:
      "BeamCash is designed around small sellers, artists, student fundraisers, pop-up vendors, local events, and casual in-person payments."
  },
  {
    question: "Is BeamCash live?",
    answer:
      "BeamCash is currently presented for feedback from sellers, merchants, and payment partners."
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
