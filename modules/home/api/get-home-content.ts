import { HIGHLIGHTS, PROJECTS, SERVICES, SKILLS, STRENGTHS, SUMMARY } from "../constants/content";

// Static for now. If the content ever moves to a CMS or database, only
// these functions need to change, the components don't care.
export async function getSummary() {
  return { summary: SUMMARY, highlights: HIGHLIGHTS };
}

export async function getServices() {
  return SERVICES;
}

export async function getSkills() {
  return SKILLS;
}

export async function getStrengths() {
  return STRENGTHS;
}

export async function getProjects() {
  return PROJECTS;
}
