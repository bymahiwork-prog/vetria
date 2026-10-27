# Vitrea feature autopilot

A scheduled task publishes **one** Vitrea feature per run, twice a day (around 10:50 and 18:50 IST), working down the queue below. Each run reads this file first and follows it exactly.

Vitrea (vitreaonline.in) is an independent media brand that features independent businesses and founders and explains where small-business marketing is heading. Features are editorial: chosen by Vitrea, never paid for.

---

## Queue

Work top to bottom. Rows 9–28 were added on 25 Oct 2026 at Mahi's request: good independent restaurants and bars in India and abroad, alternating India and international, picked from the 2026 World's 50 Best Bars, Asia's 50 Best Bars 2026, the 30 Best Bars India 2026 masterlist and well-reviewed restaurants. Publish the first unticked brand. When you publish one, tick it here (`[x]`) in the same commit and add its entry to the Published log.

| Done | # | Brand | Type | City | Suggested slug |
|---|---|---|---|---|---|
| [x] | 1 | Indian Accent, The Lodhi | Restaurant | New Delhi | `indian-accent-new-delhi` |
| [x] | 2 | Hoots | Bar | New Delhi | `hoots-new-delhi` |
| [x] | 3 | Zetu | Restaurant | New Delhi (Mehrauli) | `zetu-mehrauli-new-delhi` |
| [x] | 4 | Barbet & Pals | Bar | New Delhi | `barbet-and-pals-new-delhi` |
| [x] | 5 | Japonico | Restaurant & bar | Gurugram | `japonico-gurugram` |
| [x] | 6 | Bar Outrigger | Bar | Goa | `bar-outrigger-goa` |
| [x] | 7 | Slow Tide | Restaurant & bar | Goa | `slow-tide-goa` |
| [x] | 8 | Native Cocktail Room | Bar | Jaipur | `native-cocktail-room-jaipur` |
| [x] | 9 | Boilermaker | Bar | Goa | `boilermaker-goa` |
| [x] | 10 | Bar Leone | Bar | Hong Kong | `bar-leone-hong-kong` |
| [x] | 11 | Masque | Restaurant | Mumbai | `masque-mumbai` |
| [x] | 12 | Disfrutar | Restaurant | Barcelona | `disfrutar-barcelona` |
| [ ] | 13 | SOKA | Bar | Bengaluru | `soka-bengaluru` |
| [ ] | 14 | Handshake Speakeasy | Bar | Mexico City | `handshake-speakeasy-mexico-city` |
| [ ] | 15 | The Bombay Canteen | Restaurant & bar | Mumbai | `the-bombay-canteen-mumbai` |
| [ ] | 16 | Gaggan | Restaurant | Bangkok | `gaggan-bangkok` |
| [ ] | 17 | Bar Spirit Forward | Bar | Bengaluru | `bar-spirit-forward-bengaluru` |
| [ ] | 18 | Jigger & Pony | Bar | Singapore | `jigger-and-pony-singapore` |
| [ ] | 19 | Naru Noodle Bar | Restaurant | Bengaluru | `naru-noodle-bar-bengaluru` |
| [ ] | 20 | Semma | Restaurant | New York | `semma-new-york` |
| [ ] | 21 | Sidecar | Bar | New Delhi | `sidecar-new-delhi` |
| [ ] | 22 | Sips | Bar | Barcelona | `sips-barcelona` |
| [ ] | 23 | O Pedro | Restaurant & bar | Mumbai | `o-pedro-mumbai` |
| [ ] | 24 | Orfali Bros Bistro | Restaurant | Dubai | `orfali-bros-dubai` |
| [ ] | 25 | Cobbler & Crew | Bar | Pune | `cobbler-and-crew-pune` |
| [ ] | 26 | Alquímico | Bar | Cartagena | `alquimico-cartagena` |
| [ ] | 27 | Comorin | Restaurant & bar | Gurugram | `comorin-gurugram` |
| [ ] | 28 | Quintonil | Restaurant | Mexico City | `quintonil-mexico-city` |

