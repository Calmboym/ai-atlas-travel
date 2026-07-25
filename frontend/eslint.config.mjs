// eslint.config.mjs
//
// PARTIALLY DOCUMENTED: DEBUG_LOG.md confirms a "frontend lint" CI
// step exists ("CI/CD: GitHub Actions (backend lint+test, frontend
// lint+build, Docker build)"). It does NOT name the specific linting
// tool.
//
// RECONSTRUCTED: ESLint + eslint-config-next below are used because
// they are Next.js's own documented default tooling — a convention of
// the Next.js framework itself, not an independent Atlas decision.
// No Atlas-specific lint rules are documented anywhere, so none are
// added beyond the Next.js base preset.

import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")];

export default eslintConfig;
