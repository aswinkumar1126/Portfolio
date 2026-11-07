# Structure

Each page has a folder under `modules/` with the same set of subfolders:

- `api/` functions that return the data for the page. Right now they just return the constants, but the pages already go through them, so switching to a real source later only touches this folder. The contact module is the exception, its `send-message.ts` really does call `/api/contact`.
- `components/` UI that only that page uses.
- `constants/` static content (text, project list, skills, regex...).
- `hooks/` client side state. Only added where there is real state: mobile menu, project filter, contact form.
- `types/` TypeScript types for the above.

Anything used by more than one page goes in `modules/shared`.

## Rules I'm following

- Pages in `app/` fetch data through the module `api/` and pass it down as props.
- Components don't import constants directly (except shared site info), they get data from props.
- Server components by default, `"use client"` only for things that need state.

## Contact form

Form -> `useContactForm` -> `sendMessage` -> `POST /api/contact` (`app/api/contact/route.ts`).
The same `validateContact` runs in the browser and on the server.
The route currently only logs the message, an email service still needs to be hooked up (see the TODO in the route).

## Gotchas

- `next.config.ts` has `cacheComponents` turned on, so avoid `new Date()` / `Date.now()` in server components. That's why the footer year is a constant in `shared/constants/site.ts`.
- This Next.js version differs from older ones, check `node_modules/next/dist/docs/` before using an API from memory.
