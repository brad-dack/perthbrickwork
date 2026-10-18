# Search Console + GA4 review, 18 October 2026

Baseline for the next run. Compare against these numbers, not against memory.

## Periods and filters

- **Now:** 2026-09-18 to 2026-10-15 (28 days). **Prev:** 2026-08-21 to 2026-09-17.
- Both periods end 3 days before the run so Search Console data is settled.
- Australia only. GA4 also excludes smart-TV traffic. Search Console: final data, top 60 rows by impressions.
- GA4 internal-traffic filter: **not confirmed as Active** (action 8).

## Data quality

- **Excluded 2026-10-08:** 26 users, 28 sessions, 3 engaged sessions (0.1 engaged per user).
  Same day as four deploys (08:47–11:40 AWST, commits `522d2ab`, `04fa348`, `f53df58`, `5a6b21e`)
  and the scheduled competitor audit. Probably testing, not visitors.
- The export does not split that day by page or channel. **Per-page and per-channel GA4 numbers
  below still include it.**
- `f53df58` (10-08) made GA4 load only after the first largest-contentful-paint, so sessions before
  and after that date are not measured identically.
- `outbound_click` tracking went live 2026-10-13 06:58 (`504f3a0`). "No rows" this run = too new, not zero clicks.
- Every GA4 page-level difference this run is under ~10 sessions: noise.

## Changes live during this window (judge them next run)

`504f3a0`, pushed 2026-10-13 06:58, had only ~2.5 days in this window:
lintel title/meta + H2, federation title/meta, tuckpointing cost H2 + meta + cost-guide link,
crack stitching H2 + new FAQ, fence repair H2, in-body links to bricking up and restoration,
homepage restoration card, outbound click tracking.

`5a6b21e` (10-08) added `/brick-restoration-perth.html` and `/brick-extensions-additions.html`.

**For a clean read on 504f3a0, the next run's "now" period should start on or after 2026-10-13
(run on or after ~2026-11-13).**

## Search Console pages

| Page | Clicks now | Clicks prev | Impr. now | Impr. prev | Pos. now | Pos. prev |
| --- | --- | --- | --- | --- | --- | --- |
| /brick-repairs-repointing-tuckpointing.html (legacy redirect) | 0 | 0 | 16 | 648 | 25.6 | 65.2 |
| / | 1 | 0 | 207 | 644 | 52.1 | 56.3 |
| /tuckpointing-repointing.html | 0 | 0 | 430 | 402 | 47.9 | 53.8 |
| /brick-repairs-crack-stitching.html | 0 | 0 | 230 | - | 57.7 | - |
| /brick-fences-boundary-walls.html | 1 | 0 | 84 | 144 | 30.5 | 39.3 |
| /brickwork-cost-guide.html | 0 | 0 | 34 | 121 | 48.6 | 59.2 |
| /lintel-repair-replacement.html | 0 | 0 | 120 | - | 46.9 | - |
| /brick-restoration-perth.html | 0 | 0 | 99 | - | 58.1 | - |
| /federation-heritage-restoration.html | 0 | 0 | 77 | 49 | 45.2 | 49.2 |
| /about.html | 0 | 0 | 5 | 17 | 50.4 | 53.3 |
| /bricking-up-and-new-openings.html | 0 | 0 | 15 | - | 12.3 | - |

Total clicks this run: 2 (homepage 1, fences 1). Every query row had 0 clicks.

## Search Console queries to track

| Query | Impr. now | Impr. prev | Pos. now | Pos. prev | Page it concerns |
| --- | --- | --- | --- | --- | --- |
| doorways perth | 14 | - | 12.6 | - | bricking up |
| brick fencing perth | 5 | 15 | 14.6 | 49.4 | fences |
| tuckpointing perth cost | 17 | 29 | 16.4 | 30 | tuckpointing |
| brick fence cost | 6 | 8 | 19.8 | 45.9 | fences |
| brick fence cost perth | 5 | 18 | 24.6 | 30.3 | fences |
| lintel replacement perth | 42 | - | 28.3 | - | lintel |
| crack stitching perth | 31 | 8 | 29.2 | 46.4 | crack stitching |
| masonry salt damage repair perth | 19 | 1 | 32.1 | 46 | crack stitching |
| tuck pointer perth | 39 | 51 | 32.2 | 40.7 | tuckpointing |
| perth tuckpointing | 19 | 40 | 31.9 | 39.4 | tuckpointing |
| brick fence perth | 45 | 72 | 36.8 | 38.2 | fences |
| brickwork fretting | 15 | - | 37.1 | - | crack stitching |
| tuckpointing perth | 33 | 58 | 38.6 | 45.3 | tuckpointing |
| tuck pointing perth | 33 | 64 | 39 | 47.1 | tuckpointing |
| brick restoration perth | 17 | 58 | 40.2 | 52.3 | restoration |
| federation tuckpointing | 32 | 54 | 45.6 | 42.8 | federation |
| brick wall repairs perth | 9 | 31 | 46.9 | 54.8 | crack stitching |
| lintel replacement | 12 | - | 50.3 | - | lintel |
| repointing perth | 32 | 72 | 51.6 | 65.4 | tuckpointing |
| cost to rebuild brick wall | 10 | 13 | 52.9 | 54.7 | cost guide |
| brick fence repair | 12 | 59 | 55.1 | 58.9 | fences |
| window lintel repair | 34 | - | 58.8 | - | lintel |
| wall crack repair perth | 23 | - | 67.8 | - | crack stitching |
| crack stitching | 41 | - | 80 | - | crack stitching |