If every row is ticked: publish nothing, and tell Mahi the queue is finished and the scheduled task "Vitrea feature autopilot" can be deleted or given new brands.

If a brand cannot be verified (fewer than 3 independent sources, or it appears to have closed), skip it. Mark the row `[skip]` with a one-line reason in the Published log, then move on to the next brand in the same run.

---

## Step 1: Research (do not skip)

Collect facts from **at least 3 independent sources**. Prefer these, in order:

1. The brand's own website and official Instagram.
2. Award lists: Asia's 50 Best Bars and Restaurants, India's Best Bars, Condé Nast Traveller India, Food Trends, Tatler Asia, Times Food & Nightlife Awards.
   For brands outside India, also: The World's 50 Best Restaurants and Bars (and their 51–100 lists), Latin America's / MENA's 50 Best, the Michelin Guide, Time Out, Eater, The Infatuation, Condé Nast Traveller, Financial Times, The Guardian, The New York Times, South China Morning Post, Punch, Difford's Guide.
3. Reputable press: Condé Nast Traveller India, Vogue India, GQ India, Mint Lounge, Hindustan Times, The Hindu, Indian Express, Mid-day, Architectural Digest India, Tatler Asia, Mixology/drinks trade press.
4. Google Maps / the brand's site for the address and opening hours.

Write down every fact with its source URL. Useful facts:
- Who founded it or who runs the kitchen or bar, and when it opened.
- What the concept is.
- Signature dishes or drinks.
- Design and space.
- Awards and rankings, with the year.
- Address, neighbourhood and hours.

**Rules (non-negotiable):**
- Every fact in the article must come from a source you read in this run. Never guess, never fill gaps, never invent numbers, dates, names, dishes or awards.
- No invented quotes. A direct quote is allowed only if it appears verbatim in a cited publication, and must be attributed in the sentence (for example: "…, the chef told Condé Nast Traveller India."). Prefer paraphrase. Paraphrase everything else in your own words; never copy sentences.
- If hours or address cannot be verified, leave them out of Plan your visit rather than guessing.
- No photos. We do not have rights to these brands' images. Do not download, hotlink or describe images from their Instagram or website. Set `heroImage: null` and use no `image` blocks. The site shows a branded tile instead.
- For brands outside India, keep the same rules. Write for an Indian reader planning a trip: no prices in local currency unless a source states them, and name the country in the first paragraph.
- Be fair and accurate. Vitrea is editorial, not advertising: no hype words ("best ever", "must-visit", "iconic") unless quoting an award.

## Step 2: Write

Match the voice of the published Seezen feature in `app/content/stories.ts`:
- specific over loud
- short paragraphs for phone reading
- British spelling ("flavour", "labelled", "neighbourhood")
- warm but factual

**Length:** 700–1,000 words of body text.

**Structure** (headings are `heading` blocks):
1. Opening paragraph that puts the reader in the room or at the bar: a concrete detail from your sources.
2. Second paragraph: what it is, who is behind it, when it opened, and why it matters.
3. 2–3 sections with specific `heading` text (not generic labels), covering the concept or the people; the food or drinks; and the space or awards.
4. Optionally one `quote` block, only under the quote rule above. Its `attribution` names the person and the publication.
5. **"Why it matters"** (or a similar heading): the Vitrea angle. One or two paragraphs on what other independent business owners can learn (concept, design, community, consistency, storytelling, menu, getting found). Keep it as analysis, without invented statistics.
6. **"Plan your visit"** heading, then one-line paragraphs:
   - `Where: <verified address>.`
   - `When: <verified hours>.`
   - `What to order: <items named in your sources>.`
   - `Good for: <occasions supported by your sources>.`

   Omit any line you could not verify.

