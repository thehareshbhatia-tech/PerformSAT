# Landing-page testimonial photos

Student headshots for the Results section of both landing pages. They are
referenced by the `ROSTER` array in `src/data/landingRoster.js`; both pages
render them through the shared `Avatar` (32-48px circles).

| File           | Student   | College                        | Status |
|----------------|-----------|--------------------------------|--------|
| `jake-c.webp`  | Jake C.   | Princeton University           | live — the portrait the founder labelled "this is Jake" (2026-09-21), cut from the "Story Jake" export |
| `gino-s.webp`  | Gino S.   | University of Florida · Honors | live — matched to the Gino Schiano case-study portrait |
| `rocco-d.webp` | Rocco D.  | Fordham University             | live — founder-labelled 2026-09-21 |
| `luca-s.webp`  | Luca S.   | Tufts University               | live — founder-labelled 2026-09-21 |
| —              | Sansai H. | Villanova University           | initials until a photo is confirmed |

Format: 320×320 WebP (quality 84), face centred, cropped head-and-shoulders.
The crops were cut from the originals with Pillow: a square box around the
face, resized to 320px, saved with `quality=84, method=6`.

`../../testimonials-pending/` (repo root, git-ignored, local only, outside
`public/` so no build ever serves it) holds cropped photos the founder sent
that are not on the site yet: `christian.webp` and `miley.webp` (founder-named
students with no roster entry yet — they need college, before/after scores and
an approved quote before they can join `ROSTER`), `photo-4-unassigned.webp`
(dark curly hair, grey backdrop; not Jake — identity unconfirmed) and the
numbered contact sheet. To assign one: move it into this folder as
`<first>-<initial>.webp`, set that student's `img` in `ROSTER` to
`/testimonials/<file>`, and delete the pending copy.

A roster entry with a null `img` renders the student's initials on a navy
disc (no `<img>`, no 404), so shipping with a partial set is safe.

These are real, cleared testimonials — keep them accurate to what each student
actually agreed to publish, and never pair a photo with a name you have not
verified.
