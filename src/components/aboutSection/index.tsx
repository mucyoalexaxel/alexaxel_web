import SectionLayout from "@components/sectionContainer";
import { SelectedBranch } from "./selectedBranch";
import {
  SelectedBranchContent,
  SelectedBranchSubContent,
} from "./selectedBranchContent";
import { portfolioData } from "@utils/sectionData";

const { develop, aboutBranch, experienceBranch, projectsBranch } =
  portfolioData;

const branchData = [aboutBranch, experienceBranch, projectsBranch];

export const AboutSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <SectionLayout sectionName={sectionName}>
      <div className="w-full flex flex-col border-primary gap-2 md:col-span-6 lg:col-span-5">
        <div className="flex flex-col gap-2">
          <SelectedBranch branchName={develop.branchTitle} isSelectedBranch />
          <SelectedBranchContent>
            <div className="flex flex-col gap-2">
              <p className="text-apple-light font-medium text-sm tracking-wider">
                {develop.textContent}
              </p>
              <span className="text-[#3BFF18A1] text-xs tracking-wider">
                ~ {develop.subtitleCaption}
              </span>
            </div>
          </SelectedBranchContent>
        </div>

        <div className="flex flex-col gap-2">
          {branchData.map((item, index) => (
            <div className="" key={index}>
              <SelectedBranch
                branchName={item.branchTitle}
                isCheckoutStatement
              />
              <SelectedBranchContent>
                <SelectedBranch
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
        </div>
      </div>
    </SectionLayout>
  );
};
