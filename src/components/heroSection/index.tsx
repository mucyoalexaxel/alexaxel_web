import DeveloperMobile from "@assets/webIcons/DeveloperMobile.svg";
import DottedGrid from "@assets/webIcons/dottedGrid.svg";
import TextContainer from "./TextContainer";
import DetailButton from "./personalDetailCTA/detailButton";
import { HeroLayout } from "@components/sectionContainer";
import { portfolioData } from "@utils/sectionData";
import { DeveloperDeskSVG } from "@components/svgs";
import HeroArrow from "./HeroArrow";

export const HeroSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <HeroLayout sectionName={sectionName}>
      <TextContainer />

      {/* @mucyoalexaxel Work on this Developer SVG Or Replace It */}
      {/* <div className="hidden md:w-full md:col-start-7 md:col-end-13 md:grid">
        <DeveloperMobile className="w-full row-start-1" />
      </div> */}

      <HeroArrow />
    </HeroLayout>
  );
};

export { DetailButton };
