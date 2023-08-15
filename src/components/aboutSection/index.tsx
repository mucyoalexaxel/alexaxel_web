import SectionLayout from "@components/sectionContainer";
import { SelectedBranch } from "./selectedBranch";
import {
  SelectedBranchContent,
  SelectedBranchSubContent,
} from "./selectedBranchContent";

export const AboutSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <SectionLayout sectionName={sectionName}>
      <div className="h-full w-full flex flex-col border-primary gap-2 md:col-span-6 lg:col-span-5">
        <div className="flex flex-col gap-2">
          <SelectedBranch branchName={"about-me"} isSelectedBranch />
          <SelectedBranchContent>
            <div className="flex flex-col gap-2">
              <p className="text-apple-light font-medium text-sm tracking-wider">
                “Every great developer you know got there by solving problems
                they were unqualified to solve until they actually did it.”
              </p>
              <span className="text-[#3BFF18A1] text-xs tracking-wider">
                ~ Patrick McKenzie
              </span>
            </div>
          </SelectedBranchContent>
        </div>

        <div className="flex flex-col gap-2">
          <SelectedBranch branchName={"about-me"} isCheckoutStatement />
          <SelectedBranchContent>
            <SelectedBranch branchName={"feature/about-me"} isSelectedBranch />
            <SelectedBranchSubContent>
              <h1 className="text-apple-light text-2xl font-medium tracking-wider">
                About Me
              </h1>
              <span className="text-apple-light text-base font-normal tracking-wide">
                As a FullStack Developer, I delight in designing
                captivating UI and sturdy backend solutions. My core dedication is
                to transform ideas into tech-driven realities. Each challenge
                for me is a chance to learn and grow.
              </span>
              {/* <span className="text-apple-light text-base font-normal tracking-wide">
                As a Full Stack TypeScript Developer, I delight in designing
                captivating interfaces and sturdy backend solutions. From UI and
                UX planning to post-launch maintenance, I invest in all project
                aspects, including SEO for maximum reach. My core dedication is
                to transform ideas into tech-driven realities. Each challenge
                for me is a chance to learn and grow.
              </span> */}
            </SelectedBranchSubContent>
          </SelectedBranchContent>
        </div>
      </div>
    </SectionLayout>
  );
};
