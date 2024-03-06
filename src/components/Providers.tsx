'use client';
import {ThemeProvider} from '.';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

interface ProvidersProps {
  children: JSX.Element;
}

const queryClient = new QueryClient();
export const Providers = ({children}: ProvidersProps) => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </ThemeProvider>
);
