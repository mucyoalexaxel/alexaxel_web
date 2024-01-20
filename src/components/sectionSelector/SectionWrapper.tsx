import { GitBranch } from "@phosphor-icons/react";

export interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="SelectedSectionWrapper w-full py-10">
      <section className="w-full flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
        {children}
      </section>
    </section>
  );
};

export const SectionLeft = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={`SectionLeft w-full sm:w-1/2 ${className}`}>{children}</section>
  );
};

export const SectionRight = ({ children, className }: SectionWrapperProps) => {
  return (
    <section className={`SectionRight w-fit sm:w-2/5 ${className}`}>{children}</section>
  );
};

export const SelectedBranchSubContent = ({ children }: SectionWrapperProps) => {
  return (
    <section className="SelectedBranchSubContent grid grid-cols-12 gap-2 items-center h-fit relative">
      <div className="bg-primary-goldish col-span-1 h-full border-l border-l-primary-goldish place-self-center" />
      <section className="w-full col-span-10 mt-5 pt-0 p-3 flex flex-col gap-2">
        {children}
      </section>
    </section>
  );
};
