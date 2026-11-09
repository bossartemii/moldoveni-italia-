# Architecture

## High-level topology

```text
                         Internet
                            |
                    HTTPS reverse proxy
                            |
                 Moldoveni-Italia Portal
                    /             \
             Identity/OIDC       API facade
                 |              /       \
           OIDC clients     Zulip API   OpenClassify API
                                |             |
                           Zulip stack   OpenClassify stack
                           own database  own database
```

The portal is the product front door, not a replacement for either upstream application. Community and marketplace remain independently deployable services.

## Integration boundaries

### Zulip
- Use Zulip's supported API for provisioning users, streams and selected integrations.
- Model community spaces as streams and discussions as topics.
- Start with a small, curated stream taxonomy: Annunci ufficiali, Italia, Moldova, Lavoro, Casa, Trasporti, Servizi, Domande.
- Avoid building a parallel chat implementation in the portal.
- Confirm the exact supported authentication mode and mobile push-notification implications before choosing the identity provider.

### OpenClassify
- Use its own application database and storage.
- Configure categories and locations for Italy and Moldova.
- Keep buyer/seller conversations in the marketplace context; use Zulip for community discussion, not as a substitute for transactional inboxes.
- Extend through documented modules/events/API where possible; avoid modifying core files.

### Identity
- Target a central OpenID Connect identity provider, subject to compatibility verification for the selected Zulip release and OpenClassify integration.
- Map a stable external subject (`sub`) to each service's local user.
- Do not assume matching email addresses are sufficient identity proof.
- Define account linking, email verification, recovery, deactivation and deletion flows before enabling SSO.
- If a fully shared login is not practical for MVP, ship with separate service sessions and a clear account-linking path rather than a fragile custom authentication bridge.

### Data ownership
- Portal owns portal preferences and integration mappings only.
- Zulip owns messages, streams, topics and community memberships.
- OpenClassify owns listings, offers, seller profiles and marketplace reviews.
- Never share database credentials across services.
- Use webhooks/events or API calls for cross-service workflows.

## Initial technology choices

- Zulip: upstream supported release and official Docker image or documented native installation.
- OpenClassify: upstream Laravel 13 / PHP 8.4+ codebase as currently documented; validate exact PHP and PostgreSQL constraints against the pinned commit.
- Portal: defer framework selection until the first UX prototype; keep it independently deployable.
- Database: PostgreSQL per service where supported.
- Edge: Caddy or Traefik with automatic TLS.
- Files: object storage for user uploads when moving beyond a small pilot.
- Observability: structured logs, uptime checks, error tracking and backup monitoring.

## Deployment environments

- `local`: developer machines and seeded test data.
- `staging`: realistic integration environment with non-production accounts.
- `production`: isolated secrets, restricted admin access, backups and monitoring.

## Domain proposal

- `moldoveni-italia.<domain>` — public portal.
- `chat.moldoveni-italia.<domain>` — Zulip.
- `market.moldoveni-italia.<domain>` — OpenClassify.

Use a domain actually owned by the project; these are proposed hostnames, not confirmed DNS records.