**SEO:**
- `title`: under 60 characters, with the brand name and city. Pattern: "<Brand>, <City>: <short angle>". Example: "Seezen Coffee House, Kanpur: the café built for staying".
- `standfirst` (also the meta description): 140–160 characters, with the brand, the city and what makes it notable.
- Use the brand name, the city and the neighbourhood naturally in the first paragraph and in at least one heading. Mention the category ("cocktail bar in New Delhi", "restaurant in Goa") once or twice where it reads naturally.
- Slug: lowercase, hyphenated, brand + city (see the queue).

## Step 3: Add the story

Edit **only** `app/content/stories.ts`. Add a new object at the **top** of the `stories` array (directly after `export const stories: FeatureStory[] = [`), matching the `FeatureStory` type:

```ts
{
  slug: "<slug>",
  draft: false,
  publishedAt: "<YYYY-MM-DD, today's date in IST>",
  kicker: "Feature · <Restaurant | Bar | Restaurant & bar> · <City>",
  title: "<title>",
  standfirst: "<standfirst>",
  writer: "The Vitrea team",
  date: "<D Month YYYY, e.g. 12 October 2026>",
  readTime: "<ceil(words / 200)> min read",
  heroImage: null,
  heroAlt: "",
  heroCaption: "",
  body: [ /* paragraph / heading / quote blocks only */ ],
  business: {
    name: "<official name>",
    details: "<Neighbourhood, City> · <Type> · <one verified fact, e.g. 'Opened 2019'>",
    logo: null,
    website: "<verified https URL or empty string>",
    instagram: "<verified https://www.instagram.com/<handle>/ or empty string>",
  },
  readNext: [],
},
```

- Escape any double quotes inside strings (`\"`).
- Do not change the cover story, the homepage, components or any other story. The homepage "Latest features" and the /features page update automatically from this list.

## Step 4: Verify

1. `npm install` (if `node_modules` is missing), then `npm run build`. The build must pass, and `/features/<slug>` must appear in the route list. Fonts are local, so no network is needed for fonts.
2. `npx eslint app` must pass.
3. `git status` must show only `app/content/stories.ts` and `docs/feature-autopilot.md` (plus `package-lock.json` only if npm genuinely changed it; otherwise revert it). Revert anything else.
4. Re-read the new entry against the Research rules. Delete any sentence you cannot tie to a source.

If the build cannot be made to pass, do **not** push. Report the error to Mahi.

## Step 5: Publish

1. `git fetch origin main`, then rebase onto it.
2. Commit with the message `Add feature: <title>`, ending with the line `Co-Authored-By: Claude <noreply@anthropic.com>`.
3. Push to `main`. If the push is rejected, fetch, rebase and retry once.
4. Vercel deploys `main` automatically. The story goes live at `https://vitreaonline.in/features/<slug>` a few minutes later.

## Step 6: Report

Send Mahi one short message with:
- the title and live URL
- the target search phrase
- the 3+ sources used
- how many brands are left in the queue

If anything failed, say exactly what, and that nothing was published.

---

## Published log

Newest at the bottom. One block per run: date and time (IST), brand, title, slug, sources, notes.

- 2026-10-12: Seezen Coffee House, Kanpur (`seezen-coffee-house-kanpur`), published by hand with photos courtesy of Seezen. Not part of the queue.

- 2026-10-12 11:50 IST: Indian Accent, The Lodhi, New Delhi. Title: "Indian Accent, New Delhi: modern Indian, still evolving". Slug: `indian-accent-new-delhi`. Sources: https://www.indianaccent.com/newdelhi ; https://www.restaurantindia.in/news/chef-manish-mehrotra-who-gave-india-its-first-taste-of-innovative-indian-cuisine-part-ways ; https://bwhotelier.com/article/indian-accent-opens-at-the-lodhi-new-delhi-131729 ; https://www.outlooktraveller.com/News/indian-restaurants-on-asias-50-best-list-2025 ; https://edition.cnn.com/travel/article/indian-accent-best-indian-restaurant ; https://www.forbesindia.com/article/lifes/manish-mehrotra-and-his-modernindian-legacy/93786/1 ; https://www.bwtravel.com/industry-insights/indian-accent-launches-chaat-tasting-menu-12234365 ; https://en.wikipedia.org/wiki/Indian_Accent_(restaurant) . Notes: no photos; current opening hours not verifiable, so the "When" line is omitted. 2026 Asia's 50 Best rank not found, so the 2025 rank (46th) is used.

