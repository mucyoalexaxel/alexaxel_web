import { ExpSectionLayout } from "@components/sectionContainer";
import { SectionSelector } from "@components/sectionSelector";
import { portfolioData } from "@utils/sectionData";

export const ExperienceSection = ({ sectionName }: { sectionName: string }) => {
  const { experienceBranch } = portfolioData;
  const { experiences } = experienceBranch;
  return (
    <ExpSectionLayout sectionName={sectionName}>
      <SectionSelector
        branchName={experienceBranch.branchTitle}
        isSelectedBranch
      />
      <div className="ExperienceWrapper flex flex-col gap-2 mt-5">
        {experiences.map((experience, idx) => (
          <div
            className="flex flex-col gap-2 py-10 expSectionBorder"
            key={idx}
          >
            <div className="flex flex-col gap-1 mb-1">
              <ExpHeading textContent={experience.jobTitle} />
              <ExpSubHeading textContent={experience.company} />

              <p className="flex gap-2 sm:gap-1 text-white/60 font-light text-sm">
                <span>{experience.startMonth}</span>
                <span>{experience.startYear}</span>
                <span>-</span>
                <span>{experience.endMonth}</span>
                <span>{experience.endYear}</span>
              </p>
            </div>

            <ol className="flex flex-col gap-1">
              {experience.bullets.map((bulletText, index) => (
                <li
                  className="text-white/90 text-lg font-light capitalize tracking-wide leading-relaxed mb-1"
                  key={index}
                >
                  {bulletText}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </ExpSectionLayout>
  );
};

const ExpHeading = ({ textContent }: { textContent: string }) => (
  <p className="text-[#F3FCEE] text-xl lg:text-2xl font-bold capitalize tracking-wider leading-none">
    {textContent}
    <span className="text-primary-goldish">.</span>
  </p>
);

const ExpSubHeading = ({ textContent }: { textContent: string }) => (
  <p className="text-white/90 text-base lg:text-lg font-[350] capitalize tracking-wider leading-none">
    {textContent}
    <span className="text-primary-goldish">.</span>
  </p>
);
