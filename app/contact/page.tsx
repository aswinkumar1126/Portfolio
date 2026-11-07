import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/modules/contact/components/contact-form";
import ProfileImage from "@/modules/shared/components/profile-image";
import { SITE } from "@/modules/shared/constants/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <ProfileImage size="sm" priority />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h1>
          <p className="max-w-xl text-muted">
            Have a project in mind or just want to say hi? Send a message and I&apos;ll get back to you.
          </p>
        </div>
      </section>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12">
        <ContactForm />

        <ul className="flex flex-col gap-4 text-sm">
          <li className="flex items-center gap-3">
            <Mail size={20} className="shrink-0" />
            <a href={`mailto:${SITE.email}`} className="min-w-0 break-all hover:underline">
              {SITE.email}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={20} className="shrink-0" />
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:underline">
              {SITE.phone}
            </a>
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={20} className="shrink-0" /> {SITE.location}
          </li>
        </ul>
      </div>
    </>
  );
}
