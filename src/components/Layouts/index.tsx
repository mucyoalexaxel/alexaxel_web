import { ReactNode } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";
import TabletLayout from "./TabletLayout";

export interface LayoutProps {
  children: ReactNode;
}

export { DesktopLayout, MobileLayout, TabletLayout };

