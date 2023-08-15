"use client";

import { AboutSection, HeroSection } from "@components/index";
import { HERO, ABOUT } from "@utils/sectionNames";

export default function Home() {
  return (
    <>
      <HeroSection sectionName={HERO} />
      <AboutSection sectionName={ABOUT} />
    </>
  );
}
