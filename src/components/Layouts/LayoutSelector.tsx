import { DesktopLayout, MobileLayout, TabletLayout } from "@components/Layouts";

import {
  BREAKPOINT_2XL,
  BREAKPOINT_BASE,
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
} from "@utils/screenConstants";

interface LayoutSelectorProps {
  breakpoint: string;
  children: React.ReactNode;
}

const LayoutSelector = ({ breakpoint, children }: LayoutSelectorProps) => {
  const screenConfig: Record<
    string,
    {
      container: React.ComponentType<{ children: React.ReactNode }>;
    }
  > = {
    [BREAKPOINT_BASE]: { container: MobileLayout },
    [BREAKPOINT_SM]: { container: TabletLayout },
    [BREAKPOINT_MD]: { container: TabletLayout },
    [BREAKPOINT_LG]: { container: DesktopLayout },
    [BREAKPOINT_XL]: { container: DesktopLayout },
    [BREAKPOINT_2XL]: { container: DesktopLayout },
  };

  const { container: Container } = screenConfig[breakpoint] || screenConfig[BREAKPOINT_LG];
  return <Container>{children}</Container>;
};

export default LayoutSelector;
