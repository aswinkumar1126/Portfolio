import Hero from "@/modules/home/components/hero";
import Services from "@/modules/home/components/services";
import Skills from "@/modules/home/components/skills";
import Strengths from "@/modules/home/components/strengths";
import Projects from "@/modules/home/components/projects";
import { getProjects, getServices, getSkills, getStrengths, getSummary } from "@/modules/home/api/get-home-content";

export default async function Home() {
  const [{ summary, highlights }, services, skills, strengths, projects] = await Promise.all([
    getSummary(),
    getServices(),
    getSkills(),
    getStrengths(),
    getProjects(),
  ]);

  return (
    <>
      <Hero summary={summary} highlights={highlights} />
      <Services services={services} />
      <Skills skills={skills} />
      <Strengths strengths={strengths} />
      <Projects projects={projects} />
    </>
  );
}
