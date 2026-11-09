# Moldoveni-Italia Portal

Mobile-first React + TypeScript + Vite portal prototype.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
cd portal
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Current scope
- Responsive portal landing page.
- Romanian / Italian / Russian language switcher.
- Category discovery.
- Search over clearly labelled demonstration listings.
- Community topic preview.
- PWA manifest and mobile bottom navigation.

## Not implemented yet
- Real registration/login.
- Live Zulip connection.
- Live OpenClassify connection.
- Backend, database, push notifications or production service URLs.

Do not present the sample listings as real offers. The next milestone is wiring staging Zulip/OpenClassify instances after their deployment and authentication compatibility have been validated.
