import { LayoutProps } from ".";

const DesktopLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="w-full grid justify-items-center h-screen">
    <div className="w-4/5 grid grid-cols-12 gap-5">{children}</div>
  </div>
);

export default DesktopLayout;
