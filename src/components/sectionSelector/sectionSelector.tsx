import { GitBranch, Sparkle, RadioButton } from "@phosphor-icons/react";

export interface SelectedBranchProps {
  isCheckoutStatement?: boolean;
  isSelectedBranch?: boolean;
  branchName: string;
}

export const SectionSelector = ({
  isCheckoutStatement,
  isSelectedBranch,
  branchName,
}: SelectedBranchProps) => {
  return (
    <section className="flex gap-2 items-center">
      {/* {isSelectedBranch ? (
        <div className="branchDot h-3 w-3 rounded-[50%]" />
      ) : null}
      {isCheckoutStatement && (
        // <span className="text-secondary col-span-1 place-self-center tracking-widest">{`>_`}</span>
        <Sparkle
          size={24}
          weight="bold"
          className="text-primary-goldish col-span-1 place-self-center font-thin mb-3"
        />
      )} */}

      <div
        className={`${
          isSelectedBranch &&
          "branchLabel py-2 px-4 gap-x-1 flex items-center justify-center"
        } ${
          isCheckoutStatement &&
          "text-primary text-xs font-extralight tracking-widest"
        }`}
      >
        {isSelectedBranch && (
          <GitBranch size={20} weight="duotone" className="text-primary" />
        )}

        <span
          className={`text-lg ${isSelectedBranch && "text-primary tracking-wider font-medium"}`}
        >{`${
          isCheckoutStatement
            ? `git checkout -b feature/${branchName}`
            : branchName
        }`}</span>
      </div>
    </section>
  );
};