## GA4 (10-08 not removable from these rows)

| Channel / source | Sessions now | Sessions prev | Engaged now | Engaged prev |
| --- | --- | --- | --- | --- |
| Direct | 37 | 8 | 12 | 7 |
| google / organic | 27 | 14 | 13 | 10 |
| chatgpt.com / ai-assistant | 15 | 1 | 4 | 1 |
| l.facebook.com / referral | 1 | 0 | 1 | 0 |

No perplexity.ai, gemini.google.com or copilot.microsoft.com rows in either period.

| Landing page | Sessions now | Sessions prev | Eng. rate now | Avg eng. time now (s) | Intent events now |
| --- | --- | --- | --- | --- | --- |
| / | 21 | 6 | 57.1% | 23.9 | 2 form_start |
| /brick-fences-boundary-walls.html | 14 | 7 | 42.9% | 239.5 | - |
| /bricking-up-and-new-openings.html | 12 | 1 | 50% | 89.5 | 3 form_start |
| /brickwork-cost-guide.html | 7 | 0 | 42.9% | 254 | 1 form_start |
| /federation-heritage-restoration.html | 6 | 1 | 16.7% | 94.7 | 1 click_to_call |
| /tuckpointing-repointing.html | 6 | 1 | 16.7% | 26.5 | - |
| /about.html | 4 | 3 | 0% | 0 | - |
| /lintel-repair-replacement.html | 3 | 0 | 33.3% | 6.3 | - |
| /brick-repairs-crack-stitching.html | 2 | 1 | 0% | 0 | - (prev: 1 form_start) |
| Site average (listed pages) | 80 | 23 | 37.5% | 93.2 | 6 form_start, 1 click_to_call |

Including 10-08: 80 sessions, 61 users. Excluding it: about 52 sessions, 35 users (day totals only).

## Action list from this run

Status: **done** = applied in config.js and baked on 2026-10-18 (not yet committed when written). **open** = recommended, not done. **held** = wait for 504f3a0 to have a full period.
All copy changes are in `config.js`. Lengths counted.

| # | Status | Target | Change | Impact | Effort (min) |
| --- | --- | --- | --- | --- | --- |
| 1 | done 2026-10-18 | fences `metaTitle`/`metaDescription` | Title `Brick Fences Perth \| Cost, Repairs & Council Height Rules` (57). Meta `What a brick fence costs in Perth, why fences crack and when to repair one, the front fence height limit for your council, and what to check on a quote.` (152) | High | 5 |
| 2 | done 2026-10-18 | bricking up title/meta/H1 | Title `Bricking Up Doorways & New Openings in Perth` (44). Meta `Bricking up a doorway, window or old AC hole in Perth, or cutting in a new door. Why the patch shows, what moves the cost, and when it needs an engineer.` (153). H1 `Bricking up doorways and cutting in new openings in Perth` | High | 10 |
| 3 | done 2026-10-18 | cost-section intros on fences, crack stitching, lintel, bricking up | Add `(the [brickwork cost guide](brickwork-cost-guide.html) explains how each unit is worked out)` as on the tuckpointing page | Med | 15 |
| 4 | held | tuckpointing title/meta | Title `Tuckpointing Perth: Cost & Repointing Explained` (47). Meta `Tuckpointing and repointing in Perth: how each is priced, how to tell which one your wall needs, and why the mortar mix matters on older brick.` (143) | Med | 5 |
| 5 | held | lintel title/meta | Title `Lintel Replacement Perth \| Window & Door Lintel Repair` (54). Meta `Window and door lintel replacement in Perth: a lintel crack vs footing movement, why steel lintels rust, what the job involves and what moves the cost.` (151) | Med | 5 |
| 6 | done 2026-10-18 | crack stitching title/meta/headings | Title `Crack Stitching Perth \| Brick Wall Crack Repairs` (48). Meta `Crack stitching and brick wall repairs in Perth. How to read a wall crack, when it needs an engineer, and what salt damage and fretting do to brick.` (148). H2 `Brick repairs` → `Brick wall repairs`. H3 `Salt attack` → `Salt attack: salt damage in Perth brickwork` | Med | 10 |
| 7 | done 2026-10-18 | federation H1 | `Federation tuckpointing and heritage restoration in Perth` | Low | 2 |
| 8 | open | GA4 Admin (no file) | Set internal-traffic filter Active; exclude the machine used for audits and PageSpeed runs | High (data) | 10 |

Not recommended this run: no new page (gap queries at positions 65-83 on 10-16 impressions, all
covered by existing pages; no suburb queries; `areas: []` is deliberate).

## What to check next run

- Did 504f3a0's retitled pages (lintel, federation) and renamed H2s move their queries above?
- Bricking up and fences: did they reach page 1 for `doorways perth` and `brick fencing perth`?
- Cost guide impressions: recovered from 34, or still falling?
- First real `outbound_click` rows: which cited sources, from which pages.
- Was the 10-08 kind of burst filtered out by the internal-traffic filter?
