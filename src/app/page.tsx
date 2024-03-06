'use client';
import React, {useRef} from 'react';
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
  Skeleton,
} from '@chakra-ui/react';
import {
  FlexSection,
  Section,
  BrandHeading,
  HiddenHeading,
} from '@/components/factory';
import {Blob, ButtonLink, SplitText} from '@/components';
import {FiBox, FiTable, FiLayers, FiMapPin} from 'react-icons/fi';
import {IconType} from 'react-icons';
import {useGSAP} from '@gsap/react';
import {gsap} from 'gsap';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {CaseStudy} from '@/types';

interface CardProps {
  title: string;
  children: string;
  icon: IconType;
  color: string;
}

const Card = ({title, children, icon, color}: CardProps) => {
  return (
    <Flex
      bg="background"
      p={{base: '8', xl: '12'}}
      borderRadius="3xl"
      flexDir="column"
      boxShadow="lg"
    >
      <Icon as={icon} color={color} fontSize="36" mb="4" />
      <Heading mb="2" size="lg" as="h3">
        {title}
      </Heading>
      <Text>{children}</Text>
    </Flex>
  );
};

// get featured work
const getFeatured = async () => {
  const featured = await axios.get(
    `${process.env.NEXT_PUBLIC_HOSTNAME}/api/work/featured`
  );
  return featured.data;
};

