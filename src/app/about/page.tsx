"use client";
import React, { useRef } from "react";
import { FlexSection } from "@/components/factory";
import {
  Container,
  Flex,
  Text,
  SimpleGrid,
  Img,
  Heading,
  Box,
  Icon,
} from "@chakra-ui/react";
import { Section, HiddenHeading, BrandHeading } from "@/components/factory";
import { Blob, SplitText, ButtonLink } from "@/components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FiMapPin } from "react-icons/fi";

interface FlowCardProps {
  stage: string;
  color: string;
  label: string;
  children: string;
}

const FlowCard = ({ stage, color, label, children }: FlowCardProps) => (
  <Flex
    bg="background"
    p={{ base: "8", xl: "12" }}
    borderRadius="3xl"
    boxShadow="lg"
    h="100%"
    flexDir="column"
    gap="2"
  >
    <Text fontSize="2xl" color={color}>
      {stage}
    </Text>
    <Heading mb="2" size="lg" as="h4">
      {label}
    </Heading>
    <Text>{children}</Text>
  </Flex>
);

const About = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".animate-header", { visibility: "visible" });
      gsap.from(".animate-header", {
        y: 75,
        stagger: {
          each: 0.01,
        },
      });
    },
    { scope: container },
  );
  return (
    <Container maxW="container.xl" ref={container}>
      <Section position="relative">
        <Blob
          size="2xl"
          bg="brand.green.blur"
          blur="40rem"
          position="absolute"
          top="96"
        />
        <Blob
          size="2xl"
          bg="brand.yellow.blur"
          blur="15rem"
          position="absolute"
          top="42"
          left="96"
        />
        <main>
          <Flex alignItems="center" pt={{ base: "48", md: "42" }} minH="90vh">
            <FlexSection flexDir="column" gap="4">
              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                gap={{ base: "8", lg: "12" }}
              >
                <Flex flexDir="column" gap="2" justifyContent="center">
                  <HiddenHeading>About me</HiddenHeading>
                  <BrandHeading overflow="hidden">
                    <SplitText className="animate-header" visibility="hidden">
                      about me.
                    </SplitText>
                  </BrandHeading>
                  <Text maxW="xl">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                    reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                    mollit ex esse exercitation amet. Nisi anim cupidatat
                    excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem
                    est aliquip amet voluptate voluptate dolor minim nulla est
                    proident. Nostrud officia pariatur ut officia. Sit irure
                    elit esse ea nulla sunt ex occaecat reprehenderit commodo
                    officia dolor Lorem duis laboris cupidatat officia
                    voluptate.
                  </Text>
                </Flex>
                <Img
                  src="/about/headshot-white.jpeg"
                  borderRadius="3xl"
                  h={{ base: "sm", sm: "md", md: "lg" }}
                  objectPosition="50% 30%"
                  objectFit="cover"
                  w="100%"
                  boxShadow="lg"
                />
              </SimpleGrid>
            </FlexSection>
          </Flex>
        </main>
      </Section>

      <Section my="32" position="relative">
        <Blob
          size="2xl"
          bg="brand.yellow.blur"
          blur="40rem"
          position="absolute"
          top="20"
          right="0"
        />
        <BrandHeading>process & workflow.</BrandHeading>
        <SimpleGrid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          my="8"
          spacing="10"
        >
          <FlowCard stage="01" label="Design" color="brand.blue.solid">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </FlowCard>
          <FlowCard stage="02" label="Development" color="brand.purple.solid">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </FlowCard>
          <FlowCard stage="03" label="Integration" color="brand.green.solid">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </FlowCard>
          <FlowCard stage="04" label="Management" color="brand.yellow.solid">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </FlowCard>
        </SimpleGrid>
      </Section>

      <Section my="32" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="10">
          <Box boxShadow="lg" borderRadius="3xl" position="relative">
            <Img
              src="/about/vancouver.jpg"
              borderRadius="3xl"
              h={{ base: "sm", sm: "lg", md: "xl" }}
              objectFit="cover"
              w="100%"
            />
            <Flex
              bg="background"
              position="absolute"
              borderRadius="full"
              bottom="4"
              left="4"
              alignItems="center"
              px="4"
              py="2"
              gap="2"
            >
              <Icon as={FiMapPin} color="mono.black.500" />
              <Text color="mono.black.500">English Bay, Vancouver</Text>
            </Flex>
          </Box>
          <Flex flexDir="column" gap="2" my="auto">
            <BrandHeading>my story.</BrandHeading>
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
          </Flex>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default About;
