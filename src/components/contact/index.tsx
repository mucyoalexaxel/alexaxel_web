import { ProjectSectionLayout } from "@components/sectionContainer";

export default function ContactSection({
  sectionName,
}: {
  sectionName: string;
}) {
  return (
    <ProjectSectionLayout sectionName={sectionName}>
      <section
        id={sectionName}
        className="text-center py-10 md:py-[100px] max-w-screen-lg m-auto"
      >
        <div className="w-11/12 xl:w-[84%] max-w-screen-2xl m-auto xl:px-36">
          <div className="m-auto text-center">
            <h2 className="dark:text-custom_white text-custom_black font-extrabold mb-8 tracking-tighter text-3xl md:text-5xl">
              Reach Me!
            </h2>
            <p className="dark:text-custom_gray text-custom_black m-auto mb-16 flex-1 text-center max-w-[600px]">
              You can reach out to me anytime by clicking on any social icon in
              the bottom right corner of the footer or, click the button below.
              My inbox is always open, I will try my best to get back to you as
              soon as possible.
            </p>
          </div>
          <a
            href="mailto:mucyoalexaxel@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="submit"
              className="bg-primary-goldish text-sm font-medium py-2 px-3 md:p-3 rounded-lg md:px-5 dark:text-black hover:opacity-90 text-white disabled:opacity-70 disabled:cursor-not-allowed undefined"
            >
              Say hello!
            </button>
          </a>
        </div>
      </section>
    </ProjectSectionLayout>
  );
}
