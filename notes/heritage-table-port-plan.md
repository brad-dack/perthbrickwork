# Port plan: the heritage table

Written 2026-09-07. Diagnosis from GSC exports of the same date, cross-checked
against `config.js` and live HTTP.

---

## 1. What actually makes the fences page rank

`brick-fences-boundary-walls.html` averages position **19.47**;
`tuckpointing-repointing.html` averages **53.22**. That gap is *not* head terms —
those are level:

| fences query | pos | tuckpointing query | pos |
|---|---|---|---|
| brick fence perth | 41.8 | tuckpointing perth cost | 41.0 |
| brick fence cost perth | 47.5 | mortar pointing perth | 44.7 |
| front fence perth | 49.0 | federation tuckpointing | 47.9 |

The fences page's listed queries average ~45 across ~150 impressions, but the page
carries 334 impressions at an average of 19.47. Roughly half its impressions come
from queries below GSC's display threshold, ranking far better than anything listed.
The visible tip: `city of canning`, **position 9** — the best genuine position on
the site.

That query exists because of the 30-council front fence table. The page is not
outranking competitors; it is ranking on queries nobody else wrote a page for.

Structural diff (schema types, template and internal-link count are identical):

| | fences | tuckpointing |
|---|---|---|
| Words | 14,366 | 7,873 |
| WA gov/council citations | 33 | 1 + SPAB |
| FAQ entries in schema | 16 | 5 |
| Images | 8 | 2 |
| Original dataset | 30-council table | — |

**The transferable asset is one thing: a per-council regulatory table built from
primary sources, with a dated methodology note.**

---

## 2. Decision to make first: which page hosts it

The obvious analogue for tuckpointing is **heritage and character-area approval
requirements**. But it has a better topical home than the tuckpointing page.

**Recommendation: put the table on `federation-heritage-restoration.html`**, with a
substantial summary and link from `tuckpointing-repointing.html`.

- Topical fit. `federation tuckpointing` (54 imp, pos 47.9) and
  `federation tuckpointing perth` (10 imp, pos 51.1) should land on the federation page.
- It fixes two problems at once — that page currently has **zero impressions** and is
  sitting in the Crawled/Discovered-not-indexed bucket.
- The fences page proves a table like this **generates** authority rather than needing
  it. Starting from zero is not a reason to avoid the page.

Counter-case: the tuckpointing page has the existing impression history. If you would
rather concentrate than split, the table goes on tuckpointing and the federation page
links in. Either works — but pick before drafting, because the prose framing differs.

---

## 3. Table spec

Reuse the existing `cards:` renderer at `config.js:1531` — long prose cells, first
column becomes the card heading. No `bake.js` changes needed.

```
columns: [
  "Local Government",
  "Heritage list / Local Heritage Survey",                   // desk-researchable
  "Named heritage or character areas",                       // desk-researchable
  "Is repointing a street-facing facade approvable work?",   // NEEDS COUNCIL CONTACT
  "Council page",                                            // desk-researchable
  "Last checked"
]
```

Per marker standards section 4, this splits cleanly and should be built in two passes:

- **Pass A (desk research, no phone calls).** Columns 2, 3, 5, 6. Every WA council
  maintains a Local Heritage Survey (formerly Municipal Heritage Inventory) under the
  Heritage Act 2018 (WA), and most publish it. inHerit is the state database.
- **Pass B (council contact).** Column 4 only. This is the column carrying the real
  value — the fences table won because it answered a question homeowners kept getting
  a wrong single answer to. Same dynamic here. Leave it as a narrow `marker:` block
  until the calls are made; do not guess it.

Ship Pass A with column 4 omitted entirely rather than present-and-empty — same call
made for the pricing tables on 2026-08-03, and for the same reason.

---

## 4. Council prioritisation

The fence table needed all 30 because every house has a front fence. Heritage does not
distribute evenly — it tracks pre-war housing stock. Proposed tiers, worth your sanity
check since you know the metro better than I do:

