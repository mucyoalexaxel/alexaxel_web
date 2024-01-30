import React from "react";

export default function ExpWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="ExperienceWrapper flex flex-col gap-2 mt-5">{children}</div>
  );
}