const Home = () => {
  const container = useRef<HTMLDivElement>(null);

  const {isPending, error, data} = useQuery<{
    showcase: CaseStudy;
    featuredLeft: CaseStudy;
    featuredRight: CaseStudy;
  }>({
    queryKey: ['featured-work'],
    queryFn: getFeatured,
  });

  console.log(data);

  useGSAP(
    () => {
      gsap.set('.animate-header-line-1', {visibility: 'visible'});
      gsap.set('.animate-header-line-2', {visibility: 'visible'});
      gsap.from('.animate-header-line-1', {
        y: 150,
        stagger: {
          each: 0.005,
        },
      });
      gsap.from('.animate-header-line-2', {
        y: 150,
        stagger: {
          each: 0.015,
        },
      });
    },
    {scope: container}
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
        <main>
          <Flex h="100vh" alignItems="center">
            <FlexSection flexDir="column" gap="4">
              <Flex mb={{base: '-2', md: '-4'}} alignItems="center" gap="1">
                <Icon as={FiMapPin} color="mono.gray.500" />
                <Text>Vancouver, BC</Text>
              </Flex>
              <Flex flexDir="column" gap="0">
                <HiddenHeading>
                  Designer by day, Developer by night.
                </HiddenHeading>
                <BrandHeading overflow="hidden">
                  <SplitText
                    className="animate-header-line-1"
                    visibility="hidden"
                  >
                    Designer by day,
                  </SplitText>
                  <br />
                  <SplitText
                    className="animate-header-line-2"
                    visibility="hidden"
                  >
                    Developer by night.
                  </SplitText>
                </BrandHeading>
              </Flex>
              <Text maxW="2xl" fontSize={{base: 'md', md: 'lg'}}>
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit ex esse exercitation amet. Nisi anim cupidatat excepteur
                officia.
              </Text>
              <Box mt="2">
                <ButtonLink href="/contact">get in touch</ButtonLink>
              </Box>
            </FlexSection>
          </Flex>
        </main>
      </Section>

      <FlexSection
        position="relative"
        gap="8"
        flexDir={{base: 'column', lg: 'row'}}
      >
        <Card
          title="Lorem ipsum dolor sit amet."
          icon={FiBox}
          color="brand.blue.solid"
        >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Card>
        <Card
          title="Lorem ipsum dolor sit amet."
          icon={FiTable}
          color="brand.green.solid"
        >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Card>
        <Card
          title="Lorem ipsum dolor sit amet."
          icon={FiLayers}
          color="brand.yellow.solid"
        >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </Card>
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
        {error && (
          <Text>An unexpected error occurred. Please try again later.</Text>
        )}
        <Grid
          templateAreas={{
            base: `"showcase"
                    "small1"
                    "small2"`,
            lg: `"showcase showcase"
                "small1 small2"`,
          }}
          gridTemplateColumns={{base: '100%', lg: '1fr 1fr'}}
          gap="8"
        >
          <GridItem
            area="showcase"
            as={Link}
            href={`/work/${data?.showcase?.slug}`}
            role="group"
          >
            {isPending && (
              <Skeleton
                w="100%"
                h={{base: 'xl', lg: '96'}}
                borderRadius="3xl"
              />
            )}
            {data && (
              <SimpleGrid
                columns={{base: 1, lg: 2}}
                bg="background"
                boxShadow="lg"
                borderRadius="3xl"
                position="relative"
                overflow="hidden"
              >
                <Flex flexDir="column" p={{base: '8', lg: '12', xl: '16'}}>
                  <Img src={data.showcase.icon} h="16" mb="4" mr="auto" />
                  <Heading size="xl">{data.showcase.title}</Heading>
                  <Text
                    color="brand.blue.solid"
                    transition="all 0.25s ease-in-out"
                    _groupHover={{
                      filter: 'brightness(75%)',
                    }}
                    textTransform="uppercase"
                    letterSpacing="0.25rem"
                    mb="2"
                  >
                    {data.showcase.subtitle}
                  </Text>
                  <Text fontWeight="normal">
                    {data.showcase.shortDescription}
                  </Text>
                </Flex>
                <Img
                  src={data.showcase.cover}
                  objectFit="cover"
                  mt="auto"
                  borderTopLeftRadius="3xl"
                  mb={{base: '0rem', sm: '-4rem', lg: '-5rem', xl: '-4rem'}}
                  ml={{base: '1.8rem', sm: '4rem'}}
                  transition="all 0.25s ease-in-out"
                  boxShadow="lg"
                />
              </SimpleGrid>
            )}
          </GridItem>
          <GridItem
            area="small1"
            as={Link}
            href={`/work/${data?.featuredLeft?.slug}`}
            role="group"
          >
            {isPending && <Skeleton w="100%" h="xl" borderRadius="3xl" />}
            {data && (
              <SimpleGrid
                columns={1}
                bg="background"
                boxShadow="lg"
                borderRadius="3xl"
                position="relative"
                overflow="hidden"
                h="100%"
              >
                <Flex flexDir="column" p={{base: '8', xl: '16'}}>
                  <Img src={data.featuredLeft.icon} h="14" mb="4" mr="auto" />
                  <Heading size="xl">{data.featuredLeft.title}</Heading>
                  <Text
                    color="brand.purple.solid"
                    transition="all 0.25s ease-in-out"
                    _groupHover={{
                      filter: 'brightness(75%)',
                    }}
                    textTransform="uppercase"
                    letterSpacing="0.25rem"
                    mb="2"
                  >
                    {data.featuredLeft.subtitle}
                  </Text>
                  <Text fontWeight="normal">
                    {data.featuredLeft.shortDescription}
                  </Text>
                </Flex>
                <Img
                  src={data.featuredLeft.cover}
                  objectFit="cover"
                  mt="auto"
                  borderTopLeftRadius="3xl"
                  mb={{base: '0rem', sm: '-4rem'}}
                  ml={{base: '1.8rem', sm: '4rem'}}
                  transition="all 0.25s ease-in-out"
                  boxShadow="lg"
                />
              </SimpleGrid>
            )}
          </GridItem>
          <GridItem
            area="small2"
            as={Link}
            href={`/work/${data?.featuredRight?.slug}`}
            role="group"
          >
            {isPending && <Skeleton w="100%" h="xl" borderRadius="3xl" />}
            {data && (
              <SimpleGrid
                columns={1}
                bg="background"
                boxShadow="lg"
                borderRadius="3xl"
                position="relative"
                overflow="hidden"
                h="100%"
              >
                <Flex flexDir="column" p={{base: '8', xl: '16'}}>
                  <Img src={data.featuredRight.icon} h="16" mb="4" mr="auto" />
                  <Heading size="xl">{data.featuredRight.title}</Heading>
                  <Text
                    color="brand.green.solid"
                    transition="all 0.25s ease-in-out"
                    _groupHover={{
                      filter: 'brightness(75%)',
                    }}
                    textTransform="uppercase"
                    letterSpacing="0.25rem"
                    mb="2"
                  >
                    {data.featuredRight.subtitle}
                  </Text>
                  <Text fontWeight="normal">
                    {data.featuredRight.shortDescription}
                  </Text>
                </Flex>
                <Img
                  src={data.featuredRight.cover}
                  objectFit="cover"
                  mt="auto"
                  borderTopLeftRadius="3xl"
                  mb={{base: '0rem', sm: '-4rem'}}
                  ml={{base: '1.8rem', sm: '4rem'}}
                  transition="all 0.25s ease-in-out"
                  boxShadow="lg"
                />
              </SimpleGrid>
            )}
          </GridItem>
        </Grid>
      </FlexSection>

      <Flex justifyContent="center" my="8">
        <ButtonLink href="/work">see everything</ButtonLink>
      </Flex>

      <Section my="32" position="relative">
        <SimpleGrid columns={{base: 1, md: 2}} gap="10">
          <Img
            src="/about/headshot-black.jpeg"
            borderRadius="3xl"
            h={{base: 'sm', sm: 'lg', md: 'xl'}}
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
              <ButtonLink href="/about">see more</ButtonLink>
            </Box>
          </Flex>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Home;
