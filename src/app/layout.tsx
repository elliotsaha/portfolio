import type { Metadata } from "next";
import { Navbar, ThemeProvider } from "@/components";
import { Body } from "@/components/factory";

export const metadata: Metadata = {
  title: "Elliot's Portfolio",
  description: "Elliot's Portfolio",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <Body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </Body>
    </html>
  );
};

export default RootLayout;
