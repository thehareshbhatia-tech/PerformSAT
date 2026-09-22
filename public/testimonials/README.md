# Landing-page testimonial photos

Student headshots for the Results section of both landing pages. They are
referenced by the `ROSTER` array in `src/data/landingRoster.js`; both pages
render them through the shared `Avatar` (32-48px circles).

| File          | Student   | College                        | Status |
|---------------|-----------|--------------------------------|--------|
| `jake-c.webp` | Jake C.   | Princeton University           | live (matched to the "Story Jake" Instagram story portrait) |
| `gino-s.webp` | Gino S.   | University of Florida · Honors | live (matched to the Gino Schiano case-study portrait) |
| —             | Sansai H. | Villanova University           | initials until a photo is matched |
| —             | Luca S.   | Tufts University               | initials until a photo is matched |
| —             | Rocco D.  | Fordham University             | initials until a photo is matched |

Format: 320×320 WebP (quality 84), face centred, cropped head-and-shoulders.
The crops were cut from the originals with Pillow: a square box around the
face, resized to 320px, saved with `quality=84, method=6`.

`../../testimonials-pending/` (repo root, git-ignored, local only, outside
`public/` so no build ever serves it) holds cropped photos the founder sent
that are not yet matched to a roster name, plus a numbered contact sheet. To
assign one: move it into this folder as `<first>-<initial>.webp`, set that
student's `img` in `ROSTER` to `/testimonials/<file>`, and delete the pending
copy.

A roster entry with a null `img` renders the student's initials on a navy
disc (no `<img>`, no 404), so shipping with a partial set is safe.

These are real, cleared testimonials — keep them accurate to what each student
actually agreed to publish, and never pair a photo with a name you have not
verified.
