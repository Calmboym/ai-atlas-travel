# BOOTSTRAP_SPEC.md

Source documents used: `PRD.md`, `ARCHITECTURE.md`, `GUIDELINES.md`, `ROADMAP.md`, `DEBUG_LOG.md`, `WORKFLOW.md`, `MASTER_BUILD_PROMPT.md`, `DESIGN_TOKENS.md` (§40 Approved Libraries), `GUIDELINES.md` §7 (AI folder structure). `DEBUG_LOG.md`'s M0 record is the primary source, since it is the actual completion record for Phase 0, not just the target spec.

Confidence scale used throughout: **Documented** (stated explicitly) · **Reconstructed — framework-necessary** (not independently decided in Atlas docs, but mechanically required by a documented technology choice) · **Reconstructed — inferred** (a reasonable inference from related documented facts, not stated directly).

---

### File: `docker-compose.yml`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md — "Docker: docker-compose.yml (5 services, healthchecks, volumes)"; ARCHITECTURE.md §9-10 (Postgres, Redis, Qdrant).
**Confidence:** File count/existence — Documented. Service count (5) — Reconstructed, inferred (matches the 5 confirmed infra components: postgres, redis, qdrant, backend, frontend). Healthchecks/volumes presence — Documented. Exact image tags, ports, credentials — Reconstructed, inferred (not given anywhere).
**Missing information:** exact 5 service names, image tags, port numbers, credential values.

### File: `backend/Dockerfile.backend`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md — "Dockerfile.backend (uv-based, multi-stage)".
**Confidence:** uv package manager, multi-stage build — Documented. Base image tag, Python version, stage structure, entrypoint module path — Reconstructed, inferred.
**Missing information:** Python version; exact backend entrypoint filename/module path (assumed `app.main:app`, not confirmed).

### File: `frontend/Dockerfile.frontend`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md — "Dockerfile.frontend (pnpm, standalone output, multi-stage)"; DEBUG_LOG.md Known Issues — "pnpm 11 build scripts blocked on Windows" (confirms pnpm major version 11) and "Build succeeds via `next build` directly" (confirms the build command).
**Confidence:** pnpm (v11), standalone output, multi-stage, `next build` command — Documented. Base image tag, Node.js version, exact stage layout — Reconstructed, framework-necessary (standalone output's runtime file layout follows Next.js's own documented mechanism, not an Atlas decision).
**Missing information:** Node.js version.

### File: `backend/pyproject.toml`
**Reason:** confirmed package manager is uv (DEBUG_LOG.md), which conventionally uses pyproject.toml; file itself not independently named.
**Documentation references:** DEBUG_LOG.md M0 record (fastapi, sqlalchemy async, alembic, redis, qdrant, structlog, pydantic-settings all named) and Known Issues (mypy strict + --ignore-missing-imports).
**Confidence:** Dependency *choices* (fastapi, sqlalchemy, alembic, redis, qdrant-client, structlog, pydantic-settings) — Documented. mypy config — Documented. asyncpg, uvicorn, openai, pytest, build-system — Reconstructed, framework-necessary (required for the documented stack to actually run/build/test, but not named verbatim).
**Missing information:** all package version numbers; whether pytest is actually the adopted test framework (GUIDELINES.md §14 requires backend unit/integration tests but does not name a framework).

### File: `frontend/package.json`
**Reason:** required by the documented pnpm/Next.js frontend.
**Documentation references:** ARCHITECTURE.md §4 (Next.js, TypeScript, Tailwind, shadcn/ui, TanStack Query, Zustand, React Hook Form, Zod, next-intl); DESIGN_TOKENS.md/DESIGN_SYSTEM.md §40 Approved Libraries (Radix UI, Framer Motion, Lucide, Class Variance Authority, clsx); DEBUG_LOG.md (Next.js 16, Tailwind v4).
**Confidence:** Library *choices* listed — Documented (each cited above). Specific npm package names for those choices (e.g. `@tanstack/react-query`, `@radix-ui/react-slot`, `lucide-react`) — Reconstructed, inferred (the standard npm package for a documented library, not itself stated verbatim). All version numbers — Reconstructed, inferred, using only the two facts that are documented (Next.js major version 16, Tailwind major version 4); every other version is `"latest"`, explicitly not a real pin.
**Missing information:** all real version pins; whether shadcn/ui components were actually scaffolded in M0 (shadcn/ui is not a runtime npm dependency — it is a CLI that copies component source into the repo, so no shadcn package appears here; no evidence of which components, if any, were generated); GSAP, Three.js, and Howler.js are documented as *approved* (DESIGN_SYSTEM.md §40) but scoped to landing-page/storytelling use, and DEBUG_LOG.md's M0 record only describes a minimal smoke health page, not landing-page work — so these three are deliberately omitted rather than included on the strength of "approved" alone; see MISSING_INFORMATION.md.

