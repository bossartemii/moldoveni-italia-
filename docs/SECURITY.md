# Security and privacy baseline

- Never commit `.env`, API tokens, SMTP credentials, private keys or database dumps.
- Use unique credentials and database users per service.
- Require MFA for privileged/admin accounts.
- Restrict admin panels by role and, where practical, network access.
- Enforce HTTPS and secure cookie settings.
- Rate-limit login, registration, password reset, messaging and listing creation.
- Verify email addresses and provide account recovery.
- Provide report/block tools and a documented moderation escalation path.
- Scan uploads, restrict file types/size and use non-executable object storage.
- Keep audit logs for privileged actions; define retention and access rules.
- Encrypt backups, store them separately and test restores.
- Define deletion/export workflows across portal, Zulip and OpenClassify.
- Minimize personal data and avoid exposing phone/email addresses by default.
- Complete GDPR legal review before production launch.
