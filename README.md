# Moldoveni-Italia

A digital hub connecting Moldovans in Italy with Moldova and the wider diaspora.

**Architecture:** hybrid, with independent upstream applications:
- **Zulip** for structured community messaging (streams, topics, DMs).
- **OpenClassify** for classifieds, jobs, services, seller profiles and reviews.
- **Moldoveni-Italia Portal** for the public website, unified navigation, identity integration, discovery and shared product experience.

This repository is the project control plane: architecture decisions, integration code, deployment configuration and product documentation. Upstream Zulip and OpenClassify code should remain separate dependencies/services; do not copy their source trees into this repository.

## Product principles

1. Mobile-first, installable PWA.
2. Romanian (`ro`), Italian (`it`) and Russian (`ru`) from the start.
3. Italy-first launch, with Moldova as a first-class geography.
4. Privacy, moderation, anti-scam controls and clear reporting paths.
5. Separate databases and deployment lifecycles for Zulip and OpenClassify.
6. No shared database tables and no direct cross-service SQL joins.

## Planned services

| Service | Responsibility | Upstream |
|---|---|---|
| `portal` | Landing pages, directory, navigation, user dashboard | Custom |
| `community` | Streams, topics, group conversations, DMs | Zulip |
| `marketplace` | Listings, jobs, services, profiles, reviews | OpenClassify |
| `identity` | Central identity / OIDC broker | To be selected |
| `edge` | TLS, routing, rate limits, security headers | Caddy or Traefik |

## Repository status

This is an architecture and delivery scaffold, not a production deployment. Service versions, authentication flow, hosting provider, domain and operational secrets must be validated before production.

See:
- [Architecture](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Architecture decisions](docs/DECISIONS.md)
- [Security baseline](docs/SECURITY.md)

## Upstream projects

- Zulip: https://github.com/zulip/zulip — Apache-2.0.
- OpenClassify: https://github.com/openclassify/openclassify — repository currently identifies MIT; re-check upstream notices and dependencies at the exact commit before redistribution.

## Local development

The first implementation milestone is to create service-specific deployment manifests after choosing the VPS and domain. Do not put production secrets in Git. Use `.env.example` for variable names only and a secret manager or protected host environment for real values.
