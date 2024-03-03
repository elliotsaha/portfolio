import type { Metadata } from "next";
import { Navbar, ThemeProvider } from "@/components";

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
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
