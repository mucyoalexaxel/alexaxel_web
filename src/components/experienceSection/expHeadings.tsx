export const ExpHeading = ({ textContent }: { textContent: string }) => (
  <p className="text-[#F3FCEE] text-xl lg:text-2xl font-bold capitalize tracking-wider leading-none">
    {textContent}
    <span className="text-primary-goldish">.</span>
  </p>
);

export const ExpSubHeading = ({ textContent }: { textContent: string }) => (
  <p className="text-white/90 text-base lg:text-lg font-[350] capitalize tracking-wider leading-none">
    {textContent}
    <span className="text-primary-goldish">.</span>
  </p>
);
