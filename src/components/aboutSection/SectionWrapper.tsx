import { GitBranch } from "@phosphor-icons/react";

export interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
}

export const SectionWrapper = ({
  children,
}: SectionWrapperProps) => {
  return (
    <section className="SelectedSectionWrapper w-full py-10">
      <section className="w-fit">{children}</section>
    </section>
  );
};

export const SelectedBranchSubContent = ({
  children,
}: SectionWrapperProps) => {
  return (
    <section className="SelectedBranchSubContent grid grid-cols-12 gap-2 items-center h-fit">
      <div className="bg-primary-goldish col-span-1 h-full border-l border-l-primary-goldish place-self-center" />
      <section className="w-full col-span-10 mt-5 pt-0 p-3 flex flex-col gap-2">
        {children}
      </section>
    </section>
  );
};
