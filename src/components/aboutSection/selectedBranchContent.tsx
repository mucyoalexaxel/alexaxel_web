import { GitBranch } from "@phosphor-icons/react";

export interface SelectedBranchContentProps {
  children: React.ReactNode;
}

export const SelectedBranchContent = ({
  children,
}: SelectedBranchContentProps) => {
  return (
    <section className="SelectedBranchContent grid grid-cols-12 gap-2 items-center h-fit">
      <div className="bg-primary-goldish col-span-1 h-full border-l border-l-primary-goldish place-self-center" />
      <section className="w-fit col-span-10 pb-2">{children}</section>
    </section>
  );
};

export const SelectedBranchSubContent = ({
  children,
}: SelectedBranchContentProps) => {
  return (
    <section className="SelectedBranchSubContent grid grid-cols-12 gap-2 items-center h-fit">
      <div className="bg-primary-goldish col-span-1 h-full border-l border-l-primary-goldish place-self-center" />
      <section className="w-full col-span-10 mt-5 pt-0 p-3 flex flex-col gap-2">{children}</section>
    </section>
  );
};
