// Feature stories. Each entry becomes a page at /features/<slug>.
// To publish a new feature, copy the sample below, give it a new slug and fill it in.
// Anything in [square brackets] is a placeholder. Images are null until real photos exist.

export type StoryBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; attribution: string }
  | { type: "image"; src: string | null; alt: string };

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
  body: StoryBlock[];
  business: {
    name: string;
    details: string;
    logo: string | null;
    website: string;
    instagram: string;
  };
  readNext: { kicker: string; title: string; href: string; image: string | null }[];
};

export const stories: FeatureStory[] = [
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
