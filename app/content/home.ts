// All homepage copy in one place.
// Anything in [square brackets] is a placeholder: replace it with real content before launch.
// Image fields are null until real photography exists; components show a labelled placeholder.

export type Story = {
  kicker: string;
  title: string;
  meta: string;
  href: string;
  image: string | null;
  imageAlt: string;
};

export const coverStory = {
  kicker: "Cover story · Hospitality",
  title: "How [Founder name] turned a twelve-seat café into a waitlist",
  standfirst:
    "[One-line standfirst: the decision, the risk, and what changed for the business.]",
  byline: "By [Writer] · [8] min read",
  href: "/features/sample-story",
  image: null as string | null,
  imageAlt: "[Cover photo: founder in their space, warm natural light]",
};

export const latestFeatures: Story[] = [
  {
    kicker: "Feature · F&B",
    title: "[Headline about a founder's turning point]",
    meta: "[City] · [6] min read",
    href: "/features/sample-story",
    image: null,
    imageAlt: "[Feature photo]",
  },
  {
    kicker: "Feature · Lifestyle",
    title: "[Headline about a brand built on one product]",
    meta: "[City] · [5] min read",
    href: "/features/sample-story",
    image: null,
    imageAlt: "[Feature photo]",
  },
  {
    kicker: "Feature · Retail",
    title: "[Headline about a small team doing big numbers]",
    meta: "[City] · [7] min read",
    href: "/features/sample-story",
    image: null,
    imageAlt: "[Feature photo]",
  },
];

export const future = {
  kicker: "The Future",
  title: "Where small business is heading, explained",
  intro:
    "AI search, social commerce and the new rules of getting found, written for owners, not analysts.",
  cta: { label: "Read The Future", href: "#future" },
  articles: [
    { title: "[How customers find a business through AI answers]", meta: "[5] min read", href: "#future" },
    { title: "[Selling inside social apps: what's working now]", meta: "[6] min read", href: "#future" },
    { title: "[The owner as creator: running social without an agency]", meta: "[4] min read", href: "#future" },
  ],
};

export const series = [
  { title: "Five things I wish I knew", text: "Founders on the lessons nobody told them.", href: "#series" },
  { title: "The future of [industry]", text: "One industry a month, from the people inside it.", href: "#series" },
  { title: "Brands to watch", text: "Independent names worth knowing this year.", href: "#series" },
];

export const getFeatured = {
  title: "Building something worth a story?",
  text: "Editorial features are free and chosen by our editors. Tell us about your business in ten minutes.",
  cta: { label: "Tell us your story", href: "/get-featured" },
};

export const newsletter = {
  kicker: "The Vetria letter",
  title: "One founder story and one look ahead, every week",
  note: "Free. Unsubscribe any time.",
};

export const footerLinks = [
  {
    heading: "Read",
    links: [
      { label: "Features", href: "#latest" },
      { label: "The Future", href: "#future" },
      { label: "Series", href: "#series" },
    ],
  },
  {
    heading: "Work with us",
    links: [
      { label: "Get featured", href: "/get-featured" },
      { label: "Partner with us", href: "/get-featured#partner" },
      { label: "Editorial policy", href: "/editorial-policy" },
    ],
  },
  {
    heading: "Follow",
    links: [
      // TODO: replace "#" with the real profile URLs once the handles are locked.
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];