- 2026-10-12 18:55 IST: Hoots', Vasant Vihar, New Delhi. Title: "Hoots', New Delhi: the speakeasy with a family tree". Slug: `hoots-new-delhi`. Sources: https://www.theworlds50best.com/discovery/Establishments/India/New-Delhi/Hoots.html ; https://businesstoday.in/lifestyle/food/story/colvas-tesouro-amid-top-5-bars-in-asia-four-more-in-50-best-bars-331783-2022-04-29 ; https://theprint.in/feature/delhis-new-speakeasy-culture-hidden-bars-secret-doors-passcodes-artsy-cocktails/2538802/ ; https://www.esquireindia.co.in/food-and-drinks/where-to-drink/inside-delhis-hottest-new-cocktail-trend-intimate-bars-hidden-within-bars ; https://oteats.outlooktraveller.com/features/guides/vasant-vihar-has-some-of-delhis-coolest-bars-only-if-you-can-hunt ; https://www.harpersbazaar.in/travel-&-food/story/inside-mumbai-and-delhis-secret-speakeasies-the-hidden-bars-where-celebs-actually-go-1410762-2026-06-21 ; https://www.theculturetrip.com/asia/india/articles/get-the-best-cocktails-in-delhi-at-these-bars ; https://www.enprimeurclub.com/bars/hoots-new-delhi ; https://www.diffordsguide.com/bars/OzanZ7/hoots . Notes: no photos; no official website found, Instagram @mr.hoots used. Business Today placed it in Khan Market, contradicted by all other sources (Basant Lok, Vasant Vihar), so that detail was ignored. Year of the 51–100 entry not found, so no year given. Menu details from 2025–26 press may change.

- 2026-10-13 10:55 IST: Zetu, Mehrauli, New Delhi. Title: "Zetu, New Delhi: Sri Lanka under a Mehrauli banyan". Slug: `zetu-mehrauli-new-delhi`. Sources: https://thenodmag.com/content/zetu-delhi-sri-lankan-restaurant ; https://www.theweek.in/leisure/lifestyle/2026/06/03/new-restaurant-zetu-brings-a-slice-of-sri-lanka-to-delhi.amp.html ; https://www.indianretailer.com/franchisetv/archives/news/zetu-debuts-delhi-new-175-seater-restaurant-showcases-modern-sri-lankan-cuisine ; https://oteats.outlooktraveller.com/reviews/zetu-brings-sri-lankas-culinary-wealth-to-delhis-mehrauli ; https://www.timeout.com/delhi/restaurants/zetu ; https://www.esquireindia.co.in/food-and-drinks/what-to-eat/fine-dining-in-delhi-7-best-luxury-restaurants-you-must-try ; https://www.eazydiner.com/food-trends/indias-best-new-restaurant-openings-of-2026 . Notes: no photos; no official website or Instagram handle could be verified, so both are left empty. Sources disagree on which co-founder is linked to Covah and Congo, so those affiliations are left out. One quote used, verbatim from The Week (chef Dush Ratnayake).