**Tier 1 — dense federation/interwar stock, do these first (16):**
Fremantle, East Fremantle, Subiaco, Vincent, Perth, South Perth, Victoria Park,
Bayswater, Claremont, Cottesloe, Mosman Park, Peppermint Grove, Cambridge, Bassendean,
Nedlands, **Swan** (Guildford is one of the state's most significant intact heritage
precincts — do not skip Swan on the assumption it is outer-metro).

**Tier 2 — meaningful pockets (7):**
Stirling, Melville, Canning, Belmont, Kalamunda, Mundaring, Armadale.

**Tier 3 — little pre-war stock, low priority (7):**
Joondalup, Wanneroo, Cockburn, Kwinana, Rockingham, Gosnells, Serpentine-Jarrahdale.

A Tier 1-only table is publishable and probably captures most of the long-tail value.
Tier 3 rows can honestly say the council has a Local Heritage Survey but few
residential listings, if that is what the survey shows.

---

## 5. Source hierarchy

Verified live 2026-09-07 (`curl -o /dev/null -w "%{http_code}" -L`):

| Source | Status | Use |
|---|---|---|
| `https://inherit.dplh.wa.gov.au/` | 200 | State heritage database — per-place lookups, State Register |
| `https://www.dplh.wa.gov.au/heritage` | 200 | DPLH heritage landing |
| `https://www.wa.gov.au/organisation/department-of-planning-lands-and-heritage` | 200 | Department landing |
| `https://www.vincent.wa.gov.au/develop/heritage.aspx` | 200 | Example of a good per-council page |

**Do not construct council URLs.** Eight plausible patterns were tested; six 404'd
(Fremantle, Subiaco, Bayswater, Victoria Park among them). Worse, the obvious-looking
`legislation.wa.gov.au/.../law_a147090.html` resolves to the *Child Support (Adoption
of Laws) Amendment Act 2015*, not the Heritage Act. Look up the Heritage Act 2018 (WA)
citation properly before using it. Every URL gets curl-verified before it lands in
`config.js` — marker standards section 2.

Already in the repo and reusable: `config.js` has 47 heritage mentions, including
Fremantle's Heritage List / West End / Hilton Garden Suburb, and the
Mount Lawley–Inglewood–Maylands interwar material.

---

## 6. Methodology note

Mirror `config.js:1512` almost verbatim — it is the E-E-A-T signal, not decoration:

> built by contacting each local government and reading published local planning
> policy · every row records the date it was checked · rows updated when a council
> changes its position · where a council does not publish a figure and would not state
> one, the row says so rather than carrying a guess · not legal advice

For Pass A, adjust honestly: "built by reading each council's published Local Heritage
Survey and planning policy" — do not claim contact that has not happened.

---

## 7. The rest of the gap

Secondary to the table, in value order:

1. **FAQ 5 to 16.** Cheapest structured-data win. Source questions from the query
   export: `how much does tuckpointing cost` (25 imp), `tuckpointing perth cost` (33),
   `brick pointing repair`, `brickwork fretting`, `repointing bricks`. Cost answers
   follow the generic-answer pattern (form + phone + email), per the 2026-08-03 decision.
2. **Images 2 to 8.** Hand-drawn SVG preferred over generated photos, especially for
   joint profiles — that section is teaching a visual distinction and is currently
   text-only. Verify via `getBBox`, not screenshots.
3. **Citations 5 to ~20.** AS 3700 / AS 4773 by number (paywalled, do not reproduce),
   Heritage Council WA, DPLH, existing Fremantle technical sheets. Keep the Fremantle
   lime-mortar material explicitly scoped to heritage/limestone context — that
   over-scoping was already caught once in this repo.
4. **Word count 7,873 to ~14,000.** Should mostly fall out of 1–3 plus the table.

---

## 8. Sequencing

1. Decide host page (section 2).
2. Pass A desk research, Tier 1 councils. Curl-verify every URL.
3. Draft table + methodology note in `config.js`. `node bake.js` then `node bake.js --check`.
4. Confirm marker count moved as expected; verify rendered output in browser.
5. Ship. Request indexing on the host page.
6. FAQ expansion (7.1) — independent of the table, can run in parallel.
7. Pass B council contact, over whatever timeframe it takes. Column 4 lands last.

Do not expect movement inside two weeks. The fences page took from early August to now
to reach position 19, and it had the whole domain's crawl attention.
