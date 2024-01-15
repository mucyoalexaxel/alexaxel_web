"use client";

import { AboutSection, HeroSection } from "@components/index";
import { HERO, ABOUT, PRE_ABOUT, EXPERIENCE } from "@utils/sectionNames";
import { WordFadeIn } from "@components/FadeInComponents";
import { portfolioData } from "@utils/sectionData";
import PreAbout from "@components/PreAbout";
import { ExperienceSection } from "@components/experienceSection";

export default function Home() {
  return (
    <>
      <HeroSection sectionName={HERO} />
      <PreAbout sectionName={PRE_ABOUT} />
      <AboutSection sectionName={ABOUT} />
      <ExperienceSection sectionName={EXPERIENCE} />
    </>
  );
}