### File: `frontend/tsconfig.json`
**Reason:** required by the documented TypeScript + Next.js frontend.
**Documentation references:** GUIDELINES.md §4 — "Strict TypeScript mode enabled".
**Confidence:** `"strict": true` — Documented. Every other compiler option — Reconstructed, framework-necessary (the minimum Next.js itself requires to build; a general Next.js mechanic, not an Atlas decision).
**Missing information:** none beyond what's noted inline in the file's own `_provenance` key.

### File: `frontend/next.config.ts`
**Reason:** required by the documented Next.js + next-intl + standalone-output choices.
**Documentation references:** DEBUG_LOG.md — "standalone output"; ARCHITECTURE.md §4 / DEBUG_LOG.md — next-intl.
**Confidence:** `output: "standalone"` — Documented. next-intl plugin wrapper — Reconstructed, framework-necessary (a mechanic of the next-intl library, included because next-intl's adoption is documented).
**Missing information:** none beyond `output` and the next-intl wrapper — no other Atlas-specific Next.js config options are documented anywhere.

### File: `frontend/postcss.config.mjs`
**Reason:** required by the documented Tailwind v4 choice.
**Documentation references:** DEBUG_LOG.md — "Tailwind v4".
**Confidence:** Reconstructed, framework-necessary in full (Tailwind v4 requires this integration package to function at all; not an independent Atlas decision, but a direct consequence of the documented Tailwind v4 choice).
**Missing information:** none — this file has no meaningful alternative given the documented Tailwind version.

### File: `frontend/eslint.config.mjs`
**Reason:** a "frontend lint" CI step is confirmed to exist.
**Documentation references:** DEBUG_LOG.md — "CI/CD: GitHub Actions (backend lint+test, frontend lint+build, Docker build)".
**Confidence:** *That* a lint step exists — Documented. *That the tool is ESLint* and *that the Next.js preset is used* — Reconstructed, inferred (Next.js's own documented default; not independently named as "ESLint" anywhere in Atlas documentation).
**Missing information:** the linting tool's name; any Atlas-specific lint rules (none are documented).

### File: `.env.example`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md M0 record (file existence); DEBUG_LOG.md Known Issues — `OPENAI_API_KEY` named verbatim; GUIDELINES.md §17 (Dev/Test/Prod environments, secrets never shared).
**Confidence:** File existence, and the `OPENAI_API_KEY` variable name — Documented. All other variable names (`DATABASE_URL`, `REDIS_URL`, `QDRANT_URL`, `APP_ENV`, `NEXT_PUBLIC_API_URL`) — Reconstructed, inferred (the underlying services/needs are documented; the exact variable names are not).
**Missing information:** every variable name except `OPENAI_API_KEY`; actual required vs. optional status of each.

### File: `.gitignore`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md M0 record (file existence); stack facts as cited per entry inline in the file.
**Confidence:** File existence — Documented. All entries — Reconstructed, framework-necessary (standard ignore patterns for the documented Next.js/pnpm/Python/uv/Docker stack).
**Missing information:** the original file's actual exact contents (only its existence, not its content, is documented).

### File: `README.md`
**Reason:** DEBUG_LOG.md confirms this file was delivered in M0.
**Documentation references:** DEBUG_LOG.md M0 record (file existence); PRODUCT_VISION.md §1/§11, PRD.md (Product Description), ARCHITECTURE.md §4/§6/§9-13 (stack table), DEBUG_LOG.md (stack table, structure).
**Confidence:** File existence — Documented. Stack table content — Documented (each row cited). Project description — Documented (paraphrased, not the original file's actual wording, which is not preserved anywhere). Structure section, dev commands — Reconstructed, inferred/framework-necessary.
**Missing information:** the original file's actual wording/structure (only its existence and general subject matter are documented).

### File: `.github/workflows/ci.yml`
**Reason:** DEBUG_LOG.md confirms GitHub Actions CI with three job categories.
**Documentation references:** DEBUG_LOG.md — "CI/CD: GitHub Actions (backend lint+test, frontend lint+build, Docker build)"; Known Issues — mypy strict + `--ignore-missing-imports`, backend tests "continue-on-error" due to needing live Postgres/Redis/Qdrant, `next build` as the confirmed frontend build command.
**Confidence:** Platform (GitHub Actions), 3 job categories, mypy step + flags, continue-on-error on backend tests, `next build` command — Documented. Trigger conditions, exact step names, third-party action versions, backend test command/framework — Reconstructed, inferred.
**Missing information:** exact trigger branches/events; backend test framework/command.

### Folder scaffolding: `backend/app/`, `ai/prompts/`, `ai/agents/`, `ai/schemas/`, `ai/evaluations/`, `docs/`
**Reason:** paths and structure explicitly named in source documentation.
**Documentation references:** DEBUG_LOG.md Architecture Decisions — "ai/ package independent from backend/app/" (confirms both `ai/` and `backend/app/` as paths); GUIDELINES.md §7 — "Recommended structure: ai/ ├── prompts/ ├── agents/ ├── schemas/ └── evaluations/"; DEBUG_LOG.md — "6 source-of-truth docs in docs/" (confirms a `docs/` folder).
**Confidence:** `backend/app/` and `ai/` as sibling top-level-ish paths — Documented. The four `ai/` subfolders — Documented (verbatim from GUIDELINES.md §7, presented there as "recommended," not mandated — treated here as adopted since DEBUG_LOG.md's M0 record describes exactly this AI-layer structure as delivered). `docs/` — Documented to exist; which exact 6 documents live in it is Reconstructed, inferred (see MISSING_INFORMATION.md). Folders are created empty (`.gitkeep` only) — no code or content is placed inside any of them, since actual file contents for `ai/config.py`, `backend/app/main.py`, etc. are not specified by documentation and would constitute invented implementation, out of scope for a scaffold reconstruction.

### Not generated: `frontend/proxy.ts`
**Reason for omission:** DEBUG_LOG.md Architecture Decisions confirms this file's *existence and purpose* ("Frontend renamed middleware.ts → proxy.ts | Next.js 16 deprecated middleware convention") but gives no information about what logic it contains. Any real content (route matching, redirects, auth checks) would be invented, and would risk overlapping with "no authentication" / "no business logic" scope limits. Recorded in `MISSING_INFORMATION.md` instead of generated.

### Not generated: `pnpm-workspace.yaml`, `turbo.json`
**Reason for omission:** "monorepo" is documented generically (DEBUG_LOG.md: "Repository structure (monorepo)"), but no document states that pnpm *workspaces* (multiple JS packages) are in use, nor names any monorepo build-orchestration tool (Turborepo, Nx, etc.). Only one frontend JS package is described anywhere. Generating either file would assert a structure that isn't actually confirmed. Recorded in `MISSING_INFORMATION.md`.

### Not generated: `playwright.config.ts`, `vitest.config.ts` / `jest.config.ts`
**Reason for omission:** GUIDELINES.md §14 "recommends" Playwright for E2E but does not confirm it was adopted (it is absent from DEBUG_LOG.md's actual M0 delivered-components list). No frontend unit-test runner is named anywhere, even as a recommendation. Recorded in `MISSING_INFORMATION.md`.

### Not generated: `prettier` config (any filename)
**Reason for omission:** no document mentions Prettier, or any code-formatting tool, by name. Recorded in `MISSING_INFORMATION.md`.

### Not generated: root-level `package.json` separate from `frontend/package.json`
**Reason for omission:** given the pnpm-workspace ambiguity above, and that only one JS package (the frontend) is described anywhere, inventing a separate root manifest would assert an unconfirmed structure. `frontend/package.json` is generated as the one confirmed JS package.

---

## Verification Table

| File | Documentation Source | Confidence |
|---|---|---|
| `docker-compose.yml` | DEBUG_LOG.md | Documented (existence, count, healthchecks, volumes) / Reconstructed (contents) |
| `backend/Dockerfile.backend` | DEBUG_LOG.md | Documented (uv, multi-stage) / Reconstructed (contents) |
| `frontend/Dockerfile.frontend` | DEBUG_LOG.md | Documented (pnpm v11, standalone, multi-stage, build cmd) / Reconstructed (contents) |
| `backend/pyproject.toml` | DEBUG_LOG.md | Documented (dependency choices, mypy config) / Reconstructed (versions, some deps) |
| `frontend/package.json` | ARCHITECTURE.md §4, DESIGN_SYSTEM.md §40, DEBUG_LOG.md | Documented (library choices, 2 major versions) / Reconstructed (package names, all versions) |
| `frontend/tsconfig.json` | GUIDELINES.md §4 | Documented (strict mode) / Reconstructed (rest) |
| `frontend/next.config.ts` | DEBUG_LOG.md, ARCHITECTURE.md §4 | Documented (standalone output, next-intl adoption) / Reconstructed (wiring) |
| `frontend/postcss.config.mjs` | DEBUG_LOG.md | Reconstructed, framework-necessary |
| `frontend/eslint.config.mjs` | DEBUG_LOG.md | Documented (lint step exists) / Reconstructed (tool identity) |
| `.env.example` | DEBUG_LOG.md | Documented (existence, `OPENAI_API_KEY`) / Reconstructed (other names) |
| `.gitignore` | DEBUG_LOG.md | Documented (existence) / Reconstructed (contents) |
| `README.md` | DEBUG_LOG.md, PRODUCT_VISION.md, PRD.md, ARCHITECTURE.md | Documented (existence, stack facts) / Reconstructed (wording) |
| `.github/workflows/ci.yml` | DEBUG_LOG.md | Documented (platform, 3 jobs, mypy flags, continue-on-error, build cmd) / Reconstructed (rest) |
| Folder scaffolding (`backend/app/`, `ai/*/`, `docs/`) | DEBUG_LOG.md, GUIDELINES.md §7 | Documented |

Every file above traces to at least one cited document. No file was generated from unstated assumptions about "typical" project setups beyond what is explicitly labeled "Reconstructed — framework-necessary" (i.e., a mechanical requirement of a *documented* technology choice, not a stylistic preference).
