"use client";
import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid, Text, Button, Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarLinkProps {
  reqURI: string;
  href: string;
  children: string;
}

const NavbarLink = ({ reqURI, href, children }: NavbarLinkProps) => {
  const matchURI = reqURI === href;
  return (
    <Flex position="relative">
      <Link href={href} fontWeight={matchURI ? "bold" : "400"}>
        {children}
      </Link>
      {matchURI && (
        <Box
          position="absolute"
          w="3"
          h="0.5"
          bg="gray.100"
          bottom="-1"
          left="0"
          right="0"
          mx="auto"
          borderRadius="sm"
        />
      )}
    </Flex>
  );
};

export const Navbar = () => {
  const pathname = usePathname();
  const rootPath = `/${pathname.split("/")[1]}`;

  return (
    <Flex
      position="fixed"
      zIndex={1000}
      w="100%"
      justifyContent="center"
      alignItems="center"
      my="4"
    >
      <SimpleGrid
        columns={3}
        bg="rgba(255,255,255,0.001)"
        backdropFilter="blur(12px)"
        borderRadius="24"
        py="2"
        px="4"
        alignItems="center"
        shadow="lg"
      >
        <Flex>
          <Text color="gray.100" fontWeight="bold">
            Elliot Saha
          </Text>
        </Flex>
        <Flex gap="8">
          <NavbarLink href="/" reqURI={rootPath}>
            Home
          </NavbarLink>
          <NavbarLink href="/about" reqURI={rootPath}>
            About
          </NavbarLink>
          <NavbarLink href="/projects" reqURI={rootPath}>
            Projects
          </NavbarLink>
        </Flex>
        <Flex justifyContent="flex-end">
          <Button size="sm">Contact</Button>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
