"use client";
import React from "react";
import {
  Heading,
  Text,
  Container,
  Button,
  Box,
  Icon,
  Link,
  Flex,
} from "@chakra-ui/react";
import { FlexSection, Section, BrandHeading } from "@/components/factory";
import { Blob } from "@/components";
import { FiArrowUpRight, FiBox, FiTable, FiLayers } from "react-icons/fi";
import { IconType } from "react-icons";

interface CardProps {
  title: string;
  body: string;
  icon: IconType;
  color: string;
}

const Card = ({ title, body, icon, color }: CardProps) => {
  return (
    <Flex bg="mono.white" p="12" borderRadius="3xl" flexDir="column">
      <Icon as={icon} color={color} fontSize="36" mb="4" />
      <Heading mb="2">{title}</Heading>
      <Text>{body}</Text>
    </Flex>
  );
};
const Home = () => {
  return (
    <Container maxW="container.xl">
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
            <BrandHeading>
              Designer by day, <br />
              Developer by night.
            </BrandHeading>
            <Text maxW="2xl" fontSize={{ md: "lg" }}>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            </Text>
            <Box mt="2">
              <Button
                size="lg"
                rightIcon={<Icon as={FiArrowUpRight} />}
                as={Link}
                href="/contact"
              >
                Get in touch
              </Button>
            </Box>
          </FlexSection>
        </Flex>
      </Section>
      <FlexSection position="relative" gap="8">
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
    </Container>
  );
};

export default Home;
