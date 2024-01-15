export interface SectionLayoutProps {
  sectionName: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  sectionName,
  children,
}: SectionLayoutProps) {
  return (
    <div
      className={`${sectionName} h-max w-full flex flex-col md:flex-row md:justify-between z-0 py-10 px-5 sm:w-4/5 sm:mx-auto sm:px-0 sectionDivider`}
      id={sectionName}
    >
      {children}
    </div>
  );
}

export function ExpSectionLayout({
  sectionName,
  children,
}: SectionLayoutProps) {
  return (
    <div
      className={`${sectionName} h-max w-full flex flex-col z-0 py-10 px-5 sm:w-4/5 sm:mx-auto sm:px-0 sectionDivider`}
      id={sectionName}
    >
      {children}
    </div>
  );
}

export function HeroLayout({
  sectionName,
  children,
}: SectionLayoutProps) {
  return (
    <div
      className={`${sectionName} min-h-[100dvh] w-full sm:w-4/5 mx-auto flex flex-col justify-center px-5 mb-10 relative`}
      id={sectionName}
    >
      {children}
    </div>
  );
}
