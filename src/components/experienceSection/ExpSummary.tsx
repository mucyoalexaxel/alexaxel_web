import { ExpExtendedProps } from "./expExtended";
import { ExpHeading, ExpSubHeading } from "./expHeadings";
import ExpWrapper from "./ExpWrapper";

export default function ExpSummary({
  experiences,
}: {
  experiences: ExpExtendedProps[];
}) {
  return (
    <ExpWrapper>
      <div className="expSectionBorder flex flex-col gap-5">
        {experiences
          .slice(0, 3)
          .map((experience: ExpExtendedProps, idx: number) => (
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
                    className="text-white/90 text-lg font-light capitalize tracking-wide leading-relaxed mb-1 flex gap-1 items-start"
                    key={index}
                  >
                    <span>-</span>
                    <span>{bulletText}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        <a
          href="/resume.pdf"
          className="underline font-bold underline-offset-4 flex gap-x-3 border-b border-b-[#c3f00d26] pb-10 pt-[10px]"
        >
          View full resume
        </a>
      </div>
    </ExpWrapper>
  );
}
