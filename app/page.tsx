import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HOME | THE MCY",
  description: "",
};

import HomePage from "@components/homepage";


export default function Home() {
  return <HomePage />;
}
