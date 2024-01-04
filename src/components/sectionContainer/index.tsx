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
      className={`${sectionName} h-max w-full flex flex-col sm:grid grid-cols-12 sm:place-items-center z-0 mb-10 p-10`}
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
      className={`${sectionName} min-h-[100dvh] w-full sm:w-4/5 mx-auto flex flex-col justify-center p-5 relative`}
      id={sectionName}
    >
      {children}
    </div>
  );
}
