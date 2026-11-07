# Changing content

All the text on the site lives in constants files, no need to touch components.

| What | File |
| --- | --- |
| Name, role, email, location | `modules/shared/constants/site.ts` |
| Social links | `modules/shared/constants/socials.ts` |
| Home summary, services, skills, strengths, projects | `modules/home/constants/content.ts` |
| About bio, experience, education | `modules/about/constants/content.ts` |

Resume download: put the file at `public/resume.pdf`.

## TODO

- [ ] Add live and GitHub links to each project in `modules/home/constants/content.ts`
- [ ] Connect an email service in `app/api/contact/route.ts`
