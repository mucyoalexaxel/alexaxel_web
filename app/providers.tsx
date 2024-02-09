import ActiveSectionContextProvider from "@context/active-section-context";
import ThemeContextProvider from "@context/theme-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
