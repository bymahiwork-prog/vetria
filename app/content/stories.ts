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
    slug: "indian-accent-new-delhi",
    draft: false,
    publishedAt: "2026-10-12",
    kicker: "Feature · Restaurant · New Delhi",
    title: "Indian Accent, New Delhi: modern Indian, still evolving",
    standfirst:
      "At The Lodhi in New Delhi, Indian Accent has spent over fifteen years reworking Indian classics into tasting menus, with a decade on Asia's 50 Best list.",
    writer: "The Vitrea team",
    date: "12 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "The bread at Indian Accent has always been a small provocation. A naan the size of a coin, stuffed with melted blue cheese, became one of the kitchen's best-known signatures. Today the menu at this restaurant on Lodhi Road in New Delhi lists a hundred-layer paneer and a potato chaat finished with black truffle. The dishes change; the habit of making the familiar look new does not.",
      },
      {
        type: "paragraph",
        text: "Indian Accent opened in 2009 at The Manor, a boutique hotel in Friends Colony, under the restaurateur Rohit Khattar. After eight years there it moved to The Lodhi, where it has been since 2017. Its cooking pairs Indian flavours and traditions with global ingredients and techniques, and it was one of the early Indian restaurants to build its service around tasting menus. That bet, made when high-end Indian dining was rare in the city, is why it still matters.",
      },
      { type: "heading", text: "The two Mehrotras behind Indian Accent" },
      {
        type: "paragraph",
        text: "For most of its life, the restaurant's public face was Manish Mehrotra. He had cooked in London at Oriental Octopus and Tamarai before developing the early dishes that became Indian Accent's food, and Forbes India later called him India's most path-breaking chef.",
      },
      {
        type: "paragraph",
        text: "In July 2024, after joining the company in 2000, Manish Mehrotra announced he was leaving Indian Accent and its sister restaurant Comorin. The kitchen in New Delhi passed to Shantanu Mehrotra, who joined Old World Hospitality in 1999 and has been executive chef at Indian Accent since it opened at The Manor. Restaurant India reported at the time that he would lead the brand, which EHV International now runs in New Delhi, Mumbai and New York.",
      },
      {
        type: "paragraph",
        text: "It is a rare thing in fine dining: a handover to someone who had been on the pass since the first service. Continuity, rather than reinvention, was the plan.",
      },
      { type: "heading", text: "Tasting menus, chaat and a hundred layers of paneer" },
      {
        type: "paragraph",
        text: "The main event in New Delhi is the Chef's Tasting menu: six courses, each paired with wines from India and around the world. There is also a shorter four-course Lite Tasting menu, an à la carte menu at lunch and dinner, and separate vegan and gluten-free menus.",
      },
      {
        type: "paragraph",
        text: "Dishes the restaurant names on its own site include the hundred-layer paneer, malai kofta, a five-spice squash curry, Kolhapuri chicken with avocado and Gujarati thalipeeth, and green jackfruit with XO balchao. Dessert might be a single-origin Manam chocolate cake with basundi and berries.",
      },
      {
        type: "paragraph",
        text: "Street food has always been part of the vocabulary. Outlook Traveller pictured the restaurant's modern take on papdi chaat, and one summer the kitchen ran a lunch-only chaat tasting menu that took in a lotus stem chaat from Lucknow, moong pani pakodi in heeng-infused water and a puchka served with five different waters, from jamun to smoked pineapple.",
      },
      {
        type: "quote",
        text: "Chaat is perhaps India's most democratic and nostalgic cuisine",
        attribution: "Shantanu Mehrotra, executive chef, in BW Travel",
      },
      { type: "heading", text: "A quiet room at The Lodhi, and a long run on the lists" },
      {
        type: "paragraph",
        text: "When the restaurant moved to The Lodhi, the team designed the new space themselves in a modern, minimalist style. The pearl-lustred plaster walls of the original room were recreated, and Amit Pasricha's photographs of Delhi monuments hang throughout, with a picture of Lodhi Garden at the centre of the main dining room. BW Hotelier reported seating for more than a hundred, with private dining rooms overlooking water. CNN singled out the cocktail bar, with its latticed cabinets lit in warm amber.",
      },
      {
        type: "paragraph",
        text: "The recognition has been steady. Indian Accent says it has been on Asia's 50 Best Restaurants list since 2015, and it placed 46th in the 2025 edition. Condé Nast Traveller India has voted it the No. 1 restaurant in India, TIME included it among the World's 100 Greatest Places, and La Liste counted it among the ten best restaurants in India for 2024.",
      },
      {
        type: "paragraph",
        text: "Away from the lists, the restaurant has adopted two shelter homes for girls run by the Salaam Baalak Trust.",
      },
      { type: "heading", text: "Why Indian Accent matters to independent owners" },
      {
        type: "paragraph",
        text: "The lesson here is not the awards. It is the idea underneath them. Indian Accent took food its guests already knew, from chaat to kofta, and gave them a reason to see it again. CNN reported that the menu was first criticised as too upmarket and too expensive. The restaurant kept going, and the city came round. A clear concept, held through the awkward early years, did more than any campaign could.",
      },
      {
        type: "paragraph",
        text: "The second lesson is succession. Many independent businesses are built around one well-known founder or chef. Indian Accent shows what it looks like to have someone ready from inside the kitchen when that person moves on, so that the menu, the standards and the reputation stay with the business, not with a single name.",
      },
      { type: "heading", text: "Plan your visit" },
      {
        type: "paragraph",
        text: "If you are looking for a modern Indian restaurant in New Delhi for a long, special-occasion meal, Indian Accent is worth booking ahead.",
      },
      { type: "paragraph", text: "Where: The Lodhi, Lodhi Road, New Delhi 110003." },
      {
        type: "paragraph",
        text: "What to order: The six-course Chef's Tasting menu with wine pairing, or the hundred-layer paneer, potato chaat with black truffle and the Manam chocolate cake from the à la carte menu.",
      },
      {
        type: "paragraph",
        text: "Good for: Tasting-menu dinners, wine pairings and private dining for groups of 10 to 40 guests.",
      },
    ],
    business: {
      name: "Indian Accent",
      details: "The Lodhi, New Delhi · Restaurant · Opened 2009",
      logo: null,
      website: "https://www.indianaccent.com/newdelhi",
      instagram: "https://www.instagram.com/indianaccent/",
    },
    readNext: [],
  },
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
