import { GitBranch, Sparkle , RadioButton } from "@phosphor-icons/react";

export interface SelectedBranchProps {
  isCheckoutStatement?: boolean;
  isSelectedBranch?: boolean;
  branchName: string;
}

export const SelectedBranch = ({
  isCheckoutStatement,
  isSelectedBranch,
  branchName,
}: SelectedBranchProps) => {
  return (
    <section className="grid grid-cols-12 gap-2 items-center">
      {isSelectedBranch && (
        <div className="branchDot col-span-1 h-3 w-3 rounded-[50%] place-self-center" />
      )}
      {isCheckoutStatement && (
        // <span className="text-secondary col-span-1 place-self-center tracking-widest">{`>_`}</span>
        <Sparkle 
          size={24}
          weight="light"
          className="text-primary-goldish col-span-1 place-self-center font-thin mb-3"
        />
      )}
      <div
        className={`col-start-2 w-max ${
          isSelectedBranch &&
          "branchLabel py-[.1rem] px-4 gap-x-1 flex items-center justify-center"
        } ${isCheckoutStatement && "text-primary text-xs font-extralight tracking-widest mb-4"}`}
      >
        {isSelectedBranch && (
          <GitBranch size={20} weight="duotone" className="text-primary" />
        )}
        <span className={`text-base mb-2 ${isSelectedBranch && "text-primary" }`}>{`${
          isCheckoutStatement
            ? `git checkout -b feature/${branchName}`
            : branchName
        }`}</span>
      </div>
    </section>
  );
};
