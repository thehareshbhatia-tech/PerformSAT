/**
 * landingRoster — content shared by both landing pages (v1 `LandingPage.jsx`
 * and the Acely-style `LandingPageV2.jsx`), kept in one place so a claim can
 * never drift between the two.
 *
 * ROSTER: real, product-owner-cleared student results (approved to publish by
 * name + college on 2026-07-07). Photos live in public/testimonials/ (320px
 * square WebP, face-centred; see the README there). A null `img` means no
 * photo has been matched to that student yet; the Avatar renders initials.
 *
 * PRICING_INCLUDES: the six lines the pricing section promises. Every one of
 * them is a shipped capability; do not add a line the product does not have.
 */

export const ROSTER = [
  { img: '/testimonials/jake-c.webp', name: 'Jake C.', meta: 'Princeton University', from: '1420', to: '1540',
    quote: 'The best decision I made in my whole SAT journey. It found the exact grammar slips costing me points and drilled them until they were gone.' },
  { img: '/testimonials/gino-s.webp', name: 'Gino S.', meta: 'University of Florida · Honors', from: '1220', to: '1490',
    quote: 'It taught me to see the SAT as patterns, not random questions. My score jumped 270 points and I earned over $350K in scholarships.' },
  { img: null, name: 'Sansai H.', meta: 'Villanova University', from: '1250', to: '1430',
    quote: 'I stopped chasing volume and started following a real system. The improvement felt structural — it just clicked into place.' },
  { img: '/testimonials/rocco-d.webp', name: 'Rocco D.', meta: 'Fordham University', from: '1180', to: '1420',
    quote: "I couldn't have gotten these results without SEVA. By test day I wasn't guessing anymore — I was executing." },
  { img: '/testimonials/luca-s.webp', name: 'Luca S.', meta: 'Tufts University', from: '1280', to: '1410',
    quote: 'It matched the intensity I bring to the field. Once I saw the structure beneath each question, my accuracy and timing transformed.' },
];

export const PRICING_INCLUDES = [
  '2,200+ hand-authored practice questions',
  '12 full-length adaptive practice tests',
  'Six-class error diagnosis after every test',
  'Targeted drills for the exact question types you miss',
  'AI tutor with step-by-step, inline graphs',
  'A study plan built around your gaps',
];
