import DaysCounter from "./DaysCounter";
import Header from "./Header";

export default function CommingSoonPage() {
  return (
    <section className="bg-[#111118] w-full h-screen p-10 flex flex-col items-start justify-center relative">
      <Header />
      <div className="text-white grid grid-cols-1 gap-1 mb-4">
        <span className="tracking-wider font-normal text-sm underconstruction text-white">
          #underconstruction
        </span>
        <span className="tracking-wider font-medium text-2xl commingSoon text-white">Coming Soon</span>
      </div>
      <DaysCounter />
    </section>
  );
}
