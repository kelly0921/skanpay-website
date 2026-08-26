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
    "SkanPay is the broader checkout value direction. BeamCash is the working demo used to learn from real seller and buyer behavior."
};

export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/qr-payments/", label: "SkanPay" },
  { href: "/beamcash-demo/", label: "BeamCash Demo" },
  { href: "/about/", label: "About" }
];

export const productDirections = [
  {
    name: "SkanPay",
    label: "Checkout value platform",
    status: "Concept / product exploration",
    description:
      "A product direction for helping participating wallets, merchants, and payment partners apply eligible value before the final balance is paid.",
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
    label: "Small-seller demo product",
    status: PRODUCT_STATUS.label,
    description:
      "A lightweight QR checkout demo under SkanPay for learning about setup, scan behavior, buyer trust, and seller confirmation.",
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

export const relationshipMap = [
  {
    name: "SkanPay",
    role: "Checkout value platform",
    description:
      "Connects eligible wallet, coupon, voucher, gift-card, or loyalty value to a participating checkout before final payment."
  },
  {
    name: "BeamCash",
    role: "Small-seller learning product",
    description:
      "Shows the visible checkout moment first: seller creates a code, buyer reviews the details, seller sees confirmation."
  },
  {
    name: "Partners",
    role: "Pilot path",
    description:
      "A wallet, merchant platform, payment partner, or promotion owner can start with one defined value-at-checkout problem."
  }
];

export const painSolutions = [
  {
    pain: "Seller uncertainty",
    response: "The seller needs to know whether a scan turned into a real checkout result."
  },
  {
    pain: "Buyer trust",
    response: "The buyer needs merchant and amount context before approving a payment."
  },
  {
    pain: "Partner handoff",
    response: "Payment and redemption partners need clear states they can support."
  }
];

export const checkoutProblems = [
  {
    problem: "A customer has value, but checkout does not know how to use it.",
    solution: "SkanPay is focused on helping eligible wallet, coupon, voucher, gift-card, or loyalty value apply before payment."
  },
  {
    problem: "A merchant cannot connect every app and offer source one by one.",
    solution: "The model is designed around a shared checkout path for participating wallets, value programs, and merchant systems."
  },
  {
    problem: "A promotion owner needs proof that value turned into a completed sale.",
    solution: "A completed flow should show what was applied, what final balance was paid, and what result came back."
  }
];

export const beamcashFlow = [
  "Create a BeamCash code",
  "Display it at the checkout moment",
  "Buyer reviews seller and amount",
  "Seller sees confirmation"
];

export const skanpayFlow = [
  "Customer presents eligible value",
  "Merchant checkout applies it",
  "Customer pays the final balance",
  "Confirmation returns to the right parties"
];

export const checkoutValueFlow = [
  {
    label: "Eligible value",
    detail: "Wallet, offer, loyalty, coupon, voucher, or gift-card value is identified for the transaction."
  },
  {
    label: "Checkout rules",
    detail: "The merchant checkout decides what can be applied to the current basket or invoice."
  },
  {
    label: "Final payment",
    detail: "The customer pays the remaining balance through the participating payment path."
  },
  {
    label: "Shared confirmation",
    detail: "The result shows what value was applied, what was paid, and what each party needs to know."
  }
];

export const beamcashHighlights = [
  {
    title: "Seller view",
    copy: "A simple surface for showing the active QR code."
  },
  {
    title: "Buyer review",
    copy: "Merchant and amount details appear before checkout continues."
  },
  {
    title: "Status return",
    copy: "The seller sees a confirmation they can act on."
  },
  {
    title: "Product proof",
    copy: "Partners can evaluate the handoff through real screens."
  }
];

export const roadmapItems = [
  { status: "Built", title: "BeamCash seller and buyer screens" },
  { status: "Refining", title: "Confirmation and exception handling" },
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
