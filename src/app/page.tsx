"use client";
import React, { useRef } from "react";
import {
  GridItem,
  Heading,
  Text,
  Container,
  Box,
  Icon,
  Link,
  Flex,
  Grid,
  Img,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  FlexSection,
  Section,
  BrandHeading,
  HiddenHeading,
} from "@/components/factory";
import { Blob, ButtonLink, SplitText } from "@/components";
import { FiBox, FiTable, FiLayers, FiMapPin } from "react-icons/fi";
import { IconType } from "react-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface CardProps {
  title: string;
  body: string;
  icon: IconType;
  color: string;
}

const Card = ({ title, body, icon, color }: CardProps) => {
  return (
    <Flex
      bg="background"
      p={{ base: "8", xl: "12" }}
      borderRadius="3xl"
      flexDir="column"
      boxShadow="lg"
    >
      <Icon as={icon} color={color} fontSize="36" mb="4" />
      <Heading mb="2" size="lg">
        {title}
      </Heading>
      <Text>{body}</Text>
    </Flex>
  );
};

const Home = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate-header-line-1", {
        y: 100,
        stagger: {
          each: 0.015,
        },
      });
      gsap.from(".animate-header-line-2", {
        y: 100,
        stagger: {
          each: 0.03,
        },
      });
    },
    { scope: container },
  );

  return (
    <Container maxW="container.xl" ref={container}>
      <Section position="relative">
        {/* background blur */}
        <Blob
          size="2xl"
          bg="brand.green.blur"
          blur="40rem"
          position="absolute"
          top="96"
        />
        <Blob
          size="2xl"
          bg="brand.blue.blur"
          blur="15rem"
          position="absolute"
          top="42"
          left="96"
        />
        <Blob
          size="2xl"
          bg="brand.purple.blur"
          blur="10rem"
          position="absolute"
          top="42"
          right="0"
        />
        <Flex h="100vh" alignItems="center">
          <FlexSection flexDir="column" gap="4">
            <Flex mb={{ base: "-2", md: "-4" }} alignItems="center" gap="1">
              <Icon as={FiMapPin} color="mono.gray.500" />
              <Text>Vancouver, BC</Text>
            </Flex>
            <Flex flexDir="column" gap="0">
              <HiddenHeading>
                Designer by day, Developer by night.
              </HiddenHeading>
              <BrandHeading overflow="hidden">
                <SplitText className="animate-header-line-1">
                  Designer by day,
                </SplitText>
                <br />
                <SplitText className="animate-header-line-2">
                  Developer by night
                </SplitText>
              </BrandHeading>
            </Flex>
            <Text maxW="2xl" fontSize={{ md: "lg" }}>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </Text>
            <Box mt="2">
              <ButtonLink href="/contact">get in touch</ButtonLink>
            </Box>
          </FlexSection>
        </Flex>
      </Section>

      <FlexSection
        position="relative"
        gap="8"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Card
          title="Lorem ipsum dolor sit amet."
          body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          icon={FiBox}
          color="brand.blue.solid"
        />
        <Card
          title="Lorem ipsum dolor sit amet."
          body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          icon={FiTable}
          color="brand.green.solid"
        />
        <Card
          title="Lorem ipsum dolor sit amet."
          body="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          icon={FiLayers}
          color="brand.yellow.solid"
        />
      </FlexSection>

      <FlexSection mt="32" flexDir="column" position="relative">
        <Blob
          size="xl"
          bg="brand.blue.blur"
          blur="40rem"
          position="absolute"
          top="96"
        />
        <Blob
          size="3xl"
          bg="brand.purple.blur"
          blur="17rem"
          position="absolute"
          top="42"
          right="96"
        />
        <Blob
          size="2xl"
          bg="brand.green.blur"
          blur="10rem"
          position="absolute"
          top="42"
          right="0"
        />
        <Blob
          size="2xl"
          bg="brand.blue.blur"
          blur="10rem"
          position="absolute"
          bottom="22"
          right="0"
        />
        <Blob
          size="xl"
          bg="brand.purple.blur"
          blur="10rem"
          position="absolute"
          bottom="22"
          left="0"
        />
        <BrandHeading as="h2" mb="8">
          featured works.
        </BrandHeading>
        <Grid
          templateAreas={{
            base: `"showcase"
                    "small1"
                    "small2"`,
            lg: `"showcase showcase"
                "small1 small2"`,
          }}
          gridTemplateColumns={{ base: "100%", lg: "1fr 1fr" }}
          gap="8"
        >
          <GridItem
            area="showcase"
            as={Link}
            href="/projects/deca-ui"
            role="group"
          >
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing="10"
              bg="background"
              boxShadow="lg"
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
            >
              <Flex flexDir="column" p={{ base: "8", xl: "16" }}>
                <Img src="/projects/DecaUI/logo.svg" w="12" mb="4" />
                <Heading size="xl">DecaUI</Heading>
                <Text
                  color="brand.blue.solid"
                  textTransform="uppercase"
                  letterSpacing="0.25rem"
                  mb="2"
                >
                  Component Library
                </Text>
                <Text fontWeight="normal">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia.
                </Text>
              </Flex>
              <Img
                src="/projects/DecaUI/cover.png"
                objectFit="cover"
                mt="auto"
                borderTopLeftRadius="3xl"
                mb={{ base: "0rem", sm: "-4rem", lg: "-1rem" }}
                ml={{ base: "1.8rem", sm: "4rem", lg: "1rem" }}
                transition="all 0.25s ease-in-out"
                boxShadow="lg"
              />
            </SimpleGrid>
          </GridItem>
          <GridItem
            area="small1"
            as={Link}
            href="/projects/bridges"
            role="group"
          >
            <SimpleGrid
              columns={1}
              bg="background"
              boxShadow="lg"
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
              h="100%"
            >
              <Flex flexDir="column" p={{ base: "8", xl: "16" }}>
                <Img src="/projects/Bridges/logo.svg" w="8" mb="4" />
                <Heading size="xl">Bridges</Heading>
                <Text
                  color="brand.purple.solid"
                  textTransform="uppercase"
                  letterSpacing="0.25rem"
                  mb="2"
                >
                  B2B Platform
                </Text>
                <Text fontWeight="normal">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia.
                </Text>
              </Flex>
              <Img
                src="/projects/Bridges/cover.png"
                objectFit="cover"
                mt="auto"
                borderTopLeftRadius="3xl"
                mb={{ base: "0rem", sm: "-4rem" }}
                ml={{ base: "1.8rem", sm: "4rem" }}
                transition="all 0.25s ease-in-out"
                boxShadow="lg"
              />
            </SimpleGrid>
          </GridItem>
          <GridItem
            area="small2"
            as={Link}
            href="/projects/deca-ui"
            role="group"
          >
            <SimpleGrid
              columns={1}
              bg="background"
              boxShadow="lg"
              borderRadius="3xl"
              position="relative"
              overflow="hidden"
              h="100%"
            >
              <Flex flexDir="column" p={{ base: "8", xl: "16" }}>
                <Img src="/projects/UBCTennisCircle/logo.svg" w="16" mb="4" />
                <Heading size="xl">UBC Tennis Circle</Heading>
                <Text
                  color="brand.green.solid"
                  textTransform="uppercase"
                  letterSpacing="0.25rem"
                  mb="2"
                >
                  Ticket sale website
                </Text>
                <Text fontWeight="normal">
                  Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                  mollit ex esse exercitation amet. Nisi anim cupidatat
                  excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                  est aliquip amet voluptate voluptate dolor minim nulla est
                  proident. Nostrud officia pariatur ut officia. est aliquip
                </Text>
              </Flex>
              <Img
                src="/projects/UBCTennisCircle/cover.png"
                objectFit="cover"
                mt="auto"
                borderTopLeftRadius="3xl"
                mb={{ base: "0rem", sm: "-4rem" }}
                ml={{ base: "1.8rem", sm: "4rem" }}
                transition="all 0.25s ease-in-out"
                boxShadow="lg"
              />
            </SimpleGrid>
          </GridItem>
        </Grid>
      </FlexSection>

      <Flex justifyContent="center" my="8">
        <ButtonLink href="/projects">see everything</ButtonLink>
      </Flex>

      <Section my="32" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="10">
          <Img
            src="/about/headshot.jpeg"
            borderRadius="3xl"
            h={{ base: "sm", sm: "lg", md: "xl" }}
            objectFit="cover"
            w="100%"
            boxShadow="lg"
          />
          <Flex flexDir="column" gap="2" my="auto">
            <BrandHeading>about me.</BrandHeading>
            <Text>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate.
            </Text>

            <Box mt="4">
              <ButtonLink href="/projects">see more</ButtonLink>
            </Box>
          </Flex>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Home;
