// Feature stories. Each entry becomes a page at /features/<slug>.
// To publish a new feature, copy the sample below, give it a new slug and fill it in.
// Anything in [square brackets] is a placeholder. Images are null until real photos exist.

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | {
      type: "image";
      src: string | null;
      alt: string;
      caption?: string;
      // Shape on screen, e.g. "3 / 2" (default) or "4 / 5" for tall photos.
      aspectRatio?: string;
      // Which part stays visible when cropped, e.g. "50% 30%".
      position?: string;
    };

export type FeatureStory = {
  slug: string;
  // true = kept out of Google and the sitemap (placeholders, unfinished drafts). Set false to publish.
  draft: boolean;
  // ISO date (YYYY-MM-DD) when published; used in search results and structured data.
  publishedAt: string | null;
  kicker: string;
  title: string;
  standfirst: string;
  writer: string;
  date: string;
  readTime: string;
  heroImage: string | null;
  heroAlt: string;
  heroCaption: string;
  // Which part of the hero photo stays visible when cropped, e.g. "50% 60%".
  heroPosition?: string;
  body: StoryBlock[];
  business: {
    name: string;
    details: string;
    // Optional: shown in the "About the business" box when provided.
    logo: string | null;
    // Full https URLs, or "" to hide the link.
    website: string;
    instagram: string;
  };
  readNext: { kicker: string; title: string; href: string; image: string | null }[];
};

