"use client";

import { HeroSection } from "@components/heroSection";
import { HERO } from "@utils/sectionNames";

export default function Home() {
  return (
    <>
      <HeroSection sectionName={HERO} />
    </>
  );
}
