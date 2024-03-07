'use client';
import React, {useRef} from 'react';
import {
  Text,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Link,
  Img,
  Heading,
  GridItem,
  Skeleton,
} from '@chakra-ui/react';
import {
  FlexSection,
  Section,
  BrandHeading,
  HiddenHeading,
} from '@/components/factory';
import {Blob, SplitText} from '@/components';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import axios from 'axios';
import {CaseStudy} from '@/types';
import {useQuery} from '@tanstack/react-query';

const getAllCaseStudies = async () => {
  const featured = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/work/caseStudies`
  );
  return featured.data;
};

const Card = ({data}: {data: CaseStudy}) => {
  return (
    <GridItem as={Link} href={`/work/${data.slug}`} role="group">
      <SimpleGrid
        columns={1}
        bg="background"
        boxShadow="lg"
        borderRadius="3xl"
        position="relative"
        overflow="hidden"
        h="100%"
      >
        <Flex flexDir="column" px="8" pt="8">
          <Img src={data.icon} h="14" mb="4" mr="auto" />
          <Heading fontSize="26">{data.title}</Heading>
          <Text
            color="cyan.500"
            textTransform="uppercase"
            letterSpacing="0.25rem"
            fontSize="14"
            mb="1"
            transition="all 0.25s ease-in-out"
            _groupHover={{
              color: 'cyan.700',
            }}
          >
            {data.subtitle}
          </Text>
          <Flex position="absolute" right="4" top="4">
            <Flex
              outline="solid"
              justifyContent="center"
              borderRadius="full"
              outlineColor="brand.purple.solid"
              px="3"
            >
              <Text fontWeight="bold" color="brand.purple.solid" fontSize="14">
                {data.year}
              </Text>
            </Flex>
          </Flex>
          <Text fontWeight="normal" mb="8">
            {data.oneLineDescription}
          </Text>
        </Flex>
        <Img
          src={data.cover}
          objectFit="cover"
          borderTopLeftRadius="xl"
          mt="auto"
          ml="2rem"
          w="100%"
          transition="all 0.25s ease-in-out"
          boxShadow="lg"
          h={{base: '64', sm: '80', md: '64'}}
          objectPosition="0% top"
        />
      </SimpleGrid>
    </GridItem>
  );
};

const Work = () => {
  const container = useRef<HTMLDivElement>(null);

  const {isPending, error, data} = useQuery<Array<CaseStudy>>({
    queryKey: ['all-case-studies'],
    queryFn: getAllCaseStudies,
  });
  useGSAP(
    () => {
      gsap.set('.animate-header', {visibility: 'visible'});
      gsap.from('.animate-header', {
        y: 150,
        stagger: {
          each: 0.005,
        },
      });
    },
    {scope: container}
  );

  return (
    <Container maxW="container.xl" ref={container}>
      <Section position="relative" pb="36">
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
          blur="15rem"
          position="absolute"
          top="42"
          left="96"
        />
        <main>
          <Flex
            justifyContent="center"
            justifySelf="center"
            pt={{base: '48', md: '80'}}
            minH="90vh"
            flexDir="column"
          >
            <FlexSection flexDir="column" gap="4" mb="12">
              <Flex flexDir="column" gap="2" justifyContent="center">
                <HiddenHeading>Work</HiddenHeading>
                <BrandHeading overflow="hidden">
                  <SplitText className="animate-header" visibility="hidden">
                    case studies.
                  </SplitText>
                </BrandHeading>
                <Text maxW="xl">
                  A collection of documented case studies of all the web applications and tools I've created and managed. 
                </Text>
              </Flex>
            </FlexSection>
            <Grid
              gridTemplateColumns={{
                base: '100%',
                md: '1fr 1fr',
                xl: '1fr 1fr 1fr',
              }}
              gap="8"
              position="relative"
            >
              {isPending &&
                Array(9)
                  .fill(1)
                  .map(() => <Skeleton borderRadius="3xl" w="100%" h="md" />)}

              {error && (
                <Text>
                  An unexpected error occurred. Please try again later.
                </Text>
              )}

              {data && data.map(i => <Card data={i} />)}

              <Blob
                size="2xl"
                bg="brand.blue.blur"
                blur="40rem"
                position="absolute"
                bottom="96"
                left="0"
              />
              <Blob
                size="2xl"
                bg="brand.yellow.blur"
                blur="40rem"
                position="absolute"
                bottom="96"
                right="0"
              />
            </Grid>
          </Flex>
        </main>
      </Section>
    </Container>
  );
};

export default Work;
