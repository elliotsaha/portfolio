"use client";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

const theme = extendTheme({
  fonts: {
    heading: spaceGrotesk.style.fontFamily,
    body: spaceGrotesk.style.fontFamily,
  },
  colors: {
    background: "#060606",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "gray.100",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.500",
        fontWeight: "medium",
      },
    },
    Button: {
      baseStyle: {
        borderRadius: "24",
      },
    },
    Link: {
      baseStyle: {
        color: "gray.100",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
});

export const ThemeProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
