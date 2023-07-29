"use client";

import { useBreakpointValue } from "@chakra-ui/react";
import LayoutSelector from "@components/Layouts/LayoutSelector";
import {
  BREAKPOINT_BASE,
  BREAKPOINT_SM,
  BREAKPOINT_MD,
  BREAKPOINT_LG,
  BREAKPOINT_XL,
} from "@utils/screenConstants";

export default function Home() {
  const breakpoints = {
    base: BREAKPOINT_BASE,
    sm: BREAKPOINT_SM,
    md: BREAKPOINT_MD,
    lg: BREAKPOINT_LG,
    xl: BREAKPOINT_XL,
  };

  const breakpoint = useBreakpointValue(breakpoints);
  console.log(breakpoint)

  if (!breakpoint) {
    return null;
  }

  return (
    <LayoutSelector breakpoint={breakpoint}>
      <div className="col-start-1 bg-blue-400">Hello World</div>
      <div className="col-start-2 bg-blue-400">Hello World</div>
      <div className="col-start-3 bg-blue-400">Hello World</div>
      <div className="col-start-4 bg-blue-400">Hello World</div>
      <div className="col-start-5 bg-blue-400">Hello World</div>
      <div className="col-start-6 bg-blue-400">Hello World</div>
      <div className="col-start-7 bg-blue-400">Hello World</div>
      <div className="col-start-8 bg-blue-400">Hello World</div>
      <div className="col-start-9 bg-blue-400">Hello World</div>
      <div className="col-start-10 bg-blue-400">Hello World</div>
      <div className="col-start-11 bg-blue-400">Hello World</div>
      <div className="col-start-12 bg-blue-400">Hello World</div>
    </LayoutSelector>
  );
}

