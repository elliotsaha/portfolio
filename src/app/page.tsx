"use client";
import Spline from "@splinetool/react-spline";
import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { css, cx } from "@emotion/css";

const Home = () => {
  const splineStyles = css`
    height: "100%";
  `;

  return (
    <Box bg="black" position="relative" h="100vh" overflow="hidden">
      <Container maxW="container.xl">
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Heading color="white" fontSize="96" zIndex={2}>
            Designer by day, developer by night.
          </Heading>
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
        />
      </Box>
    </Box>
  );
};

export default Home;
