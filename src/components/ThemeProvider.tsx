"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const ThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const theme = extendTheme({
    fonts: {
      heading: spaceGrotesk.style.fontFamily,
      body: spaceGrotesk.style.fontFamily,
    },
  });

  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
