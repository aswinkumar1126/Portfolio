# Portfolio

My personal portfolio. Built with Next.js, Tailwind CSS and TypeScript, icons from lucide-react, font is Poppins.

Pages: Home, About, Contact.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run test:e2e     # playwright tests
```

First time running the tests you may need `npx playwright install chromium`.

## Folder layout

Code is grouped by page (module) instead of by file type. `app/` only holds routes and stays thin.

```
app/                  routes (page.tsx, layout.tsx, api/contact)
modules/
  home/               api, components, constants, hooks, types
  about/              same
  contact/            same
  shared/             header, footer, site info used on every page
tests/                playwright specs
docs/                 notes on how things work
```

More detail in [docs/structure.md](docs/structure.md). Where to change content is in [docs/content.md](docs/content.md).

## Contact form (EmailJS)

Create `.env.local` with the values from your EmailJS dashboard:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=template_yyy   # optional, the reply the visitor gets
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

In the auto reply template set "To Email" to `{{to_email}}`. Both templates can use `{{name}}`, `{{email}}`, `{{reply_to}}`, `{{to_name}}`, `{{to_email}}` and `{{message}}`. Restart `npm run dev` after editing the file.