export const stories: FeatureStory[] = [
  {
    slug: "seezen-coffee-house-kanpur",
    draft: false,
    publishedAt: "2026-10-12",
    kicker: "Feature · Hospitality · Kanpur",
    title: "Seezen Coffee House, Kanpur: the café built for staying",
    standfirst:
      "In Kanpur's Civil Lines, Seezen Coffee House & Kitchen makes the case for the all-day café: sculpted arches, a rope-woven ceiling and doors open 10am to midnight.",
    writer: "The Vitrea team",
    date: "12 October 2026",
    readTime: "3 min read",
    heroImage: "/images/features/seezen/main-floor-arches.jpg",
    heroAlt:
      "The main floor of Seezen Coffee House & Kitchen in Kanpur: a curved ivory wall with large arched openings looking into a warmly lit bar room and a lounge",
    heroCaption:
      "The main floor at Seezen Coffee House & Kitchen, Civil Lines, Kanpur. Photos courtesy of Seezen.",
    heroPosition: "50% 55%",
    body: [
      {
        type: "paragraph",
        text: "Walk into Seezen Coffee House & Kitchen in Kanpur's Civil Lines and the first thing you notice is not the coffee. It is the wall: a sweep of ivory plaster cut into great curved openings, each one framing a different room behind it. One shows a warm, low-lit bar; another, a lounge of blush velvet sofas. Above it all, a timber balcony runs the length of a double-height hall.",
      },
      {
        type: "paragraph",
        text: "It is a deliberate first impression. Seezen, run by Perfeccion Hospitality, describes itself as a café built around coffee, food and connection, \"designed for more than a quick coffee\". The doors open at 10am and close at midnight, seven days a week, and the space is set up for everything in between: breakfast and brunch, coffee dates, work sessions, business meetings and celebrations.",
      },
      { type: "heading", text: "A room for every hour" },
      {
        type: "paragraph",
        text: "The ground floor is really several rooms sharing one plan. Under the double-height atrium, small round tables sit beneath a cascade of paper lantern pendants, with a slatted timber ceiling far overhead. A line of script on the wall promises that every day brings a new beginning, a new blessing and a new cup of coffee.",
      },
      {
        type: "image",
        src: "/images/features/seezen/atrium.jpg",
        alt: "Seezen's double-height atrium with paper lantern pendants, blush chairs, round tables and a sculpted staircase wall",
        caption: "The double-height atrium, with paper lanterns hung beneath a slatted timber ceiling.",
        aspectRatio: "4 / 5",
        position: "50% 65%",
      },
      {
        type: "paragraph",
        text: "Step through the arches and the mood changes. In the bar room, the ceiling is wrapped in thick woven rope and hung with fringed jute pendants, while backlit arches and circles glow along the walls. The coffee counter is finished in rough, stone-like plaster and lit from beneath. It is the kind of room people photograph before they order.",
      },
      {
        type: "image",
        src: "/images/features/seezen/lit-arch-room.jpg",
        alt: "Seezen's bar room with a rope-woven ceiling, fringed jute pendant lamps, backlit arch shapes on the walls and a stone-finish coffee counter",
        caption: "The bar room: a rope-woven ceiling, fringed pendants and backlit arches along the walls.",
      },
      {
        type: "paragraph",
        text: "Upstairs is quieter. Wooden screens and cane lamps divide the floor into nooks, and a wall of arched niches, dressed with bare branches, sits behind deep velvet sofas. It is a floor made for a long conversation rather than a quick espresso.",
      },
      {
        type: "image",
        src: "/images/features/seezen/upper-level.jpg",
        alt: "Seezen's upper level with tall wooden screens, cane pendant lamps, velvet sofas and a wall of arched niches",
        caption: "The upper level, divided by timber screens and lit by cane pendants.",
        aspectRatio: "4 / 5",
        position: "50% 60%",
      },
      { type: "quote", text: "Beyond coffee. Beyond seasons.", attribution: "Seezen's motto" },
      { type: "heading", text: "What's on the plate" },
      {
        type: "paragraph",
        text: "The kitchen matches the room's ambition. Seezen pairs handcrafted coffee with what it calls globally inspired cuisine and artisan desserts. Rigatoni arrives in a hand-painted bowl; avocado toast comes on thick-cut bread with pomegranate, dill and pumpkin seeds; rice bowls are heaped with a glossy stir-fry and sesame.",
      },
      {
        type: "image",
        src: "/images/features/seezen/rigatoni.jpg",
        alt: "A member of Seezen's team in a branded apron holding a hand-painted bowl of rigatoni with vegetables and grated cheese",
        caption: "Rigatoni, served in a hand-painted bowl.",
        aspectRatio: "4 / 5",
        position: "50% 55%",
      },
      {
        type: "paragraph",
        text: "Names to look for on the menu include Mamma Rossa Rigatoni, a Sizzling Bowl, Vietnamese Cold Coffee and a Belgian Velvet Kunafa Pistachio. Seezen counts its Cookie Dough Pie among its signature desserts, and there is a Chocolate Fondue for the table.",
      },
      {
        type: "image",
        src: "/images/features/seezen/avocado-toast.jpg",
        alt: "Avocado toast at Seezen topped with pomegranate seeds, dill, pumpkin seeds and cream, with salad leaves and cherry tomatoes",
        caption: "Avocado toast with pomegranate, dill and pumpkin seeds.",
        aspectRatio: "4 / 5",
        position: "50% 60%",
      },
      { type: "heading", text: "Why a café like this matters" },
      {
        type: "paragraph",
        text: "For an independent business, a room like Seezen's does a job advertising struggles to do. Every arch, lantern and glowing wall is a reason for a guest to take out their phone, and every photo they post tells their friends where they spent the afternoon. Design here is not decoration. It is how a café gets talked about.",
      },
      {
        type: "paragraph",
        text: "The other lesson is time. A café open fourteen hours a day has to earn its place at breakfast, at lunch and over a late dessert. Seezen's answer is a menu wide enough to justify each of those visits, and a building with enough different corners that the second visit doesn't feel like the first.",
      },
      {
        type: "image",
        src: "/images/features/seezen/rice-bowl.jpg",
        alt: "A rice bowl at Seezen with stir-fried vegetables, sesame seeds and spring onions, beside a Seezen menu",
        caption: "A rice bowl, with the menu close at hand.",
        aspectRatio: "4 / 5",
        position: "50% 55%",
      },
      { type: "heading", text: "Plan your visit" },
      {
        type: "paragraph",
        text: "If you're putting together a list of cafés in Kanpur for brunch or a long coffee, Seezen belongs on it.",
      },
      { type: "paragraph", text: "Where: 14/63, Civil Lines, Kanpur 208001, Uttar Pradesh." },
      { type: "paragraph", text: "When: Every day, 10am to midnight." },
      {
        type: "paragraph",
        text: "What to order: Vietnamese Cold Coffee, Mamma Rossa Rigatoni, Avocado Toast and the Cookie Dough Pie.",
      },
      {
        type: "paragraph",
        text: "Good for: Breakfast and brunch, coffee dates, work sessions, business meetings and celebrations.",
      },
    ],
    business: {
      name: "Seezen Coffee House & Kitchen",
      details: "Civil Lines, Kanpur · Café and restaurant · Open daily, 10am–midnight",
      logo: null,
      website: "https://seezen.in",
      instagram: "https://www.instagram.com/seezenindia/",
    },
    readNext: [],
  },
  {
    slug: "sample-story",
    draft: true,
    publishedAt: null,
    kicker: "Feature · Hospitality · [City]",
    title: "How [Founder name] turned a twelve-seat café into a waitlist",
    standfirst:
      "[Standfirst: one or two sentences on the decision, the risk and what changed.]",
    writer: "[Writer name]",
    date: "[Date]",
    readTime: "[8] min read",
    heroImage: null,
    heroAlt: "[Hero photo, full width: founder in their space]",
    heroCaption: "[Photo caption and credit]",
    body: [
      {
        type: "paragraph",
        text: "[Opening paragraph in the founder's own words or the writer's scene-setting. Where they were, what they were trying to build, and the moment it changed.]",
      },
      { type: "paragraph", text: "[Second paragraph: background, the early days, the first customers.]" },
      { type: "heading", text: "[Section heading: the hardest decision]" },
      { type: "paragraph", text: "[Q&A answer or narrative paragraph. Keep paragraphs short for phone reading.]" },
      {
        type: "quote",
        text: "[One line from the founder worth putting on a poster.]",
        attribution: "[Founder name], [Business]",
      },
      { type: "paragraph", text: "[Paragraph continuing the story.]" },
      { type: "image", src: null, alt: "[In-story photo: product, team or space]" },
      { type: "heading", text: "[Section heading: what's next]" },
      {
        type: "paragraph",
        text: "[Closing paragraph: where the business is going and the lesson for other owners.]",
      },
    ],
    business: {
      name: "[Business name]",
      details: "[City] · [Category] · [Founded year]",
      logo: null,
      website: "#",
      instagram: "#",
    },
    readNext: [
      { kicker: "Feature · F&B", title: "[Related feature headline]", href: "/features/sample-story", image: null },
      { kicker: "The Future", title: "[Related insight headline]", href: "/#future", image: null },
      { kicker: "Series · Five things", title: "[Related series headline]", href: "/#series", image: null },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export const publishedStories = () => stories.filter((story) => !story.draft);

// Published stories, newest first (by publishedAt, then by position in the list above).
export const latestStories = () =>
  publishedStories()
    .map((story, i) => ({ story, i }))
    .sort((a, b) => (b.story.publishedAt ?? "").localeCompare(a.story.publishedAt ?? "") || a.i - b.i)
    .map(({ story }) => story);
