# PROJECT_STATE.md

**Baseline locked:** 2026-07-22 (Bootstrap session, post Q1–Q4 approval)
**Last updated:** 2026-07-24 (ATLAS-P1-AUTH-01 implementation session — see "Files Modified This Session (2026-07-24)" below)
**Document tier:** Living (Tier 3) — content below is updated only via the End-of-Session Checklist in `MASTER_RULES.md` §21, never by freeform mid-session edits.

---

## Bootstrap Phase: ✅ COMPLETE (2026-07-22)

Unchanged from the prior baseline — see the 2026-07-22 record below for the full account. Q1–Q4 remain approved; nothing in this session revisited them.

## Implementation Status: **AUTHORIZED — Phase 1 underway**

Implementation was explicitly authorized by the project owner on 2026-07-24, scoped to exactly `ATLAS-P1-AUTH-01`. That task is now complete (see below). Implementation of any *other* task (including `ATLAS-P1-AUTH-02`, explicitly excluded from this session's scope) still requires its own separate authorization before a future session begins it — this line should not be read as a blanket go-ahead for the rest of Phase 1.

---

**Current Phase:** Phase 1 — Core Platform MVP (underway)

**Current Milestone:** M1

**Current Module:** AUTH (Registration UI complete; Registration backend, OAuth, verification, login, session handling remain)

**Current WBS ID:** none active (ATLAS-P1-AUTH-01 completed and closed out this session)

**Current Task:** none — awaiting the project owner's next task assignment/authorization

**Last Completed Task:** `ATLAS-P1-AUTH-01` — Registration UI (form + validation) — 2026-07-24. Delivered: `RegisterForm` component (Email / Password / Confirm password, react-hook-form + zod, email normalized at the schema layer, password policy = 8-character minimum only), shared `(auth)` layout, `/register` route, 4 token-mapped UI primitives, 16 passing component/unit tests. Strictly UI-only per approved scope adjustment — no API client, service wrapper, or network call of any kind.

**Next Task (recommended, not yet authorized):** `ATLAS-P1-AUTH-02` — Registration backend endpoint + secure password storage. No dependencies; was explicitly out of scope for the just-completed session. Also newly unblocked and available: `ATLAS-P1-AUTH-03` (OAuth button scaffolding — depends on AUTH-01, now done). Independently available in parallel regardless of AUTH progress: `ATLAS-P1-LAND-01`, `ATLAS-P1-CHAT-01`, `ATLAS-P1-CHAT-03` (all have no dependencies per `WORK_BREAKDOWN_STRUCTURE.md`).

---

## Relevant Documentation (for the next task, once authorized)

**For `ATLAS-P1-AUTH-02` (Registration backend):** `MASTER_RULES.md`, `INDEX.md` §AUTH, `WORK_BREAKDOWN_STRUCTURE.md` §Phase 1 → AUTH, `PRD.md` §6/§13.13, `GUIDELINES.md` §11, `ARCHITECTURE.md` §12. Note: this task must produce a `POST /auth/register` endpoint whose request shape matches what `RegisterForm` now validates and normalizes — email lowercased+trimmed, password minimum 8 characters (see `apps/web/lib/validation/auth-schema.ts` for the exact zod schema, and this file's Finding 2 below for a contrast issue the backend task does not need to act on, only be aware exists elsewhere in the stack).

## Relevant Files

**Delivered this session (`ATLAS-P1-AUTH-01`):** `apps/web/app/(auth)/layout.tsx`, `apps/web/app/(auth)/register/page.tsx`, `apps/web/components/auth/register-form.tsx`, `apps/web/components/auth/register-page-content.tsx`, `apps/web/components/ui/{input,label,button,form-error}.tsx`, `apps/web/lib/validation/auth-schema.ts`, `apps/web/lib/tokens/motion.ts`, `apps/web/app/globals.css`, `apps/web/app/layout.tsx`, plus project scaffold/config files — see the handoff summary for the complete list.

**For `ATLAS-P1-AUTH-02`:** backend auth service, path to be confirmed against the actual repository — still not accessible from this Claude Project; this session, like the bootstrap session, worked in a fresh sandboxed environment with no pre-existing repository (see this file's "Environment note" below).

---

## Resolved Decisions (approved 2026-07-22)

Unchanged — Q1 (canonical numbering), Q2 (Timeline/Trip Details dependency direction), Q3 (Document 26 status), Q4 (language scope) all remain as approved 2026-07-22. See that baseline text (preserved in version control / prior exports of this file) for the full detail; not repeated here to keep this update focused.

## Other Important Decisions (carried from Bootstrap)

Unchanged from the 2026-07-22 / 2026-07-23 baseline (canonical phase numbering, documentation priority order, Design Bible amendment process, tiering of the twelve planning documents, the LOCKED/IMMUTABLE governance clarification). Not repeated here.

## Environment Note (new, 2026-07-24)

Confirmed again this session (per `MASTER_RULES.md`'s "never make assumptions" principle — checked, not assumed): no repository exists anywhere accessible in the working environment, matching the same note recorded for `ATLAS-P1-AUTH-02` in the 2026-07-22 baseline. `ATLAS-P1-AUTH-01` was implemented as a fresh, minimal `apps/web` scaffold (Next.js 16 / TypeScript strict / Tailwind v4, matching the Phase 0 stack in `DEBUG_LOG.md`) containing only what the registration route needs — not a Phase 0 rebuild. A future session with real repository access should merge this `apps/web` output into the actual Phase-0-established repo structure rather than treating it as the whole frontend app.

## Findings Requiring Project Owner Decision (new, 2026-07-24)

Two accessibility findings surfaced during `ATLAS-P1-AUTH-01`, both computed with the standard WCAG relative-luminance formula (not eyeballed). Per `MASTER_RULES.md` §2 ("if two documents conflict, stop and report the conflict — do not choose one yourself"), both were implemented **exactly as `DESIGN_TOKENS.md` currently specifies**, not silently patched, and are flagged here for a `DESIGN_TOKENS.md` amendment decision:

- **Finding 1 — Button text contrast, marginal.** `color-on-primary` (white) text on `color-primary` (primary-500, `#2F6BFF`) computes to **4.4988:1**, just under the 4.5:1 AA minimum that `MASTER_RULES.md` §12 and `DESIGN_TOKENS.md`'s own "Accessibility Requirement" section both mandate for normal text. `primary-600` (the existing `color-primary-hover` token) clears it at 5.81:1.
- **Finding 2 — Default input/interactive border contrast, systemic.** `color-border` (neutral-200, `#E2E8F0`) against `color-surface` (white) computes to **1.23:1** — well under the 3:1 SC 1.4.11 non-text-contrast minimum for interactive component boundaries. Not patched locally in the Input component: this is the same token pairing used throughout the whole documented palette (cards, dividers, inputs, dropdowns), so a one-off substitution in a single component would create inconsistency rather than fix the underlying calibration. Even `neutral-300` (1.49:1) and `neutral-400` (2.56:1) fall short of 3:1 against white; only `neutral-500` (4.76:1) clears it, but that token is documented as "Muted Text," not a border color.

Recommend both be resolved via the existing `DESIGN_BIBLE_AMENDMENTS.md` process (Amendment 004+), not decided unilaterally by an implementation session.

## Known Issues (carried from M0, per DEBUG_LOG.md)

Unchanged from the prior baseline (pnpm build-script quirk on Windows, backend tests need live Postgres/Redis/Qdrant, AI smoke tests skip without `OPENAI_API_KEY`, mypy strict-mode flags on untyped externals). One new, session-specific item:

- **`next/font/google` cannot reach `fonts.googleapis.com`** in a network-restricted build environment (encountered, then worked around, this session by switching to the self-hosted `@fontsource/plus-jakarta-sans` package instead — see `apps/web/README.md`). Worth confirming the real CI/dev environment doesn't have the same restriction before assuming this workaround is still necessary there.

## Open Questions

Findings 1 and 2 above are open (need a Design Tokens amendment decision). No other open questions.

## Files Modified This Session (2026-07-24, ATLAS-P1-AUTH-01 implementation)

See the chat handoff summary for the complete, file-by-file list (23 files created under `apps/web/`, none modified/deleted — this was a fresh scaffold, nothing pre-existing to touch). `PROJECT_STATE.md` (this file) and `TASK_BOARD.md` updated to close out `ATLAS-P1-AUTH-01`. `WORK_BREAKDOWN_STRUCTURE.md` **not** modified — task scope did not change from what was already defined.

## Notes for Next Session

`ATLAS-P1-AUTH-01` is done, verified (typecheck, lint, 16/16 tests, production build, and a manual Playwright visual/interaction smoke test all passed), and out of scope for further work unless the project owner asks for changes. The two accessibility findings above are the main thing needing a decision before more of the visual system compounds on top of the current token values. Next task is `ATLAS-P1-AUTH-02` if the project owner wants to complete the registration flow, or any of the other unblocked Phase 1 tasks listed above — **but, as always, only once explicitly authorized.**

---

**LOCK STATUS:** LIVING — this baseline approved 2026-07-22, corrected 2026-07-23 (AUTH task-boundary reconciliation), updated 2026-07-24 (ATLAS-P1-AUTH-01 completion). Future changes only via `MASTER_RULES.md` §21's End-of-Session Checklist.