- 2026-10-13 19:05 IST: Barbet & Pals, Greater Kailash II, New Delhi. Title: "Barbet & Pals, New Delhi: two bartenders, one nest". Slug: `barbet-and-pals-new-delhi`. Sources: https://thenodmag.com/content/barbet-and-pals-delhi-new-restaurant-cocktail-bar-review ; https://www.esquireindia.co.in/amp/story/food-and-drinks/where-to-drink/barbet-pals-is-redefining-indian-terroir-one-cocktail-at-a-time ; https://www.timeout.com/delhi/bars-and-pubs/barbet-pals ; https://www.tatlerasia.com/dining/barbet-pals-new-delhi ; https://oteats.outlooktraveller.com/reviews/visiting-barbet-pals-in-delhi-start-with-the-himalayan-madhpey ; https://ellegourmet.in/drinks/barbet-pals-cocktails-and-stories-go-hand-in-hand-at-this-new-bar-10642575 . Notes: no photos. Official site (barbetandpals.com, listed by Tatler) could not be fetched this run. Hours from The Nod Mag and Outlook Traveller (Wed–Mon 5pm–1am); Time Out listed 10am, treated as an error. Sources disagree on whether Rana's roots are Kumaon or Garhwal, so the article says Uttarakhand/the hills. Esquire describes The Nest as the rotating menu, but Elle, Nod and Outlook describe Bird's Eye View as rotating, so the majority version is used. One quote used, verbatim from Elle Gourmet India (Chirag Pal).

- 2026-10-14 10:55 IST: Japonico, Sector 43 (Golf Course Road), Gurugram. Title: "Japonico, Gurugram: robata fire and a manga cocktail list". Slug: `japonico-gurugram`. Sources: https://lbb.in/delhi/japonico-gurugram-review ; https://indianfoodfreak.com/2025/02/01/japonico-elevating-dining-standards-with-innovation-and-elegance ; https://oteats.outlooktraveller.com/reviews/japonicos-hamachi-carpaccio-is-a-beautiful-burst-of-flavours-that-will-keep-you-coming-back-for-more ; https://oteats.outlooktraveller.com/reviews/if-sake-sets-the-mood-the-himalayan-trout-seals-the-deal-at-japonico ; https://oteats.outlooktraveller.com/features/guides/these-are-gurugrams-best-picks-for-japanese-lovers ; https://www.outlooktraveller.com/amp/story/experiences/food-and-drink/new-launches-and-refreshed-menus-heres-why-you-should-go-to-these-japanese-restaurants-in-delhi-ncr ; https://www.eazydiner.com/delhi-ncr/japonico-sector-43-gurgaon-700955 . Notes: no photos; no official website found; Instagram handle @japonico.ggn taken from an Outlook Traveller photo credit (Instagram itself could not be fetched). Exact opening date not found, so "early 2025" is used. Closing time varies by source (1am vs 2am), so Plan your visit gives lunch and dinner start times only. Chef's name spelt Blondi (two sources) rather than Blondie (one). No awards found; no quotes used.

- 2026-10-14 ~18:55 IST: Bar Outrigger, Dona Paula, Goa. Title: "Bar Outrigger, Goa: a rum bar at the Dona Paula jetty". Slug: `bar-outrigger-goa`. Sources: https://www.timeout.com/india/bars-and-pubs/bar-outrigger ; https://www.tatlerasia.com/dining/bar-outrigger-goa ; https://www.designpataki.com/7-of-goas-hottest-new-dining-destinations/ ; https://thenodmag.com/content/unique-goa-bars-assagao-panjim-dona-paula ; https://www.esquireindia.co.in/amp/story/food-and-drinks/where-to-drink/four-indian-bars-just-made-it-to-asias-50-best ; https://thenodmag.com/content/asias-50-best-bars-2026-india-boilermaker-goa-bar-spirit-forward-soka-bengaluru ; https://www.mansworldindia.com/experiences/fooddrink/indian-bars-claim ; https://luxe.outlookindia.com/food-travel/food/50-bars-of-india-to-visit-in-2025 ; https://www.enprimeurclub.com/bars/bar-outrigger-goa . Notes: no photos. Official site (baroutrigger.com) and the 50 Best discovery page could not be fetched this run; website and Instagram (@baroutriggergoa) taken from Tatler Asia. Exact opening date not found, so the article says Design Pataki listed it among new openings in January 2025. Hours from Time Out India only, attributed in the line. No quotes used.

