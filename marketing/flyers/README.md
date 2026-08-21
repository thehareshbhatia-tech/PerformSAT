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

The centrepiece is the **four steps** followed by a **real screenshot of the
Study Plan**. The steps are the method any student should follow after a test;
the screenshot is what SEVA builds out of steps 3 and 4. The pairing is the
argument, so keep them together — the steps alone are advice anyone could give,
and the screenshot alone is a UI with nothing to explain it.

(An earlier version drew the plan as an SVG arc instead. The real screenshot
supersedes it: the flyer now shows the product rather than a diagram of it.)

The step ticks are `--lime-deep`, the palette's "done" colour — the only green
on the page besides the wordmark and the tri-color rule. They are inline SVG,
not a font glyph or an emoji, so they render identically without the SEVA
fonts installed.

## Re-shooting the screenshot

`src/assets/studyplan.png` is a real capture of the Study Plan, base64-inlined
into the PDF at build time so the template stays self-contained. `build.mjs`
fails loudly if it is missing.

To re-shoot it, with the dev server running on :3000:

1. `viewport 1920x1200 --scale 2` — the 2x is what makes it print at ~350 DPI.
   Note that changing scale recreates the browser context and logs you out, so
   set it BEFORE logging in.
2. Log in, open Home → Study Plan.
3. **Mask the account email** before capturing. It renders in the sidebar
   footer, and this is a printed piece — walk the text nodes and replace it.
4. Capture the clip `424,308,1286,347`. That region is chosen to end cleanly:
   it clears the bottom of the calendar card and cuts the "This week" card just
   below its header, which reads as a scroll rather than as a mistake.

The capture is real app state, not a mockup. The goal score showing in it is a
real `targetScore` on the account — if it ever reads "—" again, set one in
Profile → SAT Goals rather than faking the number.

Five things in the layout are load-bearing and will break silently if changed:

- **No `box-shadow` anywhere.** Chrome's print pipeline flattens shadows into
  hard grey rectangles that extend well past the element. Use borders and fills.
- **The wordmark's S is three clipped copies, not a `background-clip: text`
  gradient.** The gradient version exports to the PDF as flat green.
- **`print-color-adjust: exact`** on `body`. Without it the cream field and the
  tri-color rule are dropped as "backgrounds" at print time.

- **The screenshot runs FULL WIDTH, and that is load-bearing.** The app's body
  text is ~14px in a 1286px-wide capture; across the full 7.34in measure that
  lands at ~5.8pt on paper, which reads. Dropped into a half-width column the
  same capture renders at ~2.7pt — a grey smudge (measured both ways). If it
  ever has to move into a column, crop to a legible detail instead of shrinking
  the whole frame.

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
