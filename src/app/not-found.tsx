'use client';
import {Container, Box, Flex, Text} from '@chakra-ui/react';
import {BrandHeading, FlexSection} from '@/components/factory';
import {ButtonLink, Blob} from '@/components';

const NotFoundPage = () => {
  return (
    <Container maxW="container.xl">
      <FlexSection
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        position="relative"
      >
        <Blob
          size="2xl"
          bg="brand.blue.blur"
          blur="15rem"
          position="absolute"
          top="42"
          left="24"
        />
        <Blob
          size="2xl"
          bg="brand.purple.blur"
          blur="10rem"
          position="absolute"
          top="42"
          right="0"
        />
        <Box>
          <BrandHeading>404</BrandHeading>
          <Text mb="6" textAlign="center" maxW="48" mx="auto" mt="-2">
            It looks like your lost...
          </Text>
          <ButtonLink href="/">go back home</ButtonLink>
        </Box>
      </FlexSection>
    </Container>
  );
};

export default NotFoundPage;
