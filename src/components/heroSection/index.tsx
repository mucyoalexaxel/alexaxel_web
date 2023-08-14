import DeveloperMobile from "@assets/webIcons/DeveloperMobile.svg";
import DottedGrid from "@assets/webIcons/dottedGrid.svg";
import Header from "./Header";
import TextContainer from "./TextContainer";
import DetailButton from "./personalDetailCTA/detailButton";
import SectionLayout from "@components/sectionContainer";

export const HeroSection = ({ sectionName }: { sectionName: string }) => {
  return (
    <SectionLayout sectionName={sectionName}>
      <TextContainer />
      <div className="hidden md:w-full md:col-start-9 md:col-end-[15] md:grid lg:grid-rows-svgBlog">
        <DeveloperMobile className="w-full row-start-1" />
      </div>
    </SectionLayout>
  );
};

export { DetailButton, Header };
