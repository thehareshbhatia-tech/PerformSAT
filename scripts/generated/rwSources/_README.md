# rwSources — R&W Source Database

This directory contains curated registries of real sources used by the PerformSAT R&W authoring pipeline. Every passage in the new R&W bank must anchor on an entry in one of these files.

The directory exists because the 2026-05-05 R&W authenticity audit (`docs/RW_AUTHENTICITY_AUDIT.md`) found that 36% of the existing R&W bank failed the College Board authenticity bar — most fundamentally because researchers, scholars, literary works, and quantitative datasets were *fabricated* rather than drawn from real sources. This registry exists to make fabrication impossible.

## Files

| File | Purpose | Schema |
|---|---|---|
| `literaryWorks.json` | Public-domain literary excerpts | author, title, year, excerpts |
| `researchers.json` | Real researchers + claims (STEM and humanities together) | name, field, publications |
| `crossTextPairs.json` | Real engaging-essay pairs / debates | text1, text2, engagement |
| `quantitativeData.json` | Real datasets with realistic variance | source, table, findings |
| `topicAllowlist.md` | Topic guidance (what CB favors, avoids, handles carefully) | markdown |

## How the authoring pipeline uses these

`scripts/authorRWItem.mjs` (Phase 5):

1. Reads the skill spec for the item-to-author (e.g., `central-ideas-and-details`, `medium`).
2. Filters the appropriate source file for entries with `suitableForSkills` matching the spec.
3. Picks one entry (uniformly at random or weighted by topic-area diversity).
4. Constructs an authoring prompt with: the source data + the rubric + a "do not template against existing items" instruction.
5. LLM authors the item.
6. Lints validate the source attribution (entity exists in the registry).

The rubric (`docs/CB_RW_AUTHENTICITY_RUBRIC.md` §10) defines the schemas and §8 defines the lints that read these files.

## Adding new entries

To add a new researcher / literary work / dataset / cross-text pair:

1. Verify the entry is real and verifiable. The lint will reject any entry not cross-checkable.
2. Add to the appropriate JSON file via PR.
3. Run `node scripts/validateRWBank.mjs --validate-sources` to confirm the entry parses and meets schema.
4. Once merged, the authoring pipeline picks it up automatically.

Submitters must include a `notes` field with the verification source URL and a reviewer-signoff line (e.g., `"reviewer": "hareshbhatia", "verifiedAt": "2026-05-05"`).

## Verification process

Each entry should be cross-checkable via:

- **Wikipedia** (for established figures) — link to the article in the entry's `notes` field.
- **University faculty pages or institutional bios** (for working researchers) — link to the institutional page.
- **Project Gutenberg / Internet Archive / Wikisource** (for public-domain literary) — link to the digital text.
- **Pew / Gallup / NOAA / USGS / NASA / Census / CDC / BLS / EIA** (for datasets) — link to the official statistical release.
- **DOI / JSTOR / publisher's official page** (for peer-reviewed papers) — DOI preferred; JSTOR or publisher URL acceptable.
- **Library of Congress / Yale Beinecke / Smithsonian** (for archival material) — link to the archival record.

If you can't find a verification source for an entry, mark `verifiable: false` and explain in `notes`. The lint will quarantine these and they won't be used by the authoring pipeline. Quarantined entries are reviewed monthly.

## Sourcing guidelines

- **Diversity:** every file targets at least 40% women, 30% POC representation. CB strongly favors this — see `CB_RW_AUTHENTICITY_REFERENCE.md` §5.5 (the documented PT4-11 names: Miljkovic, Okolo, Gómez-Bahamón, Tanaka, Garcia, Tan, Wong, Tsinnajinnie, etc.).
- **Real claims:** every `claim` field must paraphrase a real published claim. Never invent claims. Even if the researcher exists, the specific claim about that researcher must be verifiable (per `CB_RW_AUTHENTICITY_RUBRIC.md` §F-Reviewer-Verification).
- **Source URLs:** must be real, working URLs at the time of entry. URL rot is monitored separately (see "Updating sources" below).
- **Public-domain checks:** for literary works, verify the work is in the US public domain (typically pre-1929 as of 2026, but check `publicDomainYear` in each entry). For non-US authors, verify under the relevant jurisdiction's PD rules.
- **No fabricated names:** the audit caught fabricated researchers ("Aiyana Standing Bear," "Kalinda Brave Bull," "Inez Park," "Maya Khoury," "Reza Ahmadi," "Tomás Reyna," "Akira Tanaka") and fabricated literary authors (24 invented short-story authors across the 12 PerformSAT tests). The lint enforces real-name validation by cross-checking against authoritative external sources.
- **No fabricated literary works:** "*The Glass Tide* by Welsh writer Olwen Tregaron, 1936" and "*La Pastorella di Volterra*" — both fabricated, both flagged. Every literary work must be verifiable through Project Gutenberg, Wikisource, Internet Archive, or a peer-reviewed edition.
- **No catastrophe-adjacent backdrops:** see `topicAllowlist.md` ❌ section. Topic-allowlist scan is enforced at draft time.

