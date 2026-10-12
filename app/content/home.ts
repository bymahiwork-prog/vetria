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
  kicker: "Cover story · Hospitality · Kanpur",
  title: "Seezen Coffee House, Kanpur: the café built for staying",
  standfirst:
    "In Civil Lines, Seezen Coffee House & Kitchen makes the case for the all-day café: sculpted arches, a rope-woven ceiling and doors open 10am to midnight.",
  byline: "By The Vitrea team · 3 min read",
  href: "/features/seezen-coffee-house-kanpur",
  image: "/images/features/seezen/lit-arch-room.jpg" as string | null,
  imageAlt:
    "Seezen's bar room in Kanpur with a rope-woven ceiling, fringed pendant lamps and backlit arches along the walls",
  imagePosition: "40% 50%",
};

// "Latest features" on the homepage is built automatically from app/content/stories.ts.

export const future = {
  kicker: "The Future",
  title: "Where small business is heading, explained",
  intro:
    "AI search, social commerce and the new rules of getting found, written for owners, not analysts.",
  // Until The Future articles exist, the button sends readers to the newsletter.
  cta: { label: "Get it in the weekly letter", href: "/newsletter" },
  // Coming-soon titles. When an article is published, add its href and a read time as meta.
  articles: [
    { title: "How customers now find a business through AI answers", meta: "Coming soon", href: null },
    { title: "Selling inside social apps: what's working now", meta: "Coming soon", href: null },
    { title: "The owner as creator: running social without an agency", meta: "Coming soon", href: null },
  ] as { title: string; meta: string; href: string | null }[],
};

// Series start soon: cards show "Starting soon" until an href is added.
export const series: { title: string; text: string; href: string | null }[] = [
  { title: "Five things I wish I knew", text: "Founders on the lessons nobody told them.", href: null },
  { title: "The future of hospitality", text: "One industry at a time, from the people inside it.", href: null },
  { title: "Brands to watch", text: "Independent names worth knowing this year.", href: null },
];

export const getFeatured = {
  title: "Building something worth a story?",
  text: "Editorial features are free and chosen by our editors. Tell us about your business in ten minutes.",
  cta: { label: "Tell us your story", href: "/get-featured" },
};

export const newsletter = {
  kicker: "The Vitrea letter",
  title: "One founder story and one look ahead, every week",
  note: "Free. Unsubscribe any time.",
};

export const footerLinks = [
  {
    heading: "Read",
    links: [
      { label: "Features", href: "/features" },
      { label: "The Future", href: "/#future" },
      { label: "Series", href: "/#series" },
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
