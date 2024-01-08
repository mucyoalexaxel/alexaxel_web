"use client";

import { AboutSection, HeroSection } from "@components/index";
import { HERO, ABOUT, PRE_ABOUT } from "@utils/sectionNames";
import { WordFadeIn } from "@components/FadeInComponents";
import { portfolioData } from "@utils/sectionData";
import SectionLayout from "@components/sectionContainer";
import PreAbout from "@components/PreAbout";

export default function Home() {
  const heroSectionData = portfolioData.heroSection;
  const { text1 } = heroSectionData;
  return (
    <>
      <HeroSection sectionName={HERO} />
      <PreAbout sectionName={PRE_ABOUT}/>
      <AboutSection sectionName={ABOUT} />
    </>
  );
}