## Updating sources

**Schedule: review and refresh quarterly.**

- Remove entries with broken `sourceUrl`s (URL-rot lint runs nightly; flagged URLs go to a manual-review queue).
- Update `publications` arrays for active researchers (new papers from 2024-2026 should be added as they appear in the relevant indexes).
- Add new entries from recent CB practice tests as they release. When CB publishes PT12, PT13, etc., harvest the cited researchers and works into this database.
- Refresh `quantitativeData.json` with new dataset releases (annual NOAA / USGS / CDC / BLS updates).
- Audit `topicAllowlist.md` for new sensitive topics that emerge (e.g., new health crises, new policy debates) — sensitive-topic list is reviewed semi-annually with a domain-expert reviewer.

## Schema validation

Run `node scripts/validateRWBank.mjs --validate-sources --strict` to:

- Parse every JSON file.
- Check schema compliance per entry (required fields, type correctness).
- Flag any `verifiable: false` entries (these are quarantined from authoring).
- Verify no entries are cited in >1 file (the schema requires single-file membership across the registry).
- Confirm `id` uniqueness across all files.
- Check that every `url` field returns 200 OK (URL-rot scan, run in `--strict` mode only).
- Confirm every researcher has at least one verified publication with a DOI or institutional URL.
- Confirm every literary work has a `publicDomain: true` flag with a verified `publicDomainYear`.

## Diversity targets per file

| File | Target | Rationale |
|---|---|---|
| `literaryWorks.json` | Phase-4 seed: 60 entries (47% women, 33% POC); growth target ≥150 | PT4-11 documented spread (`CB_RW_AUTHENTICITY_REFERENCE.md` §5.1) |
| `researchers.json` | Phase-4 seed: 100 entries (84% women, 55% POC); growth target ≥300 | CB's documented STEM + humanities mix |
| `crossTextPairs.json` | Phase-4 seed: 25 entries; growth target ≥40 across 6 relationship types | Per `CB_RW_AUTHENTICITY_RUBRIC.md` §9.6 |
| `quantitativeData.json` | Phase-4 seed: 25 entries; growth target ≥40 across 7 topic areas | Planetary, climate, biology, public health, demographics, education, economics |

## Open questions

- **Cross-domain researchers:** scholars at the humanities-STEM boundary (e.g., Robin Wall Kimmerer — ethnobotany / Indigenous knowledge) get a single entry in `researchers.json` with both fields tagged in `field` (e.g., `"field": "ethnobotany / Indigenous studies"`). The pipeline filters by skill-suitability, not by hard-coded humanities/STEM split.
- **Public-domain edge cases:** for non-US authors (e.g., Latin American, Russian, Japanese), the PD year varies by jurisdiction. Convention: use US PD rules unless the work is cited from a translation, in which case the translator's PD status applies.
- **Living-researcher consent:** named living researchers may opt out. If a researcher requests removal, mark `approved: false` in their entry; the lint excludes them from authoring.

## Reference documents

- `docs/CB_RW_AUTHENTICITY_REFERENCE.md` — what authentic CB looks like (827 lines, PT4-11 evidence).
- `docs/CB_RW_AUTHENTICITY_RUBRIC.md` — the rubric this directory enforces (§10 source authenticity, §8 lints).
- `docs/RW_AUTHENTICITY_AUDIT.md` — the audit that triggered this database (executive summary).
- `docs/RW_NON_SEC_SAMPLE_AUDIT.md` — non-SEC failure modes documented in detail.
- `docs/RW_SEC_AUDIT.md` — per-question SEC verdicts.
- `topicAllowlist.md` — what CB favors / avoids / handles carefully (this directory).
