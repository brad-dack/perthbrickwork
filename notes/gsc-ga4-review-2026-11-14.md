# Search Console + GA4 review, 14 November 2026

Source: the automated deep SEO audit run 2026-11-14 (DataForSEO, Search Console, GA4, leads).
Changes from it were applied on 2026-11-15. Compare the next run against these numbers.

## Periods and filters

- **Now:** 2026-10-15 to 2026-11-11 (28 days). Prev: the 28 days before. Australia only.
- Site age at run: 103 days.
- Lead attribution by landing page went live 2026-11-14 (`37ef1c5`), so every landing page shows 0 form
  leads this run even though 3 form leads came in. By-page lead data starts next run.

## Headline numbers

| | Now | Prev |
| --- | --- | --- |
| Impressions | 3,606 | 1,685 |
| Clicks | 29 | 20 |
| Sessions (GA4) | 44 (30 from search) | 80 |
| Call clicks + form leads per session | 9.1% | 6.3% |

Impressions by position: 1-10 1%, 11-20 2%, 21-50 45%, beyond 50 53%. Average position 51.3.
Leads: 3 form leads, 1 voicemail, 3 missed calls, 1 call click, 3 form starts.

## Pages (impressions, prev to now)

| Page | Impr. prev | Impr. now |
| --- | --- | --- |
| /brick-restoration-perth.html | 64 | 1,080 |
| /tuckpointing-repointing.html | 404 | 922 |
| / | 198 | 579 |
| /brick-repairs-crack-stitching.html | 215 | 433 |
| /federation-heritage-restoration.html | 69 | 326 |
| /lintel-repair-replacement.html | 111 | 228 |
| /brick-extensions-additions.html | - | 0 |

## Queries to track (page it should rank on, after this run's changes)

| Query | Where it ranked (impr., pos.) | Owner page |
| --- | --- | --- |
| tuckpointing perth (90/mo) | heritage 63 @ 36.5; tuckpointing 58 @ 51.5; home 58 @ 59.9 | tuckpointing |
| tuck pointing perth (30/mo) | tuckpointing 65 @ 40.9; heritage 61 @ 48.2; home 58 @ 67.5 | tuckpointing |
| perth tuckpointing | heritage 37 @ 46.3; home 36 @ 42.6 | tuckpointing |
| tuckpointing perth cost | @ 12.9 (13.5 in GSC) | tuckpointing |
| brick repointing perth (30/mo) | home 67 @ 48.8; restoration 65 @ 48.4; tuckpointing 65 @ 54.3 | tuckpointing |
| brick repairs perth (30/mo, $3.40) | restoration 68 @ 49.2; home 66 @ 53.3 | crack stitching |
| brick repair perth | home 62 @ 51.0; restoration 62 @ 53.8 | crack stitching |
| damaged brick wall repair | restoration 75 @ 75.7 | crack stitching |
| brick wall repairs | restoration 35 @ 66.1 | crack stitching |
| brick restoration perth | restoration 62 @ 33.5; home 62 @ 49.1 | restoration |
| window lintel repair | lintel 67 @ 54.6 | lintel |
| lintel replacement perth | lintel 51 @ 22.6 | lintel |
| crack stitching perth | crack stitching 47 @ 29.9 | crack stitching |
| brick fence perth | 48 to 4 impressions | fences |
| cost to rebuild brick wall | cost guide 36 @ 52.3 | cost guide (kept there on purpose) |
| bricklayer(s) perth | not in the data | home |

## Landing pages (GA4)

| Landing page | Sessions | From search | Call clicks | Form starts |
| --- | --- | --- | --- | --- |
| /brick-fences-boundary-walls | 11 | 10 | 0 | 0 |
| / | 8 | 2 | 0 | 0 |
| /bricking-up-and-new-openings | 6 | 4 | 0 | 2 |
| /federation-heritage-restoration | 5 | 2 | 1 | 0 |
| /tuckpointing-repointing | 4 | 4 | 0 | 0 |
| /brickwork-cost-guide | 4 | 3 | 0 | 0 |
| /lintel-repair-replacement | 3 | 2 | 0 | 1 |

## Audit findings not acted on, and why

- "federation tuckpointing" (title, H1, gap): Federation Tuckpointing is a Perth business's trade mark
  (see `d493f5a`); its top results are directory listings for that business.
- Restoration/home to fences for wall-repair queries: the fences page is about fences; house-wall repairs
  belong on crack stitching.
- "cost to rebuild brick wall" to fences: the cost guide's FAQ answers it.
- "bricklayers perth needs a new page": the homepage is that page; it was retitled instead.
- "brickwork near me": map-pack driven, no business listing before a renter.

## Action list from this run

All copy changes are in `config.js`, baked 2026-11-15. Not committed when written.

| # | Status | Change |
| --- | --- | --- |
| 1 | done | 8 FAQ answers: "we can give you a proper indication" now says a bricklayer gives it |
| 2 | done | Home: cost sentence no longer implies price ranges; tuckpointing card drops "most bricklayers cannot do at all" |
| 3 | done | Fences: enquiry links after the cost section, after the council table, end of the repair section |
| 4 | done | Home title `Bricklayers Perth \| Find the Right Bricklayer for Your Job`, new meta (also the sitewide Organization schema description) |
| 5 | done | Tuckpointing title `Tuckpointing Perth \| Brick Repointing & Cost Explained`; H2 `Brick repointing in Perth: how it is done` |
| 6 | done | Heritage title `Heritage Brickwork Perth \| Reinstating Lost Tuckpointing`, H1 and meta to "heritage brickwork"; link text "tuckpointing in Perth" |
| 7 | done | Crack stitching title `Brick Repairs & Crack Stitching Perth \| Wall Crack Repairs`; "Brick wall repairs" paragraph expanded |
| 8 | done | Lintel title `Lintel Replacement Perth \| Window & Door Lintel Repair`; H1 `Window and door lintel repair and replacement in Perth` |
| 9 | done | Restoration link text "brick repointing in Perth" / "brick repairs in Perth"; fences repair section links to crack stitching |
| 10 | done | FAQs: tuckpointing "How often…", "Can I tuckpoint my own wall?"; cost guide "…lay 1000 bricks?" |
| 11 | done | Fences title singular `Brick Fence Perth \| …` (applied without the Search Console page check) |
| 12 | open | Search Console URL Inspection on /brick-extensions-additions.html |

## What to check next run (run on or after ~2026-12-13 for a clean 28 days)

- Did "tuckpointing perth" and its variants move onto the tuckpointing page? The heritage page was ranking
  best (36.5) and was deliberately de-targeted; a dip of a few weeks is expected.
- Did "brick repairs perth" and "brick repair perth" move onto the crack stitching page?
- Homepage: any "bricklayer(s) perth" impressions? Homepage impressions are expected to fall as the
  repointing and tuckpointing queries move to their own pages.
- "window lintel repair" position after the lintel retitle.
- "brick fence perth" impressions back above 4?
- Fences page form starts, now that there are links to the form mid-page.
- First by-page form lead numbers (attribution live from 2026-11-14).
