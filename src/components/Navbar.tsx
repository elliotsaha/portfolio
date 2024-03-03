"use client";
import {
  Box,
  SimpleGrid,
  Text,
  Link,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Nav, CenterSection, FlexSection, Section } from "@/components/factory";
import { FiMenu } from "react-icons/fi";

const Links = () => {
  const labels = ["home", "about", "work", "blog"];
  return (
    <>
      {labels.map((label: string) => (
        <Link href={`/${label}`} fontSize={{ sm: "md", lg: "lg" }} key={label}>
          {label}
        </Link>
      ))}
    </>
  );
};

export const Navbar = () => {
  const { getButtonProps, getDisclosureProps } = useDisclosure();

  const buttonProps = getButtonProps();
  const disclosureProps = getDisclosureProps();

  return (
    <Nav display="block" zIndex="banner">
      <SimpleGrid
        templateColumns={{ base: "1fr 1fr", md: "1fr 2fr 1fr" }}
        px={{ base: "8", md: "24" }}
        py="4"
      >
        <FlexSection
          alignItems="center"
          display={{ base: "flex", sm: "none", md: "flex" }}
        >
          <Text variant="active" fontSize={{ base: "lg", sm: "md", lg: "lg" }}>
            elliot saha.
          </Text>
        </FlexSection>
        <CenterSection gap="10" display={{ base: "none", sm: "flex" }}>
          <Links />
        </CenterSection>
        <FlexSection
          alignItems="center"
          justifyContent="flex-end"
          display={{ base: "none", sm: "flex" }}
        >
          <Button as={Link} size={{ base: "md", lg: "lg" }} href="/contact">
            contact
          </Button>
        </FlexSection>
        <FlexSection
          display={{ base: "flex", sm: "none" }}
          justifyContent="flex-end"
        >
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            {...buttonProps}
          />
        </FlexSection>
      </SimpleGrid>
      <FlexSection
        {...disclosureProps}
        display={{ base: "flex", sm: "none" }}
        px="8"
        flexDir="column"
        gap="4"
        fontSize="lg"
      >
        <Links />
        <Link href="/contact">contact</Link>
      </FlexSection>
    </Nav>
  );
};
