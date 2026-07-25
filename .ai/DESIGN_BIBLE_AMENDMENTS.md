# DESIGN_BIBLE_AMENDMENTS.md

**Status:** ACTIVE — new amendments are appended below; approved amendments are never edited or removed. A correction to an approved amendment is itself a new, separately-numbered amendment referencing it.
**Purpose:** the 26 Design Bible source documents are immutable (`WORKFLOW.md`). This file is the only sanctioned mechanism for correcting or extending them. It supersedes specific passages without touching the original files. Every future session treats "original document + any amendment referencing it" as the combined source of truth, per `DEVELOPMENT_EXECUTION_PLAN.md` §2.

---

## Amendment 001 — Canonical Design Bible Numbering

**Status:** APPROVED
**Approved:** 2026-07-22, by project owner (Q1)
**Amends:** the numbering used across the 26 Design Bible documents' self-declared headers and cross-document "Dependencies" citations; supersedes the informal status note appended to `AI_EXPERIENCE.md`.
**Reference:** `DOCUMENTATION_AUDIT_REPORT.md`, Finding 2.

**Text of amendment:** the following numbering is canonical for all future references to the Design Bible, in documentation, code comments, and tooling:

```
01 Brand Guidelines                    14 Design Tokens
02 Product Vision                      15 Visual QA Guidelines
03 Design System                       16 Onboarding Experience
04 Component Inventory                 17 AI Experience
05 Information Architecture            18 Dashboard Experience
06 User Flows                          19 Trip Planning Experience
07 Psychology Guidelines               20 Trip Details Experience
08 Motion System                       21 Premium Microinteractions
09 Accessibility                       22 Travel Timeline Experience
10 Content Strategy                    23 Notification & Communication Experience
11 Copywriting Guidelines              24 Design QA Checklist
12 Responsive System                   25 Frontend Implementation Guidelines
13 Iconography & Illustration          26 Application Layout Guide
```

Specifically superseded wherever they appear in the original, unedited documents: the "03_DESIGN_PRINCIPLES.md" citations in `NOTIFICATION_COMMUNICATION_EXPERIENCE.md` and `TRIP_PLANNING_EXPERIENCE.md`; the "04_DESIGN_SYSTEM.md" citation in `PREMIUM_MICROINTERACTIONS.md`; the "07_COMPONENT_LIBRARY.md" citation in `TRAVEL_TIMELINE_EXPERIENCE.md`; the "08_CONTENT_STRATEGY.md" / "10_ACCESSIBILITY.md" swapped citations in `NOTIFICATION_COMMUNICATION_EXPERIENCE.md`; and the entire trailing status note in `AI_EXPERIENCE.md`. All are read as referring to the table above; original text is left untouched.

**Next available Design Bible slot:** 27.

---

## Amendment 002 — Trip Details ↔ Travel Timeline Dependency Correction

**Status:** APPROVED
**Approved:** 2026-07-22, by project owner (Q2)
**Amends:** the "Dependencies" header block of `TRAVEL_TIMELINE_EXPERIENCE.md` (Document 22).
**Reference:** `DOCUMENTATION_AUDIT_REPORT.md`, Finding 1; `DEPENDENCY_GRAPH.md` §3.

**Text of amendment:** Document 22's dependency on `20_TRIP_DETAILS_EXPERIENCE.md` is struck. The relationship is one-directional: **Document 20 depends on Document 22**, not the reverse — consistent with Document 20's own text ("The detailed behavior is defined in: 22_TRAVEL_TIMELINE_EXPERIENCE.md"). Document 22 may still be read alongside Document 20 as a related document, but no build, review, or planning process may treat Document 22 as blocked on Document 20.

---

## Amendment 003 — Design Bible Completion Supersession (Document 26)

**Status:** APPROVED
**Approved:** 2026-07-22, by project owner (Q3)
**Amends:** the closing statement of `FRONTEND_IMPLEMENTATION_GUIDELINES.md` (Document 25): *"With this document, the Atlas Design Bible (Documents 01–25) is considered complete and locked."*
**Reference:** `DOCUMENTATION_AUDIT_REPORT.md`, Finding 3.

**Text of amendment:** `APPLICATION_LAYOUT_GUIDE.md` (Document 26) is confirmed as a formally approved extension of the Design Bible. Document 25's closing statement is superseded: the Design Bible is 26 documents, complete and locked, as of this amendment. This does not retroactively fix Document 26's own missing Dependencies block or lock-status footer (see `DOCUMENTATION_AUDIT_REPORT.md`, Findings 4–5) — those gaps remain, noted, in the unedited original.

---

## Log

| # | Title | Status | Date |
|---|---|---|---|
| 001 | Canonical Design Bible Numbering | Approved | 2026-07-22 |
| 002 | Trip Details ↔ Travel Timeline Dependency Correction | Approved | 2026-07-22 |
| 003 | Design Bible Completion Supersession (Document 26) | Approved | 2026-07-22 |

**Next amendment number:** 004. Note: the approved Q4 decision (language scope) is a roadmap/scope decision, not a correction to a Design Bible document's stated content, so it does not receive an amendment entry here — it is recorded in `.ai/PROJECT_STATE.md` and `MASTER_IMPLEMENTATION_ROADMAP.md` instead.
