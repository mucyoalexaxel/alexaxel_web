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
        <div className="branchDot col-span-1 h-4 w-4 rounded-[50%] place-self-center" />
      )}
      {isCheckoutStatement && (
        // <span className="text-secondary col-span-1 place-self-center tracking-widest">{`>_`}</span>
        <Sparkle 
          size={24}
          weight="duotone"
          className="text-secondary col-span-1 place-self-center font-medium"
        />
      )}
      <p
        className={`col-start-2 w-max ${
          isSelectedBranch &&
          "branchLabel py-1 px-4 gap-1 flex items-center justify-center"
        } ${isCheckoutStatement && "text-secondary text-lg font-medium"}`}
      >
        {isSelectedBranch && (
          <GitBranch size={20} weight="duotone" className="text-primary" />
        )}
        <span className={`text-base ${isSelectedBranch && "text-primary"}`}>{`${
          isCheckoutStatement
            ? `git checkout -b feature/${branchName}`
            : branchName
        }`}</span>
      </p>
    </section>
  );
};
