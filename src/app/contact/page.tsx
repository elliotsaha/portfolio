"use client";
import React, { useRef } from "react";
import {
  Icon,
  Flex,
  Input,
  Box,
  InputGroup,
  FormErrorIcon,
  FormLabel,
  FormControl,
  Button,
  SimpleGrid,
  Container,
  Text,
  Grid,
  Heading,
  GridItem,
  Textarea,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  BrandHeading,
  HiddenHeading,
  FlexSection,
  Section,
} from "@/components/factory";
import { Blob, SplitText } from "@/components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { FiMail } from "react-icons/fi";

const Contact = () => {
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
          bg="brand.blue.blur"
          blur="40rem"
          position="absolute"
          top="96"
        />
        <Blob
          size="2xl"
          bg="brand.yellow.blur"
          blur="30rem"
          position="absolute"
          top="42"
          right="0"
        />
        <Blob
          size="2xl"
          bg="brand.purple.blur"
          blur="15rem"
          position="absolute"
          top="42"
          left="96"
        />
      </Section>
      <main>
        <Flex alignItems="center" py={{ base: "48", lg: "42" }} minH="90vh">
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: "8", lg: "12" }}
          >
            <Flex flexDir="column" gap="2" justifyContent="center">
              <HiddenHeading>Contact me</HiddenHeading>
              <BrandHeading overflow="hidden">
                <SplitText className="animate-header" visibility="hidden">
                  contact.
                </SplitText>
              </BrandHeading>
              <Text maxW="xl">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur.
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur.
              </Text>
              <Flex alignItems="center" gap="2" mt="4">
                <Icon as={FiMail} color="mono.black.500" fontSize="18" />
                <Text color="mono.black.500" fontWeight="medium">
                  contact@elliotsaha.com
                </Text>
              </Flex>
            </Flex>
            <Flex
              justifySelf={{ base: "flex-start", lg: "center" }}
              bg="background"
              borderRadius="3xl"
              boxShadow="lg"
              p={{ base: "8", lg: "12" }}
              flexDir="column"
              w={{ base: "100%", lg: "lg" }}
            >
              <Heading as="h2" size="lg" mb="4">
                Get in touch
              </Heading>
              <Grid
                gap="4"
                templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                templateAreas={{
                  base: `"first-name" 
                         "last-name" 
                         "email-address" 
                         "message"`,
                  md: `"first-name last-name" 
                       "email-address email-address" 
                       "message message"`,
                }}
              >
                <GridItem area="first-name">
                  <Input
                    borderRadius="full"
                    size="lg"
                    placeholder="First Name"
                  />
                </GridItem>
                <GridItem area="last-name">
                  <Input
                    borderRadius="full"
                    size="lg"
                    placeholder="Last Name"
                  />
                </GridItem>
                <GridItem area="email-address">
                  <Input
                    borderRadius="full"
                    placeholder="Email Address"
                    size="lg"
                    type="email"
                  />
                </GridItem>
                <GridItem area="message">
                  <Textarea
                    size="lg"
                    placeholder="Message"
                    resize="none"
                    rows={5}
                  />
                </GridItem>
              </Grid>
              <Box>
                <Button size="lg" mt="4">
                  send message
                </Button>
              </Box>
            </Flex>
          </SimpleGrid>
        </Flex>
      </main>
    </Container>
  );
};

export default Contact;
