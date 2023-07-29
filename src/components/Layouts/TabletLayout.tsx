import { LayoutProps } from ".";

const TabletLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-full grid justify-items-center h-screen">
    <div className="grid grid-cols-12 gap-2">{children}</div>
  </div>
);

export default TabletLayout;
