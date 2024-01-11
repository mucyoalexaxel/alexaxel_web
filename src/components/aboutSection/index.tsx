import SectionLayout from "@components/sectionContainer";
import { SectionSelector } from "./sectionSelector";
import {
  SectionLeft,
  SectionRight,
  SectionWrapper,
  SelectedBranchSubContent,
} from "./SectionWrapper";
import { portfolioData } from "@utils/sectionData";
import SkillsSection from "./SkillsSection";

const { develop, aboutBranch, experienceBranch, projectsBranch } =
  portfolioData;

const branchData = [aboutBranch, experienceBranch, projectsBranch];

export const AboutSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <SectionLayout sectionName={sectionName}>
      <SectionWrapper>
        <SectionLeft className="w-full flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <SectionSelector
              branchName={develop.branchTitle}
              isSelectedBranch
            />
            <p className="text-white font-light text-lg tracking-wider leading-snug sm:pl-3">
              <span className="font-medium text-2xl text-white">&quot;</span>
              {develop.textContent}
              <span className="font-medium text-2xl text-white">&quot;</span>
            </p>
            <span className="text-primary-goldish text-sm tracking-wider font-light">
              ~ {develop.subtitleCaption}
            </span>
          </div>

          <div className="w-full flex flex-col gap-5">
            <SectionSelector
              branchName={aboutBranch.branchTitle}
              isSelectedBranch
            />
            <p className="text-white font-light text-lg tracking-wider leading-snug sm:pl-3">
              {aboutBranch.textData.at(0)?.textContent}
            </p>
          </div>
        </SectionLeft>

        <SectionRight className="mt-5">
          {aboutBranch.skills.map((skill_item, index) => (
            <SkillsSection
              title={skill_item.title}
              skills={skill_item.skill_items}
              key={index}
            />
          ))}
        </SectionRight>
      </SectionWrapper>
    </SectionLayout>
  );
};
