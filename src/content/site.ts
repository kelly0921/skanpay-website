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
    "BeamCash is being used to test the clearest QR payment flow before broader SkanPay partner conversations."
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
    label: "Broader payment + redemption vision",
    status: "Concept / product exploration",
    description:
      "A QR-based checkout concept exploring how payments, coupons, vouchers, rewards, and gift card value can be combined into a simpler flow.",
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
    label: "Small-seller QR payment product",
    status: PRODUCT_STATUS.label,
    description:
      "A lightweight QR payment experience for sellers who want to collect payments without forcing buyers through complicated setup.",
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

export const problemPoints = [
  "Buyers should not need to download another app just to complete a simple payment.",
  "Sellers should not need a complex storefront or full point-of-sale setup for lightweight transactions.",
  "Coupon, voucher, reward, and gift card flows should not feel disconnected from checkout.",
  "Payment confirmation should be clear for both the buyer and the seller.",
  "Local and temporary sellers need payment tools that match how they actually sell."
];

export const painSolutions = [
  {
    pain: "People want to pay, but they do not always carry cash.",
    response: "BeamCash gives sellers a QR surface buyers can open from the phone already in their hand."
  },
  {
    pain: "Small sellers often need payment acceptance without a full POS setup.",
    response: "The demo keeps the flow narrow: show code, scan, review amount, choose payment method, confirm."
  },
  {
    pain: "Discounts, vouchers, gift cards, and payment can become separate checkout steps.",
    response: "SkanPay's broader patent-pending work explores payment and redemption as one coordinated request."
  }
];

export const beamcashFlow = [
  "Show QR",
  "Scan",
  "Review amount",
  "Choose payment",
  "Confirm"
];

export const skanpayFlow = [
  "Scan checkout QR",
  "Apply coupon, voucher, reward, or stored value",
  "Complete payment",
  "Confirm redemption and payment"
];

export const beamcashHighlights = [
  {
    title: "QR-first selling",
    copy: "Share a simple QR code in person, online, at a table, or during an event."
  },
  {
    title: "Lightweight buyer flow",
    copy: "Designed around reducing buyer friction, especially for one-time or casual payments."
  },
  {
    title: "Clear confirmation",
    copy: "Both sides should understand whether a payment was completed, pending, or failed."
  },
  {
    title: "Built for small, real-world transactions",
    copy: "BeamCash is shaped around sellers who do not need a full storefront or complex POS setup."
  }
];

export const useCases = [
  {
    title: "Pop-up vendors",
    need: "Accept quick payments without a full point-of-sale setup.",
    bestFit: "BeamCash"
  },
  {
    title: "Student fundraisers",
    need: "Collect small payments at tabling events, club fundraisers, campus markets, or community events.",
    bestFit: "BeamCash"
  },
  {
    title: "Artists and creators",
    need: "Accept tips, sales, or event payments through a simple QR.",
    bestFit: "BeamCash"
  },
  {
    title: "Garage sales and casual sellers",
    need: "Collect one-time payments without complicated setup.",
    bestFit: "BeamCash"
  },
  {
    title: "Local merchants",
    need: "Connect payment with coupons, vouchers, gift cards, or redemption flows.",
    bestFit: "SkanPay"
  },
  {
    title: "Redemption-heavy businesses",
    need: "Reduce friction between discount validation, stored value, and payment.",
    bestFit: "SkanPay"
  }
];

export const roadmapItems = [
  { status: "Complete", title: "Prototype product flow" },
  { status: "In progress", title: "Collect seller feedback" },
  { status: "Exploring", title: "Test lightweight QR checkout use cases" },
  { status: "Planned", title: "Refine payment confirmation experience" },
  { status: "Exploring", title: "Evaluate redemption and coupon flow opportunities" }
];

export const faqs = [
  {
    question: "What is the relationship between SkanPay and BeamCash?",
    answer:
      "SkanPay is the broader payment and redemption vision. BeamCash is a product direction under SkanPay focused on lightweight QR payments for small sellers."
  },
  {
    question: "Who is BeamCash for?",
    answer:
      "BeamCash is for small sellers, artists, student fundraisers, pop-up vendors, local events, garage sales, and other people collecting simple real-world payments."
  },
  {
    question: "Is BeamCash live?",
    answer:
      "BeamCash is currently presented as a prototype product direction and is looking for feedback from potential sellers and partners."
  },
  {
    question: "Do buyers need to create an account?",
    answer:
      "BeamCash is being designed around a lightweight buyer flow. Final account requirements depend on the product implementation."
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
