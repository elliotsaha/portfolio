import { Box, BoxProps } from "@chakra-ui/react";

interface BlobProps extends BoxProps {
  bg: string;
  size: string;
  blur: string;
}

export const Blob = ({ bg, size, blur, ...props }: BlobProps) => {
  return (
    <Box
      bg={bg}
      w={size}
      h={size}
      filter={`blur(${blur})`}
      borderRadius="full"
      zIndex="-1"
      {...props}
    />
  );
};
