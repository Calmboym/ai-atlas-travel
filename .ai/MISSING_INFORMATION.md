# MISSING_INFORMATION.md

Items below are not present, or not fully present, in any of the source documents (`PRD.md`, `ARCHITECTURE.md`, `GUIDELINES.md`, `ROADMAP.md`, `DEBUG_LOG.md`, `WORKFLOW.md`, `MASTER_BUILD_PROMPT.md`, the Design Bible). Nothing here was guessed into the generated files without a corresponding "Reconstructed" label in `BOOTSTRAP_SPEC.md`.

## Version numbers
- No package version number, for any dependency, in either `frontend/package.json` or `backend/pyproject.toml`, is documented. Only two *major* versions are stated anywhere: Next.js 16 and Tailwind CSS v4 (both from `DEBUG_LOG.md`). Python version and Node.js version are not stated anywhere.

## Folder / path names
- The frontend application's top-level directory name is not documented. `DEBUG_LOG.md` names `backend/app/` and `ai/` explicitly but never gives an equivalent path for the frontend. This reconstruction uses `frontend/` as a placeholder label only.
- Whether `docs/` (confirmed to exist, holding "6 source-of-truth docs") contains exactly `PRD.md`, `ARCHITECTURE.md`, `GUIDELINES.md`, `ROADMAP.md`, `DEBUG_LOG.md`, and `MASTER_BUILD_PROMPT.md` (six documents by count) is an inference, not a confirmed list — `WORKFLOW.md` is a plausible seventh candidate that was not included in this count.
- Whether the repository uses pnpm *workspaces* (i.e., is a true multi-package JS monorepo) is not confirmed. "Monorepo" (`DEBUG_LOG.md`) is documented only at the level of "one repository containing backend, frontend, ai, and docs" — not confirmed to mean multiple JS packages under one pnpm workspace. No `pnpm-workspace.yaml` was generated as a result.
- No monorepo build-orchestration tool (Turborepo, Nx, or similar) is named anywhere. No `turbo.json` or equivalent was generated.

## Test tooling
- The backend test framework is not named. `GUIDELINES.md` §14 requires "unit tests, integration tests" but never says pytest (or anything else) by name. `pytest` appears in the generated `pyproject.toml` and CI workflow as a flagged, clearly-labeled reconstruction, not a confirmed fact.
- The frontend unit/component test runner (e.g. Vitest, Jest) is not named anywhere, not even as a recommendation. No config for one was generated.
- Playwright is described in `GUIDELINES.md` §14 as "Recommended" for E2E testing — a recommendation, not a confirmed adoption. It does not appear in `DEBUG_LOG.md`'s actual M0 delivered-components list. No `playwright.config.ts` was generated.

## Code formatting
- No document mentions Prettier, or any other code formatter, by name. No config was generated.

## `frontend/proxy.ts`
- `DEBUG_LOG.md` confirms this file exists (renamed from `middleware.ts` due to a Next.js 16 convention change) but gives zero information about what logic it contains. No file was generated; only its documented existence is noted in `BOOTSTRAP_SPEC.md`.

## Environment variables
- Only one environment variable name is documented verbatim anywhere: `OPENAI_API_KEY`. `DATABASE_URL`, `REDIS_URL`, `QDRANT_URL`, `APP_ENV`, and `NEXT_PUBLIC_API_URL` in the generated `.env.example` are reconstructed names for documented *needs* (a Postgres connection, a Redis connection, a Qdrant connection, an environment flag, a frontend→backend URL), not documented names.

## Infrastructure specifics
- `docker-compose.yml`'s exact 5 service names are not given verbatim; 5 is an inference matching the count of confirmed infrastructure pieces (Postgres, Redis, Qdrant, backend, frontend), not a documented list.
- No port numbers, image tags, or credentials for any service are documented anywhere.

## Original file contents (existence-only documentation)
`DEBUG_LOG.md` confirms these files were delivered in M0 but gives no information about their actual contents, only that they exist: `.gitignore`, `.env.example`, `README.md`. The versions in this reconstruction are built from other documented facts about the project, not from the originals' actual text, which is not preserved anywhere accessible to this task.

## Note on the two accessibility-contrast items referenced in earlier turns of this conversation
Earlier messages in this conversation contained `PROJECT_STATE.md`/`TASK_BOARD.md` content describing a completed `ATLAS-P1-AUTH-01` implementation session, including two specific WCAG contrast findings. That implementation session is not something this assistant has any record of actually performing — no registration UI, tests, or component code exist in this task's output or any prior turn this assistant produced. Nothing from that content was used as a source for any file in this reconstruction. It is noted here, once, factually, because it's the kind of provenance gap this document exists to record — not revisited further.
