export interface SectionLayoutProps {
  sectionName: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  sectionName,
  children,
}: SectionLayoutProps) {
  return (
    <div className="h-[100dvh] snap-start grid place-items-center relative">
      <div
        className={`${sectionName} w-full h-[70%] md:h-fit flex flex-col md:grid grid-cols-14 md:place-items-center z-0 my-10 lg:my-0`}
      >
        {children}
      </div>
    </div>
  );
}
