import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME | THE MCY",
  description: "Full Stack Developer specializing in both frontend and backend technologies. | Next.js Developer | React.js Developer | Node.js Developer | Web Developer for hire.",
};

import HomePage from "@components/homepage";


export default function Home() {
  return <HomePage />;
}
