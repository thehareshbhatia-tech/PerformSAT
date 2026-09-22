# Landing-page testimonial photos

Student headshots for the Results section of both landing pages. They are
referenced by the `ROSTER` array in `src/data/landingRoster.js`; both pages
render them through the shared `Avatar` (32-48px circles).

| File             | Student    | College                      | Status |
|------------------|------------|------------------------------|--------|
| `jake-c.webp`    | Jake C.    | Princeton University         | founder-labelled 2026-09-21, cut from the "Story Jake" export |
| `gino-s.webp`    | Gino S.    | University of Florida Honors | matched to the Gino Schiano case-study portrait |
| `sansai-h.webp`  | Sansai H.  | Villanova University         | founder-confirmed 2026-09-21 |
| `rocco-d.webp`   | Rocco D.   | Fordham University           | founder-labelled 2026-09-21 |
| `luca-s.webp`    | Luca S.    | Tufts University             | founder-labelled 2026-09-21 |
| `miley-m.webp`   | Miley M.   | NYU Stern School of Business | founder-labelled 2026-09-21; scores from her case study; NO quote yet → marquee only |
| `christian.webp` | Christian  | Boston University            | founder-labelled 2026-09-21; scores from the founder; last initial + quote still owed → marquee only |

Format: 320×320 WebP (quality 84), face centred, cropped head-and-shoulders.
The crops were cut from the originals with Pillow: a square box around the
face, resized to 320px, saved with `quality=84, method=6`.

`../../testimonials-pending/` (repo root, git-ignored, local only, outside
`public/` so no build ever serves it) is the holding area for photos the
founder sends that are not yet on the site; it currently holds only the
numbered contact sheet from the 2026-09-21 batch. To assign a photo: move it
into this folder as `<first>-<initial>.webp`, set that student's `img` in
`ROSTER` to `/testimonials/<file>`, and delete the pending copy.

A roster entry with a null `img` renders the student's initials on a navy
disc (no `<img>`, no 404), so shipping with a partial set is safe. A null
`quote` keeps the student out of every quote card and carousel (marquee only)
until they supply an approved first-person sentence.

These are real, cleared testimonials — keep them accurate to what each student
actually agreed to publish, and never pair a photo with a name you have not
verified.
