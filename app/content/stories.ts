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
    slug: "bar-outrigger-goa",
    draft: false,
    publishedAt: "2026-10-14",
    kicker: "Feature · Bar · Goa",
    title: "Bar Outrigger, Goa: a rum bar at the Dona Paula jetty",
    standfirst: "Bar Outrigger is a nautical rum bar by the Dona Paula jetty in Goa, with over 100 rums, a treasure-map welcome and a place on Asia's 50 Best Bars 51–100.",
    writer: "The Vitrea team",
    date: "14 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "Getting to Bar Outrigger starts on WhatsApp. Book a table and the reply comes with a map drawn like a treasure hunt, leading from the car park down to a cocktail bar by the Dona Paula jetty, just outside Panaji in Goa. Time Out India says the team may even send someone to walk you in, because GPS struggles with the last stretch."
      },
      {
        type: "paragraph",
        text: "Bar Outrigger is a rum bar with a nautical theme, co-founded by Arijit Bose and Francis Coelho, according to Design Pataki and Esquire India. It sits on what was once a docking area for fishing boats. Design Pataki listed it among Goa's new openings in January 2025, and within months it had a place on Asia's 50 Best Bars. For a small bar in a quiet fishing village, that is a fast rise."
      },
      {
        type: "heading",
        text: "The people behind Bar Outrigger, Dona Paula"
      },
      {
        type: "paragraph",
        text: "Bose is a bartender known for building concept bars. The Nod Mag describes Outrigger as one of the bars he created, and notes that he now runs Bar Spirit Forward in Bengaluru. Coelho is the co-founder named alongside him in Esquire India and Design Pataki."
      },
      {
        type: "paragraph",
        text: "The idea is simple to state. Design Pataki calls the bar a third place: somewhere between home and work where locals and expats can settle in. The nautical theme runs from the welcome to the walls to the menu, and the team leans on small rituals rather than spectacle."
      },
      {
        type: "paragraph",
        text: "The Nod Mag describes two of them. Staff chalk a sailor-style greeting for each booking before guests arrive. And at the end of the night, guests and staff close with a singalong of the song from Titanic, a tradition Time Out India also mentions."
      },
      {
        type: "heading",
        text: "A rum list built for exploring"
      },
      {
        type: "paragraph",
        text: "Rum is the whole point here. Tatler Asia counts more than a hundred rums from around the world, alongside tiki punches and daiquiris. Time Out India describes tasting flights that move from light and grassy styles to dark and funky ones, and Design Pataki mentions rum-tasting sessions for those who want to go deeper."
      },
      {
        type: "paragraph",
        text: "Two drinks come up again and again in the coverage: the Tiki Negroni and the Walking Dead. Tatler Asia and Esquire India both single out the Coffee Painkiller, which Esquire describes as built on coconut cream and nutmeg. Esquire also names the Kingston Negroni and the Outrigger, a house drink of lime and house rum. Tatler adds one with a nod to the founder: the Flaming Wisdom of Bose."
      },
      {
        type: "paragraph",
        text: "The food stays close to the coast. Design Pataki credits the menu to Chef Adrial, with fresh seafood and Goan home cooking. Tatler Asia picks out fried river prawns served with a Lao-style sour dip, and local seabass cured in a sharp vinaigrette."
      },
      {
        type: "heading",
        text: "Teal walls, bay windows and an Asia's 50 Best listing"
      },
      {
        type: "paragraph",
        text: "The room was designed by Ayaz and Zameer Basrai of The Busride Design Studio, Design Pataki reports. Expect teal walls, plenty of plants, cane-woven stools, brown sofas and a worn wooden L-shaped bar. A communal table sits in the middle, and bay windows look straight out over the Arabian Sea. Time Out India adds model boats and striped fabrics to the picture, and Tatler Asia notes that the bar has direct access to a private stretch of beach."
      },
      {
        type: "paragraph",
        text: "The recognition has been steady. Bar Outrigger entered Asia's 50 Best Bars 51–100 list at No. 55 in 2025, Esquire India reported, and rose to No. 51 in 2026, according to The Nod Mag and Man's World India. Outlook Luxe placed it seventh in its 2025 list of 50 bars in India to visit, as one of that year's new entries. In 2026 it was named in the inaugural Tatler Best 20 Bars India."
      },
      {
        type: "heading",
        text: "Why it matters"
      },
      {
        type: "paragraph",
        text: "Bar Outrigger shows how far a clear idea can carry a small venue. It does one spirit in depth, ties every detail to one theme, and does not try to be everything to everyone. That focus makes it easy to describe, easy to recommend and easy for a journalist to write about."
      },
      {
        type: "paragraph",
        text: "It also turns its weaknesses into part of the story. A hard-to-find location becomes a treasure map on WhatsApp. A booking becomes a chalked greeting. Closing time becomes a singalong. None of these costs much, but each gives guests something to talk about afterwards. For any independent owner, the lesson is to look at the awkward parts of your own business and ask whether they could become the thing people remember."
      },
      {
        type: "heading",
        text: "Plan your visit"
      },
      {
        type: "paragraph",
        text: "Where: Dona Paula Road, near the Dona Paula Jetty, Panaji, Goa 403004."
      },
      {
        type: "paragraph",
        text: "When: From 3pm on weekdays and noon at weekends, until midnight; closed on Tuesdays, according to Time Out India."
      },
      {
        type: "paragraph",
        text: "What to order: a rum flight, the Tiki Negroni, the Walking Dead or the Coffee Painkiller, with the fried river prawns."
      },
      {
        type: "paragraph",
        text: "Good for: rum lovers, sunset drinks by the sea, and groups around the communal table. Book ahead on WhatsApp for directions."
      }
    ],
    business: {
      name: "Bar Outrigger",
      details: "Dona Paula, Goa · Bar · Asia's 50 Best Bars No. 51 (2026)",
      logo: null,
      website: "https://www.baroutrigger.com/",
      instagram: "https://www.instagram.com/baroutriggergoa/",
    },
    readNext: [],
  },
  {
    slug: "japonico-gurugram",
    draft: false,
    publishedAt: "2026-10-14",
    kicker: "Feature · Restaurant & bar · Gurugram",
    title: "Japonico, Gurugram: robata fire and a manga cocktail list",
    standfirst: "Japonico is a contemporary Japanese restaurant and bar on Golf Course Road, Gurugram, with a live robata grill and a cocktail list that follows one man's story.",
    writer: "The Vitrea team",
    date: "14 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "At Japonico, the cooking happens over live wood. A robata grill sits at the heart of this Japanese restaurant on Golf Course Road in Gurugram, with family-style tables on one side and a long bar on the other. Outside, a terrace looks across the metro line towards the Gurugram skyline."
      },
      {
        type: "paragraph",
        text: "Japonico is a contemporary Japanese restaurant and bar on the second floor of Tower D, Vipul Tech Square, in Sector 43. It is run by restaurateur Sahil Sambhi, founder and chief executive of Yuvi Hospitality, the group behind Bawri and VietNom. It opened in early 2025, and Indian Food Freak called it the first major restaurant launch of that year. More than a year on, it is still drawing full-marks reviews."
      },
      {
        type: "heading",
        text: "Who is behind Japonico"
      },
      {
        type: "paragraph",
        text: "Sambhi was named Best Restaurateur at the 11th edition of The Big F Awards, Indian Food Freak reported. For Japonico he brought in Freddy Birdy to work on the space, according to LBB and Outlook Traveller. Outlook Traveller calls Birdy Instagram's best-loved wordsmith."
      },
      {
        type: "paragraph",
        text: "The kitchen is led by Roberto Blondi, an Italian chef. Outlook Traveller lists Zuma in London, Roka in Riyadh and Eleven Madison Park in New York among his previous kitchens, and both Outlook Traveller and LBB note that he trained under Marco Pierre White."
      },
      {
        type: "paragraph",
        text: "The cocktails come from a familiar pairing. Indian Food Freak credited the bar programme to Jeet Rana and Chirag Pal, and Outlook Traveller named Rana as the beverage custodian who designed the list. The same two bartenders later opened their own bar, Barbet & Pals, in Greater Kailash II."
      },
      {
        type: "heading",
        text: "Japanese food with a Peruvian edge, off the robata"
      },
      {
        type: "paragraph",
        text: "Outlook Traveller describes the food as contemporary Japanese with Peruvian touches, and the menu moves easily between the grill, the sushi counter and small plates for sharing."
      },
      {
        type: "paragraph",
        text: "Two dishes come up again and again. The hamachi carpaccio was Outlook Traveller's star dish in May 2025, praised for its soft texture and smoky depth. In February 2026 the same publication picked the robata-grilled Himalayan trout, marinated in shiso and yuzu kosho, as the dish of the night."
      },
      {
        type: "paragraph",
        text: "From the grill there is also an Australian lamb cutlet, marinated for 24 hours in gochujang, and miso black cod. Sushi runs from spicy tekka hako zushi, a pressed roll, to spicy tuna crispy rice and truffle hako sushi. Indian Food Freak singled out the Atlantic crab and aji chilli taco, a clear nod to Peru."
      },
      {
        type: "paragraph",
        text: "Vegetarians are looked after. There are mushroom, truffle and cream cheese tacos, corn ribs with smoked paprika butter, a crisp shiitake salad, grilled avocado with sake and yuzu kosho, and a Tokyo-style ramen topped with enoki tempura. Desserts include a Japanese fluffy cheesecake and a house tiramisu."
      },
      {
        type: "heading",
        text: "A cocktail list that reads like a manga"
      },
      {
        type: "paragraph",
        text: "The drinks menu follows Kaito Sakamoto, a fictional character, through the chapters of his life. LBB describes a story of growth, perseverance, happiness and brotherhood, with each cocktail standing for one chapter."
      },
      {
        type: "paragraph",
        text: "It starts where the evening starts. The Humble Beginnings, a mix of fermented fruit wine, sparkling sake and vodka, is served as the welcome drink. Golden Harvest pairs tequila with green yuzu kosho and guava. The Struggle's Shadow is a whisky drink with a sesame cream foam, Japonico's take on the espresso martini. Phoenix Flame brings tequila together with bell pepper and spirulina."
      },
      {
        type: "paragraph",
        text: "Further along the story come The Bond, with Roku gin, chrysanthemum and Sichuan pepper syrup, and Roots of Ambition, which mixes Toki whisky with goji berry cordial, kaffir lime and genmaicha soda. Indian Food Freak's pick was The Legacy, a gin and vodka martini served with tobiko, pickled radish and an olive."
      },
      {
        type: "heading",
        text: "A Gurugram room that changes after dark"
      },
      {
        type: "paragraph",
        text: "Reviewers describe dark wood, textured stone and low lighting, alongside red interiors, digital art projected onto flowing water and a water feature at the bar. LBB noted metal chain curtains and amber light; Outlook Traveller heard house music."
      },
      {
        type: "paragraph",
        text: "The room shifts through the day. Outlook Traveller describes a polished lunch that gives way to a music-led bar at night, and an earlier Outlook review listed an after-hours session from 11pm to 2am. In May 2026 the publication listed Japonico among the best Japanese restaurants in Delhi NCR."
      },
      {
        type: "heading",
        text: "Why Japonico matters to independent owners"
      },
      {
        type: "paragraph",
        text: "The cocktail list is the lesson here. By building the drinks around one character and one story, Japonico gives every round something to talk about, and gives writers something to write about. Almost every review mentions Kaito Sakamoto by name. A narrative menu costs little more than a good printer, but it turns a list of drinks into something guests remember and repeat."
      },
      {
        type: "paragraph",
        text: "The second lesson is the team. Japonico paired a chef with international kitchens behind him, bartenders with their own following and a designer with a public voice. Each brought an audience and a reason for the press to pay attention. For an independent owner, choosing collaborators who already have a story of their own can do as much for getting found as any launch campaign."
      },
      {
        type: "heading",
        text: "Plan your visit"
      },
      {
        type: "paragraph",
        text: "Where: Second Floor, Tower D, Vipul Tech Square, Golf Course Road, Sector 43, Gurugram, Haryana 122009."
      },
      {
        type: "paragraph",
        text: "When: daily, lunch 12pm to 4pm and dinner from 7pm, with late hours after that; check closing time before you go."
      },
      {
        type: "paragraph",
        text: "What to order: hamachi carpaccio, robata-grilled Himalayan trout, Atlantic crab and aji chilli taco, The Humble Beginnings and Golden Harvest."
      },
      {
        type: "paragraph",
        text: "Good for: dinner with friends, late-night cocktails, and group meals around the robata grill."
      }
    ],
    business: {
      name: "Japonico",
      details: "Sector 43, Gurugram · Restaurant & bar · Opened 2025",
      logo: null,
      website: "",
      instagram: "https://www.instagram.com/japonico.ggn/",
    },
    readNext: [],
  },
  {
    slug: "barbet-and-pals-new-delhi",
    draft: false,
    publishedAt: "2026-10-13",
    kicker: "Feature · Bar · New Delhi",
    title: "Barbet & Pals, New Delhi: two bartenders, one nest",
    standfirst: "Barbet & Pals is a 38-seat cocktail bar in Greater Kailash II, New Delhi, where two old friends turn Kumaon ingredients and their own memories into drinks.",
    writer: "The Vitrea team",
    date: "13 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "Barbet & Pals announces itself with a blue door. In Uttarakhand, the home state of co-founder Jeet Rana, doors are often painted blue as a sign of warmth and welcome, Elle Gourmet India reported. Inside the Greater Kailash II bar, painted bird footprints run across the floor and up onto the wooden bar counter, as if something small had just landed and wandered off towards the drinks."
      },
      {
        type: "paragraph",
        text: "This 38-seat cocktail bar in New Delhi opened to the public on 4 November 2025, according to The Nod Mag. It belongs to two bartenders, Jeet Rana and Chirag Pal, who met while working at the Westin in Gurgaon and have been friends since. Chef Amninder Sandhu, known for Kikli and Tipai, wrote the food menu. In 2026 Tatler named it India's Best New Bar and Best Innovation Bar."
      },
      {
        type: "heading",
        text: "Who the pals are"
      },
      {
        type: "paragraph",
        text: "Rana is a former global brand ambassador for Stranger & Sons gin and has represented India at World Class, the bartending competition, The Nod Mag noted. He has also worked at Arth and Sancho's in Mumbai. Pal came up through Grappa at the Shangri-La Eros in New Delhi and FIVE Palm Jumeirah in Dubai."
      },
      {
        type: "paragraph",
        text: "The name splits neatly between them. The barbet is a colourful Himalayan bird, a nod to Rana's roots in the hills. \"Pals\" comes from Pal's surname, and doubles as an invitation to join the group. Rana told Elle Gourmet India that he wanted the name to keep him grounded in where he comes from."
      },
      {
        type: "quote",
        text: "We want it to be a place where people don't think twice before coming.",
        attribution: "Chirag Pal, co-founder, to Elle Gourmet India"
      },
      {
        type: "heading",
        text: "Kumaon in a glass at Barbet & Pals"
      },
      {
        type: "paragraph",
        text: "The drinks list is split in two. Bird's Eye View is a travel menu that explores one Indian region at a time, and Outlook Traveller reported that a new chapter is planned every three months. The first edition is about Kumaon. Esquire India reported that the founders spent ten days with families in the region gathering ingredients before writing it."
      },
      {
        type: "paragraph",
        text: "The results lean on produce few city drinkers will have met. Myol uses a small, sharp berry from the pear family, with pine needle notes. Madua draws on lugdi, a fermented grain drink, and pairs whisky with banana and gur under a warm foam. Gundryani is built on Jose Cuervo Reposado and angelica root, with a rim of pissi loon, the hill salt mixed with chilli, mint and coriander."
      },
      {
        type: "paragraph",
        text: "The second list, The Nest, holds fourteen cocktails tied to the founders' own memories, seven by each of them. Tickle My Pickle mixes gin and dry vermouth with pickle brine, blueberry, grape and carrot. Pals' Lugdi, Pal's take on fermented rice, brings together vodka, passion fruit and mulberry, and recalls his student years at IHM Shimla. Himalayan Madhpey, with patchouli and turmeric oleo, ginger and Campari, is the drink Rana made for World Class Global in 2016. It was Outlook Traveller's standout of the night."
      },
      {
        type: "paragraph",
        text: "For something smaller, there are pickle shots: choose a spirit, then a pickle to chase it. Esquire India also reported a house amaro made from green walnuts grown in Rana's own backyard."
      },
      {
        type: "heading",
        text: "Bar snacks that do more than soak up the gin"
      },
      {
        type: "paragraph",
        text: "Sandhu's menu is built to sit alongside the drinks, and Time Out Delhi called the snacks surprisingly hearty. Gol Gol bread arrives with two butters, one with nolen gur and one with chilli and fennel. Mrs Barbet, named for Rana's wife, whose recipe it is, is chicken with a desi chimichurri and caramelised onion foam."
      },
      {
        type: "paragraph",
        text: "From the hills comes bhutuwa, mutton offal cooked Uttarakhandi-style and served with finger-millet sourdough. Bar-Brat pairs a Naga pork sausage with ice cream made from fermented bamboo shoot. Flock Fried Chicken comes with avocado, prosciutto and a poached egg. To finish, there is a warm rum bal mithai sundae with burnt butter ice cream."
      },
      {
        type: "heading",
        text: "A small Greater Kailash bar that feels lived in"
      },
      {
        type: "paragraph",
        text: "The room is dim and close. Outlook Traveller described dark polished wood and retro music; Time Out heard an 80s oldies playlist and noticed birds on the staff's lapels and winged stirrers in the glasses. One wall mixes graffiti with Aipan, the folk art of Kumaon, and includes a bird holding a martini glass. The menu itself looks like a bartender's diary, full of doodles and stickers."
      },
      {
        type: "paragraph",
        text: "Time Out Delhi gave it five out of five in April 2026 and noted, with some relief, that it is not a speakeasy. Outlook Traveller scored it 4.8 out of five. Tatler also recommends Cavity, a nine-course cocktail pairing run by the bar, best booked from Friday to Sunday."
      },
      {
        type: "heading",
        text: "Why Barbet & Pals matters to independent owners"
      },
      {
        type: "paragraph",
        text: "Barbet & Pals shows how much a small business can carry in its details. The blue door, the bird tracks, the barbet magnet that comes with the bill and the diary-style menu all repeat one idea: two friends from the hills, welcoming you in. Nothing costs much on its own, but together they give guests, and the press, a story that is easy to retell."
      },
      {
        type: "paragraph",
        text: "The second lesson is the rotating regional menu. A new chapter every few months gives regulars a reason to come back and gives the bar something new to say each season, without changing who it is. For any independent owner, a planned, recurring change of this kind can do more than a constant stream of one-off promotions."
      },
      {
        type: "heading",
        text: "Plan your visit"
      },
      {
        type: "paragraph",
        text: "Where: Ground Floor, M-51, M Block Market, Greater Kailash II, New Delhi 110048."
      },
      {
        type: "paragraph",
        text: "When: Wednesday to Monday, 5pm to 1am; closed Tuesdays."
      },
      {
        type: "paragraph",
        text: "What to order: Himalayan Madhpey, Gundryani, Tickle My Pickle, Mrs Barbet, Bar-Brat and Gol Gol bread."
      },
      {
        type: "paragraph",
        text: "Good for: cocktails with friends, small groups, and a night of trying ingredients you have not met before."
      }
    ],
    business: {
      name: "Barbet & Pals",
      details: "Greater Kailash II, New Delhi · Bar · Opened 2025",
      logo: null,
      website: "https://barbetandpals.com",
      instagram: "https://www.instagram.com/barbetandpals/",
    },
    readNext: [],
  },
  {
    slug: "zetu-mehrauli-new-delhi",
    draft: false,
    publishedAt: "2026-10-13",
    kicker: "Feature · Restaurant · New Delhi",
    title: "Zetu, New Delhi: Sri Lanka under a Mehrauli banyan",
    standfirst: "Zetu brings the full range of Sri Lankan cooking to Mehrauli, New Delhi, with a Sri Lankan chef, a Bawa-inspired space and a 500-year-old banyan tree.",
    writer: "The Vitrea team",
    date: "13 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "You do not walk into Zetu. At the entrance to 1AQ, an art complex in Seth Sarai, Mehrauli, guests are met with tender coconut water and driven in by golf cart. The ride ends at a dining room built around a banyan tree said to be 500 years old, with plants on every side and tables set well apart."
      },
      {
        type: "paragraph",
        text: "Zetu is a Sri Lankan restaurant in New Delhi that opened to the public on 4 June 2026. Esquire India describes it as the first restaurant in the city to take on the full range of the cuisine rather than a handful of borrowed dishes. It seats 175, shares its site with the Ojas Art Gallery, and has four co-founders: Sarah Nikahetiya, Anurag Dania, Abhishek Mathur and Sagar Garg. Time Out Delhi called it the city's first permanent Sri Lankan restaurant."
      },
      {
        type: "heading",
        text: "A bridge called Zetu, from Colombo to Mehrauli"
      },
      {
        type: "paragraph",
        text: "The name comes from setu, the Sanskrit word for bridge, with a Z added to make it feel current, The Week reported. The idea behind it is a conversation between India and Sri Lanka, and the founders have said they want the restaurant to reflect everyday life in Colombo rather than a version of the island made for tourists."
      },
      {
        type: "paragraph",
        text: "Nikahetiya, a former British diplomat to India who is married to a Sri Lankan, is behind much of that. Zetu is her first hospitality venture, according to The Nod Mag. Indian Retailer reported that recipes from her family, including Kandyan ones, and produce from the family farm near Colombo helped shape the menu."
      },
      {
        type: "paragraph",
        text: "The kitchen is led by Dush Ratnayake, a Sri Lankan chef, working with the Indian chefs Mohit Kumar and Romil Malhotra. The pairing is part of the point: a Sri Lankan lead, an Indian team, and dishes adjusted for Delhi without losing their identity."
      },
      {
        type: "quote",
        text: "If we were going to introduce Sri Lankan cuisine, it had to stand on its own",
        attribution: "Dush Ratnayake, chef, to The Week"
      },
      {
        type: "heading",
        text: "Lamprais, kotthu and hoppers on a Sri Lankan menu in Delhi"
      },
      {
        type: "paragraph",
        text: "Meals begin with choon paan, small house-made breads that nod to Sri Lanka's mobile bakeries, served with three butters: curry leaf with pesto, cashew, and tandoori. From there the menu moves between street food, family recipes and dishes tied to particular communities."
      },
      {
        type: "paragraph",
        text: "Lamprais, rice and curries wrapped in banana leaf, is a dish with Dutch Burgher roots, and EazyDiner notes that Zetu's version was developed with a well-known Colombo kitchen. Kotthu, the chopped roti dish, comes with prawns or shiitake mushrooms. Kiribath, coconut milk rice, arrives in a black-and-white checkerboard pattern, Outlook Traveller reported. Gram Dahl in Contrast turns parippu, the red lentil curry, into small bites on coconut-wood spoons with whipped citrus crème fraîche."
      },
      {
        type: "paragraph",
        text: "Air and Gold is the luxury option: a hopper with crab, shaved truffle, sour cream and caviar, and the chef's top pick according to Time Out Delhi. Ratnayake told Outlook Traveller that leaving without the Yellow Rice with Three Curries would be a mistake. Time Out also noted that the menu deliberately leans on vegetables, poultry, pulses, grains and rice, rather than the seafood many people expect."
      },
      {
        type: "paragraph",
        text: "The bar works with pandan, coconut, curry leaf, cinnamon and Ceylon tea. The Frangipani Martini is floral and gin-based. The Zetu washes rum in brown butter and adds vanilla, banana, Ceylon chai and cashew milk. Outlook Traveller's top pick was a coconut espresso martini. There is a separate zero-proof menu, and a tea programme with the Sri Lankan brands Evergreen and Ceyland."
      },
      {
        type: "heading",
        text: "Tropical modernism under a banyan tree"
      },
      {
        type: "paragraph",
        text: "Dania, an architect as well as a co-founder, designed the space. It borrows from the tropical modernism of the Sri Lankan architect Geoffrey Bawa, and Indian Retailer reported that Minnette de Silva and Bevis Bawa were also references. The result, in Esquire India's words, blurs the line between indoors and out."
      },
      {
        type: "paragraph",
        text: "There are three dining zones and more than 500 plants. Time Out Delhi described cream walls, candlelight, paintings and a rotating mini-exhibition, with palm trees in the outdoor-style area. Upstairs, a terrace has cabanas for private dining. Some of the furniture comes from Phantom Hands, the Bengaluru design studio, including a chair from its Geoffrey Bawa collection."
      },
      {
        type: "paragraph",
        text: "The early response has been warm. Outlook Traveller gave Zetu full marks for food, drinks and atmosphere. Time Out Delhi rated it four out of five and marked it recommended, though it noted that the cocktails are not the main reason to go. EazyDiner's Food Trends included it among the best new restaurant openings in India of 2026."
      },
      {
        type: "heading",
        text: "Why Zetu matters to independent owners"
      },
      {
        type: "paragraph",
        text: "Zetu shows the value of a concept that is easy to explain. One sentence covers it: the full range of Sri Lankan food, in Delhi, by people with real ties to the island. That clarity makes it simple for press, guides and guests to talk about, and almost every write-up has repeated the same story about the name, the founders and the banyan tree."
      },
      {
        type: "paragraph",
        text: "The second lesson is that the whole experience can carry the idea. The welcome with coconut water, the Bawa-inspired rooms, the Sri Lankan teas and bread that nods to a mobile bakery all tell the same story as the food. For a small business, the cuisine or product is only part of the offer. When the arrival, the room and the details all point the same way, guests remember it and describe it the same way to others."
      },
      {
        type: "heading",
        text: "Plan your visit"
      },
      {
        type: "paragraph",
        text: "If you are looking for a Sri Lankan restaurant in New Delhi Zetu in Mehrauli is open from lunch through to late."
      },
      {
        type: "paragraph",
        text: "Where: 1AQ, Seth Sarai, Mehrauli, New Delhi 110030."
      },
      {
        type: "paragraph",
        text: "When: Daily, noon to midnight. Reservations on +91 8796056111."
      },
      {
        type: "paragraph",
        text: "What to order: Choon paan with three butters, lamprais, kotthu, kiribath, Air and Gold, and the Yellow Rice with Three Curries, with a Frangipani Martini or something from the zero-proof list."
      },
      {
        type: "paragraph",
        text: "Good for: Private dining in the terrace cabanas, and anyone curious about Sri Lankan food beyond a dish or two. Expect around ₹8,000 for two, before alcohol."
      }
    ],
    business: {
      name: "Zetu",
      details: "Mehrauli, New Delhi · Restaurant · Opened 2026",
      logo: null,
      website: "",
      instagram: ""
    },
    readNext: []
  },
  {
    slug: "hoots-new-delhi",
    draft: false,
    publishedAt: "2026-10-12",
    kicker: "Feature · Bar · New Delhi",
    title: "Hoots', New Delhi: the speakeasy with a family tree",
    standfirst:
      "Hidden off a wine bar in Vasant Vihar, Hoots' has poured numbered cocktails since 2016, built a fictional family of owls and made Asia's 50 Best Bars.",
    writer: "The Vitrea team",
    date: "12 October 2026",
    readTime: "5 min read",
    heroImage: null,
    heroAlt: "",
    heroCaption: "",
    body: [
      {
        type: "paragraph",
        text: "There is no sign for Hoots'. In Basant Lok market in Vasant Vihar, New Delhi, you go to Perch Wine & Coffee Bar and find a door on the first floor. Behind it is a low-lit room with leather seating, jazz on the speakers and a bartender who is the centre of attention. The drinks on the menu do not have names. They have numbers.",
      },
      {
        type: "paragraph",
        text: "Hoots' opened in 2016, and Esquire India has called it perhaps one of Delhi's earliest examples of a bar within a bar. For a long time it was hard to find even if you were looking: Culture Trip reported that in its early days you had to call ahead for the number, and nothing marked the entrance. It has since become one of the city's most recognised cocktail bars, placing 26th on Asia's 50 Best Bars in 2022. That a room this small, with this little self-promotion, got there is the reason it is worth a closer look.",
      },
      { type: "heading", text: "Robert, William and Albert: the owls behind Hoots'" },
      {
        type: "paragraph",
        text: "Hoots' began as a small, living-room-style space connected to Perch, used to show off specialty cocktails. Over time it gained a story of its own, and a cast to go with it.",
      },
      {
        type: "paragraph",
        text: "Its co-founder, Sandeep Bishnoy, built a fictional family around the bar, ThePrint reported in 2025. Robert Hoots is an owl. His father is William, his grandfather is Albert, and his sister Margaret lends her name to Margaret's Eye, a hidden space reached through an unmarked gate nearby. Bishnoy described the Perch building to ThePrint as being like a family tree.",
      },
      {
        type: "paragraph",
        text: "It would be easy to dismiss this as a gimmick. In practice it gives the bar a way to organise its menu, its rooms and its tone without ever putting up a sign.",
      },
      { type: "heading", text: "Numbered cocktails at a Vasant Vihar speakeasy" },
      {
        type: "paragraph",
        text: "The list runs to about 25 drinks. Harper's Bazaar India describes it as five classics alongside signatures that go by number alone. The best known, according to the magazine, is the No. 5, a gin gimlet made with a palo santo cordial. Culture Trip recommended the No. 4: tequila with clarified citrus and grapefruit, hibiscus cordial and sparkling wine.",
      },
      {
        type: "paragraph",
        text: "The family appears on the menu too. In 2025, ThePrint found the drinks grouped by generation. William's section holds Prohibition-era variations on sours, punches and martinis. Albert's is about modern elegance, with a classic sour of whiskey, citrus, sugar and egg white. Robert's is the experimental one: his sour swaps the whiskey for pisco and adds ricotta, including a ricotta air.",
      },
      {
        type: "paragraph",
        text: "The 50 Best guide to the bar points to an Old Fashioned twist made with miso and a whisky sour topped with chamomile foam. Cheese boards and cigars are offered alongside, and ThePrint reported that each cocktail was priced at Rs 845.",
      },
      { type: "heading", text: "A smuggler's den, and a place on Asia's 50 Best Bars" },
      {
        type: "paragraph",
        text: "The room borrows from the Prohibition-era speakeasy: dark interiors, low lighting, leather booths and what Harper's Bazaar India calls vintage 1920s décor. Esquire India compared it to a smuggler's den, while the 50 Best guide likened it to a cosy living room. Both descriptions fit. It is a quiet bar, and Outlook Traveller noted that its following has grown by word of mouth.",
      },
      {
        type: "paragraph",
        text: "The recognition came anyway. The 50 Best guide says Hoots' first entered the extended 51–100 list of Asia's 50 Best Bars, as only the second Indian bar to appear on it. In 2022 it reached No. 26 on the main list, Business Today reported. Esquire India noted in 2026 that it continues to appear on lists of India's best bars.",
      },
      { type: "heading", text: "Why Hoots' matters to independent owners" },
      {
        type: "paragraph",
        text: "Hoots' shows that being hard to find can be a strategy rather than a problem, as long as what people find is worth the effort. An unmarked door, a number instead of a name and a story about a family of owls give guests something to pass on. Outlook Traveller described the bar's following as built on word of mouth, and that is what the hidden entrance is designed to produce.",
      },
      {
        type: "paragraph",
        text: "The second lesson is about using what you already have. Hoots' grew out of a room connected to an existing business, and its fictional family now ties together the spaces in its building. For an owner with one venue and spare space, a second, smaller concept with its own identity can reach a different crowd without competing with the first.",
      },
      { type: "heading", text: "Plan your visit" },
      {
        type: "paragraph",
        text: "If you are looking for a quiet cocktail bar in New Delhi for a slow drink, Hoots' rewards the search.",
      },
      {
        type: "paragraph",
        text: "Where: 18-A, first floor, Basant Lok market, Vasant Vihar, New Delhi 110057, through Perch Wine & Coffee Bar.",
      },
      { type: "paragraph", text: "When: Tuesday to Sunday, 6pm to 1am." },
      {
        type: "paragraph",
        text: "What to order: The No. 5 gin gimlet with palo santo cordial, the No. 4, or one of the sours, with a cheese board on the side.",
      },
      {
        type: "paragraph",
        text: "Good for: Quiet cocktails, dates and an evening with cigars and cheese.",
      },
    ],
    business: {
      name: "Hoots'",
      details: "Vasant Vihar, New Delhi · Bar · Opened 2016",
      logo: null,
      website: "",
      instagram: "https://www.instagram.com/mr.hoots/",
    },
    readNext: [],
  },
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
