# Vitrea feature autopilot

A scheduled task publishes **one** Vitrea feature per run, twice a day (around 10:50 and 18:50 IST), working down the queue below. Each run reads this file first and follows it exactly.

Vitrea (vitreaonline.in) is an independent media brand that features independent businesses and founders and explains where small-business marketing is heading. Features are editorial: chosen by Vitrea, never paid for.

---

## Queue

Work top to bottom. Publish the first unticked brand. When you publish one, tick it here (`[x]`) in the same commit and add its entry to the Published log.

| Done | # | Brand | Type | City | Suggested slug |
|---|---|---|---|---|---|
| [x] | 1 | Indian Accent, The Lodhi | Restaurant | New Delhi | `indian-accent-new-delhi` |
| [x] | 2 | Hoots | Bar | New Delhi | `hoots-new-delhi` |
| [x] | 3 | Zetu | Restaurant | New Delhi (Mehrauli) | `zetu-mehrauli-new-delhi` |
| [ ] | 4 | Barbet & Pals | Bar | New Delhi | `barbet-and-pals-new-delhi` |
| [ ] | 5 | Japonico | Restaurant & bar | Gurugram | `japonico-gurugram` |
| [ ] | 6 | Bar Outrigger | Bar | Goa | `bar-outrigger-goa` |
| [ ] | 7 | Slow Tide | Restaurant & bar | Goa | `slow-tide-goa` |
| [ ] | 8 | Native Cocktail Room | Bar | Jaipur | `native-cocktail-room-jaipur` |

If every row is ticked: publish nothing, and tell Mahi the queue is finished and the scheduled task "Vitrea feature autopilot" can be deleted or given new brands.

If a brand cannot be verified (fewer than 3 independent sources, or it appears to have closed), skip it. Mark the row `[skip]` with a one-line reason in the Published log, then move on to the next brand in the same run.

---

## Step 1: Research (do not skip)

Collect facts from **at least 3 independent sources**. Prefer these, in order:

1. The brand's own website and official Instagram.
2. Award lists: Asia's 50 Best Bars and Restaurants, India's Best Bars, Condé Nast Traveller India, Food Trends, Tatler Asia, Times Food & Nightlife Awards.
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
