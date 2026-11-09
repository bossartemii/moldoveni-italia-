# Architecture decision records

## ADR-001 — Hybrid architecture
**Status:** Accepted in principle.

Use Zulip for community messaging and OpenClassify for classifieds. Keep each upstream service independently deployable and upgradeable. The portal provides the unified product experience.

**Why:** avoids rebuilding mature messaging and marketplace capabilities.

**Trade-offs:** two application stacks, duplicated operational concerns, integration and identity complexity.

## ADR-002 — No shared database
**Status:** Accepted.

Each service owns its database. Cross-service workflows use APIs, webhooks or explicit integration mappings.

**Why:** preserves upgradeability and limits data coupling.

## ADR-003 — Identity federation is gated
**Status:** Proposed; proof-of-concept required.

Target OIDC-based single sign-on only after testing the exact Zulip release and OpenClassify implementation. Do not implement a home-grown password synchronization system.

## ADR-004 — Multilingual launch
**Status:** Accepted.

Initial locales are Romanian, Italian and Russian. Italian and Romanian are required for launch; Russian is included as a first-class locale, not machine-translated as an afterthought.

## ADR-005 — Mobile-first web/PWA
**Status:** Accepted.

Prioritize responsive web and PWA before native mobile apps. Validate notifications and installability on real Android devices.
