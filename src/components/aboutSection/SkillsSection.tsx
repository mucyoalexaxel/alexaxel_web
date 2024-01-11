export default function SkillsSection({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="flex flex-col gap-y-3 flex-wrap">
      <p className="text-[#F3FCEE] text-base lg:text-xl font-bold capitalize tracking-wider leading-none">
        {title}
        <span className="text-primary-goldish text-5xl">.</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill_Item, index) => (
          <span
            key={index}
            className="text-white leading-normal tracking-widest font-light text-sm bg-white/5 px-4 py-1 rounded-[50px]"
          >
            {skill_Item}
          </span>
        ))}
      </div>
    </div>
  );
}
