import type {Metadata} from 'next';
import {Navbar, Footer, Providers} from '@/components';
import {Body} from '@/components/factory';

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
        <Providers>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </Providers>
      </Body>
    </html>
  );
};

export default RootLayout;
