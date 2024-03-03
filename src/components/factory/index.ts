import { chakra } from "@chakra-ui/react";

export const Nav = chakra("nav");
export const Section = chakra("section");
export const FlexSection = chakra("section", {
  baseStyle: { display: "flex" },
});
export const CenterSection = chakra("section", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export const Footer = chakra("footer");
