
export interface SectionLayoutProps {
  sectionName: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  sectionName,
  children,
}: SectionLayoutProps) {
  return (
    <div className="h-[100dvh] snap-start grid place-items-center">
      <div
        className={`${sectionName} flex flex-col md:grid md:grid-cols-14 md:place-items-center z-0 my-10 lg:my-0`}
      >
        {children}
      </div>
    </div>
  );
}
