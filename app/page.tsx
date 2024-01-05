"use client";

import { AboutSection, HeroSection } from "@components/index";
import { HERO, ABOUT } from "@utils/sectionNames";
import { WordFadeIn } from "@components/FadeInComponents";
import { portfolioData } from "@utils/sectionData";
import SectionLayout from "@components/sectionContainer";

export default function Home() {
  const heroSectionData = portfolioData.heroSection;
  const { text1 } = heroSectionData;
  return (
    <>
      <HeroSection sectionName={HERO} />
      {/* <SectionLayout sectionName="">
        <WordFadeIn paragraph={text1} />
      </SectionLayout> */}
      <AboutSection sectionName={ABOUT} />
    </>
  );
}
