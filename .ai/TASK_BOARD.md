# TASK_BOARD.md

**Last updated:** 2026-07-24 (ATLAS-P1-AUTH-01 completed)
**Document tier:** Living — updated every session via `MASTER_RULES.md` §21.

Columns: Backlog → Todo → In Progress → Blocked → Review → Done. Every card cites its WBS ID and required documentation set so it can be picked up without re-deriving context.

---

## Bootstrap — ✅ COMPLETE (2026-07-22)

*(unchanged from the 2026-07-22 baseline — see that record for the three bootstrap cards)*

## Done (Phase 0 — Foundation)

*(unchanged — fourteen cards, all completed 2026-07-13 per `DEBUG_LOG.md`. See the 2026-07-22 baseline for the full itemization.)*

## Done (Phase 1 — Core Platform MVP) — NEW

| Task ID | Title | Priority | Docs Used | Completed |
|---|---|---|---|---|
| ATLAS-P1-AUTH-01 | Registration UI (form + validation) | High | MASTER_RULES.md, INDEX.md §AUTH, WORK_BREAKDOWN_STRUCTURE.md §Phase1→AUTH, PRD.md §6, APPLICATION_LAYOUT_GUIDE.md §Authentication Layout, ACCESSIBILITY.md §Forms, DESIGN_TOKENS.md Part 6 | 2026-07-24 |

**Acceptance criteria verification:** real-time validation ✅ (react-hook-form, onBlur + onChange revalidate + onSubmit) · accessible labels, no placeholder-only ✅ (visible `<label>` + `htmlFor` on every field, verified by the "renders ... with visible programmatic labels" test) · 09 §Forms compliance ✅ (aria-describedby, aria-invalid, aria-live error announcements, required-field asterisk + accessible description, focus moves to first invalid field on failed submit). Two accessibility **findings** (not failures introduced by this task — pre-existing token values) logged in `PROJECT_STATE.md` for a Design Tokens amendment decision.

---

## Todo (Phase 1 — Core Platform MVP)

*(ATLAS-P1-AUTH-01 removed — see Done above. All other rows unchanged from the 2026-07-22 baseline.)*

| Task ID | Title | Priority | Dependencies | Docs Required | Est. Context |
|---|---|---|---|---|---|
| ATLAS-P1-AUTH-02 | Registration backend endpoint + password hashing | High | none | INDEX.md §AUTH | M |
| ATLAS-P1-AUTH-03 | OAuth button scaffolding (Google/Apple) | Medium | AUTH-01 ✅ | INDEX.md §AUTH | S |
| ATLAS-P1-AUTH-04 | Email verification flow | Medium | AUTH-02 | INDEX.md §AUTH | S |
| ATLAS-P1-AUTH-05 | Login UI + backend endpoint | High | AUTH-02 | INDEX.md §AUTH | M |
| ATLAS-P1-AUTH-06 | Forgot-password flow | Medium | AUTH-05 | INDEX.md §AUTH | S |
| ATLAS-P1-AUTH-07 | Session/token handling + rate limiting | High | AUTH-02, AUTH-05 | INDEX.md §AUTH | M |
| ATLAS-P1-AUTH-08 | Route guards (frontend) + RBAC scaffold (backend) | Medium | AUTH-07 | INDEX.md §AUTH | M |
| ATLAS-P1-PROF-01 | Progressive profile-collection UI | Medium | AUTH-07 | INDEX.md §PROF | M |
| ATLAS-P1-PROF-02 | User Profile Service (backend CRUD) | Medium | AUTH-07 | INDEX.md §PROF | S |
| ATLAS-P1-PROF-03 | Profile page shell | Low | PROF-02 | INDEX.md §PROF | S |
| ATLAS-P1-LAND-01 | Marketing layout shell (Header/Hero/CTA/Footer) | High | none | INDEX.md §LAND | M |
| ATLAS-P1-LAND-02 | AI search box + rotating example prompts | Medium | LAND-01 | INDEX.md §LAND | S |
| ATLAS-P1-LAND-03 | "Continue as Guest" entry wiring | Medium | LAND-01 | INDEX.md §LAND | S |
| ATLAS-P1-CHAT-01 | Chat page layout (sidebar/conversation/composer) | High | none | INDEX.md §CHAT | M |
| ATLAS-P1-CHAT-02 | Message components (Bubble/Streaming/Typing) | High | CHAT-01 | INDEX.md §CHAT | M |
| ATLAS-P1-CHAT-03 | Conversation Manager (basic, single-model) backend | High | none | INDEX.md §CHAT | L |
| ATLAS-P1-CHAT-04 | Streaming endpoint (SSE) | High | CHAT-03 | INDEX.md §CHAT | M |
| ATLAS-P1-MEM-01 | Guest session memory (client-side, temporary) | Medium | CHAT-02 | INDEX.md §MEM | S |
| ATLAS-P1-MEM-02 | Authenticated preference storage (basic) | Medium | AUTH-07 | INDEX.md §MEM | S |
| ATLAS-P1-DASH-01 | Dashboard shell (opens to last conversation / Welcome) | Medium | CHAT-03, AUTH-07 | INDEX.md §DASH | M |

*(AUTH-03's dependency is now satisfied — moved conceptually from "blocked-by-dependency" to "ready," flagged with ✅ above; the row itself stays in Todo until picked up.)*

---

## In Progress

*(empty — ATLAS-P1-AUTH-01 completed and closed out this session; nothing picked up since)*

## Blocked

*(empty)*

## Review

*(empty)*

## Backlog (Phase 2–7)

*(unchanged from the 2026-07-22 baseline — see `WORK_BREAKDOWN_STRUCTURE.md` for detail)*

---

**END OF DOCUMENT (this update)**

**LOCK STATUS:**
**LIVING — baseline approved 2026-07-22, updated 2026-07-24 (ATLAS-P1-AUTH-01 completion). Future changes only via the governed End-of-Session Checklist in `MASTER_RULES.md` §21.**
