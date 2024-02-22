"use client";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import {
  Box,
  Container,
  Icon,
  Text,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { css } from "@emotion/css";
import { Spinner } from "@chakra-ui/react";

const Home = () => {
  const splineStyles = css`
    height: "100%";
  `;

  const [loading, setLoading] = useState(true);

  return (
    <Box bg="background">
      {loading && (
        <Flex
          bg="background"
          justifyContent="center"
          alignItems="center"
          h="100vh"
          w="100vw"
          flexDir="column"
          gap="4"
        >
          <Spinner color="gray.500" />
          <Text textTransform="uppercase">Elliot Saha</Text>
        </Flex>
      )}
      <Box display={loading ? "none" : "block"}>
        <Box position="relative" h="100vh" overflow="hidden">
          <Container maxW="container.xl">
            <Flex alignItems="center" h="100vh">
              <Flex zIndex={2} gap="2" flexDir="column">
                <Heading as="h1" fontSize="96">
                  Designer by day, developer by night.
                </Heading>
                <Text maxW="2xl" my="3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  eu leo tempor, pulvinar tellus ut, vestibulum lorem. Curabitur
                  rutrum dignissim consequat.
                </Text>
                <Flex mt="4" alignItems="center" gap="8">
                  <Button size="lg" rightIcon={<Icon as={FiArrowUpRight} />}>
                    Get in touch
                  </Button>
                  <Flex alignItems="center" gap="2">
                    <Flex
                      w="4"
                      h="4"
                      bg="#021E04"
                      borderRadius="50%"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box w="2" h="2" bg="#087A0D" borderRadius="50%" />
                    </Flex>
                    <Text>Currently up for hire</Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Container>

          <Box
            w="100vw"
            h="100%"
            position="absolute"
            top="0"
            left="50%"
            zIndex={1}
            filter="brightness(50%)"
          >
            <Spline
              scene="https://prod.spline.design/8PR-kBFaWSyXTYTF/scene.splinecode"
              className={splineStyles}
              onLoad={() => setLoading(false)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
