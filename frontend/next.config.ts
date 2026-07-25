// next.config.ts
//
// DOCUMENTED: output: "standalone" — DEBUG_LOG.md M0 record:
// "Dockerfile.frontend (pnpm, standalone output, multi-stage)".
//
// RECONSTRUCTED: the next-intl plugin wrapper below is required for
// next-intl to function inside next.config (a mechanic of the
// next-intl library itself, not an Atlas-specific decision) — included
// because next-intl's adoption IS documented (ARCHITECTURE.md §4;
// DEBUG_LOG.md: "i18n (next-intl) with EN, FA (RTL), DE locales").
// No other config options are documented anywhere; none are added.

import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
};

export default withNextIntl(nextConfig);
