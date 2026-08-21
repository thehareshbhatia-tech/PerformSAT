# Test-center flyers

Hand-out for students walking out of an SAT administration. The QR goes to the
landing page with print attribution attached, so scans show up in PostHog as a
distinct source instead of blending into direct traffic.

## Files

| File | Use |
| --- | --- |
| `seva-flyer-testcenter.pdf` | **Print this one.** Full-color, cream bleeds to the trim edge. |
| `seva-flyer-testcenter-ink-light.pdf` | Same layout on a white field. For a home/office printer, or when a shop charges by coverage. |
| `seva-qr-testcenter.svg` | The QR alone, vector. For posters, slides, a table tent. |
| `seva-qr-testcenter.png` | The QR alone, 2000px raster. |

Both PDFs are US Letter (8.5 x 11 in), one page, portrait, fonts embedded, no
external assets. They print correctly from any machine without the SEVA fonts
installed.

## Where the QR points

```
https://sevaprep.com/?utm_source=flyer&utm_medium=print&utm_campaign=testcenter
```

Nothing had to be built for this to work — `posthog-js` reads the UTM
parameters on the first pageview, so flyer scans are already separable from
every other traffic source. To see them, filter PostHog on
`utm_source = flyer`.

If you want to tell two test centers (or two dates) apart, change
`utm_campaign` and rebuild — see below. Do not hand-edit the QR image.

## Print specs to give the shop

- **Size:** 8.5 x 11 in, portrait, single-sided
- **Color:** full color
- **Stock:** 100# gloss text or 80# matte cover. Anything lighter than 70# text
  feels like a receipt and gets dropped in the parking lot.
- **Bleed:** none required. The artwork is built so nothing important sits
  within 0.58 in of the trim, and the cream simply runs off the edge.
- **Finish:** none. No lamination — a matte, writable surface reads as a
  handout rather than an ad.

## Reprinting or changing it

Everything needed to rebuild lives in `src/`. It is self-contained — it fetches
its own fonts and generates its own QR:

```sh
cd marketing/flyers/src
npm install
npm run all        # fonts -> qr -> both PDFs -> decode check
```

`npm run all` fails loudly if the QR in the finished PDF does not decode to the
expected URL, so a broken flyer cannot ship quietly.

| File | Role |
| --- | --- |
| `flyer.template.html` | The layout. `__FONTS__`, `__QR__`, `__VARIANT__` are substituted at build time. |
| `make-qr.mjs` | Generates the QR. **Change the destination URL here** — never edit the image. |
| `inline-fonts.mjs` | Base64-embeds Bricolage Grotesque, Hanken Grotesk, Baloo 2 so the PDF carries its own type. |
| `build.mjs` | Renders both variants through headless Chrome, then extracts the QR back out of the PDF. |
| `decode.mjs` | Decodes that extracted QR and asserts the URL. |

To split traffic by test center or date, edit `URL` in `make-qr.mjs`
(e.g. `utm_campaign=testcenter-lynbrook-1004`) and re-run `npm run all`.

The centrepiece is a **two-column prep block**: the four steps any student
should follow after a test on the left, and on the right the **plan arc** —
the artifact SEVA builds out of steps 3 and 4. The pairing is the argument, so
keep them side by side; the steps alone are advice anyone could give, and the
arc alone is a chart with nothing to anchor it.

Phase names (Foundation / Build / Sharpen), the milestone types (check-in, full
test) and their glyph shapes all mirror `buildPlanArc` in
`src/services/studyPlanGenerator.js` and `components/plan/PlanArcHeader.jsx`.
If the phase labels change there, change them here too; the whole point is that
the flyer shows the real product.

The step ticks are `--lime-deep`, the palette's "done" colour — the only green
on the page besides the wordmark and the tri-color rule. They are inline SVG,
not a font glyph or an emoji, so they render identically without the SEVA
fonts installed.

Five things in the layout are load-bearing and will break silently if changed:

- **No `box-shadow` anywhere.** Chrome's print pipeline flattens shadows into
  hard grey rectangles that extend well past the element. Use borders and fills.
- **The wordmark's S is three clipped copies, not a `background-clip: text`
  gradient.** The gradient version exports to the PDF as flat green.
- **`print-color-adjust: exact`** on `body`. Without it the cream field and the
  tri-color rule are dropped as "backgrounds" at print time.

- **The arc's `viewBox` is sized ~1:1 with its rendered width.** It lives in a
  half-width column now, so the viewBox is 320 units wide, not the 656 of the
  old full-width panel. Scaling the wide one down instead rendered its 10px
  labels at ~4.6px — invisible on paper. If the arc ever moves back to full
  width, redraw it rather than stretching this one.

- **The QR check rasterizes at 200 DPI, not 300.** jsQR's locator fails to find
  the code on a 2550px-wide page but decodes reliably at 1700px (measured both
  ways). The decoder scans the whole page rather than a crop box, so moving the
  scan block around the layout cannot break the check.

Headless Chrome does not always exit after writing the PDF, so `build.mjs`
treats *"the file came back and is over 20KB"* as the success signal rather
than the exit code. It also uses a per-variant profile directory that is
deleted before each run — a profile left behind by a killed build keeps a
`SingletonLock` that makes the next Chrome abort instead of rendering.

## What the flyer can and cannot promise

The app currently sends any signed-in account with no billing account straight
to the paywall (`src/App.jsx`, the card-up-front hard gate). A student cannot
reach the diagnostic without starting the 3-day trial, and starting the trial
takes a card.

So the flyer leads with **"Everyone out here is guessing. You don't have to
be."**, the CTA is **"Scan to start"**, and the footer states plainly that
starting the trial takes a card. Nothing on the page calls the diagnostic
free. Keep it that way unless the gate itself changes. A printed piece has no second
screen to walk a claim back on, and the reader is a 16-year-old who very likely
does not have a card in their pocket.

If the gate is ever changed so the diagnostic runs before the wall, the copy in
`src/flyer.template.html` can go back to leading with "free diagnostic" — that
is the version that will convert far better on this channel.

## Handing them out

The headline assumes the reader has just finished the test, so these work at a
test center on test day and nowhere else.

Two practical notes:

- **Check the venue first.** Most test centers are schools, and many prohibit
  solicitation on school property. Handing these out on the public sidewalk
  outside is a different situation from doing it in the parking lot or lobby.
- **The parent is the buyer.** The student scans, but a card has to appear
  before anything happens. The flyer is sized to survive a backpack and be
  handed to a parent later, which is the realistic conversion path.
