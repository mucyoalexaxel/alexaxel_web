"use client";

import PreAbout from "@components/PreAbout";
import ContactSection from "@components/contact";
import { ExperienceSection } from "@components/experienceSection";
import { AboutSection, HeroSection } from "@components/index";
import ProjectSection from "@components/projectsSection";
import {
  ABOUT,
  EXPERIENCE,
  HERO,
  PRE_ABOUT,
  PROJECTS,
  CONTACT_ME,
} from "@utils/sectionNames";

export default function HomePage() {
  return (
    <main className="w-full relative">
      <HeroSection sectionName={HERO} />
      <PreAbout sectionName={PRE_ABOUT} />
      <AboutSection sectionName={ABOUT} />
      <ExperienceSection sectionName={EXPERIENCE} />
      <ProjectSection sectionName={PROJECTS} />
      <ContactSection sectionName={CONTACT_ME} />
    </main>
  );
}
