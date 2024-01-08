import SectionLayout from "@components/sectionContainer";
import { SectionSelector } from "./sectionSelector";
import {
  SectionWrapper,
  SelectedBranchSubContent,
} from "./SectionWrapper";
import { portfolioData } from "@utils/sectionData";

const { develop, aboutBranch, experienceBranch, projectsBranch } =
  portfolioData;

const branchData = [aboutBranch, experienceBranch, projectsBranch];

export const AboutSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <SectionLayout sectionName={sectionName}>
      <SectionWrapper>
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <SectionSelector
              branchName={develop.branchTitle}
              isSelectedBranch
            />
            <div className="flex flex-col gap-2 px-2">
              <p className="text-white font-semibold text-lg tracking-wider leading-snug">
                {develop.textContent}
              </p>
              <span className="text-primary-goldish text-sm tracking-wider font-light">
                ~ {develop.subtitleCaption}
              </span>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2">
          {branchData.map((item, index) => (
            <div className="" key={index}>
              <SectionSelector
                branchName={item.branchTitle}
                isCheckoutStatement
              />
              <SelectedBranchContent>
                <SectionSelector
                  branchName={`feature/${item.branchTitle}`}
                  isSelectedBranch
                />
                <SelectedBranchSubContent>
                  <h1 className="text-apple-light text-2xl font-medium tracking-wider">
                    {item.subtitle}
                  </h1>
                  {item.textData.map((textDataItem, index) => (
                    <div
                      key={index}
                      className=""
                    >
                      <span className="text-apple-light text-base font-normal tracking-wide">
                        {textDataItem.title}
                      </span>
                      <span className="text-apple-light text-base font-normal tracking-wide">
                        {textDataItem.textContent}
                      </span>
                    </div>
                  ))}
                </SelectedBranchSubContent>
              </SelectedBranchContent>
            </div>
          ))}
        </div> */}
        </div>
      </SectionWrapper>
    </SectionLayout>
  );
};
