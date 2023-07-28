import { LayoutProps } from ".";

const MobileLayout: React.FC<LayoutProps> = ({ children }) => (
  <div className="bg-yellow-500">{children}</div>
);

export default MobileLayout;