- 2026-10-16 ~19:05 IST: Slow Tide, D'Mello Vaddo, Anjuna, Goa. Title: "Slow Tide, Goa: the Anjuna beach shack, rethought". Slug: `slow-tide-goa`. Sources: https://www.gomantaktimes.com/my-goa/places-to-eat/rooted-to-goa-slow-tide-exudes-the-anjuna-vibe ; https://www.designpataki.com/?p=31117 ; https://www.mansworldindia.com/lifestyle/7-underrated-dining-spots-in-goa-to-visit-on-your-next-trip ; https://www.esquireindia.co.in/food-and-drinks/what-to-eat/six-beachfront-restaurants-in-goa-that-earned-their-name ; https://www.esquireindia.co.in/amp/story/food-and-drinks/where-to-drink/best-bars-in-goa-you-can-visit-on-the-long-weekend ; https://yourstory.com/ys-life/30-best-bars-awards-sidecar-cobblerandcrew ; https://curlytales.com/30bestbarsindia-list-of-2024-revealed-and-lair-steals-the-show-as-indias-best-bar-full-list-of-winners-inside/amp/ ; https://curlytales.com/india/food/bengaluru-dominates-as-bar-spirit-forward-takes-no-spot-at-best-bars-india/amp/ ; https://luxe.outlookindia.com/food-travel/food/50-bars-of-india-to-visit-in-2025 ; https://urbanaut.app/spot/slow-tide-at-the-conservatory ; https://sheerluxe.com/culture/travel/things-to-do-in-goa-india ; https://lbb.in/delhi/top-bars-in-goa . Notes: no photos; no official website found, Instagram @slowtidegoa from Design Pataki, LBB and Sheerluxe. Exact opening date not found, so the article says Design Pataki listed it among new openings in February 2023. Owner's surname (Dsouza) only from an Urbanaut event listing. Hours conflict (Gomantak: from noon daily; LBB: 9am–11:30pm), so the When line gives only 'open seven days' with a check-first note. Man's World gives a different street address (St Anthoney Prias Waddo) from Gomantak/LBB (D'Mello Vaddo); the majority version is used. Cocktail spelt Acid Erick (Man's World) rather than Acid Erik (Gomantak). One quote used, verbatim from Gomantak Times (Neil).

- 2026-10-17 ~11:10 IST: Native Cocktail Room, Hotel Pearl Palace, Hathroi Fort, Ajmer Road, Jaipur. Title: "Native Cocktail Room, Jaipur: the bar that taught a city". Slug: `native-cocktail-room-jaipur`. Sources: https://nativecocktailroom.com/ ; https://curlytales.com/india/food/from-amritsar-to-guwahati-best-bars-in-tier-cities-levelling-up-indias-cocktail-culture/amp/ ; https://oteats.outlooktraveller.com/whats-new/bombay-daak-brings-its-inventive-cocktails-to-native-cocktail-room-jaipur ; https://oteats.outlooktraveller.com/features/guides/palaces-panoramas-perfect-pours-the-best-new-cocktail-bars-in-jaipur ; https://allaboutjaipur.com/bar-takeover-take-over/8562/ ; https://luxe.outlookindia.com/food-travel/food/primitive-jaipur-an-exciting-new-dining-spot-in-the-pink-city ; https://www.ambrosiaindia.com/2025/06/why-primitive-in-jaipur-should-be-your-next-dinner-reservation/ ; https://www.30bestbarsindia.in/list-of-bars/2024-archive/ ; https://curlytales.com/india/food/bengaluru-dominates-as-bar-spirit-forward-takes-no-spot-at-best-bars-india/amp/ ; https://www.esquireindia.co.in/food-and-drinks/where-to-drink/what-the-30-best-bars-list-tells-us-about-the-future-of-bars-in-india ; https://curlytales.com/from-jaipur-to-pune-these-new-cities-are-becoming-the-rising-pulse-of-indias-cocktail-scene/amp/ ; https://luxe.outlookindia.com/food-travel/food/50-bars-of-india-to-visit-in-2025 ; https://www.fodors.com/world/asia/india/rajasthan/places/jaipur-and-environs/jaipur/things-to-do/nightlife ; https://www.petitfute.co.uk/v46295-jaipur/c1169-s-amuser-sortir/c182-bar-cafe/c185-bar-a-cocktail/2028399-native-cocktail-room.html ; https://www.district.in/events/from-pink-city-to-bangalore-jaipurs-native-cocktail-room-comes-alive-at-high-ultra-lounge-oct9-2026-buy-tickets . Notes: no photos. Opening year not found, so none given. Surname spelt Wallia (Outlook Luxe, Ambrosia India) rather than Walia (All About Jaipur). Hours conflict (website 5:30pm–midnight; Curly Tales and Petit Futé noon–midnight; Curly Tales 2024 5:30–11pm), so the website's hours are given, attributed, with a book-ahead note. Instagram @nativecocktailroom from the official site. One quote used, verbatim from All About Jaipur (Simran Kaur Wallia).

- 2026-10-25 ~19:30 IST (published by hand from Mahi's chat, after the 18:50 run found the queue empty): Boilermaker, Siolim, Goa. Title: "Boilermaker, Goa: the Siolim dive bar Asia ranked eighth". Slug: `boilermaker-goa`. Sources: https://thenodmag.com/content/boilermaker-new-restaurant-bar-goa ; https://www.the50.com/bars/best-in-asia/the-list/boilermaker.html ; https://www.timeout.com/india/bars-and-pubs/boilermaker ; https://homegrown.co.in/homegrown-explore/pouring-passion-in-conversation-with-countertop-boilermaker-goas-pankaj-balachandran ; https://www.esquireindia.co.in/food-and-drinks/where-to-drink/asias-50-best-bars-2026-the-three-indian-bars-putting-goa-and-bengaluru-on-the-global-cocktail-map ; https://thenodmag.com/content/asias-50-best-bars-2026-india-boilermaker-goa-bar-spirit-forward-soka-bengaluru . Notes: no photos; no official website found, Instagram @boilermaker.goa from 50 Best. Consultancy named Countertop (50 Best, Homegrown, Nod) rather than Distilled Concepts (Time Out). Hours conflict (Nod 2024: Tue–Sun 5pm–midnight; Time Out: daily 6pm–12:30am), so Time Out's are given, attributed, with a check-first note. One quote used, verbatim from Homegrown (Pankaj Balachandran).

- 2026-10-26 ~10:55 IST: Bar Leone, Bridges Street, Central/Sheung Wan, Hong Kong. Title: "Bar Leone, Hong Kong: the Roman bar ranked world No. 1". Slug: `bar-leone-hong-kong`. Sources: https://www.thestandard.com.hk/hong-kong-news/article/322393/Cocktail-Kings-How-Lorenzo-Antinori-poured-Bar-Leones-way-to-the-global-crown ; https://www.thestandard.com.hk/news/article/344956/Bar-Leone-named-Worlds-Best-Bar-for-second-consecutive-time ; https://www.tatlerasia.com/dining/drinks/bar-leone-worlds-best-bar-2026 ; https://www.timeout.com/hong-kong/bars-and-pubs/bar-leone ; https://www.islands.com/2020493/world-number-one-rated-bar-leone-hong-kong-intimate-timeless-best-drinks-order ; https://robbreport.hk/posts/lorenzo-antinoris-bar-leone-roars-into-hong-kongs-bar-scene ; https://100toptables.scmp.com/restaurants-profile-2026/bar-leone ; https://krdo.com/news/2025/10/08/a-neighborhood-joint-in-hong-kong-has-been-named-the-worlds-best-bar/ . Notes: no photos. The 50 Best page and the SCMP 2026 awards article could not be fetched this run. Website (barleonehk.com) from Time Out Hong Kong; Instagram @barleonehk from SCMP 100 Top Tables. Hours: Time Out says Tue–Sun 5pm–midnight, Islands and SCMP say 5pm until late, so the When line notes the difference. No prices given (sources quote US/HK dollars only). One quote used, verbatim from The Standard (Lorenzo Antinori).

- 2026-10-26 ~19:10 IST: Masque, Laxmi Woollen Mills, Mahalaxmi, Mumbai. Title: "Masque, Mumbai: ten years of tasting India". Slug: `masque-mumbai`. Sources: https://www.restaurantindia.in/news/masque-turns-10-with-new-design-service-format-and-culinary-direction.n17349 ; https://timeout.com/india/news/india-masque-and-naar-make-it-to-asia-50-best-restaurants-list-032626 ; https://oteats.outlooktraveller.com/whats-new/masque-mumbai-bags-hospitality-award-ahead-of-asias-50-best-2026 ; https://relaischateaux.com/gb/restaurant/masque ; https://yourstory.com/ys-life/varun-totlani-the-head-chef-mumbai-masque ; https://www.falstaff.com/en/news/masque-brings-modern-indian-fine-dining-to-stockholm-stadshotell ; https://curlytales.com/india/trending/asias-best-restaurants-list-out-mumbais-masque-this-place-from-kasauli-earns-a-spot/ ; https://www.diffordsguide.com/bars/9yppR7/the-living-room-by-masque ; https://en.wikipedia.org/wiki/Masque_(restaurant) . Notes: no photos. Official site (masquerestaurant.com) and the 50 Best story page could not be fetched this run; website taken from Relais & Châteaux, Difford's Guide and Wikipedia. Instagram handle not verified, so left empty. Sources disagree on founders (Restaurant India and Falstaff: Aditi and Aditya Dugar; Wikipedia: Prateek Sadhu and Aditi Dugar), so the article names the Dugars as founders per the restaurant's own anniversary announcement and mentions Sadhu only as the previous head chef. Time Out says 'India's Best Restaurant for the fifth time'; Falstaff says 'five years in a row', so the article says fifth time. Hours from Relais & Châteaux only (dinner Tue–Sun, closed Mon), with a check-first note; an older Secret Retreats listing was not used for hours. One quote used, verbatim from Restaurant India (Aditya Dugar).

- 2026-10-27 ~11:00 IST: Disfrutar, Carrer de Villarroel 163, Eixample, Barcelona, Spain. Title: "Disfrutar, Barcelona: three El Bulli chefs, one kitchen". Slug: `disfrutar-barcelona`. Sources: https://en.wikipedia.org/wiki/Disfrutar ; https://www.catalannews.com/culture/item/barcelonas-disfrutar-named-best-restaurant-in-the-world ; https://www.timeout.com/barcelona/restaurants/disfrutar ; https://guide.michelin.com/si/en/catalunya/barcelona/restaurant/disfrutar ; https://elnacional.cat/en/gastronomy/europe-best-restaurant-barcelona-disfrutar-world-50-best-list_1048974_102.html ; https://designboom.com/?p=275118 ; https://www.thelocal.es/20240606/this-restaurant-in-spain-has-been-crowned-the-best-in-the-world ; https://www.enprimeurclub.com/restaurants/disfrutar . Notes: no photos. Official site and the 50 Best pages could not be fetched this run; website (disfrutarbarcelona.com) from Wikipedia, Michelin and En Primeur Club. Instagram handle not verified, so left empty. Hours conflict (Michelin and En Primeur: Mon–Fri, closed weekends; Time Out: Tue–Sat), so Michelin's days are given, attributed, with a check-first note. No 2025/2026 50 Best rank, since a No. 1 moves to Best of the Best (per Catalan News). No prices given (sources quote euros/dollars only). 2019 rank (No. 9) from En Primeur Club only. One quote used, verbatim from Catalan News (Mateu Casañas).
