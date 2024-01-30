import { ExpSectionLayout } from "@components/sectionContainer";
import { SectionSelector } from "@components/sectionSelector";
import { portfolioData } from "@utils/sectionData";
import { ExpHeading, ExpSubHeading } from "./expHeadings";
import ExpExtended from "./expExtended";
import ExpSummary from "./ExpSummary";

export const ExperienceSection = ({ sectionName }: { sectionName: string }) => {
  const { experienceBranch } = portfolioData;
  const { experiences } = experienceBranch;
  return (
    <ExpSectionLayout sectionName={sectionName}>
      <SectionSelector
        branchName={experienceBranch.branchTitle}
        isSelectedBranch
      />
      {experiences.length <= 3 ? (
        <ExpExtended experiences={experiences} />
      ) : (
        <ExpSummary experiences={experiences} />
      )}
    </ExpSectionLayout>
  );
};
