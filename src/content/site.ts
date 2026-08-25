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
    "SkanPay is the broader payment-and-redemption direction. BeamCash is the working demo used to learn from real checkout behavior."
};

export const navigationItems = [
  { href: "/qr-payments/", label: "SkanPay" },
  { href: "/beamcash-demo/", label: "BeamCash Demo" },
  { href: "/about/", label: "About" }
];

export const productDirections = [
  {
    name: "SkanPay",
    label: "Payment and redemption orchestration",
    status: "Concept / product exploration",
    description:
      "A platform direction for helping participating wallets, merchant checkout systems, and gateway paths coordinate eligible value and final payment.",
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
    role: "Payment + redemption platform direction",
    description:
      "Helps participating wallets, merchant checkout, and payment partners coordinate eligible value, final balance, and confirmation."
  },
  {
    name: "BeamCash",
    role: "Small-seller learning product",
    description:
      "Shows the simpler human moment first: seller displays a QR, buyer reviews the details, seller sees a result."
  },
  {
    name: "Partners",
    role: "Pilot path",
    description:
      "A gateway, wallet, merchant platform, or promotion owner can start with one defined checkout or redemption problem."
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
    problem: "Offers and wallet value often fail at checkout.",
    solution: "SkanPay is focused on helping eligible value apply inside one coordinated payment flow."
  },
  {
    problem: "Merchants do not want a new integration for every wallet or coupon source.",
    solution: "The model is designed around participating systems sharing only the checkout information they need."
  },
  {
    problem: "Promotion owners need to know whether value was actually redeemed.",
    solution: "A completed flow should show what was applied, what was paid, and what result came back."
  }
];

export const beamcashFlow = [
  "Seller shows a BeamCash QR",
  "Buyer reviews seller and amount",
  "Buyer continues checkout",
  "Seller sees confirmation status"
];

export const skanpayFlow = [
  "Customer presents a participating wallet or code",
  "Eligible value is checked at checkout",
  "Merchant finalizes the invoice",
  "Final payment and confirmation are returned"
];

export const skanpayDefinitions = [
  {
    label: "Helps with",
    items: [
      "Participating wallet and offer acceptance",
      "Coupon, voucher, gift-card, or loyalty value at checkout",
      "Clear confirmation of redeemed value and final payment"
    ]
  },
  {
    label: "What it is not",
    items: [
      "Not a consumer wallet brand",
      "Not the default money mover",
      "Not a promise that every app or merchant works without integration"
    ]
  }
];

export const beamcashHighlights = [
  {
    title: "Seller view",
    copy: "A simple surface for showing the active QR request."
  },
  {
    title: "Buyer review",
    copy: "Merchant and amount details appear before checkout continues."
  },
  {
    title: "Status return",
    copy: "The seller sees a result state they can act on."
  },
  {
    title: "Product proof",
    copy: "Partners can evaluate the handoff through real screens."
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
