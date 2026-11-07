import type { Metadata } from "next";
import { Briefcase, GraduationCap } from "lucide-react";
import Timeline from "@/modules/about/components/timeline";
import { getAbout } from "@/modules/about/api/get-about";
import ProfileImage from "@/modules/shared/components/profile-image";
import { SITE } from "@/modules/shared/constants/site";

export const metadata: Metadata = { title: "About" };

export default async function AboutPage() {
  const { bio, experience, education } = await getAbout();

  return (
    <>
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <ProfileImage size="md" priority />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About me</h1>
            <p className="text-sm text-muted">
              {SITE.name} · {SITE.role}
            </p>
          </div>
          <div className="flex max-w-2xl flex-col gap-3 leading-7 text-muted">
            {bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
        <section className="flex flex-col gap-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <Briefcase size={20} /> Experience
          </h2>
          <Timeline items={experience} />
        </section>
        <section className="flex flex-col gap-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold">
            <GraduationCap size={20} /> Education
          </h2>
          <Timeline items={education} />
        </section>
      </div>
    </>
  );
}
