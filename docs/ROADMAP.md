# Product and technical roadmap

Roadmap is milestone-based, not calendar-based. Do not promise launch dates until hosting, ownership, budget and contributors are confirmed.

## M0 — Foundation and validation
- [ ] Create GitHub repository and protect `main`.
- [ ] Pin upstream Zulip and OpenClassify references/versions.
- [ ] Review licenses, notices, dependency licenses and branding requirements.
- [ ] Confirm target domain, VPS budget, email provider and object storage.
- [ ] Validate Zulip authentication and API requirements.
- [ ] Run OpenClassify locally and inspect its extension points.
- [ ] Write threat model and data-retention policy.

**Exit criteria:** repeatable local setup, approved architecture, no unresolved licensing blocker.

## M1 — Community pilot
- [ ] Deploy isolated Zulip staging instance.
- [ ] Configure Romanian, Italian and Russian language experience where supported.
- [ ] Create initial streams and moderation roles.
- [ ] Configure email verification and abuse reporting.
- [ ] Test Android browser/PWA usage and push notification behaviour.
- [ ] Recruit a small pilot group and collect feedback.

**Exit criteria:** members can join, find relevant streams, post topics, report abuse and receive reliable notifications.

## M2 — Marketplace pilot
- [ ] Deploy OpenClassify staging.
- [ ] Configure country, region, province and city taxonomy for Italy and Moldova.
- [ ] Create categories: jobs, housing, vehicles, services, goods.
- [ ] Localize UI and listing fields in `ro`, `it`, `ru`.
- [ ] Configure listing moderation, scam reporting and seller contact protections.
- [ ] Test image uploads, search, filters, mobile listing creation and admin workflows.

**Exit criteria:** users can publish, find, edit, report and moderate listings on mobile.

## M3 — Unified portal
- [ ] Build mobile-first portal shell and navigation.
- [ ] Add service discovery cards and deep links into chat/marketplace.
- [ ] Implement central OIDC only after compatibility proof-of-concept.
- [ ] Add account-linking and account-recovery flows.
- [ ] Add unified profile basics without duplicating sensitive service data.
- [ ] Add analytics with privacy-conscious consent and retention.

**Exit criteria:** coherent navigation and verified account linking; no unsafe cross-service identity assumptions.

## M4 — Launch hardening
- [ ] Production TLS, security headers, rate limits and admin MFA.
- [ ] Automated backups and tested restore drills.
- [ ] Monitoring, alerting, error tracking and log retention.
- [ ] GDPR privacy notice, terms, cookie policy and data-subject request process.
- [ ] Moderation handbook, escalation and appeals process.
- [ ] Load test, accessibility review and Android device testing.
- [ ] Incident response and rollback runbooks.

**Exit criteria:** operational readiness review passed.

## M5 — Growth and monetization
- [ ] Verified business profiles.
- [ ] Featured listings and transparent paid plans.
- [ ] Sponsored posts with clear labeling.
- [ ] Local city/community pages and SEO.
- [ ] Partnerships with associations and Moldovan businesses.
- [ ] Measure activation, weekly active members, listing success and report resolution time.

## MVP non-goals
- No custom replacement for Zulip chat.
- No custom classifieds engine.
- No payments or escrow until legal, fraud and chargeback processes are designed.
- No public directory of personal phone numbers.
- No automatic cross-posting of private messages into public streams.
