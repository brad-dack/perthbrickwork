/* =============================================================================
   SITE CONFIG — the ONLY file you edit by hand.
   Every page on the site reads from this object at load time.

   CONTENT SOURCE: "Perth Brickwork — Page Copy v6". Four pages:
     /                                       homepage
     /brick-repairs-repointing-tuckpointing  repointing, tuckpointing, repairs
     /brick-fences-boundary-walls            brick and rendered fences
     /about                                  about + disclosure
   (plus /privacy, which v6 links to from the homepage and about page)

   MARKERS ARE DELIBERATE. [VERIFY: ...] and [NEEDS INPUT: ...] render on the
   page as loud unfinished-work boxes, and `node bake.js --check` fails while
   any of them remain. Nothing on this site may state a price, a council
   figure, a mortar spec, a suburb claim, a date or a credential that hasn't
   been sourced. Fill the marker or delete the claim — never guess it.

   Then run:  node bake.js          (regenerates pages + CNAME/robots/
                                     sitemap/404/favicon)
              node bake.js --check  (preflight — fails while markers remain)
============================================================================= */

window.SITE_CONFIG = {

  /* --- Core business identity ---------------------------------------- */
  business: {
    name: "Perth Brickwork",
    phone: "+61895115005",          // tel: link format, e.g. +61812345678
    phoneDisplay: "(08) 9511 5005", // human-readable
    email: "hello@perthbrickwork.com.au",
    city: "Perth",
    state: "WA",
    serviceArea: "The Perth metropolitan area",
    abn: "78 538 005 810",
    businessNumber: ""          // no separate registered business name; footer omits it while blank
  },

  /* The 30 LGAs the council fence table covers. Not yet wired into anything —
     held here for future areaServed schema, citation, and NAP work. */
  serviceAreaLGAs: [
    "City of Bayswater", "City of Belmont", "City of Canning", "City of Fremantle",
    "City of Melville", "City of Nedlands", "City of Perth", "City of South Perth",
    "City of Stirling", "City of Subiaco", "City of Vincent", "Shire of Peppermint Grove",
    "Town of Bassendean", "Town of Cambridge", "Town of Claremont", "Town of Cottesloe",
    "Town of East Fremantle", "Town of Mosman Park", "Town of Victoria Park",
    "City of Kalamunda", "City of Swan", "Shire of Mundaring",
    "City of Joondalup", "City of Wanneroo",
    "City of Armadale", "City of Gosnells", "Shire of Serpentine-Jarrahdale",
    "City of Cockburn", "City of Kwinana", "City of Rockingham"
  ],

  /* Used for canonical URLs, schema, and OG tags. No trailing slash.
     bake.js derives CNAME, robots.txt, and sitemap.xml from this. */
  domain: "https://perthbrickwork.com.au",

  /* --- Brand ----------------------------------------------------------- */
  brand: {
    color: "#8c4a2f",         // fired-clay brick
    colorDark: "#6d3823",
    colorContrast: "#ffffff",
    style: "classic",
    pattern: "none"
  },

  /* --- Tracking / integrations ----------------------------------------- */
  ga4Id: "G-XXXXXXXXXX",
  formspreeId: "xrenwvpe",

  /* --- Structured data ---------------------------------------------------
     Organization ONLY, sitewide. NOT LocalBusiness: there is no premises, no
     opening hours and no service counter, and no reviews or ratings exist.
     Do not add LocalBusiness, AggregateRating or Review until a renter's real
     details are on the site and the reviews are genuinely theirs. */
  schema: {
    legalName: "Perth Brickwork",
    identifierName: "ABN",
    identifier: "78 538 005 810",
    areaServed: "Perth, Western Australia",
    founder: "Brad"
  },

  /* --- Page meta ---------------------------------------------------------- */
  pages: {
    home: {
      metaTitle: "Bricklayer Perth | Repointing, Tuckpointing and Brick Fences",
      metaDescription: "Repointing, tuckpointing, brick repairs and brick fences across Perth. What each job involves, what drives the price, and what to check on a quote.",
      headline: "Bricklayer in Perth",
      subheadline: "Repointing, tuckpointing and brick repairs. Brick and rendered fences and boundary walls. Extensions and additions.",
      ctaText: "Tell us about your job",
      /* IMAGERY NOTE — read before adding or swapping any image.
         The images on this site are ILLUSTRATIVE. They are not photographs of
         work done by Perth Brickwork or by any bricklayer it refers to, and
         nothing on the site says or implies they are. That is why they carry
         no captions and why `photos` (the "Recent Work" section) is still
         empty — that section is the one that would claim authorship, and it
         stays empty until a renter supplies real, verifiable job photos.
         Alt text describes what is depicted and nothing more. */
      image: {
        src: "images/brick-rendered-front-fence-perth.jpg",
        alt: "A rendered front fence with a face brick base and capped piers, in front of a tile-roofed character home",
        width: 1000,
        height: 609
      }
    },
    about: {
      metaTitle: "About Perth Brickwork",
      metaDescription: "Who runs Perth Brickwork, how enquiries are handled and how the business is paid. A plain description of what this site is and what it is not.",
      headline: "About Perth Brickwork"
    },
    privacy: {
      metaTitle: "Privacy Policy | Perth Brickwork",
      metaDescription: "What the enquiry form on this site collects, who it is passed to, and how to have your details removed.",
      headline: "Privacy Policy",
      lastUpdated: "[DATE]"
    }
  },

  /* Short, honest value points shown under the hero. Every one of these is
     true from day one, before any renter is attached. */
  valueProps: [
    "Sending an enquiry costs you nothing",
    "No obligation, and no cost to you at any point",
    "Perth metropolitan area"
  ],

  /* --- The enquiry form ---------------------------------------------------
     One form, used on every page that carries one. Pages override the
     preset, the size placeholder, and may add a field (see `form` blocks).
     It asks about size, access and building age rather than just name and
     number, because those are the details that decide what the job is. */
  form: {
    headline: "Tell us about your job",
    fields: [
      {
        name: "job",
        label: "What do you need?",
        type: "text",
        required: true,
        placeholder: "e.g. repointing, tuckpointing, brick fence, extension"
      },
      { name: "suburb", label: "Suburb", type: "text", required: true },
      {
        name: "size",
        label: "Roughly how big is the job?",
        type: "textarea",
        required: true,
        placeholder: "e.g. front facade of a 1920s home, mortar crumbling, about 20 square metres"
      },
      { name: "name", label: "Your name", type: "text", required: true, autocomplete: "name" },
      { name: "phone", label: "Best number to call", type: "tel", required: true, autocomplete: "tel" },
      { name: "notes", label: "Anything else we should know?", type: "textarea", required: false }
    ],
    submitText: "Send my job details",
    underButton: "Free to send, and there is no obligation. Your details go to a bricklayer who covers your part of Perth and does that type of work.",
    successMessage: "Thanks — your job details are through. If a bricklayer in your area can help, they will be in touch.",
    /* Two variants: the phone fallback is only offered once a real number is
       in `business.phone`. Telling someone to ring [PHONE] is worse than
       offering no fallback at all. */
    errorMessage: "That didn't send. Please try again in a moment.",
    errorMessageCall: "That didn't send. Try again, or call"
  },

  /* --- Content pages ------------------------------------------------------
     Each entry maps to one file via `page`. `blocks` is the page body — an
     ordered list of typed blocks rendered by js/main.js:

       { h2 } { h3 }            headings (a new h2 starts a new banded section)
       { p } { lead }           paragraph(s) — string or array of strings
       { ul } { ol }            lists
       { table: {columns,rows}} data table (scrolls horizontally on mobile)
       { note }                 quiet callout box
       { credit }               author / sourcing line under the H1
       { marker }               UNFINISHED-WORK box. Loud on purpose. --check
                                fails while any remain. Never quietly delete
                                one — fill it or remove the claim it guards.
       { faqs: [{q,a}] }        FAQ accordion (also feeds FAQPage schema)
       { form: {...} }          the enquiry form

     Inline markup inside any text: **bold**, *italic*, [label](url).
  -------------------------------------------------------------------------- */
  services: [
    {
      page: "brick-repairs-repointing-tuckpointing.html",
      name: "Repointing, tuckpointing and brick repairs",
      shortName: "Repairs and repointing",
      shortDescription: "Mortar fails long before brick does. Repointing is maintenance, tuckpointing is a specialist decorative finish, and cracking is sometimes neither.",
      serviceType: "Brick repointing and repair",
      metaTitle: "Tuckpointing and Repointing Perth | Brick Repairs",
      metaDescription: "Tuckpointing, repointing and brick repairs in Perth. How to tell maintenance from structural movement, why mortar mix matters, and what each job costs.",
      headline: "Tuckpointing, repointing and brick repairs in Perth",
      subheadline: "Mortar fails long before brick does. What each job involves, what drives the price, and what to check before you accept a quote.",
      ctaText: "Tell us what your wall is doing",
      image: {
        src: "images/tuckpointed-brickwork-detail.jpg",
        alt: "Close-up of tuckpointed brickwork: fine pale ribbons run along each joint of the upper courses, with untreated brickwork below",
        width: 1000,
        height: 650
      },

      blocks: [
        { credit: "Researched and written by Brad, Perth Brickwork. Sources cited inline. Last reviewed 28 July 2026." },

        {
          lead: [
            "If you have crumbling mortar, a crack you have started watching, or an older frontage that has been patched by someone who did not know what they were looking at, this page is the place to start.",
            "The first thing to sort out is what you actually have, because three different problems get described the same way and they have very different costs. Deteriorating mortar is maintenance. Structural movement is an engineering problem. Tuckpointing is a decorative finish that most bricklayers cannot do at all."
          ]
        },

        { h2: "Tuckpointing, repointing and repair are three different things" },

        { h3: "Tuckpointing" },
        {
          p: [
            "A decorative finish, not a repair. The joint is filled with mortar coloured to match the brick, then a fine ribbon of contrasting lime putty is applied on top, creating the appearance of perfectly regular, very thin joints. It was used to make ordinary brickwork look like expensive, precisely laid brickwork.",
            "Common on Perth federation-era and inter-war housing. It is a specialist skill, closer to a trade of its own than a bricklaying task, and there are not many people in Perth who do it properly. Priced by the metre of joint rather than by wall area, and significantly more expensive than repointing.",
            "If a tuckpointed house has been repointed flat by a general bricklayer, the original finish is gone. It can be reinstated, but at that point it is restoration work rather than maintenance, and it is priced accordingly.",
            "The single most useful thing you can do before hiring anyone for tuckpointing is ask to see a finished job and go and look at it. Done well it is almost invisible as work and the facade simply looks right. Done badly the ribbon wanders, the widths vary, and it is obvious from the footpath."
          ]
        },

        { h3: "Repointing" },
        {
          p: [
            "Raking out failed mortar from the joints and replacing it. Maintenance work. The brick is fine, the mortar between it has weathered, softened or fallen out. Priced by area.",
            "The critical detail is the mortar mix. Older Perth brickwork was laid with lime mortar, which is deliberately softer than the brick. It is the sacrificial part of the wall: it takes the movement and it weathers first, so the brick does not. Repointing it with a modern cement mortar makes the joint harder than the brick, so when the wall moves it moves against a joint that will not flex, and the brick faces spall off instead.",
            "That is the most common and most expensive mistake in this whole category, and it usually stays invisible for several years before it shows.",
            "Ask any quote what mortar mix they are using and why. On an older wall, \"standard mix\" is not an answer."
          ]
        },
        {
          image: {
            src: "images/weathered-brickwork-failed-mortar.jpg",
            alt: "Weathered brickwork where the mortar has softened and fallen back from the face of the joints",
            width: 1000,
            height: 650
          }
        },
        {
          note: "For lime mortar joints, the City of Fremantle's heritage conservation guidance gives a mix of about 1 part lime putty to 2.5 parts sand, richer (1:2 or even 1:1.5) if the sand is fine-grained — never cement. See [City of Fremantle, Technical Advice Sheet 6: Repointing lime mortar joints](https://www.fremantle.wa.gov.au/wp-content/uploads/2025/04/Technical-Advice-Sheet-6-Repointing-lime-mortar-joints.pdf)."
        },

        { h3: "Brick repairs" },
        { p: "Replacing damaged or spalled bricks, rebuilding a section, fixing a cracked wall. Cost depends entirely on why the damage happened, which is the next section." },
        {
          image: {
            src: "images/spalled-brick-wall-damage.jpg",
            alt: "A section of brick wall where several brick faces have spalled away, exposing the softer material behind",
            width: 1000,
            height: 751
          }
        },

        { h2: "What mortar actually is, and why it is designed to fail first" },
        {
          p: [
            "Almost everything on this page follows from one idea, so it is worth understanding properly: **in a well built wall, the mortar is meant to be the weakest part.** It is the sacrificial component. It takes the movement, it takes the moisture, and it wears out first so that the brick does not. A mortar joint is cheap and replaceable. A brick face, once it has spalled off, is not.",
            "That is the whole logic of repointing. You are replacing a consumable. If you understand that, you can tell a good quote from a bad one without knowing anything else about bricklaying."
          ]
        },

        { h3: "What is in it" },
        {
          p: [
            "Mortar is a binder, sand, and water. The sand is the bulk of it and does most of the structural work by packing together; the binder glues it. Sand grading matters more than people expect — a well graded sand with a mix of particle sizes packs tighter and shrinks less than a uniform fine sand, which is why bricklayers are particular about where their sand comes from.",
            "The binder is where the eras differ. Older Perth brickwork used **lime** — usually slaked lime, sometimes as a putty, sometimes as a hydrated powder. Modern brickwork uses **Portland cement**, often with lime added to improve workability, giving the cement-lime-sand mixes you will hear quoted as ratios.",
            "Water is not an ingredient you can be casual about. It is there to trigger the chemistry and to make the mix placeable, and adding extra on site to make it easier to work reduces the final strength. That applies to mortar and it applies with more consequence to the concrete in a footing."
          ]
        },

        { h3: "How lime mortar works, and why it matters on an old wall" },
        {
          p: [
            "Lime mortar does not set the way cement does. It cures by **carbonation** — it slowly reabsorbs carbon dioxide from the air and converts back toward the calcium carbonate it was burnt from. In effect it is turning back into soft limestone, and it does this over months and years rather than hours.",
            "Two properties come out of that, and both are the reason old walls behave the way they do.",
            "**It is soft and it moves.** A lime joint flexes with the wall. Buildings move constantly — thermal expansion through a Perth summer, seasonal soil movement, vibration. A lime joint absorbs that movement in tiny distributed cracks across the whole wall rather than concentrating it into one big crack. Some of those micro-cracks even reseal themselves as free lime redeposits, which is why lime mortar is described as self-healing.",
            "**It is vapour permeable.** Moisture that gets into a solid masonry wall has to get back out, and in a lime-mortar wall it leaves through the joints. The joint is the wall's breathing route. Any salt carried in that moisture crystallises in the joint, where it does no harm, instead of in the brick.",
            "Now replace those joints with hard, dense, cement mortar. The wall still moves, but the joint will not, so the movement goes through the brick instead. The wall still needs to breathe, but the joint is now less permeable than the brick, so moisture and salt exit through the brick face instead. The face blows off. This is the single most common way good Perth brickwork gets permanently damaged, and it is almost always done with good intentions by someone who thought harder meant better.",
            "The failure is slow. It typically does not show for several years, which is long enough that nobody connects it back to the repointing job that caused it."
          ]
        },
        {
          note: "This mechanism — permeable lime mortar drawing moisture and salt out through the joint, versus impermeable cement mortar forcing it out through the brick or stone instead — is set out for local conditions in [City of Fremantle, Technical Advice Sheet 4: Limestone walls need lime mortars](https://www.fremantle.wa.gov.au/wp-content/uploads/2025/04/Heritage-Building-Conservation-Technical-Advice-Sheet-4-Limestone-walls-need-lime-mortars.pdf), which also notes that strength is rarely the limiting factor in repointing — permeability, elasticity and compatible thermal movement matter more."
        },

        { h3: "The hardness rule" },
        {
          p: [
            "One sentence to take to a quote: **the mortar should always be softer than the brick it sits between.** Not equal to it, and never harder than it.",
            "The corollary is that mortar specification is not a matter of taste or of what is in the ute. It follows from the brick, the age of the wall, and what the existing mortar is. A bricklayer who can explain why they have chosen a mix is a bricklayer who has thought about your wall. \"Standard mix\" on a hundred-year-old facade is not an answer, and it is a reasonable point at which to get another quote."
          ]
        },

        { h2: "How repointing is actually done" },
        {
          p: [
            "Worth knowing in outline, because most repointing disputes are about how much of this was skipped. The figures below are conservation-trade specifications for older lime-mortar walls — the houses this page is mainly written for. Modern cement-mortar brickwork follows a different specification, governed by AS 3700 and the mortar manufacturer's technical data, which this site has not yet sourced.",
            "**Raking out.** The failed mortar is cut out of the joint to a depth that lets the new mortar key in and behave as a joint rather than as a skim. For lime mortar joints, conservation guidance puts this at a minimum of 25mm, more where the mortar has eroded deeply. Doing this with an angle grinder is fast and is how a lot of joints get widened, chipped and irreversibly damaged, particularly on soft old brick where the grinder cuts the brick more readily than it cuts the joint. Hand raking, or careful mechanical raking followed by hand finishing, is slower and is what the job needs on anything old.",
            "**Cleaning and dampening.** Dust is removed and the joint is dampened so the surrounding brickwork does not suck the water straight out of the fresh mortar before it can cure. Skipping this is a common cause of a repoint that looks fine and crumbles inside two years.",
            "**Filling.** New mortar is pressed into the joint in layers on a deep rake-out rather than in one go, and compacted. For a deeply eroded lime mortar joint that means layers of roughly 15-20mm with about three days between each to let the previous layer stiffen — filling the whole depth in one go causes shrinkage cracking. Compaction is what makes the joint weather-resistant. A loosely filled joint fails from the outside in.",
            "**Finishing the profile.** The joint is tooled to a profile once it has firmed to the right point. Too early and it slumps; too late and it will not compact.",
            "**Curing.** On a hot dry Perth day fresh mortar wants to dry rather than cure, and drying is not curing. Lime mortar only hardens in the presence of liquid water, and conservation guidance for lime repointing specifies a 28-day curing regime of alternating weeks of wetting and protected drying, kept above 60% relative humidity throughout — not just a few days of light dampening. Cement mortar hardens faster and needs a shorter cure, but still wants protection from direct sun and wind while it does."
          ]
        },
        {
          note: "The rake-out depth and curing regime above are for lime mortar and follow [City of Fremantle, Technical Advice Sheet 6: Repointing lime mortar joints](https://www.fremantle.wa.gov.au/wp-content/uploads/2025/04/Technical-Advice-Sheet-6-Repointing-lime-mortar-joints.pdf) — written for local limestone and lime-mortar masonry, not for modern cement-mortar brickwork, and treat it as a minimum standard rather than a Perth-brick-specific figure until a bricklaying-specific source is found."
        },

        { h3: "Joint profiles, and which ones suit Perth" },
        {
          p: [
            "The profile is the shape the finished joint is tooled to. It is partly a look and substantially a weathering decision, because the profile determines whether water runs off the joint or sits on it.",
            "**Bucket handle**, also called concave — pressed with a rounded tool. The most common modern profile. Compacts well, sheds water, and is forgiving of slightly irregular brick.",
            "**Weathered** or struck — angled so the top of the joint is recessed and the bottom is proud, throwing water clear of the joint below. The best performer in driving rain and a sensible choice on an exposed Perth frontage.",
            "**Flush** — finished level with the brick face. Common on older work and the usual starting point under a tuckpointed finish.",
            "**Raked** — deliberately recessed for a strong shadow line. Popular on contemporary work and the weakest weathering profile, because the recess forms a ledge that holds water. It belongs on sheltered elevations rather than on a weather-facing wall.",
            "Matching the existing profile matters on a repair. A patch tooled to a different profile reads as a patch from the footpath forever, even when the mortar colour is a good match."
          ]
        },

        { h2: "How to tell maintenance from a structural problem" },
        { p: "Not a substitute for having someone look at it, but it tells you how worried to be." },
        { p: "**Probably maintenance:**" },
        {
          ul: [
            "Mortar you can scratch out with a key or screwdriver, evenly across a wall",
            "Sandy, crumbling joints, worst on the weather-facing side",
            "Fine hairline cracking that follows the mortar joints and does not continue across bricks",
            "White powdery deposit on the brick face. This is efflorescence, cosmetic in itself, though it points to a moisture source worth finding"
          ]
        },
        { p: "**Get it looked at properly:**" },
        {
          ul: [
            "A crack running through bricks rather than around them",
            "A crack wider at one end than the other, particularly wider at the top",
            "Stepped cracking following the joints diagonally across a wall",
            "Any crack you can fit a coin into",
            "A wall bowing, leaning, or separating from the structure next to it",
            "Cracking that has visibly changed in the last few months"
          ]
        },
        {
          p: [
            "The second list is a movement problem. The cause is under the wall: footings, soil movement, drainage or tree roots. Repointing a moving wall achieves nothing. The crack comes back and you have paid twice.",
            "An engineer diagnoses movement. A bricklayer repairs what the engineer identifies. Doing it in the other order is the most expensive mistake available in this category."
          ]
        },
        {
          image: {
            src: "images/crack-types-diagram.svg",
            alt: "Four labelled diagrams of brickwork, each showing a different crack pattern. One: a fine hairline crack running only along the mortar joints without crossing any brick, marked usually maintenance. Two: a crack stepping diagonally up the wall along the joints, marked get it looked at. Three: a near-vertical crack cutting straight through the brick faces, marked get it looked at. Four: a crack that is widest at the top and tapers to nothing at the bottom, marked get it looked at.",
            width: 1000,
            height: 780
          }
        },
        { note: "These are drawn diagrams, not photographs, and they are labelled that way on purpose. They show the pattern to look for rather than any particular wall. Photographs of real Perth failures would be better and are still worth getting — but a stock or generated photograph would not be, because the whole point here is telling one crack apart from another, and an image that only approximates a real failure would mislead someone deciding whether to call an engineer." },

        { h2: "The other things that go wrong with Perth brickwork" },
        { p: "Cracking and failed mortar are the two that get called in. These are the ones people live with for years without knowing what they are looking at, and several of them are specific to this city." },

        { h3: "Salt attack" },
        {
          p: [
            "The characteristic Perth masonry problem, and the reason brickwork here does not fail the way brickwork in colder climates does. Textbooks blame spalling on freeze-thaw. Perth does not freeze. Here the mechanism is salt.",
            "Soluble salts dissolve in moisture inside the wall and travel with it toward the drying face. At the surface the water evaporates and the salt crystallises. Crystal growth exerts real pressure inside the pores of the brick, and it repeats every wetting and drying cycle. Eventually the face fails and sheets off.",
            "Perth supplies the salt from several directions. Coastal and near-coastal suburbs get airborne salt off the ocean. Garden bore water is another source: WA Government monitoring of the Gnangara and Jandakot groundwater systems has recorded saltwater intrusion near the coast and the Swan River, making some bores more saline as groundwater levels fall. Reticulation that sprays a wall directly, rather than the garden, adds both the moisture and the salt a wall needs to fail — the practical tell is damage concentrated in a band at sprinkler height, worst on the side the reticulation runs.",
            "The fix is the moisture source and the salt path, not the brick. Replacing spalled bricks while leaving the reticulation spraying on them buys you a few years at most."
          ]
        },
        {
          note: "The crystallisation mechanism and the advice against watering walls or garden beds hard against them follows [City of Fremantle, Technical Advice Sheet 5: Dealing with dampness in old walls](https://www.fremantle.wa.gov.au/wp-content/uploads/2025/04/Technical-Advice-Sheet-5-Dealing-with-dampness-in-old-walls.pdf). Bore water salinity near the coast and the Swan River is documented by the [WA Department of Water and Environmental Regulation](https://www.wa.gov.au/service/natural-resources/water-resources/rebalancing-our-groundwater), which states that \"lower groundwater recharge has caused saline water to move inland, making bores more saline.\" Neither source measures how often reticulation is the specific cause of Perth brick spalling — that frequency claim has been removed pending real data."
        },

        { h3: "Efflorescence" },
        {
          p: [
            "The white powdery bloom on a brick face. Cosmetic in itself and frequently confused with salt attack, though the two are related — same salts, same moisture, different outcome.",
            "**Primary efflorescence** appears on new brickwork within weeks as the wall dries out for the first time. It is normal, it is mostly salts that were in the materials, and it usually weathers off within the first year. Do not let anyone sell you a repair for it on a new wall.",
            "**Secondary efflorescence** appears on established brickwork and means water is getting in and moving through the wall. That is the one that matters. It is not the problem, it is the receipt — something is wetting the wall repeatedly. A failed damp course, a leaking gutter or downpipe, a garden bed built up against the wall, reticulation, or a paved area draining back toward the house.",
            "Do not seal it, and do not paint over it. A sealer traps the moisture behind the face and converts an efflorescence problem into a spalling problem. Find the water first."
          ]
        },

        { h3: "Rising damp and salt damp" },
        { p: "Moisture drawn up from the ground through the base of a wall by capillary action, carrying dissolved salts with it. The signature is a tide-line of damp, staining or deterioration in the lower courses, roughly level, that does not go away in summer. Older Perth housing often has a physical damp proof course of slate or bituminous felt, and after a century these fail, get bridged by a raised garden bed or new paving, or were never there in the first place. This is a specialist diagnosis rather than a bricklaying one, and repointing over it achieves nothing." },

        { h3: "Cement render over old brick" },
        { p: "The same mistake as cement repointing, applied to the whole wall at once. A hard impermeable render on a solid brick wall that needs to breathe traps moisture behind it. The render then debonds in sheets, and the brickwork underneath is usually worse than it was before. Tap a rendered old wall and listen — a hollow drumming sound means it has already let go. This is why the answer to \"can I just render over it\" is generally no." },

        { h3: "Previous bad repairs" },
        { p: "Very common on Perth character housing, because these houses have had eighty years of well-meaning owners. A hard cement repoint over lime, a patch in the wrong colour or profile, brick faces ground flat to tidy them up, silicone sealer applied to a damp wall, or a tuckpointed facade repointed flat by someone who did not recognise what it was. Undoing bad work is frequently more expensive than the original job would have been, and it is worth knowing that before you get a quote that seems high." },

        { h2: "Tuckpointing: where it came from and how it is done" },
        {
          p: [
            "Tuckpointing is worth a proper explanation, because it is the single most misunderstood term in this trade and it is routinely used to mean ordinary repointing.",
            "It emerged in England between the late seventeenth and early twentieth centuries, most commonly used to imitate **gauged** or **rubbed** work: expensive, precisely shaped bricks laid with joints only a few millimetres wide, which read as a crisp, almost seamless facade — and, on cheaper buildings, to disguise irregular or damaged brick. Tuckpointing reproduced that appearance using ordinary bricks and ordinary joints. The joint is filled flush with a mortar coloured to match the brick, so the joint visually disappears into the wall. A fine ribbon of contrasting material — traditionally white lime putty and fine sand or stone dust — is then pressed into a scored groove on top, cut to a precise, uniform width. The eye reads that ribbon as the joint. The result is a wall that appears to have been laid to a tolerance it was never laid to. Done well, most people never realise a wall has been tuckpointed at all — that is the point of it.",
            "The name comes from the ribbon being **tucked** into the finished surface. The tools are specific to the trade: a jointer for pressing the ribbon in, and a Frenchman for trimming it straight against a straightedge.",
            "It reached Perth with federation-era and inter-war housing and it is found across the older suburbs, most often on the street-facing facade alone, because it was decoration rather than protection and there was no reason to spend it on the sides and back."
          ]
        },
        {
          note: "The origin, technique and tools above follow [The Society for the Protection of Ancient Buildings (SPAB), Tuck pointing](https://www.spab.org.uk/advice/tuck-pointing) — a UK heritage conservation body, since no WA-specific source describing the technique itself has been found. Which decades tuckpointing was actually common in Perth, and which suburbs it survives in today, is still not sourced and is not claimed above beyond \"federation-era and inter-war\" — see the suburb-detail marker further down this page."
        },

        { h3: "Why so few people do it" },
        {
          p: [
            "It is closer to a separate trade than to a bricklaying task. The colour matching is the hard part before any of the handwork starts — the stopping mortar has to disappear against the brick, and getting that right on weathered century-old brick is a mixing and testing exercise, not a product you buy. Then the ribbon has to be laid dead straight and dead consistent over a whole facade, by hand, for days.",
            "There is no volume in it, so the skill has not been widely passed on. That is why a general bricklayer quoting cheerfully on tuckpointing without ever having done it is a genuine risk rather than a theoretical one, and why the advice on this page is always the same: go and look at a finished job before you commit.",
            "Done well it does not read as work at all — the facade simply looks right, and most people cannot say why. Done badly the ribbon wanders, the widths vary, and it is obvious from the other side of the road."
          ]
        },

        { h2: "Perth brick: what it is made of and where it comes from" },
        {
          p: [
            "Useful background if you are matching brick for a repair, because the answer to \"can you match it\" depends entirely on what you have.",
            "Most Perth brick is **fired clay**. Clay is dug, formed — extruded and wire-cut for most modern brick, pressed for others — dried, then fired in a kiln to well over a thousand degrees, which vitrifies it into a hard permanent ceramic. Firing temperature and clay chemistry set the colour, the density and the durability, which is why two bricks that look similar can weather very differently.",
            "Colour comes mostly from iron content and from kiln atmosphere rather than from anything added. Iron-rich clay fired in an oxygen-rich kiln gives the familiar reds and red-browns. Lower iron content gives the creams and buffs. Reduced-oxygen firing gives the manganese-dark and blue-grey ranges. Longer or hotter firing darkens and hardens the result, which is where the ambers, chocolates and near-blacks come from. The Perth palette that follows from this is heavy on red, terracotta, red-brown and brown, with cream, buff and sandy tones common in mid-century housing, and greys, charcoals and whites dominating contemporary work.",
            "There is also a **limestone** tradition in Perth that sits alongside the brick one, because the Swan Coastal Plain has abundant limestone close to the surface. That is a different trade with different contractors, which is why limestone retaining work is not covered here."
          ]
        },

        { h3: "Who makes brick in Western Australia" },
        {
          p: [
            "The WA market is concentrated among a small number of manufacturers, and ownership has shifted recently. **Midland Brick**, long associated with the Middle Swan area on Swan Valley clay reserves, was owned by Boral before being sold to a Perth property consortium and then acquired by the WA-based **Buckeridge Group of Companies (BGC)** in 2021 — a deal the ACCC reviewed and did not oppose. **Austral Bricks**, the brand of ASX-listed **Brickworks Limited**, also manufactures in WA through a separately registered WA entity, alongside its national distribution. **PGH Bricks & Pavers**, owned by **CSR Limited**, manufactures only on the east coast and is sold into WA rather than made here. None of the three has any commercial relationship with this site. Beyond the manufacturers there is a secondary trade in **salvaged and reclaimed brick**, which is where a heritage repair usually has to go.",
            "That matters for one practical reason. Some brick types on older Perth homes are simply not made any more — the clay pit is closed, the kiln is gone, or the size is obsolete, since older brick is frequently a different dimension to the modern standard (metric bricks are specified to AS/NZS 4455.1, at a nominal 230 x 110 x 76mm) and will not course in with it. Matching then means salvage: finding genuine period brick of the right type, colour and size, in enough quantity, in reasonable condition. That is a sourcing problem before it is a bricklaying problem, it can add weeks, and it is a legitimate reason for a repair quote to look expensive relative to the size of the patch.",
            "If you are getting a repair quoted, ask directly whether they are matching new or matching salvaged, and ask to see the brick against your wall in daylight before it goes in. Colour matching under a shed light is how mismatches happen."
          ]
        },
        {
          note: "Ownership: [ACCC public register — BGC's acquisition of Midland Brick](https://www.accc.gov.au/public-registers/mergers-registers/public-informal-merger-reviews-register/bgc-midland-brick), not opposed 17 December 2020, transaction completed 1 April 2021. Austral Bricks' WA manufacturing entity is separately licensed — see [WA EPA, Austral Bricks (WA) Pty Ltd](https://www.epa.wa.gov.au/proponent-name/austral-bricks-wa-pty-ltd). PGH's ownership and east-coast-only manufacturing footprint is stated on [PGH's own About page](https://www.pghbricks.com.au/about-pgh). The modern metric brick dimension is set by AS/NZS 4455.1:2008 (Standards Australia, paywalled — cited by number, not reproduced). What has not been sourced: the actual dimensions of older Perth-made brick, which varied by manufacturer and era before 1970s metrication — no WA-specific figure has been found, so none is stated above." },

        { h2: "Why Perth is a double brick city" },
        {
          p: [
            "Worth understanding because it changes what a repair job is. In most of Australia the standard house is brick veneer: a timber or steel frame carrying the structure, with a single skin of brick hung on the outside as a weather shell. Perth is the outlier. The Perth standard is **double brick** — two full leaves of brickwork with a cavity between them, tied together, where the brickwork is the structure rather than a cladding. It is not a small majority: WA new-dwelling construction was 76% double brick in 2018 (down from 80% in 1997), against a small fraction in every other state.",
            "A 2021 industry cost-benefit study (UDIA WA, with EY) attributes the preference to several compounding factors: the high thermal mass of masonry suiting Perth's hot, dry climate with large day-night temperature swings; good fire resistance and sound insulation; bricks not harbouring vermin, which matters for termite pressure; and an established local supply chain and workforce built around double brick, which keeps it efficient here in a way it would not be in a market without that base. The same study notes real costs to the method too — reduced internal floor space, heavier footing requirements on soft sites, and longer build times — which is why some newer developments are shifting toward framed construction, even though double brick still dominates.",
            "The practical consequence for you is this. On a double brick wall, the brickwork is holding the house up. That is why movement cracking is taken more seriously here than it would be on a veneer wall, where a crack is a cladding problem. It is also why the cavity matters: it is a deliberate drainage and ventilation gap, and if it gets bridged — by mortar dropped during construction, by a later alteration, or by a garden bed built up over the weep holes — moisture crosses from the outer leaf to the inner one and you get damp on the inside of an external wall.",
            "The **weep holes** along the bottom course are not a defect and should not be filled, rendered over or sealed. They are the cavity's drainage. Blocking them is another common well-intentioned way to create a damp problem."
          ]
        },
        {
          note: "Figures and reasons above: [UDIA WA, Modern Methods of Housing Construction – Perth](https://www.udiawa.com.au/wp-content/uploads/2021/01/FINAL-UDIA-Report-Modern-Methods-of-Construction.pdf) (2021), commissioned from EY, citing Australian Construction Insights (2018) and ABS dwelling-completion data. Double brick's share has continued to move since 2018 and this site has not tracked it past that figure." },

        { h2: "What tuckpointing and repointing cost in Perth" },
        {
          p: [
            "Not a price list, and deliberately so. Tuckpointing is priced per metre of joint, repointing per square metre, individual brick replacement per brick, and none of those numbers mean anything without real Perth quotes behind them — logged by suburb, job type and date, not lifted from a competitor site or a national average. Until that exists, a made-up range would cost you more than it would save you: a false anchor is worse than no anchor.",
            "What follows instead is what actually moves the number, so you can read any quote you get and know whether it makes sense."
          ]
        },

        { h3: "What moves the price" },
        {
          p: [
            "**Access and scaffolding.** A single-storey front facade you can reach from a trestle is a different job to a two-storey return elevation. Scaffold is frequently quoted separately and is frequently the largest single line.",
            "**How hard the existing mortar is to remove.** A previous cement repoint is the worst case, because it has to come out without damaging brick that is softer than the mortar holding it.",
            "**Brick matching, for replacement work.** Some Perth brick types are no longer made, and matching means salvage. That is a sourcing problem before it is a bricklaying problem.",
            "**Joint length versus wall area.** Tuckpointing is priced by joint metre. A wall with smaller bricks has more joint per square metre and therefore costs more to tuckpoint at the same area."
          ]
        },
        {
          image: {
            src: "images/damaged-brick-pier.jpg",
            alt: "A brick pier with damaged and missing brick faces part way up, of the kind that needs individual brick replacement",
            width: 1000,
            height: 693
          }
        },

        { h3: "What is usually excluded" },
        {
          ul: [
            "Scaffolding",
            "Structural investigation where movement is suspected",
            "Painting or sealing afterwards",
            "Making good render or paint disturbed at the edges of the work",
            "Salvage sourcing for brick matching"
          ]
        },

        { h3: "Comparing quotes" },
        { p: "Three quotes only compare if they describe the same job, and on repointing they usually do not." },
        {
          ol: [
            "**Rake-out depth.** Ask for it in millimetres. Skim repointing over the top looks fine for about two years.",
            "**Mortar mix, and the reasoning behind it.** On an older wall this is the difference between maintenance and damage.",
            "**Whether scaffold is in or out.**",
            "**Area or joint length measured, not estimated.** Two quotes based on different measurements are not comparable at all.",
            "Only then, the totals."
          ]
        },

        { h2: "Perth's older brickwork" },
        { p: "Perth has a genuine stock of federation-era and inter-war brick housing, and that housing is now at the age where original lime mortar is at or past the end of its life. That is why tuckpointing and repointing come up here more than the housing age alone would suggest." },
        {
          p: [
            "**Guildford.** One of the three original 1829 Swan River Colony settlements, alongside Perth and Fremantle, and it has the brick to show for it. The **Rose & Crown Hotel** on Swan Street, WA's oldest continuously operating hotel, is built of handmade brick laid in Flemish bond dating to 1841. The **Guildford Hotel**, a two-storey Federation Free Classical building from 1885-86, was largely destroyed by fire in 2008 and rebuilt behind its original facade — restoration work turned up handmade brick from the local convict depot under the plasterwork. James Street and Market Street carry the rest of the federation-era streetscape.",
            "**Mount Lawley.** Federation through to the inter-war building boom of the 1920s and 30s, when Mount Lawley, Inglewood and Maylands together added thousands of houses in Californian Bungalow and Spanish Mission styles. Beaufort Street is the clearest expression of the suburb's character now: heritage shopfronts and houses standing alongside a thoroughly modern cafe and bar strip, which is why the City of Vincent runs both a Heritage Area and a separate Character Retention Area system rather than one blanket rule.",
            "**Fremantle.** Around 2,500 places on the City's own Heritage List, plus the West End separately on the state heritage register. It is the largest concentration of intact historic building stock this site speaks to — a whole port city's worth rather than a single heritage street or estate."
          ]
        },
        {
          note: "[City of Fremantle, Heritage listings and areas](https://www.fremantle.wa.gov.au/planning-and-building/heritage/heritage-listings-and-areas/); [Rose & Crown Hotel, State Heritage Office record](https://inherit.dplh.wa.gov.au/public/inventory/printsinglerecord/5e4e60fc-2a51-415f-bb46-6b604ff0a27d); [Guildford Hotel, State Heritage Office record](https://inherit.dplh.wa.gov.au/public/inventory/printsinglerecord/dc486cf3-3351-4255-bb8e-bec697838dcf); [City of Vincent, Character Retention Areas and Heritage](https://www.vincent.wa.gov.au/residents/research/character-retention-areas.aspx) (already cited above for its councils). Guildford and Mount Lawley are places Brad knows firsthand; Fremantle's detail is from the heritage record rather than a personal account." },
        { p: "Two things worth knowing if your house is in a heritage or character area:" },
        {
          ul: [
            "Some Perth local governments have heritage listings or character area policies affecting what can be done to a street-facing facade, including repointing and rendering",
            "Heritage-appropriate work costs more and takes longer, and that is the point rather than a problem"
          ]
        },
        {
          p: [
            "Three examples of what that actually looks like. The **City of Fremantle** maintains a Heritage List and named Heritage Areas — including the West End and Hilton Garden Suburb — where development or repair work on a listed place generally needs planning approval so heritage staff can assess the impact before work starts. The **City of Vincent** runs a separate Heritage Area and Character Retention Area system across Mount Lawley and Highgate, with individual streets designated one or the other — Harley Street in Highgate was the first Heritage Area, St Albans Avenue the first Character Retention Area. The **City of Subiaco** has several named Heritage Areas of its own, including Hamersley Road, Kings Road and the Rokeby Road/Hay Street precinct, and is currently reviewing its wider Local Heritage Survey precinct by precinct.",
            "If your address falls in any of these, or in another council's heritage or character area, check with that council's planning department before you commit to a repointing, rendering or repair scope — the work itself is not necessarily different, but the approval pathway is."
          ]
        },
        {
          note: "[City of Fremantle, Heritage listings and areas](https://www.fremantle.wa.gov.au/planning-and-building/heritage/heritage-listings-and-areas/); [City of Vincent, Character Retention Areas and Heritage](https://www.vincent.wa.gov.au/residents/research/character-retention-areas.aspx); City of Subiaco heritage areas confirmed via its [Heritage List consultation FAQs](https://www.haveyoursay.subiaco.wa.gov.au/heritage-list/widgets/454038/faqs) — a live policy-document link for Subiaco's heritage areas could not be found (site links returned 404 at the time of checking); confirm current policy with the City directly. This is three councils, not a survey of all thirty — other Perth councils also have heritage provisions not covered here." },

        { h2: "What to ask before you accept a quote" },
        {
          ol: [
            "**What mortar mix are you using, and why that one?** The answer should reference the existing mortar and the age of the building.",
            "**Have you done tuckpointing before, and can I go and look at it?** If the job is tuckpointing. Most bricklayers have not, and the ones who have will be glad to send you to a job.",
            "**Do you think this is movement?** Ask directly, and ask what they are basing it on.",
            "**Are you raking out to a proper depth or skimming over the top?** Ask for the depth in millimetres.",
            "**Is scaffolding in the price?**",
            "**Can you match the brick?** For replacement work."
          ]
        },

        { h2: "Frequently asked questions" },
        {
          faqs: [
            {
              q: "Is tuckpointing the same as repointing?",
              a: "No. Repointing replaces failed mortar and is maintenance. Tuckpointing is a decorative finish applied over the joint, priced by joint length rather than wall area, and it is a specialist skill that most bricklayers do not have."
            },
            {
              q: "How much does tuckpointing cost in Perth?",
              a: "It is priced by metre of joint, and joint length, access and scaffold requirements move it more than the size of the house does. We are not publishing a range until we have one we can stand behind — see the costs section above."
            },
            {
              q: "My wall has a crack. Is it serious?",
              a: "Use the diagnosis section above as a first pass. Cracks running through bricks, widening toward the top, or changing recently are the ones to get looked at by an engineer rather than a bricklayer."
            },
            {
              q: "Can I just render over it?",
              a: "Rendering over failed mortar or a moving wall hides the problem rather than fixing it, and render shows movement cracking readily. Deal with the cause first."
            },
            {
              q: "My house was tuckpointed and someone has repointed over it. Can it be fixed?",
              a: "It can be reinstated, but it is restoration work rather than maintenance and it is priced accordingly."
            },
            {
              q: "What is the white powder on my bricks?",
              a: "Efflorescence — salts carried to the surface by moisture and left behind when the water evaporates. On new brickwork it is normal and weathers off. On established brickwork it means water is repeatedly getting into the wall, and the thing to find is the water source rather than to treat the powder. Do not seal or paint over it."
            },
            {
              q: "Why are the faces coming off my bricks?",
              a: "Usually salt attack. Salts crystallise inside the brick just under the surface and the pressure eventually blows the face off. In Perth the salt commonly comes from bore water reticulation spraying the wall, from coastal exposure, or from groundwater rising through the base. A hard cement repoint makes it worse by forcing moisture to leave through the brick instead of the joint."
            },
            {
              q: "Can I use cement mortar on an old brick wall?",
              a: "You should not. Cement mortar is harder and less permeable than old brick, so the wall's movement and moisture are both forced through the brick face rather than through the joint. The damage takes a few years to appear and is not reversible. The mortar should always be softer than the brick."
            },
            {
              q: "How do I know if my house is tuckpointed or just repointed?",
              a: "Look closely at a joint on the front facade in good light. Tuckpointing has a fine raised ribbon of contrasting colour, usually white or near-white, sitting on top of a joint coloured to match the brick, and the ribbon is a consistent width. Ordinary pointing is a single mortar colour, tooled to a profile, with no ribbon."
            },
            {
              q: "What are weep holes and can I fill them in?",
              a: "The open gaps in the mortar along the bottom course of an external wall. They drain and ventilate the cavity in a double brick wall, which is most of Perth. Do not fill, render or seal them, and do not let a garden bed or paving cover them — blocking them is a common cause of internal damp on an external wall."
            },
            {
              q: "Can bricks be matched for a repair?",
              a: "Sometimes with new brick, often only with salvaged brick. Some older Perth brick is no longer manufactured, and older brick is frequently a different size to the current standard, so it will not course in. Matching then means sourcing genuine period brick in the right colour, size and condition, which takes time and is a legitimate reason for a small repair to be quoted higher than expected."
            },
            {
              q: "How long should repointing last?",
              a: "There is no fixed number, and heritage conservation guidance from [the SPAB](https://www.spab.org.uk/advice/repointing), the UK's Society for the Protection of Ancient Buildings, deliberately avoids giving one — good repointing is judged on condition, not a calendar. The trigger for redoing it is mortar that has weathered back to a depth equal to the joint width, or gone loose, not a fixed age. What actually decides how long a repoint lasts is exposure — a sheltered wall outlasts one facing driving rain or salt spray by a wide margin — and workmanship: correct mortar mix, a proper rake-out depth and real curing are what get you decades rather than a few years. Skimped work on any of those three is the usual reason a repoint fails early."
            }
          ]
        },
        { marker: "NEEDS INPUT: the tuckpointing cost FAQ answer above (\"How much does tuckpointing cost in Perth?\") is still an honest non-answer — it will become a real range once real Perth quotes have been collected for the pricing table further up this page. Do not guess a figure here ahead of that." },

        {
          form: {
            headline: "Tell us what your wall is doing",
            preset: "Repointing or brick repairs",
            placeholders: {
              size: "e.g. front facade of a 1920s home, mortar crumbling, about 20 square metres"
            },
            extraFields: [
              {
                name: "buildingAge",
                label: "Roughly how old is the building?",
                type: "select",
                required: false,
                after: "size",
                options: ["Pre-1940", "1940-1980", "Post-1980", "Not sure"]
              }
            ]
          }
        },

        { h2: "Related" },
        {
          ul: [
            "[Brick and rendered fences in Perth](brick-fences-boundary-walls.html)",
            "[About Perth Brickwork](about.html)"
          ]
        },
        {
          note: "Decision (28 July 2026): staying with the illustrative images on this page for now rather than sourcing real photographs. They carry no captions and make no claim of authorship, consistent with the imagery policy above. Real shots (tuckpointed facade, failed mortar joint, spalled brick face) remain the cheapest available credibility upgrade if this is revisited." }
      ]
    },

    {
      page: "brick-fences-boundary-walls.html",
      name: "Brick and rendered fences",
      shortName: "Brick and rendered fences",
      shortDescription: "Front fences, boundary walls, piers, gate openings and letterboxes — plus the front fence height limit for your council.",
      serviceType: "Brick fence construction",
      metaTitle: "Brick Fence Cost Perth | Council Rules and Quotes",
      metaDescription: "What brick and rendered fences cost in Perth, the front fence height limits by council, and what to check on a quote. Piers, gates, footings and approval.",
      headline: "Brick and rendered fences in Perth",
      subheadline: "What they cost, what your council allows, and what to check on a quote.",
      ctaText: "Tell us about your fence",
      image: {
        src: "images/rendered-pier-on-brick-base.jpg",
        alt: "A rendered and capped fence pier sitting on a face brick base, with a low brick fence running back along the frontage",
        width: 1000,
        height: 610
      },

      blocks: [
        { credit: "Researched and written by Brad, Perth Brickwork, previously two years in the construction materials industry. Council fence provisions obtained directly from each local government. Last reviewed 28 July 2026." },

        {
          lead: [
            "A brick front fence is one of the few jobs where the quote should land close to the final price. The scope is visible, the length is measurable, and there is rarely anything hidden underground the way there is with retaining work.",
            "Most people are still surprised by the number, because a fence is not just the visible brickwork. There is a footing under it, piers at intervals through it, and if the ground falls away along your frontage, part of your fence is doing retaining work whether or not anyone called it a retaining wall."
          ]
        },

        { h2: "Is any of it retaining?" },
        {
          p: [
            "Settle this first, because it changes the build, the price and sometimes the approval position.",
            "**Level ground on both sides** and the wall holds up itself. It needs a footing sized for its own weight and for wind load, and no drainage behind it, because there is nothing behind it.",
            "**Higher ground on one side** and part of that wall is retaining soil. Heavier footing, drainage behind it, possibly engineering. Soil is a permanent load and it gets heavier when wet.",
            "Plenty of Perth blocks fall away toward the verge just enough for this to apply without the owner having thought of it that way. If you are not sure, take a photo from the side so the level difference is visible and mention it in the form.",
            "Where a fence is substantially retaining and built from limestone, which is the Perth default for retaining, that is a different trade with different contractors. This site covers brick and rendered fences only."
          ]
        },
        {
          image: {
            src: "images/fence-retaining-vs-freestanding-diagram.svg",
            alt: "Two labelled cross-section diagrams side by side. On the left, a brick fence on ground that is level on both sides, with a footing below ground and arrows showing wind pushing on the wall. On the right, a fence where the ground on the block side is higher than the verge, with arrows showing soil pressure increasing with depth against the buried part of the wall, a wider and deeper footing, gravel drainage behind the wall and a weep hole through it.",
            width: 1000,
            height: 580
          }
        },

        { h2: "What a brick fence costs in Perth" },
        {
          p: [
            "Not a price list, and deliberately so. A low face brick fence, a rendered fence with piers, a higher boundary wall, a standalone letterbox and a pair of vehicle gate piers are all priced completely differently, and none of those figures mean anything without real Perth quotes behind them — logged by suburb, length, height, material and pier spacing, not lifted from a competitor site or a national average. Until that exists, a made-up range would cost you more than it would save you: a false anchor is worse than no anchor.",
            "What follows instead is what actually drives the number, so you can read any quote you get and know whether it makes sense."
          ]
        },

        { h2: "What drives the price" },

        { h3: "1. Length and height" },
        { p: "They do not scale the same way. Length adds material and labour at a steady rate. Height adds disproportionately, because above a certain point the footing and pier spacing have to change, and above the local height limit you are into approval." },

        { h3: "2. Piers" },
        { p: "Piers are the thicker columns at intervals, and at gates and corners. They carry the lateral load, and spacing is a structural decision rather than a styling one. A quote noticeably cheaper than the others is sometimes a quote with fewer piers in it. Compare pier spacing before comparing totals." },
        {
          image: {
            src: "images/face-brick-fence-pier-capping.jpg",
            alt: "A face brick front fence meeting a rendered pier with a moulded cap on top",
            width: 1000,
            height: 607
          }
        },

        { h3: "3. The footing" },
        {
          p: [
            "Under every fence is a footing, and on anything above a low garden wall it is a meaningful share of the cost. It is also the part you cannot inspect once the job is done.",
            "Two things worth understanding about the concrete in it. Its strength comes from the mix design, and water added on site to make it easier to place reduces that strength. That is a normal question to ask and not a difficult one to answer. And a footing is sized to the wall, the wind load and the ground it sits on — governed by **AS 3700** (masonry structures, which covers freestanding fences and walls) and **AS 2870** (residential footings, which classifies the site's soil reactivity) — not to a rule of thumb, which is why a quote given without anyone looking at the ground is a guess."
          ]
        },
        {
          image: {
            src: "images/brick-fence-under-construction.jpg",
            alt: "A brick front fence part way through construction, with the concrete footing visible along its base and a pallet of bricks alongside",
            width: 1000,
            height: 617
          }
        },
        {
          note: "The governing standards are named above (AS 3700, AS 2870), both Standards Australia documents, paywalled and cited by number rather than reproduced. What is deliberately not stated is a concrete strength grade (e.g. N20, N25, N32): the figure actually specified depends on the wall's height, wind exposure and the soil class at the specific site, which is an engineering or bricklayer judgement call, not a fixed number. Public concrete-supplier guides give rule-of-thumb figures, but none of them meet this site's bar for a WA-specific, project-independent fence-footing spec — that needs a WA structural engineer or the eventual renter's own practice, not a blog." },

        { h3: "4. Materials and finish" },
        { p: "Face brick or rendered brick. Rendered is two trades rather than one, which is most of why it costs more up front." },

        { h3: "5. Gates and openings" },
        { p: "Every opening needs piers either side, and a lintel or arch over it if covered. Vehicle gate openings are the expensive ones, because the piers carry gate loads and often the motor and hardware too. Those costs have nothing to do with brickwork and are frequently quoted by a different trade." },
        { marker: "NEEDS INPUT: a real photograph of a vehicle gate opening with piers, for scale." },

        { h3: "6. Demolition and disposal" },
        { p: "Removing an existing fence is a separate line. So is getting the rubble and spoil off site. Ask whether both are in the quote, separately." },

        { h2: "What is under the fence: footings, concrete and Perth soil" },
        {
          p: [
            "The footing is the part of a fence you pay real money for and never see again. It is also the part that decides whether the wall is still straight in twenty years, so it is worth understanding what is actually being bought.",
            "A freestanding wall has a problem that a house wall does not. A house wall is braced — it is tied into floors, roof and return walls in both directions. A fence stands on its own and is loaded sideways by wind. Structurally it behaves as a **cantilever**: a vertical beam fixed at the bottom and free at the top, resisting a horizontal push. Everything about how a fence is built follows from that."
          ]
        },

        { h3: "Why the concrete mix matters" },
        {
          p: [
            "Concrete is cement, coarse aggregate, sand, and water. The cement and water react chemically — **hydration** — and that reaction is what produces strength. The aggregate is inert filler that gives the material its bulk and stiffness, and it is the cement paste binding it that does the work.",
            "The single most important number in concrete is the **water-to-cement ratio**. Enough water is needed for hydration, but any water beyond that leaves behind voids and capillary channels as it eventually evaporates, and those voids are where strength is lost and where moisture and salt later get in. Less water means stronger, denser, more durable concrete. More water means a weaker, more porous one.",
            "Here is why that is not academic. Wet concrete is easier to place and level, so there is a standing temptation to add water on site. A load delivered at a specified strength and then watered down in the chute can lose a meaningful share of that strength before it goes anywhere near the ground, and nothing about the finished job looks any different. Asking whether water is added on site is a normal, reasonable question and a competent contractor will answer it without taking offence.",
            "**Curing is not drying.** Hydration needs moisture to continue, and it continues for weeks. Concrete that dries out too fast in the sun stops gaining strength and cracks at the surface. On a hot, dry, windy Perth day the difference between concrete that is protected for the first few days and concrete that is not is a real difference in the finished product."
          ]
        },
        {
          p: [
            "Two other things belong in a footing conversation.",
            "**Reinforcement.** Concrete is strong in compression and weak in tension, so steel bar is placed where the tension is. In a fence footing that is usually a light cage or a run of bar, with **starter bars** projecting up into the piers to tie the wall to the footing. Without that connection you have a wall sitting on a footing rather than a wall fixed to one, and the cantilever does not work.",
            "**Cover.** Steel must sit with enough concrete around it, because concrete's alkalinity is what protects the steel from corroding. Bar laid too close to the surface, or dropped straight onto the ground, rusts. Rust occupies more volume than the steel it came from, and the expansion cracks the concrete off in sheets. On a coastal Perth site with salt in the air and salt in the groundwater, cover is not a detail."
          ]
        },

        { h3: "The ground you are building on" },
        {
          p: [
            "Perth is unusually varied for a single metropolitan area, and where your block sits changes the footing.",
            "Most of the metro area sits on the **Swan Coastal Plain**, which is broadly sand — the dune systems running roughly parallel to the coast, from the young coastal dunes through the limestone-based sands of the western suburbs to the older, leached grey sands further inland. Sand has a genuine advantage for building: it does not swell and shrink with moisture the way clay does, so it is dimensionally stable through the seasons. That is a large part of why Perth got comfortable building heavy double brick directly on the ground, and why footing movement is a smaller problem here than in cities founded on reactive clay.",
            "Sand has its own failure modes. Loose, uncompacted sand has low bearing capacity until it is compacted, it can be scoured or washed out where drainage concentrates, and a trench cut in dry sand does not hold its shape, which affects how a footing gets formed and how much concrete actually ends up in the ground.",
            "The eastern side of the plain and the **Swan Valley** carry more clay, and the **Darling Scarp and the foothills** — Kalamunda, Mundaring, parts of Swan and Armadale — bring in clay, gravel and laterite, plus slope. **Reactive clay** is the one that matters: it expands when wet and contracts when dry, so a footing sitting in it moves seasonally. That movement is the cause of a large share of the diagonal stepped cracking people go looking for answers about. A hills block and a coastal block are genuinely different engineering problems, and a fence contractor who quotes both the same way is not thinking about it.",
            "Slope brings the retaining question back. On a falling frontage, part of the wall is holding soil whether or not anyone called it a retaining wall, and soil is a permanent load that gets substantially heavier when saturated."
          ]
        },
        {
          note: "Geology: the Quindalup, Spearwood and Bassendean dune systems (coast to inland) and the clay-rich Guildford Formation to the east are described in [Geoscience Australia, Natural Hazard Risk in Perth, WA — Appendix D: Perth Basin Geology Review and Site Class Assessment](http://www.ga.gov.au/webtemp/image_cache/GA6548.pdf) (McPherson & Jones). Site classification: the stable-versus-reactive framework referenced above is AS 2870 (Residential slabs and footings), which classifies sites from Class A (most stable, typically sand) through to Class E and P (extremely reactive/problem sites), a Standards Australia document cited by number rather than reproduced. No suburb above is claimed to sit in a specific AS 2870 class — only the general regional pattern is stated, consistent with the geology source." },

        { h2: "Wind load: why height costs more than length" },
        {
          p: [
            "This is the least intuitive thing about fence pricing and it explains most of the surprises.",
            "Doubling the length of a fence roughly doubles the material and the labour. It is close to a straight line. Doubling the **height** does not work like that at all, and the reason is the cantilever.",
            "Wind pushes on the face of the wall. A taller wall presents more area, so it catches more wind — that alone is proportional to height. But the force also acts further up, and what the footing has to resist is the **overturning moment**, which is the force multiplied by how high up it acts. Both terms grow with height at once, so the load at the base climbs much faster than the height does. On top of that, a taller wall is more slender, which brings in buckling and its own set of limits.",
            "The practical result: past a certain point the wall needs a bigger footing, more steel, closer piers, or thicker construction — sometimes all four, and sometimes an engineer. A 1.8 metre wall is not a 1.2 metre wall with a bit more brick on top. It is a different structure, and a quote that prices it as though it were is a quote that has not done the sums.",
            "This is also why **pier spacing is not decoration**. Piers are what carry the lateral load back down into the footing, and widening the spacing is the easiest invisible saving available to someone pricing keenly. Two quotes with different pier spacing are quotes for two different walls, and the cheaper one is the weaker one. Compare spacing before you compare totals — it is the most useful single question on the whole page.",
            "Perth's coastal exposure is a factor here too. A frontage a few streets from the ocean sees a wind environment that an inland sheltered lot does not, and it is a legitimate reason for two apparently identical fences to be engineered differently."
          ]
        },
        {
          note: "The cantilever and overturning-moment physics above is standard engineering. Wind loading on structures in Australia is governed by **AS/NZS 1170.2** (Structural design actions — Wind actions), and design of the masonry itself by **AS 3700** (already cited for footings above) — both Standards Australia documents, paywalled and cited by number. Perth sits in AS/NZS 1170.2's non-cyclonic wind region, well south of the cyclone-prone regions covering WA's northern and northwestern coast. No specific wind speed, height threshold or pier-spacing figure is published here: wind region is broadly constant across the metro area, but **terrain category** — how sheltered or exposed a given frontage is — genuinely varies street to street, so a single citywide number would misstate it. That figure is a site-specific engineering calculation, not something this page can responsibly generalise." },

        { h2: "What is usually excluded from a fence quote" },
        {
          ul: [
            "Demolition of the existing fence",
            "Spoil and rubble removal",
            "Gates, motors and hardware",
            "Render and paint where a separate trade does it",
            "Engineering, if part of the wall is retaining",
            "Council approval fees and lodgement",
            "Reinstating lawn, verge and garden afterwards"
          ]
        },

        { h2: "How to compare three quotes properly" },
        { p: "Three quotes only compare if they describe the same wall, and most of the time they do not." },
        {
          ol: [
            "Line up the physical spec first: height, length, footing depth and width, pier spacing",
            "Check what each has excluded, using the list above",
            "Only then compare the totals",
            "Ask the cheapest quote what it has assumed about footings and pier spacing, because that is usually where the difference is"
          ]
        },
        { p: "A quote thirty per cent below the others is rarely a bargain. It is usually a different wall." },

        { h2: "Do you need approval for a front fence in Perth?" },
        { p: "Usually above a certain height, and the rules are set by your local council rather than by one statewide standard. Perth metro covers roughly thirty local governments and their fence provisions are not identical." },

        { h3: "How this section was put together" },
        {
          p: [
            "The table below was built by contacting each local government and reading published local planning policy. Every row records the date it was checked, and rows are updated when a council changes its position. Where a council does not publish a figure and would not state one, the row says so rather than carrying a guess.",
            "This is not legal advice. Your council's answer is the authoritative one. Confirm before accepting a quote."
          ]
        },

        { h3: "What is generally consistent" },
        {
          ul: [
            "There is a height above which a front fence needs planning approval",
            "There are sightline or truncation requirements near driveways and at corner lots, so drivers can see pedestrians when exiting",
            "Solid fencing above a certain height on a street frontage is often restricted, with visually permeable sections required above that height",
            "A wall on a shared boundary brings in the Dividing Fences Act 1961 (WA), which is a separate matter from council approval"
          ]
        },

        { h3: "Perth councils: front fence provisions" },
        {
          /* `cards`, not `table`: the cells here are long prose, and six columns
             of paragraphs can only side-scroll. Same data shape as a table —
             first column becomes the card heading. */
          cards: {
            columns: ["Local Government", "Front fence height limit", "Permeability requirement", "Truncation / sightline", "Council page", "Last checked"],
            rows: [
              ["City of Bayswater", "Generally front fences are permitted to be solid up to a maximum height of 1.2m when measured from the street level", "approximately 50% visually permeable up to a maximum height of 1.8m when measured from the street level", "Fences adjacent to vehicle access points (where driveways meet the street) or intersecting street corners must maintain clear driver visibility lines", "https://www.bayswater.wa.gov.au/home-and-property/renovating-your-home-or-property/fences-and-retaining-walls", "28/07/2026"],
              ["City of Belmont", "1800mm in height", "permeable above 1200mm in height", "not exceed 750mm in height where located within 1500mm of where a driveway intersects a street frontage boundary", "https://www.belmont.wa.gov.au/build/demolishing-and-building/approval-for-buildings-and-structures/i-want-to-build/front-fence", "28/07/2026"],
              ["City of Canning", "Fences within the primary street setback area must not exceed 1.2 meters in height", "Solid lower sections are generally restricted to a maximum height of 1.2 meters.  Any height extending above 1.2 meters (up to 1.8 meters) must consist of visually permeable (see-through) infill panels (such as vertical or horizontal slats with sufficient gaps) to maintain streetscape visibility and connectivity.", "Walls, fences, and structures must be truncated or reduced to a maximum height of 0.75m (750mm) within a 1.5m splay/truncation where a driveway meets a public street, or where two streets/rights-of-way intersect on a corner lot.", "https://www.parliament.wa.gov.au/publications/tabledpapers.nsf/displaypaper/4110516cb083ce9958bdd4bf4825874a0004a1a1/$file/tp-516.pdf", "28/07/2026"],
              ["City of Fremantle", "Fences within the primary street setback area can go up to a maximum height of 1.8 meters, with decorative piers allowed up to 2.0 meters", "Above the solid lower threshold (1.2 meters standard, or lower for special heritage controls), the fence must be visually permeable (at least 50% evenly distributed open-air construction) up to the 1.8-meter maximum limit.", "Fences adjacent to a driveway, vehicle access point, or street corner must either provide a 1.5-meter by 1.5-meter visual truncation (cut-back corner) or be reduced down to a maximum height of 0.75 meters (750mm) above natural ground level. This ensures clear sightlines for drivers crossing the property boundary. [1, 2, 3]", "https://www.fremantle.wa.gov.au/wp-content/uploads/2025/09/Local-Planning-Policy-2.8-Fences.pdf", "28/07/2026"],
              ["City of Melville", "Any fence taller than 1.8 meters total, or a masonry/brick front fence higher than 0.75 meters, requires formal local government or building approval", "Any portion of the fence sitting between 1.2 meters and 1.8 meters high must be visually permeable", "Fences must drop to a maximum height of 0.75 meters when close to traffic. The low 0.75m height restriction applies within 1.5 meters of where a driveway meets the property boundary/street.", "https://www.melvillecity.com.au/planning-and-building/building-or-renovating/building-a-fence-or-retaining-wall", "28/07/2026"],
              ["City of Nedlands", "Maximum of 1.2m above natural ground level without requiring approval. ", "Up to 1.8m is permitted, provided any height above 1.2m is visually permeable. Any solid wall/fence exceeding 1.2m in the primary street setback, or higher than 1.8m outside the front setback area.", "A 1.5m x 1.5m physical corner truncation (or angle cut-back) is required where driveways meet footpaths and at street intersection corner lots. ", "https://www.legislation.wa.gov.au/legislation/prod/gazettestore.nsf/FileURL/gg2008_025.pdf/$FILE/Gg2008_025.pdf?OpenElement", "28/07/2026"],
              ["City of Perth", "Maximum 1.2 meters solid construction above the adjacent pavement or natural ground level without requiring special planning/building approval. [1, 2, 3]", "Any section of a front fence built higher than 1.2 meters must be visually permeable. The upper infill panels above the solid base must achieve a minimum of 75% to 80% visual transparency/openness depending on the specific precinct design guidelines. Solid blank front walls are generally not supported", "Where a driveway/vehicle access point meets a public street, fences must be truncated or reduced to a maximum height of 0.75 meters within a 1.5-meter splay/clearance area from the edge of the driveway", "https://perth.wa.gov.au/-/media/Project/COP/COP/COP/Documents-and-Forms/Develop/Documents/Planning-Framework/Subiaco-Planning-Policies/2-5-Perimeter-Fencing-Policy.pdf", "28/07/2026"],
              ["City of South Perth", "Solid front fences, walls, or pillar piers up to 1.2 meters high from natural ground/verge level", "Below 1.2 meters: The fence can be 100% solid (zero permeability). Above 1.2 meters to 1.8 meters: The portion above 1.2 meters must be visually permeable (typically meaning continuous horizontal or vertical gaps satisfying R-Code standards, allowing a clear line of sight through the upper section).", "Driveways: Fences, walls, and landscaping must be reduced to a maximum height of 0.75 meters (with high visual permeability, usually 80% or greater) within a 1.5-meter splay/truncation where a driveway meets a public street", "https://southperth.wa.gov.au/development/planning/local-planning-policies (Section 1 - Residential Development)", "28/07/2026"],
              ["City of Stirling", "Solid parts of a front fence or wall can be built up to a maximum of 1.2 meters high from the natural ground level", "The total fence height can reach up to 1.8 meters without planning approval.  Anything built above 1.2 meters (up to the 1.8-meter maximum) must be visually permeable (gaps allowing a clear line of sight through the fence).", "Driveways: Walls and fences adjacent to a driveway or vehicle crossover must protect driver and pedestrian visibility. Typically, fences near a driveway/street intersection must be truncated or kept low (often restricted to a maximum of 0.75 meters height) within a specific sightline triangle (such as a 1.5m setback area) unless they are completely visually permeable", "https://www.stirling.wa.gov.au/city-and-council/document-and-publications/street-walls-and-fences-information", "28/07/2026"],
              ["City of Subiaco", "Maximum height of 0.9m solid from natural ground level (NGL). Any front fence, wall, or solid portion exceeding 0.9m (or 1.2m depending on specific local precinct/heritage guidelines) requires development/planning approval from the City of Subiaco.", "Any part of the fence higher than 0.9m from NGL must be visually permeable to allow passive surveillance and street views.", "Fences must be truncated or reduced to 0.75m above NGL within 1.5m of where a driveway meets a public street (or right-of-way).  Fences must be truncated or reduced to a maximum height of 0.75m above NGL within a 3m radius where two public streets intersect.", "https://www.subiaco.wa.gov.au/media/cakdhcyb/1-1-residential-development-single-houses-and-grouped-dwellings.pdf", "28/07/2026"],
              ["City of Vincent", "Any solid wall higher than 1.2 meters, or any overall fence structure exceeding 1.8 meters", "The fence must be visually permeable above 1.2m.  Minimum of 50% continuous horizontal or vertical effective surface gaps (with minimum gap sizes generally at 40mm–50mm).", "Where a fence is higher than 0.75 meters, a 1.5m x 1.5m visual truncation (cut-back) is required on each side of the driveway crossover.", "https://www.vincent.wa.gov.au/Profiles/vincent/Assets/ClientData/Planning_Information_Sheets/Planning_Information_Sheet_-_Front_Fence_-__August_2022_.pdf", "28/07/2026"],
              ["Shire of Peppermint Grove", "Approval from the local government is required for front fences or pillars exceeding the solid 900mm limit, or if requesting solid alternatives up to 1.8m–2.1m on merit.", "Any part of the front boundary fence higher than 900mm must use an open-aspect design (such as open timber, wrought iron, steel, or aluminum palings).", "Walls and fences adjacent to vehicle driveways/crossovers must maintain clear visibility triangles (typically restricting solid elements higher than 750mm–900mm within safety splay zones) to protect pedestrians and oncoming traffic.", "https://www.peppermintgrove.wa.gov.au/development/building/fencing.aspx", "28/07/2026"],
              ["Town of Bassendean", "Front fences up to 1.8 meters measured from natural ground level (or the base of a supporting retaining wall) can meet 'deemed-to-comply' criteria, provided they follow permeability rules", "The fence must be visually permeable above 1.2 meters from natural ground level when viewed from the street side. The lower 1.2 meters can be solid (such as low brick, render, or solid panels), but anything stretching higher up to the 1.8m maximum must let people see through.", "Any fence or wall must not exceed 750mm in height if it sits within a 1.5-meter truncation/distance of a driveway intersecting a public street, right-of-way, or communal street, a right-of-way intersecting a public street or two intersecting public streets (corner lots)", "https://www.bassendean.wa.gov.au/Profiles/bassendean/Assets/ClientData/Document-Centre/Building_Services/Information_Sheets/Building_or_Altering_a_Fence__Building_Permit_.pdf", "28/07/2026"],
              ["Town of Cambridge", "Planning or building approval is needed for front fences or portions exceeding 0.75m solid or going up to 1.8–2.0 meters. Piers can reach up to 1.8 meters with maximum dimensions of 350mm x 350mm", "Any portion of a fence or gate higher than 0.75 meters must be visually transparent or open style.", "A sight line truncation of 1.5m x 1.5m is required where a normal driveway intersects the street boundary", "https://www.cambridge.wa.gov.au/files/assets/public/documents-and-files/development-amp-sustainability/planning/local-planning-policies/local-planning-policy-3.1-streetscape-amended-august-2021.pdf", "28/07/2026"],
              ["Town of Claremont", "Free-standing front fences exceeding 1.2 metres in height within the primary street setback area.", "For front fences higher than 1.2 metres, more than 50% of the fence must be visually permeable (such as open picket or wrought iron style) to allow direct line-of-sight views between the street and the dwelling", "Fences flanking a driveway intersecting a public street must reduce to a maximum height of 750 millimetres within close proximity of the-property line/crossover interface to preserve safety sightlines for pedestrians and vehicles", "https://www.claremont.wa.gov.au/media/paxn4lch/local-planning-policy-117-front-fences-v8-2.pdf", "28/07/2026"],
              ["Town of Cottesloe", "Any freestanding front fence or pillar exceeding 1.2 meters in height (or above 900mm for specific solid configurations requiring an open aspect).", "Any portion of a front fence extending above the solid height limit (1.2 meters, or 900mm where specified) must be visually permeable", "Fences and walls adjacent to vehicle driveways/crossovers must be reduced in height (typically restricted to a maximum of 750mm) within a visual truncation triangle where the driveway meets the property boundary", "https://www.cottesloe.wa.gov.au/develop-build/planning/planning-faq.aspx", "28/07/2026"],
              ["Town of East Fremantle", "Development approval from the Town is required if any section exceeds 1.8m in total height, if solid portions exceed 1.2m, or if the property sits in a designated heritage area. A building permit is also needed if masonry elements exceed 750mm", "Any part of the fence higher than 1.2m up to the 1.8m maximum must be at least 60% visually permeable.", "Fences adjacent to vehicle access points (where a driveway meets the street) or where two streets intersect (corner lots) must provide safety sightlines", "https://www.eastfremantle.wa.gov.au/Profiles/eastfremantle/Assets/ClientData/Fact_Sheet_-_Front_Fence__.pdf", "28/07/2026"],
              ["Town of Mosman Park", "No local planning policy for front fences was found among the Town's published policies, so the state default applies: solid construction up to 1.2m above natural ground level.", "Above the 1.2m solid section, the fence must be visually permeable up to a maximum height of 1.8m (WA-wide default under the Residential Design Codes, not a Mosman Park-specific rule).", "Not specified in a Mosman Park document found — check with the Town directly before relying on a figure for a driveway or corner-lot fence.", "https://www.dplh.wa.gov.au/rcodes (state default) — no Mosman Park-specific fencing policy found on https://www.mosmanpark.wa.gov.au/build/planning-information/local-planning-policies/", "28/07/2026"],
              ["Town of Victoria Park", "Solid or opaque front fences and masonry walls within the primary street setback area are restricted to a maximum height of 1200mm", "To build higher than 1200mm (commonly up to 1800mm or 2000mm total height), the portion above a solid base (frequently capped at 600mm to 1200mm solid) must be visually permeable, typically requiring an active ratio of 50% or greater open/see-through infill panels", "Fences adjacent to a driveway or vehicle access point must provide a clear visibility truncation measuring 1500mm by 1500mm", "https://www.victoriapark.wa.gov.au/council-meetings/agenda-briefing-forum/02-february-2021/767/documents/1-fencing-local-law-2020-final-for-adoption.pdf", "28/07/2026"],
              ["City of Kalamunda", "Any front fence exceeding 1.2 meters in height requires a Development Application and a Building Permit from the City.", "Any portion of a front fence built higher than 1.2 meters must maintain a minimum of 50% visual permeability (open design like vertical/horizontal slats, or wire). Completely solid front walls or fences above 1.2 meters are generally not permitted without special council dispensation", "Fences and walls must be restricted to a maximum height of 0.75 meters (750mm) within 1.5 meters of where a driveway meets a public street, or where two streets intersect (corner lots)", "https://www.kalamunda.wa.gov.au/docs/default-source/planningdocs/policies/lpp13.pdf?sfvrsn=9f41569a_14", "28/07/2026"],
              ["City of Swan", "Maximum total height of 1.8 metres (or up to 2.1 metres for decorative piers/posts in specific designs)", "Areas above 1.2 metres must be visually permeable (allowing unobstructed views through the fence, typically at least 50% open design)", "Fences and walls must be truncated or reduced to a maximum height of 0.75 metres (750mm) within a 1.5-metre by 1.5-metre area where a driveway meets a public street, or where two streets intersect, to maintain vehicle and pedestrian safety sightlines", "https://www.swan.wa.gov.au/awcontent/Web/Documents/Planning-Building/local-planning-scheme-17_schedule_5_exempted_development.pdf", "28/07/2026"],
              ["Shire of Mundaring", "Written consent from the Shire is needed for any freestanding front fence greater than 1.2 metres.", "When approval is granted for a front fence exceeding 1.2 metres, the portion or design must generally maintain open or splayed construction to preserve clear sightlines for drivers. Solid opaque walls above 1.2m are typically restricted unless meeting specific R-Codes or local streetscape discretion.", "Fences on either side of a driveway must be splayed or angled into the lot by at least 1.5 metres along the front boundary and 1.5 metres from the boundary, or reduced to a maximum height of 750 mm within 1.5 metres of where the driveway meets the street", "https://www.mundaring.wa.gov.au/documents/34/fencing-local-law", "28/07/2026"],
              ["City of Joondalup", "A Development Application (planning approval) is needed if your front fence exceeds 1.8 meters or fails to meet standard visual permeability limits. A separate building permit is required for any masonry/brick content over 0.75 meters.", "Any part of a front fence higher than 1.2 meters must be visually permeable.", "Fences, walls, and other structures must be truncated, reduced in height, or made visually permeable to a maximum height of 0.75 meters within a 1.5-meter splay/radius where a driveway meets the front property boundary", "https://www.joondalup.wa.gov.au/plan-and-build/residential-building-and-renovation-guides/fencing-and-street-walls", "28/07/2026"],
              ["City of Wanneroo", "Solid fences up to 1.2m high, or up to 1.8m high if the portion above 1.2m is visually permeable", "Any portion of a front fence that sits above 1.2 metres must be at least 50% visually permeable.", "Where a fence sits next to a driveway access point or where two streets meet on a corner lot, safety sightlines are mandatory", "https://www.wanneroo.wa.gov.au/download/downloads/id/364/front_fence_-_information_sheet.pdf", "28/07/2026"],
              ["City of Armadale", "Written consent/approval from the City of Armadale is required if a freestanding front fence exceeds 1.2 metres in height within the primary street setback area. ", "Any portion of a front fence higher than 1.2 metres above natural ground level must be visually permeable.", "All fences must be truncated or reduced to a maximum height of 750mm within a 1.5-metre", "https://assets.ctfassets.net/p4i5hqtl4d48/7BqkwLdYPO3J0v7US6JIWi/a12b3526d3bac2851049f566f5113211/Fencing_Local_Law_2011.pdf", "28/07/2026"],
              ["City of Gosnells", "Anything higher than 1.2 metres for solid sections, or higher than 1.8 metres overall, or using specific masonry/brick over 0.75 metres needs a building or council permit", "Any part of the front fence that is higher than 1.2 metres must be visually permeable (see-through, such as slats or open metal panels).", "Fences next to a driveway must provide a clear 1.5-metre by 1.5-metre visual truncation, or the fence height must be reduced to no more than 0.75 metres (750mm) to ensure driver visibility", "https://www.gosnells.wa.gov.au/sites/default/files/seamless/front_and_secondary_street_fencing_residential.pdf", "28/07/2026"],
              ["Shire of Serpentine-Jarrahdale", "Any front fence or wall exceeding 1.2 meters in solid height or rising higher than 1.8 meters overall, or deviating from standard local rules, requires a building permit and/or planning approval from the Shire", "Above 1.2 meters, the upper portion of the fence must be visually permeable.", "Fencing that abuts a driveway, crossover, or street corner must provide a clear view for safety.", "https://www.sjshire.wa.gov.au/planning-and-development/building/building-advice/front-fences.aspx", "28/07/2026"],
              ["City of Cockburn", "Solid walls higher than 1.2 metres, overall fences taller than 1.8 metres, or specialty materials ", "Any part of the fence higher than 1.2 metres from natural ground level must be visually permeable (allowing clear sight through the panels).", "Must incorporate a 1.5m x 1.5m visual truncation on each side of the driveway where it meets the property boundary if the fence is taller than 750mm", "https://www.cockburn.wa.gov.au/Building-Planning-and-Roads/Applications-and-Permits/fences-and-retaining-walls", "28/07/2026"],
              ["City of Kwinana", "No council approval or building permit is needed if the fence is 1.2m or lower in the front setback area.", "The portion of the fence from 1.2 meters up to 1.8 meters high must be visually permeable.", "Solid fences or walls more than 750mm high are restricted within 1.5 meters of where a driveway meets the street boundary to protect driver visibility", "https://www.kwinana.wa.gov.au/council/documents,-publications-and-forms/publications-and-forms-(all)/information-sheets-and-guides/2020/fence-information-sheet", "28/07/2026"],
              ["City of Rockingham", "Max 1.2m for standard residential front setback areas; max 0.9m for RMD (medium density) zoned lots.", "Height above 1.2m (or 900mm in specific medium-density local policies) generally must be visually permeable (open style) conforming to the Residential Design Codes (R-Codes) or Schedule 1 of the local law.", "Fences adjacent to vehicle access points/driveways must provide a clear sightline truncation (typically a 1.5m x 1.5m or 2m x 2m cut-back, or restricted height under 0.75m–0.9m) so drivers can see pedestrians and oncoming traffic.", "https://rockingham.wa.gov.au/getContentAsset/a432b025-da96-4a53-9b78-b267130b65ab/3ca954ad-3848-47c6-8f97-68cebe0b47a2/Fencing-Local-Law-2020-Gazetted-Version.pdf?language=en", "28/07/2026"]
            ]
          }
        },
        {
          note: "Town of Mosman Park: its fencing local law was under community consultation as part of a 2026 local laws review at the time this table was checked, with a council decision expected mid-2026. The state-default figures above may be superseded by a Mosman Park-specific policy — re-check before relying on this row." },

        { h3: "Shared boundaries" },
        {
          p: [
            "A wall on a common boundary is a shared asset and a shared cost question. The **Dividing Fences Act 1961 (WA)** governs dividing fences and cost sharing between adjoining owners, and the standard it works from is a **\"sufficient fence\"** — a substantial fence capable of containing cattle and sheep, or one meeting your local council's specification, whichever applies. As a general rule neighbours split the cost of erecting or repairing a dividing fence equally, and an agreement between neighbours, if you reach one, overrides the Act.",
            "The part that actually matters for a brick or rendered boundary wall: masonry is almost always **better than sufficient**. If you want a wall nicer or more substantial than the baseline and your neighbour has not agreed to it, they only have to pay half the cost of a basic sufficient fence — you cover the rest. Get their written agreement before you build, or budget for the difference yourself."
          ]
        },
        {
          note: "Summarised from [Citizens Advice Bureau of WA, Issues with dividing fences](https://cabwa.com.au/help/issues-with-dividing-fences/) and the [WA Government's own guide, Dividing fences](https://www.wa.gov.au/government/multi-step-guides/dividing-fences). Both are plain-language guides to the Act rather than the Act itself — for a dispute already underway, get advice from Legal Aid WA or a property lawyer rather than relying on this page." },
        { p: "Practical position regardless: settle it in writing before construction. Who pays what share, whose land the wall sits on, who maintains it, and what the finished levels are on both sides." },

        { h3: "The practical version" },
        { p: "Ring your council's planning counter before accepting a quote. Tell them the height and whether it is solid, and ask whether it needs approval. One phone call, free. Anyone who tells you approval is never needed for a front fence is either working below the threshold or guessing." },

        { h2: "Face brick or rendered?" },
        { p: "The main aesthetic decision, and it has cost consequences that run for the life of the wall rather than just at build time." },

        { h3: "Face brick" },
        {
          p: [
            "Laid and left. The brick is the finished surface, so there is one trade, one process, and nothing to recoat. Cheapest over the life of the fence, and it matches most Perth housing stock, much of which is double brick already.",
            "The colour is fired into the material rather than applied on top, so it does not fade, peel or need redoing — a face brick fence essentially looks the same in twenty years, weathered slightly. The mortar joints will eventually need repointing, but that is decades away and it is a small job on a fence compared to a house. See [repointing](brick-repairs-repointing-tuckpointing.html).",
            "The palette available is wide: reds, red-browns and terracottas through the browns and ambers, creams, buffs and sandy tones, and the greys, charcoals and near-blacks that dominate contemporary work. Texture ranges from smooth through wirecut and sandstock to heavily tumbled. Matching the house is the usual approach, though deliberately contrasting the fence against the house is common and looks intentional rather than mismatched when the contrast is decisive rather than nearly-the-same.",
            "The real constraint is on an older home: if the house brick is no longer manufactured, an exact match may not exist, and the honest options are a sympathetic contrast, a rendered fence, or salvage."
          ]
        },

        { h3: "Rendered" },
        {
          p: [
            "Brick or block underneath, render over the top, then a coating. The look most people want for a modern frontage, and it gives you any colour you like rather than the colours a kiln produces.",
            "It costs more up front because it is two trades and several more steps, and it carries an ongoing recoating cycle that face brick does not. The substrate underneath still has to be built properly — render is a finish, not a structure, and it hides workmanship rather than replacing it. A common false economy is a cheaper, rougher substrate on the basis that the render will cover it. It will, right up until it cracks along every line the blockwork moved on.",
            "**Cement render** is the traditional system: sand, cement and usually lime, trowelled on in coats. Hard, durable, and relatively rigid, which is exactly why it shows movement.",
            "**Acrylic or polymer-modified render** carries polymers that make it more flexible and more crack-tolerant, and it goes on thinner. It costs more and is the usual answer where some movement is expected.",
            "**Texture and roll-on coatings** sit over the top and provide the final finish and colour, in anything from a fine sand float to a coarse knockdown.",
            "**Bagging** is the cheap relation — a thin slurry rubbed over the brick that fills the joints and unifies the colour while still letting the brick shape read through. Much less material, much less money, and a distinctly different look that suits some houses very well.",
            "Two things to raise before choosing render. It shows movement cracking that face brick would hide, so if there is any question at all about ground movement, settle it first. And on a wall with any part of it retaining, or on a reactive clay site in the hills, the flexible systems are worth the difference.",
            "**Rendered walls need recoating.** One manufacturer's own technical guidance for its acrylic texture-coating system puts the weatherproofing topcoat's recoat cycle at 7-10 years to keep the whole system performing, with a wash-down every 12-18 months (more often on a coastal fence) to remove salt and grime and catch problems early. Budget for it — a face brick fence has no equivalent ongoing cost."
          ]
        },
        {
          note: "Recoat interval: [Dulux, Acratex Technotes & FAQs](https://www.dulux.com.au/specifier/products/acratex/technotes-faqs/) — one manufacturer's figure for one product system, not a blanket claim for every render brand or system named above (cement render, other acrylic brands, texture coatings, bagging). Treat 7-10 years as indicative rather than universal until a WA rendering trade source or a second manufacturer is checked." },

        { h3: "Capping, piers and the details that date a fence" },
        {
          p: [
            "The parts people decide last and notice most.",
            "**Capping** is the course along the top. It is not only a look — it is the wall's weathering, because the top is the horizontal surface that collects water and it is where a fence deteriorates first. Options run from a brick-on-edge or header course in the same brick, through purpose-made rounded or moulded cappings, to precast concrete, natural stone and rendered caps. A cap that throws water clear of the face rather than letting it run down is doing structural work as well as decorative.",
            "**Pier caps** are the equivalent at the top of each pier, and because piers punctuate the whole frontage they set the character more than the infill does.",
            "**Letterbox and house number** are usually built into a pier, and worth deciding before the piers go up rather than after, because retrofitting an opening into finished brickwork is disproportionately expensive.",
            "**Lighting and gate motors** need conduit run through the piers during construction. Chasing cable into a finished pier means cutting it open. This is the most common single regret on a completed fence and it costs almost nothing to allow for at the right moment. Decide about lights and an automatic gate before the brickwork starts, even if you are not installing them yet."
          ]
        },

        { h2: "Looking after it" },
        {
          p: [
            "A brick fence is close to the lowest-maintenance boundary you can build, which is much of the point of one, but it is not zero.",
            "**Keep reticulation off it.** The single most useful thing on this page for the life of your wall. Bore water sprayed daily onto brickwork deposits salt into the face, and salt crystallisation is what blows brick faces off in Perth. Point the sprinklers away from the wall. Damage in a band at sprinkler height, worst on the reticulated side, is one of the most common failures in this city and it is entirely avoidable.",
            "**Keep soil and mulch off it.** Garden beds built up against a fence hold moisture against the brickwork and can bridge whatever damp protection exists at the base.",
            "**Watch the drainage.** Water concentrating along a footing, whether from a downpipe, a paved area falling the wrong way or a neighbour's run-off, is a slow way to undermine one.",
            "**Look at the joints every few years.** Mortar that can be scratched out with a key is telling you the pointing has reached the end of its life, and repointing a fence early is cheap. Leaving it until water has been running through open joints into the core of the wall is not.",
            "**Watch for cracks that change.** A hairline crack that has looked the same for a decade is not the same thing as one that has opened over a summer. The [crack diagnosis section on the repairs page](brick-repairs-repointing-tuckpointing.html) applies to fences as much as to houses, and a freestanding wall that is leaning or bowing should be looked at rather than watched.",
            "**Rendered walls need recoating.** Budget for it. Touching up a crack early is a small job; leaving render to debond in sheets is not."
          ]
        },
        {
          image: {
            src: "images/face-brick-and-rendered-fence.jpg",
            alt: "A street frontage combining dark face brick piers with rendered infill panels between them",
            width: 1000,
            height: 611
          }
        },

        { h2: "What to ask before you accept a quote" },
        {
          ol: [
            "**Is any part of this wall retaining?** If yes, what is the footing and drainage detail?",
            "**What is the pier spacing?** Compare it across quotes. Different spacing is a different wall.",
            "**What is the footing depth and width, and what concrete strength?**",
            "**Are demolition and spoil removal included?** Both, separately.",
            "**Who lodges approval if it is needed, and is the fee included?**",
            "**If it is a shared boundary, has the neighbour agreed?** Far easier settled before the wall goes up.",
            "**Is render and paint in this price, or a separate trade?** A rendered fence quoted as brickwork only is not the finished number."
          ]
        },

        { h2: "Frequently asked questions" },
        {
          faqs: [
            {
              q: "What does a brick front fence cost per metre in Perth?",
              a: "It depends on height, pier spacing and whether any part is retaining, and a single number would mislead more readers than it helps. We are not publishing a range until we have one we can stand behind — see the costs section above."
            },
            {
              q: "How high can a front fence be in Perth without approval?",
              a: "It depends on your council. There is no single metro-wide figure. See the table above, and ring your council to confirm."
            },
            {
              q: "Does a fence need a footing if it is only a metre high?",
              a: "Yes. A freestanding wall carries wind load and needs a footing sized for its height. What changes with height is how much footing and how the piers are spaced."
            },
            {
              q: "Can a fence be built on the boundary?",
              a: "Usually, subject to council provisions and the neighbour question. Get cost sharing and finished levels agreed in writing first."
            },
            {
              q: "Why is a rendered fence more expensive than face brick?",
              a: "It is two trades rather than one, and it carries a repainting cycle that face brick does not."
            },
            {
              q: "How long does a brick fence last?",
              a: "Built properly on a suitable footing, a brick fence is a multi-decade structure and generally outlasts the fashion for it. What shortens that is water and salt — bore water reticulation spraying the face, soil banked against the base, or drainage running along the footing. Keep water off it and the maintenance is repointing the joints once in a very long while."
            },
            {
              q: "How deep does a brick fence footing need to be?",
              a: "It depends on the height of the wall and on the ground it is going into, which is why a footing depth quoted over the phone without anyone looking at the site is a guess. A taller wall generates a much larger overturning force at the base, and a reactive clay site in the hills behaves differently to sand on the coastal plain. Ask for the depth and width in writing, and compare it across quotes."
            },
            {
              q: "Why is pier spacing important?",
              a: "Piers carry the sideways wind load back down into the footing. Widening the spacing is the easiest saving to make that a homeowner will never see, so a noticeably cheaper quote is sometimes a quote with fewer piers in it. Compare pier spacing before you compare totals."
            },
            {
              q: "Can I build a brick fence on a sloping block?",
              a: "Yes, but settle the retaining question first. Where ground is higher on one side, part of the wall is holding soil back, which means a heavier footing, drainage behind it and possibly engineering. Plenty of Perth frontages fall away toward the verge just enough for this to apply without the owner having thought of it that way."
            },
            {
              q: "Do I need engineering for a front fence?",
              a: "Often not for a low fence on stable ground, and often yes once it gets taller, once any part of it is retaining, or once the site is sloping or on reactive clay. Your council will tell you what it requires, and a contractor who says engineering is never needed for any front fence is guessing."
            },
            {
              q: "Should I run conduit for lights or a gate motor?",
              a: "Decide before the brickwork starts, even if you are not installing them yet. Conduit run through the piers during construction costs almost nothing. Chasing cable into a finished pier afterwards means cutting it open, and it is the most common regret on a completed fence."
            },
            {
              q: "Is bagging cheaper than rendering?",
              a: "Yes, noticeably. Bagging is a thin slurry rubbed over the brick that fills the joints and unifies the colour while letting the brick shape read through. Much less material and labour than a full render system, and a different look rather than a worse one — it suits some houses better than a flat rendered finish does."
            }
          ]
        },

        {
          form: {
            headline: "Tell us about your fence",
            preset: "Brick or rendered fence",
            placeholders: {
              size: "e.g. 18m of front fence, about 1.2m high, one vehicle gate."
            }
          }
        },

        { h2: "Related" },
        {
          ul: [
            "[Repointing, tuckpointing and brick repairs](brick-repairs-repointing-tuckpointing.html)",
            "[About Perth Brickwork](about.html)"
          ]
        },
        {
          note: "Decision (28 July 2026): staying with the illustrative photographs on this page for now. Two things remain genuinely uncovered by any image, illustrative or otherwise, and are tracked separately below: a labelled diagram of a level frontage versus one falling away (in the \"Is any of it retaining?\" section above), and a vehicle gate opening with piers for scale (in the \"Gates and openings\" section below)." }
      ]
    }
  ],

  /* Suburb pages. Deliberately empty: v6 rules them out until the core pages
     are live and each suburb page has genuinely differentiated content. An
     unsupported suburb list is the scaled-content pattern to avoid. */
  areas: [],

  /* --- Homepage body ------------------------------------------------------ */
  homeBlocks: [
    {
      form: {
        headline: "Tell us about your job",
        intro: [
          "Send through what you need done and it goes to a bricklayer who covers your part of Perth.",
          "The form asks about size, access and the age of the building rather than just name and number, because those are the details that determine what the job actually is. A price given without them is a guess."
        ],
        showPhone: true
      }
    },

    { h2: "The work we cover" },

    { h3: "Repointing, tuckpointing and brick repairs" },
    { p: "Mortar fails long before brick does. Repointing is maintenance. Tuckpointing is a decorative finish found on Perth's federation-era and inter-war housing, and it is a specialist skill that most bricklayers cannot do at all. Cracking is sometimes neither, and telling the difference is what stops you paying twice. [Repointing, tuckpointing and brick repairs in Perth](brick-repairs-repointing-tuckpointing.html)" },

    { h3: "Brick and rendered fences" },
    { p: "Front fences, boundary walls, piers, gate openings and letterboxes. Usually a fixed-scope job that can be quoted accurately once someone has stood on the frontage, unless part of it turns out to be retaining. [Brick and rendered fences in Perth](brick-fences-boundary-walls.html)" },

    { h3: "Extensions and additions" },
    { p: "Double brick extensions, garage conversions, additions. Some extensions and additions will need to be contracted through a registered builder rather than engaged with a bricklayer directly, depending on the value and nature of the work. Send the job through either way and it will be pointed at whoever is the right fit for it." },

    { h2: "What we don't cover" },
    { p: "Worth saying plainly, because it saves you a phone call." },
    {
      p: [
        "**Limestone retaining walls.** Limestone walling in Perth is a different trade to bricklaying. Different suppliers, different blocks, different handling, and largely different contractors.",
        "**Paving, concreting and landscaping.** Adjacent trades, not this one.",
        "**Structural engineering.** If a wall is moving, an engineer diagnoses it and a bricklayer repairs what the engineer identifies. Doing it in the other order is how people pay for the same wall twice. The [repairs page](brick-repairs-repointing-tuckpointing.html) covers how to tell which one you need."
      ]
    },

    { h2: "Why there is no single per-brick or hourly rate" },
    {
      p: [
        "People often arrive looking for a rate per thousand bricks, because that is how bricklayers are paid subcontracting to builders on large sites.",
        "It does not translate to a domestic job. On a homeowner's job the brick laying is frequently a minority of the total. Footings, access, scaffolding, spoil removal, piers and approval can add up to more than the brickwork itself, and on repointing there is no new brick being laid at all.",
        "Costs are set out per job type on the [fences page](brick-fences-boundary-walls.html) and the [repairs page](brick-repairs-repointing-tuckpointing.html), because that is the only level at which a range means anything."
      ]
    },

    { h2: "How to check a bricklayer before you hire them" },
    { p: "Three things, about five minutes' work." },
    {
      p: [
        "**1. Check registration on larger jobs.** Above a certain contract value, building work in Western Australia has to be carried out by a registered building contractor rather than engaged with a tradesperson directly. Building and Energy publishes a public register you can search by name or registration number, and it takes about a minute. If your job is substantial, or if anyone is quoting to build rather than to repair, check it.",
        "**2. Ask to see two jobs like yours.** Not a gallery. Two addresses done in the last year that you could drive past. On tuckpointing this matters more than on anything else, because few people do it and the difference between good and bad is visible from the footpath.",
        "**3. Get the scope in writing before any money changes hands.** For a fence: height, length, footing depth, pier spacing, whether any of it is retaining, and who removes the spoil. For repointing: mortar mix and rake-out depth. Most disputes in this trade are scope disputes rather than quality disputes."
      ]
    },

    { h2: "Where we cover" },
    { p: "The whole Perth metropolitan area. North through Joondalup, Scarborough and Morley. Central across Perth and Victoria Park. East to Midland and Kalamunda. West to Fremantle and Cottesloe. South to Armadale and Rockingham. If your suburb sits anywhere between those, it is covered." },
    { p: "Jobs outside the metro area can still be sent through — there is just no guarantee anyone covers that far out." },

    { h2: "Frequently asked questions" },
    {
      faqs: [
        {
          q: "Does this cost me anything?",
          a: "No. Sending an enquiry costs you nothing and there is no obligation."
        },
        {
          q: "Can you give me a price over the phone?",
          a: "Not one worth having. On repointing, the state of the existing mortar and the access decide it. On a fence, pier spacing and whether any of it is retaining move the number more than length does. Neither can be assessed over the phone."
        },
        {
          q: "Do you do limestone retaining walls?",
          a: "No. Different trade. See the \"what we don't cover\" section above."
        },
        {
          q: "Do you cover my suburb?",
          a: "The whole Perth metropolitan area — Joondalup to Rockingham, Fremantle to Midland and Kalamunda. Send it through either way."
        },
        {
          q: "What happens to my details?",
          a: "They are used to get your job in front of a bricklayer who does that type of work. The full position is on the [About page](about.html) and in the [privacy policy](privacy.html)."
        }
      ]
    },
    { marker: "NEEDS INPUT: the FAQ \"How soon will I hear back?\" is deliberately absent, and no turnaround is promised anywhere on the site. Add one only once a renter has signed and a real turnaround can actually be committed to. Until then the site must not imply every enquiry gets a reply." },

    { h2: "About Perth Brickwork" },
    {
      p: [
        "Perth Brickwork is run from Perth, operating under ABN 78 538 005 810.",
        "We are not a directory and not a quote comparison site. What we do is ask about a job properly, publish what we have researched about how these jobs are priced and regulated in Perth, and get the job to a bricklayer who does that kind of work.",
        "[More about how this works, and how we're paid](about.html)"
      ]
    },
    { note: "Decision (28 July 2026): staying with the illustrative hero image for now. It depicts a fence rather than the page's lead service (repointing/tuckpointing) — worth a straight swap to a better-matching illustrative image at some point, but not urgent." }
  ],

  /* --- About page body ---------------------------------------------------- */
  aboutBlocks: [
    { h2: "Who runs this" },
    {
      p: [
        "Perth Brickwork is run by Brad, from Dayton in Perth's north east. It is a registered business, operating under ABN 78 538 005 810.",
        "Before this I spent two years in the construction materials industry. That is where the footing and concrete material on this site comes from. I have not laid brick and I do not claim to — but I can help connect you up with the people who can. For how a specific job gets built, the bricklayer is the one to ask."
      ]
    },

    { h2: "What this business does" },
    {
      p: [
        "We take enquiries from Perth homeowners about bricklaying work and we get them to a bricklayer who does that type of job.",
        "We do not build, lay, point, repair, excavate, quote, attend site or certify anything. There is no crew and no equipment. Every physical part of a job is done by the bricklayer.",
        "The other half of what we do is research. The front fence provisions on the [fences page](brick-fences-boundary-walls.html) were put together by contacting each local government individually, because nobody had published a per council reference and homeowners kept being given a single figure that is not true across the metro area. Every entry records when it was checked."
      ]
    },
    {
      image: {
        src: "images/bricks-pallet-and-tools.jpg",
        alt: "A stack of red bricks on a pallet with a trowel, spirit level and line reel beside them",
        width: 1000,
        height: 614
      }
    },

    { h2: "What we don't cover, and why" },
    {
      p: [
        "We stick to bricklaying. That means repointing, tuckpointing and brick repairs, brick and rendered fences and boundary walls, and extensions and additions — some of which need to go through a registered builder rather than to a bricklayer directly.",
        "Limestone walling is a separate trade in Perth. Different suppliers, different blocks, different handling, and largely different contractors. Sending a limestone retaining wall enquiry to a bricklayer wastes the homeowner's time and the bricklayer's.",
        "Paving, concreting, landscaping and structural engineering are all adjacent trades we do not handle either."
      ]
    },

    { h2: "What happens after you enquire" },
    { p: "After you submit the form or leave a voicemail, you will be contacted by a local bricklayer if they can help." },
    { p: "Your job goes to one bricklayer rather than to everyone buying leads that day, so you get one conversation rather than five calls before you have put the kettle on. Your details are not sold, not added to a marketing list, and not shared with advertisers. The full position is in the [privacy policy](privacy.html)." },
    { p: "Perth Brickwork is paid by the bricklayer, not by you. Quotes are free and there is no obligation to proceed." },

    { h2: "Where we cover" },
    { p: "The whole Perth metropolitan area. North through Joondalup, Scarborough and Morley. Central across Perth and Victoria Park. East to Midland and Kalamunda. West to Fremantle and Cottesloe. South to Armadale and Rockingham." },

    { h2: "Contact" },
    {
      p: [
        "Brad  \nPerth Brickwork  \nABN 78 538 005 810  \nPhone: (08) 9511 5005  \nEmail: hello@perthbrickwork.com.au",
        "The fastest way to get a job looked at is [the form on the homepage](index.html#enquiry). The phone number is there for anything else."
      ]
    },
  ],

  /* --- Privacy page body --------------------------------------------------
     Must stay accurate to the actual form fields above and to the lead-passing
     disclosure on the about page. If you change the form, change this. */
  privacyBlocks: [
    { h2: "What this website collects" },
    { p: "When you use the enquiry form on this site, we collect what you type into it: **what you need, your suburb, a description of the job, your name, your phone number,** and anything you add in the optional notes field. On the repairs page the form also asks the rough age of the building, which is optional. There are no other fields, and the site does not ask for an address, an email address or any payment detail." },

    { h2: "How it's used, and who it goes to" },
    { p: "Your details are used for one purpose: to get your job in front of a bricklayer in your part of Perth who does that type of work, so they can contact you about it. That bricklayer has a commercial arrangement with Perth Brickwork — the full position is set out on the [about page](about.html)." },
    { p: "Your job goes to one bricklayer, not to everyone buying leads that day. Your details are not sold, not added to a marketing list, and not shared with advertisers." },

    { h2: "Who processes the form" },
    { p: "The form is delivered by [Formspree](https://formspree.io), a form-handling service. When you submit the form, your details pass through Formspree's servers to reach us. Formspree's own privacy policy is available on their website." },

    { h2: "Analytics" },
    { p: "This site may use Google Analytics to understand how visitors find and use it — for example, which pages are viewed. Google Analytics uses cookies and collects anonymous usage data such as your general location and device type. It does not see anything you type into the enquiry form." },

    { h2: "Phone calls" },
    { p: "If you call the number on this site, standard call records apply. We don't record calls." },

    { h2: "Your choices" },
    { p: "If you'd like the details you submitted to be deleted, call (08) 9511 5005 and ask — they'll be removed." },

    { h2: "Contact" },
    { p: "Questions about this policy can be directed to Perth Brickwork, ABN 78 538 005 810, on (08) 9511 5005." },

    { marker: "NEEDS INPUT: have this policy read against the actual arrangement before launch, and set pages.privacy.lastUpdated to a real date. It currently describes the pre-renter position. When a renter signs, confirm the paragraph about who receives enquiries is still exactly true." }
  ],

  /* --- Real-evidence placeholders (do not fake these) ----------------------
     These stay empty until a real, operating business supplies real content.
     No invented reviews, names, star ratings, or project photos. Ever. */
  testimonials: [],
  photos: []
};
