"use client";

import PreAbout from "@components/PreAbout";
import { ExperienceSection } from "@components/experienceSection";
import { AboutSection, HeroSection } from "@components/index";
import ProjectSection from "@components/projectsSection";
import { ABOUT, EXPERIENCE, HERO, PRE_ABOUT, PROJECTS } from "@utils/sectionNames";

export default function HomePage() {
  return (
    <>
      <HeroSection sectionName={HERO} />
      <PreAbout sectionName={PRE_ABOUT} />
      <AboutSection sectionName={ABOUT} />
      <ExperienceSection sectionName={EXPERIENCE} />
      <ProjectSection sectionName={PROJECTS} />
    </>
  );
}
