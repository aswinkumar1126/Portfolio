import { BIO, EDUCATION, EXPERIENCE } from "../constants/content";

export async function getAbout() {
  return { bio: BIO, experience: EXPERIENCE, education: EDUCATION };
}
