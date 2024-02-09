/* eslint-disable @next/next/no-img-element */
import BabAppImage from "@assets/images/Bag App SS.jpg";
import { ProjectSectionLayout } from "@components/sectionContainer";
import { SectionSelector } from "@components/sectionSelector";
import { portfolioData } from "@utils/sectionData";

import { Tech_Item } from "@components/aboutSection/SkillsSection";
import { OpenLinkSVG } from "@components/svgs";

export default function ProjectSection({
  sectionName,
}: {
  sectionName: string;
}) {
  const { projectsBranch } = portfolioData;
  const { projects } = projectsBranch;
  console.log(BabAppImage.src);
  return (
    <ProjectSectionLayout sectionName={sectionName}>
      <SectionSelector
        branchName={projectsBranch.branchTitle}
        isSelectedBranch
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, idx) => (
          <div className="w-full h-[360px] bg-black rounded-lg" key={idx}>
            <div className="relative w-full h-fit">
              <div className="absolute w-full top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 h-[160px] z-20 rounded-t-lg" />
              <img
                src={BabAppImage.src}
                alt=""
                className="contain w-full sm:w-[380px] h-[160px] rounded-t-lg z-10"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex justify-between items-center">
                <p className="text-[#F3FCEE] text-base font-bold capitalize tracking-wider leading-none">
                  {project.projectName}
                  <span className="text-primary-goldish">.</span>
                </p>
                <a href={project.projectUrl} className="group" target="_blank">
                  <OpenLinkSVG className="text-white group-hover:text-primary-goldish" />
                </a>
              </div>
              <p className="text-white/60 font-light text-sm tracking-wide">
                {project.projectCaption}
              </p>
              <Tech_Item skills={project.technologies} />
            </div>
          </div>
        ))}
      </div>
    </ProjectSectionLayout>
  );
}
